import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Plus, Trash2, RotateCcw, Download, BookOpen, Award, TrendingUp, Star, Sparkles } from 'lucide-react'

const SGPACalculator = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: '', credits: '', grade: '', gradePoint: 0 }
  ])
  const [sgpa, setSgpa] = useState(0)
  const [totalCredits, setTotalCredits] = useState(0)
  const [totalGradePoints, setTotalGradePoints] = useState(0)

  const gradeScale = {
    'S': 10,
    'A+': 9,
    'A': 8,
    'B': 7,
    'C': 6,
    'D': 5,
    'E': 0,
    'F': 0
  }

  const gradeDescriptions = {
    'S': 'Outstanding (>=91%)',
    'A+': 'Excellent (>=86% and <=90%)',
    'A': 'Very Good (>=75% and <=85%)',
    'B': 'Good (>=66% and <=74%)',
    'C': 'Satisfactory (>=55% and <=65%)',
    'D': 'Pass (>=50% and <=54%)',
    'E': 'Absent',
    'F': 'Fail (<50%)'
  }

  useEffect(() => {
    calculateSGPA()
  }, [subjects])

  const calculateSGPA = () => {
    let totalCreditsSum = 0
    let totalGradePointsSum = 0

    subjects.forEach(subject => {
      const credits = parseFloat(subject.credits) || 0
      const gradePoint = subject.gradePoint || 0
      
      totalCreditsSum += credits
      totalGradePointsSum += credits * gradePoint
    })

    setTotalCredits(totalCreditsSum)
    setTotalGradePoints(totalGradePointsSum)
    
    if (totalCreditsSum > 0) {
      setSgpa(totalGradePointsSum / totalCreditsSum)
    } else {
      setSgpa(0)
    }
  }

  const addSubject = () => {
    const newSubject = {
      id: Date.now(),
      name: '',
      credits: '',
      grade: '',
      gradePoint: 0
    }
    setSubjects([...subjects, newSubject])
  }

  const removeSubject = (id) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(subject => subject.id !== id))
    }
  }

  const updateSubject = (id, field, value) => {
    setSubjects(subjects.map(subject => {
      if (subject.id === id) {
        const updatedSubject = { ...subject, [field]: value }
        
        if (field === 'grade') {
          updatedSubject.gradePoint = gradeScale[value] || 0
        }
        
        return updatedSubject
      }
      return subject
    }))
  }

  const resetCalculator = () => {
    setSubjects([{ id: 1, name: '', credits: '', grade: '', gradePoint: 0 }])
    setSgpa(0)
    setTotalCredits(0)
    setTotalGradePoints(0)
  }

  const getSGPAColor = (sgpa) => {
    if (sgpa >= 9) return 'from-emerald-500 to-green-500'
    if (sgpa >= 8) return 'from-blue-500 to-cyan-500'
    if (sgpa >= 7) return 'from-yellow-500 to-orange-500'
    if (sgpa >= 6) return 'from-orange-500 to-red-500'
    return 'from-red-500 to-pink-500'
  }

  const getSGPAGrade = (sgpa) => {
    if (sgpa >= 9) return 'Outstanding'
    if (sgpa >= 8) return 'Excellent'
    if (sgpa >= 7) return 'Very Good'
    if (sgpa >= 6) return 'Good'
    if (sgpa >= 5) return 'Average'
    return 'Below Average'
  }

  const exportResults = () => {
    const results = {
      subjects: subjects.filter(s => s.name && s.credits && s.grade),
      sgpa: sgpa.toFixed(4),
      totalCredits,
      totalGradePoints: totalGradePoints.toFixed(2),
      grade: getSGPAGrade(sgpa),
      calculatedOn: new Date().toLocaleDateString()
    }
    
    const dataStr = JSON.stringify(results, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `SGPA_Results_${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center"
            >
              <Calculator className="w-6 h-6 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              SGPA Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Calculate your Semester Grade Point Average with our beautiful and intuitive calculator
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-4 lg:p-8"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-2 lg:space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl lg:text-3xl font-bold text-gray-800 dark:text-white">
                    Enter Your Subjects
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={addSubject}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-medium shadow-lg transition-all duration-200 text-sm lg:text-base"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Subject</span>
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetCalculator}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-xl font-medium shadow-lg transition-all duration-200 text-sm lg:text-base"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset</span>
                  </motion.button>
                </div>
              </div>

              {/* Subject Headers */}
              <div className="hidden lg:grid grid-cols-12 gap-4 mb-6 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                <div className="col-span-4">Subject Name</div>
                <div className="col-span-2">Credits</div>
                <div className="col-span-3">Grade</div>
                <div className="col-span-2">Grade Points</div>
                <div className="col-span-1">Action</div>
              </div>

              {/* Subjects List */}
              <div className="space-y-4 max-h-80 lg:max-h-96 overflow-y-auto">
                {subjects.map((subject, index) => (
                  <motion.div
                    key={subject.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="lg:grid lg:grid-cols-12 lg:gap-4 lg:items-center p-4 lg:p-6 bg-gradient-to-r from-white to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600 space-y-3 lg:space-y-0"
                  >
                    <div className="lg:col-span-4">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 lg:hidden">Subject Name</label>
                      <input
                        type="text"
                        placeholder="e.g., Mathematics"
                        value={subject.name}
                        onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                        className="w-full px-3 py-2 lg:px-4 lg:py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200 text-sm lg:text-base"
                      />
                    </div>
                    
                    <div className="lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 lg:hidden">Credits</label>
                      <input
                        type="number"
                        placeholder="Credits"
                        min="0"
                        max="10"
                        step="0.5"
                        value={subject.credits}
                        onChange={(e) => updateSubject(subject.id, 'credits', e.target.value)}
                        className="w-full px-3 py-2 lg:px-4 lg:py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200 text-sm lg:text-base"
                      />
                    </div>
                    
                    <div className="lg:col-span-3">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 lg:hidden">Grade</label>
                      <select
                        value={subject.grade}
                        onChange={(e) => updateSubject(subject.id, 'grade', e.target.value)}
                        className="w-full px-3 py-2 lg:px-4 lg:py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200 text-sm lg:text-base"
                      >
                        <option value="">Select Grade</option>
                        {Object.entries(gradeScale).map(([grade, points]) => (
                          <option key={grade} value={grade}>
                            {grade} ({points} points)
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 lg:hidden">Grade Points</label>
                      <div className="px-3 py-2 lg:px-4 lg:py-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/50 dark:to-purple-900/50 rounded-xl text-center font-bold text-gray-800 dark:text-white text-sm lg:text-base">
                        {subject.gradePoint.toFixed(1)}
                      </div>
                    </div>
                    
                    <div className="lg:col-span-1 flex justify-center lg:justify-start">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => removeSubject(subject.id)}
                        disabled={subjects.length === 1}
                        className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Trash2 className="w-5 h-5" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
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
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Results
                </h2>
              </div>

              {/* SGPA Display */}
              <div className="text-center mb-8">
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`bg-gradient-to-br ${getSGPAColor(sgpa)} rounded-3xl p-8 mb-6 shadow-xl`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <Sparkles className="w-6 h-6 text-white mr-2" />
                    <span className="text-lg font-medium text-white">Your SGPA</span>
                  </div>
                  <div className="text-5xl font-bold text-white mb-3">
                    {sgpa.toFixed(4)}
                  </div>
                  <div className="text-lg font-medium text-white/90">
                    {getSGPAGrade(sgpa)}
                  </div>
                </motion.div>
              </div>

              {/* Statistics */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">Total Credits:</span>
                  <span className="font-bold text-xl text-gray-800 dark:text-white">{totalCredits}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">Grade Points:</span>
                  <span className="font-bold text-xl text-gray-800 dark:text-white">{totalGradePoints.toFixed(2)}</span>
                </div>
                
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">Subjects:</span>
                  <span className="font-bold text-xl text-gray-800 dark:text-white">
                    {subjects.filter(s => s.name && s.credits && s.grade).length}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={exportResults}
                  disabled={sgpa === 0}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-medium shadow-lg transition-all duration-200 disabled:cursor-not-allowed"
                >
                  <Download className="w-5 h-5" />
                  <span>Export Results</span>
                </motion.button>
                
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Results calculated based on SASTRA University grading system
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Grade Scale Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <Star className="w-6 h-6 mr-3 text-yellow-500" />
            SASTRA University Grading Scale
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(gradeDescriptions).map(([grade, description]) => (
              <motion.div
                key={grade}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-bold text-2xl text-gray-800 dark:text-white">{grade}</span>
                  <span className="font-medium text-lg text-blue-600 dark:text-blue-400">{gradeScale[grade]} pts</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{description}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 rounded-3xl p-8 border border-blue-200 dark:border-blue-800"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-green-500" />
            Tips for Better SGPA
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6">
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">Academic Tips:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Attend all classes regularly</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Complete assignments on time</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Participate in class discussions</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Form study groups with classmates</li>
              </ul>
            </div>
            
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6">
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">Exam Preparation:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Start preparation early</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Use previous year papers</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Clarify doubts with faculty</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Practice time management</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SGPACalculator