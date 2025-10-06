import { Card, CardContent } from "@/components/ui/card";
import { Play, CheckCircle2 } from "lucide-react";

const RepairVideos = () => {
  const videos = [
    {
      id: "1",
      title: "iPhone Screen Replacement Process",
      description: "Watch how we professionally replace iPhone screens in under 30 minutes",
      thumbnail: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&q=80",
      duration: "5:24",
    },
    {
      id: "2",
      title: "Samsung Display Repair Guide",
      description: "Complete walkthrough of Samsung display restoration",
      thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80",
      duration: "7:15",
    },
    {
      id: "3",
      title: "Quality Testing After Repair",
      description: "See our rigorous quality control process for every device",
      thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      duration: "4:30",
    },
  ];

  const handleVideoClick = (videoId: string) => {
    // Placeholder for video modal or navigation
    console.log("Playing video:", videoId);
  };

  return (
    <section className="py-20 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Play className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">WATCH OUR WORK</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            See How We Fix Your Display
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a behind-the-scenes look at our professional repair process
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => handleVideoClick(video.id)}
            >
              <CardContent className="p-0">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors duration-300">
                    <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-8 h-8 text-primary-foreground fill-current" />
                    </div>
                  </div>
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-semibold">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Box */}
        <Card className="mt-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-2 border-primary/20">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              <div className="flex-shrink-0">
                <div className="bg-primary/20 rounded-full p-4">
                  <CheckCircle2 className="w-12 h-12 text-primary" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2">
                  Transparent Repair Process
                </h3>
                <p className="text-muted-foreground">
                  We believe in complete transparency. Watch how we carefully handle every repair with precision and care. 
                  Our certified technicians follow strict quality standards to ensure your device is restored to perfect condition.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Video Upload Placeholder Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Want to see a specific repair process? Contact us and we'll create a custom video for you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default RepairVideos;
