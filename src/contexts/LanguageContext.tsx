import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ta';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

const translations: Record<string, Record<Language, string>> = {
  // Hero Section
  'hero.badge1': { en: '✨ CHEAPEST & BEST IN TOWN ✨', ta: '✨ நகரத்தில் மலிவான மற்றும் சிறந்த ✨' },
  'hero.badge2': { en: '🏠 DOORSTEP REPAIR SERVICE', ta: '🏠 வீட்டு வாசல் பழுது சேவை' },
  'hero.coimbatore': { en: '📍 COIMBATORE BASED', ta: '📍 கோவை அடிப்படையிலானது' },
  'hero.title1': { en: 'Expert Mobile Display Repair', ta: 'நிபுணர் மொபைல் திரை பழுது' },
  'hero.title2': { en: 'At Your Doorstep', ta: 'உங்கள் வீட்டு வாசலில்' },
  'hero.subtitle': { en: 'Professional display replacement for Samsung, Xiaomi, Oppo, Vivo & Realme with warranty and 3 free gifts', ta: 'சாம்சங், ஷியோமி, ஓப்போ, விவோ மற்றும் ரியல்மி திரை மாற்றம் உத்தரவாதத்துடன் மற்றும் 3 இலவச பரிசுகள்' },
  'hero.orderNow': { en: 'Order Now', ta: 'இப்போதே ஆர்டர் செய்யவும்' },
  'hero.viewPricing': { en: 'View Pricing', ta: 'விலையைப் பார்க்க' },
  'hero.freeGifts': { en: '3 Free Gifts with Every Repair', ta: 'ஒவ்வொரு பழுதுக்கும் 3 இலவச பரிசுகள்' },
  'hero.localSupport': { en: 'Your Local Coimbatore Expert', ta: 'உங்கள் உள்ளூர் கோவை நிபுணர்' },
  
  // Order Section
  'order.title': { en: 'Order Your Repair Now', ta: 'உங்கள் பழுதை இப்போது ஆர்டர் செய்யுங்கள்' },
  'order.subtitle': { en: 'Quick and easy - reach us via phone or WhatsApp', ta: 'விரைவாகவும் எளிதாகவும் - தொலைபேசி அல்லது வாட்ஸ்அப் மூலம் எங்களை தொடர்பு கொள்ளுங்கள்' },
  'order.getStarted': { en: 'Get Started in 2 Easy Steps', ta: '2 எளிய படிகளில் தொடங்குங்கள்' },
  'order.contactUs': { en: 'Contact us and we\'ll take care of the rest', ta: 'எங்களை தொடர்பு கொள்ளுங்கள், மீதமுள்ளதை நாங்கள் கவனித்துக்கொள்வோம்' },
  'order.whatsapp': { en: 'WhatsApp', ta: 'வாட்ஸ்அப்' },
  'order.instantMsg': { en: 'Instant messaging', ta: 'உடனடி செய்தி' },
  'order.callNow': { en: 'Call Now', ta: 'இப்போது அழைக்கவும்' },
  'order.directCall': { en: 'Direct phone call', ta: 'நேரடி தொலைபேசி அழைப்பு' },
  'order.whyDirect': { en: 'Why Choose Direct Contact?', ta: 'நேரடி தொடர்பை ஏன் தேர்வு செய்ய வேண்டும்?' },
  'order.instantResponse': { en: 'Instant Response', ta: 'உடனடி பதில்' },
  'order.instantDesc': { en: 'Get immediate answers to your questions', ta: 'உங்கள் கேள்விகளுக்கு உடனடி பதில் பெறுங்கள்' },
  'order.locationShare': { en: 'Location Sharing', ta: 'இருப்பிட பகிர்வு' },
  'order.locationDesc': { en: 'Easy coordination for doorstep service', ta: 'வீட்டு வாசல் சேவைக்கு எளிதான ஒருங்கிணைப்பு' },
  'order.localService': { en: 'Local Coimbatore Service', ta: 'உள்ளூர் கோவை சேவை' },
  'order.localDesc': { en: 'We understand Tamil & serve Coimbatore area', ta: 'நாங்கள் தமிழ் புரிந்துகொள்கிறோம் மற்றும் கோவை பகுதியில் சேவை செய்கிறோம்' },
  'order.availability': { en: 'Available 7 days a week • Same-day service in Coimbatore', ta: 'வாரத்தின் 7 நாட்களும் கிடைக்கும் • கோவையில் அதே நாள் சேவை' },
  
  // Footer
  'footer.displayRepair': { en: 'Display Repair Pro', ta: 'டிஸ்ப்ளே ரிப்பேர் ப்ரோ' },
  'footer.coimbatore': { en: 'Coimbatore, Tamil Nadu', ta: 'கோவை, தமிழ்நாடு' },
  'footer.localExpert': { en: 'Your Trusted Local Mobile Repair Expert', ta: 'உங்கள் நம்பகமான உள்ளூர் மொபைல் பழுது நிபுணர்' },
  'footer.phone': { en: 'Phone', ta: 'தொலைபேசி' },
  'footer.email': { en: 'Email', ta: 'மின்னஞ்சல்' },
  'footer.quickLinks': { en: 'Quick Links', ta: 'விரைவு இணைப்புகள்' },
  'footer.services': { en: 'Services', ta: 'சேவைகள்' },
  'footer.pricing': { en: 'Pricing', ta: 'விலை' },
  'footer.contact': { en: 'Contact', ta: 'தொடர்பு' },
  'footer.about': { en: 'About Us', ta: 'எங்களைப் பற்றி' },
  'footer.whyChoose': { en: 'Why Choose Us', ta: 'எங்களை ஏன் தேர்வு செய்ய வேண்டும்' },
  'footer.doorstep': { en: 'Doorstep Service', ta: 'வீட்டு வாசல் சேவை' },
  'footer.warranty': { en: '6 Months Warranty', ta: '6 மாத உத்தரவாதம்' },
  'footer.freeGifts': { en: '3 Free Gifts', ta: '3 இலவச பரிசுகள்' },
  'footer.localSupport': { en: 'Local Tamil Support', ta: 'உள்ளூர் தமிழ் ஆதரவு' },
  'footer.rights': { en: 'All rights reserved', ta: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை' },
  'footer.madeWithLove': { en: 'Made with ❤️ in Coimbatore', ta: 'கோவையில் ❤️ உடன் செய்யப்பட்டது' },
};

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
