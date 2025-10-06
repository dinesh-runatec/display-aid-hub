import { Button } from "@/components/ui/button";
import { Smartphone, Sparkles, MapPin, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[650px] flex items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "var(--gradient-hero)",
        }}
      />
      
      <div className="container mx-auto text-center relative z-10 max-w-5xl">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative inline-flex items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary shadow-[var(--shadow-glow)] border border-primary/20">
            <Smartphone className="w-12 h-12 md:w-16 md:h-16 text-primary-foreground" />
          </div>
        </div>
        
        {/* Badges Row */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 px-2">
          <span className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-md whitespace-nowrap">
            ✨ {t('hero.badge1').replace('✨ ', '').replace(' ✨', '')} ✨
          </span>
          <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-xs md:text-sm font-bold shadow-md whitespace-nowrap flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            {t('hero.coimbatore').replace('📍 ', '')}
          </span>
        </div>
        
        {/* Main Heading */}
        <div className="mb-6 space-y-2">
          <h1 className="font-bold mb-4 leading-tight text-3xl md:text-5xl lg:text-6xl px-4">
            {t('hero.title1')}
          </h1>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-primary/10 border-2 border-primary/30">
            <Shield className="w-6 h-6 text-primary" />
            <span className="text-xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t('hero.title2')}
            </span>
          </div>
        </div>
        
        {/* Subtitle */}
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed px-4">
          {t('hero.subtitle')}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 px-4">
          <Button 
            variant="hero" 
            size="lg" 
            className="w-full sm:w-auto min-w-[200px]"
            onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t('hero.orderNow')}
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
            onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
          >
            {t('hero.viewPricing')}
          </Button>
        </div>
        
        {/* Features Row */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm md:text-base px-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Sparkles className="w-5 h-5 text-secondary" />
            <span className="font-medium whitespace-nowrap">{t('hero.freeGifts')}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-medium whitespace-nowrap">{t('hero.localSupport')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
