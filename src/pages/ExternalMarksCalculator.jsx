import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Zap } from 'lucide-react'

const ExternalMarksCalculator = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, internal: '', external: '', total: 0, grade: '', status: '' }
  ])

  useEffect(() => {
    calculateResults()
  }, [subjects])

  const calculateResults = () => {
    const updatedSubjects = subjects.map(subject => {
      const internal = parseFloat(subject.internal) || 0
      const external = parseFloat(subject.external) || 0
      const total = internal + external

      let grade = ''
      let status = ''

      if (internal > 0 || external > 0) {
        // Determine grade
        if (total >= 91) grade = 'S'
        else if (total >= 86) grade = 'A+'
        else if (total >= 75) grade = 'A'
        else if (total >= 66) grade = 'B'
        else if (total >= 55) grade = 'C'
        else if (total >= 50) grade = 'D'
        else grade = 'E'

        // Determine status (Pass: 50% total + 40% external)
        status = (total >= 50 && external >= 20) ? 'Pass' : 'Fail'
      }

      return {
        ...subject,
        total,
        grade,
        status
      }
    })

    setSubjects(updatedSubjects)
  }

  const addSubject = () => {
    setSubjects([...subjects, { 
      id: Date.now(), 
      internal: '', 
      external: '', 
      total: 0, 
      grade: '', 
      status: '' 
    }])
  }

  const removeSubject = (id) => {
    if (subjects.length > 1) {
      setSubjects(subjects.filter(subject => subject.id !== id))
    }
  }

  const updateSubject = (id, field, value) => {
    setSubjects(subjects.map(subject => 
      subject.id === id ? { ...subject, [field]: value } : subject
    ))
  }

  const resetAll = () => {
    setSubjects([{ id: 1, internal: '', external: '', total: 0, grade: '', status: '' }])
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              External Marks Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate your external exam results
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          {/* Controls */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Enter Marks
            </h2>
            <div className="space-x-2">
              <button
                onClick={addSubject}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
              >
                Add Subject
              </button>
              <button
                onClick={resetAll}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 mb-4 text-sm font-semibold text-gray-600 dark:text-gray-300 border-b pb-2">
            <div>Internal (50)</div>
            <div>External (50)</div>
            <div>Total (100)</div>
            <div>Grade</div>
            <div>Status</div>
            <div>Action</div>
          </div>

          {/* Subject Rows */}
          <div className="space-y-3">
            {subjects.map((subject, index) => (
              <motion.div
                key={subject.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-6 gap-4 items-center p-3 bg-gray-50 dark:bg-gray-700 rounded"
              >
                <input
                  type="number"
                  placeholder="Internal"
                  min="0"
                  max="50"
                  value={subject.internal}
                  onChange={(e) => updateSubject(subject.id, 'internal', e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                />
                
                <input
                  type="number"
                  placeholder="External"
                  min="0"
                  max="50"
                  value={subject.external}
                  onChange={(e) => updateSubject(subject.id, 'external', e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
                />
                
                <div className="px-3 py-2 bg-gray-100 dark:bg-gray-600 rounded text-center font-semibold text-gray-800 dark:text-white">
                  {subject.total}
                </div>
                
                <div className="text-center">
                  {subject.grade && (
                    <span className={`px-2 py-1 rounded text-sm font-semibold ${
                      subject.grade === 'S' ? 'bg-purple-100 text-purple-800' :
                      subject.grade === 'A+' ? 'bg-green-100 text-green-800' :
                      subject.grade === 'A' ? 'bg-blue-100 text-blue-800' :
                      subject.grade === 'B' ? 'bg-yellow-100 text-yellow-800' :
                      subject.grade === 'C' ? 'bg-orange-100 text-orange-800' :
                      subject.grade === 'D' ? 'bg-red-100 text-red-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {subject.grade}
                    </span>
                  )}
                </div>
                
                <div className="text-center">
                  {subject.status && (
                    <span className={`px-2 py-1 rounded text-sm font-semibold ${
                      subject.status === 'Pass' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {subject.status}
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => removeSubject(subject.id)}
                  disabled={subjects.length === 1}
                  className="text-red-500 hover:text-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Remove
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Grade Scale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
        >
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
            Grading Scale
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {[
              { grade: 'S', range: '91-100', points: '10' },
              { grade: 'A+', range: '86-90', points: '9' },
              { grade: 'A', range: '75-85', points: '8' },
              { grade: 'B', range: '66-74', points: '7' },
              { grade: 'C', range: '55-65', points: '6' },
              { grade: 'D', range: '50-54', points: '5' },
              { grade: 'E', range: '0-49', points: '0' }
            ].map(({ grade, range, points }) => (
              <div key={grade} className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
                <div className="font-bold text-lg text-gray-800 dark:text-white">{grade}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{range}%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">{points} pts</div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
            <strong>Pass Criteria:</strong> Minimum 50% total marks AND minimum 40% in external exam
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ExternalMarksCalculator