import SEOHead from "@/components/seo/SEOHead";
import HeroSection from "@/components/home/HeroSection";
import TrustStatsSection from "@/components/home/TrustStatsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import IndustrySection from "@/components/home/IndustrySection";
import { organizationSchema, softwareApplicationSchema, websiteSchema } from "@/lib/structuredData";

const Index = () => {
  const combinedSchema = [organizationSchema, softwareApplicationSchema, websiteSchema];

  return (
    <>
      <SEOHead
        title="TraceR2C - Supply Chain Compliance Software | Enterprise Platform"
        description="Enterprise supply chain compliance platform with AI-powered insights, automated documentation management, and SOC 2 security. Free trial available."
        keywords="supply chain compliance software, enterprise compliance management, compliance automation platform, supply chain documentation management, SOC 2 compliant software"
        canonicalUrl="https://tracer2c.com"
        structuredData={combinedSchema}
      />
      <HeroSection />
      <TrustStatsSection />
      <FeaturesSection />
      <IndustrySection />
    </>
  );
};

export default Index;
