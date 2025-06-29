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
  Star,
  TrendingUp,
  Shield,
  Zap,
  Globe,
  Award
} from 'lucide-react'

const Home = () => {
  const features = [
    {
      icon: FileText,
      title: "Study Materials",
      description: "Access comprehensive PDFs, notes, and study guides",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      stats: "500+ PDFs"
    },
    {
      icon: BookOpen,
      title: "Digital Library",
      description: "Extensive collection of textbooks and references",
      color: "bg-gradient-to-br from-green-500 to-green-600",
      stats: "200+ Books"
    },
    {
      icon: GraduationCap,
      title: "Presentations",
      description: "Faculty presentations and lecture slides",
      color: "bg-gradient-to-br from-purple-500 to-purple-600",
      stats: "300+ PPTs"
    },
    {
      icon: FileText,
      title: "Question Papers",
      description: "Previous year papers for exam preparation",
      color: "bg-gradient-to-br from-red-500 to-red-600",
      stats: "150+ Papers",
      link: "/papers"
    }
  ]

  const stats = [
    { number: "10K+", label: "Students", icon: Users },
    { number: "1000+", label: "Materials", icon: BookOpen },
    { number: "50+", label: "Departments", icon: GraduationCap },
    { number: "99%", label: "Uptime", icon: TrendingUp }
  ]

  const benefits = [
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Study materials available round the clock"
    },
    {
      icon: Shield,
      title: "Verified Content",
      description: "All materials verified by faculty members"
    },
    {
      icon: Zap,
      title: "Fast Downloads",
      description: "Quick access to all your study resources"
    },
    {
      icon: Globe,
      title: "Mobile Friendly",
      description: "Access from any device, anywhere"
    }
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      department: "CSE",
      text: "Material Base has been a game-changer for my studies. Everything I need is just a click away!",
      rating: 5
    },
    {
      name: "Rahul Kumar",
      department: "ECE",
      text: "The organized structure and quality of materials here is exceptional. Highly recommended!",
      rating: 5
    },
    {
      name: "Ananya Patel",
      department: "Mechanical",
      text: "Thanks to Material Base, I never miss important study materials. It's incredibly helpful!",
      rating: 5
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

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
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
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-sm font-medium">Trusted by 10,000+ Students</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
              >
                Learning is{' '}
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
                  Fun
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-8 h-8 ml-2" />
                  </motion.div>
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xl lg:text-2xl mb-8 text-blue-100 leading-relaxed max-w-2xl"
              >
                Welcome to Material Base - your ultimate destination for academic excellence. 
                Access comprehensive study materials, previous papers, and resources curated by faculty.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Link to="/semesters" className="group relative overflow-hidden bg-white text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                </Link>
                
                <a
                  href="https://play.google.com/store/apps/details?id=com.materialbase.materialbase"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-medium py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 border border-white/20"
                >
                  <Download className="w-5 h-5" />
                  <span>Download App</span>
                </a>
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
                  variants={floatingVariants}
                  animate="animate"
                  className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
                >
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { icon: BookOpen, color: "bg-blue-500", label: "Materials" },
                      { icon: FileText, color: "bg-green-500", label: "Papers" },
                      { icon: Calendar, color: "bg-purple-500", label: "Calendar" },
                      { icon: Users, color: "bg-red-500", label: "Community" }
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
              Everything You Need to Excel
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive study resources designed to help SASTRA students achieve academic success
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
                          <Star className="w-4 h-4" />
                          <span>{feature.stats}</span>
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
              Why Choose Material Base?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Built by students, for students - with features that matter
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => {
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

      {/* Testimonials Section */}
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
              What Students Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Join thousands of satisfied students
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
                className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.department} Department
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Ready to Excel in Your Studies?
            </h2>
            
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join the Material Base community and access everything you need for academic success
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/semesters" 
                className="group relative overflow-hidden bg-white text-blue-600 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span className="relative z-10">Start Learning Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Start Learning Now
                </span>
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