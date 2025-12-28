import { Link } from 'react-router-dom';
import { Instagram, Youtube, Linkedin, Twitter, Mail, Shield, Award, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const footerLinks = {
  shop: [
    { name: 'Best Sellers', href: '/shop?sort=bestselling' },
    { name: 'New Arrivals', href: '/shop?sort=newest' },
    { name: 'All Products', href: '/shop' },
    { name: 'Bulk Orders', href: '/contact' },
    { name: 'Subscriptions', href: '/subscriptions' },
  ],
  support: [
    { name: 'Help Center', href: '/contact' },
    { name: 'Shipping & Returns', href: '/shipping' },
    { name: 'Track Order', href: '/track' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Science', href: '/science' },
    { name: 'Research', href: '/science#research' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
  ],
};

const socialLinks = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'YouTube', icon: Youtube, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/10">
      {/* Newsletter Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="glass-card p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Join The Movement
          </h3>
          <p className="text-muted-foreground mb-6">
            Get weekly insights, exclusive offers, and research updates from the world of peptides.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-cyan focus:ring-1 focus:ring-cyan transition-colors"
              />
            </div>
            <Button variant="hero" size="lg">
              Subscribe
            </Button>
          </form>
          <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
            <Lock className="w-3 h-3" />
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan to-purple rounded-lg flex items-center justify-center">
                <span className="text-navy-deep font-bold text-xl">A</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                ASCEND<span className="text-cyan">RX</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              Elevating human performance through science-backed peptide solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-cyan hover:border-cyan/50 hover:bg-cyan/10 transition-all"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-cyan transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-5 h-5 text-cyan" />
              <span className="text-sm">SSL Secure</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Award className="w-5 h-5 text-cyan" />
              <span className="text-sm">FDA Registered</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Lock className="w-5 h-5 text-cyan" />
              <span className="text-sm">Money-Back Guarantee</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="flex justify-center gap-4 mb-8">
            {['Visa', 'Mastercard', 'Amex', 'PayPal', 'Apple Pay'].map((method) => (
              <div
                key={method}
                className="px-3 py-1 rounded bg-white/5 border border-white/10 text-xs text-muted-foreground"
              >
                {method}
              </div>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} ASCENDRX. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link to="/privacy" className="hover:text-cyan transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-cyan transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="hover:text-cyan transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
