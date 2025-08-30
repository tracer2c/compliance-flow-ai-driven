import { Card, CardContent } from "@/components/ui/card";
import { faqSchema } from "@/lib/structuredData";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQ[];
  className?: string;
}

const FAQSection = ({ 
  title = "Frequently Asked Questions", 
  faqs, 
  className = "" 
}: FAQSectionProps) => {
  // Generate FAQ schema for the specific questions
  const pageSpecificFAQSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <script type="application/ld+json">
        {JSON.stringify(pageSpecificFAQSchema)}
      </script>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
            {title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="enterprise-card">
              <CardContent className="p-6">
                <h3 className="font-semibold text-navy-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;