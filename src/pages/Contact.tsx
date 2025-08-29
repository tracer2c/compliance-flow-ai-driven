import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  ArrowRight, 
  Mail, 
  Phone, 
  Clock, 
  Users, 
  DollarSign,
  Settings,
  MessageSquare
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    role: "",
    department: "",
    message: "",
    inquiryType: ""
  });

  const contactOptions = [
    {
      icon: DollarSign,
      title: "Sales",
      description: "Interested in ComplianceFlow? Let's discuss your compliance needs and find the right solution.",
      email: "sales@tracer2c.com",
      phone: "(334) 555-0100",
      hours: "Monday - Friday, 8 AM - 6 PM EST"
    },
    {
      icon: Settings,
      title: "Support",
      description: "Need help with your account or have technical questions? Our support team is here to help.",
      email: "support@tracer2c.com", 
      phone: "(334) 555-0200",
      hours: "24/7 for Enterprise customers"
    },
    {
      icon: Users,
      title: "Partnerships",
      description: "Explore integration opportunities, channel partnerships, or strategic alliances.",
      email: "partnerships@tracer2c.com",
      phone: "(334) 555-0300", 
      hours: "Monday - Friday, 9 AM - 5 PM EST"
    }
  ];


  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's Talk About Your
              <span className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
                Compliance Needs
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Ready to streamline your compliance operations? Our team is here to help you 
              transform your documentation workflows and achieve audit readiness.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              How Can We Help You?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to reach us based on your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300 text-center group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <option.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-navy-900">{option.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {option.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                      <Mail className="h-4 w-4 text-teal-600" />
                      <a href={`mailto:${option.email}`} className="hover:text-teal-600 transition-colors">
                        {option.email}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                      <Phone className="h-4 w-4 text-teal-600" />
                      <a href={`tel:${option.phone}`} className="hover:text-teal-600 transition-colors">
                        {option.phone}
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                      <Clock className="h-4 w-4 text-teal-600" />
                      {option.hours}
                    </div>
                  </div>
                  <Button className="w-full">
                    Contact {option.title}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
                Send Us a Message
              </h2>
              <p className="text-xl text-gray-600">
                Fill out the form below and we'll get back to you within 24 hours
              </p>
            </div>

            <Card className="enterprise-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Company & Contact */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company *</Label>
                      <Input 
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Work Email *</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  {/* Phone & Role */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Role</Label>
                      <Select value={formData.role} onValueChange={(value) => handleInputChange("role", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="compliance-manager">Compliance Manager</SelectItem>
                          <SelectItem value="operations-director">Operations Director</SelectItem>
                          <SelectItem value="quality-assurance">Quality Assurance</SelectItem>
                          <SelectItem value="it-director">IT Director</SelectItem>
                          <SelectItem value="procurement">Procurement</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <Label htmlFor="inquiryType">What can we help you with? *</Label>
                    <Select 
                      value={formData.inquiryType} 
                      onValueChange={(value) => handleInputChange("inquiryType", value)}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sales">Schedule a Demo</SelectItem>
                        <SelectItem value="pricing">Pricing Information</SelectItem>
                        <SelectItem value="integration">Integration Questions</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      placeholder="Tell us more about your compliance needs and how we can help..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center">
                    <Button type="submit" size="lg" className="px-12">
                      <MessageSquare className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;