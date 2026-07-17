import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Manifesto = ({ manifesto }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="relative py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-20 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-cyan-400 font-mono text-sm uppercase tracking-wider"
            >
              Philosophy
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mt-4"
            >
              My Manifesto
            </motion.h2>
          </div>

          {/* Manifesto Items */}
          <div className="space-y-12">
            {manifesto.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.8 }}
                className="group relative"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <span className="text-6xl md:text-8xl font-bold bg-gradient-to-br from-cyan-400 to-indigo-400 bg-clip-text text-transparent opacity-50 group-hover:opacity-100 transition-opacity">
                      {item.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-400 leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                {index < manifesto.length - 1 && (
                  <div className="mt-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Manifesto;