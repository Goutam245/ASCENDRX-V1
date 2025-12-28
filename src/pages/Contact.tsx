import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Message Sent!', description: "We'll get back to you within 24 hours." });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen">
      <section className="py-16 bg-gradient-hero relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge variant="glass" className="mb-4">Get in Touch</Badge>
          <h1 className="font-heading text-h1 font-bold mb-4">We're Here to <span className="gradient-text">Help</span></h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">Have questions? Our team is ready to assist you.</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-heading text-h3 font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required className="w-full h-12 px-4 rounded-xl bg-card border border-border focus:border-cyan focus:outline-none" />
                <input type="email" placeholder="Your Email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} required className="w-full h-12 px-4 rounded-xl bg-card border border-border focus:border-cyan focus:outline-none" />
              </div>
              <select value={formData.subject} onChange={e => setFormData({...formData, subject: e.target.value})} className="w-full h-12 px-4 rounded-xl bg-card border border-border focus:border-cyan focus:outline-none">
                <option value="">Select Subject</option>
                <option value="order">Order Inquiry</option>
                <option value="product">Product Question</option>
                <option value="support">Technical Support</option>
                <option value="other">Other</option>
              </select>
              <textarea placeholder="Your Message" rows={5} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} required className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-cyan focus:outline-none resize-none" />
              <Button variant="hero" size="lg" type="submit" className="w-full"><Send className="w-4 h-4 mr-2" />Send Message</Button>
            </form>
          </div>
          <div className="space-y-6">
            <h2 className="font-heading text-h3 font-bold mb-6">Contact Information</h2>
            {[
              { icon: Mail, label: 'Email', value: 'support@ascendrx.com' },
              { icon: Phone, label: 'Phone', value: '1-800-PEPTIDE' },
              { icon: MapPin, label: 'Address', value: '123 Science Park, Austin, TX 78701' },
              { icon: Clock, label: 'Hours', value: 'Mon-Fri: 9AM - 6PM EST' },
            ].map(item => (
              <div key={item.label} className="glass-card p-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan/10 flex items-center justify-center"><item.icon className="w-6 h-6 text-cyan" /></div>
                <div><div className="text-sm text-muted-foreground">{item.label}</div><div className="font-medium">{item.value}</div></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
