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
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronDown, 
  Globe, 
  Menu, 
  X, 
  FileText, 
  Target, 
  BarChart3,
  Shield,
  Plug,
  DollarSign,
  BookOpen,
  Building
} from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("🇺🇸 North America");

  const regions = [
    { key: "regionSelector.regions.northamerica", label: "🇺🇸 North America" },
    { key: "regionSelector.regions.europe", label: "🇪🇺 Europe" },
    { key: "regionSelector.regions.apac", label: "🌏 Asia Pacific" },
    { key: "regionSelector.regions.latam", label: "🌎 Latin America" }
  ];

  const products = [
    {
      name: "ComplianceFlow",
      description: "End-to-end document management platform for buyers and suppliers",
      icon: FileText,
      href: "/products/complianceflow",
      badge: "Flagship"
    },
    {
      name: "Target Promotion System",
      description: "Clear insight campaigns for compliance-aware promotions",
      icon: Target,
      href: "/products/promotions",
      badge: null
    },
    {
      name: "Clear Insight",
      description: "Analytics & governance layer for operational efficiency",
      icon: BarChart3,
      href: "/products/analytics",
      badge: null
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
                    <div className="w-[400px] p-6 bg-white/95 backdrop-blur border border-gray-200 rounded-xl shadow-lg">
                      {products.map((product) => (
                        <NavigationMenuLink key={product.name} asChild>
                          <Link
                            to={product.href}
                            className="block space-y-3 rounded-lg p-4 hover:bg-gray-50 transition-colors group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="h-10 w-10 bg-teal-100 rounded-lg flex items-center justify-center">
                                <product.icon className="h-5 w-5 text-teal-600" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <h3 className="font-semibold text-navy-900 group-hover:text-teal-600 transition-colors">
                                    {product.name}
                                  </h3>
                                  {product.badge && (
                                    <Badge variant="secondary" className="text-xs">
                                      {product.badge}
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-gray-600 mt-1">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                          </Link>
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
            {/* Region Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-navy-700 hover:text-navy-900">
                  <Globe className="h-4 w-4 mr-2" />
                  {selectedRegion}
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48 bg-white/95 backdrop-blur border border-gray-200">
                {regions.map((region) => (
                  <DropdownMenuItem
                    key={region.key}
                    onClick={() => setSelectedRegion(region.label)}
                    className="cursor-pointer"
                  >
                    {region.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

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

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-4">
            {/* Products */}
            <div className="space-y-2">
              <h3 className="font-semibold text-navy-900 px-4">Products</h3>
              {products.map((product) => (
                <Link
                  key={product.name}
                  to={product.href}
                  className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-50 rounded-lg mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <product.icon className="h-5 w-5 text-teal-600" />
                  <span className="text-navy-700">{product.name}</span>
                  {product.badge && (
                    <Badge variant="secondary" className="text-xs">
                      {product.badge}
                    </Badge>
                  )}
                </Link>
              ))}
            </div>

            {/* Main Nav */}
            <div className="space-y-2 border-t border-gray-200 pt-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-4 py-2 text-navy-700 hover:bg-gray-50 rounded-lg mx-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile CTAs */}
            <div className="space-y-2 border-t border-gray-200 pt-4 px-4">
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
        )}
      </div>

      {/* Sticky Mobile CTA */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
        <Button className="w-full bg-gradient-accent text-white shadow-lg">
          Start Free Trial
        </Button>
      </div>
    </header>
  );
};

export default Header;