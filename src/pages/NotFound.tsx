import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  const designCards = [
    "Create a lasting impact",
    "Our narratives in design", 
    "Get to know our stories",
    "Team behind the brackets",
    "Where design takes shape",
    "Innovation meets execution",
    "Building digital experiences"
  ];

  return (
    <div className="min-h-screen bg-navy-950 relative overflow-hidden flex items-center justify-center">
      {/* Large 404 Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[20rem] md:text-[30rem] font-bold text-navy-800/20 select-none font-display">
          404
        </span>
      </div>

      {/* Scattered Enterprise Cards */}
      <div className="absolute inset-0 pointer-events-none">
        {designCards.map((card, index) => (
          <div
            key={index}
            className={`absolute glass-card border border-navy-700/50 rounded-lg px-4 py-2 text-sm text-navy-200 transform ${
              index % 2 === 0 ? 'rotate-12' : '-rotate-12'
            } ${
              index === 2 || index === 5 ? 'bg-teal-500/10 border-teal-400/30 text-teal-300' : 'bg-navy-800/40'
            } transition-all duration-500 hover:scale-105`}
            style={{
              top: `${15 + (index * 12)}%`,
              left: `${10 + (index * 11)}%`,
              animationDelay: `${index * 0.2}s`
            }}
          >
            {card}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl">
        <div className="mb-6">
          <img 
            src="/lovable-uploads/160600b8-9088-4b97-80cf-2274fb2fbfb2.png" 
            alt="TraceR2C Logo" 
            className="h-16 w-auto mx-auto mb-4 opacity-80"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-lg md:text-xl text-navy-300 mb-8 leading-relaxed">
          The page you're looking for doesn't exist. This might happen when refreshing 
          internal pages on custom domains. Let's get you back to TraceR2C.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            className="bg-gradient-accent text-white hover:opacity-90 font-medium px-8 py-3 text-lg"
          >
            <a href="/" className="inline-flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5" />
              <span>Return Home</span>
            </a>
          </Button>
          
          <Button 
            asChild
            variant="outline"
            className="border-navy-600 text-navy-200 hover:bg-navy-800 px-8 py-3 text-lg"
          >
            <a href="/integrations" className="inline-flex items-center space-x-2">
              <span>View Integrations</span>
            </a>
          </Button>
        </div>

        <div className="mt-8 text-sm text-navy-400">
          <p>Quick links: <a href="/solutions" className="text-teal-400 hover:text-teal-300">Solutions</a> • <a href="/pricing" className="text-teal-400 hover:text-teal-300">Pricing</a> • <a href="/contact" className="text-teal-400 hover:text-teal-300">Contact</a></p>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '300ms'}}></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-teal-300 rounded-full animate-pulse" style={{animationDelay: '700ms'}}></div>
    </div>
  );
};

export default NotFound;
