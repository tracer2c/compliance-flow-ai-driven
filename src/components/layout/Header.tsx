import { useState } from "react";
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
  X, 
  FileText, 
  Target, 
  BarChart3
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const products = [
    {
      name: "ComplianceFlow",
      description: "End-to-end document management platform for buyers and suppliers",
      icon: FileText,
      href: "https://chain-compliance-hub.lovable.app",
      badge: "Flagship",
      external: true
    },
    {
      name: "Target Promotion System",
      description: "Clear insight campaigns for compliance-aware promotions",
      icon: Target,
      href: "https://loyalty-nexus-bloom.lovable.app",
      badge: null,
      external: true
    },
    {
      name: "Clear Insight",
      description: "Analytics & governance layer for operational efficiency",
      icon: BarChart3,
      href: "/products/analytics",
      badge: null,
      external: false
    }
  ];

  const mainNavItems = [
    { name: "Solutions", href: "/solutions" },
    { name: "Security", href: "/security" },
    { name: "Integrations", href: "/integrations" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "Company", href: "/company" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-gradient-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-display font-bold text-xl text-navy-900">TraceR2C</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {/* Products Mega Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-navy-700 hover:text-navy-900 font-medium">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-80 p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
                      {products.map((product) => (
                        <NavigationMenuLink key={product.name} asChild>
                          {product.external ? (
                            <a
                              href={product.href}
                              target="_self"
                              rel="noopener noreferrer"
                              className="block rounded-lg p-3 hover:bg-gray-50 transition-colors group"
                            >
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
                            </a>
                          ) : (
                            <Link
                              to={product.href}
                              className="block rounded-lg p-3 hover:bg-gray-50 transition-colors group"
                            >
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
                            </Link>
                          )}
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Main Navigation Items */}
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-navy-700 hover:text-navy-900 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* CTA Buttons */}
            <Button 
              variant="outline" 
              className="border-navy-200 text-navy-700 hover:bg-navy-50"
            >
              Schedule Demo
            </Button>
            <Button className="bg-gradient-accent text-white hover:opacity-90 font-medium">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Sheet */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            {/* Sticky Mobile CTA with Menu Trigger (inside Sheet for context, before content) */}
            <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
              <SheetTrigger asChild>
                <Button className="w-full bg-gradient-accent text-white shadow-lg flex items-center justify-center relative">
                  {/* Hamburger lines on the left */}
                  <div className="absolute left-4 flex flex-col space-y-1">
                    <div className="w-4 h-0.5 bg-foreground"></div>
                    <div className="w-4 h-0.5 bg-foreground"></div>
                    <div className="w-4 h-0.5 bg-foreground"></div>
                  </div>
                  <span className="ml-2">Start Free Trial</span>
                </Button>
              </SheetTrigger>
            </div>
            <SheetContent side="right" className="w-80 flex flex-col">
              <SheetHeader className="flex-shrink-0">
                <SheetTitle className="text-left text-navy-900">Navigation</SheetTitle>
              </SheetHeader>
              
              <ScrollArea className="flex-1 px-1">
                <div className="mt-6 space-y-6 pb-6">
                {/* Products */}
                <div className="space-y-3">
                  <h3 className="font-semibold text-navy-900 text-sm uppercase tracking-wide">Products</h3>
                  {products.map((product) => (
                    product.external ? (
                      <a
                        key={product.name}
                        href={product.href}
                        target="_self"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
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
                      </a>
                    ) : (
                      <Link
                        key={product.name}
                        to={product.href}
                        className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors group"
                        onClick={() => setMobileMenuOpen(false)}
                      >
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
                      </Link>
                    )
                  ))}
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
                  <Button 
                    variant="outline" 
                    className="w-full border-navy-200 text-navy-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Schedule Demo
                  </Button>
                  <Button 
                    className="w-full bg-gradient-accent text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Start Free Trial
                  </Button>
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