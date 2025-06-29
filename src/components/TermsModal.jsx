import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle } from 'lucide-react'

const TermsModal = ({ isOpen, onAccept }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full shadow-2xl"
          >
            <div className="flex items-center space-x-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-500" />
              <h2 className="text-xl font-bold text-gray-800">Terms of Service</h2>
            </div>
            
            <div className="text-gray-600 space-y-3 mb-6">
              <p className="text-sm text-gray-500">Last Edit: 19/09/2024</p>
              <p>We had updated our terms of service.</p>
              <p>This Website is not officially approved or organized by the university.</p>
              <p>Material Base is not responsible if any INCORRECT CONTENT is provided in materials. If any INCORRECT CONTENT is found, please report it immediately.</p>
              <p className="font-medium">Read all terms of service before accepting!</p>
            </div>
            
            <button
              onClick={onAccept}
              className="w-full btn-primary"
            >
              Accept
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default TermsModal