import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link, useParams } from "react-router-dom";

const productData: Record<string, any> = {
  "float-glass": {
    title: "Float Glass",
    description: "High-quality float glass manufactured using the float process, providing exceptional flatness and optical clarity.",
    products: [
      { name: "Clear Glass", slug: "clear-glass", desc: "Crystal clear glass with high light transmission" },
      { name: "Tinted Glass", slug: "tinted-glass", desc: "Solar control glass in various colors" },
      { name: "Low Iron Glass", slug: "low-iron-glass", desc: "Ultra-clear glass with minimal green tint" },
      { name: "Reflective Glass", slug: "reflective-glass", desc: "Coated glass for heat and glare control" },
      { name: "Low-E Glass", slug: "low-e-glass", desc: "Energy-efficient glass with special coating" },
      { name: "Ultra Thin Glass", slug: "ultra-thin-glass", desc: "Specialty thin glass for unique applications" }
    ]
  },
  "laminated-glass": {
    title: "Laminated Glass",
    description: "Safety glass consisting of two or more layers of glass bonded with PVB or SGP interlayer.",
    products: [
      { name: "Clear Laminated Glass", slug: "clear-laminated", desc: "Standard safety laminated glass" },
      { name: "Tinted Laminated Glass", slug: "tinted-laminated", desc: "Colored laminated glass for solar control" },
      { name: "Tempered Laminated Glass", slug: "tempered-laminated", desc: "Enhanced strength and safety" },
      { name: "SGP Laminated Glass", slug: "sgp-laminated", desc: "Superior strength with SGP interlayer" },
      { name: "Acoustic Laminated Glass", slug: "acoustic-laminated", desc: "Sound insulation laminated glass" },
      { name: "Curved Laminated Glass", slug: "curved-laminated", desc: "Custom curved laminated solutions" }
    ]
  },
  "tempered-glass": {
    title: "Tempered Glass",
    description: "Heat-treated glass that is 4-5 times stronger than regular glass, with safe breakage pattern.",
    products: [
      { name: "Clear Tempered Glass", slug: "clear-tempered", desc: "Standard tempered safety glass" },
      { name: "Tinted Tempered Glass", slug: "tinted-tempered", desc: "Colored tempered glass" },
      { name: "Curved Tempered Glass", slug: "curved-tempered", desc: "Bent tempered glass" },
      { name: "Shower Glass", slug: "shower-glass", desc: "Specialized for shower enclosures" },
      { name: "Heat Soaked Glass", slug: "heat-soaked", desc: "Reduced spontaneous breakage risk" },
      { name: "Semi-Tempered Glass", slug: "semi-tempered", desc: "Partially tempered for specific needs" }
    ]
  },
  "mirror-glass": {
    title: "Mirror Glass",
    description: "High-quality mirrors with various backing options for different applications.",
    products: [
      { name: "Aluminum Mirror", slug: "aluminum-mirror", desc: "Standard aluminum backed mirrors" },
      { name: "Silver Mirror", slug: "silver-mirror", desc: "Premium silver backed mirrors" },
      { name: "Copper & Lead Free Mirror", slug: "copper-lead-free", desc: "Environmentally friendly mirrors" },
      { name: "Safety Mirror", slug: "safety-mirror", desc: "Laminated safety mirrors" },
      { name: "Antique Mirror", slug: "antique-mirror", desc: "Aged effect decorative mirrors" },
      { name: "2 Way Mirror", slug: "two-way-mirror", desc: "One-way observation mirrors" },
      { name: "Smart Mirror", slug: "smart-mirror", desc: "Electronic display integrated mirrors" }
    ]
  },
  "textured-glass": {
    title: "Textured Glass",
    description: "Decorative glass with various patterns for privacy and aesthetic purposes.",
    products: [
      { name: "Patterned Glass", slug: "patterned-glass", desc: "Various decorative patterns" },
      { name: "Colored Patterned Glass", slug: "colored-patterned", desc: "Tinted pattern glass" },
      { name: "Low Iron Patterned Glass", slug: "low-iron-patterned", desc: "Ultra-clear patterned glass" },
      { name: "Wired Glass", slug: "wired-glass", desc: "Fire-rated wired glass" },
      { name: "Colored Wired Glass", slug: "colored-wired", desc: "Tinted wired glass" }
    ]
  },
  "insulated-glass": {
    title: "Insulated Glass",
    description: "Energy-efficient multi-pane glass units with sealed air or gas-filled spaces.",
    products: [
      { name: "Double Glazed Glass", slug: "double-glazed", desc: "Two-pane insulated units" },
      { name: "Triple Glazed Glass", slug: "triple-glazed", desc: "Three-pane maximum insulation" }
    ]
  },
  "decorative-glass": {
    title: "Decorative Glass",
    description: "Artistic and functional glass solutions for unique design requirements.",
    products: [
      { name: "Frosted Glass", slug: "frosted-glass", desc: "Sandblasted translucent glass" },
      { name: "Acid Etched Glass", slug: "acid-etched", desc: "Chemically etched glass" },
      { name: "Back Painted Glass", slug: "back-painted", desc: "Color coated glass panels" },
      { name: "Silk Screen Glass", slug: "silk-screen", desc: "Printed pattern glass" },
      { name: "Enameled Glass", slug: "enameled-glass", desc: "Ceramic frit coated glass" },
      { name: "Glue Chip Glass", slug: "glue-chip", desc: "Unique textured finish" },
      { name: "Stained Glass", slug: "stained-glass", desc: "Colored artistic glass" },
      { name: "U Channel Glass", slug: "u-channel", desc: "Structural channel glass" }
    ]
  },
  "glass-block": {
    title: "Glass Block",
    description: "Structural glass blocks for walls, partitions, and decorative applications.",
    products: [
      { name: "Standard Glass Block", slug: "standard-block", desc: "Clear standard blocks" },
      { name: "Colored Glass Block", slug: "colored-block", desc: "Tinted glass blocks" },
      { name: "Patterned Glass Block", slug: "patterned-block", desc: "Textured blocks" }
    ]
  }
};

const ProductCategory = () => {
  const { category } = useParams();
  const categoryData = category ? productData[category] : null;

  if (!categoryData) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">Category Not Found</h1>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <Link to="/products" className="text-accent hover:underline mb-4 inline-block">
              ← Back to All Products
            </Link>
            <h1 className="text-5xl font-bold text-foreground mb-4">{categoryData.title}</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              {categoryData.description}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryData.products.map((product: any) => (
                <Card key={product.slug} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link to={`/products/${category}/${product.slug}`}>
                      <Button variant="default" className="w-full">
                        View Details
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

export default ProductCategory;
