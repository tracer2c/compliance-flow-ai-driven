import SEOHead from "@/components/seo/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import TrustStatsSection from "@/components/home/TrustStatsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import IndustrySection from "@/components/home/IndustrySection";
import SectionPin from "@/components/animations/SectionPin";
import { organizationSchema, softwareApplicationSchema, websiteSchema } from "@/lib/structuredData";

const Index = () => {
  const combinedSchema = [organizationSchema, softwareApplicationSchema, websiteSchema];

  return (
    <>
      <SEOHead
        title="TraceR2C - Supply Chain Compliance Software | Enterprise Platform"
        description="Enterprise supply chain compliance platform with AI-powered insights, automated documentation management, and enterprise-grade security. Free trial available."
        keywords="supply chain compliance software, enterprise compliance management, compliance automation platform, supply chain documentation management, enterprise security software"
        canonicalUrl="https://tracer2c.com"
        structuredData={combinedSchema}
      />
      <HeroSection />
      <SectionPin holdVh={50}>
        <TrustStatsSection />
      </SectionPin>
      <SectionPin holdVh={70}>
        <FeaturesSection />
      </SectionPin>
      {/* HowItWorks manages its own pinned scene */}
      <HowItWorksSection />
      <SectionPin holdVh={50}>
        <IndustrySection />
      </SectionPin>
    </>
  );
};

export default Index;
