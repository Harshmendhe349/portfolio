import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    id: 1,
    title: 'InfluenceSync',
    category: 'Full Stack',
    description: 'Role-based influencer marketing platform with AI-powered matching using TF-IDF and cosine similarity. Features real-time dashboards and admin monitoring tools.',
    tech: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'Express'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
    github: 'https://github.com/Harshmendhe349/influencer-sponsor',
    demo: 'https://influencer-sponsor-v1kn.onrender.com'

  },
  {
    id: 2,
    title: 'CKD Care',
    category: 'AI',
    description: 'Medical web app for chronic kidney disease prediction using XGBoost, LGBM, and CatBoost. Integrated Explainable AI (SHAP, LIME) for transparent predictions.',
    tech: ['Python', 'XGBoost', 'Flask', 'React', 'SHAP'],
    gradient: 'from-green-500/20 to-emerald-500/20',
    github: 'https://github.com/Harshmendhe349/chronic-kidney-disease-prediction',
    demo: 'https://influencer-sponsor-v1kn.onrender.com'
  },
  {
    id: 3,
    title: 'CloudPic',
    category: 'Full Stack',
    description: 'Interactive AI image generation and editing platform using OpenAI API. Integrated Cloudinary for seamless storage and optimized data transfer.',
    tech: ['React', 'OpenAI API', 'Cloudinary', 'Node.js'],
    gradient: 'from-purple-500/20 to-pink-500/20',
    github: 'https://github.com/Harshmendhe349/cloudPic',
    demo: 'https://influencer-sponsor-v1kn.onrender.com'
  },
  {
    id: 4,
    title: 'Online Voting System',
    category: 'Full Stack',
    description: 'Secure voting platform with authentication, real-time results, and responsive dashboards. Built with MERN stack and Firebase Authentication.',
    tech: ['React', 'Node.js', 'MongoDB', 'Firebase', 'Express'],
    gradient: 'from-orange-500/20 to-red-500/20',
    github: 'https://github.com/Harshmendhe349/online-voting-system',
    demo: 'https://influencer-sponsor-v1kn.onrender.com'
  },
];

const categories = ['All', 'Full Stack', 'AI', 'ML'];

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-background">
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
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
        >
          Innovative solutions combining full-stack development with AI/ML capabilities
        </motion.p>

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? 'default' : 'outline'}
              onClick={() => setActiveCategory(cat)}
              className={activeCategory === cat ? 'bg-gradient-to-r from-primary to-accent' : ''}
            >
              {cat}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className={`glass-card rounded-2xl p-8 h-full bg-gradient-to-br ${project.gradient} hover-glow transition-all duration-300`}>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative z-10 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30">
                      {project.category}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-background/50 border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a href={project.github}>
                      <Button
                        size="sm"
                        variant="outline"
                        className="group/btn"
                      >
                        <Github className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
                        Code
                      </Button>
                    </a>
                    <a href={project.demo}>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-primary to-accent group/btn"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:animate-bounce" />
                      Live Demo
                    </Button>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
