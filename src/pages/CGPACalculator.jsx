import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Plus,
  Trash2,
  RotateCcw,
  Download,
  BookOpen,
  Award,
  TrendingUp,
  Target,
  Trophy,
  Sparkles,
  Star
} from 'lucide-react';

const CGPACalculator = () => {
  const [semesters, setSemesters] = useState([{ id: 1, semester: 1, sgpa: '', credits: '' }]);
  const [cgpa, setCgpa] = useState(0);
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalGradePoints, setTotalGradePoints] = useState(0);
  const [honoursChecks, setHonoursChecks] = useState({
    courses: false,
    honoursCourse: false,
    passed: false,
  });

  useEffect(() => {
    calculateCGPA();
  }, [semesters]);

  const calculateCGPA = () => {
    let totalCreditsSum = 0;
    let totalGradePointsSum = 0;

    semesters.forEach((semester) => {
      const credits = parseFloat(semester.credits) || 0;
      const sgpa = parseFloat(semester.sgpa) || 0;
      totalCreditsSum += credits;
      totalGradePointsSum += credits * sgpa;
    });

    setTotalCredits(totalCreditsSum);
    setTotalGradePoints(totalGradePointsSum);

    setCgpa(totalCreditsSum > 0 ? totalGradePointsSum / totalCreditsSum : 0);
  };

  const addSemester = () => {
    setSemesters([...semesters, { id: Date.now(), semester: semesters.length + 1, sgpa: '', credits: '' }]);
  };

  const removeSemester = (id) => {
    if (semesters.length > 1) setSemesters(semesters.filter((s) => s.id !== id));
  };

  const updateSemester = (id, field, value) => {
    setSemesters(
      semesters.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  const resetCalculator = () => {
    setSemesters([{ id: 1, semester: 1, sgpa: '', credits: '' }]);
    setCgpa(0);
    setTotalCredits(0);
    setTotalGradePoints(0);
    setHonoursChecks({ courses: false, honoursCourse: false, passed: false });
  };

  const getCGPAColor = (cgpa) => {
    if (cgpa >= 7.5) return 'from-emerald-500 to-green-500';
    if (cgpa >= 6) return 'from-blue-500 to-cyan-500';
    if (cgpa >= 5) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  const getCGPAGrade = (cgpa) => {
    if (cgpa >= 7.5) return 'First Class with Distinction';
    if (cgpa >= 6) return 'First Class';
    if (cgpa >= 5) return 'Second Class';
    return 'Fail';
  };

  const exportResults = () => {
    const results = {
      semesters: semesters.filter((s) => s.sgpa && s.credits),
      cgpa: cgpa.toFixed(4),
      totalCredits,
      totalGradePoints: totalGradePoints.toFixed(2),
      grade: getCGPAGrade(cgpa),
      honoursEligible: honoursChecks.courses && honoursChecks.honoursCourse && honoursChecks.passed,
      calculatedOn: new Date().toLocaleDateString(),
    };
    const dataStr = JSON.stringify(results, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `CGPA_Results_${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 transition-colors duration-300">
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
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center"
            >
              <Target className="w-6 h-6 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              CGPA Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Calculate your Cumulative Grade Point Average with our advanced calculator
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
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Enter Semester Data</h2>
                </div>
                <div className="flex space-x-3">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={addSemester} 
                    className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-all duration-200"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add Semester</span>
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={resetCalculator} 
                    className="flex items-center space-x-2 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white px-6 py-3 rounded-xl font-medium shadow-lg transition-all duration-200"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset</span>
                  </motion.button>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 mb-6 text-sm font-semibold text-gray-600 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/50 rounded-xl p-4">
                <div className="col-span-3">Semester</div>
                <div className="col-span-3">SGPA</div>
                <div className="col-span-3">Credits</div>
                <div className="col-span-2">Grade Points</div>
                <div className="col-span-1">Action</div>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {semesters.map((s, idx) => {
                  const gradePoints = (parseFloat(s.sgpa) || 0) * (parseFloat(s.credits) || 0);
                  return (
                    <motion.div 
                      key={s.id} 
                      initial={{ opacity: 0, y: 20 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.3, delay: idx * 0.1 }} 
                      className="grid grid-cols-12 gap-4 items-center p-6 bg-gradient-to-r from-white to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-600"
                    >
                      <div className="col-span-3">
                        <input 
                          type="number" 
                          placeholder="Semester" 
                          min="1" 
                          max="8" 
                          value={s.semester} 
                          onChange={(e) => updateSemester(s.id, 'semester', e.target.value)} 
                          className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200" 
                        />
                      </div>
                      <div className="col-span-3">
                        <input 
                          type="number" 
                          placeholder="SGPA" 
                          min="0" 
                          max="10" 
                          step="0.01" 
                          value={s.sgpa} 
                          onChange={(e) => updateSemester(s.id, 'sgpa', e.target.value)} 
                          className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200" 
                        />
                      </div>
                      <div className="col-span-3">
                        <input 
                          type="number" 
                          placeholder="Credits" 
                          min="0" 
                          max="30" 
                          step="0.5" 
                          value={s.credits} 
                          onChange={(e) => updateSemester(s.id, 'credits', e.target.value)} 
                          className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-all duration-200" 
                        />
                      </div>
                      <div className="col-span-2">
                        <div className="px-4 py-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 rounded-xl text-center font-bold text-gray-800 dark:text-white">
                          {gradePoints.toFixed(1)}
                        </div>
                      </div>
                      <div className="col-span-1">
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeSemester(s.id)} 
                          disabled={semesters.length === 1} 
                          className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </motion.div>
                  );
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
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 sticky top-24"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-xl flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Results</h2>
              </div>

              <div className="text-center mb-8">
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`bg-gradient-to-br ${getCGPAColor(cgpa)} rounded-3xl p-8 mb-6 shadow-xl`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <Sparkles className="w-6 h-6 text-white mr-2" />
                    <span className="text-lg font-medium text-white">Your CGPA</span>
                  </div>
                  <div className="text-5xl font-bold text-white mb-3">{cgpa.toFixed(4)}</div>
                  <div className="text-lg font-medium text-white/90">{getCGPAGrade(cgpa)}</div>
                </motion.div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">Total Credits:</span>
                  <span className="font-bold text-xl text-gray-800 dark:text-white">{totalCredits}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-xl">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">Grade Points:</span>
                  <span className="font-bold text-xl text-gray-800 dark:text-white">{totalGradePoints.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl">
                  <span className="text-gray-600 dark:text-gray-300 font-medium">Semesters:</span>
                  <span className="font-bold text-xl text-gray-800 dark:text-white">{semesters.filter((s) => s.sgpa && s.credits).length}</span>
                </div>
              </div>

              {/* Honours Checker */}
              {cgpa >= 7.5 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mb-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl border border-yellow-200 dark:border-yellow-800"
                >
                  <h4 className="text-lg font-semibold text-yellow-800 dark:text-yellow-300 mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2" />
                    Honours Eligibility
                  </h4>
                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={honoursChecks.courses} 
                        onChange={(e) => setHonoursChecks({ ...honoursChecks, courses: e.target.checked })} 
                        className="mt-1 w-4 h-4 text-yellow-600 rounded focus:ring-yellow-500" 
                      />
                      <span>Completed 4 additional theory courses approved by Dean.</span>
                    </label>
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={honoursChecks.honoursCourse} 
                        onChange={(e) => setHonoursChecks({ ...honoursChecks, honoursCourse: e.target.checked })} 
                        className="mt-1 w-4 h-4 text-yellow-600 rounded focus:ring-yellow-500" 
                      />
                      <span>Chosen one Honours course in each of V-VIII semesters.</span>
                    </label>
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={honoursChecks.passed} 
                        onChange={(e) => setHonoursChecks({ ...honoursChecks, passed: e.target.checked })} 
                        className="mt-1 w-4 h-4 text-yellow-600 rounded focus:ring-yellow-500" 
                      />
                      <span>Passed these with D grade or higher in first attempt within 8 semesters.</span>
                    </label>
                  </div>
                  {honoursChecks.courses && honoursChecks.honoursCourse && honoursChecks.passed && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-4 p-4 bg-green-100 dark:bg-green-900/30 rounded-xl"
                    >
                      <div className="text-green-700 dark:text-green-400 font-semibold flex items-center">
                        <Trophy className="w-5 h-5 mr-2" />
                        Congratulations! You are eligible for Honours.
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              <div className="space-y-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={exportResults} 
                  disabled={cgpa === 0} 
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-medium shadow-lg transition-all duration-200 disabled:cursor-not-allowed"
                >
                  <Download className="w-5 h-5" />
                  <span>Export Results</span>
                </motion.button>
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  Results follow SASTRA B.Tech regulations.
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tips Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.8 }} 
          className="mt-12 bg-gradient-to-r from-purple-50 via-pink-50 to-rose-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20 rounded-3xl p-8 border border-purple-200 dark:border-purple-800"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center">
            <TrendingUp className="w-6 h-6 mr-3 text-green-500" />
            Tips for Better CGPA
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6">
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">Long-term Strategy:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Maintain consistency across all semesters</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Focus on understanding concepts deeply</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Build strong relationships with faculty</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Participate in academic activities</li>
              </ul>
            </div>
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6">
              <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">Recovery Tips:</h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Identify weak subjects early</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Seek help from seniors and faculty</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Use additional learning resources</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Plan improvement strategies</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CGPACalculator;