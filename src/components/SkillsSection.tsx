import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Cloud, Cpu, Wrench } from 'lucide-react';

const skillCategories = [
  {
    name: 'Frontend',
    icon: Code,
    skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS', 'Angular'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Flask', 'SQLite', 'Firebase'],
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'AI/ML',
    icon: Cpu,
    skills: ['Python', 'XGBoost', 'CatBoost', 'SHAP', 'LIME', 'TensorFlow'],
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'GCP', 'Firebase', 'Firestore', 'Docker', 'Git'],
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    name: 'Tools',
    icon: Wrench,
    skills: ['Git', 'GitHub', 'Linux', 'Postman', 'Katalon', 'Arduino'],
    gradient: 'from-yellow-500/20 to-amber-500/20',
  },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-card">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        className="max-w-7xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text"
        >
          Skills & Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
        >
          A comprehensive toolkit for building modern, scalable applications
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className={`glass-card rounded-2xl p-6 h-full bg-gradient-to-br ${category.gradient} hover-glow transition-all duration-300`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.6 + index * 0.1 + i * 0.05 }}
                        className="flex items-center gap-2 group/skill"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover/skill:animate-pulse" />
                        <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Key Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1 }}
          className="mt-12 glass-card rounded-2xl p-8 text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-4 gradient-text">Key Achievement</h3>
          <p className="text-lg text-muted-foreground">
            Successfully delivered AI-driven platforms and enhanced user engagement by{' '}
            <span className="text-primary font-bold text-xl">20%</span> through effective feature implementation
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};
