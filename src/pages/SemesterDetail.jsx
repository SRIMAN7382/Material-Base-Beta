import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FolderOpen, ExternalLink, BookOpen, Users, Star, ArrowLeft, Sparkles, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

const SemesterDetail = () => {
  const { id } = useParams()
  
  const semesterData = {
    3: {
      title: 'Semester 3',
      description: 'Department-specific core subjects and fundamental engineering concepts',
      departments: [
        { name: 'AEROSPACE', link: 'https://drive.google.com/drive/folders/1AIchr0eSIq27tmshWsrXZPi3HBbhmbOG?usp=sharing', color: 'from-blue-500 to-blue-600', icon: '✈️' },
        { name: 'BIOTECHNOLOGY', link: 'https://drive.google.com/drive/folders/1-3qFdM2VU40JXa7lFZqsw69q4gu-luH4?usp=sharing', color: 'from-green-500 to-green-600', icon: '🧬' },
        { name: 'CSE', link: 'https://drive.google.com/drive/u/4/folders/1JWzazYiV3ry7IeadbJs5xCnrlOIHetB1', color: 'from-purple-500 to-purple-600', icon: '💻' },
        { name: 'CIVIL', link: 'https://drive.google.com/drive/u/0/folders/1Rpbt7zURT1FoP6JZm76sbPhWHVVVHUjW', color: 'from-red-500 to-red-600', icon: '🏗️' },
        { name: 'CSBS', link: 'https://drive.google.com/drive/folders/1NkrYykRPnY-EQF-QaThpRN1ROvwxNbCw', color: 'from-yellow-500 to-yellow-600', icon: '📊' },
        { name: 'IOT', link: 'https://drive.google.com/drive/u/4/folders/1JWzazYiV3ry7IeadbJs5xCnrlOIHetB1', color: 'from-indigo-500 to-indigo-600', icon: '🌐' },
        { name: 'IT', link: 'https://drive.google.com/drive/folders/1TyQOKdgIqizo4p6YZ-0v75CjBvl1VWkC?usp=drive_link', color: 'from-pink-500 to-pink-600', icon: '🖥️' },
        { name: 'ICT', link: 'https://drive.google.com/drive/u/4/folders/1TyQOKdgIqizo4p6YZ-0v75CjBvl1VWkC', color: 'from-teal-500 to-teal-600', icon: '📡' },
        { name: 'ECE', link: 'https://drive.google.com/drive/u/4/folders/19U7wFLtcwEg3JOc98JzoHeAQQwYWwlrf', color: 'from-orange-500 to-orange-600', icon: '⚡' },
        { name: 'EEE', link: 'https://drive.google.com/drive/u/0/folders/19RmmtxCWEYgO4p2Ym962wFUrwCGB1XeB', color: 'from-cyan-500 to-cyan-600', icon: '🔌' },
        { name: 'EIE', link: 'https://drive.google.com/drive/folders/1rc8Y4MgMX9e5yt1RnKCCisorxM9hN2Al?usp=drive_link', color: 'from-lime-500 to-lime-600', icon: '🔧' },
        { name: 'MECHANICAL', link: 'https://drive.google.com/drive/u/1/folders/1BA9RYB2UU86K7vOvuLkzDwr2NUKCVDTf', color: 'from-amber-500 to-amber-600', icon: '⚙️' },
        { name: 'MECHATRONICS', link: 'https://drive.google.com/drive/folders/1emJWtfXo91SsiQx0Bfn5OIlLCZynhVrW?usp=sharing', color: 'from-rose-500 to-rose-600', icon: '🤖' }
      ]
    },
    4: {
      title: 'Semester 4',
      description: 'Advanced core subjects and specialized laboratory courses',
      departments: [
        { name: 'AEROSPACE', link: 'https://drive.google.com/drive/folders/1Gmem7ecw2Tr-wHWyJGLECSjt-w6_guI0?usp=sharing', color: 'from-blue-500 to-blue-600', icon: '✈️' },
        { name: 'BIOTECHNOLOGY', link: 'https://drive.google.com/drive/folders/1Nl3vIiQqnlwIaUURJORV3bSPuHmhtffv', color: 'from-green-500 to-green-600', icon: '🧬' },
        { name: 'CSE', link: 'https://drive.google.com/drive/u/4/folders/1A04tgtB_tzuBz29eg_ZE-cN3C08aEF5k', color: 'from-purple-500 to-purple-600', icon: '💻' },
        { name: 'CIVIL', link: 'https://drive.google.com/drive/u/0/folders/1Rpbt7zURT1FoP6JZm76sbPhWHVVVHUjW', color: 'from-red-500 to-red-600', icon: '🏗️' },
        { name: 'CSBS', link: 'https://drive.google.com/drive/folders/1NkrYykRPnY-EQF-QaThpRN1ROvwxNbCw', color: 'from-yellow-500 to-yellow-600', icon: '📊' },
        { name: 'IOT', link: 'https://drive.google.com/drive/u/4/folders/1t35bYgiEnu84OMtbeWPmiIKi9ysDE-D-', color: 'from-indigo-500 to-indigo-600', icon: '🌐' },
        { name: 'IT', link: 'https://drive.google.com/drive/u/4/folders/1t35bYgiEnu84OMtbeWPmiIKi9ysDE-D-', color: 'from-pink-500 to-pink-600', icon: '🖥️' },
        { name: 'ICT', link: 'https://drive.google.com/drive/folders/1CD4Mm7xGd5PrAFO-MyJKReoIdcqrozI6?usp=drive_link', color: 'from-teal-500 to-teal-600', icon: '📡' },
        { name: 'ECE', link: 'https://drive.google.com/drive/folders/1GEVNQAs2rv0AUcTLol5Rz-91MyMir1SO?usp=share_link', color: 'from-orange-500 to-orange-600', icon: '⚡' },
        { name: 'EEE', link: 'https://drive.google.com/drive/u/0/folders/17ZN2RFfzT4-e5m6xnHVDzdmKIyK4TNVR', color: 'from-cyan-500 to-cyan-600', icon: '🔌' },
        { name: 'EIE', link: 'https://drive.google.com/drive/folders/1XqLBdnWxeWjjh6mHLNE1je4NcDNpCoIr?usp=drive_link', color: 'from-lime-500 to-lime-600', icon: '🔧' },
        { name: 'MECHANICAL', link: 'https://drive.google.com/drive/u/1/folders/1-wo9s1lpvthH-I2agHN7QNpMFlySwwnd', color: 'from-amber-500 to-amber-600', icon: '⚙️' },
        { name: 'MECHATRONICS', link: 'https://drive.google.com/drive/folders/1ol-nloz1eXbNkWSg9Rwei0LJDgX6zocI?usp=sharing', color: 'from-rose-500 to-rose-600', icon: '🤖' }
      ]
    },
    5: {
      title: 'Semester 5',
      description: 'Specialization begins with advanced departmental subjects',
      departments: [
        { name: 'AEROSPACE', link: 'https://drive.google.com/drive/folders/1Avk-hLvmB5aeuoxJPENe-dpyShLm5vW9?usp=drive_link', color: 'from-blue-500 to-blue-600', icon: '✈️' },
        { name: 'BIOTECH', link: '#', color: 'from-green-500 to-green-600', icon: '🧬' },
        { name: 'CSE', link: 'https://drive.google.com/drive/folders/1Zcu-2IdTx_5r8_EuSUGWai4bSjvym--L?usp=sharing', color: 'from-purple-500 to-purple-600', icon: '💻' },
        { name: 'CIVIL', link: 'https://drive.google.com/drive/u/0/folders/1nl6O97RL9LKXt1mvZv8mLRLc0WXPx1UA', color: 'from-red-500 to-red-600', icon: '🏗️' },
        { name: 'IT', link: 'https://drive.google.com/drive/folders/1wePTXbNjTwsFbF7bVBzxH6k0RpgOCUwi', color: 'from-pink-500 to-pink-600', icon: '🖥️' },
        { name: 'ICT', link: 'https://drive.google.com/drive/folders/1Wr0ksIrG_AgHWwXSQMNHheZWdLDp5aG5?usp=drive_link', color: 'from-teal-500 to-teal-600', icon: '📡' },
        { name: 'IOT', link: '#', color: 'from-indigo-500 to-indigo-600', icon: '🌐' },
        { name: 'ECE', link: 'https://drive.google.com/drive/folders/1pxDYkjYFcLRYy0K4pzWsr6YrjYMy_xCw?usp=drive_link', color: 'from-orange-500 to-orange-600', icon: '⚡' },
        { name: 'EEE', link: 'https://drive.google.com/drive/folders/1p-jZ7TPJCqrCubTSj9N_-3WfwyaF1T5K?usp=drive_link', color: 'from-cyan-500 to-cyan-600', icon: '🔌' },
        { name: 'EIE', link: '#', color: 'from-lime-500 to-lime-600', icon: '🔧' },
        { name: 'MECHANICAL', link: 'https://drive.google.com/drive/u/1/folders/1wp73DjhCIgGvCs2kgLzaTsUJoSqs5Svu', color: 'from-amber-500 to-amber-600', icon: '⚙️' },
        { name: 'MECHATRONICS', link: 'https://drive.google.com/drive/folders/1CvLsC6Ay1tS32pQdM-HBIo2UnSRFW6o4?usp=drive_link', color: 'from-rose-500 to-rose-600', icon: '🤖' }
      ]
    },
    6: {
      title: 'Semester 6',
      description: 'Advanced specialization and industry-oriented subjects',
      departments: [
        { name: 'AEROSPACE', link: 'https://drive.google.com/drive/folders/1Cxmvu_tmD5Pve3g57KaQ2-JX10OfvTRq?usp=drive_link', color: 'from-blue-500 to-blue-600', icon: '✈️' },
        { name: 'BIOTECH', link: '#', color: 'from-green-500 to-green-600', icon: '🧬' },
        { name: 'CSE', link: 'https://drive.google.com/drive/folders/1hzgn3MGGIBkNpr7TqDUUnSJRv9toDxE3?usp=sharing', color: 'from-purple-500 to-purple-600', icon: '💻' },
        { name: 'CIVIL', link: 'https://drive.google.com/drive/folders/1epvlc9E8i8NqkYZEHhZloOL3IYWpc-M4?usp=drive_link', color: 'from-red-500 to-red-600', icon: '🏗️' },
        { name: 'IT', link: 'https://drive.google.com/drive/folders/19SoaCs4aRKLBaUI0itAQFXnFcEfu8wW_?usp=drive_link', color: 'from-pink-500 to-pink-600', icon: '🖥️' },
        { name: 'IOT', link: '#', color: 'from-indigo-500 to-indigo-600', icon: '🌐' },
        { name: 'ICT', link: 'https://drive.google.com/drive/folders/1s54p3v3kEgvd-lpXXRQKhOtzya_fp5tI?usp=drive_link', color: 'from-teal-500 to-teal-600', icon: '📡' },
        { name: 'ECE', link: 'https://drive.google.com/drive/folders/1fS0bW_RS_NFFMbjIDxgiVttbHqqeR3Uu?usp=sharing', color: 'from-orange-500 to-orange-600', icon: '⚡' },
        { name: 'EEE', link: 'https://drive.google.com/drive/folders/1-VZtrWBZLxy_fOUU1uNEnV0GK-k1kVGF?usp=drive_link', color: 'from-cyan-500 to-cyan-600', icon: '🔌' },
        { name: 'EIE', link: '#', color: 'from-lime-500 to-lime-600', icon: '🔧' },
        { name: 'MECHANICAL', link: 'https://drive.google.com/drive/u/1/folders/1L3WHKSokMaebWWbjrPLnf4hLVXMuLFDG', color: 'from-amber-500 to-amber-600', icon: '⚙️' },
        { name: 'MECHATRONICS', link: 'https://drive.google.com/drive/folders/1F3IKAbREGn3DGTFbvPzzyHoeERSzBDfK?usp=drive_link', color: 'from-rose-500 to-rose-600', icon: '🤖' }
      ]
    },
    7: {
      title: 'Semester 7',
      description: 'Industry-oriented subjects and project work',
      departments: [
        { name: 'AEROSPACE', link: '#', color: 'from-blue-500 to-blue-600', icon: '✈️' },
        { name: 'BIOTECHNOLOGY', link: '#', color: 'from-green-500 to-green-600', icon: '🧬' },
        { name: 'CSE', link: 'https://drive.google.com/drive/folders/1k5y9UtD4NkKwMrBC4dxOkgU0iS6TOgbi?usp=drive_link', color: 'from-purple-500 to-purple-600', icon: '💻' },
        { name: 'CIVIL', link: 'https://drive.google.com/drive/folders/1CPP61yEqWmZn4FgAR8mo-BsBIyVE9cx8?usp=drive_link', color: 'from-red-500 to-red-600', icon: '🏗️' },
        { name: 'IT', link: '#', color: 'from-pink-500 to-pink-600', icon: '🖥️' },
        { name: 'IOT', link: '#', color: 'from-indigo-500 to-indigo-600', icon: '🌐' },
        { name: 'ICT', link: 'https://drive.google.com/drive/folders/1Avw33hD17gwuw5_vaWY5OKkoARVgJvI8?usp=drive_link', color: 'from-teal-500 to-teal-600', icon: '📡' },
        { name: 'ECE', link: '#', color: 'from-orange-500 to-orange-600', icon: '⚡' },
        { name: 'EEE', link: 'https://drive.google.com/drive/folders/19sKFH9VzMBzuVnUZadn6mRT1Esyj464T', color: 'from-cyan-500 to-cyan-600', icon: '🔌' },
        { name: 'EIE', link: '#', color: 'from-lime-500 to-lime-600', icon: '🔧' },
        { name: 'MECHANICAL', link: 'https://drive.google.com/drive/u/1/folders/13KpWIWpvJ_H4IlsbvxK5KNJWqX1YVS_w', color: 'from-amber-500 to-amber-600', icon: '⚙️' },
        { name: 'MECHATRONICS', link: 'https://drive.google.com/drive/folders/19dQA70v4aem5TRZbiBC1ZuuQa7OMjVkS?usp=drive_link', color: 'from-rose-500 to-rose-600', icon: '🤖' }
      ]
    },
    8: {
      title: 'Semester 8',
      description: 'Final year projects and capstone courses',
      departments: [
        { name: 'AEROSPACE', link: '#', color: 'from-blue-500 to-blue-600', icon: '✈️' },
        { name: 'BIOTECHNOLOGY', link: '#', color: 'from-green-500 to-green-600', icon: '🧬' },
        { name: 'CSE', link: '#', color: 'from-purple-500 to-purple-600', icon: '💻' },
        { name: 'CIVIL', link: '#', color: 'from-red-500 to-red-600', icon: '🏗️' },
        { name: 'IT', link: '#', color: 'from-pink-500 to-pink-600', icon: '🖥️' },
        { name: 'IOT', link: '#', color: 'from-indigo-500 to-indigo-600', icon: '🌐' },
        { name: 'ICT', link: '#', color: 'from-teal-500 to-teal-600', icon: '📡' },
        { name: 'ECE', link: '#', color: 'from-orange-500 to-orange-600', icon: '⚡' },
        { name: 'EEE', link: '#', color: 'from-cyan-500 to-cyan-600', icon: '🔌' },
        { name: 'EIE', link: '#', color: 'from-lime-500 to-lime-600', icon: '🔧' },
        { name: 'MECHANICAL', link: '#', color: 'from-amber-500 to-amber-600', icon: '⚙️' },
        { name: 'MECHATRONICS', link: '#', color: 'from-rose-500 to-rose-600', icon: '🤖' }
      ]
    }
  }

  const semester = semesterData[id]

  if (!semester) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center dark:bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Semester Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300">The requested semester materials are not available.</p>
        </div>
      </div>
    )
  }

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
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <Link
              to="/semesters"
              className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-2xl shadow-lg transition-all duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
              <span className="font-medium">Back to Semesters</span>
            </Link>
          </motion.div>

          {/* Title Section */}
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              className="flex items-center justify-center space-x-4 mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl"
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                  {semester.title}
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
              className="text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8"
            >
              {semester.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex items-center justify-center space-x-8"
            >
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="font-semibold text-gray-800 dark:text-white">{semester.departments.length} Departments</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
                <Star className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold text-gray-800 dark:text-white">Faculty Verified</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Departments Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6"
        >
          {semester.departments.map((dept, index) => (
            <motion.div key={index} variants={itemVariants}>
              <a
                href={dept.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block group h-full ${dept.link === '#' ? 'cursor-not-allowed opacity-60' : ''}`}
                onClick={dept.link === '#' ? (e) => e.preventDefault() : undefined}
              >
                <motion.div
                  whileHover={dept.link !== '#' ? { 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5
                  } : {}}
                  whileTap={dept.link !== '#' ? { scale: 0.98 } : {}}
                  className="relative h-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/20 overflow-hidden group-hover:shadow-3xl transition-all duration-500"
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  {/* Gradient Header */}
                  <div className={`h-24 bg-gradient-to-br ${dept.color} relative overflow-hidden`}>
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <motion.div
                        animate={{ 
                          x: [0, 50, 0],
                          y: [0, -25, 0]
                        }}
                        transition={{ 
                          duration: 6, 
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute w-16 h-16 bg-white rounded-full -top-8 -left-8"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-4 h-full flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          animate={dept.link !== '#' ? {
                            y: [0, -5, 0],
                            rotate: [0, 5, -5, 0]
                          } : {}}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="text-2xl"
                        >
                          {dept.icon}
                        </motion.div>
                        <div>
                          <h3 className="text-lg font-bold text-white">
                            {dept.name}
                          </h3>
                        </div>
                      </div>
                      
                      {dept.link !== '#' && (
                        <motion.div
                          whileHover={{ 
                            scale: 1.2, 
                            rotate: 15 
                          }}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300"
                        >
                          <ExternalLink className="w-4 h-4 text-white" />
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Study materials</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span>Lab manuals</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span>Previous papers</span>
                      </div>
                    </div>
                    
                    {/* Status */}
                    <motion.div
                      whileHover={dept.link !== '#' ? { scale: 1.02 } : {}}
                      className={`w-full rounded-2xl p-4 transition-all duration-300 ${
                        dept.link === '#' 
                          ? 'bg-gray-100 dark:bg-gray-700' 
                          : 'bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-700 dark:to-blue-900/30 group-hover:from-blue-50 group-hover:to-purple-50 dark:group-hover:from-blue-900/30 dark:group-hover:to-purple-900/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`font-semibold ${
                          dept.link === '#' 
                            ? 'text-gray-500 dark:text-gray-400' 
                            : 'text-gray-800 dark:text-white'
                        }`}>
                          {dept.link === '#' ? 'Coming Soon' : 'Access Materials'}
                        </span>
                        <div className="flex items-center space-x-1">
                          {dept.link === '#' ? (
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
                  {dept.link !== '#' && (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-3xl" />
                  )}
                </motion.div>
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Info Section */}
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
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>
            
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              Materials Not Available?
            </h3>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Some departments are still being updated. Check back soon or contact us for specific materials.
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
                <span>Request Materials</span>
              </motion.a>
              
              <Link
                to="/semesters"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Browse Other Semesters</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SemesterDetail