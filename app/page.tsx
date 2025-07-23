"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Qualifications from "@/components/Qualifications";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Journey />
      <Skills />
      <Projects />
      <Qualifications />
      <Vision />
      <Contact />
    </main>
  );
}