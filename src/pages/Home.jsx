import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  BookOpen, 
  FileText, 
  Calendar, 
  Users, 
  ArrowRight, 
  Download, 
  Sparkles,
  GraduationCap,
  Clock,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Award,
  CheckCircle,
  Star,
  Heart,
  Coffee,
  Target,
  Lightbulb,
  Rocket,
  Calculator,
  UserCheck,
  BarChart3,
  Brain,
  Compass,
  Flame,
  Layers,
  Smartphone,
  Wifi,
  ExternalLink,
  Play,
  ChevronRight,
  Briefcase,
  PieChart,
  TrendingDown,
  Activity
} from 'lucide-react'

const Home = () => {
  const heroFeatures = [
    {
      icon: BookOpen,
      title: "Study Materials",
      description: "8 semesters, 12+ departments",
      color: "bg-blue-500",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: Calculator,
      title: "Smart Calculators",
      description: "SGPA, CGPA & attendance tools",
      color: "bg-purple-500",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      description: "Live updates & important dates",
      color: "bg-green-500",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: FileText,
      title: "Question Papers",
      description: "Previous years, all departments",
      color: "bg-red-500",
      gradient: "from-red-500 to-red-600"
    }
  ]

  const calculatorTools = [
    {
      icon: Target,
      title: "SGPA Calculator",
      description: "Calculate semester grade point average with detailed subject-wise analysis and grade recommendations",
      path: "/sgpa-calculator",
      color: "from-blue-500 to-cyan-500",
      features: ["Grade Scale Reference", "Export Results", "Visual Analytics", "Subject Management"]
    },
    {
      icon: Award,
      title: "CGPA Calculator", 
      description: "Cumulative GPA calculator with honours eligibility checker and multi-semester tracking",
      path: "/cgpa-calculator",
      color: "from-purple-500 to-pink-500",
      features: ["Honours Eligibility", "Multi-Semester", "Progress Tracking", "Grade Improvement Tips"]
    },
    {
      icon: Zap,
      title: "External Marks Calculator",
      description: "Calculate required external marks to achieve target grades based on internal marks",
      path: "/external-marks-calculator",
      color: "from-cyan-500 to-blue-500",
      features: ["Grade Targets", "Smart Analysis", "Study Recommendations", "Performance Insights"]
    },
    {
      icon: UserCheck,
      title: "Attendance Calculator",
      description: "Calculate how many classes you can skip safely while maintaining minimum attendance",
      path: "/attendance-calculator",
      color: "from-emerald-500 to-teal-500",
      features: ["Skip Calculator", "Credit-Based Analysis", "Safe Attendance Limits", "Class Planning"]
    }
  ]

  const studyResources = [
    {
      icon: Layers,
      title: "Semester Materials",
      description: "Comprehensive study materials organized by semester and department",
      path: "/semesters",
      stats: "12+ Departments",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Brain,
      title: "Question Papers",
      description: "Previous year question papers for effective exam preparation",
      path: "/papers", 
      stats: "Multiple Years",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      description: "Stay updated with important academic dates and events",
      path: "/calendar",
      stats: "Live Updates",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Hall Plan System",
      description: "Access SASTRA's official hall plan and seating arrangements",
      path: "https://sas.sastra.edu/hallplan/",
      external: true,
      stats: "Real-time Access",
      color: "from-red-500 to-orange-500"
    }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "Save Valuable Time",
      description: "Everything in one place - no more searching through multiple sources and websites",
      color: "text-blue-500",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: Shield,
      title: "Verified Content",
      description: "All materials sourced from faculty and verified by senior students for accuracy",
      color: "text-green-500",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfect experience on all devices with responsive design and fast loading",
      color: "text-purple-500",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    },
    {
      icon: Wifi,
      title: "Always Available",
      description: "24/7 access to all your academic resources, tools, and calculators",
      color: "text-red-500",
      bgColor: "bg-red-50 dark:bg-red-900/20"
    },
    {
      icon: Compass,
      title: "Easy Navigation",
      description: "Intuitive organization and smart search makes finding materials effortless",
      color: "text-yellow-500",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      icon: TrendingUp,
      title: "Track Progress",
      description: "Monitor your academic performance with advanced calculators and analytics",
      color: "text-indigo-500",
      bgColor: "bg-indigo-50 dark:bg-indigo-900/20"
    }
  ]

  const stats = [
    { number: "8", label: "Semesters Covered", icon: BookOpen },
    { number: "12+", label: "Departments", icon: Users },
    { number: "4", label: "Smart Calculators", icon: Calculator },
    { number: "24/7", label: "Availability", icon: Clock }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      department: "Computer Science",
      year: "Final Year",
      text: "Material Base completely transformed my study routine. The CGPA calculator helped me plan my final year strategy perfectly!",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Arjun Kumar",
      department: "Electronics & Communication",
      year: "Third Year", 
      text: "The question papers section is a lifesaver during exam time. Everything is so well organized and easy to find.",
      rating: 5,
      avatar: "👨‍🔬"
    },
    {
      name: "Meera Reddy",
      department: "Mechanical Engineering",
      year: "Second Year",
      text: "Love the attendance calculator! It helps me balance academics with extracurricular activities perfectly.",
      rating: 5,
      avatar: "👩‍🎓"
    }
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white z-10"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
              >
                <Heart className="w-5 h-5 text-red-400" />
                <span className="text-sm font-medium">Made by Sastraites, for Sastraites</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Your Complete{' '}
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
                    <Rocket className="w-8 h-8 ml-2" />
                  </motion.div>
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed max-w-2xl"
              >
                Everything you need for academic success at SASTRA University. Study materials, 
                smart calculators, question papers, and more - all in one beautiful platform.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Link to="/semesters" className="group relative overflow-hidden bg-white text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center justify-center">
                    Explore Materials
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>
                
                <Link
                  to="/sgpa-calculator"
                  className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  <Calculator className="w-5 h-5" />
                  <span>Try Calculators</span>
                </Link>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <div key={index} className="text-center">
                      <div className="flex items-center justify-center mb-2">
                        <Icon className="w-5 h-5 text-blue-300 mr-1" />
                        <span className="text-2xl font-bold">{stat.number}</span>
                      </div>
                      <p className="text-sm text-blue-200">{stat.label}</p>
                    </div>
                  )
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
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
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {heroFeatures.map((item, index) => {
                      const Icon = item.icon
                      return (
                        <motion.div
                          key={index}
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
                          className="bg-white/20 rounded-2xl p-6 text-center hover:bg-white/30 transition-colors duration-300"
                        >
                          <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h3 className="text-white font-bold text-sm mb-1">{item.title}</h3>
                          <p className="text-white/80 text-xs">{item.description}</p>
                        </motion.div>
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
                  className="absolute -top-8 -right-8 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl"
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
                  className="absolute -bottom-12 -left-12 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calculator Tools Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Calculator className="w-8 h-8 text-purple-600" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
                Smart Academic Calculators
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Advanced tools to help you track, plan, and optimize your academic performance
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {calculatorTools.map((tool, index) => {
              const Icon = tool.icon
              
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Link
                    to={tool.path}
                    className="group block h-full"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="relative overflow-hidden bg-white dark:bg-gray-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      
                      <div className="relative p-8">
                        <div className="flex items-start space-x-4 mb-6">
                          <motion.div
                            whileHover={{ 
                              scale: 1.1,
                              rotate: [0, -5, 5, 0]
                            }}
                            transition={{ duration: 0.3 }}
                            className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-shadow duration-300`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </motion.div>
                          
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                              {tool.title}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {tool.description}
                            </p>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3 mb-6">
                          {tool.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                            Try Calculator
                          </span>
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <ArrowRight className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform duration-200" />
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Study Resources Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
                Study Resources
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive collection of study materials and academic resources
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="relative overflow-hidden bg-white dark:bg-gray-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-full"
                    >
                      <div className={`h-32 bg-gradient-to-br ${resource.color} relative overflow-hidden`}>
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
                        </div>
                        
                        <div className="relative z-10 p-6 h-full flex items-center justify-between">
                          <motion.div
                            animate={{
                              y: [0, -5, 0],
                              rotate: [0, 5, -5, 0]
                            }}
                            transition={{ 
                              duration: 3, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center"
                          >
                            <Icon className="w-6 h-6 text-white" />
                          </motion.div>
                          
                          {resource.external && (
                            <ExternalLink className="w-5 h-5 text-white/80" />
                          )}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {resource.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {resource.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                            <Star className="w-4 h-4" />
                            <span>{resource.stats}</span>
                          </div>
                          
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ 
                              duration: 1.5, 
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200" />
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

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Sparkles className="w-8 h-8 text-yellow-500" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
                Why Choose Material Base?
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Built by students, for students - with features that actually matter
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -5 }}
                    className={`${benefit.bgColor} rounded-3xl p-8 h-full transition-all duration-300 hover:shadow-xl`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-16 h-16 ${benefit.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${benefit.color}`} />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-green-500" />
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white">
                What Students Say
              </h2>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Real feedback from SASTRA students who use Material Base daily
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{testimonial.department}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.year}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile App Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 relative overflow-hidden">
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
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Smartphone className="w-8 h-8 text-white" />
              <h2 className="text-4xl lg:text-5xl font-bold text-white">
                Get the Mobile App
              </h2>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Take Material Base with you everywhere. Download our mobile app for the best experience.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <h3 className="text-3xl font-bold mb-6">
                Study Smarter, Not Harder
              </h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Offline access to materials</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Push notifications for updates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Faster calculator tools</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Dark mode support</span>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://play.google.com/store/apps/details?id=com.materialbase.sastra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-white text-purple-600 font-bold py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                <Play className="w-6 h-6" />
                <div className="text-left">
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div className="text-lg font-bold">Google Play</div>
                </div>
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
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
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
              >
                <div className="text-center">
                  <Smartphone className="w-24 h-24 text-white mx-auto mb-6" />
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Material Base Mobile
                  </h4>
                  <p className="text-blue-100 mb-6">
                    All features optimized for mobile use
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/20 rounded-xl p-4">
                      <Calculator className="w-8 h-8 text-white mx-auto mb-2" />
                      <p className="text-sm text-white">Calculators</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <BookOpen className="w-8 h-8 text-white mx-auto mb-2" />
                      <p className="text-sm text-white">Materials</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <Calendar className="w-8 h-8 text-white mx-auto mb-2" />
                      <p className="text-sm text-white">Calendar</p>
                    </div>
                    <div className="bg-white/20 rounded-xl p-4">
                      <FileText className="w-8 h-8 text-white mx-auto mb-2" />
                      <p className="text-sm text-white">Papers</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 relative overflow-hidden">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Excel in Your Studies?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of SASTRA students who are already using Material Base to achieve academic success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/semesters" 
                className="group relative overflow-hidden bg-white text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Start Exploring
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </Link>
              
              <a
                href="https://sas.sastra.edu/hallplan/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20 flex items-center justify-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>Check Hall Plan</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home