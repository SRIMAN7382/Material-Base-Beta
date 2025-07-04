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
    if (cgpa >= 7.5) return 'text-green-600 dark:text-green-400';
    if (cgpa >= 6) return 'text-blue-600 dark:text-blue-400';
    if (cgpa >= 5) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
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
    <div className="min-h-screen pt-20 pb-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-8">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Target className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">CGPA Calculator</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">Calculate your Cumulative Grade Point Average for SASTRA University</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Enter Semester Data</h2>
                <div className="flex space-x-2">
                  <button onClick={addSemester} className="flex items-center space-x-2 bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                    <Plus className="w-4 h-4" />
                    <span>Add Semester</span>
                  </button>
                  <button onClick={resetCalculator} className="flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 mb-4 text-sm font-medium text-gray-600 dark:text-gray-300">
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
                    <motion.div key={s.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: idx * 0.1 }} className="grid grid-cols-12 gap-4 items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div className="col-span-3"><input type="number" placeholder="Semester" min="1" max="8" value={s.semester} onChange={(e) => updateSemester(s.id, 'semester', e.target.value)} className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white" /></div>
                      <div className="col-span-3"><input type="number" placeholder="SGPA" min="0" max="10" step="0.01" value={s.sgpa} onChange={(e) => updateSemester(s.id, 'sgpa', e.target.value)} className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white" /></div>
                      <div className="col-span-3"><input type="number" placeholder="Credits" min="0" max="30" step="0.5" value={s.credits} onChange={(e) => updateSemester(s.id, 'credits', e.target.value)} className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-gray-800 text-gray-800 dark:text-white" /></div>
                      <div className="col-span-2"><div className="px-3 py-2 bg-gray-100 dark:bg-gray-600 rounded-lg text-center font-medium text-gray-800 dark:text-white">{gradePoints.toFixed(1)}</div></div>
                      <div className="col-span-1"><button onClick={() => removeSemester(s.id)} disabled={semesters.length === 1} className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"><Trash2 className="w-4 h-4" /></button></div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-1">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Results</h2>

              <div className="text-center mb-6">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 mb-4">
                  <div className="flex items-center justify-center mb-2"><Award className="w-6 h-6 text-primary mr-2" /><span className="text-lg font-medium text-gray-600 dark:text-gray-300">Your CGPA</span></div>
                  <div className={`text-4xl font-bold ${getCGPAColor(cgpa)} mb-2`}>{cgpa.toFixed(4)}</div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{getCGPAGrade(cgpa)}</div>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"><span className="text-gray-600 dark:text-gray-300">Total Credits:</span><span className="font-bold text-gray-800 dark:text-white">{totalCredits}</span></div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"><span className="text-gray-600 dark:text-gray-300">Grade Points:</span><span className="font-bold text-gray-800 dark:text-white">{totalGradePoints.toFixed(2)}</span></div>
                <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"><span className="text-gray-600 dark:text-gray-300">Semesters:</span><span className="font-bold text-gray-800 dark:text-white">{semesters.filter((s) => s.sgpa && s.credits).length}</span></div>
              </div>

              {/* Honours Checker */}
              {cgpa >= 7.5 && (
                <div className="mb-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-3 flex items-center"><Award className="w-5 h-5 mr-2" />Honours Eligibility</h4>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <label className="flex items-start space-x-2"><input type="checkbox" checked={honoursChecks.courses} onChange={(e) => setHonoursChecks({ ...honoursChecks, courses: e.target.checked })} className="mt-1" /><span>Completed 4 additional theory courses approved by Dean.</span></label>
                    <label className="flex items-start space-x-2"><input type="checkbox" checked={honoursChecks.honoursCourse} onChange={(e) => setHonoursChecks({ ...honoursChecks, honoursCourse: e.target.checked })} className="mt-1" /><span>Chosen one Honours course in each of V-VIII semesters.</span></label>
                    <label className="flex items-start space-x-2"><input type="checkbox" checked={honoursChecks.passed} onChange={(e) => setHonoursChecks({ ...honoursChecks, passed: e.target.checked })} className="mt-1" /><span>Passed these with D grade or higher in first attempt within 8 semesters.</span></label>
                  </div>
                  {honoursChecks.courses && honoursChecks.honoursCourse && honoursChecks.passed && (
                    <div className="mt-4 text-green-700 dark:text-green-400 font-semibold">🎉 Congratulations! You are eligible for Honours.</div>
                  )}
                </div>
              )}

              <div className="space-y-3">
                <button onClick={exportResults} disabled={cgpa === 0} className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-4 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed">
                  <Download className="w-4 h-4" /><span>Export Results</span>
                </button>
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">Results follow SASTRA B.Tech regulations.</div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Tips Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }} className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 flex items-center"><TrendingUp className="w-5 h-5 mr-2" />Tips for Better CGPA</h3>
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
  );
};

export default CGPACalculator;
