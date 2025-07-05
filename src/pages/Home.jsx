import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BookOpen, FileText, Calendar, Users, ArrowRight, Download, Sparkles, GraduationCap, Clock, TrendingUp, Shield, Zap, Globe, Award, CheckCircle, Star, Heart, Coffee, Target, Lightbulb, Rocket, Calculator, UserCheck, BarChart3, Brain, Compass, Flame, Layers, Megaphone, Palette, Play, Smartphone, Wifi, ExternalLink, ChevronRight, TrendingUp as Trending, Activity, Bookmark, Eye, ThumbsUp, MessageCircle, Share2, Bell, Gift, Crown, Zap as Lightning, Cpu, Database, Code, PieChart, BarChart, LineChart } from 'lucide-react'

const Home = () => {
  const heroFeatures = [
    {
      icon: BookOpen,
      title: "Study Materials",
      description: "Comprehensive notes and resources",
      color: "bg-blue-500",
      count: "8 Semesters",
      path: "/semesters"
    },
    {
      icon: Calculator,
      title: "Smart Calculators",
      description: "SGPA, CGPA & more tools",
      color: "bg-purple-500",
      count: "4 Tools",
      path: "/sgpa-calculator"
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      description: "Important dates & events",
      color: "bg-green-500",
      count: "Live Updates",
      path: "/calendar"
    },
    {
      icon: FileText,
      title: "Question Papers",
      description: "Previous year papers",
      color: "bg-red-500",
      count: "All Years",
      path: "/papers"
    }
  ]

  const calculatorTools = [
    {
      icon: Target,
      title: "SGPA Calculator",
      description: "Calculate semester grade point average with detailed analysis and grade predictions",
      path: "/sgpa-calculator",
      color: "from-blue-500 to-cyan-500",
      features: ["Grade Scale", "Export Results", "Visual Analytics"],
      popular: true
    },
    {
      icon: Award,
      title: "CGPA Calculator", 
      description: "Cumulative GPA with honours eligibility checker and semester planning",
      path: "/cgpa-calculator",
      color: "from-purple-500 to-pink-500",
      features: ["Honours Check", "Multi-Semester", "Progress Tracking"],
      popular: true
    },
    {
      icon: Lightning,
      title: "External Marks",
      description: "Calculate required external marks for target grades with smart recommendations",
      path: "/external-marks-calculator",
      color: "from-cyan-500 to-blue-500",
      features: ["Grade Targets", "Smart Analysis", "Study Tips"],
      new: true
    },
    {
      icon: UserCheck,
      title: "Attendance Tracker",
      description: "Calculate how many classes you can skip safely based on credit system",
      path: "/attendance-calculator",
      color: "from-emerald-500 to-teal-500",
      features: ["Skip Calculator", "Credit Based", "Safe Limits"],
      new: true
    }
  ]

  const studyResources = [
    {
      icon: Layers,
      title: "Semester Materials",
      description: "Organized by semester and department with faculty-verified content",
      path: "/semesters",
      stats: "12+ Departments",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Brain,
      title: "Question Papers",
      description: "Previous year papers for comprehensive exam preparation",
      path: "/papers", 
      stats: "Multiple Years",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      description: "Important dates, events, and academic schedule",
      path: "/calendar",
      stats: "Live Updates",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Hall Plan",
      description: "SASTRA hall plan system for exam schedules",
      path: "https://sas.sastra.edu/hallplan/",
      external: true,
      stats: "Real-time",
      color: "from-red-500 to-orange-500"
    }
  ]

  const stats = [
    { icon: Users, label: "Active Students", value: "5000+", color: "text-blue-500" },
    { icon: BookOpen, label: "Study Materials", value: "1000+", color: "text-green-500" },
    { icon: Calculator, label: "Calculations Done", value: "50K+", color: "text-purple-500" },
    { icon: Download, label: "Downloads", value: "100K+", color: "text-yellow-500" }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="min-h-screen dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
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
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-full blur-3xl"
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

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white z-10 text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-2 mb-4 lg:mb-6 text-sm"
              >
                <Heart className="w-4 h-4 text-red-400" />
                <span className="font-medium">Made by Sastraites, for Sastraites</span>
                <Crown className="w-3 h-3 text-yellow-400" />
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6 leading-tight"
              >
                Your Ultimate{' '}
                <motion.span
                  animate={{ 
                    color: ['#ffffff', '#fbbf24', '#f59e0b', '#ffffff']
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-flex items-center"
                >
                  Academic Hub
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Rocket className="w-6 h-6 lg:w-8 lg:h-8 ml-2" />
                  </motion.div>
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl mb-6 lg:mb-8 text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Welcome to Material Base - your comprehensive platform for SASTRA academic resources, 
                smart calculators, and study tools. Everything you need to excel in your studies!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 mb-6 lg:mb-8 justify-center lg:justify-start"
              >
                <Link to="/semesters" className="group relative overflow-hidden bg-white text-blue-600 font-bold py-3 px-4 sm:px-6 lg:py-4 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center text-sm sm:text-base">
                  <span className="relative z-10 flex items-center justify-center">
                    Explore Materials
                    <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>
                
                <a
                  href="https://play.google.com/store/apps/details?id=com.materialbase.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-4 sm:px-6 lg:py-4 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20 text-sm sm:text-base"
                >
                  <Play className="w-4 h-4 lg:w-5 lg:h-5" />
                  <span>Download App</span>
                  <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
                </a>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center px-2">
                      <div className="flex items-center justify-center mb-1 lg:mb-2">
                        <Icon className={`w-4 h-4 lg:w-5 lg:h-5 ${stat.color} mr-1`} />
                        <span className="text-base sm:text-lg lg:text-2xl font-bold">{stat.value}</span>
                      </div>
                      <p className="text-xs lg:text-sm text-blue-200 leading-tight">{stat.label}</p>
                    </div>
                  )
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 mt-8 lg:mt-0"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-4 lg:p-8 shadow-2xl border border-white/20"
                >
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-6">
                    {heroFeatures.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <Link
                          key={index}
                          to={item.path}
                          className="group"
                        >
                          <motion.div
                            animate={{ 
                              scale: [1, 1.05, 1],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity,
                              delay: index * 0.5,
                              ease: "easeInOut"
                            }}
                            className="bg-white/20 rounded-xl lg:rounded-2xl p-2 sm:p-3 lg:p-6 text-center hover:bg-white/30 transition-colors duration-300 group-hover:scale-105"
                          >
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 ${item.color} rounded-lg lg:rounded-xl flex items-center justify-center mx-auto mb-1 sm:mb-2 lg:mb-3`}>
                              <Icon className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                            </div>
                            <p className="text-white font-medium text-xs sm:text-sm lg:text-base leading-tight">{item.title}</p>
                            <p className="text-white/70 text-xs mt-0.5 lg:mt-1">{item.count}</p>
                          </motion.div>
                        </Link>
                      )
                    })}
                  </div>
                </motion.div>
                
                {/* Floating elements */}
                <motion.div
                  animate={{ 
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-16 h-16 lg:w-24 lg:h-24 bg-yellow-400/30 rounded-full blur-xl"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, 20, 0],
                    x: [0, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-6 -left-6 lg:-bottom-12 lg:-left-12 w-20 h-20 lg:w-32 lg:h-32 bg-pink-400/20 rounded-full blur-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Calculators Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-4 lg:mb-6">
              <Calculator className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-purple-600" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 dark:text-white">
                Smart Academic Calculators
              </h2>
            </div>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Powerful tools to track your academic progress and plan your semester strategy
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          >
            {calculatorTools.map((tool, index) => {
              const Icon = tool.icon
              
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Link
                    to={tool.path}
                    className="group relative overflow-hidden bg-white dark:bg-gray-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 block h-full"
                  >
                    {/* Popular/New Badge */}
                    {(tool.popular || tool.new) && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          tool.popular 
                            ? 'bg-yellow-400 text-yellow-900' 
                            : 'bg-green-400 text-green-900'
                        }`}>
                          {tool.popular ? '🔥 Popular' : '✨ New'}
                        </span>
                      </div>
                    )}

                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-600 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative p-6 lg:p-8">
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0]
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                      >
                        <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </motion.div>
                      
                      <div className="text-center">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-800 dark:text-white mb-3">
                          {tool.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">
                          {tool.description}
                        </p>
                        
                        <div className="flex flex-wrap justify-center gap-2 mb-4 lg:mb-6">
                          {tool.features.map((feature, idx) => (
                            <span key={idx} className="inline-flex items-center space-x-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 py-1 lg:px-3 lg:py-1 rounded-full text-xs lg:text-sm font-medium">
                              <CheckCircle className="w-3 h-3" />
                              <span>{feature}</span>
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400 font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-200">
                          <span>Try Calculator</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Study Resources Section */}
      <section className="py-12 lg:py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 dark:text-white mb-4 lg:mb-6">
              Complete Study Resources
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
              Everything you need for academic success, organized and easily accessible
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {studyResources.map((resource, index) => {
              const Icon = resource.icon
              const Component = resource.external ? 'a' : Link
              const props = resource.external 
                ? { href: resource.path, target: '_blank', rel: 'noopener noreferrer' }
                : { to: resource.path }
              
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Component
                    {...props}
                    className="group block h-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative h-full bg-white dark:bg-gray-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
                    >
                      <div className={`h-24 lg:h-32 bg-gradient-to-br ${resource.color} relative overflow-hidden`}>
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
                            className="absolute w-24 h-24 lg:w-32 lg:h-32 bg-white rounded-full -top-12 -left-12 lg:-top-16 lg:-left-16"
                          />
                        </div>
                        
                        <div className="relative z-10 p-4 lg:p-6 h-full flex items-center justify-between">
                          <div className="flex items-center space-x-2 lg:space-x-3">
                            <motion.div
                              animate={{
                                y: [0, -10, 0],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{ 
                                duration: 4, 
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                              className="w-8 h-8 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                            >
                              <Icon className="w-4 h-4 lg:w-6 lg:h-6 text-white" />
                            </motion.div>
                            <div>
                              <h3 className="text-sm lg:text-lg font-bold text-white">
                                {resource.title}
                              </h3>
                              <div className="flex items-center space-x-1 text-white/80 text-xs lg:text-sm">
                                <Sparkles className="w-2 h-2 lg:w-3 lg:h-3" />
                                <span>{resource.stats}</span>
                              </div>
                            </div>
                          </div>
                          
                          <motion.div
                            whileHover={{ 
                              scale: 1.2, 
                              rotate: 15 
                            }}
                            className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300"
                          >
                            {resource.external ? (
                              <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                            ) : (
                              <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                            )}
                          </motion.div>
                        </div>
                      </div>
                      
                      <div className="p-4 lg:p-6">
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm lg:text-base">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-gray-800 dark:text-white text-sm lg:text-base">
                            Explore Now
                          </span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </Component>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Mobile App Promotion Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0">
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
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white text-center lg:text-left"
            >
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4 lg:mb-6">
                <Smartphone className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400" />
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">
                  Get the Mobile App
                </h2>
              </div>
              
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 lg:mb-8 leading-relaxed">
                Take Material Base with you everywhere! Access all features on your mobile device 
                with our beautifully designed app.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-6 lg:mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Download className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm lg:text-base">Offline Access</h4>
                    <p className="text-xs lg:text-sm text-blue-200">Download materials for offline study</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm lg:text-base">Push Notifications</h4>
                    <p className="text-xs lg:text-sm text-blue-200">Get notified about new materials</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Bookmark className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm lg:text-base">Bookmarks</h4>
                    <p className="text-xs lg:text-sm text-blue-200">Save your favorite materials</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 bg-white/20 rounded-xl flex items-center justify-center">
                    <Share2 className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm lg:text-base">Easy Sharing</h4>
                    <p className="text-xs lg:text-sm text-blue-200">Share materials with classmates</p>
                  </div>
                </div>
              </div>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.materialbase.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-purple-600 font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Play className="w-5 h-5 lg:w-6 lg:h-6" />
                <span>Download from Play Store</span>
                <ExternalLink className="w-4 h-4 lg:w-5 lg:h-5" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              <div className="relative">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 lg:p-8 shadow-2xl border border-white/20"
                >
                  <div className="text-center">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 bg-white rounded-3xl flex items-center justify-center mx-auto mb-4 lg:mb-6 shadow-xl">
                      <Smartphone className="w-8 h-8 lg:w-12 lg:h-12 text-purple-600" />
                    </div>
                    
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-4">
                      Material Base App
                    </h3>
                    
                    <div className="grid grid-cols-3 gap-4 mb-4 lg:mb-6">
                      <div className="text-center">
                        <div className="text-xl lg:text-2xl font-bold text-yellow-400">4.8</div>
                        <div className="text-xs lg:text-sm text-white/80">Rating</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl lg:text-2xl font-bold text-green-400">10K+</div>
                        <div className="text-xs lg:text-sm text-white/80">Downloads</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl lg:text-2xl font-bold text-blue-400">Free</div>
                        <div className="text-xs lg:text-sm text-white/80">Always</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-center space-x-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-white/80 text-sm lg:text-base">
                      "Best app for SASTRA students! Everything I need in one place."
                    </p>
                  </div>
                </motion.div>
                
                {/* Floating app icons */}
                <motion.div
                  animate={{ 
                    y: [0, -30, 0],
                    x: [0, 20, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 lg:-top-8 lg:-right-8 w-12 h-12 lg:w-16 lg:h-16 bg-yellow-400/30 rounded-2xl blur-xl"
                />
                
                <motion.div
                  animate={{ 
                    y: [0, 20, 0],
                    x: [0, -15, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-6 -left-6 lg:-bottom-12 lg:-left-12 w-16 h-16 lg:w-20 lg:h-20 bg-pink-400/20 rounded-2xl blur-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
        <div className="absolute inset-0">
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
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-yellow-400/20 to-pink-400/20 rounded-full blur-3xl"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-4 lg:mb-6">
              <Gift className="w-6 h-6 lg:w-8 lg:h-8 text-yellow-400" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white text-center">
                Ready to Excel in Your Studies?
              </h2>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 lg:mb-8 max-w-2xl mx-auto px-4">
              Join thousands of SASTRA students who are already using Material Base to achieve academic success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/semesters" 
                className="group relative overflow-hidden bg-white text-blue-600 font-bold py-3 px-4 sm:px-6 lg:py-4 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-sm sm:text-base"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start Exploring
                  <Rocket className="w-4 h-4 lg:w-5 lg:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              
              <a
                href="https://play.google.com/store/apps/details?id=com.materialbase.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-3 px-4 sm:px-6 lg:py-4 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Play className="w-4 h-4 lg:w-5 lg:h-5" />
                <span>Get Mobile App</span>
                <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4" />
              </a>
            </div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 lg:mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-200"
            >
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Secure & Safe</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-red-400" />
                <span className="text-sm">Made with Love</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-green-400" />
                <span className="text-sm">Student Community</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home