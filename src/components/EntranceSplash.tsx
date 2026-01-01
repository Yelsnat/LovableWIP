import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import heroSpring from '@/assets/hero-spring.jpg';

interface EntranceSplashProps {
  onEnter: () => void;
}

const EntranceSplash = ({ onEnter }: EntranceSplashProps) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    setTimeout(onEnter, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'hsl(195 50% 10%)' }}
        >
          {/* Background image with overlay */}
          <div className="absolute inset-0">
            <img
              src={heroSpring}
              alt="Crystal clear spring water"
              className="h-full w-full object-cover opacity-40"
            />
            <div 
              className="absolute inset-0"
              style={{ 
                background: 'linear-gradient(to bottom, hsla(195, 50%, 10%, 0.6) 0%, hsla(195, 50%, 10%, 0.4) 50%, hsla(195, 50%, 10%, 0.8) 100%)' 
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              <h1 
                className="font-serif text-4xl font-light tracking-wider md:text-6xl lg:text-7xl"
                style={{ color: 'hsl(45 30% 96%)' }}
              >
                PEAR TREE <span className="italic" style={{ color: 'hsl(38 55% 50%)' }}>WELL</span>
              </h1>
              <p 
                className="mt-4 font-sans text-sm uppercase tracking-[0.3em]"
                style={{ color: 'hsla(45, 30%, 96%, 0.7)' }}
              >
                Natural Mineral Water from Sussex
              </p>
            </motion.div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              onClick={handleEnter}
              className="group relative font-sans text-sm uppercase tracking-[0.25em] transition-colors"
              style={{ color: 'hsl(45 30% 96%)' }}
            >
              <span className="relative z-10">Enter Site</span>
              <span 
                className="absolute bottom-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                style={{ backgroundColor: 'hsl(38 55% 50%)' }}
              />
            </motion.button>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
              <div className="flex flex-col items-center gap-2">
                <span 
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{ color: 'hsla(45, 30%, 96%, 0.5)' }}
                >
                  Scroll
                </span>
                <div 
                  className="animate-scroll-hint h-8 w-px"
                  style={{ backgroundColor: 'hsla(45, 30%, 96%, 0.3)' }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EntranceSplash;
