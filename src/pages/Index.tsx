
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-navy text-slate-lighter min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
