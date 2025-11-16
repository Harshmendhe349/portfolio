import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, FileText, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

export const DownloadResumeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="section-padding bg-gradient-to-b from-card to-background">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden hover-glow"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 animate-glow-pulse" />
          
          <div className="relative z-10 text-center space-y-8">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
              className="inline-block"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-30"
                />
                <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 p-8 rounded-3xl border border-primary/30">
                  <FileText className="h-16 w-16 text-primary" />
                </div>
              </div>
            </motion.div>

            {/* Text */}
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6 }}
                className="text-3xl md:text-4xl font-bold gradient-text"
              >
                Resume Available
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.7 }}
                className="text-muted-foreground text-lg max-w-2xl mx-auto"
              >
                Download my comprehensive resume to learn more about my experience, 
                skills, and accomplishments in full-stack development and AI integration.
              </motion.p>
            </div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--shadow-glow)] transition-all duration-300 group min-w-[200px]"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume/HarshMendheResume.pdf';
                  link.download = 'HarshMendheResume.pdf';
                  link.click();
                }}
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 min-w-[200px]"
                onClick={() => {
                  window.open('/resume/HarshMendheResume.pdf', '_blank');
                }}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                View Online
              </Button>
            </motion.div>

            {/* Decorative text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 }}
              className="text-sm text-muted-foreground"
            >
              PDF Format • Updated November 2025
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
