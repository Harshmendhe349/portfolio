import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const skills = [
  'React', 'TypeScript', 'Node.js', 'MongoDB', 'Express',
  'Flask', 'Python', 'AWS', 'GCP', 'Firebase',
  'XGBoost', 'Machine Learning', 'AI Integration'
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-card">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a <span className="text-primary font-semibold">Full Stack Developer</span> blending traditional web engineering with modern AI-driven capabilities.
              Whether it’s MERN applications, Flask APIs, or cloud deployments on AWS/GCP, I enjoy building systems that feel smart, fast, and adaptive.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My experience includes delivering <span className="text-accent font-semibold">AI-driven solutions</span> that 
              boost user engagement by 20%. 
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a completed <span className="font-semibold">B.Tech in Computer Science</span> at 
              VIT-AP, I’m passionate about pushing the boundaries of what intelligent software can do.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <motion.a
                href="https://github.com/Harshmendhe349"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 glass-card rounded-full hover-glow"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/harsh-mendhe-6634181a8/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 glass-card rounded-full hover-glow"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="mailto:harshmendhe349@gmail.com"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 glass-card rounded-full hover-glow"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="tel:+916261399129"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-3 glass-card rounded-full hover-glow"
              >
                <Phone className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.6 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-full text-sm font-medium hover:border-primary/50 transition-all cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
