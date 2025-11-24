import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface QuoteModalProps {
  trigger?: React.ReactNode;
  productName?: string;
}

export const QuoteModal = ({ trigger, productName }: QuoteModalProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project_details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('quote_requests')
        .insert([{
          ...formData,
          product_name: productName || ""
        }]);

      if (error) throw error;

      toast.success("Quote request submitted! We'll contact you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        project_details: ""
      });
      setOpen(false);
    } catch (error) {
      console.error('Error submitting quote:', error);
      toast.error("Failed to submit quote. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || <Button size="lg" className="bg-accent hover:bg-accent/90">Request Quote</Button>}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Request a Quote</DialogTitle>
          <DialogDescription>
            {productName ? `Get a custom quote for ${productName}` : "Fill out the form below and we'll get back to you shortly"}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
            <Input 
              required 
              placeholder="Your name" 
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
            <Input 
              required 
              type="email" 
              placeholder="your@email.com" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
            <Input 
              placeholder="+1 (555) 000-0000" 
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          {productName && (
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Product</label>
              <Input disabled value={productName} />
            </div>
          )}
          <div>
            <label className="text-sm font-medium text-foreground mb-2 block">Project Details *</label>
            <Textarea 
              required 
              placeholder="Tell us about your requirements, quantities, dimensions, etc." 
              className="min-h-[100px]" 
              value={formData.project_details}
              onChange={(e) => setFormData({...formData, project_details: e.target.value})}
            />
          </div>
          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-accent hover:bg-accent/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
