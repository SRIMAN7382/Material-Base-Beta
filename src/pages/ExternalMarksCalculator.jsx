import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

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
  const [externals, setExternals] = useState({});

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Zap className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              Expected Externals
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Calculate external marks required to achieve each grade based on your internal marks
          </p>
        </motion.div>

        {/* Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6"
        >
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
              Enter Internal Marks
            </h2>
            <input
              type="number"
              min="0"
              max="50"
              placeholder="Internal Marks (0-50)"
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white"
              onChange={(e) => setExternals(calculateExternals(e.target.value))}
            />
          </div>

          <hr className="my-6 border-gray-300 dark:border-gray-600" />

          <div className="overflow-x-auto">
            <table className="min-w-full text-center divide-y divide-gray-300 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold">Grade</th>
                  <th className="px-4 py-2 text-gray-700 dark:text-gray-300 font-semibold">Required External (out of 100)</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {["S", "A+", "A", "B", "C", "D"].map((grade) => (
                  <tr key={grade}>
                    <td className="px-4 py-3 text-gray-800 dark:text-white font-medium">{grade}</td>
                    <td className="px-4 py-3 text-gray-800 dark:text-white">
                      {externals[grade] !== undefined ? externals[grade] : "-"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ExpectedExternals;
