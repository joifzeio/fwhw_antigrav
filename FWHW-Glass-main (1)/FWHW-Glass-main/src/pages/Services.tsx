import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Custom Glass Processing",
    description: "Precision cutting, drilling, and edge finishing to your exact specifications",
    features: [
      "CNC cutting technology",
      "Edge polishing & beveling",
      "Hole drilling & notching",
      "Custom shapes & sizes"
    ]
  },
  {
    title: "Glass Tempering",
    description: "Heat treatment process for enhanced strength and safety",
    features: [
      "4-5x stronger than regular glass",
      "Safety breakage pattern",
      "Heat resistant properties",
      "Flat & curved tempering"
    ]
  },
  {
    title: "Glass Lamination",
    description: "Multi-layer glass bonding for safety and security applications",
    features: [
      "PVB & SGP interlayers",
      "Sound insulation",
      "UV protection",
      "Security enhancement"
    ]
  },
  {
    title: "Insulated Glass Units",
    description: "Energy-efficient double or triple glazed unit assembly",
    features: [
      "Thermal insulation",
      "Noise reduction",
      "Condensation prevention",
      "Various gas fills available"
    ]
  },
  {
    title: "Glass Coating & Printing",
    description: "Decorative and functional surface treatments",
    features: [
      "Ceramic frit printing",
      "Digital printing",
      "Back painting",
      "Anti-reflective coating"
    ]
  },
  {
    title: "Technical Consultation",
    description: "Expert guidance for glass selection and application",
    features: [
      "Product recommendations",
      "Technical specifications",
      "Project planning support",
      "Compliance guidance"
    ]
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-4">Our Services</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive glass processing and fabrication services to bring your vision to life. 
                From concept to completion, we provide end-to-end solutions for all your glass needs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <span className="mr-2 text-accent">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-background rounded-lg p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-6">Value-Added Services</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Design Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Work with our design team to develop custom glass solutions that meet your 
                    aesthetic and functional requirements. We provide CAD drawings, samples, and 
                    prototypes to ensure perfect results.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quality Assurance</h3>
                  <p className="text-muted-foreground mb-4">
                    Every product undergoes rigorous quality inspection before shipment. We maintain 
                    detailed quality records and provide full traceability for all orders.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Logistics & Delivery</h3>
                  <p className="text-muted-foreground mb-4">
                    Reliable worldwide shipping with specialized packaging to ensure safe delivery. 
                    We coordinate transportation and handle all export documentation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">After-Sales Support</h3>
                  <p className="text-muted-foreground mb-4">
                    Our commitment continues after delivery. We provide technical support, 
                    installation guidance, and prompt response to any concerns.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact our team to discuss your requirements and discover how our services 
                can help you achieve outstanding results.
              </p>
              <div className="flex gap-4 justify-center">
                <a href="/#contact">
                  <Button size="lg">Contact Our Team</Button>
                </a>
                <Link to="/products">
                  <Button size="lg" variant="outline">View Products</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
