import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, BarChart3, Users, Zap, TrendingUp, Lock, Globe, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [complianceScore, setComplianceScore] = useState(72);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">T</span>
            </div>
            <span className="font-semibold text-slate-900">TraceR2C</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#why" className="text-sm text-slate-600 hover:text-slate-900 transition">Why TraceR2C</a>
            <a href="#product" className="text-sm text-slate-600 hover:text-slate-900 transition">Product</a>
            <a href="#outcomes" className="text-sm text-slate-600 hover:text-slate-900 transition">Outcomes</a>
            <a href="#trust" className="text-sm text-slate-600 hover:text-slate-900 transition">Trust</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">Request Demo</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 -z-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 -z-10" />
        
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight" style={{ fontFamily: 'Sora, sans-serif' }}>
                  Make compliance operational, measurable, and proactive.
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  TraceR2C turns reactive documentation into real-time compliance health and proactive risk control across your supply chain.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white gap-2">
                  Request a Demo <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-300 text-slate-900 hover:bg-slate-50">
                  See How It Works
                </Button>
              </div>

              {/* Trust Layer */}
              <div className="pt-8 space-y-4">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Built for regulated industries</p>
                <div className="flex flex-wrap gap-3">
                  {['SOC2 Type II', 'SSO/SAML', 'Audit Logs', 'RBAC'].map((badge) => (
                    <div key={badge} className="px-3 py-1.5 bg-slate-100 text-slate-700 text-xs font-medium rounded-full border border-slate-200">
                      {badge}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Food & Beverage', 'Pharma', 'Manufacturing'].map((industry) => (
                    <div key={industry} className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200">
                      {industry}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Compliance Health Dashboard</h3>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-end gap-2">
                      <div className="text-3xl font-bold">{complianceScore}%</div>
                      <div className="text-sm text-slate-400">Compliance Score</div>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-full transition-all duration-500"
                        style={{ width: `${complianceScore}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700">
                    <div>
                      <div className="text-2xl font-bold">24</div>
                      <div className="text-xs text-slate-400">Active Suppliers</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">5</div>
                      <div className="text-xs text-slate-400">Expiring Soon</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-xs text-slate-400">Risk Alerts</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold">98%</div>
                      <div className="text-xs text-slate-400">Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-20 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Why we exist</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">The compliance landscape is broken. Manual processes, scattered data, and reactive risk management cost enterprises millions.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: AlertCircle, title: "Regulatory complexity is increasing", desc: "New standards emerge constantly. Staying compliant requires real-time visibility." },
              { icon: Zap, title: "Manual processes create risk", desc: "Spreadsheets and email chains hide gaps. Compliance incidents are preventable." },
              { icon: TrendingUp, title: "Teams need real-time visibility", desc: "Compliance health should be measurable, not binary. Proactive beats reactive." },
              { icon: Lock, title: "Tech should reduce burden", desc: "Your compliance platform should integrate seamlessly, not add complexity." }
            ].map((item, i) => (
              <div key={i} className="group p-6 bg-white rounded-xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                <item.icon className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>A unified compliance operating system</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">Three core workflows. One platform. Complete supply chain compliance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                number: "01", 
                title: "Collect", 
                desc: "Automated requests, smart reminders, and supplier intake. Get documents faster.",
                items: ["Bulk requests", "Auto-reminders", "Supplier portal", "Real-time tracking"]
              },
              { 
                number: "02", 
                title: "Verify", 
                desc: "Validation, approvals, expiry tracking, and immutable audit trails.",
                items: ["Auto-validation", "Approval workflows", "Expiry alerts", "Audit logs"]
              },
              { 
                number: "03", 
                title: "Control", 
                desc: "Risk scoring, alerts, compliance health, and actionable reporting.",
                items: ["Risk scoring", "Health metrics", "Compliance alerts", "Reports"]
              }
            ].map((workflow, i) => (
              <div key={i} className="relative">
                <div className="absolute top-0 left-0 text-6xl font-bold text-blue-100 opacity-50">{workflow.number}</div>
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-bold text-slate-900">{workflow.title}</h3>
                  <p className="text-slate-600">{workflow.desc}</p>
                  <ul className="space-y-2">
                    {workflow.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section id="outcomes" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>Quantifiable outcomes</h2>
            <p className="text-lg text-blue-100">Enterprise buyers demand proof. Here's what TraceR2C delivers.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: "75%", label: "Reduction in compliance chasing" },
              { metric: "10 days", label: "Faster audit prep time" },
              { metric: "100%", label: "Prevention of expired documents" },
              { metric: "1 source", label: "Of truth for all compliance data" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold mb-2">{item.metric}</div>
                <p className="text-blue-100">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Health Section */}
      <section className="py-20 bg-slate-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>The Compliance Health Model</h2>
            <p className="text-lg text-slate-600 mb-8">Compliance is no longer binary (have doc / don't have doc). It's measurable health.</p>

            <div className="bg-white p-8 rounded-xl border border-slate-200 space-y-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-slate-900">Compliance Health Score</span>
                  <span className="text-2xl font-bold text-blue-600">72%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                  <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-full" style={{ width: '72%' }} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Document Completeness</p>
                  <div className="text-2xl font-bold text-slate-900">85%</div>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Expiry Risk</p>
                  <div className="text-2xl font-bold text-orange-600">12 days</div>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Supplier Responsiveness</p>
                  <div className="text-2xl font-bold text-slate-900">68%</div>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Non-Conformance Signals</p>
                  <div className="text-2xl font-bold text-red-600">3 alerts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center" style={{ fontFamily: 'Sora, sans-serif' }}>Our Values</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: "Compliance-First Thinking", 
                desc: "Every feature is built with compliance outcomes in mind. Audit trails, structured workflows, repeatable controls." 
              },
              { 
                title: "Customer Obsession", 
                desc: "We listen to procurement and compliance teams. Your workflows shape our roadmap." 
              },
              { 
                title: "Global Perspective", 
                desc: "Multi-region support, localized compliance standards, and international supply chain complexity." 
              },
              { 
                title: "Operational Excellence", 
                desc: "Designed for speed and reliability. Enterprise-grade infrastructure, 99.9% uptime SLA." 
              }
            ].map((value, i) => (
              <div key={i} className="p-6 bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-2">{value.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section id="trust" className="py-20 bg-slate-900 text-white">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: 'Sora, sans-serif' }}>Enterprise Trust & Security</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <h3 className="font-semibold text-lg">Security</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• SSO/SAML authentication</li>
                <li>• Role-based access control</li>
                <li>• AES-256 encryption</li>
                <li>• Immutable audit logs</li>
              </ul>
            </div>

            <div className="space-y-4">
              <TrendingUp className="w-8 h-8 text-blue-400" />
              <h3 className="font-semibold text-lg">Reliability</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• 99.9% uptime SLA</li>
                <li>• Multi-region de
(Content truncated due to size limit. Use page ranges or line ranges to read remaining content)