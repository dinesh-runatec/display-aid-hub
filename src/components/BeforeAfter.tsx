import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import beforeSamsung from "@/assets/before-repair.jpg";
import afterSamsung from "@/assets/after-repair.jpg";
import beforeXiaomi from "@/assets/before-xiaomi.jpg";
import afterXiaomi from "@/assets/after-xiaomi.jpg";
import beforeOppo from "@/assets/before-oppo.jpg";
import afterOppo from "@/assets/after-oppo.jpg";
import { ArrowRight, ChevronLeft, ChevronRight, CheckCircle2, Shield, Clock, Award, Star } from "lucide-react";
import { useState } from "react";

const repairs = [
  { 
    brand: "Samsung", 
    before: beforeSamsung, 
    after: afterSamsung,
    model: "Galaxy A50"
  },
  { 
    brand: "Xiaomi", 
    before: beforeXiaomi, 
    after: afterXiaomi,
    model: "Redmi Note 10"
  },
  { 
    brand: "Oppo", 
    before: beforeOppo, 
    after: afterOppo,
    model: "A74"
  },
];

const BeforeAfter = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % repairs.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + repairs.length) % repairs.length);
  };

  const currentRepair = repairs[current];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 sm:px-4 py-2 rounded-full mb-4">
            <Star className="w-4 h-4 text-primary fill-primary" />
            <span className="text-xs sm:text-sm font-semibold text-primary">5000+ SUCCESSFUL REPAIRS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            From Cracked to Perfect in 30 Minutes
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Real repairs from real customers in Coimbatore. Your device deserves the best!
          </p>
          
          {/* Social Proof Stats */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="text-xs sm:text-sm font-bold">4.9/5 Rating</span>
            </div>
            <div className="text-xs sm:text-sm font-bold text-primary">
              💯 100% Success Rate
            </div>
            <div className="text-xs sm:text-sm font-bold text-secondary">
              ⚡ Same Day Service
            </div>
          </div>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Brand Indicator */}
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              {currentRepair.brand} {currentRepair.model}
            </h3>
            <div className="flex justify-center gap-2">
              {repairs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === current ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Before Card */}
            <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-0 relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-destructive text-destructive-foreground px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                    BEFORE
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 z-10 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <span className="text-white text-xs font-medium">Cracked Display</span>
                </div>
                <img
                  src={currentRepair.before}
                  alt={`Damaged ${currentRepair.brand} ${currentRepair.model} display before repair`}
                  className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </CardContent>
            </Card>

            {/* After Card */}
            <Card className="group overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 shadow-lg">
              <CardContent className="p-0 relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                    AFTER
                  </span>
                </div>
                <div className="absolute bottom-4 right-4 z-10 bg-primary/80 backdrop-blur-sm px-3 py-1 rounded-lg">
                  <span className="text-primary-foreground text-xs font-medium">Perfect Condition</span>
                </div>
                <img
                  src={currentRepair.after}
                  alt={`Perfectly repaired ${currentRepair.brand} ${currentRepair.model} display after professional repair`}
                  className="w-full h-[350px] md:h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </CardContent>
            </Card>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            <Button
              onClick={prevSlide}
              size="lg"
              variant="default"
              className="gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              Previous
            </Button>
            <Button
              onClick={nextSlide}
              size="lg"
              variant="default"
              className="gap-2"
            >
              Next
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Quality Points */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors">
              <CheckCircle2 className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm font-semibold">Original Parts</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors">
              <Shield className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm font-semibold">6 Month Warranty</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors">
              <Clock className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm font-semibold">Same Day Fix</p>
            </div>
            <div className="flex flex-col items-center text-center p-4 rounded-xl bg-card border hover:border-primary/50 transition-colors">
              <Award className="w-8 h-8 text-primary mb-2" />
              <p className="text-sm font-semibold">Expert Technicians</p>
            </div>
          </div>
        </div>

        {/* Customer Testimonials */}
        <div className="mt-12 bg-card border-2 border-primary/20 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-center mb-6">What Our Customers Say</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-muted/30 p-4 rounded-xl">
              <div className="flex mb-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm mb-2">"Amazing service! Fixed my iPhone 13 at home in just 30 minutes. Like new!"</p>
              <p className="text-xs font-semibold text-primary">- Rajesh, Coimbatore</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-xl">
              <div className="flex mb-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm mb-2">"Best price in town! Got 3 free gifts too. Highly recommended!"</p>
              <p className="text-xs font-semibold text-primary">- Priya, RS Puram</p>
            </div>
            <div className="bg-muted/30 p-4 rounded-xl sm:col-span-2 lg:col-span-1">
              <div className="flex mb-2">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm mb-2">"Tamil support made it easy. Professional technician. Worth every rupee!"</p>
              <p className="text-xs font-semibold text-primary">- Kumar, Gandhipuram</p>
            </div>
          </div>
        </div>

        {/* Urgency CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-2xl p-6 sm:p-10 border-2 border-primary/30">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-2">
            🔥 Limited Time Offer!
          </p>
          <p className="text-base sm:text-lg md:text-xl font-semibold mb-2">
            Book Today & Get 3 Premium Gifts Worth ₹999 FREE
          </p>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6">
            Join 5000+ happy customers in Coimbatore. Same-day doorstep service with 6-month warranty!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="hero" onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })} className="w-full sm:w-auto text-sm sm:text-base">
              📱 Fix My Display Now
            </Button>
            <p className="text-xs sm:text-sm font-medium text-muted-foreground">
              ⏰ Only 3 slots left today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
