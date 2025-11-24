import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground">
            Get in touch with our team for inquiries and quotations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input 
                    required 
                    placeholder="Your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    required 
                    type="email" 
                    placeholder="your@email.com" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                <Input 
                  placeholder="+1 (555) 000-0000" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input 
                  placeholder="How can we help?" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  required 
                  placeholder="Tell us about your project..." 
                  className="min-h-[120px]" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-accent hover:bg-accent/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
            
            <Card className="p-4 flex items-start gap-4">
              <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground">0911 227658</p>
                <p className="text-muted-foreground">+251-91-122-6756</p>
              </div>
            </Card>

            <Card className="p-4 flex items-start gap-4">
              <Mail className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">fekaduglass@gmail.com</p>
                <p className="text-muted-foreground">info@fwglasstech.com</p>
              </div>
            </Card>

            <Card className="p-4 flex items-start gap-4">
              <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Address</h4>
                <p className="text-muted-foreground">
                  Addis Ababa, Ethiopia<br />
                  Behind Meskel Flower
                </p>
              </div>
            </Card>

            <Card className="p-4 flex items-start gap-4">
              <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                <p className="text-muted-foreground">Monday - Saturday: 8:00 AM - 6:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
