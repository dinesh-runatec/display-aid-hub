import { Smartphone, MapPin, Phone, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary rounded-lg">
                <Smartphone className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">{t('footer.displayRepair')}</span>
            </div>
            <p className="opacity-80 mb-4 text-sm">
              {t('footer.localExpert')}
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 opacity-90">
                <MapPin className="w-4 h-4" />
                <span>{t('footer.coimbatore')}</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <Phone className="w-4 h-4" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center gap-2 opacity-90">
                <Mail className="w-4 h-4" />
                <span>info@displayrepairpro.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><a href="#services" className="hover:opacity-100 transition-opacity">{t('footer.services')}</a></li>
              <li><a href="#pricing" className="hover:opacity-100 transition-opacity">{t('footer.pricing')}</a></li>
              <li><a href="#order" className="hover:opacity-100 transition-opacity">{t('footer.contact')}</a></li>
              <li><a href="#about" className="hover:opacity-100 transition-opacity">{t('footer.about')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4">{t('footer.whyChoose')}</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li>✓ {t('footer.doorstep')}</li>
              <li>✓ {t('footer.warranty')}</li>
              <li>✓ {t('footer.freeGifts')}</li>
              <li>✓ {t('footer.localSupport')}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-background/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-80">
            <p>
              © {new Date().getFullYear()} Display Repair Pro. {t('footer.rights')}.
            </p>
            <p className="flex items-center gap-2">
              <Heart className="w-4 h-4 fill-current" />
              {t('footer.madeWithLove')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
