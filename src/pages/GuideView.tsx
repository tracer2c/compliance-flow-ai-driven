import { useParams, Link, Navigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, CheckCircle, Clock } from "lucide-react";

// Guide data - in a real app, this would come from a CMS or API
const guidesData = {
  "supplier-onboarding": {
    title: "Complete Supplier Onboarding Checklist",
    description: "Comprehensive checklist for vetting and onboarding new suppliers with compliance requirements",
    type: "Interactive Checklist",
    pages: "8 pages",
    category: "Supplier Management",
    fullContent: {
      introduction: "Effective supplier onboarding is critical for maintaining compliance and reducing supply chain risk. This interactive checklist ensures no critical steps are missed in the vetting and onboarding process.",
      sections: [
        {
          title: "Pre-Qualification Assessment",
          checklist: [
            "Verify business registration and legal standing",
            "Confirm industry certifications and licenses",
            "Review financial stability and credit reports",
            "Assess compliance history and reputation",
            "Evaluate capacity and capability to meet requirements",
            "Confirm insurance coverage and bonding",
            "Review sustainability and ESG practices"
          ]
        },
        {
          title: "Due Diligence Documentation",
          checklist: [
            "Certificate of incorporation and business licenses",
            "Tax identification and registration numbers",
            "Industry-specific certifications (ISO, FDA, etc.)",
            "Insurance certificates and coverage details",
            "Financial statements (last 3 years)",
            "Customer references and testimonials",
            "Compliance policies and procedures",
            "Quality management system documentation"
          ]
        },
        {
          title: "Risk Assessment and Scoring",
          checklist: [
            "Geographic risk assessment (political, economic)",
            "Industry risk evaluation (regulatory, market)",
            "Financial risk scoring and monitoring setup",
            "Operational risk assessment (capacity, quality)",
            "Compliance risk evaluation and mitigation plans",
            "Cybersecurity risk assessment",
            "Overall supplier risk score calculation"
          ]
        },
        {
          title: "Contract and Legal Requirements",
          checklist: [
            "Master service agreement execution",
            "Compliance requirements documentation",
            "Data protection and confidentiality agreements",
            "Intellectual property protection clauses",
            "Termination and dispute resolution procedures",
            "Performance standards and SLA definitions",
            "Audit rights and inspection procedures"
          ]
        },
        {
          title: "Onboarding and Integration",
          checklist: [
            "System access provisioning and security setup",
            "Communication protocols and contact lists",
            "Training on company policies and procedures",
            "Integration with procurement and ERP systems",
            "Performance monitoring and reporting setup",
            "Regular review and assessment scheduling",
            "Feedback mechanisms and improvement processes"
          ]
        }
      ],
      conclusion: "This checklist ensures comprehensive supplier onboarding that protects your organization while enabling successful partnerships. Regular review and updates of this process are essential as regulations and business needs evolve."
    }
  },
  "multi-region-compliance": {
    title: "Multi-Region Compliance Playbook",
    description: "Navigate compliance requirements across different regions and jurisdictions",
    type: "Strategic Playbook",
    pages: "24 pages",
    category: "Global Compliance",
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
  "audit-preparation": {
    title: "Audit Preparation Workbook",
    description: "Interactive workbook to prepare your team for regulatory audits and inspections",
    type: "Interactive Workbook",
    pages: "16 pages",
    category: "Audit Readiness",
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
  "document-retention": {
    title: "Document Retention Policy Template",
    description: "Customizable template for establishing document retention policies by industry",
    type: "Customizable Template",
    pages: "12 pages",
    category: "Document Management",
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
};

const GuideView = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !guidesData[slug as keyof typeof guidesData]) {
    return <Navigate to="/resources" replace />;
  }

  const guide = guidesData[slug as keyof typeof guidesData];

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
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-white/10 text-white border-white/20">
                {guide.type}
              </Badge>
              <Badge className="bg-white/10 text-white border-white/20">
                {guide.category}
              </Badge>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              {guide.title}
            </h1>
            <p className="text-xl text-gray-200 mb-6">
              {guide.description}
            </p>
            <div className="flex items-center gap-6 text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {guide.pages}
              </div>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guide Content */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                {guide.fullContent.introduction}
              </p>
              
              {guide.fullContent.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-2xl font-bold text-navy-900 mb-4">
                    {section.title}
                  </h2>
                  {section.content && (
                    <p className="text-lg leading-relaxed text-gray-700 mb-6">
                      {section.content}
                    </p>
                  )}
                  
                  {/* Checklist Items */}
                  {section.checklist && (
                    <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-500 mb-6">
                      <h4 className="font-semibold text-teal-900 mb-4">Checklist Items:</h4>
                      <div className="space-y-3">
                        {section.checklist.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span className="text-teal-800">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Action Items */}
                  {section.actionItems && (
                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                      <h4 className="font-semibold text-blue-900 mb-4">Action Items:</h4>
                      <ul className="space-y-2">
                        {section.actionItems.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-blue-800">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Tasks and Deliverables */}
                  {section.tasks && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-navy-900 mb-3">Tasks:</h4>
                      <ul className="space-y-2 mb-4">
                        {section.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {section.deliverables && (
                    <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500 mb-6">
                      <h4 className="font-semibold text-green-900 mb-3">Deliverables:</h4>
                      <ul className="space-y-2">
                        {section.deliverables.map((deliverable, delivIndex) => (
                          <li key={delivIndex} className="flex items-start gap-3 text-green-800">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-1 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Best Practices */}
                  {section.bestPractices && (
                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500 mb-6">
                      <h4 className="font-semibold text-yellow-900 mb-3">Best Practices:</h4>
                      <ul className="space-y-2">
                        {section.bestPractices.map((practice, practiceIndex) => (
                          <li key={practiceIndex} className="flex items-start gap-3 text-yellow-800">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{practice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
              
              <div className="mt-12 p-8 bg-gradient-to-r from-teal-50 to-green-50 rounded-lg border border-teal-200">
                <h3 className="text-xl font-bold text-navy-900 mb-4">Summary</h3>
                <p className="text-lg leading-relaxed text-gray-700">
                  {guide.fullContent.conclusion}
                </p>
              </div>
            </article>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="bg-navy-900 text-white p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4">Need Help Implementing This Guide?</h3>
                <p className="text-gray-300 mb-6">
                  Our experts can help you customize and implement these frameworks for your organization.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download Complete Guide
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-900">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuideView;