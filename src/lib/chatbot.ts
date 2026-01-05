const SITE_KNOWLEDGE = `
# TraceR2C - Enterprise Compliance Platform

## Company Overview
TraceR2C is an enterprise-grade compliance platform that streamlines supply chain compliance and precision promotions. We help businesses maintain regulatory compliance while optimizing their promotional strategies.

## Core Products
1. **ComplianceFlow Platform**: Automated compliance management system
2. **Clear Insight Analytics**: Advanced analytics for compliance tracking
3. **Target Promotion System**: Precision promotional campaign management

## Key Features
- **Real-time Compliance Monitoring**: Continuous tracking and alerts
- **Automated Documentation**: Streamlined compliance reporting
- **Supply Chain Visibility**: End-to-end supply chain tracking
- **Regulatory Updates**: Automatic updates for changing regulations
- **Integration Capabilities**: 15+ enterprise integrations including SAP, Oracle, Microsoft, AWS, Google, etc.

## Industry Solutions
- **Food Service**: FDA compliance, food safety tracking
- **Pharmaceuticals**: Drug compliance, regulatory reporting
- **Manufacturing**: Quality control, safety compliance
- **Retail**: Product compliance, promotional regulations
- **Logistics**: Transportation compliance, documentation
- **Construction**: Safety regulations, equipment compliance

## Security & Compliance
- **Enterprise-Grade Security**: Industry-leading protection
- **SAML/SSO Integration**: Secure single sign-on
- **256-bit Encryption**: End-to-end data protection
- **Data Residency Options**: Choose your data location
- **Role-based Access Control**: Granular permissions
- **Audit Trails**: Complete activity logging

## Pricing Plans
1. **Starter**: $99/month - Small teams, basic compliance features
2. **Professional**: $299/month - Mid-size businesses, advanced analytics
3. **Enterprise**: Custom pricing - Large organizations, full customization

## Company Information
- **Mission**: Simplify compliance while maximizing promotional effectiveness
- **Founded**: 2020
- **Headquarters**: United States
- **Team**: 50+ compliance and technology experts
- **Customers**: 500+ enterprises globally

## Contact & Support
- **Sales**: Schedule a demo or contact sales team
- **Support**: 24/7 enterprise support available
- **Free Trial**: 14-day free trial available
- **Implementation**: Dedicated onboarding specialists

## Integration Partners
AWS, Microsoft Azure, Google Cloud, Oracle, SAP, NetSuite, HubSpot, Okta, DocuSign, Dropbox, Square, Toast, Zoho, and more.
`;

export interface ChatResponse {
  message: string;
  cards?: Array<{
    title: string;
    description: string;
    features?: string[];
    price?: string;
    highlight?: boolean;
  }>;
  actions?: Array<{
    type: 'link' | 'button' | 'contact';
    label: string;
    url?: string;
  }>;
}

export async function getChatResponse(message: string, context: string): Promise<ChatResponse> {
  const systemPrompt = `You are the TraceR2C AI Assistant, an expert on the TraceR2C enterprise compliance platform. 

CRITICAL INSTRUCTIONS:
- NEVER write long paragraphs - break information into bullet points, lists, or short sentences
- Keep responses concise and scannable (2-3 sentences max per point)
- Use structured data when showing features, pricing, or comparisons
- Always be helpful and professional
- Focus on the user's current page context when relevant

KNOWLEDGE BASE:
${SITE_KNOWLEDGE}

CURRENT PAGE CONTEXT: ${context}

RESPONSE RULES:
1. For pricing questions: Mention all 3 plans with key differences
2. For feature questions: Use bullet points, max 4-5 features
3. For security questions: Mention SAML/SSO, encryption
4. For integration questions: List key partners (SAP, Oracle, AWS, etc.)
5. For demo/contact: Always encourage scheduling a demo
6. Keep responses under 150 words total

IMPORTANT: Respond in plain text only. Do NOT use JSON format in your response.`;

  try {
    // For now, we'll simulate the API call since we can't make external API calls in this environment
    // In a real implementation, this would call OpenAI's API
    const mockResponse = generateMockResponse(message, context);
    return mockResponse;
  } catch (error) {
    console.error('Chat error:', error);
    return {
      message: "I apologize, but I'm having trouble connecting right now. Please try again in a moment, or feel free to contact our support team directly.",
      actions: [
        {
          type: 'contact',
          label: 'Contact Support',
          url: 'https://www.tracer2c.com/contact'
        }
      ]
    };
  }
}

function generateMockResponse(message: string, context: string): ChatResponse {
  const lowerMessage = message.toLowerCase();

  // Pricing questions
  if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price')) {
    return {
      message: "Here are our flexible pricing plans designed for businesses of all sizes:",
      cards: [
        {
          title: "Starter",
          description: "Perfect for small teams getting started with compliance",
          features: ["Basic compliance tracking", "5 integrations", "Email support"],
          price: "$99/month"
        },
        {
          title: "Professional",
          description: "Advanced features for growing businesses",
          features: ["Advanced analytics", "15+ integrations", "Priority support", "Custom workflows"],
          price: "$299/month",
          highlight: true
        },
        {
          title: "Enterprise",
          description: "Full customization for large organizations",
          features: ["Unlimited integrations", "Dedicated support", "Custom compliance rules", "Advanced security"],
          price: "Custom pricing"
        }
      ],
      actions: [
        {
          type: 'contact',
          label: 'Schedule Demo',
          url: 'https://www.tracer2c.com/contact'
        },
        {
          type: 'link',
          label: 'View Full Pricing',
          url: 'https://www.tracer2c.com/pricing'
        }
      ]
    };
  }

  // Security questions
  if (lowerMessage.includes('security') || lowerMessage.includes('compliance') || lowerMessage.includes('soc')) {
    return {
      message: "TraceR2C meets the highest enterprise security standards:",
      cards: [
        {
          title: "Enterprise Security",
          description: "Comprehensive security and compliance features",
          features: [
            "Enterprise-Grade Security",
            "SAML/SSO Integration", 
            "256-bit End-to-End Encryption",
            "Data Residency Options",
            "Role-based Access Control",
            "Complete Audit Trails"
          ]
        }
      ],
      actions: [
        {
          type: 'link',
          label: 'Security Details',
          url: 'https://www.tracer2c.com/security'
        },
        {
          type: 'contact',
          label: 'Security Demo',
          url: 'https://www.tracer2c.com/contact'
        }
      ]
    };
  }

  // Integration questions
  if (lowerMessage.includes('integration') || lowerMessage.includes('connect')) {
    return {
      message: "TraceR2C integrates seamlessly with 15+ enterprise platforms:",
      cards: [
        {
          title: "Enterprise Integrations",
          description: "Connect with your existing business tools",
          features: [
            "ERP Systems: SAP, Oracle, NetSuite",
            "Cloud Platforms: AWS, Azure, Google Cloud",
            "Business Tools: HubSpot, DocuSign, Dropbox",
            "Authentication: Okta, SAML/SSO",
            "Custom API integrations available"
          ]
        }
      ],
      actions: [
        {
          type: 'link',
          label: 'View All Integrations',
          url: 'https://www.tracer2c.com/integrations'
        },
        {
          type: 'contact',
          label: 'Integration Demo',
          url: 'https://www.tracer2c.com/contact'
        }
      ]
    };
  }

  // Demo or contact requests
  if (lowerMessage.includes('demo') || lowerMessage.includes('contact') || lowerMessage.includes('talk')) {
    return {
      message: "I'd be happy to connect you with our team! Here are your options:",
      actions: [
        {
          type: 'contact',
          label: 'Schedule Demo',
          url: 'https://www.tracer2c.com/contact'
        },
        {
          type: 'link',
          label: 'Start Free Trial',
          url: 'https://www.tracer2c.com/pricing'
        },
        {
          type: 'link',
          label: 'Contact Sales',
          url: 'https://www.tracer2c.com/contact'
        }
      ]
    };
  }

  // What is TraceR2C
  if (lowerMessage.includes('what is tracer2c') || lowerMessage.includes('what is tracer') || lowerMessage.includes('about')) {
    return {
      message: "TraceR2C is an enterprise-grade compliance platform that streamlines supply chain compliance and precision promotions.",
      cards: [
        {
          title: "Core Capabilities",
          description: "Everything you need for modern compliance management",
          features: [
            "Real-time compliance monitoring",
            "Automated documentation & reporting", 
            "End-to-end supply chain visibility",
            "Precision promotional campaigns",
            "Regulatory update automation"
          ]
        }
      ],
      actions: [
        {
          type: 'link',
          label: 'Learn More',
          url: 'https://www.tracer2c.com/solutions'
        },
        {
          type: 'contact',
          label: 'See Demo',
          url: 'https://www.tracer2c.com/contact'
        }
      ]
    };
  }

  // Default response
  return {
    message: "I'm here to help you learn about TraceR2C's enterprise compliance platform. I can answer questions about our features, pricing, security, integrations, or help you get started with a demo.",
    actions: [
      {
        type: 'contact',
        label: 'Schedule Demo',
        url: 'https://www.tracer2c.com/contact'
      },
      {
        type: 'link',
        label: 'View Solutions',
        url: 'https://www.tracer2c.com/solutions'
      },
      {
        type: 'link',
        label: 'See Pricing',
        url: 'https://www.tracer2c.com/pricing'
      }
    ]
  };
}