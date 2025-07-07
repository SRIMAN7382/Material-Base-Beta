import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, User, Calendar, Send, CheckCircle, AlertCircle, X } from 'lucide-react';

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
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-indigo-900/20 dark:to-purple-900/20 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Contribute Materials</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">Help by sharing your study materials with just a few fields</p>
        </motion.div>

        <motion.form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700">
          <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300"><User className="w-4 h-4" /><span>Full Name *</span></label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Enter your full name" className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white" required />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300"><FileText className="w-4 h-4" /><span>Registration Number *</span></label>
            <input type="text" name="regNumber" value={formData.regNumber} onChange={handleInputChange} placeholder="e.g., 311621104XXX" className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white" required />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300"><Calendar className="w-4 h-4" /><span>Year of Study *</span></label>
            <select name="year" value={formData.year} onChange={handleInputChange} className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white" required>
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300"><FileText className="w-4 h-4" /><span>Description</span></label>
            <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Optional description..." rows="3" className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-indigo-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white" />
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} className="space-y-2">
            <label className="flex items-center space-x-2 text-sm font-semibold text-gray-700 dark:text-gray-300"><Upload className="w-4 h-4" /><span>Upload Files *</span></label>
            <div className={`relative border-2 border-dashed rounded-xl p-6 text-center transition-all duration-300 ${dragActive ? 'border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20' : 'border-gray-300 dark:border-gray-600'}`} onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}>
              <input type="file" multiple onChange={handleFileInput} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" accept=".pdf,.doc,.docx,.ppt,.pptx,.txt,.jpg,.jpeg,.png" />
              <p className="text-gray-600 dark:text-gray-300">{dragActive ? 'Drop files here!' : 'Drag & drop files or click to select'}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Max 10MB each. PDF, DOC, PPT, TXT, JPG, PNG supported.</p>
            </div>

            {files.length > 0 && (
              <div className="space-y-2 max-h-40 overflow-y-auto mt-3">
                {files.map(file => (
                  <motion.div key={file.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="flex justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="flex items-center space-x-2"><FileText className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /><span className="text-sm text-gray-800 dark:text-white">{file.name} ({formatFileSize(file.size)})</span></div>
                    <button onClick={() => removeFile(file.id)} className="p-1 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"><X className="w-4 h-4" /></button>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          <motion.button type="submit" disabled={!isFormValid || isSubmitting} whileTap={{ scale: 0.98 }} className={`w-full flex items-center justify-center space-x-3 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 ${isFormValid && !isSubmitting ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white' : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'}`}>
            {isSubmitting ? (<><motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-6 h-6 border-2 border-white border-t-transparent rounded-full" /><span>Submitting...</span></>) : (<><Send className="w-6 h-6" /><span>Submit Materials</span></>)}
          </motion.button>
        </motion.form>

        <AnimatePresence>{submitStatus && (<motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 50, scale: 0.9 }} className="fixed bottom-8 right-8 z-50"><div className={`p-6 rounded-2xl shadow-2xl border-2 ${submitStatus === 'success' ? 'bg-green-50 border-green-200 text-green-800' : 'bg-red-50 border-red-200 text-red-800'}`}><div className="flex items-center space-x-3">{submitStatus === 'success' ? (<CheckCircle className="w-6 h-6 text-green-600" />) : (<AlertCircle className="w-6 h-6 text-red-600" />)}<div><h4 className="font-bold">{submitStatus === 'success' ? 'Success!' : 'Error!'}</h4><p className="text-sm">{submitStatus === 'success' ? 'Your materials have been submitted successfully!' : 'Failed to submit materials. Please try again.'}</p></div></div></div></motion.div>)}</AnimatePresence>
      </div>
    </div>
  );
};

export default ContributeMaterials;
