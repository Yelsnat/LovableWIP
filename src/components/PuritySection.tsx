import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplets, Mountain, Leaf, Award } from 'lucide-react';

const features = [
  {
    icon: Droplets,
    title: 'Pure & Natural',
    description: 'No surface water contamination possible. Confined beneath solid rock for thousands of years.',
  },
  {
    icon: Mountain,
    title: 'High Weald Origin',
    description: 'The only mineral water bottled at source in Sussex, from the heart of the High Weald.',
  },
  {
    icon: Leaf,
    title: 'Rich in Minerals',
    description: 'Naturally rich in 16+ minerals and trace elements, giving it a fuller, rounder flavour.',
  },
  {
    icon: Award,
    title: 'Balanced pH',
    description: 'A balanced pH of 7.2, important for optimal health and a smooth taste profile.',
  },
];

const PuritySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="purity" 
      className="relative overflow-hidden py-24 md:py-32"
      style={{ backgroundColor: 'hsl(195 50% 10%)' }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span 
            className="font-sans text-xs uppercase tracking-[0.3em]"
            style={{ color: 'hsl(38 55% 50%)' }}
          >
            Our Water
          </span>
          
          <h2 
            className="mt-4 font-serif text-3xl leading-tight md:text-5xl"
            style={{ color: 'hsl(45 30% 96%)' }}
          >
            <span className="italic">Because water</span> is <br />
            just water, <span style={{ color: 'hsl(38 55% 50%)' }}>right?</span>
          </h2>

          <p 
            className="mt-6 font-sans"
            style={{ color: 'hsla(45, 30%, 96%, 0.7)' }}
          >
            At Pear Tree Well, we don't agree. In a world where chemicals pollute 
            the water, our bodies and our planet, this is the kind of product 
            that people need and want.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              className="group text-center"
            >
              <div 
                className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border transition-all"
                style={{ borderColor: 'hsla(38, 55%, 50%, 0.3)' }}
              >
                <feature.icon 
                  className="h-7 w-7" 
                  strokeWidth={1.5}
                  style={{ color: 'hsl(38 55% 50%)' }}
                />
              </div>
              
              <h3 
                className="font-serif text-xl"
                style={{ color: 'hsl(45 30% 96%)' }}
              >
                {feature.title}
              </h3>
              
              <p 
                className="mt-3 font-sans text-sm leading-relaxed"
                style={{ color: 'hsla(45, 30%, 96%, 0.6)' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mineral Composition */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-24 rounded-sm border p-8 md:p-12"
          style={{ 
            borderColor: 'hsla(45, 30%, 96%, 0.1)',
            backgroundColor: 'hsla(45, 30%, 96%, 0.05)'
          }}
        >
          <h3 
            className="text-center font-serif text-2xl"
            style={{ color: 'hsl(45 30% 96%)' }}
          >
            Typical <span className="italic" style={{ color: 'hsl(38 55% 50%)' }}>Analysis</span>
          </h3>
          
          <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { mineral: 'Calcium', value: '200 mg/l' },
              { mineral: 'Magnesium', value: '70.4 mg/l' },
              { mineral: 'Potassium', value: '5.5 mg/l' },
              { mineral: 'Silicon', value: '8.7 mg/l' },
            ].map((item) => (
              <div key={item.mineral} className="text-center">
                <span 
                  className="font-serif text-2xl md:text-3xl"
                  style={{ color: 'hsl(38 55% 50%)' }}
                >
                  {item.value}
                </span>
                <p 
                  className="mt-2 font-sans text-xs uppercase tracking-wider"
                  style={{ color: 'hsla(45, 30%, 96%, 0.5)' }}
                >
                  {item.mineral}
                </p>
              </div>
            ))}
          </div>
          
          <p 
            className="mt-8 text-center font-sans text-xs uppercase tracking-wider"
            style={{ color: 'hsla(45, 30%, 96%, 0.4)' }}
          >
            16+ Natural Minerals & Trace Elements • pH 7.2 • Values may vary due to natural variation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PuritySection;
