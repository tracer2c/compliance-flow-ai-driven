import { Link } from "react-router-dom";
import { 
  FileText, 
  Target, 
  BarChart3, 
  Shield, 
  Plug, 
  DollarSign, 
  BookOpen, 
  Building,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Twitter
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "ComplianceFlow", href: "/products/complianceflow", icon: FileText },
        { name: "Target Promotion System", href: "/products/promotions", icon: Target },
        { name: "Clear Insight", href: "/products/analytics", icon: BarChart3 }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Food Service", href: "/solutions/food-service", icon: null },
        { name: "Pharmaceuticals", href: "/solutions/pharma", icon: null },
        { name: "Manufacturing", href: "/solutions/manufacturing", icon: null },
        { name: "Retail", href: "/solutions/retail", icon: null },
        { name: "Logistics", href: "/solutions/logistics", icon: null },
        { name: "Construction", href: "/solutions/construction", icon: null }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Security", href: "/security", icon: Shield },
        { name: "Integrations", href: "/integrations", icon: Plug },
        { name: "Pricing", href: "/pricing", icon: DollarSign },
        { name: "Resources", href: "/resources", icon: BookOpen },
        { name: "About Us", href: "/company", icon: Building },
        { name: "Contact", href: "/contact", icon: null }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/resources/blog", icon: null },
        { name: "Guides", href: "/resources/guides", icon: null },
        { name: "Checklists", href: "/resources/checklists", icon: null },
        { name: "Case Studies", href: "/resources/case-studies", icon: null },
        { name: "API Documentation", href: "/resources/api-docs", icon: null },
        { name: "Support", href: "/support", icon: null }
      ]
    }
  ];

  return (
    <footer className="bg-navy-950 text-white">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-gradient-accent rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">T</span>
                </div>
                <span className="font-display font-bold text-xl">TraceR2C</span>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Make compliance operational, measurable, and proactive across your entire supply chain.
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-teal-400" />
                  <span>Auburn, Alabama, United States</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4 text-teal-400" />
                  <span>contact@tracer2c.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4 text-teal-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>

              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/company/tracer2c" 
                  className="p-2 bg-navy-800 rounded-lg hover:bg-navy-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-gray-300" />
                </a>
                <a 
                  href="https://twitter.com/tracer2c" 
                  className="p-2 bg-navy-800 rounded-lg hover:bg-navy-700 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5 text-gray-300" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h3 className="font-display font-semibold text-lg text-white">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        to={link.href}
                        className="text-gray-300 hover:text-teal-400 transition-colors flex items-center space-x-2"
                      >
                        {link.icon && <link.icon className="h-4 w-4" />}
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-navy-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300 text-sm">SOC 2 Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300 text-sm">SSO/SAML Ready</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300 text-sm">End-to-End Encryption</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-teal-400" />
                <span className="text-gray-300 text-sm">Data Residency Controls</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-navy-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} ComplianceFlow by TraceR2C LLC. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-teal-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;