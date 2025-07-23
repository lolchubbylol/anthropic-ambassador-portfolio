"use client";

import { motion } from "framer-motion";
import { Trophy, Users, BookOpen, Globe } from "lucide-react";

const qualifications = [
  {
    icon: Trophy,
    title: "Proven Persistence",
    description: "10-year AI journey despite traditional barriers",
    details: [
      "Self-taught through adversity",
      "Overcame educational setbacks",
      "Continued despite AI club rejections",
      "Built expertise independently"
    ]
  },
  {
    icon: Users,
    title: "Community Builder",
    description: "Natural leader who creates inclusive spaces",
    details: [
      "Founded 214-member nursing group",
      "International gaming team leader",
      "Cross-cultural coordinator",
      "Inclusive environment creator"
    ]
  },
  {
    icon: BookOpen,
    title: "Documentation Expert",
    description: "Makes complex concepts accessible",
    details: [
      "Authored MCP Power Guide",
      "180+ tools documented",
      "Clear technical writing",
      "Educational content focus"
    ]
  },
  {
    icon: Globe,
    title: "Unique Perspective",
    description: "Healthcare + Tech bridge",
    details: [
      "Operating theatre experience",
      "Human-AI collaboration insights",
      "Empathy-driven approach",
      "Non-traditional background"
    ]
  }
];

export default function Qualifications() {
  return (
    <section id="qualifications" className="py-20 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Ambassador Qualifications
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {qualifications.map((qual, index) => {
            const Icon = qual.icon;
            return (
              <motion.div
                key={qual.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-glass p-6 rounded-lg"
              >
                <Icon className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{qual.title}</h3>
                <p className="text-gray-300 mb-4">{qual.description}</p>
                <ul className="space-y-2">
                  {qual.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-400 flex items-start">
                      <span className="text-purple-400 mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-lg inline-block">
            <div className="bg-black px-8 py-6 rounded-lg">
              <p className="text-xl text-gray-300 mb-2">
                "My journey from kitchen hand to AI enthusiast proves that
              </p>
              <p className="text-2xl font-bold">
                passion and persistence matter more than traditional credentials."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}