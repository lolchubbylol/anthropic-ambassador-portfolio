"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb, Heart, Rocket, Shield } from "lucide-react";

const visionPoints = [
  {
    icon: Target,
    title: "Democratize AI Access",
    description: "Share my journey to inspire non-traditional learners"
  },
  {
    icon: Lightbulb,
    title: "Bridge Communities",
    description: "Connect healthcare, education, and tech communities"
  },
  {
    icon: Heart,
    title: "Document Best Practices",
    description: "Expand guide writing to help others maximize Claude's potential"
  },
  {
    icon: Shield,
    title: "Advocate Ethically",
    description: "Leverage healthcare ethics background for responsible AI promotion"
  },
  {
    icon: Rocket,
    title: "Build Inclusive Spaces",
    description: "Create communities where all backgrounds are welcomed in AI"
  }
];

export default function Vision() {
  return (
    <section id="vision" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Vision as Anthropic Ambassador
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-glass p-6 rounded-lg text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                <p className="text-gray-400">{point.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-lg text-center"
        >
          <h3 className="text-2xl font-bold mb-4">My Commitment</h3>
          <p className="text-lg leading-relaxed">
            As an Anthropic Ambassador, I'll help others discover their own unconventional paths to AI mastery. 
            My story proves that with passion, persistence, and the right tools like Claude, 
            anyone can contribute to the AI revolution—regardless of their background.
          </p>
        </motion.div>
      </div>
    </section>
  );
}