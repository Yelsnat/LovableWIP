import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import heritageValley from '@/assets/heritage-valley.jpg';

const HeritageSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="heritage" className="relative overflow-hidden bg-secondary">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heritageValley}
          alt="Sussex countryside"
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />
      </div>

      <div className="container relative z-10 mx-auto px-6 py-24 md:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <span 
              className="font-sans text-xs uppercase tracking-[0.3em]"
              style={{ color: 'hsl(38 55% 50%)' }}
            >
              Our Story
            </span>
            
            <h2 className="mt-4 font-serif text-3xl leading-tight text-primary md:text-5xl">
              Locally sourced from <br />
              <span className="italic">the heart</span> of the <br />
              <span style={{ color: 'hsl(38 55% 50%)' }}>High Weald</span>
            </h2>

            <p className="mt-6 font-sans text-muted-foreground">
              Pear Tree Well is the only mineral water bottled at source in Sussex. 
              We believe that in a world where chemicals pollute the water, our bodies 
              and our planet, this is the kind of safe product that people need and want.
            </p>

            <div className="mt-8 space-y-4">
              <p className="font-sans text-muted-foreground">
                "Water is life's mater and matrix, mother and medium. There is no life 
                without water."
              </p>
              <p className="font-sans text-sm italic text-muted-foreground">
                — Albert Szent-Gyorgyi
              </p>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-8"
          >
            <div className="border-l-2 pl-6" style={{ borderColor: 'hsl(38 55% 50%)' }}>
              <h3 className="font-serif text-xl text-primary">Home Delivery Service</h3>
              <p className="mt-2 font-sans text-sm text-muted-foreground">
                We provide a local, friendly service and offer fortnightly delivery 
                to Lewes, Eastbourne, Brighton, Forest Row and surrounding areas.
              </p>
            </div>

            <div className="border-l-2 pl-6" style={{ borderColor: 'hsl(38 55% 50%)' }}>
              <h3 className="font-serif text-xl text-primary">Glass Bottles</h3>
              <p className="mt-2 font-sans text-sm text-muted-foreground">
                Our water is available in premium glass bottles—750ml in both still 
                and sparkling varieties, plus larger formats for home and office.
              </p>
            </div>

            <div className="border-l-2 pl-6" style={{ borderColor: 'hsl(38 55% 50%)' }}>
              <h3 className="font-serif text-xl text-primary">Collection Available</h3>
              <p className="mt-2 font-sans text-sm text-muted-foreground">
                Visit us Monday to Thursday, 9:30am to 5:30pm to collect your water 
                directly from the source.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 border px-8 py-4 font-sans text-xs uppercase tracking-[0.2em] transition-all"
              style={{ 
                borderColor: 'hsl(38 55% 50%)',
                color: 'hsl(38 55% 50%)'
              }}
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Heritage Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 border-l-2 pl-8"
          style={{ borderColor: 'hsl(38 55% 50%)' }}
        >
          <p className="font-serif text-2xl italic leading-relaxed text-primary md:text-3xl">
            "This water is nature's own creation, something water barons 
            can only dream about."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default HeritageSection;
