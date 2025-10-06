import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Shield, ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import beforeRepair from "@/assets/before-repair.jpg";
import afterRepair from "@/assets/after-repair.jpg";
import beforeOppo from "@/assets/before-oppo.jpg";
import afterOppo from "@/assets/after-oppo.jpg";
import beforeXiaomi from "@/assets/before-xiaomi.jpg";
import afterXiaomi from "@/assets/after-xiaomi.jpg";

const TransformationVideo = () => {
  const transformations = [
    {
      before: beforeRepair,
      after: afterRepair,
      title: "iPhone Screen Repair",
      description: "From shattered to pristine in just 30 minutes",
    },
    {
      before: beforeOppo,
      after: afterOppo,
      title: "Oppo Display Restoration",
      description: "Professional quality restoration guaranteed",
    },
    {
      before: beforeXiaomi,
      after: afterXiaomi,
      title: "Xiaomi Screen Replacement",
      description: "Like new condition with warranty protection",
    },
  ];

  const highlights = [
    { icon: Clock, text: "15-30 Minute Repairs", color: "text-primary" },
    { icon: Shield, text: "1 Year Warranty", color: "text-secondary" },
    { icon: CheckCircle2, text: "Original Quality Parts", color: "text-primary" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">REAL TRANSFORMATIONS</span>
          </div>
          <h2 className="font-bold mb-4">
            See The Transformation
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Witness how we transform broken screens into perfect displays. Real repairs, real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Carousel */}
          <Carousel
            opts={{ align: "start", loop: true }}
            plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
            className="w-full"
          >
            <CarouselContent>
              {transformations.map((item, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl">
                    <CardContent className="p-0">
                      {/* Before/After Comparison */}
                      <div className="relative">
                        <div className="grid grid-cols-2 gap-0">
                          {/* Before */}
                          <div className="relative aspect-square">
                            <img
                              src={item.before}
                              alt={`${item.title} - Before`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4">
                              <span className="bg-destructive/90 backdrop-blur-sm text-destructive-foreground px-3 py-1 rounded-full text-xs font-bold">
                                BEFORE
                              </span>
                            </div>
                          </div>
                          {/* After */}
                          <div className="relative aspect-square">
                            <img
                              src={item.after}
                              alt={`${item.title} - After`}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 right-4">
                              <span className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-3 py-1 rounded-full text-xs font-bold">
                                AFTER
                              </span>
                            </div>
                          </div>
                        </div>
                        {/* Center Divider */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-1 bg-gradient-to-b from-destructive via-background to-primary" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background border-4 border-primary rounded-full p-2 shadow-lg">
                          <ArrowRight className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      
                      {/* Info Bar */}
                      <div className="p-4 bg-card">
                        <h4 className="font-semibold text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Professional Repair Process
            </h3>
            
            {highlights.map((highlight, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-primary hover:shadow-lg transition-all duration-300 hover:translate-x-2"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10 flex-shrink-0">
                    <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">{highlight.text}</h4>
                    <p className="text-sm text-muted-foreground">
                      {index === 0 && "Fast turnaround time with expert technicians working on your device"}
                      {index === 1 && "All repairs backed by comprehensive warranty for your peace of mind"}
                      {index === 2 && "We use only genuine and high-quality replacement parts"}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* CTA */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20">
              <CardContent className="p-6 text-center">
                <p className="text-lg font-semibold mb-4">
                  Ready to restore your device?
                </p>
                <Button
                  size="lg"
                  className="w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Book Your Repair Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "10,000+", label: "Repairs Completed" },
            { number: "98%", label: "Success Rate" },
            { number: "4.9★", label: "Customer Rating" },
            { number: "30 Min", label: "Average Time" },
          ].map((stat, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationVideo;
