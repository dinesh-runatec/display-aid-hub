import { Card, CardContent } from "@/components/ui/card";
import { Gift, Shield, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Gift,
    title: "Tempered Glass",
    description: "Premium quality screen protector",
  },
  {
    icon: Smartphone,
    title: "Data Cable",
    description: "High-speed charging cable",
  },
  {
    icon: Shield,
    title: "Mobile Stand",
    description: "Convenient phone holder",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold animate-pulse">
              🎁 FREE WITH EVERY REPAIR - WORTH ₹999!
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get More Value Than Anyone Else
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Why pay the same price elsewhere when you can get premium accessories FREE with us?
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="text-center border-2 hover:border-primary transition-all duration-300 hover:shadow-[var(--shadow-lg)]"
                style={{
                  background: "var(--gradient-card)",
                }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-4 rounded-2xl bg-secondary/10">
                      <Icon className="w-10 h-10 text-secondary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
