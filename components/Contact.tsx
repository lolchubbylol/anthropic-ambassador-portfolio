"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, FileText } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-black/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-gradient"
        >
          Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-gray-300 mb-12"
        >
          I'm excited about the opportunity to contribute to Anthropic's mission
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.a
            href="mailto:NathanXu895@gmail.com"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-glass p-6 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors"
          >
            <Mail className="w-6 h-6 mr-3 text-purple-400" />
            <span>NathanXu895@gmail.com</span>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-glass p-6 rounded-lg flex items-center justify-center"
          >
            <MapPin className="w-6 h-6 mr-3 text-purple-400" />
            <span>Sydney, Australia</span>
          </motion.div>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <motion.a
            href="https://github.com/lolchubbylol"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-glass p-4 rounded-lg hover:bg-white/10 transition-colors"
          >
            <Github className="w-8 h-8" />
          </motion.a>

          <motion.a
            href="/Nathan_Xu_Anthropic_Ambassador_Resume.md"
            download
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-glass p-4 rounded-lg hover:bg-white/10 transition-colors"
          >
            <FileText className="w-8 h-8" />
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-lg inline-block"
        >
          <div className="bg-black px-8 py-4 rounded-lg">
            <p className="text-lg font-semibold">Open to Any Role</p>
            <p className="text-gray-300">Where I can contribute to AI democratization</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}