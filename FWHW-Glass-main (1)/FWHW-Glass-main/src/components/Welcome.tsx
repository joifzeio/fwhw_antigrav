import { Card } from "@/components/ui/card";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { GlassModel3D } from "./GlassModel3D";

export const Welcome = () => {
  const { count: yearsCount, ref: yearsRef } = useCountAnimation(23);
  const { count: employeesCount, ref: employeesRef } = useCountAnimation(35);
  const { count: localCount, ref: localRef } = useCountAnimation(100);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Welcome to FWHW Glass Technology
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              FW HW Glass Technology PLC is a premier Ethiopian-owned manufacturer and importer of architectural 
              and safety glass solutions. Based in Addis Ababa, the company was established as the manufacturing 
              arm of FW HW Importers PLC to address the country's growing demand for high-quality, locally produced glass products.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              With over two decades of experience in glass technology, the company integrates global expertise 
              with local capability to produce tempered, laminated, and insulated glass that meets international standards.
            </p>
            <p className="text-lg text-muted-foreground">
              By combining advanced technology, strategic sourcing from China, Dubai, Turkey, and Egypt, and a 
              highly skilled local workforce, FW HW Glass Technology PLC is setting new benchmarks in Ethiopia's 
              glass manufacturing industry.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl bg-gradient-to-br from-secondary/20 to-background">
            <GlassModel3D />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card ref={yearsRef} className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-accent mb-2">{yearsCount}+</div>
            <div className="text-sm text-muted-foreground">Years of Experience</div>
          </Card>
          <Card ref={employeesRef} className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-accent mb-2">{employeesCount}+</div>
            <div className="text-sm text-muted-foreground">Skilled Employees</div>
          </Card>
          <Card ref={localRef} className="p-6 text-center hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-accent mb-2">{localCount}%</div>
            <div className="text-sm text-muted-foreground">Local Manufacturing</div>
          </Card>
        </div>
      </div>
    </section>
  );
};
