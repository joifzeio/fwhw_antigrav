import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    title: "Rider Glass Expands Production Capacity",
    date: "November 15, 2025",
    category: "Company News",
    excerpt: "We are excited to announce the opening of our new state-of-the-art manufacturing facility, increasing our production capacity by 40%."
  },
  {
    title: "New Low-E Glass Series Launched",
    date: "October 28, 2025",
    category: "Product Launch",
    excerpt: "Introducing our latest energy-efficient Low-E glass with improved thermal performance and light transmission properties."
  },
  {
    title: "ISO 14001 Certification Achieved",
    date: "October 10, 2025",
    category: "Certifications",
    excerpt: "Rider Glass has successfully obtained ISO 14001 environmental management certification, demonstrating our commitment to sustainability."
  },
  {
    title: "Smart Mirror Technology Integration",
    date: "September 22, 2025",
    category: "Innovation",
    excerpt: "Partnering with leading tech companies to integrate smart display technology into our mirror glass products."
  },
  {
    title: "Participation in International Glass Expo",
    date: "September 5, 2025",
    category: "Events",
    excerpt: "Visit us at booth A-123 at the International Glass & Facade Exhibition to see our latest innovations and products."
  },
  {
    title: "New Quality Control Laboratory Opens",
    date: "August 18, 2025",
    category: "Infrastructure",
    excerpt: "Investment in advanced testing equipment ensures even higher quality standards for all our glass products."
  }
];

const News = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-foreground mb-4">News & Updates</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Stay informed about the latest developments, innovations, and announcements from Rider Glass.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {newsItems.map((item, index) => (
                <Card key={index} className="hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-semibold text-accent">{item.category}</span>
                      <span className="text-sm text-muted-foreground">{item.date}</span>
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline">Read More</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-background rounded-lg p-8 shadow-lg text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest news, product updates, and industry insights delivered to your inbox.
              </p>
              <div className="flex gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
