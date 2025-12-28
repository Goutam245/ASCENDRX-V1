import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Award, 
  FlaskConical, 
  FileCheck,
  Target,
  TestTube,
  Truck,
  TrendingUp,
  Star,
  ChevronRight,
  Play,
  Users,
  Zap,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProductCard } from '@/components/product/ProductCard';
import { products, testimonials, blogPosts } from '@/data/products';
import { cn } from '@/lib/utils';

// Animated DNA Particle Component
function DNAParticle({ className }: { className?: string }) {
  return (
    <div className={cn('absolute w-2 h-2 rounded-full bg-cyan/30 animate-float', className)} />
  );
}

// Stats Counter Component
function StatCounter({ value, label, suffix = '' }: { value: string; label: string; suffix?: string }) {
  return (
    <div className="text-center">
      <div className="font-heading text-4xl md:text-5xl font-bold gradient-text mb-2">
        {value}{suffix}
      </div>
      <div className="text-muted-foreground text-sm">{label}</div>
    </div>
  );
}

// Trust Badge Component
function TrustBadge({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex items-center gap-3 glass-card px-4 py-3">
      <div className="w-10 h-10 rounded-lg bg-cyan/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-cyan" />
      </div>
      <span className="font-accent text-sm font-medium">{text}</span>
    </div>
  );
}

// Timeline Step Component
function TimelineStep({ 
  step, 
  icon: Icon, 
  title, 
  description 
}: { 
  step: number; 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan/20 to-purple/20 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan/50 transition-all duration-300">
        <Icon className="w-8 h-8 text-cyan" />
      </div>
      <Badge variant="glass" className="mb-3">Step {step}</Badge>
      <h4 className="font-heading text-lg font-semibold mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm max-w-[200px]">{description}</p>
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="glass-card p-8 space-y-6 hover-lift">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan to-purple p-0.5">
          <div className="w-full h-full rounded-full bg-navy-deep flex items-center justify-center">
            <span className="font-heading font-bold text-lg">{testimonial.name[0]}</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-heading font-semibold">{testimonial.name}</h4>
            {testimonial.verified && (
              <Badge variant="success" className="text-xs">Verified</Badge>
            )}
          </div>
          <p className="text-muted-foreground text-sm">{testimonial.age}, {testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-gold text-gold" />
        ))}
      </div>
      
      <p className="text-foreground text-lg leading-relaxed">"{testimonial.quote}"</p>
      
      <div className="pt-4 border-t border-white/10">
        <p className="text-sm text-cyan font-medium">{testimonial.result}</p>
        <p className="text-xs text-muted-foreground mt-1">Using: {testimonial.product}</p>
      </div>
    </div>
  );
}

export default function Index() {
  const featuredProducts = products.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 particles-bg" />
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* Animated Particles */}
        <DNAParticle className="top-1/4 left-1/4 animation-delay-100" />
        <DNAParticle className="top-1/3 right-1/3 animation-delay-300 w-3 h-3" />
        <DNAParticle className="bottom-1/4 left-1/3 animation-delay-500" />
        <DNAParticle className="top-1/2 right-1/4 animation-delay-700 w-4 h-4" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple/20 rounded-full blur-3xl animate-pulse-glow animation-delay-500" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <Badge variant="glass" className="mb-6 animate-fade-in">
                  <Zap className="w-3 h-3 mr-1" />
                  Pharmaceutical-Grade Excellence
                </Badge>
                <h1 className="font-heading text-display font-bold leading-tight">
                  ELEVATE YOUR
                  <span className="block gradient-text text-glow">BIOLOGY</span>
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-cyan to-purple mt-4 animate-draw-line" />
              </div>
              
              <p className="text-body-lg text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
                Pharmaceutical-Grade Peptides. Clinical Precision. Transformative Results. 
                Join 50,000+ high performers optimizing their biology with science-backed solutions.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/shop" className="gap-2">
                    Explore Solutions
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="hero-outline" size="xl" className="gap-2">
                  <Play className="w-5 h-5" />
                  Watch Our Science
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 animate-fade-in animation-delay-500">
                <TrustBadge icon={Award} text="99.9% Purity" />
                <TrustBadge icon={Shield} text="FDA Registered" />
                <TrustBadge icon={FlaskConical} text="3rd Party Tested" />
                <TrustBadge icon={FileCheck} text="COA Available" />
              </div>
            </div>

            {/* Right Content - 3D Visual */}
            <div className="relative hidden lg:flex items-center justify-center animate-fade-in-right animation-delay-300">
              <div className="relative w-full max-w-lg aspect-square">
                {/* Rotating Ring */}
                <div className="absolute inset-0 rounded-full border border-cyan/20 animate-spin-slow" />
                <div className="absolute inset-8 rounded-full border border-purple/20 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
                
                {/* Center Glow */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-radial from-cyan/30 via-cyan/10 to-transparent animate-pulse-glow" />
                </div>
                
                {/* Product Vials */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-64 glass-card p-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <div className="w-full h-full bg-gradient-to-b from-cyan/20 to-transparent rounded-lg flex items-center justify-center">
                      <div className="w-16 h-40 bg-gradient-to-b from-white/20 to-white/5 rounded-full relative">
                        <div className="absolute inset-x-3 top-3 bottom-1/3 bg-gradient-to-b from-cyan/50 to-cyan/20 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Labels */}
                <div className="absolute top-10 right-0 glass-card px-4 py-2 animate-bounce-subtle">
                  <span className="font-mono text-sm text-cyan">99.9% PURE</span>
                </div>
                <div className="absolute bottom-20 left-0 glass-card px-4 py-2 animate-bounce-subtle animation-delay-500">
                  <span className="font-mono text-sm text-gold">LAB TESTED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-cyan animate-pulse" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRUST & STATS SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-b from-navy-deep to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-h2 font-bold mb-4">
              Trusted by <span className="gradient-text">50,000+</span> High Performers
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From elite athletes to biohackers, our pharmaceutical-grade peptides are the gold standard in human optimization.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <StatCounter value="99.9" suffix="%" label="Purity Guaranteed" />
            <StatCounter value="50K" suffix="+" label="Happy Customers" />
            <StatCounter value="100" suffix="+" label="Research-Backed Formulas" />
            <StatCounter value="48" suffix="hr" label="Fast Shipping" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          FEATURED PRODUCTS SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-navy-deep" />
        <div className="absolute inset-0 particles-bg opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Badge variant="cyan" className="mb-4">Featured Products</Badge>
              <h2 className="font-heading text-h2 font-bold">
                Precision-Engineered <span className="text-glow gradient-text">Solutions</span>
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/shop" className="gap-2">
                View All Products
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          HOW IT WORKS SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-navy to-background" />
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Connecting Lines */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent hidden md:block" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="glass" className="mb-4">Simple Process</Badge>
            <h2 className="font-heading text-h2 font-bold mb-4">
              Your Journey to <span className="gradient-text">Optimization</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From selection to transformation - we make it simple to achieve your peak potential.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 md:gap-4">
            <TimelineStep 
              step={1} 
              icon={Target} 
              title="Select Your Goal" 
              description="Choose from muscle growth, recovery, longevity, or cognitive enhancement"
            />
            <TimelineStep 
              step={2} 
              icon={TestTube} 
              title="Choose Your Formula" 
              description="Browse our 100+ research-backed peptide solutions"
            />
            <TimelineStep 
              step={3} 
              icon={Truck} 
              title="Receive & Track" 
              description="Fast shipping with real-time tracking and COA included"
            />
            <TimelineStep 
              step={4} 
              icon={TrendingUp} 
              title="Experience Results" 
              description="Track your transformation with our progress tools"
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TESTIMONIALS SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep to-background" />
        <div className="absolute inset-0 particles-bg opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Users className="w-5 h-5 text-cyan" />
              <span className="text-cyan font-accent">Real Results</span>
            </div>
            <h2 className="font-heading text-h2 font-bold mb-4">
              Real <span className="gradient-text">Transformations</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from our community of optimizers who have experienced the ASCENDRX difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          SCIENCE SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-background to-navy" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <Badge variant="purple" className="mb-4">Research & Science</Badge>
                <h2 className="font-heading text-h2 font-bold mb-4">
                  Backed by <span className="text-glow-purple gradient-text">Cutting-Edge Research</span>
                </h2>
                <p className="text-muted-foreground">
                  Every formula is supported by peer-reviewed studies and manufactured under strict pharmaceutical standards.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: 'How Peptides Work', desc: 'Understanding mechanisms at the cellular level' },
                  { title: 'Our Testing Process', desc: '7-step quality assurance with 3rd party verification' },
                  { title: 'Clinical Studies', desc: 'Access our library of 200+ research papers' },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="glass-card p-4 flex items-center gap-4 cursor-pointer hover:border-cyan/50 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple/20 flex items-center justify-center">
                      <FlaskConical className="w-5 h-5 text-purple" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-heading font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  </div>
                ))}
              </div>

              <Button variant="purple" asChild>
                <Link to="/science" className="gap-2">
                  View Research Library
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Visual */}
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-radial from-purple/20 via-transparent to-transparent" />
              <div className="relative aspect-square">
                {/* Molecule Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-72 h-72 rounded-full border border-purple/30 animate-spin-slow flex items-center justify-center">
                    <div className="w-56 h-56 rounded-full border border-cyan/30 animate-spin-slow" style={{ animationDirection: 'reverse' }}>
                      <div className="w-40 h-40 rounded-full border border-white/20 animate-pulse-glow m-auto mt-8" />
                    </div>
                  </div>
                </div>
                
                {/* Stats Cards */}
                <div className="absolute top-10 right-10 glass-card p-4">
                  <div className="font-mono text-2xl font-bold text-cyan">200+</div>
                  <div className="text-sm text-muted-foreground">Clinical Studies</div>
                </div>
                <div className="absolute bottom-10 left-10 glass-card p-4">
                  <div className="font-mono text-2xl font-bold text-purple">99.9%</div>
                  <div className="text-sm text-muted-foreground">Purity Standard</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          BLOG PREVIEW SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 bg-gradient-to-b from-background to-navy-deep relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <Badge variant="glass" className="mb-4">Latest Insights</Badge>
              <h2 className="font-heading text-h2 font-bold">
                Learn & <span className="gradient-text">Optimize</span>
              </h2>
            </div>
            <Button variant="outline" asChild>
              <Link to="/blog" className="gap-2">
                View All Articles
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id}
                className="glass-card overflow-hidden group hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video bg-gradient-to-br from-cyan/20 to-purple/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep to-transparent" />
                  <Badge variant="glass" className="absolute top-4 left-4">
                    {post.category}
                  </Badge>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="font-heading text-xl font-semibold group-hover:text-cyan transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.author}</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA SECTION
      ═══════════════════════════════════════════════════════════════ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-purple/10 to-cyan/10 animate-gradient-shift" style={{ backgroundSize: '200% 100%' }} />
        <div className="absolute inset-0 bg-navy-deep/90" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-h1 font-bold mb-6">
              Ready to <span className="gradient-text text-glow">Transform?</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Join the elite community of biohackers and high performers who trust ASCENDRX for their optimization journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <Link to="/shop" className="gap-2">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/science">Explore the Science</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
