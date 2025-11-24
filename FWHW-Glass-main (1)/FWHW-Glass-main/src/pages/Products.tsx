import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import glassProductsImage from "@/assets/glass-products.jpg";
import laminatedGlassImage from "@/assets/product-laminated-glass.jpg";
import temperedGlassImage from "@/assets/product-tempered-glass.jpg";
import mirrorGlassImage from "@/assets/product-mirror-glass.jpg";
import texturedGlassImage from "@/assets/product-textured-glass.jpg";
import insulatedGlassImage from "@/assets/product-insulated-glass.jpg";
import glassInteriorImage from "@/assets/glass-interior.jpg";

const productCategories = [
  {
    title: "Float Glass",
    slug: "float-glass",
    description: "High-quality clear and tinted float glass for various applications",
    subcategories: ["Clear Glass", "Tinted Glass", "Low Iron Glass", "Reflective Glass", "Low-E Glass", "Ultra Thin Glass"],
    image: glassProductsImage
  },
  {
    title: "Laminated Glass",
    slug: "laminated-glass",
    description: "Safety glass with PVB interlayer for enhanced security",
    subcategories: ["Clear Laminated", "Tinted Laminated", "Tempered Laminated", "SGP Laminated", "Acoustic Laminated", "Curved Laminated"],
    image: laminatedGlassImage
  },
  {
    title: "Tempered Glass",
    slug: "tempered-glass",
    description: "Heat-strengthened glass for superior strength and safety",
    subcategories: ["Clear Tempered", "Tinted Tempered", "Curved Tempered", "Shower Glass", "Heat Soaked", "Semi-Tempered"],
    image: temperedGlassImage
  },
  {
    title: "Mirror Glass",
    slug: "mirror-glass",
    description: "Premium quality mirrors for decorative and functional use",
    subcategories: ["Aluminum Mirror", "Silver Mirror", "Copper & Lead Free", "Safety Mirror", "Antique Mirror", "2 Way Mirror", "Smart Mirror"],
    image: mirrorGlassImage
  },
  {
    title: "Textured Glass",
    slug: "textured-glass",
    description: "Decorative patterned glass for privacy and aesthetics",
    subcategories: ["Patterned Glass", "Colored Patterned", "Low Iron Patterned", "Wired Glass", "Colored Wired"],
    image: texturedGlassImage
  },
  {
    title: "Insulated Glass",
    slug: "insulated-glass",
    description: "Energy-efficient double or triple glazed units",
    subcategories: ["Double Glazed", "Triple Glazed"],
    image: insulatedGlassImage
  },
  {
    title: "Decorative Glass",
    slug: "decorative-glass",
    description: "Artistic glass solutions for unique design requirements",
    subcategories: ["Frosted Glass", "Acid Etched", "Back Painted", "Silk Screen", "Enameled Glass", "Glue Chip", "Stained Glass", "U Channel"],
    image: glassInteriorImage
  },
  {
    title: "Glass Block",
    slug: "glass-block",
    description: "Structural glass blocks for walls and partitions",
    subcategories: ["Standard Block", "Colored Block", "Patterned Block"],
    image: glassProductsImage
  }
];

const Products = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-4">Our Products</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Comprehensive range of glass products to meet all your architectural and design needs. 
                Each category offers specialized solutions with various specifications and applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productCategories.map((category) => (
                <Card key={category.slug} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-muted-foreground mb-2">Available Types:</p>
                      <ul className="space-y-1">
                        {category.subcategories.slice(0, 3).map((sub, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <span className="mr-2 text-accent">•</span>
                            {sub}
                          </li>
                        ))}
                        {category.subcategories.length > 3 && (
                          <li className="text-sm text-muted-foreground italic">
                            +{category.subcategories.length - 3} more...
                          </li>
                        )}
                      </ul>
                    </div>
                    <Link to={`/products/${category.slug}`}>
                      <Button variant="default" className="w-full">
                        View All Types
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
