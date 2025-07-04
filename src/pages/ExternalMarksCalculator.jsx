import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Calculator, TrendingUp, Target, Award, Sparkles } from "lucide-react";

export const calculateExternals = (internalInput) => {
  const internal = parseFloat(internalInput);

  const grades = [
    { grade: 'S', threshold: 91 },
    { grade: 'A+', threshold: 86 },
    { grade: 'A', threshold: 75 },
    { grade: 'B', threshold: 66 },
    { grade: 'C', threshold: 55 },
    { grade: 'D', threshold: 50 },
  ];

  const results = {};

  // If internal is invalid (not a number) or out of bounds (>50), show NA
  if (isNaN(internal) || internal < 0 || internal > 50) {
    grades.forEach(({ grade }) => (results[grade] = 'NA'));
    return results;
  }

  // Otherwise, calculate normally
  grades.forEach(({ grade, threshold }) => {
    const requiredScaled = threshold - internal;
    const requiredExternalRaw = (requiredScaled / 50) * 100;
    results[grade] = requiredExternalRaw > 100 ? "NA" : Math.max(0, requiredExternalRaw.toFixed(1));
  });

  return results;
};

const ExpectedExternals = () => {
  const [internalMarks, setInternalMarks] = useState('');
  const [externals, setExternals] = useState({});

  const handleInputChange = (value) => {
    setInternalMarks(value);
    setExternals(calculateExternals(value));
  };

  const getGradeColor = (grade) => {
    const colors = {
      'S': 'from-emerald-500 to-green-500',
      'A+': 'from-blue-500 to-cyan-500',
      'A': 'from-purple-500 to-violet-500',
      'B': 'from-yellow-500 to-orange-500',
      'C': 'from-orange-500 to-red-500',
      'D': 'from-red-500 to-pink-500'
    };
    return colors[grade] || 'from-gray-400 to-gray-500';
  };

  const getGradeDescription = (grade) => {
    const descriptions = {
      'S': 'Outstanding (91-100%)',
      'A+': 'Excellent (86-90%)',
      'A': 'Very Good (75-85%)',
      'B': 'Good (66-74%)',
      'C': 'Satisfactory (55-65%)',
      'D': 'Pass (50-54%)'
    };
    return descriptions[grade] || '';
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-cyan-900/20 dark:to-blue-900/20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl flex items-center justify-center"
            >
              <Zap className="w-6 h-6 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              External Marks Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Calculate the external marks required to achieve each grade based on your internal marks
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 mb-8"
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Enter Internal Marks
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <input
                type="number"
                min="0"
                max="50"
                value={internalMarks}
                placeholder="Internal Marks (0-50)"
                className="w-full px-6 py-4 text-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200 text-center font-medium"
                onChange={(e) => handleInputChange(e.target.value)}
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <span className="text-sm font-medium">/ 50</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8"
        >
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Required External Marks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["S", "A+", "A", "B", "C", "D"].map((grade, index) => (
              <motion.div
                key={grade}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`relative overflow-hidden bg-gradient-to-br ${getGradeColor(grade)} rounded-2xl p-6 text-white shadow-xl`}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-8 -mb-8"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Award className="w-6 h-6" />
                      <span className="text-2xl font-bold">{grade}</span>
                    </div>
                    <Sparkles className="w-5 h-5 opacity-70" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">
                      {externals[grade] !== undefined ? externals[grade] : "-"}
                      {externals[grade] !== undefined && externals[grade] !== 'NA' && (
                        <span className="text-lg font-medium opacity-80">/100</span>
                      )}
                    </div>
                    <div className="text-sm opacity-90">
                      {getGradeDescription(grade)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {internalMarks && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-2xl border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center space-x-3 mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  Analysis for {internalMarks} Internal Marks
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Achievable Grades:</h4>
                  <div className="space-y-2">
                    {Object.entries(externals).map(([grade, required]) => {
                      if (required !== 'NA' && parseFloat(required) <= 100) {
                        return (
                          <div key={grade} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 dark:text-gray-300">Grade {grade}:</span>
                            <span className="font-medium text-gray-800 dark:text-white">
                              {required === '0.0' ? 'Already achieved!' : `Need ${required}/100`}
                            </span>
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Tips:</h4>
                  <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Focus on high-weightage topics
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Practice previous year papers
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Time management is crucial
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      Clarify doubts before exam
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800/50 dark:to-blue-900/20 rounded-3xl p-8 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <Award className="w-6 h-6 mr-3 text-yellow-500" />
            SASTRA University Grading System
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">Grade Distribution:</h4>
              <div className="space-y-3">
                {[
                  { grade: 'S', range: '91-100%', desc: 'Outstanding' },
                  { grade: 'A+', range: '86-90%', desc: 'Excellent' },
                  { grade: 'A', range: '75-85%', desc: 'Very Good' },
                  { grade: 'B', range: '66-74%', desc: 'Good' },
                  { grade: 'C', range: '55-65%', desc: 'Satisfactory' },
                  { grade: 'D', range: '50-54%', desc: 'Pass' }
                ].map(({ grade, range, desc }) => (
                  <div key={grade} className="flex items-center justify-between p-3 bg-white dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="font-bold text-lg">{grade}</span>
                      <span className="text-gray-600 dark:text-gray-300">{desc}</span>
                    </div>
                    <span className="font-medium text-gray-800 dark:text-white">{range}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">How It Works:</h4>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold mt-0.5">1</span>
                  <span>Internal marks are scaled to 50% of total marks</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold mt-0.5">2</span>
                  <span>External marks are scaled to 50% of total marks</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold mt-0.5">3</span>
                  <span>Total = Internal (scaled) + External (scaled)</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold mt-0.5">4</span>
                  <span>Grade is assigned based on total percentage</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpectedExternals;