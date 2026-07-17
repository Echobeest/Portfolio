import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react';

const Experience = ({ experience }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="relative py-32 bg-slate-900">
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
              03 — Career Journey
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mt-4"
            >
              Professional
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Experience
              </span>
            </motion.h2>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-indigo-500/50 to-transparent transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
                  className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-400 transform md:-translate-x-1/2 z-10">
                    <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75"></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                    <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                      
                      <div className="relative">
                        {/* Company & Role */}
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.company}</h3>
                          <p className="text-lg text-cyan-400 font-medium">{exp.role}</p>
                        </div>

                        {/* Period & Location */}
                        <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.project}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                        {/* Achievements */}
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-white uppercase tracking-wide mb-3">Key Achievements</p>
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2 text-gray-400">
                              <CheckCircle2 className="w-4 h-4 mt-1 text-cyan-400 flex-shrink-0" />
                              <span className="text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-[calc(50%-2rem)]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;