import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = ({ testimonials }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="relative py-32 bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-cyan-400 font-mono text-sm uppercase tracking-wider"
            >
              07 — Client Feedback
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold text-white mt-4"
            >
              What Clients
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Say About Me
              </span>
            </motion.h2>
          </div>

          {/* Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10">
              {/* Quote Icon */}
              <div className="absolute top-8 right-8 text-cyan-400/20">
                <Quote size={64} />
              </div>

              {/* Content */}
              <div className="relative">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  "{current.content}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400/50"
                  />
                  <div>
                    <p className="text-lg font-bold text-white">{current.name}</p>
                    <p className="text-sm text-gray-400">{current.role}</p>
                    <p className="text-sm text-cyan-400">{current.company}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                onClick={prev}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-white/20 hover:border-cyan-500/50 bg-white/5 hover:bg-white/10 text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-cyan-400 w-8'
                        : 'bg-white/20 hover:bg-white/40'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={next}
                variant="outline"
                size="icon"
                className="w-12 h-12 rounded-full border-white/20 hover:border-cyan-500/50 bg-white/5 hover:bg-white/10 text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;