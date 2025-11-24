import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "ISO 9001:2015",
      category: "Quality Management System",
      description: "International standard for quality management systems, ensuring consistent quality in products and services.",
      issuedBy: "International Organization for Standardization",
    },
    {
      title: "CE Certification",
      category: "European Conformity",
      description: "Certification indicating conformity with health, safety, and environmental protection standards for products sold within the European Economic Area.",
      issuedBy: "European Union",
    },
    {
      title: "SGCC Certification",
      category: "Safety Glass Certification Council",
      description: "Certification for tempered and laminated glass products meeting safety standards for architectural applications.",
      issuedBy: "Safety Glass Certification Council",
    },
    {
      title: "ISO 14001:2015",
      category: "Environmental Management System",
      description: "International standard for environmental management systems, demonstrating commitment to sustainable practices.",
      issuedBy: "International Organization for Standardization",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-foreground mb-6">Our Certifications</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                FWHW Glass Technology maintains rigorous quality and safety standards, 
                validated by internationally recognized certifications.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {certifications.map((cert, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <CheckCircle2 className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                        <div>
                          <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                          <p className="text-sm text-accent font-semibold">{cert.category}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3">{cert.description}</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">Issued by:</span> {cert.issuedBy}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-secondary/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Commitment to Excellence</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our certifications represent more than compliance—they embody our dedication to 
                  manufacturing excellence, environmental responsibility, and customer satisfaction. 
                  Each certification is maintained through continuous monitoring, regular audits, 
                  and ongoing staff training.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  By adhering to these international standards, FWHW Glass Technology ensures that 
                  every product meets the highest quality and safety requirements, giving our customers 
                  confidence in their investment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;
