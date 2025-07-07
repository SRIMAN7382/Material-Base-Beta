import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, User, Calendar, Send, CheckCircle, AlertCircle, X, CloudUpload, Sparkles, Heart, Shield, Star } from 'lucide-react';

const ContributeMaterials = () => {
  const [formData, setFormData] = useState({
    name: '',
    regNumber: '',
    year: '',
    description: '',
  });
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  const handleInputChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleDrag = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(e.type === "dragenter" || e.type === "dragover"); };
  const handleDrop = (e) => { e.preventDefault(); e.stopPropagation(); setDragActive(false); if (e.dataTransfer.files[0]) handleFiles(e.dataTransfer.files); };
  const handleFileInput = (e) => { if (e.target.files) handleFiles(e.target.files); };
  const handleFiles = (fileList) => setFiles(prev => [...prev, ...Array.from(fileList).map(file => ({ id: Date.now() + Math.random(), file, name: file.name, size: file.size }))]);
  const removeFile = (id) => setFiles(prev => prev.filter(f => f.id !== id));
  const formatFileSize = (bytes) => bytes === 0 ? '0 Bytes' : `${parseFloat((bytes / Math.pow(1024, Math.floor(Math.log(bytes) / Math.log(1024)))).toFixed(2))} ${['Bytes', 'KB', 'MB', 'GB'][Math.floor(Math.log(bytes) / Math.log(1024))]}`;
  const isFormValid = formData.name && formData.regNumber && formData.year && files.length > 0;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const accessToken = await requestGoogleDriveAccessToken();
      if (!accessToken) throw new Error("Failed to get Google Drive access token");

      const formPayload = new FormData();
      for (const key in formData) formPayload.append(key, formData[key]);
      formPayload.append("accessToken", accessToken);
      formPayload.append("targetFolderId", "1fAJCdR6euXqcSW5h8J9KbpVavXjqCi2I");
      files.forEach(f => formPayload.append("files", f.file));

      const res = await fetch("https://material-base-backend-upload-production.up.railway.app/api/upload-materials", { method: "POST", body: formPayload });
      if (!res.ok) throw new Error("Upload failed");

      setSubmitStatus("success");
      setTimeout(() => resetForm(), 3000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({ name: '', regNumber: '', year: '', description: '' });
    setFiles([]);
    setSubmitStatus(null);
  };

  const requestGoogleDriveAccessToken = () => new Promise((resolve, reject) => {
    const client = window.google.accounts.oauth2.initTokenClient({
      client_id: "232829986455-fediihgklmi1d27lki2obhq8gqmm47n8.apps.googleusercontent.com",
      scope: "openid email profile https://www.googleapis.com/auth/drive.file",
      callback: (response) => {
        if (response.error) return reject(response.error);
        resolve(response.access_token);
      },
    });
    client.requestAccessToken();
  });

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-pink-400/20 to-blue-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <CloudUpload className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Contribute Materials
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2"
              />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Help your fellow Sastraites by sharing your study materials with just a few simple fields
          </motion.p>

          {/* Benefits Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Help Community</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Share knowledge and help fellow students succeed in their academic journey</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Get Recognition</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Your contributions will be credited and appreciated by the community</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 dark:border-gray-700/20"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-800 dark:text-white mb-2">Build Legacy</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Create a lasting impact for future generations of students</p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden"
        >
          {/* Form Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  Quick Material Upload
                </h2>
                <p className="text-indigo-100 mt-1">Simple form to share your study materials</p>
              </div>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <User className="w-4 h-4" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200 shadow-sm"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <FileText className="w-4 h-4" />
                  <span>Registration Number *</span>
                </label>
                <input
                  type="text"
                  name="regNumber"
                  value={formData.regNumber}
                  onChange={handleInputChange}
                  placeholder="e.g., 311621104XXX"
                  className="w-full px-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200 shadow-sm"
                  required
                />
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <Calendar className="w-4 h-4" />
                  <span>Year of Study *</span>
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200 shadow-sm"
                  required
                >
                  <option value="">Select Year</option>
                  <option value="1">1st Year</option>
                  <option value="2">2nd Year</option>
                  <option value="3">3rd Year</option>
                  <option value="4">4th Year</option>
                </select>
              </motion.div>

              <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <FileText className="w-4 h-4" />
                  <span>Description (Optional)</span>
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Brief description of your materials..."
                  rows="4"
                  className="w-full px-4 py-4 text-lg border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200 resize-none shadow-sm"
                />
              </motion.div>
            </div>

            {/* File Upload Section */}
            <motion.div whileHover={{ scale: 1.01 }} className="space-y-4">
              <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                <Upload className="w-4 h-4" />
                <span>Upload Files *</span>
              </label>
              
              <div
                className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 ${
                  dragActive 
                    ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20 scale-105' 
                    : 'border-gray-300 dark:border-gray-600 hover:border-indigo-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  multiple
                  onChange={handleFileInput}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.jpg,.jpeg,.png"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    scale: dragActive ? [1, 1.1, 1] : [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
                >
                  <CloudUpload className="w-10 h-10 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">
                  {dragActive ? 'Drop files here!' : 'Drag & drop files here'}
                </h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                  or click to browse files from your device
                </p>
                <div className="inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">
                  <Shield className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    PDF, DOC, PPT, TXT, JPG, PNG • Max 10MB each
                  </span>
                </div>
              </div>

              {/* File List */}
              <AnimatePresence>
                {files.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-800 dark:text-white text-lg">
                        Uploaded Files ({files.length})
                      </h4>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setFiles([])}
                        className="text-sm text-red-500 hover:text-red-700 font-medium"
                      >
                        Clear All
                      </motion.button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-48 overflow-y-auto">
                      {files.map((file) => (
                        <motion.div
                          key={file.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-600"
                        >
                          <div className="flex items-center space-x-3 flex-1 min-w-0">
                            <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                              <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-gray-800 dark:text-white text-sm truncate">
                                {file.name}
                              </p>
                              <p className="text-xs text-gray-500 dark:text-gray-400">
                                {formatFileSize(file.size)}
                              </p>
                            </div>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => removeFile(file.id)}
                            className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors duration-200 flex-shrink-0"
                          >
                            <X className="w-4 h-4" />
                          </motion.button>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Submit Button */}
            <motion.div className="pt-6">
              <motion.button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                whileHover={isFormValid && !isSubmitting ? { scale: 1.02 } : {}}
                whileTap={isFormValid && !isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full flex items-center justify-center space-x-3 py-5 px-8 rounded-3xl font-bold text-xl shadow-2xl transition-all duration-300 ${
                  isFormValid && !isSubmitting
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transform hover:shadow-3xl'
                    : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                    />
                    <span>Uploading Materials...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6" />
                    <span>Submit Materials</span>
                    <Sparkles className="w-5 h-5" />
                  </>
                )}
              </motion.button>
              
              <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                Your materials will be reviewed and made available to help other students
              </p>
            </motion.div>
          </form>
        </motion.div>

        {/* Success/Error Messages */}
        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.9 }}
              className="fixed bottom-8 right-8 z-50"
            >
              <div className={`p-6 rounded-3xl shadow-2xl border-2 backdrop-blur-xl ${
                submitStatus === 'success' 
                  ? 'bg-green-50/90 border-green-200 text-green-800' 
                  : 'bg-red-50/90 border-red-200 text-red-800'
              }`}>
                <div className="flex items-center space-x-3">
                  {submitStatus === 'success' ? (
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                  )}
                  <div>
                    <h4 className="font-bold text-lg">
                      {submitStatus === 'success' ? 'Success!' : 'Error!'}
                    </h4>
                    <p className="text-sm">
                      {submitStatus === 'success' 
                        ? 'Your materials have been submitted successfully!' 
                        : 'Failed to submit materials. Please try again.'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Guidelines Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8"
        >
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
              Quick Guidelines
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white">File Requirements:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Maximum 10MB per file</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">PDF, DOC, PPT, TXT, JPG, PNG formats</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Clear and readable content</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white">Content Guidelines:</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Original or properly attributed work</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Accurate and helpful information</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-600 dark:text-gray-300">Appropriate for academic use</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl border border-blue-200 dark:border-blue-800">
            <p className="text-blue-800 dark:text-blue-300 text-sm">
              <strong>Note:</strong> All submissions are reviewed before being made available. You'll receive confirmation once approved.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContributeMaterials;