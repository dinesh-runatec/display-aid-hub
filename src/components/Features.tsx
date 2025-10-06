import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Award, ThumbsUp, Wrench, DollarSign } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Warranty Protection",
    description: "Up to 6 months warranty on premium repairs",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Same-day service for most repairs",
  },
  {
    icon: Award,
    title: "Certified Technicians",
    description: "Experienced professionals you can trust",
  },
  {
    icon: ThumbsUp,
    title: "Quality Guarantee",
    description: "100% satisfaction or money back",
  },
  {
    icon: Wrench,
    title: "Genuine Parts",
    description: "High-quality LCD and LED displays",
  },
  {
    icon: DollarSign,
    title: "Best Prices",
    description: "Competitive rates with premium value",
  },
];

const Features = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">TRUSTED BY 5000+ CUSTOMERS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Why Coimbatore Trusts Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for a hassle-free repair experience - all at your doorstep!
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="border hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-lg)]"
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
