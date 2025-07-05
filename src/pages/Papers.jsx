import React from 'react'
import { motion } from 'framer-motion'
import { FolderOpen, ExternalLink, FileText, BookOpen, Users, Star, Sparkles, GraduationCap, Calendar } from 'lucide-react'

const Papers = () => {
  const papers = [
    { 
      name: 'SEM 1', 
      link: 'https://drive.google.com/drive/u/0/folders/16Xu43yiAkUSoi9jgiLhCozhGJ6R8n96_', 
      color: 'from-blue-500 to-blue-600',
      description: 'Foundation semester question papers',
      icon: '📚',
      stats: 'All subjects'
    },
    { 
      name: 'SEM 2', 
      link: 'https://drive.google.com/drive/u/0/folders/16Xu43yiAkUSoi9jgiLhCozhGJ6R8n96_', 
      color: 'from-green-500 to-green-600',
      description: 'Core engineering fundamentals',
      icon: '📖',
      stats: 'All subjects'
    },
    { 
      name: 'SEM 3', 
      link: '#', 
      color: 'from-purple-500 to-purple-600',
      description: 'Department-specific papers',
      icon: '📝',
      stats: 'Coming soon'
    },
    { 
      name: 'SEM 4', 
      link: '#', 
      color: 'from-red-500 to-red-600',
      description: 'Advanced core subjects',
      icon: '📋',
      stats: 'Coming soon'
    },
    { 
      name: 'SEM 5', 
      link: '#', 
      color: 'from-yellow-500 to-yellow-600',
      description: 'Specialization papers',
      icon: '📄',
      stats: 'Coming soon'
    },
    { 
      name: 'SEM 6', 
      link: '#', 
      color: 'from-indigo-500 to-indigo-600',
      description: 'Advanced specialization',
      icon: '📃',
      stats: 'Coming soon'
    },
    { 
      name: 'SEM 7', 
      link: '#', 
      color: 'from-pink-500 to-pink-600',
      description: 'Industry-oriented papers',
      icon: '📑',
      stats: 'Coming soon'
    },
    { 
      name: 'SEM 8', 
      link: '#', 
      color: 'from-teal-500 to-teal-600',
      description: 'Final year assessments',
      icon: '📊',
      stats: 'Coming soon'
    },
    { 
      name: 'BCOM', 
      link: 'https://drive.google.com/drive/u/0/folders/1fKG_YfO4WYXEhveVbxS6cn8YMZ2kzS8t', 
      color: 'from-orange-500 to-orange-600',
      description: 'Commerce question papers',
      icon: '💼',
      stats: 'All semesters'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-slate-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-pink-900/20 transition-colors duration-300 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center justify-center space-x-4 mb-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <FileText className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Question Papers
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"
              />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Access previous year question papers for better exam preparation and understanding of question patterns
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center space-x-8 mt-8"
          >
            <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Calendar className="w-5 h-5 text-purple-500" />
              <span className="font-semibold text-gray-800 dark:text-white">Multiple Years</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <GraduationCap className="w-5 h-5 text-pink-500" />
              <span className="font-semibold text-gray-800 dark:text-white">All Departments</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-gray-800 dark:text-white">Verified Papers</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Papers Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {papers.map((paper, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block group h-full ${paper.link === '#' ? 'cursor-not-allowed opacity-60' : ''}`}
                onClick={paper.link === '#' ? (e) => e.preventDefault() : undefined}
              >
                <motion.div
                  whileHover={paper.link !== '#' ? { 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5
                  } : {}}
                  whileTap={paper.link !== '#' ? { scale: 0.98 } : {}}
                  className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden group-hover:shadow-3xl transition-all duration-500"
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Gradient Header */}
                  <div className={`h-32 bg-gradient-to-br ${paper.color} relative overflow-hidden`}>
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <motion.div
                        animate={{ 
                          x: [0, 100, 0],
                          y: [0, -50, 0]
                        }}
                        transition={{ 
                          duration: 8, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute w-32 h-32 bg-white rounded-full -top-16 -left-16"
                      />
                      <motion.div
                        animate={{ 
                          x: [0, -80, 0],
                          y: [0, 60, 0]
                        }}
                        transition={{ 
                          duration: 6, 
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                        className="absolute w-24 h-24 bg-white rounded-full -bottom-12 -right-12"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6 h-full flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          variants={floatingVariants}
                          animate="animate"
                          className="text-3xl"
                        >
                          {paper.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            {paper.name}
                          </h3>
                          <div className="flex items-center space-x-1 text-white/80 text-sm">
                            <Sparkles className="w-3 h-3" />
                            <span>{paper.stats}</span>
                          </div>
                        </div>
                      </div>
                      
                      {paper.link !== '#' && (
                        <motion.div
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 15 
                          }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {paper.description}
                    </p>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Previous year papers</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Multiple formats</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Solution guides</span>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <motion.div
                      whileHover={paper.link !== '#' ? { scale: 1.02 } : {}}
                      className={`w-full rounded-2xl p-4 transition-all duration-300 ${
                        paper.link === '#' 
                          ? 'bg-gray-100 dark:bg-gray-700' 
                          : 'bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-700 dark:to-purple-900/30 group-hover:from-purple-50 group-hover:to-pink-50 dark:group-hover:from-purple-900/30 dark:group-hover:to-pink-900/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold ${
                          paper.link === '#' 
                            ? 'text-gray-500 dark:text-gray-400' 
                            : 'text-gray-800 dark:text-white'
                        }`}>
                          {paper.link === '#' ? 'Coming Soon' : 'Download Papers'}
                        </span>
                        <div className="flex items-center space-x-1">
                          {paper.link === '#' ? (
                            <Sparkles className="w-4 h-4 text-gray-400" />
                          ) : (
                            <>
                              <FolderOpen className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                              <motion.div
                                animate={{ x: [0, 5, 0] }}
                                transition={{ 
                                  duration: 1.5, 
                                  repeat: Infinity,
                                  ease: "easeInOut"
                                }}
                              >
                                <ExternalLink className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                              </motion.div>
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Hover Effect Overlay */}
                  {paper.link !== '#' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-3xl" />
                  )}
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 p-8 lg:p-12">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto mb-6"
            >
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Exam Preparation Tips
            </h3>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Make the most of these question papers with our proven study strategies
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6">
                <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">Study Strategy:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Solve papers under timed conditions</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Identify recurring question patterns</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Focus on high-weightage topics</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Practice answer writing techniques</li>
                </ul>
              </div>
              
              <div className="bg-white/50 dark:bg-gray-800/50 rounded-2xl p-6">
                <h4 className="font-semibold text-lg text-gray-800 dark:text-white mb-4">Exam Day Tips:</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Read all questions carefully first</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Manage time effectively</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Start with easier questions</li>
                  <li className="flex items-center"><span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>Review answers before submitting</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Papers