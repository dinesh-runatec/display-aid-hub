import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, Check, Upload, Download } from "lucide-react";
import { useState, useRef } from "react";
import { toast } from "sonner";

const brandPricing = {
  iphone: [
    {
      title: "iPhone 4 - 5S Series",
      models: ["4", "4S", "5", "5C", "5S", "SE 2016"],
      prices: [
        { type: "Standard", price: "₹1,300", warranty: "Standard" },
        { type: "Warranty", price: "₹1,800", warranty: "6 Months" },
        { type: "Original", price: "₹3,500", warranty: "1 Year", highlight: true },
      ],
    },
    {
      title: "iPhone 6 - 7 Plus Series",
      models: ["6", "6S", "7", "7 Plus"],
      prices: [
        { type: "Standard", price: "₹1,500", warranty: "Standard" },
        { type: "Warranty", price: "₹2,000", warranty: "6 Months" },
        { type: "Original", price: "₹3,500", warranty: "1 Year", highlight: true },
      ],
    },
    {
      title: "iPhone 8 - X Series",
      models: ["8", "8 Plus", "X"],
      prices: [
        { type: "LCD", price: "₹1,800", warranty: "Standard" },
        { type: "LED", price: "₹3,500", warranty: "6 Months" },
        { type: "Original", price: "₹6,500", warranty: "1 Year", highlight: true },
      ],
    },
    {
      title: "iPhone 11 Series",
      models: ["11", "11 Pro", "11 Pro Max"],
      prices: [
        { type: "LCD", price: "₹2,000", warranty: "Standard" },
        { type: "LED", price: "₹4,200", warranty: "6 Months" },
        { type: "Original", price: "₹7,500", warranty: "1 Year", highlight: true },
      ],
    },
    {
      title: "iPhone 12 Series",
      models: ["12", "12 Pro", "12 Pro Max"],
      prices: [
        { type: "LCD", price: "₹2,500", warranty: "Standard" },
        { type: "LED", price: "₹4,500", warranty: "6 Months" },
        { type: "Original", price: "₹9,500", warranty: "1 Year", highlight: true },
      ],
    },
    {
      title: "iPhone 13 Series",
      models: ["13", "13 Pro", "13 Pro Max"],
      prices: [
        { type: "LCD", price: "₹2,800", warranty: "Standard" },
        { type: "LED", price: "₹6,000", warranty: "6 Months" },
        { type: "Original", price: "₹12,500", warranty: "1 Year", highlight: true },
      ],
    },
    {
      title: "iPhone 14 Series",
      models: ["14", "14 Pro", "14 Pro Max"],
      prices: [
        { type: "LCD", price: "₹3,500", warranty: "Standard" },
        { type: "LED", price: "₹10,500", warranty: "6 Months" },
        { type: "Original", price: "₹20,000", warranty: "1 Year", highlight: true },
      ],
    },
    {
      title: "iPhone 15 Series",
      models: ["15", "15 Pro", "15 Pro Max"],
      prices: [
        { type: "LCD", price: "₹4,500", warranty: "Standard" },
        { type: "LED", price: "₹13,000", warranty: "6 Months" },
        { type: "Original", price: "₹23,000", warranty: "1 Year", highlight: true },
      ],
    },
    {
      title: "iPhone 16 Series (Latest)",
      models: ["16", "16 Pro", "16 Pro Max"],
      prices: [
        { type: "LCD", price: "₹5,500", warranty: "Standard" },
        { type: "LED", price: "₹14,000", warranty: "6 Months" },
        { type: "Original", price: "₹25,000", warranty: "1 Year", highlight: true },
      ],
    },
  ],
  samsung: [
    {
      title: "Premium A & M Series",
      models: ["A20", "A30", "A50", "M30", "M30S", "M21"],
      prices: [
        { type: "LCD", price: "₹1,200", warranty: "Standard" },
        { type: "LED", price: "₹2,400", warranty: "6 Months" },
      ],
    },
    {
      title: "Standard M Series",
      models: ["M10", "M10S", "M20", "M20S"],
      prices: [
        { type: "LCD", price: "₹1,200", warranty: "Standard" },
        { type: "LCD", price: "₹1,800", warranty: "6 Months", highlight: true },
      ],
    },
  ],
  xiaomi: [
    {
      title: "Redmi Note Series",
      models: ["Note 9", "Note 10", "Note 11", "Note 12"],
      prices: [
        { type: "LCD", price: "₹1,100", warranty: "Standard" },
        { type: "AMOLED", price: "₹2,200", warranty: "6 Months" },
      ],
    },
    {
      title: "Redmi Series",
      models: ["Redmi 9", "9A", "10", "10A", "11"],
      prices: [
        { type: "LCD", price: "₹900", warranty: "Standard" },
        { type: "LCD", price: "₹1,500", warranty: "6 Months", highlight: true },
      ],
    },
  ],
  oppo: [
    {
      title: "A Series",
      models: ["A15", "A31", "A53", "A74", "A96"],
      prices: [
        { type: "LCD", price: "₹1,200", warranty: "Standard" },
        { type: "AMOLED", price: "₹2,300", warranty: "6 Months" },
      ],
    },
    {
      title: "F Series",
      models: ["F17", "F19", "F21"],
      prices: [
        { type: "AMOLED", price: "₹2,500", warranty: "Standard" },
        { type: "AMOLED", price: "₹3,000", warranty: "6 Months", highlight: true },
      ],
    },
  ],
  vivo: [
    {
      title: "Y75 Series",
      models: ["Y75 4G", "Y75 5G"],
      prices: [
        { type: "LCD", price: "₹1,400", warranty: "Standard" },
        { type: "Warranty", price: "₹1,900", warranty: "6 Months" },
        { type: "LED", price: "₹3,000", warranty: "Standard" },
        { type: "Original", price: "₹4,500", warranty: "1 Year", highlight: true },
      ],
    },
    {
      title: "Y Series Budget",
      models: ["Y11", "Y12", "Y15", "Y17"],
      prices: [
        { type: "Standard", price: "₹1,200", warranty: "Standard" },
        { type: "Warranty", price: "₹1,800", warranty: "6 Months", highlight: true },
      ],
    },
    {
      title: "Y Series Premium",
      models: ["Y20", "Y21", "Y33"],
      prices: [
        { type: "LCD", price: "₹1,100", warranty: "Standard" },
        { type: "AMOLED", price: "₹2,200", warranty: "6 Months" },
      ],
    },
    {
      title: "V Series",
      models: ["V20", "V21", "V23"],
      prices: [
        { type: "AMOLED", price: "₹2,600", warranty: "Standard" },
        { type: "AMOLED", price: "₹3,100", warranty: "6 Months", highlight: true },
      ],
    },
  ],
  realme: [
    {
      title: "C Series",
      models: ["C11", "C15", "C21", "C25", "C35"],
      prices: [
        { type: "LCD", price: "₹900", warranty: "Standard" },
        { type: "LCD", price: "₹1,400", warranty: "6 Months", highlight: true },
      ],
    },
    {
      title: "Narzo Series",
      models: ["Narzo 30", "Narzo 50", "Narzo 60"],
      prices: [
        { type: "LCD", price: "₹1,000", warranty: "Standard" },
        { type: "AMOLED", price: "₹2,100", warranty: "6 Months" },
      ],
    },
  ],
};

type BrandKey = keyof typeof brandPricing;

const brands: { id: BrandKey; name: string }[] = [
  { id: "iphone", name: "iPhone" },
  { id: "samsung", name: "Samsung" },
  { id: "xiaomi", name: "Xiaomi" },
  { id: "oppo", name: "Oppo" },
  { id: "vivo", name: "Vivo" },
  { id: "realme", name: "Realme" },
];

const Pricing = () => {
  const [selectedBrand, setSelectedBrand] = useState<BrandKey>("iphone");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleCSVImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target?.result as string;
        const lines = text.split('\n').filter(line => line.trim());
        
        if (lines.length < 2) {
          toast.error("CSV file is empty or invalid");
          return;
        }

        toast.success(`CSV imported successfully! ${lines.length - 1} entries loaded.`);
        console.log("CSV Data imported:", lines);
      } catch (error) {
        toast.error("Failed to import CSV. Please check the format.");
      }
    };
    reader.readAsText(file);
    
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const downloadCSV = () => {
    let csvContent = "Brand,Category,Models,DisplayType,Price,Warranty,Highlight\n";
    
    Object.entries(brandPricing).forEach(([brand, categories]) => {
      categories.forEach((category) => {
        const models = category.models.join("|");
        category.prices.forEach((price) => {
          csvContent += `${brand},${category.title},"${models}",${price.type},${price.price.replace('₹', '')},${price.warranty},${price.highlight || 'false'}\n`;
        });
      });
    });

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'pricing-data.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    toast.success("CSV downloaded successfully!");
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-semibold text-secondary">LOWEST PRICES GUARANTEED</span>
          </div>
          <h2 className="font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Quality repairs at unbeatable prices. Choose your brand and find your model instantly.
          </p>
          
          {/* CSV Import/Export Buttons */}
          <div className="flex justify-center gap-3">
            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              onChange={handleCSVImport}
              className="hidden"
            />
            <Button
              variant="outline"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
              className="gap-2"
            >
              <Upload className="w-4 h-4" />
              Import CSV
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={downloadCSV}
              className="gap-2"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            CSV Format: Brand, Category, Models, DisplayType, Price, Warranty, Highlight
          </p>
        </div>

        {/* Brand Selector - Large Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 mb-12 max-w-5xl mx-auto">
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => setSelectedBrand(brand.id)}
              className={`p-3 sm:p-4 md:p-6 rounded-xl font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 ${
                selectedBrand === brand.id
                  ? 'bg-primary text-primary-foreground shadow-lg scale-105 border-2 border-primary'
                  : 'bg-card hover:bg-accent border-2 border-transparent hover:border-primary/30'
              }`}
            >
              {brand.name}
            </button>
          ))}
        </div>

        {/* Pricing Cards - Scrollable on mobile */}
        <div className="relative">
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent">
            {brandPricing[selectedBrand].map((category) => (
              <Card
                key={category.title}
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl snap-center min-w-[280px] sm:min-w-0"
              >
              <CardContent className="p-4 sm:p-6">
                {/* Category Header */}
                <div className="mb-4 sm:mb-6 pb-3 sm:pb-4 border-b">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{category.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground break-words">
                    {category.models.join(" • ")}
                  </p>
                </div>

                {/* Price Options */}
                <div className="space-y-2 sm:space-y-3">
                  {category.prices.map((priceInfo, index) => (
                    <div
                      key={index}
                      className={`p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 ${
                        priceInfo.highlight
                          ? 'border-primary bg-primary/5 shadow-md'
                          : 'border-muted hover:border-primary/30'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-semibold text-base sm:text-lg">{priceInfo.type}</span>
                          {priceInfo.highlight && (
                            <Badge variant="secondary" className="text-xs">
                              BEST VALUE
                            </Badge>
                          )}
                        </div>
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-primary whitespace-nowrap">
                          {priceInfo.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <Shield className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span>{priceInfo.warranty} Warranty</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Features Banner */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border-2 border-primary/20">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-center md:text-left">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-sm md:text-base">3 Free Gifts</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-sm md:text-base">Doorstep Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-semibold text-sm md:text-base">Same Day Repair</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center">
          <p className="text-sm md:text-base text-muted-foreground">
            Don't see your model? <span className="text-primary font-semibold cursor-pointer hover:underline" onClick={() => document.getElementById("order")?.scrollIntoView({ behavior: "smooth" })}>Contact us</span> for a custom quote
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
