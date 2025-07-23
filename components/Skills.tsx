"use client";

import { motion } from "framer-motion";
import { Code2, Brain, Users, FileText } from "lucide-react";

const skills = [
  {
    category: "MCP Expertise",
    icon: Code2,
    items: [
      "GitHub MCP - 70+ tools mastery",
      "Zen MCP - AI analysis workflows",
      "Task Master - Complex project management",
      "Desktop Commander - System automation",
      "Sequential Thinking - Problem solving",
      "180+ total MCP tools documented"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    category: "Technical Stack",
    icon: Brain,
    items: [
      "Arch Linux (daily driver)",
      "Claude Code power user",
      "HTML/CSS, Markdown",
      "Prompt engineering expert",
      "Top-down learning methodology",
      "AI-assisted development"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    category: "Community Leadership",
    icon: Users,
    items: [
      "214-member nursing cohort leader",
      "International team coordination",
      "Cross-cultural communication",
      "Technical documentation",
      "Educational content creation",
      "Inclusive space building"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    category: "Cognitive Abilities",
    icon: FileText,
    items: [
      "99th percentile overall",
      "Problem solving: 95%",
      "Language processing: 90%",
      "Memory: 99%",
      "Mental agility: 98%",
      "Coordination: 97%"
    ],
    color: "from-orange-500 to-red-500"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-black/50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-glass p-6 rounded-lg"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skill.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{skill.category}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-start">
                      <span className="text-gray-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}