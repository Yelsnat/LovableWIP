import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import sourceCave from '@/assets/source-cave.jpg';

const SourceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="source" className="relative overflow-hidden bg-secondary">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden"
          >
            <img
              src={sourceCave}
              alt="Underground spring source"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            
            {/* Floating label */}
            <div className="absolute bottom-8 left-8 right-8">
              <span className="inline-block bg-secondary/90 px-4 py-2 font-sans text-xs uppercase tracking-[0.2em] text-primary backdrop-blur-sm">
                Our Source
              </span>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="max-w-lg"
          >
            <span 
              className="font-sans text-xs uppercase tracking-[0.3em]"
              style={{ color: 'hsl(38 55% 50%)' }}
            >
              The Origin
            </span>
            
            <h2 className="mt-4 font-serif text-3xl leading-tight text-primary md:text-5xl">
              120 feet deep, <br />
              <span className="italic">beneath</span> 5 feet <br />
              of <span style={{ color: 'hsl(38 55% 50%)' }}>solid rock</span>
            </h2>

            <div className="mt-8 space-y-6 font-sans text-muted-foreground">
              <p>
                Our water comes from a source 120 feet deep and confined beneath 
                a 5 ft thick layer of rock. No surface water can possibly 
                contaminate it.
              </p>
              <p>
                When the water is drawn from the well, it is the first time it 
                has seen the light of day for many thousands of years—truly pure 
                and unadulterated. This water is nature's own creation, something 
                water barons can only dream about.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-8">
              <div>
                <span className="font-serif text-3xl md:text-4xl" style={{ color: 'hsl(38 55% 50%)' }}>120</span>
                <p className="mt-1 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  Feet Deep
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl" style={{ color: 'hsl(38 55% 50%)' }}>5ft</span>
                <p className="mt-1 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  Rock Layer
                </p>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl" style={{ color: 'hsl(38 55% 50%)' }}>1000s</span>
                <p className="mt-1 font-sans text-xs uppercase tracking-wider text-muted-foreground">
                  Years Old
                </p>
              </div>
            </div>

            <a
              href="#purity"
              className="mt-10 inline-flex items-center gap-2 border border-primary bg-primary px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
            >
              Discover Our Water
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SourceSection;
