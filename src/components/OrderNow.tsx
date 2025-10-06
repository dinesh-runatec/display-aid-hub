import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, MessageCircle, Clock, MapPin, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const OrderNow = () => {
  const { t } = useLanguage();
  const phoneNumber = "1234567890"; // Replace with actual number
  const whatsappNumber = "1234567890"; // Replace with actual number
  
  const handlePhoneCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  
  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hi! I would like to get my mobile display repaired. Can you help me with the pricing and process?");
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="order" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t('order.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('order.subtitle')}
          </p>
        </div>
        
        <Card className="shadow-[var(--shadow-lg)]" style={{ background: "var(--gradient-card)" }}>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{t('order.getStarted')}</CardTitle>
            <CardDescription className="text-base">
              {t('order.contactUs')}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <Button
                variant="hero"
                size="lg"
                className="h-auto py-6 flex-col gap-3"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-8 h-8" />
                <div>
                  <div className="text-lg font-bold">{t('order.whatsapp')}</div>
                  <div className="text-xs opacity-90">{t('order.instantMsg')}</div>
                </div>
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                className="h-auto py-6 flex-col gap-3"
                onClick={handlePhoneCall}
              >
                <Phone className="w-8 h-8" />
                <div>
                  <div className="text-lg font-bold">{t('order.callNow')}</div>
                  <div className="text-xs opacity-90">{t('order.directCall')}</div>
                </div>
              </Button>
            </div>
            
            <div className="border-t pt-6 space-y-4">
              <h3 className="font-semibold text-lg text-center mb-4">{t('order.whyDirect')}</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">{t('order.instantResponse')}</p>
                    <p className="text-sm text-muted-foreground">{t('order.instantDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold">{t('order.locationShare')}</p>
                    <p className="text-sm text-muted-foreground">{t('order.locationDesc')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-lg bg-background/50 border">
                  <Heart className="w-5 h-5 text-accent flex-shrink-0 mt-1 fill-current" />
                  <div>
                    <p className="font-semibold">{t('order.localService')}</p>
                    <p className="text-sm text-muted-foreground">{t('order.localDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              <p>{t('order.availability')}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OrderNow;
