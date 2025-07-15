import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Sparkles, Zap } from "lucide-react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Spheres */}
      <div className="fixed inset-0 -z-10">
        <div className="morphic-sphere w-96 h-96 top-10 -right-48"></div>
        <div className="morphic-sphere w-64 h-64 top-1/2 -left-32 animation-delay-200"></div>
        <div className="morphic-sphere w-80 h-80 bottom-10 right-1/4 animation-delay-400"></div>
        <div className="morphic-sphere w-48 h-48 top-1/4 left-1/3"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className={`max-w-6xl mx-auto space-y-8 ${mounted ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          
          {/* Hero Title */}
          <div className="space-y-6 animate-fadeInUp">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
              <span className="morphic-text">Morphic</span>{" "}
              <span className="text-foreground">Dreams</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fadeInUp animation-delay-200">
              Where thoughts take shape and consciousness flows like liquid mercury 
              through infinite dimensions.
            </p>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeInUp animation-delay-400">
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore Dreams
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
            
            <Button variant="outline" size="lg" className="glass-effect group">
              <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" />
              Manifest Reality
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-fadeInUp animation-delay-400">
            <Card className="glass-effect p-6 hover:scale-105 transition-transform duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Neural Synthesis</h3>
                <p className="text-muted-foreground">
                  Transform abstract thoughts into tangible digital experiences through advanced neural processing.
                </p>
              </div>
            </Card>

            <Card className="glass-effect p-6 hover:scale-105 transition-transform duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                  <Sparkles className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold">Quantum Dreams</h3>
                <p className="text-muted-foreground">
                  Explore parallel dimensions of creativity where imagination becomes reality.
                </p>
              </div>
            </Card>

            <Card className="glass-effect p-6 hover:scale-105 transition-transform duration-300 group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Infinite Flow</h3>
                <p className="text-muted-foreground">
                  Navigate seamlessly through interconnected streams of consciousness and data.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Ambient Glow Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/5 via-accent/5 to-transparent rounded-full blur-3xl"></div>
      </div>
    </div>
  );
};

export default Index;
