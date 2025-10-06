import { Smartphone, MapPin, Phone, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-b from-foreground to-foreground/95 text-background py-16 px-4 border-t-4 border-primary">
      <div className="container mx-auto max-w-6xl">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary rounded-lg shadow-lg">
                <Smartphone className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl">{t('footer.displayRepair')}</span>
            </div>
            <p className="opacity-90 mb-6 text-sm leading-relaxed">
              {t('footer.localExpert')}
            </p>
            <div className="space-y-3 text-sm">
              <a href="#location" className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-all hover:translate-x-1 group">
                <div className="p-2 bg-background/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{t('footer.coimbatore')}</span>
              </a>
              <a href="tel:+911234567890" className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-all hover:translate-x-1 group">
                <div className="p-2 bg-background/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 1234567890</span>
              </a>
              <a href="mailto:info@displayrepairpro.com" className="flex items-center gap-3 opacity-90 hover:opacity-100 transition-all hover:translate-x-1 group">
                <div className="p-2 bg-background/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>info@displayrepairpro.com</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded"></div>
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li>
                <a href="#services" className="hover:opacity-100 hover:translate-x-1 inline-block transition-all hover:text-primary">
                  {t('footer.services')}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:opacity-100 hover:translate-x-1 inline-block transition-all hover:text-primary">
                  {t('footer.pricing')}
                </a>
              </li>
              <li>
                <a href="#order" className="hover:opacity-100 hover:translate-x-1 inline-block transition-all hover:text-primary">
                  {t('footer.contact')}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:opacity-100 hover:translate-x-1 inline-block transition-all hover:text-primary">
                  {t('footer.about')}
                </a>
              </li>
            </ul>
          </div>
          
          {/* Why Choose Us */}
          <div>
            <h3 className="font-bold mb-4 text-lg flex items-center gap-2">
              <div className="w-1 h-6 bg-primary rounded"></div>
              {t('footer.whyChoose')}
            </h3>
            <ul className="space-y-3 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>{t('footer.doorstep')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>{t('footer.warranty')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>{t('footer.freeGifts')}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold mt-0.5">✓</span>
                <span>{t('footer.localSupport')}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Business Hours */}
        <div className="mb-8 p-6 bg-background/10 rounded-lg border border-background/20">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Business Hours</h4>
              <div className="space-y-2 text-sm opacity-90">
                <div className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span className="font-semibold">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">10:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Emergency Service</h4>
              <p className="text-sm opacity-90">
                Need urgent repairs? Call us anytime for emergency service availability and same-day repairs.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>
              © {new Date().getFullYear()} Display Repair Pro. {t('footer.rights')}.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
              <p className="flex items-center gap-2">
                <Heart className="w-4 h-4 fill-primary text-primary animate-pulse" />
                {t('footer.madeWithLove')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
