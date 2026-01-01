import { Facebook, Instagram, Twitter } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'Our Source', href: '#source' },
    { name: 'Our Water', href: '#purity' },
    { name: 'Our Story', href: '#heritage' },
    { name: 'Sustainability', href: '#sustainability' },
  ],
  products: [
    { name: 'Still Water 750ml', href: '#' },
    { name: 'Sparkling Water 750ml', href: '#' },
    { name: 'Home Delivery', href: '#' },
    { name: 'Collection', href: '#' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Delivery Areas', href: '#contact' },
    { name: 'Opening Hours', href: '#contact' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'hsl(195 50% 10%)' }}>
      <div className="container mx-auto px-6 py-16 md:py-20">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a 
              href="#" 
              className="font-serif text-2xl font-light tracking-wider"
              style={{ color: 'hsl(45 30% 96%)' }}
            >
              PEAR TREE <span className="italic" style={{ color: 'hsl(38 55% 50%)' }}>WELL</span>
            </a>
            <p 
              className="mt-4 max-w-sm font-sans text-sm leading-relaxed"
              style={{ color: 'hsla(45, 30%, 96%, 0.6)' }}
            >
              Locally sourced natural mineral water from the heart of the High Weald. 
              The only mineral water bottled at source in Sussex. Pure, natural, 
              and unadulterated.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border transition-all"
                  style={{ 
                    borderColor: 'hsla(45, 30%, 96%, 0.2)',
                    color: 'hsla(45, 30%, 96%, 0.6)'
                  }}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 
              className="font-sans text-xs uppercase tracking-[0.2em]"
              style={{ color: 'hsl(45 30% 96%)' }}
            >
              Company
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm transition-colors"
                    style={{ color: 'hsla(45, 30%, 96%, 0.6)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 
              className="font-sans text-xs uppercase tracking-[0.2em]"
              style={{ color: 'hsl(45 30% 96%)' }}
            >
              Products
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm transition-colors"
                    style={{ color: 'hsla(45, 30%, 96%, 0.6)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 
              className="font-sans text-xs uppercase tracking-[0.2em]"
              style={{ color: 'hsl(45 30% 96%)' }}
            >
              Support
            </h4>
            <ul className="mt-6 space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm transition-colors"
                    style={{ color: 'hsla(45, 30%, 96%, 0.6)' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t pt-8 md:flex-row"
          style={{ borderColor: 'hsla(45, 30%, 96%, 0.1)' }}
        >
          <p 
            className="font-sans text-xs"
            style={{ color: 'hsla(45, 30%, 96%, 0.4)' }}
          >
            © 2024 Pear Tree Well Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a 
              href="#" 
              className="font-sans text-xs transition-colors"
              style={{ color: 'hsla(45, 30%, 96%, 0.4)' }}
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="font-sans text-xs transition-colors"
              style={{ color: 'hsla(45, 30%, 96%, 0.4)' }}
            >
              Cookie Policy
            </a>
            <a 
              href="#" 
              className="font-sans text-xs transition-colors"
              style={{ color: 'hsla(45, 30%, 96%, 0.4)' }}
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
