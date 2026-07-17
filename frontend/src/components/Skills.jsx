import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Progress } from './ui/progress';
import { useState, useEffect } from 'react';

const Skills = ({ skills }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [animatedValues, setAnimatedValues] = useState(skills.map(() => 0));

  useEffect(() => {
    if (inView) {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          let current = 0;
          const interval = setInterval(() => {
            if (current >= skill.level) {
              clearInterval(interval);
            } else {
              current += 2;
              setAnimatedValues((prev) => {
                const newValues = [...prev];
                newValues[index] = Math.min(current, skill.level);
                return newValues;
              });
            }
          }, 20);
        }, index * 100);
      });
    }
  }, [inView, skills]);

  return (
    <section id="skills" className="relative py-32 bg-slate-950">
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
              02 — Technical Expertise
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mt-4"
            >
              Skills &
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </motion.h2>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 hover:border-cyan-500/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className="relative">
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {skill.category}
                    </h3>
                    <span className="text-4xl font-bold text-cyan-400">
                      {animatedValues[index]}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${animatedValues[index]}%` } : { width: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                      ></motion.div>
                    </div>
                  </div>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, itemIndex) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + index * 0.1 + itemIndex * 0.05, duration: 0.3 }}
                        className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/10 hover:border-cyan-500/50 hover:text-cyan-400 transition-all cursor-default"
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;