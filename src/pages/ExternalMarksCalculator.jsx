import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  Calculator, 
  Plus, 
  Trash2, 
  RotateCcw, 
  Download, 
  BookOpen, 
  Award, 
  TrendingUp,
  Target,
  AlertCircle,
  CheckCircle,
  Info,
  Zap
} from 'lucide-react'

const ExternalMarksCalculator = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: '', internalMarks: '', externalMarks: '', totalMarks: 0, grade: '', status: '' }
  ])
  const [totalMarks, setTotalMarks] = useState(0)
  const [averageMarks, setAverageMarks] = useState(0)
  const [passedSubjects, setPassedSubjects] = useState(0)
  const [failedSubjects, setFailedSubjects] = useState(0)
  const [overallStatus, setOverallStatus] = useState('')

  // SASTRA University marking scheme
  const gradeScale = {
    'S': { min: 91, max: 100, points: 10 },
    'A+': { min: 86, max: 90, points: 9 },
    'A': { min: 75, max: 85, points: 8 },
    'B': { min: 66, max: 74, points: 7 },
    'C': { min: 55, max: 65, points: 6 },
    'D': { min: 50, max: 54, points: 5 },
    'E': { min: 0, max: 49, points: 0 }
  }

  useEffect(() => {
    calculateResults()
  }, [subjects])

  const calculateResults = () => {
    let total = 0
    let passed = 0
    let failed = 0
    let validSubjects = 0

    const updatedSubjects = subjects.map(subject => {
      const internal = parseFloat(subject.internalMarks) || 0
      const external = parseFloat(subject.externalMarks) || 0
      const totalSubjectMarks = internal + external

      if (subject.name && (internal > 0 || external > 0)) {
        validSubjects++
        total += totalSubjectMarks

        // Determine grade and status
        let grade = 'E'
        let status = 'Fail'

        // Check if passed (minimum 50% total and 40% in external)
        if (totalSubjectMarks >= 50 && external >= 20) {
          status = 'Pass'
          passed++
        } else {
          failed++
        }

        // Determine grade based on total marks
        for (const [gradeKey, gradeInfo] of Object.entries(gradeScale)) {
          if (totalSubjectMarks >= gradeInfo.min && totalSubjectMarks <= gradeInfo.max) {
            grade = gradeKey
            break
          }
        }

        return {
          ...subject,
          totalMarks: totalSubjectMarks,
          grade,
          status
        }
      }

      return {
        ...subject,
        totalMarks: totalSubjectMarks,
        grade: '',
        status: ''
      }
    })

    setSubjects(updatedSubjects)
    setTotalMarks(total)
    setAverageMarks(validSubjects > 0 ? total / validSubjects : 0)
    setPassedSubjects(passed)
    setFailedSubjects(failed)
    
    // Overall status
    if (validSubjects === 0) {
      setOverallStatus('No Data')
    } else if (failed === 0 && passed > 0) {
      setOverallStatus('All Clear')
    } else if (failed > 0) {
      setOverallStatus('Has Backlogs')
    } else {
      setOverallStatus('Incomplete')
    }
  }

  const addSubject = () => {
    const newSubject = {
      id: Date.now(),
      name: '',
      internalMarks: '',
      externalMarks: '',
      totalMarks: 0,
      grade: '',
      status: ''
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
        return { ...subject, [field]: value }
      }
      return subject
    }))
  }

  const resetCalculator = () => {
    setSubjects([{ id: 1, name: '', internalMarks: '', externalMarks: '', totalMarks: 0, grade: '', status: '' }])
    setTotalMarks(0)
    setAverageMarks(0)
    setPassedSubjects(0)
    setFailedSubjects(0)
    setOverallStatus('')
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pass': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
      case 'Fail': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700'
    }
  }

  const getGradeColor = (grade) => {
    switch (grade) {
      case 'S': return 'text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/20'
      case 'A+': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20'
      case 'A': return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
      case 'B': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20'
      case 'C': return 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20'
      case 'D': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20'
      case 'E': return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700'
      default: return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-700'
    }
  }

  const getOverallStatusColor = (status) => {
    switch (status) {
      case 'All Clear': return 'text-green-600 dark:text-green-400'
      case 'Has Backlogs': return 'text-red-600 dark:text-red-400'
      case 'Incomplete': return 'text-yellow-600 dark:text-yellow-400'
      default: return 'text-gray-600 dark:text-gray-400'
    }
  }

  const exportResults = () => {
    const results = {
      subjects: subjects.filter(s => s.name && (s.internalMarks || s.externalMarks)),
      summary: {
        totalMarks,
        averageMarks: averageMarks.toFixed(2),
        passedSubjects,
        failedSubjects,
        overallStatus
      },
      calculatedOn: new Date().toLocaleDateString()
    }
    
    const dataStr = JSON.stringify(results, null, 2)
    const dataBlob = new Blob([dataStr], { type: 'application/json' })
    const url = URL.createObjectURL(dataBlob)
    const link = document.createElement('a')
    link.href = url
    link.download = `External_Marks_Results_${new Date().toISOString().split('T')[0]}.json`
    link.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              External Marks Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate your external exam results and overall performance for SASTRA University
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
                  Enter Subject Marks
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

              {/* Important Note */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg"
              >
                <div className="flex items-start space-x-3">
                  <Info className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-blue-900 dark:text-blue-300">SASTRA Marking Scheme</h4>
                    <p className="text-sm text-blue-700 dark:text-blue-400 mt-1">
                      Internal: 50 marks | External: 50 marks | Pass: 50% total + 40% external minimum
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Subject Headers */}
              <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-gray-600 dark:text-gray-300">
                <div className="col-span-3">Subject Name</div>
                <div className="col-span-2">Internal (50)</div>
                <div className="col-span-2">External (50)</div>
                <div className="col-span-2">Total (100)</div>
                <div className="col-span-1">Grade</div>
                <div className="col-span-1">Status</div>
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
                    <div className="col-span-3">
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
                        placeholder="Internal"
                        min="0"
                        max="50"
                        value={subject.internalMarks}
                        onChange={(e) => updateSubject(subject.id, 'internalMarks', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                      />
                    </div>
                    
                    <div className="col-span-2">
                      <input
                        type="number"
                        placeholder="External"
                        min="0"
                        max="50"
                        value={subject.externalMarks}
                        onChange={(e) => updateSubject(subject.id, 'externalMarks', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                      />
                    </div>
                    
                    <div className="col-span-2">
                      <div className="px-3 py-2 bg-gray-100 dark:bg-gray-600 rounded-lg text-center font-medium text-gray-800 dark:text-white">
                        {subject.totalMarks}
                      </div>
                    </div>
                    
                    <div className="col-span-1">
                      {subject.grade && (
                        <div className={`px-2 py-1 rounded text-xs font-medium text-center ${getGradeColor(subject.grade)}`}>
                          {subject.grade}
                        </div>
                      )}
                    </div>
                    
                    <div className="col-span-1">
                      {subject.status && (
                        <div className={`px-2 py-1 rounded text-xs font-medium text-center ${getStatusColor(subject.status)}`}>
                          {subject.status === 'Pass' ? (
                            <CheckCircle className="w-3 h-3 mx-auto" />
                          ) : subject.status === 'Fail' ? (
                            <AlertCircle className="w-3 h-3 mx-auto" />
                          ) : null}
                        </div>
                      )}
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
                Results Summary
              </h2>

              {/* Overall Status */}
              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <Target className="w-6 h-6 text-primary mr-2" />
                    <span className="text-lg font-medium text-gray-600 dark:text-gray-300">Overall Status</span>
                  </div>
                  <div className={`text-2xl font-bold ${getOverallStatusColor(overallStatus)} mb-2`}>
                    {overallStatus || 'No Data'}
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Average: {averageMarks.toFixed(1)}%
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <span className="text-green-700 dark:text-green-300 flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Passed:
                  </span>
                  <span className="font-bold text-green-800 dark:text-green-200">{passedSubjects}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <span className="text-red-700 dark:text-red-300 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-2" />
                    Failed:
                  </span>
                  <span className="font-bold text-red-800 dark:text-red-200">{failedSubjects}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-600 dark:text-gray-300">Total Marks:</span>
                  <span className="font-bold text-gray-800 dark:text-white">{totalMarks}</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <span className="text-gray-600 dark:text-gray-300">Subjects:</span>
                  <span className="font-bold text-gray-800 dark:text-white">
                    {subjects.filter(s => s.name && (s.internalMarks || s.externalMarks)).length}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={exportResults}
                  disabled={totalMarks === 0}
                  className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
                >
                  <Download className="w-4 h-4" />
                  <span>Export Results</span>
                </button>
                
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Results calculated based on SASTRA University marking scheme
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4">
            {Object.entries(gradeScale).map(([grade, info]) => (
              <div key={grade} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-3 ${getGradeColor(grade)}`}>
                  <span className="font-bold text-lg">{grade}</span>
                </div>
                <div className="text-sm font-medium text-gray-800 dark:text-white mb-1">
                  {info.min}-{info.max}%
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-300">
                  {info.points} points
                </div>
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
            Exam Performance Tips
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Internal Assessment:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Attend all classes regularly</li>
                <li>• Submit assignments on time</li>
                <li>• Participate in class activities</li>
                <li>• Prepare well for unit tests</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">External Preparation:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Study previous year papers</li>
                <li>• Focus on important topics</li>
                <li>• Practice time management</li>
                <li>• Clarify doubts with faculty</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Improvement Strategy:</h4>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>• Identify weak subjects early</li>
                <li>• Seek additional help if needed</li>
                <li>• Form study groups</li>
                <li>• Use online resources effectively</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ExternalMarksCalculator