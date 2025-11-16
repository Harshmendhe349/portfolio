import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'ReactJS Intern',
    company: 'CrakCode',
    period: 'Oct 2024 - Jan 2025',
    location: 'Remote',
    achievements: [
      'Utilized Google Firestore to implement efficient data management strategies, enhancing data storage and retrieval processes',
      'Implemented and modified Firestore Security Rules, reducing unauthorized access incidents by ~30%',
      'Engineered and deployed 4+ innovative features, enhancing user engagement and extending session duration',
      'Deployed Cloud Functions for A/B testing, reducing feature rollout time by ~40%',
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-background to-card">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-5xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
        >
          Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.4 + index * 0.2 }}
              className="relative pl-20 pb-12 last:pb-0"
            >
              {/* Dot on timeline */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 0.6 + index * 0.2, type: 'spring' }}
                className="absolute left-6 top-0 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_20px_rgba(0,191,255,0.5)]"
              />

              {/* Content card */}
              <motion.div
                whileHover={{ x: 8, scale: 1.02 }}
                className="glass-card rounded-2xl p-6 md:p-8 hover-glow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                      <Briefcase className="h-6 w-6 text-primary" />
                      {exp.role}
                    </h3>
                    <p className="text-xl text-primary font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end mt-2 md:mt-0 text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-primary mt-1">▹</span>
                      <span>{achievement}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
          className="mt-16 glass-card rounded-2xl p-6 md:p-8"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Education</h3>
          <div className="space-y-2">
            <p className="text-xl font-semibold">Bachelor of Technology in Computer Science and Engineering</p>
            <p className="text-lg text-primary">Vellore Institute of Technology - AP</p>
            <p className="text-muted-foreground">Aug 2021 - Aug 2025 • Amaravati, Andhra Pradesh</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
