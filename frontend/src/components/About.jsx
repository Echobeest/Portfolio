import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, MapPin, Briefcase } from 'lucide-react';

const About = ({ personalInfo, aboutText }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="about" className="relative py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-cyan-400 font-mono text-sm uppercase tracking-wider"
            >
              01 — About Me
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mt-4"
            >
              Crafting Digital
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Profile Image & Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Profile Image */}
              <div className="flex justify-center md:justify-start mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-white/10 group-hover:border-cyan-500/50 transition-all duration-300"
                  />
                </div>
              </div>
              {/* Company Card */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Role</p>
                    <p className="text-xl font-semibold text-white">Technical Consultant</p>
                    <p className="text-sm text-gray-500 mt-1">Microsoft Dynamics 365 CRM</p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="group relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-violet-500/50 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                <div className="relative flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-violet-500/10 text-violet-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1">Location</p>
                    <p className="text-xl font-semibold text-white">{personalInfo.location}</p>
                    <p className="text-sm text-gray-500 mt-1">Available remotely worldwide</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col justify-center space-y-6"
            >
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                {aboutText.intro}
              </p>
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                {aboutText.passion}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-lg sm:text-xl lg:text-3xl font-bold text-cyan-400 leading-tight" data-testid="about-stat-experience">Experienced</p>
                  <p className="text-sm text-gray-400 mt-1">Professional</p>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-lg sm:text-xl lg:text-3xl font-bold text-indigo-400 leading-tight" data-testid="about-stat-projects">50+</p>
                  <p className="text-sm text-gray-400 mt-1">Projects</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;