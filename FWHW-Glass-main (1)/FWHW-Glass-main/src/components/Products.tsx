import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import glassProductsImage from "@/assets/glass-products.jpg";
import temperedGlassImage from "@/assets/product-tempered-glass.jpg";
import laminatedGlassImage from "@/assets/product-laminated-glass.jpg";
import insulatedGlassImage from "@/assets/product-insulated-glass.jpg";
import texturedGlassImage from "@/assets/product-textured-glass.jpg";
import mirrorGlassImage from "@/assets/product-mirror-glass.jpg";
import { Link } from "react-router-dom";
import { QuoteModal } from "./QuoteModal";

const products = [
  {
    title: "Float Glass",
    slug: "float-glass",
    description: "High-quality clear and tinted float glass for various applications",
    features: ["2mm-19mm thickness", "Clear & Tinted options", "High transparency"],
    image: glassProductsImage,
  },
  {
    title: "Laminated Glass",
    slug: "laminated-glass",
    description: "Safety glass with PVB interlayer for enhanced security",
    features: ["Impact resistant", "UV protection", "Sound insulation"],
    image: laminatedGlassImage,
  },
  {
    title: "Tempered Glass",
    slug: "tempered-glass",
    description: "Heat-strengthened glass for superior strength and safety",
    features: ["5x stronger", "Safety breakage", "Heat resistant"],
    image: temperedGlassImage,
  },
  {
    title: "Mirror Glass",
    slug: "mirror-glass",
    description: "Premium quality mirrors for decorative and functional use",
    features: ["Silver & Aluminum", "Various colors", "Custom shapes"],
    image: mirrorGlassImage,
  },
  {
    title: "Textured Glass",
    slug: "textured-glass",
    description: "Decorative patterned glass for privacy and aesthetics",
    features: ["Multiple patterns", "Privacy control", "Light diffusion"],
    image: texturedGlassImage,
  },
  {
    title: "Insulated Glass",
    slug: "insulated-glass",
    description: "Energy-efficient double or triple glazed units",
    features: ["Energy saving", "Noise reduction", "Condensation free"],
    image: insulatedGlassImage,
  },
];

export const Products = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive range of glass products to meet all your architectural and design needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2 text-accent">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={`/products/${product.slug}`}>
                  <Button variant="outline" className="w-full mt-4">
                    Learn More
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="relative h-[300px] rounded-lg overflow-hidden">
          <img 
            src={glassProductsImage} 
            alt="Glass Products" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
            <div className="container mx-auto px-4">
              <h3 className="text-3xl font-bold text-white mb-4">
                Custom Glass Solutions
              </h3>
              <p className="text-lg text-white/90 mb-6 max-w-xl">
                Need something specific? We offer custom glass processing and fabrication services
              </p>
              <QuoteModal 
                trigger={
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Request Custom Quote
                  </Button>
                }
                productName="Custom Glass Solutions"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
