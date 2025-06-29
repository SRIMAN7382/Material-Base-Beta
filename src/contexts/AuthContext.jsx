import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const GOOGLE_CLIENT_ID =
    import.meta.env.VITE_GOOGLE_CLIENT_ID ||
    '232829986455-td4dq4a6c6ai93g96jupulk0ae2bni7d.apps.googleusercontent.com';

  const ALLOWED_DOMAIN = 'sastra.ac.in';

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        if (userData.email && userData.email.endsWith(`@${ALLOWED_DOMAIN}`)) {
          setUser(userData);
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem('user');
        }
      } catch (error) {
        console.error('Error parsing saved user data:', error);
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  const initializeGoogleAuth = () => {
    return new Promise((resolve) => {
      if (window.google) {
        // Get current origin for redirect URI
        const currentOrigin = window.location.origin;
        
        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: handleGoogleResponse,
          hosted_domain: ALLOWED_DOMAIN,
          auto_select: false,
          // Use current origin as redirect URI
          redirect_uri: currentOrigin,
          // Add additional configuration for Bolt compatibility
          ux_mode: 'popup',
          context: 'signin'
        });
        resolve();
      } else {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => {
          const currentOrigin = window.location.origin;
          
          window.google.accounts.id.initialize({
            client_id: GOOGLE_CLIENT_ID,
            callback: handleGoogleResponse,
            hosted_domain: ALLOWED_DOMAIN,
            auto_select: false,
            redirect_uri: currentOrigin,
            ux_mode: 'popup',
            context: 'signin'
          });
          resolve();
        };
        document.head.appendChild(script);
      }
    });
  };

  const handleGoogleResponse = async (response) => {
    try {
      const userInfo = parseJwt(response.credential);

      if (!userInfo.email || !userInfo.email.endsWith(`@${ALLOWED_DOMAIN}`)) {
        throw new Error(`Only ${ALLOWED_DOMAIN} email addresses are allowed`);
      }

      const userData = {
        id: userInfo.sub,
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
        domain: userInfo.hd,
        loginTime: new Date().toISOString(),
      };

      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userData));
    } catch (error) {
      console.error('Authentication error:', error);
      alert(error.message || 'Authentication failed. Please use your SASTRA college email.');
    }
  };

  const parseJwt = (token) => {
    try {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      throw new Error('Invalid token');
    }
  };

  const signInWithGoogle = async () => {
    try {
      await initializeGoogleAuth();
      
      // Use popup mode for better compatibility with Bolt
      window.google.accounts.id.prompt({
        moment_callback: (notification) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            // Fallback to manual button click
            console.log('One Tap not displayed, using button fallback');
          }
        }
      });
    } catch (error) {
      console.error('Sign in error:', error);
      // Show user-friendly error message
      alert('Sign in failed. Please try again or contact support if the issue persists.');
    }
  };

  const signInWithPopup = async () => {
    try {
      await initializeGoogleAuth();
      
      // Clear any existing button first
      const buttonContainer = document.getElementById('google-signin-button');
      if (buttonContainer) {
        buttonContainer.innerHTML = '';
      }
      
      // Render the Google Sign-In button
      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-button'),
        {
          theme: 'outline',
          size: 'large',
          text: 'signin_with',
          shape: 'rectangular',
          width: '100%'
        }
      );
    } catch (error) {
      console.error('Popup sign in error:', error);
      // Show fallback message
      const buttonContainer = document.getElementById('google-signin-button');
      if (buttonContainer) {
        buttonContainer.innerHTML = `
          <div class="text-center p-4 text-red-600">
            <p>Google Sign-In temporarily unavailable.</p>
            <p class="text-sm mt-2">Please try refreshing the page or contact support.</p>
          </div>
        `;
      }
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
    if (window.google) {
      window.google.accounts.id.disableAutoSelect();
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    signInWithGoogle,
    signInWithPopup,
    logout,
    ALLOWED_DOMAIN,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};