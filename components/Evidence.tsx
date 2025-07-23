"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
          Evidence of My Journey
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* AI Journey Email Evidence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">10-Year AI Passion</h3>
            <p className="text-gray-400 mb-6">
              Email from 2014 showing my early interest in AI - years before it became mainstream
            </p>
            <div className="bg-glass p-4 rounded-lg">
              <Image
                src="/ai-email-2014.png"
                alt="2014 email to Ainova Robotics about AI"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="bg-glass p-4 rounded-lg">
              <Image
                src="/ai-email-full.png"
                alt="Full email conversation with Ainova Robotics"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Cognitive Test Scores */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold mb-4">Cognitive Performance</h3>
            <p className="text-gray-400 mb-6">
              Standardized cognitive assessments showing 99th percentile performance
            </p>
            <div className="bg-glass p-4 rounded-lg">
              <Image
                src="/peak-brain-score.png"
                alt="Peak Brain Training score - 99th percentile"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto"
              />
            </div>
            <div className="bg-glass p-4 rounded-lg">
              <Image
                src="/elevate-score.png"
                alt="Elevate cognitive training scores"
                width={800}
                height={600}
                className="rounded-lg w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}