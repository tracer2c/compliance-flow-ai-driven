import { useState, useRef } from "react";
import tracer2cLogo from "@/assets/tracer2c-logo.png.asset.json";
import { gsap } from "gsap";
import { useGSAP, prefersReducedMotion } from "@/hooks/useGSAP";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
  BarChart3,
  ArrowRight,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const ctaRef = useRef<HTMLAnchorElement | null>(null);
  const ctaArrowRef = useRef<HTMLSpanElement | null>(null);
  const ctaShineRef = useRef<HTMLSpanElement | null>(null);

  const products = [
    {
      name: "ComplianceFlow",
      description: "End-to-end document management platform for buyers and suppliers",
      icon: FileText,
      href: "https://compliance.tracer2c.com",
      badge: "Flagship",
      external: true,
    },
    {
      name: "Target Promotion System",
      description: "Clear insight campaigns for compliance-aware promotions",
      icon: Target,
      href: null,
      badge: null,
      external: false,
    },
    {
      name: "Clear Insight",
      description: "Analytics & governance layer for operational efficiency",
      icon: BarChart3,
      href: null,
      badge: null,
      external: false,
    },
  ];

  const mainNavItems = [
    { name: "Solutions", href: "/solutions" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "Company", href: "/company" },
    { name: "Contact", href: "/contact" },
  ];

  const scope = useGSAP((ctx) => {
    if (prefersReducedMotion()) return;

    ctx.add(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-nav-shell]", { y: -24, opacity: 0, duration: 0.7 })
        .from("[data-nav-logo]", { x: -16, opacity: 0, duration: 0.55, ease: "power2.out" }, "-=0.4")
        .from(
          "[data-nav-link]",
          { y: -10, opacity: 0, stagger: 0.06, duration: 0.45, ease: "power2.out" },
          "-=0.35"
        )
        .from(
          "[data-cta-button]",
          { scale: 0.85, opacity: 0, duration: 0.55, ease: "back.out(1.7)" },
          "-=0.25"
        );
    });

    // CTA shimmer loop
    ctx.add(() => {
      if (!ctaShineRef.current) return;
      gsap.set(ctaShineRef.current, { xPercent: -150 });
      gsap.to(ctaShineRef.current, {
        xPercent: 250,
        duration: 1.2,
        ease: "power2.inOut",
        repeat: -1,
        repeatDelay: 2.6,
        delay: 2,
      });
    });
  }, []);

  const handleCtaEnter = () => {
    if (prefersReducedMotion()) return;
    gsap.to(ctaRef.current, { scale: 1.04, duration: 0.25, ease: "power2.out" });
    gsap.to(ctaArrowRef.current, { x: 5, duration: 0.25, ease: "power2.out" });
  };
  const handleCtaLeave = () => {
    if (prefersReducedMotion()) return;
    gsap.to(ctaRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
    gsap.to(ctaArrowRef.current, { x: 0, duration: 0.3, ease: "power2.out" });
  };

  return (
    <header
      ref={scope as React.RefObject<HTMLElement>}
      className="fixed top-3 md:top-5 left-4 right-4 md:left-8 md:right-8 z-50"
    >
      <nav
        data-nav-shell
        className="flex items-center justify-between h-[76px] md:h-[84px] px-5 md:px-8 rounded-[22px]"
        style={{
          background: "rgba(6, 18, 32, 0.78)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          border: "1px solid rgba(148, 163, 184, 0.18)",
          boxShadow:
            "0 20px 60px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
        }}
      >
        {/* Logo */}
        <Link data-nav-logo to="/" className="flex items-center gap-2.5 shrink-0">
          <img src={tracer2cLogo.url} alt="TraceR2C" className="h-8 w-8 object-contain" />
          <span className="text-white text-xl md:text-2xl font-bold tracking-tight">
            TraceR2C
          </span>
        </Link>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 absolute left-1/2 -translate-x-1/2">
          {/* Products Mega Menu */}
          <div data-nav-link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className="bg-transparent hover:bg-white/5 data-[state=open]:bg-white/5 focus:bg-white/5 text-[15px] font-medium text-[#F3F6FA]/90 hover:text-teal-300 data-[state=open]:text-teal-300 px-3 h-9 transition-colors"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div
                      className="w-80 p-3 rounded-2xl"
                      style={{
                        background: "rgba(6, 18, 32, 0.95)",
                        backdropFilter: "blur(18px)",
                        WebkitBackdropFilter: "blur(18px)",
                        border: "1px solid rgba(148, 163, 184, 0.18)",
                        boxShadow: "0 20px 60px rgba(0, 0, 0, 0.45)",
                      }}
                    >
                      {products.map((product) => {
                        const content = (
                          <div className="flex items-center space-x-3">
                            <div className="h-9 w-9 bg-teal-400/10 border border-teal-400/20 rounded-lg flex items-center justify-center">
                              <product.icon className="h-4 w-4 text-teal-300" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <h3 className="font-medium text-white group-hover:text-teal-300 transition-colors">
                                  {product.name}
                                </h3>
                                {product.badge && (
                                  <Badge className="text-[10px] bg-teal-400/15 text-teal-300 border-teal-400/20 hover:bg-teal-400/20">
                                    {product.badge}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-white/55 mt-1">
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
                                className="block rounded-xl p-3 hover:bg-white/5 transition-colors group"
                              >
                                {content}
                              </a>
                            </NavigationMenuLink>
                          );
                        }

                        return (
                          <div key={product.name} className="block rounded-xl p-3 group">
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

          {/* Main Nav */}
          {mainNavItems.map((item) => (
            <Link
              key={item.name}
              data-nav-link
              to={item.href}
              className="text-[15px] font-medium text-[#F3F6FA]/90 hover:text-teal-300 transition-colors"
              style={{ letterSpacing: "-0.01em" }}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center shrink-0">
          <a
            ref={ctaRef}
            data-cta-button
            href="https://compliance.tracer2c.com"
            target="_self"
            onMouseEnter={handleCtaEnter}
            onMouseLeave={handleCtaLeave}
            className="relative overflow-hidden inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-bold text-[15px] will-change-transform"
            style={{
              boxShadow: "0 10px 28px rgba(20, 184, 166, 0.28)",
            }}
          >
            <span className="relative z-10">Start Free Trial</span>
            <span ref={ctaArrowRef} className="relative z-10 inline-flex">
              <ArrowRight className="h-4 w-4" />
            </span>
            {/* Shimmer */}
            <span
              ref={ctaShineRef}
              aria-hidden="true"
              className="pointer-events-none absolute top-0 bottom-0 w-1/3 -skew-x-12"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent)",
              }}
            />
          </a>
        </div>

        {/* Mobile Menu */}
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-teal-300"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 flex flex-col">
            <SheetHeader className="flex-shrink-0">
              <SheetTitle className="text-left text-navy-900">Navigation</SheetTitle>
            </SheetHeader>

            <ScrollArea className="flex-1 px-1 [&>div>div[style]]:!pr-0">
              <div className="mt-6 space-y-6 pb-6">
                <div className="space-y-3">
                  <h3 className="font-semibold text-navy-900 text-sm uppercase tracking-wide">
                    Products
                  </h3>
                  {products.map((product) => {
                    const content = (
                      <>
                        <div className="h-8 w-8 bg-teal-100 rounded-lg flex items-center justify-center">
                          <product.icon className="h-4 w-4 text-teal-600" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-navy-900 group-hover:text-teal-600 transition-colors">
                              {product.name}
                            </span>
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

                <div className="space-y-3 border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-navy-900 text-sm uppercase tracking-wide">
                    Menu
                  </h3>
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

                <div className="space-y-3 border-t border-gray-200 pt-6">
                  <a
                    href="https://compliance.tracer2c.com"
                    target="_self"
                    className="w-full"
                  >
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
      </nav>
    </header>
  );
};

export default Header;
