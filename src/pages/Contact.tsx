import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Mail,
  Phone,
  Clock,
  Users,
  DollarSign,
  Settings,
  Send,
} from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionLabel from "@/components/shared/SectionLabel";
import BracketCard from "@/components/shared/BracketCard";
import ClassyIcon from "@/components/shared/ClassyIcon";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    role: "",
    inquiryType: "",
    message: "",
  });

  const channels = [
    {
      icon: DollarSign,
      tone: "teal" as const,
      title: "Sales",
      description:
        "Interested in ComplianceFlow? Let's discuss your compliance needs and find the right fit.",
      email: "contact@tracer2c.com",
      phone: "(229) 395-9837",
      hours: "Mon — Fri · 8 AM – 6 PM EST",
    },
    {
      icon: Settings,
      tone: "violet" as const,
      title: "Support",
      description:
        "Need help with your account or have technical questions? Our team is here for you.",
      email: "contact@tracer2c.com",
      phone: "(229) 395-9837",
      hours: "24 / 7 for Enterprise customers",
    },
    {
      icon: Users,
      tone: "amber" as const,
      title: "Partnerships",
      description:
        "Explore integration opportunities, channel partnerships, or strategic alliances.",
      email: "contact@tracer2c.com",
      phone: "(229) 395-9837",
      hours: "Mon — Fri · 9 AM – 5 PM EST",
    },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <PageHero
        eyebrow="Contact · 03"
        meta="RESPONSE < 24H"
        title="Let's talk about your"
        accent="compliance operations"
        subtitle="Ready to streamline how your team manages regulations, documents, and audits? Reach the right team directly."
      />

      {/* Channels */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <SectionLabel index="01">Direct channels</SectionLabel>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
              Reach the team that handles your request.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {channels.map((c, i) => (
              <BracketCard key={c.title} className="p-7 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <ClassyIcon icon={c.icon} tone={c.tone} size="md" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gray-400">
                    Channel 0{i + 1}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold text-navy-900 mb-2">
                  {c.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-1">
                  {c.description}
                </p>
                <div className="space-y-2.5 pt-5 border-t border-dashed border-gray-200">
                  <a
                    href={`mailto:${c.email}`}
                    className="flex items-center gap-2 text-sm text-navy-800 hover:text-teal-700 transition-colors"
                  >
                    <Mail className="h-4 w-4 text-teal-600" strokeWidth={1.75} />
                    {c.email}
                  </a>
                  <a
                    href={`tel:${c.phone}`}
                    className="flex items-center gap-2 text-sm text-navy-800 hover:text-teal-700 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-teal-600" strokeWidth={1.75} />
                    {c.phone}
                  </a>
                  <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gray-500">
                    <Clock className="h-3.5 w-3.5" strokeWidth={1.75} />
                    {c.hours}
                  </div>
                </div>
              </BracketCard>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-24 bg-gray-50/60 border-y border-gray-200/60">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-10 text-center">
              <SectionLabel index="02" className="justify-center">
                Send a message
              </SectionLabel>
              <h2 className="mt-4 font-display text-3xl md:text-4xl font-bold text-navy-900 tracking-tight">
                Tell us what you're working on.
              </h2>
              <p className="mt-4 text-gray-600">
                We respond within one business day — usually the same day.
              </p>
            </div>

            <BracketCard className="p-8 md:p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      First name *
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Last name *
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Company *
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Work email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role" className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                      Role
                    </Label>
                    <Select value={formData.role} onValueChange={(v) => handleInputChange("role", v)}>
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

                <div className="space-y-2">
                  <Label htmlFor="inquiryType" className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    What can we help with? *
                  </Label>
                  <Select
                    value={formData.inquiryType}
                    onValueChange={(v) => handleInputChange("inquiryType", v)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select inquiry type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Talk to sales</SelectItem>
                      <SelectItem value="pricing">Pricing information</SelectItem>
                      <SelectItem value="integration">Integration questions</SelectItem>
                      <SelectItem value="support">Technical support</SelectItem>
                      <SelectItem value="partnership">Partnership opportunities</SelectItem>
                      <SelectItem value="other">Something else</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your compliance setup and what you'd like to improve…"
                  />
                </div>

                <div className="pt-2 flex justify-end">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-navy-900 text-white hover:bg-navy-800 font-semibold px-8"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send message
                  </Button>
                </div>
              </form>
            </BracketCard>

            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-gray-400">
              Encrypted in transit · we never share your details
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
