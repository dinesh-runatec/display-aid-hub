import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Languages } from "lucide-react";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLanguage(language === 'en' ? 'ta' : 'en')}
      className="fixed top-4 right-4 z-50 gap-2 shadow-lg"
    >
      <Languages className="w-4 h-4 flex-shrink-0" />
      <span className="text-xs md:text-sm whitespace-nowrap">
        {language === 'en' ? 'தமிழ்' : 'English'}
      </span>
    </Button>
  );
};

export default LanguageToggle;
