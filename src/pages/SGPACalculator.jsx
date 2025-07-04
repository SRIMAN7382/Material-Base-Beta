import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Plus, Trash2, RotateCcw, Download, BookOpen, Award, TrendingUp } from 'lucide-react'

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
    if (sgpa >= 9) return 'text-green-600 dark:text-green-400'
    if (sgpa >= 8) return 'text-blue-600 dark:text-blue-400'
    if (sgpa >= 7) return 'text-yellow-600 dark:text-yellow-400'
    if (sgpa >= 6) return 'text-orange-600 dark:text-orange-400'
    return 'text-red-600 dark:text-red-400'
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
            <Calculator className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              SGPA Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate your Semester Grade Point Average for SASTRA University
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
                  Enter Your Subjects
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={addSubject}
                    className="flex items-center space-x-2 bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Subject</span>
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

              {/* Subject Headers */}
              <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                <div className="col-span-4">Subject Name</div>
                <div className="col-span-2">Credits</div>
                <div className="col-span-3">Grade</div>
                <div className="col-span-2">Grade Points</div>
                <div className="col-span-1">Action</div>
              </div>

              {/* Subjects List */}
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {subjects.map((subject, index) => (
                  <motion.div
                    key={subject.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="grid grid-cols-12 gap-4 items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                  >
                    <div className="col-span-4">
                      <input
                        type="text"
                        placeholder="e.g., Mathematics"
                        value={subject.name}
                        onChange={(e) => updateSubject(subject.id, 'name', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                      />
                    </div>
                    
                    <div className="col-span-2">
                      <input
                        type="number"
                        placeholder="Credits"
                        min="0"
                        max="10"
                        step="0.5"
                        value={subject.credits}
                        onChange={(e) => updateSubject(subject.id, 'credits', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                      />
                    </div>
                    
                    <div className="col-span-3">
                      <select
                        value={subject.grade}
                        onChange={(e) => updateSubject(subject.id, 'grade', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                      >
                        <option value="">Select Grade</option>
                        {Object.entries(gradeScale).map(([grade, points]) => (
                          <option key={grade} value={grade}>
                            {grade} ({points} points)
                          </option>
                        ))}
                      </select>
                    </div>
                    
                    <div className="col-span-2">
                      <div className="px-3 py-2 bg-gray-100 dark:bg-gray-600 rounded-lg text-center font-medium text-gray-800 dark:text-white">
                        {subject.gradePoint.toFixed(1)}
                      </div>
                    </div>
                    
                    <div className="col-span-1">
                      <button
                        onClick={() => removeSubject(subject.id)}
                        disabled={subjects.length === 1}
                        className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
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
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-24"
            >
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Results
              </h2>

              {/* SGPA Display */}
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6 mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-6 h-6 text-primary mr-2" />
                    <span className="text-lg font-medium text-gray-600 dark:text-gray-300">Your SGPA</span>
                  </div>
                  <div className={`text-4xl font-bold ${getSGPAColor(sgpa)} mb-2`}>
                    {sgpa.toFixed(4)}
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {getSGPAGrade(sgpa)}
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
                  <span className="text-gray-600 dark:text-gray-300">Subjects:</span>
                  <span className="font-bold text-gray-800 dark:text-white">
                    {subjects.filter(s => s.name && s.credits && s.grade).length}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={exportResults}
                  disabled={sgpa === 0}
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

        {/* Grade Scale Reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            SASTRA University Grading Scale
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(gradeDescriptions).map(([grade, description]) => (
              <div key={grade} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-lg text-gray-800 dark:text-white">{grade}</span>
                  <span className="font-medium text-primary">{gradeScale[grade]} pts</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center">
            <TrendingUp className="w-5 h-5 mr-2" />
            Tips for Better SGPA
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Academic Tips:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Attend all classes regularly</li>
                <li>• Complete assignments on time</li>
                <li>• Participate in class discussions</li>
                <li>• Form study groups with classmates</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Exam Preparation:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Start preparation early</li>
                <li>• Use previous year papers</li>
                <li>• Clarify doubts with faculty</li>
                <li>• Practice time management</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SGPACalculator