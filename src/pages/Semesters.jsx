import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FolderOpen, ArrowRight, BookOpen, GraduationCap, Users, Star, Sparkles, Calendar, FileText } from 'lucide-react'

const Semesters = () => {
  const semesters = [
    { 
      id: 1, 
      name: 'SEM 1', 
      link: 'https://drive.google.com/drive/folders/1hsEFhsA27jZWcD76U3-dnijXcphFoYYZ?usp=drive_link',
      color: 'from-blue-500 to-blue-600',
      description: 'Foundation courses and basic engineering',
      icon: BookOpen,
      stats: '8-10 subjects'
    },
    { 
      id: 2, 
      name: 'SEM 2', 
      link: 'https://drive.google.com/drive/folders/1hsEFhsA27jZWcD76U3-dnijXcphFoYYZ?usp=drive_link',
      color: 'from-green-500 to-green-600',
      description: 'Core engineering fundamentals',
      icon: BookOpen,
      stats: '8-10 subjects'
    },
    { 
      id: 3, 
      name: 'SEM 3', 
      path: '/semester/3',
      color: 'from-purple-500 to-purple-600',
      description: 'Department-specific core subjects',
      icon: GraduationCap,
      stats: '12+ departments'
    },
    { 
      id: 4, 
      name: 'SEM 4', 
      path: '/semester/4',
      color: 'from-red-500 to-red-600',
      description: 'Advanced core and lab courses',
      icon: GraduationCap,
      stats: '12+ departments'
    },
    { 
      id: 5, 
      name: 'SEM 5', 
      path: '/semester/5',
      color: 'from-yellow-500 to-yellow-600',
      description: 'Specialization begins',
      icon: GraduationCap,
      stats: '12+ departments'
    },
    { 
      id: 6, 
      name: 'SEM 6', 
      path: '/semester/6',
      color: 'from-indigo-500 to-indigo-600',
      description: 'Advanced specialization',
      icon: GraduationCap,
      stats: '12+ departments'
    },
    { 
      id: 7, 
      name: 'SEM 7', 
      path: '/semester/7',
      color: 'from-pink-500 to-pink-600',
      description: 'Industry-oriented subjects',
      icon: GraduationCap,
      stats: '12+ departments'
    },
    { 
      id: 8, 
      name: 'SEM 8', 
      path: '/semester/8',
      color: 'from-teal-500 to-teal-600',
      description: 'Final year projects',
      icon: GraduationCap,
      stats: '12+ departments'
    },
    { 
      id: 'law', 
      name: 'LAW', 
      link: 'https://drive.google.com/drive/u/0/folders/1yckeIjA2mTwTkjNm19VoCqdlx6KtYBWC',
      color: 'from-gray-600 to-gray-700',
      description: 'Legal studies materials',
      icon: FileText,
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
    <div className="min-h-screen pt-20 pb-12 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20 transition-colors duration-300 relative overflow-hidden">
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
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
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
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-green-400/20 to-blue-400/20 rounded-full blur-3xl"
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
              className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"
            >
              <BookOpen className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Study Materials
              </h1>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"
              />
            </div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Choose your semester to access comprehensive study materials, notes, and resources 
            curated by faculty and students
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center space-x-8 mt-8"
          >
            <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Calendar className="w-5 h-5 text-blue-500" />
              <span className="font-semibold text-gray-800 dark:text-white">8 Semesters</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Users className="w-5 h-5 text-green-500" />
              <span className="font-semibold text-gray-800 dark:text-white">12+ Departments</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="font-semibold text-gray-800 dark:text-white">Faculty Verified</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Semesters Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {semesters.map((semester, index) => {
            const Component = semester.link ? 'a' : Link
            const props = semester.link 
              ? { href: semester.link, target: '_blank', rel: 'noopener noreferrer' }
              : { to: semester.path }
            const Icon = semester.icon

            return (
              <motion.div key={semester.id} variants={itemVariants}>
                <Component
                  {...props}
                  className="block group h-full"
                >
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 5,
                      rotateX: 5
                    }}
                    whileTap={{ scale: 0.98 }}
                    className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden group-hover:shadow-3xl transition-all duration-500"
                    style={{
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {/* Gradient Header */}
                    <div className={`h-32 bg-gradient-to-br ${semester.color} relative overflow-hidden`}>
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
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                          <div>
                            <h3 className="text-2xl font-bold text-white">
                              {semester.name}
                            </h3>
                            <div className="flex items-center space-x-1 text-white/80 text-sm">
                              <Sparkles className="w-3 h-3" />
                              <span>{semester.stats}</span>
                            </div>
                          </div>
                        </div>
                        
                        <motion.div
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 15 
                          }}
                          className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300"
                        >
                          <ArrowRight className="w-5 h-5 text-white" />
                        </motion.div>
                      </div>
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-6">
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {semester.description}
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span>Comprehensive notes</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <span>Faculty presentations</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span>Previous papers</span>
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="w-full bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/30 rounded-2xl p-4 group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/30 dark:group-hover:to-purple-900/30 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-800 dark:text-white">
                            Access Materials
                          </span>
                          <div className="flex items-center space-x-1">
                            <FolderOpen className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ 
                                duration: 1.5, 
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            >
                              <ArrowRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-3xl" />
                  </motion.div>
                </Component>
              </motion.div>
            )
          })}
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
              className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mx-auto mb-6"
            >
              <Sparkles className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Need Help Finding Materials?
            </h3>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you access the right study materials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/919392979899"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-200"
              >
                <Users className="w-5 h-5" />
                <span>Contact Support</span>
              </motion.a>
              
              <Link
                to="/papers"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-200"
              >
                <FileText className="w-5 h-5" />
                <span>Browse Question Papers</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Semesters