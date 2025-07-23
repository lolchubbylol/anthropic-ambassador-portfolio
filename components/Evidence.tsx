"use client";

import { motion } from "framer-motion";
import { Calendar, Brain, Mail, Shield } from "lucide-react";

export default function Evidence() {
  return (
    <section className="py-20 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Verified Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* AI Journey Evidence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-glass p-8 rounded-lg"
          >
            <div className="flex items-center mb-6">
              <Calendar className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold">10-Year AI Journey</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300">
                <span className="font-semibold text-purple-400">October 2014:</span> Documented email correspondence with Ainova Robotics about artificial intelligence for a school project
              </p>
              <p className="text-gray-300">
                Demonstrates early passion for AI, years before mainstream adoption - when I was just a high school student dreaming of building robots
              </p>
            </div>
          </motion.div>

          {/* Cognitive Performance */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-glass p-8 rounded-lg"
          >
            <div className="flex items-center mb-6">
              <Brain className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold">Cognitive Performance</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded-lg">
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-blue-400">99th Percentile</span> performance on standardized cognitive assessments
                </p>
                <p className="text-sm text-gray-400">
                  Peak Brain Training & Elevate metrics available
                </p>
              </div>
              <p className="text-gray-300">
                Exceptional problem-solving, memory, and mental agility scores demonstrating capacity for complex technical challenges
              </p>
            </div>
          </motion.div>
        </div>

        {/* Professional Evidence Request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-8 rounded-lg"
        >
          <div className="flex items-center justify-center mb-6">
            <Shield className="w-8 h-8 text-green-400 mr-3" />
            <h3 className="text-2xl font-bold">Evidence Verification</h3>
          </div>
          
          <p className="text-center text-gray-300 mb-6">
            I maintain comprehensive documentation of all achievements and can provide verified evidence upon request.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="mailto:nathanxu895@gmail.com?subject=Evidence%20Request%20-%20Anthropic%20Application"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-semibold flex items-center transition-colors"
            >
              <Mail className="w-5 h-5 mr-2" />
              Request Evidence Portfolio
            </motion.a>
            
            <p className="text-sm text-gray-400 text-center">
              Includes: Email archives, test scores, project documentation
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-gray-400 mt-8"
        >
          All documentation available for verification during the interview process
        </motion.p>
      </div>
    </section>
  );
}