import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Plus, Trash2, RotateCcw, Download, BookOpen, Award, TrendingUp, Target } from 'lucide-react'

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([
    { id: 1, semester: 1, sgpa: '', credits: '' }
  ])
  const [cgpa, setCgpa] = useState(0)
  const [totalCredits, setTotalCredits] = useState(0)
  const [totalGradePoints, setTotalGradePoints] = useState(0)

  useEffect(() => {
    calculateCGPA()
  }, [semesters])

  const calculateCGPA = () => {
    let totalCreditsSum = 0
    let totalGradePointsSum = 0

    semesters.forEach(semester => {
      const credits = parseFloat(semester.credits) || 0
      const sgpa = parseFloat(semester.sgpa) || 0
      
      totalCreditsSum += credits
      totalGradePointsSum += credits * sgpa
    })

    setTotalCredits(totalCreditsSum)
    setTotalGradePoints(totalGradePointsSum)
    
    if (totalCreditsSum > 0) {
      setCgpa(totalGradePointsSum / totalCreditsSum)
    } else {
      setCgpa(0)
    }
  }

  const addSemester = () => {
    const newSemester = {
      id: Date.now(),
      semester: semesters.length + 1,
      sgpa: '',
      credits: ''
    }
    setSemesters([...semesters, newSemester])
  }

  const removeSemester = (id) => {
    if (semesters.length > 1) {
      setSemesters(semesters.filter(semester => semester.id !== id))
    }
  }

  const updateSemester = (id, field, value) => {
    setSemesters(semesters.map(semester => {
      if (semester.id === id) {
        return { ...semester, [field]: value }
      }
      return semester
    }))
  }

  const resetCalculator = () => {
    setSemesters([{ id: 1, semester: 1, sgpa: '', credits: '' }])
    setCgpa(0)
    setTotalCredits(0)
    setTotalGradePoints(0)
  }

  const getCGPAColor = (cgpa) => {
    if (cgpa >= 9) return 'text-green-600 dark:text-green-400'
    if (cgpa >= 8) return 'text-blue-600 dark:text-blue-400'
    if (cgpa >= 7) return 'text-yellow-600 dark:text-yellow-400'
    if (cgpa >= 6) return 'text-orange-600 dark:text-orange-400'
    return 'text-red-600 dark:text-red-400'
  }

  const getCGPAGrade = (cgpa) => {
    if (cgpa >= 9) return 'Outstanding'
    if (cgpa >= 8) return 'Excellent'
    if (cgpa >= 7) return 'Very Good'
    if (cgpa >= 6) return 'Good'
    if (cgpa >= 5) return 'Average'
    return 'Below Average'
  }

  const exportResults = () => {
    const results = {
      semesters: semesters.filter(s => s.sgpa && s.credits),
      cgpa: cgpa.toFixed(4),
      totalCredits,
      totalGradePoints: totalGradePoints.toFixed(2),
      grade: getCGPAGrade(cgpa),
      calculatedOn: new Date().toLocaleDateString()
    }
    
    const dataStr = JSON.stringify(results, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `CGPA_Results_${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Target className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              CGPA Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate your Cumulative Grade Point Average for SASTRA University
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Enter Semester Data
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={addSemester}
                    className="flex items-center space-x-2 bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Semester</span>
                  </button>
                  <button
                    onClick={resetCalculator}
                    className="flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Semester Headers */}
              <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                <div className="col-span-3">Semester</div>
                <div className="col-span-3">SGPA</div>
                <div className="col-span-3">Credits</div>
                <div className="col-span-2">Grade Points</div>
                <div className="col-span-1">Action</div>
              </div>

              {/* Semesters List */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {semesters.map((semester, index) => {
                  const gradePoints = (parseFloat(semester.sgpa) || 0) * (parseFloat(semester.credits) || 0)
                  
                  return (
                    <motion.div
                      key={semester.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="grid grid-cols-12 gap-4 items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <div className="col-span-3">
                        <input
                          type="number"
                          placeholder="Semester"
                          min="1"
                          max="8"
                          value={semester.semester}
                          onChange={(e) => updateSemester(semester.id, 'semester', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                        />
                      </div>
                      
                      <div className="col-span-3">
                        <input
                          type="number"
                          placeholder="SGPA"
                          min="0"
                          max="10"
                          step="0.01"
                          value={semester.sgpa}
                          onChange={(e) => updateSemester(semester.id, 'sgpa', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                        />
                      </div>
                      
                      <div className="col-span-3">
                        <input
                          type="number"
                          placeholder="Credits"
                          min="0"
                          max="30"
                          step="0.5"
                          value={semester.credits}
                          onChange={(e) => updateSemester(semester.id, 'credits', e.target.value)}
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                        />
                      </div>
                      
                      <div className="col-span-2">
                        <div className="px-3 py-2 bg-gray-100 dark:bg-gray-600 rounded-lg text-center font-medium text-gray-800 dark:text-white">
                          {gradePoints.toFixed(1)}
                        </div>
                      </div>
                      
                      <div className="col-span-1">
                        <button
                          onClick={() => removeSemester(semester.id)}
                          disabled={semesters.length === 1}
                          className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Results
              </h2>

              {/* CGPA Display */}
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-6 h-6 text-primary mr-2" />
                    <span className="text-lg font-medium text-gray-600 dark:text-gray-300">Your CGPA</span>
                  </div>
                  <div className={`text-4xl font-bold ${getCGPAColor(cgpa)} mb-2`}>
                    {cgpa.toFixed(4)}
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {getCGPAGrade(cgpa)}
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-600 dark:text-gray-300">Total Credits:</span>
                  <span className="font-bold text-gray-800 dark:text-white">{totalCredits}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-600 dark:text-gray-300">Grade Points:</span>
                  <span className="font-bold text-gray-800 dark:text-white">{totalGradePoints.toFixed(2)}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-600 dark:text-gray-300">Semesters:</span>
                  <span className="font-bold text-gray-800 dark:text-white">
                    {semesters.filter(s => s.sgpa && s.credits).length}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={exportResults}
                  disabled={cgpa === 0}
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4" />
                  <span>Export Results</span>
                </button>
                
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Results are calculated based on SASTRA University grading system
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CGPA Scale Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            CGPA Classification
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
              <div className="font-bold text-green-800 dark:text-green-300">First Class with Distinction</div>
              <div className="text-sm text-green-600 dark:text-green-400">CGPA ≥ 8.5</div>
            </div>
            
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <div className="font-bold text-blue-800 dark:text-blue-300">First Class</div>
              <div className="text-sm text-blue-600 dark:text-blue-400">CGPA 7.5 - 8.49</div>
            </div>
            
            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="font-bold text-yellow-800 dark:text-yellow-300">Second Class</div>
              <div className="text-sm text-yellow-600 dark:text-yellow-400">CGPA 6.5 - 7.49</div>
            </div>
            
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
              <div className="font-bold text-orange-800 dark:text-orange-300">Third Class</div>
              <div className="text-sm text-orange-600 dark:text-orange-400">CGPA 5.5 - 6.49</div>
            </div>
            
            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
              <div className="font-bold text-red-800 dark:text-red-300">Pass</div>
              <div className="text-sm text-red-600 dark:text-red-400">CGPA 5.0 - 5.49</div>
            </div>
            
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
              <div className="font-bold text-gray-800 dark:text-gray-300">Fail</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">CGPA < 5.0</div>
            </div>
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Tips for Better CGPA
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Long-term Strategy:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Maintain consistency across all semesters</li>
                <li>• Focus on understanding concepts deeply</li>
                <li>• Build strong relationships with faculty</li>
                <li>• Participate in academic activities</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Recovery Tips:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Identify weak subjects early</li>
                <li>• Seek help from seniors and faculty</li>
                <li>• Use additional learning resources</li>
                <li>• Plan improvement strategies</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CGPACalculator