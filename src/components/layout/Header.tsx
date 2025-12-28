import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Heart, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { useCart } from '@/hooks/useCart';

const navigation = [
  {
    name: 'Shop',
    href: '/shop',
    megaMenu: true,
    categories: [
      { name: 'All Products', href: '/shop', description: 'Browse our complete catalog' },
      { name: 'Muscle & Strength', href: '/shop?category=muscle', description: 'Build lean muscle mass' },
      { name: 'Recovery', href: '/shop?category=recovery', description: 'Accelerate healing' },
      { name: 'Longevity', href: '/shop?category=longevity', description: 'Age optimally' },
      { name: 'Cognitive', href: '/shop?category=cognitive', description: 'Enhance mental clarity' },
    ],
  },
  {
    name: 'Science',
    href: '/science',
    megaMenu: true,
    categories: [
      { name: 'How It Works', href: '/science#how-it-works', description: 'Understand peptide mechanisms' },
      { name: 'Research Library', href: '/science#research', description: '200+ clinical studies' },
      { name: 'Testing Standards', href: '/science#testing', description: 'Our quality process' },
    ],
  },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const location = useLocation();
  const { items, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMenu(null);
  }, [location]);

  const cartItemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-purple via-cyan to-purple text-navy-deep text-center py-2 text-sm font-medium">
        <p>Free shipping on orders over $75 • Use code OPTIMIZE for 15% off</p>
      </div>

      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          isScrolled
            ? 'bg-navy-deep/95 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan to-purple rounded-lg flex items-center justify-center group-hover:shadow-glow transition-shadow duration-300">
                  <span className="text-navy-deep font-bold text-xl">A</span>
                </div>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight">
                ASCEND<span className="text-cyan">RX</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && setActiveMenu(item.name)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg',
                      location.pathname === item.href
                        ? 'text-cyan'
                        : 'text-foreground/80 hover:text-cyan hover:bg-white/5'
                    )}
                  >
                    {item.name}
                    {item.megaMenu && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Mega Menu */}
                  {item.megaMenu && activeMenu === item.name && (
                    <div className="absolute top-full left-0 pt-2 animate-fade-in">
                      <div className="glass-card p-4 min-w-[280px] shadow-xl">
                        <div className="space-y-1">
                          {item.categories?.map((category) => (
                            <Link
                              key={category.name}
                              to={category.href}
                              className="block p-3 rounded-lg hover:bg-white/5 transition-colors group/item"
                            >
                              <div className="font-medium text-foreground group-hover/item:text-cyan transition-colors">
                                {category.name}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {category.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-cyan">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-cyan">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground/80 hover:text-cyan">
                <Heart className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/80 hover:text-cyan relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <Badge
                    variant="cyan"
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
              <Button variant="hero" size="sm" asChild>
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <Badge
                    variant="cyan"
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                  >
                    {cartItemCount}
                  </Badge>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-navy-deep/98 backdrop-blur-xl border-b border-white/10 animate-slide-down">
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={cn(
                        'block px-4 py-3 rounded-lg text-lg font-medium transition-colors',
                        location.pathname === item.href
                          ? 'text-cyan bg-white/5'
                          : 'text-foreground hover:text-cyan hover:bg-white/5'
                      )}
                    >
                      {item.name}
                    </Link>
                    {item.categories && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.categories.map((category) => (
                          <Link
                            key={category.name}
                            to={category.href}
                            className="block px-4 py-2 text-sm text-muted-foreground hover:text-cyan transition-colors"
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-6 pt-6 border-t border-white/10 flex gap-4">
                <Button variant="outline" className="flex-1" asChild>
                  <Link to="/login">Sign In</Link>
                </Button>
                <Button variant="hero" className="flex-1" asChild>
                  <Link to="/shop">Shop Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
