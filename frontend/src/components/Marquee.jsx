import { motion } from 'framer-motion';
import './Marquee.css';

const Marquee = () => {
  const technologies = [
    'Dynamics 365 CRM',
    'Power Platform',
    'Power Automate',
    'Azure Functions',
    'C# .NET',
    'Power Apps',
    'TypeScript',
    'Azure DevOps',
    'SQL Server',
    'PCF Controls',
    'FetchXML',
    'REST APIs'
  ];

  // Duplicate for seamless loop
  const duplicatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="relative py-16 bg-slate-900 overflow-hidden border-y border-white/10">
      <div className="marquee-container">
        <motion.div
          className="marquee-content"
          animate={{
            x: [0, -50 + '%'],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 25,
              ease: 'linear',
            },
          }}
        >
          {duplicatedTechnologies.map((tech, index) => (
            <div key={index} className="marquee-item">
              <span className="text-4xl md:text-6xl font-bold text-white/10 hover:text-cyan-400/30 transition-colors whitespace-nowrap">
                {tech}
              </span>
              <span className="text-4xl md:text-6xl text-cyan-400/20 mx-8">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Marquee;