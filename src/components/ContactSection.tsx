import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-secondary">
      <div className="container mx-auto px-6 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Newsletter */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span 
              className="font-sans text-xs uppercase tracking-[0.3em]"
              style={{ color: 'hsl(38 55% 50%)' }}
            >
              Newsletter
            </span>
            
            <h2 className="mt-4 font-serif text-3xl leading-tight text-primary md:text-4xl">
              Stay <span className="italic">updated</span>
            </h2>

            <p className="mt-4 font-sans text-muted-foreground">
              Receive updates on delivery schedules, new products, and 
              special offers from Pear Tree Well.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
              <button
                type="submit"
                className="border border-primary bg-primary px-8 py-3 font-sans text-xs uppercase tracking-[0.15em] text-primary-foreground transition-all hover:bg-transparent hover:text-primary"
              >
                Subscribe
              </button>
            </form>

            <p className="mt-4 font-sans text-xs text-muted-foreground">
              By subscribing you agree to our{' '}
              <a href="#" className="underline" style={{ color: 'hsl(38 55% 50%)' }}>
                Privacy Policy
              </a>
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <span 
                className="font-sans text-xs uppercase tracking-[0.3em]"
                style={{ color: 'hsl(38 55% 50%)' }}
              >
                Contact Us
              </span>
              
              <h2 className="mt-4 font-serif text-3xl leading-tight text-primary md:text-4xl">
                Visit or <span className="italic">call</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5" strokeWidth={1.5} style={{ color: 'hsl(38 55% 50%)' }} />
                <div>
                  <p className="font-sans text-foreground">Pear Tree Well Ltd</p>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    High Weald, Sussex<br />
                    United Kingdom
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5" strokeWidth={1.5} style={{ color: 'hsl(38 55% 50%)' }} />
                <div>
                  <p className="font-sans text-foreground">Opening Hours</p>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    Monday - Thursday<br />
                    9:30am - 5:30pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5" strokeWidth={1.5} style={{ color: 'hsl(38 55% 50%)' }} />
                <div>
                  <p className="font-sans text-foreground">Telephone</p>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    Call for delivery enquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5" strokeWidth={1.5} style={{ color: 'hsl(38 55% 50%)' }} />
                <div>
                  <p className="font-sans text-foreground">Email</p>
                  <p className="mt-1 font-sans text-sm text-muted-foreground">
                    info@peartreewell.co.uk
                  </p>
                </div>
              </div>
            </div>

            <p className="font-sans text-sm text-muted-foreground">
              <strong>Delivery Areas:</strong> Lewes, Eastbourne, Brighton, 
              Forest Row and surrounding areas. Fortnightly delivery service available.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
