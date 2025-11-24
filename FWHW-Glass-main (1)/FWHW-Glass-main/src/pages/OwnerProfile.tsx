import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import fekadOwnerImage from "@/assets/fekadu-owner.jpg";
import { Building2, Users, Calendar, Mail, Phone, MapPin } from "lucide-react";

export default function OwnerProfile() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Ato Fekadu Woldegebral Kidane
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Founder & General Manager, FW HW Glass Technology PLC
              </p>
              <div className="flex justify-center">
                <img 
                  src={fekadOwnerImage} 
                  alt="Ato Fekadu Woldegebral Kidane" 
                  className="w-64 h-64 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Background Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl">Personal and Professional Background</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground space-y-4">
                  <p>
                    Ato Fekadu Woldegebral is an accomplished Ethiopian entrepreneur with over 23 years of experience spanning glass technology, construction materials, manufacturing, pharmaceuticals, and international trade.
                  </p>
                  <p>
                    He has successfully established and managed multiple companies in Ethiopia, contributing significantly to job creation, industrial innovation, and economic growth. His leadership is characterized by integrity, foresight, and a hands-on approach to business transformation.
                  </p>
                </CardContent>
              </Card>

              <h2 className="text-3xl font-bold text-foreground mb-8">Companies Owned and Managed</h2>

              {/* Fekadu General Glass Work */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-primary" />
                    2.1. Fekadu General Glass Work
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Established:</span>
                        <span className="font-medium">23/11/2004</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Registration No.:</span>
                        <span className="font-medium">0002930648</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Business License:</span>
                        <span className="font-medium">14/666/73152/2004</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a href="mailto:fekaduglass@gmail.com" className="text-primary hover:underline">
                          fekaduglass@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>+251-91-122-6756</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>+251-91-122-6758</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Addis Ababa, Ethiopia</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Initially focused on importing glass, later expanded into aluminum and construction materials.
                  </p>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Employees:</span>
                    <span className="font-medium">10</span>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Shareholders:</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>Fekadu Woldegebral Kidane (General Manager)</span>
                        <span className="font-medium">ETB 1,106,000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FW HW Glass Technology */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-primary" />
                    2.2. FW HW Glass Technology PLC
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Established:</span>
                        <span className="font-medium">18/06/2017</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Renewal Date:</span>
                        <span className="font-medium">24/11/2015</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Registration No.:</span>
                        <span className="font-medium">0043112657</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Business License:</span>
                        <span className="font-medium">BL/AA/14/673/4544758/2015</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Employees:</span>
                        <span className="font-medium">35</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Originally founded as FW HW Importers PLC, now expanded into safety glass manufacturing, coffee exports, and car imports.
                  </p>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Shareholders:</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>Fekadu Woldegebral Kidane (General Manager)</span>
                        <span className="font-medium">ETB 17,847,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>W/ro Hadas Woldegebral (Sister)</span>
                        <span className="font-medium">ETB 175,000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bamu Trading & Manufacturing */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-primary" />
                    2.3. Bamu Trading & Manufacturing PLC
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Established:</span>
                        <span className="font-medium">01/02/2016</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Modification Date:</span>
                        <span className="font-medium">30/10/2017</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Registration No.:</span>
                        <span className="font-medium">AKK/AA/2/0015402/2015</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Business License:</span>
                        <span className="font-medium">BL/AA/14/673/4651662/2016</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a href="mailto:fekaduglass@gmail.com" className="text-primary hover:underline">
                          fekaduglass@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>+251-91-122-6756</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>+251-91-122-6758</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Addis Ababa, Ethiopia</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Engaged in furniture manufacturing, household and office accessories, and appliances.
                  </p>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Employees:</span>
                    <span className="font-medium">10</span>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Shareholders:</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>Fekadu Woldegebral Kidane (General Manager)</span>
                        <span className="font-medium">ETB 31,526,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dr. Haymanot Wassihun Abate (Spouse)</span>
                        <span className="font-medium">ETB 11,274,000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bamu Pharmaceuticals */}
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-primary" />
                    2.4. Bamu Pharmaceuticals PLC
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Established:</span>
                        <span className="font-medium">18/12/2015</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Renewal Date:</span>
                        <span className="font-medium">25/04/2017</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Registration No.:</span>
                        <span className="font-medium">AA/ADISM/2/0001945/2015</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">Business License:</span>
                        <span className="font-medium">MT/AA/14/673/4581021/2015</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <a href="mailto:fekaduglass@gmail.com" className="text-primary hover:underline">
                          fekaduglass@gmail.com
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>+251-91-122-6756</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>+251-91-122-6758</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>Addis Ababa, Ethiopia</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Provides pharmaceutical products and supports Ethiopia's growing healthcare needs.
                  </p>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Employees:</span>
                    <span className="font-medium">5</span>
                  </div>
                  <div className="bg-secondary/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Shareholders:</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between">
                        <span>Fekadu Woldegebral Kidane (General Manager)</span>
                        <span className="font-medium">ETB 11,641,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dr. Haymanot Wassihun Abate (Spouse)</span>
                        <span className="font-medium">ETB 4,165,000</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
