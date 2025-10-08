import SEOHead from "@/components/seo/SEOHead";

const KnowMore = () => {
  return (
    <>
      <SEOHead
        title="Know More | TraceR2C"
        description="Know More about how TraceR2C works. Simple overview page."
        keywords="know more, how it works, TraceR2C overview"
        canonicalUrl="https://tracer2c.com/know-more"
      />
      <main className="min-h-[60vh] bg-navy-950">
        <section className="container mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Know More</h1>
          <p className="text-lg text-navy-200">hello</p>
        </section>
      </main>
    </>
  );
};

export default KnowMore;
