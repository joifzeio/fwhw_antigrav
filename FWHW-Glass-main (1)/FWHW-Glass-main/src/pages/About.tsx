import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import fwhwFacilityImage from "@/assets/fwhw-facility.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl font-bold text-foreground mb-6">About FWHW Glass Technology</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                FW HW Glass Technology PLC is a premier Ethiopian-owned manufacturer and importer of architectural 
                and safety glass solutions, committed to delivering excellence through innovation, quality, and service.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Founded in Addis Ababa as the manufacturing arm of FW HW Importers PLC, FWHW Glass Technology 
                  has grown from addressing local demand into a benchmark manufacturer in Ethiopia's glass industry. 
                  Our journey is built on a foundation of quality craftsmanship, innovative solutions, and unwavering 
                  commitment to customer satisfaction.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With over two decades of experience, we integrate global expertise with local capability to produce 
                  tempered, laminated, and insulated glass that meets international standards. The company's products 
                  are widely used in construction, real estate, automotive, furniture, and industrial applications, 
                  supporting Ethiopia's vision for industrialization and sustainable urban growth.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={fwhwFacilityImage} 
                  alt="FWHW Glass Technology Facility" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">23+</div>
                  <p className="text-muted-foreground">Years Experience</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">35+</div>
                  <p className="text-muted-foreground">Skilled Employees</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <p className="text-muted-foreground">Local Manufacturing</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-background rounded-lg p-8 shadow-lg mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Our Core Values</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Quality</h3>
                  <p className="text-muted-foreground">
                    Uncompromising standards in every product we manufacture
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Innovation</h3>
                  <p className="text-muted-foreground">
                    Continuous improvement and cutting-edge technology
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Service</h3>
                  <p className="text-muted-foreground">
                    Customer-focused approach in everything we do
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-foreground mb-3">Sustainability</h3>
                  <p className="text-muted-foreground">
                    Environmentally responsible manufacturing practices
                  </p>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-6">Manufacturing Excellence</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our state-of-the-art manufacturing facilities are equipped with advanced technology 
                and operated by skilled professionals. We maintain strict quality control throughout 
                the production process, ensuring every piece of glass meets international standards.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Capabilities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Float glass production lines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Tempering furnaces</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Lamination equipment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Insulated glass lines</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">CNC cutting and processing</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Certifications</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">ISO 9001 Quality Management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">CE Certification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">SGCC Certified</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      <span className="text-muted-foreground">Environmental Management ISO 14001</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-secondary/30 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">Join Our Success Story</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Partner with FWHW Glass Technology for your next project and experience the difference 
                that quality, expertise, and dedication can make.
              </p>
              <Link to="/#contact">
                <Button size="lg">Get in Touch</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
