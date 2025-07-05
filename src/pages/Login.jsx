import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, Shield, Users, GraduationCap, Mail, AlertCircle } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

const Login = () => {
  const { user, isAuthenticated, signInWithGoogle, signInWithPopup, ALLOWED_DOMAIN } = useAuth()
  const [showGoogleButton, setShowGoogleButton] = useState(false)

  useEffect(() => {
    // Initialize Google Sign-In button
    const timer = setTimeout(() => {
      signInWithPopup()
      setShowGoogleButton(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [signInWithPopup])

  // Redirect if already authenticated
  if (isAuthenticated && user) {
    return <Navigate to="/" replace />
  }

  const features = [
    {
      icon: BookOpen,
      title: "Access Study Materials",
      description: "Get access to all semester materials, PDFs, and study resources"
    },
    {
      icon: GraduationCap,
      title: "Exam Papers",
      description: "Download previous year question papers for better preparation"
    },
    {
      icon: Users,
      title: "Academic Calendar",
      description: "Stay updated with important dates and academic events"
    },
    {
      icon: Shield,
      title: "Secure Access",
      description: "Your data is protected with college-verified authentication"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Branding and Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 lg:space-y-8 text-center lg:text-left"
          >
            {/* Logo and Title */}
            <div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="flex items-center justify-center lg:justify-start space-x-3 mb-4 lg:mb-6"
              >
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">Material Base</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-300">SASTRA University</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 lg:mb-4">
                  Welcome Back, Sastraite!
                </h2>
                <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300">
                  Access your academic resources with your college account
                </p>
              </motion.div>
            </div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6"
            >
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start space-x-3 text-left"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                        <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm lg:text-base">{feature.title}</h3>
                      <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 lg:p-12 mt-8 lg:mt-0"
          >
            <div className="text-center mb-6 lg:mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6"
              >
                <Shield className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
              </motion.div>
              
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Secure Login
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
                Sign in with your SASTRA college account
              </p>
            </div>

            {/* Domain Restriction Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3 lg:p-4 mb-4 lg:mb-6"
            >
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900 dark:text-blue-300 text-sm lg:text-base">College Email Required</h4>
                  <p className="text-xs lg:text-sm text-blue-700 dark:text-blue-400 mt-1">
                    Only <span className="font-mono bg-blue-100 dark:bg-blue-900/40 px-1 rounded text-xs">@{ALLOWED_DOMAIN}</span> email addresses are allowed
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Google Sign-In Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 }}
              className="space-y-4"
            >
              <div 
                id="google-signin-button" 
                className={`flex justify-center ${!showGoogleButton ? 'opacity-50' : ''}`}
              />
              
              {!showGoogleButton && (
                <div className="flex items-center justify-center space-x-2 text-gray-500 dark:text-gray-400">
                  <div className="loading-spinner w-4 h-4"></div>
                  <span className="text-sm">Loading Google Sign-In...</span>
                </div>
              )}

              {/* Alternative Sign-In Button */}
              <button
                onClick={signInWithGoogle}
                className="w-full flex items-center justify-center space-x-3 bg-white dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 lg:px-6 lg:py-3 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors duration-200 shadow-sm text-sm lg:text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Continue with Google</span>
              </button>
            </motion.div>

            {/* Security Notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-4 lg:mt-6 text-center"
            >
              <div className="flex items-center justify-center space-x-2 text-xs lg:text-sm text-gray-500 dark:text-gray-400">
                <AlertCircle className="w-4 h-4" />
                <span>Your data is secure and protected</span>
              </div>
            </motion.div>

            {/* Terms and Privacy */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 }}
              className="mt-4 lg:mt-6 text-center text-xs text-gray-500 dark:text-gray-400"
            >
              By signing in, you agree to our{' '}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Login