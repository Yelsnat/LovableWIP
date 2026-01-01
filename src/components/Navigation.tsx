import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Our Source', href: '#source' },
  { name: 'Our Water', href: '#purity' },
  { name: 'Our Story', href: '#heritage' },
  { name: 'Sustainability', href: '#sustainability' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="fixed left-0 right-0 top-0 z-40 transition-all duration-500"
        style={{
          backgroundColor: isScrolled ? 'hsla(195, 50%, 10%, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          padding: isScrolled ? '1rem 0' : '1.5rem 0',
        }}
      >
        <div className="container mx-auto flex items-center justify-between px-6">
          {/* Logo */}
          <a 
            href="#" 
            className="font-serif text-xl font-light tracking-wider md:text-2xl"
            style={{ color: 'hsl(45 30% 96%)' }}
          >
            PEAR TREE <span className="italic" style={{ color: 'hsl(38 55% 50%)' }}>WELL</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="link-underline font-sans text-xs uppercase tracking-[0.15em] transition-colors"
                style={{ color: 'hsla(45, 30%, 96%, 0.8)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'hsl(45 30% 96%)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'hsla(45, 30%, 96%, 0.8)'}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden"
            style={{ color: 'hsl(45 30% 96%)' }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
        }}
        className="fixed inset-0 z-30 flex items-center justify-center md:hidden"
        style={{ backgroundColor: 'hsla(195, 50%, 10%, 0.98)' }}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 20,
              }}
              transition={{ delay: index * 0.1 }}
              className="font-serif text-2xl transition-colors"
              style={{ color: 'hsl(45 30% 96%)' }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default Navigation;
