import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Calculator, TrendingUp, AlertTriangle, CheckCircle, Clock, Target, Award, Sparkles } from 'lucide-react'

const AttendanceCalculator = () => {
  const [credits, setCredits] = useState('')
  const [bunked, setBunked] = useState('')
  const [canBunk, setCanBunk] = useState(0)
  const [calculated, setCalculated] = useState(false)

  // Calculate function based on the original logic
  const calculateCanBunk = (credits, bunked) => {
    const totalCredits = parseFloat(credits) || 0
    const bunkedClasses = parseFloat(bunked) || 0
    
    if (totalCredits <= 0) return 0
    
    // Assuming 75% attendance requirement
    const requiredAttendance = 0.75
    const maxBunkable = Math.floor(totalCredits * (1 - requiredAttendance))
    const remainingBunkable = Math.max(0, maxBunkable - bunkedClasses)
    
    return remainingBunkable
  }

  const handleCalculate = () => {
    const result = calculateCanBunk(credits, bunked)
    setCanBunk(result)
    setCalculated(true)
  }

  const getAttendancePercentage = () => {
    const totalCredits = parseFloat(credits) || 0
    const bunkedClasses = parseFloat(bunked) || 0
    
    if (totalCredits <= 0) return 0
    
    const attendedClasses = totalCredits - bunkedClasses
    return Math.max(0, (attendedClasses / totalCredits) * 100)
  }

  const getStatusColor = () => {
    const percentage = getAttendancePercentage()
    if (percentage >= 75) return 'from-emerald-500 to-green-500'
    if (percentage >= 65) return 'from-yellow-500 to-orange-500'
    return 'from-red-500 to-pink-500'
  }

  const getStatusMessage = () => {
    const percentage = getAttendancePercentage()
    if (percentage >= 75) return 'Safe Attendance'
    if (percentage >= 65) return 'Warning Zone'
    return 'Critical - Risk of Detention'
  }

  const reset = () => {
    setCredits('')
    setBunked('')
    setCanBunk(0)
    setCalculated(false)
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center"
            >
              <Users className="w-6 h-6 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Class Skippability Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Calculate how many classes you can skip while maintaining the required attendance percentage
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
                  Enter Class Details
                </h2>
              </div>

              <div className="space-y-8">
                {/* Credits Input */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-3"
                >
                  <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Total Classes Conducted
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={credits}
                    onChange={(e) => setCredits(e.target.value)}
                    placeholder="Enter total number of classes"
                    className="w-full px-6 py-4 text-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total number of classes conducted so far in the semester
                  </p>
                </motion.div>

                {/* Bunked Input */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="space-y-3"
                >
                  <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300">
                    Classes Already Skipped
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={bunked}
                    onChange={(e) => setBunked(e.target.value)}
                    placeholder="Enter number of classes skipped"
                    className="w-full px-6 py-4 text-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200"
                  />
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Number of classes you have already missed or skipped
                  </p>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCalculate}
                    disabled={!credits || !bunked}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-medium shadow-lg transition-all duration-200 disabled:cursor-not-allowed"
                  >
                    <Calculator className="w-5 h-5" />
                    <span>Calculate</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={reset}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-4 px-6 rounded-xl font-medium shadow-lg transition-all duration-200"
                  >
                    <Target className="w-5 h-5" />
                    <span>Reset</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 sticky top-24"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Results
                </h2>
              </div>

              {calculated && (
                <>
                  {/* Main Result */}
                  <div className="text-center mb-8">
                    <motion.div
                      animate={{ scale: [1, 1.02, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`bg-gradient-to-br ${getStatusColor()} rounded-3xl p-8 mb-6 shadow-xl`}
                    >
                      <div className="flex items-center justify-center mb-3">
                        <Sparkles className="w-6 h-6 text-white mr-2" />
                        <span className="text-lg font-medium text-white">Classes You Can Skip</span>
                      </div>
                      <div className="text-5xl font-bold text-white mb-3">
                        {canBunk}
                      </div>
                      <div className="text-lg font-medium text-white/90">
                        {canBunk > 0 ? 'More Classes' : 'No More Classes'}
                      </div>
                    </motion.div>
                  </div>

                  {/* Attendance Status */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/30 dark:to-teal-900/30 rounded-xl">
                      <span className="text-gray-600 dark:text-gray-300 font-medium">Current Attendance:</span>
                      <span className="font-bold text-xl text-gray-800 dark:text-white">
                        {getAttendancePercentage().toFixed(1)}%
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl">
                      <span className="text-gray-600 dark:text-gray-300 font-medium">Status:</span>
                      <span className="font-bold text-lg text-gray-800 dark:text-white">
                        {getStatusMessage()}
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl">
                      <span className="text-gray-600 dark:text-gray-300 font-medium">Classes Attended:</span>
                      <span className="font-bold text-xl text-gray-800 dark:text-white">
                        {Math.max(0, (parseFloat(credits) || 0) - (parseFloat(bunked) || 0))}
                      </span>
                    </div>
                  </div>

                  {/* Warning/Success Message */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-6 rounded-2xl border ${
                      getAttendancePercentage() >= 75 
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' 
                        : 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {getAttendancePercentage() >= 75 ? (
                        <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                      ) : (
                        <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                      )}
                      <div>
                        <h4 className={`font-semibold ${
                          getAttendancePercentage() >= 75 
                            ? 'text-green-800 dark:text-green-300' 
                            : 'text-red-800 dark:text-red-300'
                        }`}>
                          {getAttendancePercentage() >= 75 ? 'Good Attendance!' : 'Attendance Warning!'}
                        </h4>
                        <p className={`text-sm ${
                          getAttendancePercentage() >= 75 
                            ? 'text-green-600 dark:text-green-400' 
                            : 'text-red-600 dark:text-red-400'
                        }`}>
                          {getAttendancePercentage() >= 75 
                            ? 'You are meeting the attendance requirement.' 
                            : 'You need to improve your attendance to avoid detention.'}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </>
              )}

              {!calculated && (
                <div className="text-center py-12">
                  <Clock className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">
                    Enter your class details and click calculate to see results
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-emerald-500" />
            Attendance Guidelines
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl p-6">
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">SASTRA University Rules:</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <span>Minimum 75% attendance required for all courses</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <span>Students with less than 75% may face detention</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <span>Medical leave requires proper documentation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></span>
                  <span>Regular attendance improves academic performance</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl p-6">
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">Tips for Better Attendance:</h4>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span>Plan your schedule to avoid conflicts</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span>Set reminders for important classes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span>Communicate with faculty about genuine issues</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                  <span>Track your attendance regularly</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-gray-50 to-emerald-50 dark:from-gray-800/50 dark:to-emerald-900/20 rounded-3xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <Target className="w-6 h-6 mr-3 text-teal-500" />
            How the Calculator Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">Calculation Method:</h4>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 text-sm font-bold mt-0.5">1</span>
                  <span>Calculate current attendance percentage</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 text-sm font-bold mt-0.5">2</span>
                  <span>Determine maximum classes you can skip</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 text-sm font-bold mt-0.5">3</span>
                  <span>Subtract already skipped classes</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 text-sm font-bold mt-0.5">4</span>
                  <span>Show remaining skippable classes</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">Important Notes:</h4>
              <div className="space-y-2 text-gray-600 dark:text-gray-300">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">This is an estimate based on 75% requirement</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Always verify with your academic advisor</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Some courses may have stricter requirements</span>
                </div>
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">Regular attendance improves learning outcomes</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AttendanceCalculator