"use client";

import { motion } from "framer-motion";
import { Calendar, Brain, Heart, Code } from "lucide-react";

const timeline = [
  {
    year: "2014",
    title: "AI Passion Ignited",
    description: "Reached out to robotics companies about AI projects as a high school student",
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    year: "2015-2023",
    title: "Unconventional Path",
    description: "From kitchen hand to solar installer to operating theatre nurse - never losing sight of AI dreams",
    icon: Heart,
    color: "from-blue-500 to-cyan-500",
  },
  {
    year: "2024",
    title: "MCP Revolution",
    description: "Discovered Claude Code & MCPs - finally found my gateway into practical AI development",
    icon: Code,
    color: "from-green-500 to-emerald-500",
  },
  {
    year: "2025",
    title: "Ambassador Vision",
    description: "Ready to help others discover their unconventional paths to AI mastery",
    icon: Calendar,
    color: "from-orange-500 to-red-500",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          My AI Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 opacity-20" />

          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="flex-1" />
                
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center z-10`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-glass p-6 rounded-lg">
                    <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
                    <h4 className="text-xl text-gray-300 mb-2">{item.title}</h4>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}