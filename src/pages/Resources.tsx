import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { 
  ArrowRight, 
  BookOpen, 
  Download, 
  FileText, 
  Search,
  Clock,
  Star,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { useState } from "react";

const Resources = () => {
  const [expandedContent, setExpandedContent] = useState<string | null>(null);

  const featuredContent = [
    {
      type: "Guide",
      title: "Audit-Ready in 30 Days",
      description: "Complete step-by-step guide to achieving audit readiness with automated compliance workflows",
      readTime: "15 min read",
      category: "Implementation",
      featured: true,
      fullContent: {
        introduction: "In today's regulatory environment, being audit-ready isn't just a requirement—it's a competitive advantage. This comprehensive guide walks you through a proven 30-day methodology to transform your compliance posture from reactive to proactive.",
        sections: [
          {
            title: "Week 1: Foundation Assessment",
            content: "Begin with a thorough assessment of your current compliance state. Document all existing processes, identify gaps, and establish baseline metrics. This includes mapping your data flows, understanding regulatory touchpoints, and cataloging existing documentation.",
            steps: [
              "Conduct compliance maturity assessment",
              "Map current documentation and processes",
              "Identify critical compliance gaps",
              "Establish audit readiness baseline metrics"
            ]
          },
          {
            title: "Week 2: Process Standardization",
            content: "Standardize and document all compliance-critical processes. Create standard operating procedures (SOPs) for every compliance touchpoint, establish clear ownership, and implement version control for all documentation.",
            steps: [
              "Develop standardized compliance SOPs",
              "Assign process owners and responsibilities",
              "Implement document version control",
              "Create compliance workflow diagrams"
            ]
          },
          {
            title: "Week 3: Technology Implementation",
            content: "Deploy automated compliance tools and integrate them with existing systems. Focus on automating routine tasks, establishing real-time monitoring, and creating audit trails for all compliance activities.",
            steps: [
              "Deploy compliance automation tools",
              "Integrate with existing business systems",
              "Establish automated monitoring alerts",
              "Create comprehensive audit trails"
            ]
          },
          {
            title: "Week 4: Testing and Refinement",
            content: "Conduct mock audits, test all processes under simulated conditions, and refine based on findings. This final week ensures everything works seamlessly when real auditors arrive.",
            steps: [
              "Conduct internal mock audits",
              "Test all compliance processes",
              "Refine based on testing results",
              "Prepare audit response protocols"
            ]
          }
        ],
        conclusion: "Following this 30-day roadmap will transform your organization from audit-anxious to audit-ready. The key is consistent execution and continuous improvement. Remember, audit readiness is not a destination—it's an ongoing journey of operational excellence."
      }
    },
    {
      type: "Whitepaper", 
      title: "Global Data Residency for Compliance Teams",
      description: "Navigate international data protection requirements with region-specific compliance strategies",
      readTime: "25 min read", 
      category: "Compliance",
      featured: true,
      fullContent: {
        introduction: "As businesses expand globally, navigating data residency requirements becomes increasingly complex. This whitepaper provides a comprehensive framework for compliance teams to understand, implement, and manage data residency requirements across multiple jurisdictions.",
        sections: [
          {
            title: "Understanding Data Residency Requirements",
            content: "Data residency laws vary significantly across regions, each with unique requirements for where data must be stored, how it can be processed, and under what circumstances it can cross borders. Understanding these nuances is critical for global compliance.",
            steps: [
              "Map all applicable data protection regulations by region",
              "Identify specific residency requirements for each jurisdiction",
              "Understand cross-border data transfer restrictions",
              "Document regulatory authorities and reporting requirements"
            ]
          },
          {
            title: "Regional Compliance Frameworks",
            content: "Different regions have developed distinct approaches to data protection. The EU's GDPR emphasizes individual privacy rights, while China's PIPL focuses on national security. Understanding these philosophical differences helps shape compliance strategies.",
            steps: [
              "GDPR compliance for European operations",
              "CCPA and state-level requirements in the US",
              "PIPL and cybersecurity law compliance in China",
              "Emerging regulations in APAC and LATAM regions"
            ]
          },
          {
            title: "Implementation Strategy",
            content: "Successful data residency compliance requires a multi-layered approach combining technology, processes, and governance. This includes selecting appropriate cloud providers, implementing data classification, and establishing clear data handling procedures.",
            steps: [
              "Select compliant cloud infrastructure providers",
              "Implement data classification and labeling",
              "Establish data handling and retention procedures",
              "Create incident response procedures for data breaches"
            ]
          },
          {
            title: "Ongoing Compliance Management",
            content: "Data residency compliance is not a one-time project but an ongoing operational requirement. This includes regular audits, staying current with regulatory changes, and maintaining documentation for regulatory authorities.",
            steps: [
              "Establish regular compliance auditing procedures",
              "Implement regulatory change management processes",
              "Maintain comprehensive compliance documentation",
              "Prepare for regulatory examinations and audits"
            ]
          }
        ],
        conclusion: "Global data residency compliance requires a strategic, well-coordinated approach that balances regulatory requirements with business objectives. Organizations that invest in comprehensive compliance frameworks will be better positioned to expand globally while maintaining regulatory compliance."
      }
    },
    {
      type: "Case Study",
      title: "Measuring Incrementality for Promotions in Regulated Retail",
      description: "How a major retailer achieved 40% improvement in promotion ROI while maintaining compliance",
      readTime: "12 min read",
      category: "Analytics",
      featured: true,
      fullContent: {
        introduction: "A Fortune 500 retail chain faced the challenge of optimizing promotional campaigns while adhering to strict regulatory requirements in multiple jurisdictions. This case study examines how they achieved significant ROI improvements through intelligent compliance-aware promotion management.",
        sections: [
          {
            title: "The Challenge",
            content: "The retailer operated in multiple countries with varying promotional regulations, price discrimination laws, and consumer protection requirements. Traditional promotion optimization ignored these constraints, leading to compliance violations and potential regulatory penalties.",
            steps: [
              "Multiple regulatory jurisdictions with different rules",
              "Complex price discrimination regulations",
              "Consumer protection law compliance requirements",
              "Need to maintain promotion effectiveness"
            ]
          },
          {
            title: "Solution Implementation",
            content: "The company implemented an intelligent promotion management system that incorporated regulatory constraints into the optimization algorithm. This ensured all promotional activities remained compliant while maximizing business impact.",
            steps: [
              "Integrated regulatory rules into promotion algorithms",
              "Implemented real-time compliance checking",
              "Created automated documentation for regulators",
              "Established performance monitoring and reporting"
            ]
          },
          {
            title: "Results and Impact",
            content: "The implementation delivered remarkable results, improving promotion ROI by 40% while achieving 100% regulatory compliance. The system also reduced manual compliance work by 75%, freeing up teams to focus on strategic initiatives.",
            steps: [
              "40% improvement in promotion ROI",
              "100% regulatory compliance maintained",
              "75% reduction in manual compliance work",
              "Zero regulatory violations or penalties"
            ]
          },
          {
            title: "Key Success Factors",
            content: "Success was driven by early involvement of compliance teams, comprehensive regulatory mapping, and investment in integrated technology solutions that treated compliance as a business enabler rather than a constraint.",
            steps: [
              "Early compliance team involvement in project planning",
              "Comprehensive regulatory requirement mapping",
              "Investment in integrated compliance technology",
              "Treating compliance as a business enabler"
            ]
          }
        ],
        conclusion: "This case demonstrates that compliance and business performance are not mutually exclusive. By intelligently integrating regulatory requirements into business processes, organizations can achieve superior outcomes while maintaining full compliance."
      }
    }
  ];

  const blogPosts = [
    {
      title: "The Future of Supply Chain Transparency",
      excerpt: "How AI and blockchain are revolutionizing compliance tracking in complex supply chains",
      category: "Technology",
      readTime: "8 min read",
      date: "Dec 15, 2024",
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
    {
      title: "FSMA 204: What Food Companies Need to Know",
      excerpt: "Breaking down the new FDA traceability requirements and implementation timeline",
      category: "Regulations",
      readTime: "12 min read", 
      date: "Dec 12, 2024",
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
    {
      title: "Building a Culture of Compliance",
      excerpt: "Strategies for getting buy-in across your organization for compliance initiatives",
      category: "Best Practices",
      readTime: "10 min read",
      date: "Dec 10, 2024",
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
    {
      title: "ROI of Automated Document Management", 
      excerpt: "Quantifying the business impact of digitizing your compliance workflows",
      category: "Business Impact",
      readTime: "15 min read",
      date: "Dec 8, 2024",
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
  ];

  const guides = [
    {
      title: "Complete Supplier Onboarding Checklist",
      description: "Comprehensive checklist for vetting and onboarding new suppliers with compliance requirements",
      type: "Interactive Checklist",
      pages: "8 pages",
      fullContent: {
        introduction: "Effective supplier onboarding is critical for maintaining compliance and reducing supply chain risk. This interactive checklist ensures no critical steps are missed in the vetting and onboarding process.",
        sections: [
          {
            title: "Pre-Qualification Assessment",
            checklist: [
              "✓ Verify business registration and legal standing",
              "✓ Confirm industry certifications and licenses",
              "✓ Review financial stability and credit reports",
              "✓ Assess compliance history and reputation",
              "✓ Evaluate capacity and capability to meet requirements",
              "✓ Confirm insurance coverage and bonding",
              "✓ Review sustainability and ESG practices"
            ]
          },
          {
            title: "Due Diligence Documentation",
            checklist: [
              "✓ Certificate of incorporation and business licenses",
              "✓ Tax identification and registration numbers",
              "✓ Industry-specific certifications (ISO, FDA, etc.)",
              "✓ Insurance certificates and coverage details",
              "✓ Financial statements (last 3 years)",
              "✓ Customer references and testimonials",
              "✓ Compliance policies and procedures",
              "✓ Quality management system documentation"
            ]
          },
          {
            title: "Risk Assessment and Scoring",
            checklist: [
              "✓ Geographic risk assessment (political, economic)",
              "✓ Industry risk evaluation (regulatory, market)",
              "✓ Financial risk scoring and monitoring setup",
              "✓ Operational risk assessment (capacity, quality)",
              "✓ Compliance risk evaluation and mitigation plans",
              "✓ Cybersecurity risk assessment",
              "✓ Overall supplier risk score calculation"
            ]
          },
          {
            title: "Contract and Legal Requirements",
            checklist: [
              "✓ Master service agreement execution",
              "✓ Compliance requirements documentation",
              "✓ Data protection and confidentiality agreements",
              "✓ Intellectual property protection clauses",
              "✓ Termination and dispute resolution procedures",
              "✓ Performance standards and SLA definitions",
              "✓ Audit rights and inspection procedures"
            ]
          },
          {
            title: "Onboarding and Integration",
            checklist: [
              "✓ System access provisioning and security setup",
              "✓ Communication protocols and contact lists",
              "✓ Training on company policies and procedures",
              "✓ Integration with procurement and ERP systems",
              "✓ Performance monitoring and reporting setup",
              "✓ Regular review and assessment scheduling",
              "✓ Feedback mechanisms and improvement processes"
            ]
          }
        ],
        conclusion: "This checklist ensures comprehensive supplier onboarding that protects your organization while enabling successful partnerships. Regular review and updates of this process are essential as regulations and business needs evolve."
      }
    },
    {
      title: "Multi-Region Compliance Playbook",
      description: "Navigate compliance requirements across different regions and jurisdictions",
      type: "Strategic Playbook", 
      pages: "24 pages",
      fullContent: {
        introduction: "Global operations require sophisticated compliance strategies that address varying regulatory requirements across jurisdictions. This playbook provides frameworks and methodologies for managing multi-regional compliance effectively.",
        sections: [
          {
            title: "Regulatory Landscape Mapping",
            content: "Understanding the regulatory environment is the foundation of effective multi-region compliance. This section provides frameworks for identifying, analyzing, and tracking regulatory requirements across jurisdictions.",
            actionItems: [
              "Create comprehensive regulatory inventory by region",
              "Establish regulatory change monitoring systems",
              "Map regulatory authorities and their jurisdictions",
              "Identify overlapping and conflicting requirements",
              "Develop regulatory impact assessment procedures"
            ]
          },
          {
            title: "Compliance Architecture Design",
            content: "Effective multi-region compliance requires thoughtful architecture that balances global consistency with local flexibility. This framework helps design scalable compliance systems.",
            actionItems: [
              "Define global compliance principles and standards",
              "Establish regional adaptation procedures",
              "Create compliance governance structures",
              "Design escalation and exception processes",
              "Implement compliance performance measurement"
            ]
          },
          {
            title: "Regional Implementation Strategies",
            content: "Each region requires tailored implementation approaches that respect local business culture while maintaining global compliance standards.",
            regions: [
              {
                name: "North America (US/Canada)",
                focus: "Federal vs. state/provincial requirements, industry-specific regulations",
                keyConsiderations: "Complex regulatory landscape, strong enforcement, litigation risk"
              },
              {
                name: "European Union",
                focus: "Harmonized regulations, data protection, sustainability requirements",
                keyConsiderations: "GDPR compliance, ESG reporting, national implementation variations"
              },
              {
                name: "Asia-Pacific",
                focus: "Diverse regulatory systems, rapid regulatory evolution, cultural sensitivity",
                keyConsiderations: "Language barriers, relationship-based compliance, government relations"
              },
              {
                name: "Latin America",
                focus: "Emerging regulatory frameworks, corruption risks, local partnerships",
                keyConsiderations: "Political instability, currency issues, local representation requirements"
              }
            ]
          },
          {
            title: "Cross-Border Data and Privacy",
            content: "Data flows across borders are subject to increasingly complex privacy and security regulations. This section addresses key considerations for global data compliance.",
            actionItems: [
              "Map data flows and cross-border transfers",
              "Implement appropriate data protection safeguards",
              "Establish data localization strategies where required",
              "Create privacy impact assessment procedures",
              "Develop breach notification and response plans"
            ]
          },
          {
            title: "Ongoing Compliance Management",
            content: "Multi-region compliance requires continuous monitoring, reporting, and improvement to remain effective and current.",
            actionItems: [
              "Establish regular compliance monitoring and reporting",
              "Create regulatory change management processes",
              "Implement continuous compliance training programs",
              "Develop compliance performance metrics and KPIs",
              "Plan regular compliance program reviews and updates"
            ]
          }
        ],
        conclusion: "Multi-region compliance is complex but manageable with the right frameworks and approaches. Success requires balancing global consistency with local flexibility, maintaining strong governance structures, and investing in continuous monitoring and improvement."
      }
    },
    {
      title: "Audit Preparation Workbook",
      description: "Interactive workbook to prepare your team for regulatory audits and inspections",
      type: "Interactive Workbook",
      pages: "16 pages",
      fullContent: {
        introduction: "Regulatory audits can be stressful and disruptive, but proper preparation can transform them into opportunities to demonstrate compliance excellence. This workbook provides structured preparation methodologies and tools.",
        sections: [
          {
            title: "Pre-Audit Planning (90 Days Before)",
            content: "Effective audit preparation begins months before auditors arrive. This phase focuses on assessment, gap remediation, and team preparation.",
            tasks: [
              "Conduct comprehensive self-assessment using regulator's criteria",
              "Identify and remediate compliance gaps",
              "Organize and digitize all relevant documentation",
              "Prepare document request response systems",
              "Establish audit team roles and responsibilities",
              "Create audit logistics and communication plans"
            ],
            deliverables: [
              "Self-assessment report with gap analysis",
              "Compliance gap remediation plan and timeline",
              "Organized document repository with index",
              "Audit team organization chart and contact list",
              "Audit logistics plan including space and technology needs"
            ]
          },
          {
            title: "Documentation and Evidence Preparation (60 Days Before)",
            content: "Auditors will request extensive documentation. Preparing comprehensive, well-organized evidence packages demonstrates professionalism and facilitates efficient audits.",
            tasks: [
              "Create comprehensive document inventory and index",
              "Prepare standardized evidence packages by topic area",
              "Develop document request tracking and response systems",
              "Prepare process flow diagrams and compliance narratives",
              "Create data extracts and analytical reports",
              "Prepare regulatory correspondence and filing histories"
            ],
            deliverables: [
              "Master document index with location references",
              "Evidence packages organized by regulatory requirement",
              "Process documentation with supporting evidence",
              "Data analytics and trend reports",
              "Complete regulatory filing and correspondence history"
            ]
          },
          {
            title: "Team Preparation and Training (30 Days Before)",
            content: "Audit success depends on team readiness. This phase focuses on training, role clarification, and communication preparation.",
            tasks: [
              "Conduct audit team training on roles and procedures",
              "Prepare key personnel for interview techniques",
              "Develop standard responses to common audit questions",
              "Create escalation procedures for complex issues",
              "Practice audit scenarios and mock interviews",
              "Establish communication protocols and message consistency"
            ],
            deliverables: [
              "Audit team training materials and records",
              "Interview preparation guides for key personnel",
              "Standard Q&A document for common audit topics",
              "Communication protocols and escalation procedures",
              "Mock audit results and improvement actions"
            ]
          },
          {
            title: "During the Audit",
            content: "Professional, organized audit management creates positive impressions and facilitates thorough, efficient examinations.",
            bestPractices: [
              "Maintain professional, cooperative demeanor throughout",
              "Provide requested information promptly and completely",
              "Ask clarifying questions when requests are unclear",
              "Document all audit activities and communications",
              "Address identified issues promptly and transparently",
              "Maintain regular communication with audit team leadership"
            ]
          },
          {
            title: "Post-Audit Follow-up",
            content: "The audit doesn't end when auditors leave. Effective follow-up ensures successful closure and continuous improvement.",
            tasks: [
              "Analyze audit findings and develop remediation plans",
              "Respond to audit report within required timeframes",
              "Implement corrective actions with appropriate monitoring",
              "Conduct post-audit lessons learned sessions",
              "Update compliance programs based on audit insights",
              "Prepare for follow-up examinations as needed"
            ]
          }
        ],
        conclusion: "Thorough audit preparation transforms regulatory examinations from stressful events into opportunities to demonstrate compliance excellence. Organizations that invest in systematic preparation consistently achieve better audit outcomes and stronger regulatory relationships."
      }
    },
    {
      title: "Document Retention Policy Template",
      description: "Customizable template for establishing document retention policies by industry",
      type: "Customizable Template",
      pages: "12 pages",
      fullContent: {
        introduction: "Effective document retention policies balance legal requirements, business needs, and storage costs. This template provides industry-specific frameworks that can be customized for your organization's unique requirements.",
        sections: [
          {
            title: "Policy Framework and Principles",
            content: "A well-designed retention policy is built on clear principles that guide decision-making and ensure consistent application across the organization.",
            principles: [
              "Legal compliance takes precedence over operational convenience",
              "Retention periods are based on the longest applicable requirement",
              "Electronic and physical documents are subject to the same requirements",
              "Regular review and updates reflect changing regulatory landscapes",
              "Secure destruction prevents unauthorized access to expired documents",
              "Litigation holds supersede standard retention schedules"
            ]
          },
          {
            title: "Industry-Specific Retention Schedules",
            content: "Different industries have unique regulatory requirements that drive retention period determination.",
            industries: [
              {
                name: "Financial Services",
                keyRegulators: "SEC, FINRA, OCC, FDIC",
                commonRetentionPeriods: [
                  "Customer account records: 6 years after account closure",
                  "Trading records: 3 years (readily accessible), 3 additional years (archived)",
                  "Anti-money laundering records: 5 years",
                  "Audit records: 7 years",
                  "Board minutes: Permanent"
                ]
              },
              {
                name: "Healthcare",
                keyRegulators: "HHS, FDA, CMS, State health departments",
                commonRetentionPeriods: [
                  "Patient medical records: 7 years (adults), longer for minors",
                  "Clinical trial records: 2 years after FDA approval or investigation end",
                  "HIPAA compliance records: 6 years",
                  "Employee health records: Duration of employment + 30 years",
                  "Adverse event reports: 10 years"
                ]
              },
              {
                name: "Manufacturing",
                keyRegulators: "OSHA, EPA, FDA, Industry-specific agencies",
                commonRetentionPeriods: [
                  "Quality control records: Life of product + 3 years",
                  "Environmental monitoring: 3-5 years (varies by pollutant)",
                  "Safety training records: Duration of employment + 1 year",
                  "Product liability records: 10 years after product discontinuation",
                  "Batch production records: 1 year after expiration date"
                ]
              },
              {
                name: "Food & Beverage",
                keyRegulators: "FDA, USDA, State agriculture departments",
                commonRetentionPeriods: [
                  "HACCP records: 2 years",
                  "Supplier verification records: 2 years",
                  "Traceability records: 2 years (soon to change under FSMA 204)",
                  "Product testing records: 2 years",
                  "Recall records: 2 years after recall completion"
                ]
              }
            ]
          },
          {
            title: "Document Categories and Classifications",
            content: "Effective retention policies organize documents into categories with clear retention requirements.",
            categories: [
              {
                name: "Corporate Governance",
                examples: "Articles of incorporation, bylaws, board minutes, stock records",
                typicalRetention: "Permanent or very long-term (50+ years)"
              },
              {
                name: "Financial Records",
                examples: "Tax returns, audit reports, general ledger, accounts payable/receivable",
                typicalRetention: "7 years (IRS requirement) plus applicable state/industry requirements"
              },
              {
                name: "Human Resources",
                examples: "Personnel files, payroll records, benefits administration, training records",
                typicalRetention: "Varies by record type, generally 3-7 years after employment ends"
              },
              {
                name: "Contracts and Legal",
                examples: "Customer contracts, supplier agreements, leases, litigation files",
                typicalRetention: "Duration of agreement plus 6-7 years for potential legal action"
              },
              {
                name: "Operational Records",
                examples: "Policies, procedures, training materials, correspondence",
                typicalRetention: "Varies by business need and regulatory requirements"
              }
            ]
          },
          {
            title: "Implementation and Compliance",
            content: "A retention policy is only effective if it's properly implemented, monitored, and enforced throughout the organization.",
            implementationSteps: [
              "Assign retention policy ownership and governance responsibilities",
              "Integrate retention requirements into document management systems",
              "Train employees on retention requirements and procedures",
              "Establish regular review and disposal procedures",
              "Implement litigation hold procedures that supersede normal retention",
              "Monitor compliance and address violations promptly",
              "Regularly review and update policy for regulatory changes"
            ]
          }
        ],
        conclusion: "A well-crafted document retention policy protects organizations from legal risk while managing storage costs and operational efficiency. Regular review and updates ensure continued effectiveness as business and regulatory environments evolve."
      }
    }
  ];

  const caseStudies = [
    {
      company: "Global Food Distributor",
      industry: "Food Service",
      challenge: "Manual processes causing 3-week audit preparation cycles",
      result: "Reduced audit prep to 3 days with 99% documentation accuracy",
      impact: "75% time savings, $2.3M annual cost reduction"
    },
    {
      company: "Pharmaceutical Manufacturer",
      industry: "Pharmaceuticals", 
      challenge: "Batch record management across 12 facilities",
      result: "Real-time batch tracking with automated compliance scoring",
      impact: "50% faster batch release, zero compliance violations"
    },
    {
      company: "Retail Chain",
      industry: "Retail",
      challenge: "Vendor compliance across 500+ suppliers",
      result: "Automated supplier scorecards and risk assessment",
      impact: "60% faster vendor onboarding, 85% reduction in compliance issues"
    }
  ];

  const webinars = [
    {
      title: "Compliance Automation: Beyond Basic Document Management",
      date: "January 18, 2025",
      time: "2:00 PM EST",
      speaker: "Sarah Chen, VP of Compliance"
    },
    {
      title: "Multi-Region Data Residency: A Compliance Perspective",
      date: "January 25, 2025", 
      time: "1:00 PM EST",
      speaker: "Michael Rodriguez, Solutions Architect"
    },
    {
      title: "ROI Measurement for Compliance Technology Investments",
      date: "February 1, 2025",
      time: "2:00 PM EST", 
      speaker: "Lisa Thompson, Customer Success Director"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Badge className="mb-6 bg-white/10 text-white border-white/20">
              Resource Center
            </Badge>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Learn. Implement.
              <span className="block bg-gradient-to-r from-teal-300 to-green-300 bg-clip-text text-transparent">
                Succeed.
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Comprehensive resources to help you master compliance automation, 
              implement best practices, and achieve operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input 
                  placeholder="Search resources..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 backdrop-blur-sm"
                />
              </div>
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-navy-900 mb-4">
              Featured Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and impactful resources to accelerate your compliance journey
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredContent.map((content, index) => (
              <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="bg-teal-100 text-teal-800">
                      {content.type}
                    </Badge>
                    <Star className="h-5 w-5 text-yellow-500" />
                  </div>
                  <CardTitle className="text-xl text-navy-900 group-hover:text-teal-700 transition-colors">
                    {content.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {content.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {content.readTime}
                    </div>
                    <span>{content.category}</span>
                  </div>
                  <Collapsible 
                    open={expandedContent === `featured-${index}`}
                    onOpenChange={(open) => setExpandedContent(open ? `featured-${index}` : null)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button className="w-full group-hover:bg-teal-600 transition-colors">
                        {expandedContent === `featured-${index}` ? (
                          <>
                            Close Article
                            <ChevronUp className="ml-2 h-4 w-4" />
                          </>
                        ) : (
                          <>
                            Read Full Article
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="prose prose-sm max-w-none text-gray-700">
                        <p className="text-base leading-relaxed mb-4">
                          {content.fullContent.introduction}
                        </p>
                        {content.fullContent.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className="mb-6">
                            <h4 className="text-lg font-semibold text-navy-900 mb-3">
                              {section.title}
                            </h4>
                            <p className="text-base leading-relaxed mb-3">
                              {section.content}
                            </p>
                            {section.steps && (
                              <ul className="list-disc list-inside space-y-1 mb-3">
                                {section.steps.map((step, stepIndex) => (
                                  <li key={stepIndex} className="text-sm text-gray-600">
                                    {step}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                        <div className="mt-6 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                          <p className="text-base leading-relaxed text-teal-800">
                            <strong>Conclusion:</strong> {content.fullContent.conclusion}
                          </p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="blog" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="blog" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Blog
              </TabsTrigger>
              <TabsTrigger value="guides" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Guides
              </TabsTrigger>
            </TabsList>

            <TabsContent value="blog">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-gray-500">{post.date}</span>
                      </div>
                      <CardTitle className="text-lg text-navy-900 group-hover:text-teal-700 transition-colors">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Collapsible 
                        open={expandedContent === `blog-${index}`}
                        onOpenChange={(open) => setExpandedContent(open ? `blog-${index}` : null)}
                      >
                        <CollapsibleTrigger asChild>
                          <Button variant="outline" size="sm" className="w-full">
                            {expandedContent === `blog-${index}` ? (
                              <>
                                Close Article
                                <ChevronUp className="ml-2 h-4 w-4" />
                              </>
                            ) : (
                              <>
                                Read Full Article
                                <ChevronDown className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-4">
                          <div className="prose prose-sm max-w-none text-gray-700">
                            <p className="text-base leading-relaxed mb-4">
                              {post.fullContent.introduction}
                            </p>
                            {post.fullContent.sections.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="mb-6">
                                <h4 className="text-lg font-semibold text-navy-900 mb-3">
                                  {section.title}
                                </h4>
                                <p className="text-base leading-relaxed mb-3">
                                  {section.content}
                                </p>
                                {section.keyPoints && (
                                  <ul className="list-disc list-inside space-y-1 mb-3">
                                    {section.keyPoints.map((point, pointIndex) => (
                                      <li key={pointIndex} className="text-sm text-gray-600">
                                        {point}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            ))}
                            <div className="mt-6 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                              <p className="text-base leading-relaxed text-teal-800">
                                <strong>Conclusion:</strong> {post.fullContent.conclusion}
                              </p>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="guides">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {guides.map((guide, index) => (
                  <Card key={index} className="enterprise-card hover:shadow-enterprise-lg transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="text-xs">
                          {guide.type}
                        </Badge>
                        <span className="text-xs text-gray-500">{guide.pages}</span>
                      </div>
                      <CardTitle className="text-lg text-navy-900 group-hover:text-teal-700 transition-colors">
                        {guide.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600">
                        {guide.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Collapsible 
                        open={expandedContent === `guide-${index}`}
                        onOpenChange={(open) => setExpandedContent(open ? `guide-${index}` : null)}
                      >
                        <CollapsibleTrigger asChild>
                          <Button className="w-full mb-4">
                            {expandedContent === `guide-${index}` ? (
                              <>
                                Close Guide
                                <ChevronUp className="ml-2 h-4 w-4" />
                              </>
                            ) : (
                              <>
                                View Full Guide
                                <ChevronDown className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="prose prose-sm max-w-none text-gray-700">
                            <p className="text-base leading-relaxed mb-4">
                              {guide.fullContent.introduction}
                            </p>
                            {guide.fullContent.sections.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="mb-6">
                                <h4 className="text-lg font-semibold text-navy-900 mb-3">
                                  {section.title}
                                </h4>
                                {section.content && (
                                  <p className="text-base leading-relaxed mb-3">
                                    {section.content}
                                  </p>
                                )}
                                {section.checklist && (
                                  <div className="space-y-2 mb-3">
                                    {section.checklist.map((item, itemIndex) => (
                                      <div key={itemIndex} className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                        {item}
                                      </div>
                                    ))}
                                  </div>
                                )}
                                {section.actionItems && (
                                  <ul className="list-disc list-inside space-y-1 mb-3">
                                    {section.actionItems.map((item, itemIndex) => (
                                      <li key={itemIndex} className="text-sm text-gray-600">
                                        {item}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                                {section.tasks && (
                                  <div className="mb-4">
                                    <h5 className="font-medium text-navy-800 mb-2">Tasks:</h5>
                                    <ul className="list-disc list-inside space-y-1 mb-3">
                                      {section.tasks.map((task, taskIndex) => (
                                        <li key={taskIndex} className="text-sm text-gray-600">
                                          {task}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                {section.deliverables && (
                                  <div className="mb-4">
                                    <h5 className="font-medium text-navy-800 mb-2">Deliverables:</h5>
                                    <ul className="list-disc list-inside space-y-1 mb-3">
                                      {section.deliverables.map((deliverable, delivIndex) => (
                                        <li key={delivIndex} className="text-sm text-gray-600">
                                          {deliverable}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                {section.bestPractices && (
                                  <div className="mb-4">
                                    <h5 className="font-medium text-navy-800 mb-2">Best Practices:</h5>
                                    <ul className="list-disc list-inside space-y-1 mb-3">
                                      {section.bestPractices.map((practice, practiceIndex) => (
                                        <li key={practiceIndex} className="text-sm text-gray-600">
                                          {practice}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </div>
                            ))}
                            <div className="mt-6 p-4 bg-teal-50 rounded-lg border-l-4 border-teal-500">
                              <p className="text-base leading-relaxed text-teal-800">
                                <strong>Conclusion:</strong> {guide.fullContent.conclusion}
                              </p>
                            </div>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                      <Button variant="outline" className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Download PDF Version
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Stay Ahead of Compliance Trends
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest compliance insights, regulatory updates, and best practices 
              delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email"
                className="bg-white/20 border-white/40 text-white placeholder:text-gray-300 backdrop-blur-sm"
              />
              <Button size="lg" className="bg-white text-navy-900 hover:bg-gray-100 font-semibold whitespace-nowrap">
                Subscribe
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;