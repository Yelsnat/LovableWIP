import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import pearTreeOrchard from '@/assets/pear-tree-orchard.png';

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
              src={pearTreeOrchard}
              alt="Pear tree orchard with traditional well"
              className="h-full w-full object-cover opacity-50"
            />
            <div 
              className="absolute inset-0"
              style={{ 
                background: 'linear-gradient(to bottom, hsla(195, 50%, 10%, 0.5) 0%, hsla(195, 50%, 10%, 0.3) 50%, hsla(195, 50%, 10%, 0.7) 100%)' 
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-10 text-center px-6">
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
                Natural Mineral Water
              </p>
              
              {/* Taglines */}
              <div className="mt-8 flex flex-col gap-3">
                <p 
                  className="font-sans text-base md:text-lg uppercase tracking-wide"
                  style={{ color: 'hsl(38 55% 50%)' }}
                >
                  Born in the heart of the High Weald.
                </p>
                <p 
                  className="font-sans text-base md:text-lg uppercase tracking-wide"
                  style={{ color: 'hsl(38 55% 50%)' }}
                >
                  Bottled at source from a 120ft deep aquifer.
                </p>
                <p 
                  className="font-sans text-base md:text-lg uppercase tracking-wide"
                  style={{ color: 'hsl(38 55% 50%)' }}
                >
                  Delivered to your table with untouched purity.
                </p>
              </div>
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
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EntranceSplash;
