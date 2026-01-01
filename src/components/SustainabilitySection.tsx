import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Recycle, Droplet, Truck, Heart } from 'lucide-react';
import sustainabilityImg from '@/assets/sustainability.jpg';

const initiatives = [
  {
    icon: Recycle,
    stat: '100%',
    label: 'Glass bottles',
  },
  {
    icon: Droplet,
    stat: '0',
    label: 'Chemicals added',
  },
  {
    icon: Truck,
    stat: 'Local',
    label: 'Delivery only',
  },
  {
    icon: Heart,
    stat: 'Pure',
    label: 'Natural source',
  },
];

const SustainabilitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      id="sustainability" 
      className="relative overflow-hidden"
      style={{ backgroundColor: 'hsl(195 50% 10%)' }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={sustainabilityImg}
          alt="Sustainable facility"
          className="h-full w-full object-cover opacity-30"
        />
        <div 
          className="absolute inset-0"
          style={{ 
            background: 'linear-gradient(to right, hsl(195, 50%, 10%) 0%, hsla(195, 50%, 10%, 0.9) 50%, hsla(195, 50%, 10%, 0.7) 100%)' 
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="max-w-lg"
          >
            <span 
              className="font-sans text-xs uppercase tracking-[0.3em]"
              style={{ color: 'hsl(38 55% 50%)' }}
            >
              Sustainability
            </span>
            
            <h2 
              className="mt-4 font-serif text-3xl leading-tight md:text-5xl"
              style={{ color: 'hsl(45 30% 96%)' }}
            >
              The kind of <span className="italic">safe</span>
              <br />
              product that <span style={{ color: 'hsl(38 55% 50%)' }}>people</span>
              <br />
              need and want
            </h2>

            <p 
              className="mt-6 font-sans"
              style={{ color: 'hsla(45, 30%, 96%, 0.7)' }}
            >
              In a world where chemicals pollute the water, our bodies and our 
              planet, we're committed to providing pure, natural mineral water 
              with minimal environmental impact.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {initiatives.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  className="group"
                >
                  <div 
                    className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
                    style={{ borderColor: 'hsla(38, 55%, 50%, 0.3)' }}
                  >
                    <item.icon 
                      className="h-5 w-5" 
                      strokeWidth={1.5}
                      style={{ color: 'hsl(38 55% 50%)' }}
                    />
                  </div>
                  <span 
                    className="font-serif text-2xl"
                    style={{ color: 'hsl(38 55% 50%)' }}
                  >
                    {item.stat}
                  </span>
                  <p 
                    className="font-sans text-xs uppercase tracking-wider"
                    style={{ color: 'hsla(45, 30%, 96%, 0.8)' }}
                  >
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-12 inline-flex items-center gap-2 border px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] transition-all"
              style={{ 
                borderColor: 'hsl(38 55% 50%)',
                backgroundColor: 'hsl(38 55% 50%)',
                color: 'hsl(195 50% 10%)'
              }}
            >
              Order Now
            </a>
          </motion.div>

          {/* Commitment Box */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div 
              className="rounded-sm border p-8 backdrop-blur-sm md:p-12"
              style={{ 
                borderColor: 'hsla(45, 30%, 96%, 0.1)',
                backgroundColor: 'hsla(45, 30%, 96%, 0.05)'
              }}
            >
              <h3 
                className="font-serif text-2xl"
                style={{ color: 'hsl(45 30% 96%)' }}
              >
                Our <span className="italic" style={{ color: 'hsl(38 55% 50%)' }}>Commitment</span>
              </h3>

              <div className="mt-8 space-y-6">
                {[
                  { name: 'Bottled at Source', desc: 'The only mineral water bottled at source in Sussex' },
                  { name: 'Glass Packaging', desc: 'Premium glass bottles, fully recyclable' },
                  { name: 'Local Delivery', desc: 'Serving Sussex communities with fortnightly delivery' },
                  { name: 'No Additives', desc: 'Pure and unadulterated—nothing added, nothing removed' },
                ].map((item, i, arr) => (
                  <div 
                    key={item.name} 
                    className="flex items-start gap-4 border-b pb-4"
                    style={{ borderColor: i === arr.length - 1 ? 'transparent' : 'hsla(45, 30%, 96%, 0.1)' }}
                  >
                    <div 
                      className="mt-1 h-2 w-2 rounded-full"
                      style={{ backgroundColor: 'hsl(38 55% 50%)' }}
                    />
                    <div>
                      <span 
                        className="font-sans text-sm font-medium"
                        style={{ color: 'hsl(45 30% 96%)' }}
                      >
                        {item.name}
                      </span>
                      <p 
                        className="mt-1 font-sans text-xs"
                        style={{ color: 'hsla(45, 30%, 96%, 0.5)' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
