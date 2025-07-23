"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Brain, TrendingUp } from "lucide-react";

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

        <div className="space-y-12">
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
            <p className="text-gray-300 mb-6">
              Email correspondence from 2014 showing my early passion for AI and robotics
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/ai-email-2014.png"
                  alt="2014 AI correspondence"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
                <Image
                  src="/ai-email-full.png"
                  alt="Full AI email thread"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
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
            <p className="text-gray-300 mb-6">
              Standardized assessments showing 99th percentile performance
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/peak-brain-score.png"
                  alt="Peak brain score - 99th percentile"
                  fill
                  className="object-contain bg-black/50"
                />
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="/elevate-score.png"
                  alt="Elevate score - top percentiles"
                  fill
                  className="object-contain bg-black/50"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}