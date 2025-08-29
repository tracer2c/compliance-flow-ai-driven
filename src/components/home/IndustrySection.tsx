const IndustrySection = () => {
  const industries = [
    { emoji: "🍽️", name: "Food Service", href: "/solutions/food-service" },
    { emoji: "💊", name: "Pharma", href: "/solutions/pharma" },
    { emoji: "🏭", name: "Manufacturing", href: "/solutions/manufacturing" },
    { emoji: "🛍️", name: "Retail", href: "/solutions/retail" },
    { emoji: "🚛", name: "Logistics", href: "/solutions/logistics" },
    { emoji: "🏗️", name: "Construction", href: "/solutions/construction" }
  ];

  return (
    <section className="py-16 bg-navy-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
            Serving Regulated Industries Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            TraceR2C's compliance platform is trusted across diverse industries 
            with complex regulatory requirements and multi-tier supply chains.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
          {industries.map((industry, index) => (
            <a
              key={index}
              href={industry.href}
              className="group flex flex-col items-center space-y-3 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {industry.emoji}
              </div>
              <span className="text-navy-700 font-medium group-hover:text-teal-600 transition-colors">
                {industry.name}
              </span>
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-500 text-sm">
            And many more industries requiring robust compliance management
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;