import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground text-center md:text-left"
          >
            © {new Date().getFullYear()} Harsh Mendhe. All rights reserved.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-muted-foreground flex items-center gap-2"
          >
            Made with <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse" /> using React & TypeScript
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
