import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { QuoteModal } from "@/components/QuoteModal";
import temperedGlassImage from "@/assets/product-tempered-glass.jpg";
import laminatedGlassImage from "@/assets/product-laminated-glass.jpg";
import insulatedGlassImage from "@/assets/product-insulated-glass.jpg";
import texturedGlassImage from "@/assets/product-textured-glass.jpg";
import mirrorGlassImage from "@/assets/product-mirror-glass.jpg";
import glassProductsImage from "@/assets/glass-products.jpg";

const ProductDetail = () => {
  const { category, product } = useParams();

  const productName = product?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  const categoryName = category?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  // Map product slugs to images
  const getProductImage = () => {
    if (product?.includes('tempered')) return temperedGlassImage;
    if (product?.includes('laminated')) return laminatedGlassImage;
    if (product?.includes('insulated') || product?.includes('glazed')) return insulatedGlassImage;
    if (product?.includes('textured') || product?.includes('patterned') || product?.includes('wired')) return texturedGlassImage;
    if (product?.includes('mirror')) return mirrorGlassImage;
    return glassProductsImage;
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-12 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-sm text-muted-foreground mb-4">
              <Link to="/products" className="hover:text-accent">Products</Link>
              <span className="mx-2">/</span>
              <Link to={`/products/${category}`} className="hover:text-accent">{categoryName}</Link>
              <span className="mx-2">/</span>
              <span>{productName}</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-6">{productName}</h1>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="rounded-lg overflow-hidden shadow-xl animate-fade-in">
                <img 
                  src={getProductImage()} 
                  alt={productName}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Product Overview</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {productName} is a premium quality glass product manufactured to the highest standards. 
                  Our advanced production facilities and strict quality control ensure consistent performance 
                  and reliability in all applications.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span className="text-muted-foreground">Superior quality and consistency</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span className="text-muted-foreground">Meets international standards</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span className="text-muted-foreground">Custom sizes and specifications available</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent font-bold mr-3">✓</span>
                    <span className="text-muted-foreground">Fast delivery and expert support</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <QuoteModal 
                    trigger={
                      <Button size="lg">Request Quote</Button>
                    }
                    productName={`${category} - ${product}`}
                  />
                  <a href="/#contact">
                    <Button size="lg" variant="outline">Contact Our Team</Button>
                  </a>
                </div>
              </div>
            </div>

            <Tabs defaultValue="specifications" className="mb-16">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="applications">Applications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="standards">Standards</TabsTrigger>
              </TabsList>
              
              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Technical Specifications</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-semibold text-foreground">Thickness Range:</p>
                        <p className="text-muted-foreground">3mm - 19mm</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Maximum Size:</p>
                        <p className="text-muted-foreground">3300mm x 2440mm</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Color Options:</p>
                        <p className="text-muted-foreground">Clear, Bronze, Grey, Green, Blue</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Edge Processing:</p>
                        <p className="text-muted-foreground">Polished, Beveled, Chamfered</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="applications" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Common Applications</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-muted-foreground">Architectural facades and curtain walls</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-muted-foreground">Interior partitions and doors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-muted-foreground">Furniture and shelving</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-muted-foreground">Shower enclosures and bathroom applications</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-muted-foreground">Balustrades and railings</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Key Features & Benefits</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Durability</h4>
                        <p className="text-muted-foreground">Long-lasting performance with resistance to weathering and aging</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Optical Clarity</h4>
                        <p className="text-muted-foreground">Excellent light transmission and minimal distortion</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Versatility</h4>
                        <p className="text-muted-foreground">Suitable for various processing and applications</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Safety</h4>
                        <p className="text-muted-foreground">Meets safety standards when properly processed</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="standards" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Quality Standards & Certifications</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-muted-foreground">ASTM C1036 - Standard Specification for Flat Glass</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-muted-foreground">EN 572 - Glass in building - Basic soda lime silicate glass products</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-muted-foreground">ISO 9001 - Quality Management System Certified</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-accent mr-2">•</span>
                        <span className="text-muted-foreground">CE Marked for European markets</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="bg-secondary/30 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Need More Information?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our technical team is ready to help you choose the right glass solution for your project.
                Contact us for custom specifications, samples, or technical support.
              </p>
              <a href="/#contact">
                <Button size="lg">Contact Our Team</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
