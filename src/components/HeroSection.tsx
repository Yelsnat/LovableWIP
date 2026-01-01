import { motion } from 'framer-motion';
import heroSpring from '@/assets/hero-spring.jpg';
import bottleHero from '@/assets/bottle-hero.jpg';

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen overflow-hidden"
      style={{ backgroundColor: 'hsl(195 50% 10%)' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroSpring}
          alt="Natural spring in the High Weald"
          className="h-full w-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to right, hsla(195, 50%, 10%, 0.8) 0%, hsla(195, 50%, 10%, 0.5) 50%, transparent 100%)' 
          }}
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to top, hsl(195, 50%, 10%) 0%, transparent 50%, hsla(195, 50%, 10%, 0.3) 100%)' 
          }}
        />
      </div>

      {/* Content Grid */}
      <div className="container relative z-10 mx-auto grid min-h-screen items-center gap-12 px-6 py-32 lg:grid-cols-2">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="max-w-xl"
        >
          <span 
            className="font-sans text-xs uppercase tracking-[0.3em]"
            style={{ color: 'hsl(38 55% 50%)' }}
          >
            From the Heart of the High Weald
          </span>
          
          <h1 
            className="mt-6 font-serif text-4xl font-light leading-tight md:text-6xl lg:text-7xl"
            style={{ color: 'hsl(45 30% 96%)' }}
          >
            Nature's own <br />
            <span className="italic">creation,</span> pure
            <br />
            <span style={{ color: 'hsl(38 55% 50%)' }}>& unadulterated</span>
          </h1>

          <p 
            className="mt-8 font-sans text-base leading-relaxed md:text-lg"
            style={{ color: 'hsla(45, 30%, 96%, 0.7)' }}
          >
            Locally sourced natural mineral water from Sussex. Our water comes 
            from 120 feet deep, confined beneath rock—seeing daylight for the 
            first time in thousands of years.
          </p>

          <div className="mt-10 flex flex-wrap gap-6">
            <a
              href="#source"
              className="group inline-flex items-center gap-3 border px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] transition-all"
              style={{ 
                borderColor: 'hsla(45, 30%, 96%, 0.3)',
                color: 'hsl(45 30% 96%)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'hsl(38 55% 50%)';
                e.currentTarget.style.backgroundColor = 'hsl(38 55% 50%)';
                e.currentTarget.style.color = 'hsl(195 50% 10%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'hsla(45, 30%, 96%, 0.3)';
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'hsl(45 30% 96%)';
              }}
            >
              Discover Our Source
            </a>
            <a
              href="#heritage"
              className="link-underline inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.2em] transition-colors"
              style={{ color: 'hsla(45, 30%, 96%, 0.7)' }}
            >
              Our Story
            </a>
          </div>
        </motion.div>

        {/* Bottle Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="hidden justify-center lg:flex"
        >
          <div className="relative">
            <div 
              className="absolute -inset-4 rounded-full blur-3xl"
              style={{ backgroundColor: 'hsla(38, 55%, 50%, 0.1)' }}
            />
            <img
              src={bottleHero}
              alt="Pear Tree Well bottle"
              className="relative z-10 h-[600px] w-auto object-contain drop-shadow-2xl"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3">
          <span 
            className="font-sans text-xs uppercase tracking-[0.2em]"
            style={{ color: 'hsla(45, 30%, 96%, 0.5)' }}
          >
            Scroll
          </span>
          <div 
            className="animate-scroll-hint h-12 w-px"
            style={{ background: 'linear-gradient(to bottom, hsla(45, 30%, 96%, 0.5), transparent)' }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
