import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  FileText, 
  Target, 
  BarChart3
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoIconRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLSpanElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      name: "ComplianceFlow",
      description: "End-to-end document management platform for buyers and suppliers",
      icon: FileText,
      href: "https://compliance.tracer2c.com",
      badge: "Flagship",
      external: true
    },
    {
      name: "Target Promotion System",
      description: "Clear insight campaigns for compliance-aware promotions",
      icon: Target,
      href: null,
      badge: null,
      external: false
    },
    {
      name: "Clear Insight",
      description: "Analytics & governance layer for operational efficiency",
      icon: BarChart3,
      href: null,
      badge: null,
      external: false
    }
  ];

  const mainNavItems = [
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "Company", href: "/company" },
    { name: "Contact", href: "/contact" }
  ];

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Logo icon - elastic spin entrance
      tl.fromTo(
        logoIconRef.current,
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
      );

      // Logo text - character reveal
      if (logoTextRef.current) {
        const text = logoTextRef.current.textContent || "";
        logoTextRef.current.innerHTML = text
          .split("")
          .map((char) => `<span class="logo-char" style="display:inline-block;opacity:0;transform:translateY(20px)">${char}</span>`)
          .join("");

        tl.to(
          ".logo-char",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.04,
            ease: "power2.out"
          },
          "-=0.6"
        );
      }

      // Nav items cascade
      tl.fromTo(
        ".nav-item",
        { opacity: 0, y: -20, filter: "blur(8px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.5,
          stagger: 0.08
        },
        "-=0.4"
      );

      // CTA button pop
      tl.fromTo(
        ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(1.7)" },
        "-=0.3"
      );
    }, headerRef);

    // Logo hover effect
    const logoIcon = logoIconRef.current;
    if (logoIcon) {
      const handleMouseEnter = () => {
        gsap.to(logoIcon, {
          scale: 1.1,
          rotation: 10,
          duration: 0.3,
          ease: "power2.out"
        });
      };
      const handleMouseLeave = () => {
        gsap.to(logoIcon, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      logoIcon.addEventListener("mouseenter", handleMouseEnter);
      logoIcon.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        logoIcon.removeEventListener("mouseenter", handleMouseEnter);
        logoIcon.removeEventListener("mouseleave", handleMouseLeave);
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div 
              ref={logoIconRef}
              className="h-8 w-8 bg-gradient-accent rounded-lg flex items-center justify-center will-change-transform"
            >
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span ref={logoTextRef} className="font-display font-bold text-xl text-navy-900">TraceR2C</span>
          </Link>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="hidden lg:flex items-center space-x-8">
            {/* Products Mega Menu */}
            <div className="nav-item">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-navy-700 hover:text-navy-900 font-medium">
                      Products
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-80 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
                        {products.map((product) => {
                          const content = (
                            <div className="flex items-center space-x-3">
                              <div className="h-8 w-8 bg-teal-100 rounded-lg flex items-center justify-center">
                                <product.icon className="h-4 w-4 text-teal-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <h3 className="font-medium text-navy-900 group-hover:text-teal-600 transition-colors">
                                    {product.name}
                                  </h3>
                                  {product.badge && (
                                    <Badge variant="secondary" className="text-xs">
                                      {product.badge}
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-xs text-gray-600 mt-1">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                          );

                          if (product.href && product.external) {
                            return (
                              <NavigationMenuLink key={product.name} asChild>
                                <a
                                  href={product.href}
                                  target="_self"
                                  rel="noopener noreferrer"
                                  className="block rounded-lg p-3 hover:bg-gray-50 transition-colors group"
                                >
                                  {content}
                                </a>
                              </NavigationMenuLink>
                            );
                          }

                          return (
                            <div
                              key={product.name}
                              className="block rounded-lg p-3 group"
                            >
                              {content}
                            </div>
                          );
                        })}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Main Navigation Items */}
            {mainNavItems.map((item) => (
              <div key={item.name} className="nav-item">
                <Link
                  to={item.href}
                  className="text-navy-700 hover:text-navy-900 font-medium transition-colors"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div ref={ctaRef} className="hidden lg:flex items-center space-x-4 will-change-transform">
            <a href="https://compliance.tracer2c.com" target="_self">
              <Button className="bg-gradient-accent text-white hover:opacity-90 font-medium">
                Start Free Trial
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="ml-auto">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 flex flex-col">
              <SheetHeader className="flex-shrink-0">
                <SheetTitle className="text-left text-navy-900">Navigation</SheetTitle>
              </SheetHeader>
              
              <ScrollArea className="flex-1 px-1 [&>div>div[style]]:!pr-0">
                <div className="mt-6 space-y-6 pb-6">
                {/* Products */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-navy-900 text-sm uppercase tracking-wide">Products</h3>
                  {products.map((product) => {
                    const content = (
                      <>
                        <div className="h-8 w-8 bg-teal-100 rounded-lg flex items-center justify-center">
                          <product.icon className="h-4 w-4 text-teal-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-navy-900 group-hover:text-teal-600 transition-colors">{product.name}</span>
                            {product.badge && (
                              <Badge variant="secondary" className="text-xs">
                                {product.badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-600 mt-1">{product.description}</p>
                        </div>
                      </>
                    );

                    if (product.href && product.external) {
                      return (
                        <a
                          key={product.name}
                          href={product.href}
                          target="_self"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {content}
                        </a>
                      );
                    }

                    return (
                      <div
                        key={product.name}
                        className="flex items-center space-x-3 p-3 rounded-lg group"
                      >
                        {content}
                      </div>
                    );
                  })}
                </div>

                {/* Main Navigation */}
                <div className="space-y-3 border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-navy-900 text-sm uppercase tracking-wide">Menu</h3>
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block p-3 text-navy-700 hover:bg-gray-50 hover:text-teal-600 rounded-lg font-medium transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile CTAs */}
                <div className="space-y-3 border-t border-gray-200 pt-6">
                  <a href="https://compliance.tracer2c.com" target="_self" className="w-full">
                    <Button 
                      className="w-full bg-gradient-accent text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Start Free Trial
                    </Button>
                  </a>
                </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
