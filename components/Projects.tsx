"use client";

import { motion } from "framer-motion";
import { Github, Book, Star, Code2 } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient"
        >
          Featured Project
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-glass p-8 rounded-lg max-w-4xl mx-auto"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="text-3xl font-bold mb-2">MCP Power User Guide</h3>
              <p className="text-gray-400">Comprehensive documentation for 8 integrated MCP servers</p>
            </div>
            <a 
              href="https://github.com/lolchubbylol/mcp-power-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-black/30 p-4 rounded-lg">
              <Book className="w-8 h-8 text-purple-400 mb-2" />
              <h4 className="text-xl font-semibold mb-1">180+ Tools</h4>
              <p className="text-gray-400 text-sm">Documented across 8 MCP servers</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <Star className="w-8 h-8 text-yellow-400 mb-2" />
              <h4 className="text-xl font-semibold mb-1">0 Stars</h4>
              <p className="text-gray-400 text-sm">Quality over recognition</p>
            </div>
            <div className="bg-black/30 p-4 rounded-lg">
              <Code2 className="w-8 h-8 text-blue-400 mb-2" />
              <h4 className="text-xl font-semibold mb-1">Best Practices</h4>
              <p className="text-gray-400 text-sm">Token optimization & workflows</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-2">Key Features</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  Detailed tool documentation with practical examples
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  Token economics and efficiency metrics
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  Power user workflows and optimization tips
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  Comprehensive troubleshooting guides
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-400 italic">
                "Despite zero external validation, I continue improving this guide because I believe in democratizing AI tools. 
                Every power user started as a beginner who needed clear documentation."
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}