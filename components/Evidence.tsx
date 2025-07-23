"use client";

import { motion } from "framer-motion";
import { Calendar, Brain, MessageSquare, TrendingUp } from "lucide-react";

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
          Evidence & Achievements
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <div className="bg-black/50 p-6 rounded-lg mb-4">
              <div className="flex items-start mb-4">
                <MessageSquare className="w-5 h-5 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400 mb-2">October 23, 2014</p>
                  <p className="text-gray-300 italic">
                    "Hi my names Nathan I'm doing a school project on artificial intelligence and I was wondering if you could send J.E.A.S.A over to me so that I can explain to my class what an artificial intelligence also I'm very passionate about robots when I grow up I wanna make my own one..."
                  </p>
                  <p className="text-sm text-gray-500 mt-2">- Email to Ainova Robotics</p>
                </div>
              </div>
            </div>
            <p className="text-gray-400">
              Documented proof of my early passion for AI, years before mainstream adoption
            </p>
          </motion.div>

          {/* Cognitive Abilities */}
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
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-300">Peak Brain Score</span>
                  <span className="text-2xl font-bold text-blue-400">99%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '99%' }} />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-black/30 p-3 rounded text-center">
                  <p className="text-gray-400 text-sm">Problem Solving</p>
                  <p className="text-xl font-bold text-green-400">95%</p>
                </div>
                <div className="bg-black/30 p-3 rounded text-center">
                  <p className="text-gray-400 text-sm">Memory</p>
                  <p className="text-xl font-bold text-orange-400">99%</p>
                </div>
                <div className="bg-black/30 p-3 rounded text-center">
                  <p className="text-gray-400 text-sm">Mental Agility</p>
                  <p className="text-xl font-bold text-purple-400">98%</p>
                </div>
                <div className="bg-black/30 p-3 rounded text-center">
                  <p className="text-gray-400 text-sm">Language</p>
                  <p className="text-xl font-bold text-pink-400">90%</p>
                </div>
              </div>
            </div>
            <p className="text-gray-400 mt-4">
              Standardized assessments demonstrating exceptional cognitive abilities
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-purple-600/20 to-blue-600/20 p-8 rounded-lg text-center"
        >
          <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4" />
          <p className="text-xl text-gray-300">
            From a high school student curious about AI to a passionate advocate ready to democratize access
          </p>
        </motion.div>
      </div>
    </section>
  );
}