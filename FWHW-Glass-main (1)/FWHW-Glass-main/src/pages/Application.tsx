import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const applications = [
  {
    category: "Architectural Glass",
    slug: "architectural",
    description: "Premium glass solutions for modern architecture",
    types: [
      "Glass Partition",
      "Glass Staircase",
      "Glass Railings",
      "Glass Balustrade",
      "Pool Fence",
      "Frameless Glass Doors",
      "Shower Enclosures",
      "Curtain Wall Glass",
      "Glass Terrace",
      "Green House"
    ]
  },
  {
    category: "Furniture Glass",
    slug: "furniture",
    description: "Elegant glass components for furniture applications",
    types: [
      "Glass Table Top",
      "Glass Shelves",
      "Glass Splashbacks",
      "Cabinet Glass",
      "Display Cases"
    ]
  },
  {
    category: "Special Glass",
    slug: "special",
    description: "Specialized glass solutions for unique requirements",
    types: [
      "Glass Louvers",
      "Glass Padel Tennis Courts",
      "Glass Picture Frame",
      "Decorative Panels",
      "Custom Projects"
    ]
  }
];

const Application = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-4">Glass Applications</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Discover the versatility of glass across diverse applications. From architectural marvels 
                to functional furniture components, our glass solutions bring beauty and performance to 
                every project.
              </p>
            </div>

            <div className="space-y-12">
              {applications.map((app) => (
                <Card key={app.slug} className="overflow-hidden">
                  <CardHeader className="bg-secondary/20">
                    <CardTitle className="text-3xl">{app.category}</CardTitle>
                    <CardDescription className="text-base">{app.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {app.types.map((type, idx) => (
                        <div
                          key={idx}
                          className="border border-border rounded-lg p-4 hover:bg-secondary/20 transition-colors"
                        >
                          <p className="font-medium text-foreground">{type}</p>
                        </div>
                      ))}
                    </div>
                    <Link to={`/application/${app.slug}`}>
                      <Button variant="default">
                        View {app.category} Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-background rounded-lg p-8 shadow-lg text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Need Help Choosing the Right Solution?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our experienced team can help you select the perfect glass type and specification 
                for your specific application. Get expert advice tailored to your project requirements.
              </p>
              <a href="/#contact">
                <Button size="lg">Consult Our Experts</Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Application;
