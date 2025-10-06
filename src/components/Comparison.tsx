import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const comparisonData = {
  others: [
    { feature: "Display Replacement", included: true },
    { feature: "Warranty", included: false },
    { feature: "Tempered Glass", included: false },
    { feature: "Data Cable", included: false },
    { feature: "Mobile Stand", included: false },
    { feature: "Quality Guarantee", included: false },
  ],
  us: [
    { feature: "Display Replacement", included: true },
    { feature: "6 Months Warranty (Premium)", included: true },
    { feature: "Free Tempered Glass", included: true },
    { feature: "Free Data Cable", included: true },
    { feature: "Free Mobile Stand", included: true },
    { feature: "100% Quality Guarantee", included: true },
  ],
};

const Comparison = () => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Check className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">UNBEATABLE VALUE</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Others Charge More, We Give More
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Same price, but only we give you the complete package. See the difference yourself!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Others */}
          <Card className="relative border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Other Services
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {comparisonData.others.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-muted/30"
                >
                  {item.included ? (
                    <Check className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  ) : (
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                  )}
                  <span className={item.included ? "" : "text-muted-foreground line-through"}>
                    {item.feature}
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Us */}
          <Card
            className="relative border-2 border-primary shadow-[var(--shadow-lg)] pt-8 sm:pt-6"
            style={{
              background: "var(--gradient-card)",
            }}
          >
            <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 z-10">
              <span className="bg-secondary text-secondary-foreground px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg whitespace-nowrap">
                ⭐ BEST VALUE
              </span>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl text-center text-primary">
                Our Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {comparisonData.us.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{item.feature}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
