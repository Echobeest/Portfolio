import { motion } from 'framer-motion';
import { ArrowRight, Download, Briefcase, Code2, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { useState, useEffect } from 'react';

const Hero = ({ personalInfo }) => {
  const [textIndex, setTextIndex] = useState(0);
  const rotatingTexts = personalInfo.subRoles;

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [rotatingTexts.length]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-20 left-10 text-cyan-400/20"
        animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Code2 size={48} />
      </motion.div>
      <motion.div
        className="absolute bottom-20 right-20 text-indigo-400/20"
        animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Sparkles size={40} />
      </motion.div>
      <motion.div
        className="absolute top-40 right-32 text-violet-400/20"
        animate={{ y: [-15, 15, -15] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Briefcase size={36} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm text-gray-300">Available for new projects</span>
          </motion.div>

          {/* Main Heading - Masked Reveal */}
          <div className="mb-6 overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-4"
            >
              {personalInfo.name.split(' ')[0]}
            </motion.h1>
          </div>
          <div className="mb-8 overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent"
            >
              {personalInfo.name.split(' ')[1]}
            </motion.h1>
          </div>

          {/* Role with Rotating Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-6 h-20 flex flex-col items-center justify-center"
          >
            <p className="text-xl md:text-2xl text-gray-400 mb-2">{personalInfo.role}</p>
            <div className="h-8 relative overflow-hidden">
              <motion.p
                key={textIndex}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-cyan-400 font-medium"
              >
                {rotatingTexts[textIndex]}
              </motion.p>
            </div>
          </motion.div>

          {/* Experience Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mb-12"
          >
            <div className="inline-block px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 backdrop-blur-sm border border-cyan-500/20">
              <p className="text-2xl md:text-3xl font-bold text-white">
                {personalInfo.experience}
                <span className="text-cyan-400 ml-2">Experience</span>
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={scrollToContact}
              size="lg"
              className="group relative px-8 py-6 text-lg bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-600 hover:to-indigo-600 text-white border-0 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Hire Me
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>

            <Button
              onClick={scrollToProjects}
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-2 border-white/20 hover:border-cyan-500/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white"
            >
              <span className="flex items-center gap-2">
                View Projects
                <Briefcase className="w-5 h-5" />
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-2 border-white/20 hover:border-indigo-500/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white"
            >
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Resume
              </span>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
              ></motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;