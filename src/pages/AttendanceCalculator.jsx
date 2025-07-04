import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Calculator, Target, Award, Sparkles, Clock } from 'lucide-react';

const AttendanceCalculator = () => {
  const [credits, setCredits] = useState('');
  const [bunked, setBunked] = useState('');
  const [canBunk, setCanBunk] = useState(null);

  // Correct logic: credits → classes → allowed bunk
  const calculateCanBunk = (credits, bunked) => {
  const totalCredits = parseFloat(credits) || 0;
  const bunkedClasses = parseFloat(bunked) || 0;
  if (totalCredits <= 0) return 0;

  const totalClasses = totalCredits * 16;           // ✅ Correct multiplier
  const maxBunkable = totalClasses * 0.2;           // ✅ 20% allowed
  const remainingBunkable = Math.floor(maxBunkable - bunkedClasses);

  return remainingBunkable;
};


  const handleCalculate = () => {
    setCanBunk(calculateCanBunk(credits, bunked));
  };

  const reset = () => {
    setCredits('');
    setBunked('');
    setCanBunk(null);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <motion.div animate={{ rotate: [0, 360] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="w-12 h-12 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Class Skippability Calculator</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Calculate how many classes you can skip based on total semester credits and classes already bunked.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Enter Details</h2>
              </div>

              <div className="space-y-8">

                <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
                  <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300">Total Semester Credits</label>
                  <input type="number" min="0" value={credits} onChange={(e) => setCredits(e.target.value)} placeholder="e.g., 20" className="w-full px-6 py-4 text-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200"/>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Sum of all subject credits this semester (e.g., 18, 20, 21)</p>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="space-y-3">
                  <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300">Classes Already Skipped</label>
                  <input type="number" min="0" value={bunked} onChange={(e) => setBunked(e.target.value)} placeholder="Enter number of classes skipped" className="w-full px-6 py-4 text-xl border-2 border-gray-200 dark:border-gray-600 rounded-2xl focus:ring-2 focus:ring-emerald-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200"/>
                </motion.div>

                <div className="flex space-x-4">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleCalculate} disabled={!credits || !bunked} className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-medium shadow-lg transition-all duration-200 disabled:cursor-not-allowed">
                    <Calculator className="w-5 h-5" /><span>Calculate</span>
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={reset} className="flex items-center justify-center space-x-2 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white py-4 px-6 rounded-xl font-medium shadow-lg transition-all duration-200">
                    <Target className="w-5 h-5" /><span>Reset</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 sticky top-24">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Results</h2>
              </div>

              {canBunk !== null ? (
                <div className="text-center py-12">
                  <motion.div animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }} className="bg-gradient-to-br from-emerald-500 to-teal-500 rounded-3xl p-8 mb-6 shadow-xl">
                    <div className="flex items-center justify-center mb-3">
                      <Sparkles className="w-6 h-6 text-white mr-2" />
                      <span className="text-lg font-medium text-white">Classes You Can Skip</span>
                    </div>
                    <div className="text-5xl font-bold text-white mb-3">{canBunk > 0 ? canBunk : '0'}</div>
                    <div className="text-lg font-medium text-white/90">{canBunk > 0 ? `You can skip ${canBunk} classes` : "You can't skip any classes"}</div>
                  </motion.div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <Clock className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500 dark:text-gray-400">Enter total credits & skipped classes, then calculate.</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCalculator;
