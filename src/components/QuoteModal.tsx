import type { ReactNode } from 'react';
import { useState } from 'react';

interface QuoteModalProps {
    trigger?: ReactNode;
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
            // Simulate form submission
            await new Promise(resolve => setTimeout(resolve, 1000));

            alert(`Quote request submitted for ${productName || 'product'}! We'll contact you soon at ${formData.email}`);
            setFormData({
                name: "",
                email: "",
                phone: "",
                project_details: ""
            });
            setOpen(false);
        } catch (error) {
            console.error('Error submitting quote:', error);
            alert("Failed to submit quote. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!open && trigger) {
        return (
            <div onClick={() => setOpen(true)}>
                {trigger}
            </div>
        );
    }

    if (!open) {
        return (
            <button
                onClick={() => setOpen(true)}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-8"
            >
                Request Quote
            </button>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/50" onClick={() => setOpen(false)} />
            <div className="relative bg-background rounded-lg shadow-lg w-full max-w-md p-6 m-4 z-50">
                <div className="mb-4">
                    <h2 className="text-lg font-semibold">Request a Quote</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                        {productName ? `Get a custom quote for ${productName}` : "Fill out the form below and we'll get back to you shortly"}
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                        <input
                            required
                            placeholder="Your name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                        <input
                            required
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                        <input
                            placeholder="+251 911 226 758"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                    </div>
                    {productName && (
                        <div>
                            <label className="text-sm font-medium text-foreground mb-2 block">Product</label>
                            <input
                                disabled
                                value={productName}
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                    )}
                    <div>
                        <label className="text-sm font-medium text-foreground mb-2 block">Project Details *</label>
                        <textarea
                            required
                            placeholder="Tell us about your requirements, quantities, dimensions, etc."
                            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            value={formData.project_details}
                            onChange={(e) => setFormData({ ...formData, project_details: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 h-11 px-8 w-full"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Submitting..." : "Submit Request"}
                    </button>
                </form>
            </div>
        </div>
    );
};
