import { Shield, Award, Users, FlaskConical, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { teamMembers } from '@/data/products';
import labHero from '@/assets/lab-hero.png';

const milestones = [
  { year: '2018', title: 'Founded', description: 'ASCENDRX was founded with a mission to provide pharmaceutical-grade peptides.' },
  { year: '2019', title: 'FDA Registered', description: 'Achieved FDA registration for our manufacturing facility.' },
  { year: '2020', title: '10K Customers', description: 'Reached our first major milestone of 10,000 satisfied customers.' },
  { year: '2021', title: 'Lab Expansion', description: 'Expanded our research laboratory and testing capabilities.' },
  { year: '2022', title: '100+ Products', description: 'Launched over 100 research-backed peptide formulations.' },
  { year: '2024', title: '50K+ Community', description: 'Built a community of over 50,000 optimization enthusiasts.' },
];

const certifications = [
  { name: 'FDA Registered', description: 'Manufacturing facility registered with the FDA' },
  { name: 'GMP Certified', description: 'Good Manufacturing Practice certified' },
  { name: 'ISO 9001', description: 'Quality management system certified' },
  { name: '3rd Party Tested', description: 'Independent laboratory verification' },
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={labHero} alt="Laboratory" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/80 via-navy-deep/90 to-navy-deep" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge variant="glass" className="mb-6">Our Story</Badge>
          <h1 className="font-heading text-h1 font-bold mb-6">
            Redefining <span className="gradient-text">Human Performance</span>
          </h1>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Founded by scientists, trusted by athletes, backed by research. We're on a mission to unlock human potential through pharmaceutical-grade peptide solutions.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-navy-deep">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="cyan" className="mb-4">Our Mission</Badge>
              <h2 className="font-heading text-h2 font-bold mb-6">
                Elevating Biology Through <span className="gradient-text">Science</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                At ASCENDRX, we believe everyone deserves access to cutting-edge optimization tools. Our team of researchers, scientists, and biohackers work tirelessly to bring you the purest, most effective peptide formulations available anywhere.
              </p>
              <p className="text-muted-foreground mb-8">
                Every product we create undergoes rigorous testing to ensure pharmaceutical-grade purity and potency. We don't just meet industry standards—we set them.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: '99.9% Purity' },
                  { icon: Award, label: 'FDA Registered' },
                  { icon: Users, label: '50K+ Customers' },
                  { icon: FlaskConical, label: '3rd Party Tested' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 glass-card p-4">
                    <item.icon className="w-5 h-5 text-cyan" />
                    <span className="font-accent text-sm">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden">
                <img src={labHero} alt="Our Laboratory" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-6">
                <div className="font-mono text-3xl font-bold text-cyan">200+</div>
                <div className="text-sm text-muted-foreground">Clinical Studies Referenced</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-navy to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="glass" className="mb-4">Our Journey</Badge>
            <h2 className="font-heading text-h2 font-bold">Milestones of Excellence</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan via-purple to-cyan" />
              
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-center gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="glass-card p-6 inline-block">
                      <Badge variant="cyan" className="mb-2">{milestone.year}</Badge>
                      <h3 className="font-heading text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-cyan glow-cyan relative z-10" />
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-navy-deep">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="glass" className="mb-4">Our Values</Badge>
            <h2 className="font-heading text-h2 font-bold">What Drives Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Precision', desc: 'Every formulation is crafted with exacting standards for maximum efficacy. We measure purity to the hundredth of a percent.' },
              { icon: FlaskConical, title: 'Science-First', desc: 'We only offer products backed by peer-reviewed research and clinical data. No hype, just results.' },
              { icon: Zap, title: 'Innovation', desc: 'Constantly pushing boundaries to bring you the latest in peptide science. We invest heavily in R&D.' },
            ].map((value) => (
              <div key={value.title} className="glass-card p-8 text-center hover-lift">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-cyan" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="glass" className="mb-4">Our Team</Badge>
            <h2 className="font-heading text-h2 font-bold">Meet the Experts</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="glass-card p-6 text-center hover-lift">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan to-purple mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-navy-deep">{member.name[0]}</span>
                </div>
                <h3 className="font-heading text-lg font-semibold">{member.name}</h3>
                <p className="text-cyan text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gradient-to-b from-navy-deep to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="glass" className="mb-4">Quality Assurance</Badge>
            <h2 className="font-heading text-h2 font-bold">Our Certifications</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert) => (
              <div key={cert.name} className="glass-card p-6 text-center">
                <CheckCircle className="w-12 h-12 text-cyan mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">{cert.name}</h3>
                <p className="text-muted-foreground text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan/10 via-purple/10 to-cyan/10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-heading text-h2 font-bold mb-6">Ready to Optimize?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join 50,000+ high performers who trust ASCENDRX for their optimization journey.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/shop" className="gap-2">
              Explore Our Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
