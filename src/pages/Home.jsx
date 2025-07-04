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
  Rocket
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: FileText,
      title: "Study Materials",
      description: "Access comprehensive PDFs, notes, and study guides",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      highlight: "Organized by semester"
    },
    {
      icon: BookOpen,
      title: "Digital Library", 
      description: "Extensive collection of textbooks and references",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      highlight: "Faculty approved"
    },
    {
      icon: GraduationCap,
      title: "Presentations",
      description: "Faculty presentations and lecture slides",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      highlight: "Latest updates"
    },
    {
      icon: FileText,
      title: "Question Papers",
      description: "Previous year papers for exam preparation",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      highlight: "Multiple years",
      link: "/papers"
    }
  ]

  const realBenefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "No more searching through multiple sources - everything in one place"
    },
    {
      icon: Shield,
      title: "Reliable Content",
      description: "Materials sourced directly from faculty and verified sources"
    },
    {
      icon: Zap,
      title: "Quick Access",
      description: "Fast downloads and mobile-friendly interface"
    },
    {
      icon: Globe,
      title: "Always Available",
      description: "Access your study materials anytime, anywhere"
    }
  ]

  const actualFeatures = [
    {
      icon: Target,
      title: "Semester-wise Organization",
      description: "Materials organized by semester and department for easy navigation"
    },
    {
      icon: Calendar,
      title: "Academic Calendar",
      description: "Stay updated with important dates, exams, and university events"
    },
    {
      icon: Coffee,
      title: "Student-Friendly",
      description: "Built by students who understand what you actually need"
    },
    {
      icon: Lightbulb,
      title: "Smart Search",
      description: "Find exactly what you're looking for with intuitive organization"
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
                Your Academic{' '}
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
                  Companion
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
                Welcome to Material Base - your one-stop destination for all SASTRA academic resources. 
                Find study materials, previous papers, and stay updated with the academic calendar.
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
                  to="/calendar"
                  className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  <Calendar className="w-5 h-5" />
                  <span>View Calendar</span>
                </Link>
              </motion.div>

              {/* Quick stats - Real and modest */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
              >
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen className="w-5 h-5 text-blue-300 mr-1" />
                    <span className="text-2xl font-bold">8</span>
                  </div>
                  <p className="text-sm text-blue-200">Semesters</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Users className="w-5 h-5 text-blue-300 mr-1" />
                    <span className="text-2xl font-bold">12+</span>
                  </div>
                  <p className="text-sm text-blue-200">Departments</p>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <FileText className="w-5 h-5 text-blue-300 mr-1" />
                    <span className="text-2xl font-bold">24/7</span>
                  </div>
                  <p className="text-sm text-blue-200">Available</p>
                </div>
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
                    {[
                      { icon: BookOpen, color: "bg-blue-500", label: "Materials" },
                      { icon: FileText, color: "bg-green-500", label: "Papers" },
                      { icon: Calendar, color: "bg-purple-500", label: "Calendar" },
                      { icon: GraduationCap, color: "bg-red-500", label: "Resources" }
                    ].map((item, index) => {
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
                          <p className="text-white font-medium">{item.label}</p>
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

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-6">
              What You'll Find Here
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Everything you need for your academic journey at SASTRA University
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              const Component = feature.link ? Link : 'div'
              const props = feature.link ? { to: feature.link } : {}
              
              return (
                <motion.div key={index} variants={itemVariants}>
                  <Component
                    {...props}
                    className="group relative overflow-hidden bg-white dark:bg-gray-700 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-600 dark:to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="relative p-8">
                      <motion.div
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, 0]
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className="text-center">
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                          {feature.title}
                        </h3>
                        
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {feature.description}
                        </p>
                        
                        <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                          <CheckCircle className="w-4 h-4" />
                          <span>{feature.highlight}</span>
                        </div>
                      </div>
                    </div>
                  </Component>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              Why Material Base?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Simple, reliable, and built with students in mind
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {realBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-shadow duration-300"
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Getting your study materials is simple and straightforward
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {actualFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{index + 1}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
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
              Ready to Start Your Academic Journey?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join your fellow Sastraites and access all the study materials you need
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/semesters" 
                className="group relative overflow-hidden bg-white text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Browse Materials</span>
              </Link>
              
              <a
                href="https://sas.sastra.edu/hallplan/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20"
              >
                Check Hall Plan
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home