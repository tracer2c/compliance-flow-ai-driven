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
        <span className="text-[20rem] md:text-[30rem] font-bold text-navy-800/20 select-none">
          404
        </span>
      </div>

      {/* Scattered Design Cards */}
      <div className="absolute inset-0 pointer-events-none">
        {designCards.map((card, index) => (
          <div
            key={index}
            className={`absolute bg-navy-800/40 backdrop-blur-sm border border-navy-700/50 rounded-lg px-4 py-2 text-sm text-navy-200 transform rotate-${index % 2 === 0 ? '12' : '-12'} ${
              index === 2 || index === 5 ? 'bg-green-600/20 border-green-500/30 text-green-300' : ''
            }`}
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
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          You're in uncharted design territory!
        </h1>
        <p className="text-lg md:text-xl text-navy-300 mb-8 leading-relaxed">
          Looks like you took a wrong turn. But don't worry, even the best creatives get lost sometimes! 
          Let's get you back to familiar ground.
        </p>
        
        <Button 
          asChild
          className="bg-gradient-accent text-white hover:opacity-90 font-medium px-8 py-3 text-lg"
        >
          <a href="/" className="inline-flex items-center space-x-2">
            <ArrowLeft className="h-5 w-5" />
            <span>Return home</span>
          </a>
        </Button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-32 w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-300"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-teal-300 rounded-full animate-pulse animation-delay-700"></div>
    </div>
  );
};

export default NotFound;
