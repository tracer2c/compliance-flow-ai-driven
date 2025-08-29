import { useParams, Link, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

// Blog post data - in a real app, this would come from a CMS or API
const blogPostsData = {
  "supply-chain-transparency": {
    title: "The Future of Supply Chain Transparency",
    excerpt: "How AI and blockchain are revolutionizing compliance tracking in complex supply chains",
    category: "Technology",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    author: "Sarah Chen",
    authorTitle: "VP of Product Strategy",
    fullContent: {
      introduction: "Supply chain transparency has evolved from a nice-to-have to a regulatory imperative. As global supply chains become increasingly complex, traditional tracking methods are proving inadequate. This article explores how artificial intelligence and blockchain technology are creating unprecedented levels of visibility and compliance assurance.",
      sections: [
        {
          title: "The Transparency Imperative",
          content: "Modern regulations like the EU's Corporate Sustainability Reporting Directive (CSRD) and various supply chain due diligence laws require companies to have detailed knowledge of their entire supply chain. This includes understanding working conditions, environmental impacts, and compliance status at every tier of suppliers.",
          keyPoints: [
            "Regulatory requirements for supply chain transparency are expanding globally",
            "Traditional methods cannot scale to modern supply chain complexity",
            "Non-compliance can result in significant financial and reputational damage",
            "Consumer demand for ethical sourcing is increasing"
          ]
        },
        {
          title: "AI-Powered Risk Assessment",
          content: "Artificial intelligence is transforming how companies assess and monitor supply chain risks. Machine learning algorithms can process vast amounts of data from multiple sources to identify potential compliance issues before they become problems.",
          keyPoints: [
            "Real-time analysis of supplier performance data",
            "Predictive modeling for compliance risk assessment",
            "Automated alerts for potential violations",
            "Natural language processing of regulatory documents"
          ]
        },
        {
          title: "Blockchain for Immutable Records",
          content: "Blockchain technology provides an immutable ledger of supply chain transactions and certifications. This creates an auditable trail that regulators and customers can trust, while enabling real-time verification of compliance claims.",
          keyPoints: [
            "Immutable record of product journey from source to consumer",
            "Smart contracts for automated compliance verification",
            "Reduced counterfeiting and fraud",
            "Enhanced trust between supply chain partners"
          ]
        },
        {
          title: "Implementation Roadmap",
          content: "Successfully implementing these technologies requires a phased approach that starts with high-risk suppliers and gradually expands coverage. The key is to balance technological capability with practical business needs.",
          keyPoints: [
            "Phase 1: Pilot with critical suppliers and high-risk categories",
            "Phase 2: Expand to tier-2 suppliers and integrate with existing systems",
            "Phase 3: Full deployment with automated compliance monitoring",
            "Phase 4: Integration with regulatory reporting systems"
          ]
        }
      ],
      conclusion: "The convergence of AI and blockchain is creating unprecedented opportunities for supply chain transparency. Organizations that invest in these technologies now will be better positioned to meet evolving regulatory requirements while building stronger, more resilient supply chains. The question is not whether to adopt these technologies, but how quickly they can be implemented effectively."
    }
  },
  "fsma-204": {
    title: "FSMA 204: What Food Companies Need to Know",
    excerpt: "Breaking down the new FDA traceability requirements and implementation timeline",
    category: "Regulations",
    readTime: "12 min read",
    date: "Dec 12, 2024",
    author: "Michael Rodriguez",
    authorTitle: "Regulatory Affairs Director",
    fullContent: {
      introduction: "The FDA's Food Safety Modernization Act (FSMA) Section 204 represents the most significant change to food traceability requirements in decades. With compliance required by January 2026, food companies must act now to implement comprehensive traceability systems. This article provides a complete guide to understanding and implementing FSMA 204 requirements.",
      sections: [
        {
          title: "Understanding FSMA 204 Requirements",
          content: "FSMA 204 requires companies to maintain detailed records for foods on the Food Traceability List (FTL). These records must enable rapid identification of the source of contamination during foodborne illness investigations.",
          keyPoints: [
            "Applies to foods on the FDA's Food Traceability List",
            "Requires tracking from production through retail sale",
            "Mandates electronic recordkeeping systems",
            "Establishes 24-hour information retrieval requirement"
          ]
        },
        {
          title: "Critical Tracking Events (CTEs)",
          content: "FSMA 204 defines specific Critical Tracking Events that must be recorded for each FTL food. These events create a comprehensive record of the food's journey through the supply chain.",
          keyPoints: [
            "Growing: Initial production of fresh produce",
            "Harvesting: Collection of produce from growing areas",
            "Cooling: First cooling of fresh produce",
            "Initial packing: First packaging for distribution",
            "Receiving: Acceptance of food shipments",
            "Transformation: Manufacturing that changes food identity",
            "Creating: Combining ingredients to create new products",
            "Shipping: Dispatching food to another location"
          ]
        },
        {
          title: "Key Data Elements (KDEs)",
          content: "For each CTE, companies must record specific Key Data Elements that enable precise tracking and rapid retrieval during investigations. The data requirements vary by event type and food category.",
          keyPoints: [
            "Lot codes and identification numbers",
            "Quantities and units of measure",
            "Location information for all parties",
            "Date and time stamps for all events",
            "Reference document numbers",
            "Transformation and ingredient information"
          ]
        },
        {
          title: "Implementation Strategy",
          content: "Successful FSMA 204 compliance requires a systematic approach that addresses technology, processes, and supply chain coordination. Companies should start planning immediately to meet the 2026 deadline.",
          keyPoints: [
            "Assess current traceability capabilities and gaps",
            "Select and implement compliant software systems",
            "Train staff on new procedures and requirements",
            "Coordinate with suppliers and customers on data sharing",
            "Establish testing and validation procedures",
            "Prepare for FDA inspections and investigations"
          ]
        }
      ],
      conclusion: "FSMA 204 compliance is not optional—it's a regulatory requirement that will fundamentally change how food companies track products. Companies that begin implementation now will have a competitive advantage and be better prepared for the inevitable foodborne illness investigations. The investment in traceability systems will pay dividends beyond compliance, improving operational efficiency and consumer trust."
    }
  },
  "compliance-culture": {
    title: "Building a Culture of Compliance",
    excerpt: "Strategies for getting buy-in across your organization for compliance initiatives",
    category: "Best Practices",
    readTime: "10 min read",
    date: "Dec 10, 2024",
    author: "Lisa Thompson",
    authorTitle: "Chief Compliance Officer",
    fullContent: {
      introduction: "Compliance is not just a legal requirement—it's a cultural imperative that must be embedded throughout the organization. Building a strong compliance culture requires more than policies and procedures; it demands leadership commitment, employee engagement, and continuous reinforcement. This article outlines proven strategies for creating a compliance-first culture.",
      sections: [
        {
          title: "Leadership Commitment is Essential",
          content: "A culture of compliance starts at the top. Leaders must demonstrate unwavering commitment to compliance through their actions, decisions, and communications. When employees see leaders prioritizing compliance over short-term profits, they understand its true importance.",
          keyPoints: [
            "CEO and C-suite must visibly champion compliance initiatives",
            "Compliance considerations should influence all major business decisions",
            "Leaders must hold themselves accountable to the same standards",
            "Regular communication about compliance successes and failures"
          ]
        },
        {
          title: "Make Compliance Personal and Relevant",
          content: "Employees engage with compliance when they understand how it relates to their specific role and the broader organizational mission. Generic compliance training fails; personalized, role-specific guidance succeeds.",
          keyPoints: [
            "Develop role-specific compliance training programs",
            "Use real examples relevant to employee responsibilities",
            "Connect compliance to customer safety and company reputation",
            "Show how compliance failures impact real people and communities"
          ]
        },
        {
          title: "Embed Compliance in Daily Operations",
          content: "Compliance cannot be an afterthought or separate activity. It must be integrated into standard operating procedures, decision-making processes, and performance metrics. When compliance becomes part of how work gets done, it becomes second nature.",
          keyPoints: [
            "Integrate compliance checkpoints into standard processes",
            "Include compliance metrics in performance evaluations",
            "Design systems that make compliance the easy choice",
            "Create decision-making frameworks that prioritize compliance"
          ]
        },
        {
          title: "Recognize and Reward Compliance Excellence",
          content: "What gets recognized gets repeated. Organizations must celebrate compliance successes, recognize employees who demonstrate compliance leadership, and create positive reinforcement for compliant behavior.",
          keyPoints: [
            "Establish compliance recognition programs",
            "Share compliance success stories across the organization",
            "Include compliance achievements in promotion criteria",
            "Create peer recognition systems for compliance excellence"
          ]
        },
        {
          title: "Learn from Failures Without Fear",
          content: "A mature compliance culture treats failures as learning opportunities rather than blame opportunities. When employees feel safe reporting compliance concerns or admitting mistakes, problems get solved before they become crises.",
          keyPoints: [
            "Establish anonymous reporting mechanisms",
            "Conduct blameless post-mortems on compliance failures",
            "Share lessons learned from compliance incidents",
            "Protect whistleblowers and encourage speak-up culture"
          ]
        }
      ],
      conclusion: "Building a culture of compliance is a long-term investment that pays dividends in reduced risk, improved reputation, and better business outcomes. It requires consistent effort, authentic leadership, and a commitment to making compliance everyone's responsibility. Organizations that successfully build compliance cultures don't just avoid problems—they create competitive advantages through superior operational excellence and stakeholder trust."
    }
  },
  "automated-document-roi": {
    title: "ROI of Automated Document Management",
    excerpt: "Quantifying the business impact of digitizing your compliance workflows",
    category: "Business Impact",
    readTime: "15 min read",
    date: "Dec 8, 2024",
    author: "David Park",
    authorTitle: "VP of Operations",
    fullContent: {
      introduction: "Many organizations view compliance document management as a necessary cost rather than a value-creating investment. However, automated document management systems deliver quantifiable returns that often exceed initial investments within the first year. This article provides a framework for calculating and maximizing the ROI of compliance automation.",
      sections: [
        {
          title: "Hidden Costs of Manual Document Management",
          content: "Before calculating automation ROI, organizations must understand the true cost of manual processes. These costs extend far beyond staff time to include compliance risks, inefficiencies, and opportunity costs.",
          keyPoints: [
            "Average employee spends 30% of time searching for documents",
            "Manual processes increase error rates by 300-400%",
            "Document recreations cost $25-50 per document",
            "Audit preparation requires 2-3x more resources with manual systems",
            "Regulatory penalties from document failures average $2.8M per incident"
          ]
        },
        {
          title: "Direct Cost Savings from Automation",
          content: "Automated document management delivers immediate, measurable cost savings across multiple operational areas. These direct savings are typically the easiest to quantify and justify.",
          keyPoints: [
            "75% reduction in document search time",
            "90% faster document approval processes",
            "85% reduction in document storage costs",
            "60% decrease in audit preparation time",
            "50% reduction in compliance staff overtime"
          ]
        },
        {
          title: "Revenue Protection and Enhancement",
          content: "Beyond cost savings, automated systems protect and enhance revenue by preventing compliance failures, accelerating product launches, and improving customer satisfaction.",
          keyPoints: [
            "Prevent regulatory penalties and fines",
            "Accelerate product time-to-market by 25-40%",
            "Improve customer satisfaction through faster service",
            "Enable expansion into new regulated markets",
            "Reduce business interruption from compliance issues"
          ]
        },
        {
          title: "ROI Calculation Framework",
          content: "A comprehensive ROI calculation should include both hard and soft benefits over a 3-5 year timeframe. Use conservative estimates and validate assumptions with pilot programs.",
          keyPoints: [
            "Calculate annual labor cost savings",
            "Estimate compliance risk reduction value",
            "Quantify process efficiency improvements",
            "Include technology and implementation costs",
            "Factor in ongoing maintenance and training",
            "Apply appropriate discount rates for multi-year analysis"
          ]
        },
        {
          title: "Maximizing Automation ROI",
          content: "The highest ROI comes from strategic implementation that addresses the most valuable use cases first and builds comprehensive capabilities over time.",
          keyPoints: [
            "Start with highest-volume, most error-prone processes",
            "Integrate with existing business systems",
            "Focus on processes with highest compliance risk",
            "Include change management and training programs",
            "Establish metrics and monitoring systems",
            "Plan for continuous improvement and expansion"
          ]
        }
      ],
      conclusion: "The ROI of automated document management typically ranges from 200-500% over three years, with payback periods of 6-18 months. Organizations that take a strategic approach to implementation and focus on high-value use cases see even better returns. The question is not whether automation delivers ROI, but how quickly organizations can capture these benefits while improving compliance outcomes."
    }
  }
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !blogPostsData[slug as keyof typeof blogPostsData]) {
    return <Navigate to="/resources" replace />;
  }

  const post = blogPostsData[slug as keyof typeof blogPostsData];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <Link to="/resources" className="inline-flex items-center text-white hover:text-teal-300 transition-colors mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Resources
          </Link>
          <div className="max-w-4xl">
            <Badge className="mb-4 bg-white/10 text-white border-white/20">
              {post.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <div>
                By {post.author}, {post.authorTitle}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                {post.fullContent.introduction}
              </p>
              
              {post.fullContent.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-lg leading-relaxed text-gray-700 mb-6">
                    {section.content}
                  </p>
                  {section.keyPoints && (
                    <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
                      <h4 className="font-semibold text-teal-900 mb-3">Key Points:</h4>
                      <ul className="space-y-2">
                        {section.keyPoints.map((point, pointIndex) => (
                          <li key={pointIndex} className="flex items-start gap-3 text-teal-800">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-12 p-8 bg-gradient-to-r from-teal-50 to-green-50 rounded-lg border border-teal-200">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Conclusion</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  {post.fullContent.conclusion}
                </p>
              </div>
            </article>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-navy-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Compliance?</h3>
                <p className="text-gray-300 mb-6">
                  Discover how our platform can help you implement the strategies discussed in this article.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    Schedule a Demo
                  </Button>
                  <Link to="/resources">
                    <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy-900">
                      Explore More Resources
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;