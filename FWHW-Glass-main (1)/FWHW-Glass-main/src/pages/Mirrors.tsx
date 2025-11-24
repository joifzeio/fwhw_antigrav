import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { QuoteModal } from "@/components/QuoteModal";
import mirrorGlassImage from "@/assets/product-mirror-glass.jpg";
import glassInteriorImage from "@/assets/glass-interior.jpg";

const mirrorTypes = [
  {
    title: "Aluminum Mirror",
    slug: "aluminum-mirror",
    description: "Cost-effective mirrors with aluminum coating, ideal for general applications",
    features: ["Standard quality", "Various sizes", "Economical option"],
    image: mirrorGlassImage
  },
  {
    title: "Silver Mirror",
    slug: "silver-mirror",
    description: "Premium mirrors with silver coating for superior reflection",
    features: ["High reflectivity", "Excellent clarity", "Durable coating"],
    image: mirrorGlassImage
  },
  {
    title: "Copper & Lead Free Mirror",
    slug: "copper-lead-free",
    description: "Environmentally friendly mirrors without harmful chemicals",
    features: ["Eco-friendly", "Safe for all applications", "Green building certified"],
    image: mirrorGlassImage
  },
  {
    title: "Safety Mirror",
    slug: "safety-mirror",
    description: "Laminated mirrors for enhanced safety and security",
    features: ["Shatter-proof", "Safety backing", "Public space approved"],
    image: mirrorGlassImage
  },
  {
    title: "Antique Mirror",
    slug: "antique-mirror",
    description: "Decorative mirrors with aged, vintage appearance",
    features: ["Unique patterns", "Custom aging", "Artistic designs"],
    image: glassInteriorImage
  },
  {
    title: "2 Way Mirror",
    slug: "two-way-mirror",
    description: "One-way observation mirrors for security and commercial use",
    features: ["Privacy control", "Professional grade", "Custom specifications"],
    image: mirrorGlassImage
  },
  {
    title: "Smart Mirror",
    slug: "smart-mirror",
    description: "Technology-integrated mirrors with display capabilities",
    features: ["Digital display", "Touch interface", "IoT compatible"],
    image: glassInteriorImage
  }
];

const Mirrors = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-4">Mirror Glass Solutions</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Premium quality mirrors manufactured to the highest standards. From standard aluminum mirrors 
                to cutting-edge smart mirrors, we provide complete mirror solutions for residential, commercial, 
                and industrial applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mirrorTypes.map((mirror) => (
                <Card key={mirror.slug} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={mirror.image} 
                      alt={mirror.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{mirror.title}</CardTitle>
                    <CardDescription>{mirror.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-4">
                      {mirror.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="mr-2 text-accent">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link to={`/products/mirror-glass/${mirror.slug}`}>
                      <Button variant="default" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-background rounded-lg p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-foreground mb-6">Custom Mirror Manufacturing</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Capabilities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Custom sizes up to 3300mm x 2440mm</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Various thickness options (3mm-8mm)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Edge polishing and beveling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Shape cutting and drilling</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Safety backing options</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Applications</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Bathroom and vanity mirrors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Wall mirrors and decorative pieces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Gym and dance studio mirrors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Retail and commercial displays</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Architectural feature mirrors</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 text-center">
                <QuoteModal 
                  trigger={
                    <Button size="lg">Request Custom Quote</Button>
                  }
                  productName="Custom Mirror Solutions"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mirrors;
