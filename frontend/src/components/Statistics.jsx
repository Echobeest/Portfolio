import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const Statistics = ({ statistics }) => {
  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [counts, setCounts] = useState(statistics.map(() => 0));

  useEffect(() => {
    if (inView) {
      statistics.forEach((stat, index) => {
        let current = 0;
        const increment = Math.ceil(stat.number / 50);
        const interval = setInterval(() => {
          if (current >= stat.number) {
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = stat.number;
              return newCounts;
            });
            clearInterval(interval);
          } else {
            current += increment;
            setCounts((prev) => {
              const newCounts = [...prev];
              newCounts[index] = Math.min(current, stat.number);
              return newCounts;
            });
          }
        }, 30);
      });
    }
  }, [inView, statistics]);

  return (
    <section className="relative py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-2">
                {counts[index]}{stat.suffix}
              </div>
              <div className="text-sm md:text-base text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Statistics;