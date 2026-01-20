"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  Database,
  Brain,
  TrendingUp,
  Code,
  Award,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Users,
} from "lucide-react";
import { useEffect, useRef } from "react";

export default function DistrictLens() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <div
      ref={containerRef}
      className="bg-[#0a0e1a] text-gray-100 overflow-x-hidden"
    >
      {/* Hero Section */}
      <motion.section
        style={{ opacity, scale }}
        className="min-h-screen flex flex-col items-center justify-center relative px-6 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.div
            className="inline-block mb-6 px-4 py-2 bg-[#1b254e]/30 border border-[#b4b4b5]/20 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-[#b4b4b5] text-sm font-medium">
              Presidential AI Challenge 2026
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-[#b4b4b5] to-white bg-clip-text text-transparent">
            DistrictLens
          </h1>

          <p className="text-2xl md:text-3xl text-[#b4b4b5] mb-8 font-light">
            AI-Powered Public Education Spending Analysis
          </p>

          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12">
            Using machine learning to identify inefficiencies in school district
            spending and ensure every taxpayer dollar delivers maximum
            educational impact
          </p>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#b4b4b5]"
          >
            <ArrowDown size={32} />
          </motion.div>
        </motion.div>

        {/* Animated background grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#1b254e 1px, transparent 1px), linear-gradient(90deg, #1b254e 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </motion.section>

      {/* Section 1: Problem Identification */}
      <Section
        id="problem"
        icon={<AlertCircle className="w-12 h-12" />}
        title="The Problem"
        subtitle="Hidden Inefficiencies in Public Spending"
      >
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <StatCard
            number="$902M"
            label="Annual Spending"
            description="10 Wisconsin school districts"
          />
          <StatCard
            number="61,472"
            label="Students Served"
            description="Across analyzed districts"
          />
          <StatCard
            number="$14,737"
            label="Avg. Per-Pupil"
            description="Range: $12,131 - $16,391"
          />
          <StatCard
            number="?"
            label="Spending Efficiency"
            description="No easy way to compare"
          />
        </div>

        <div className="bg-[#1b254e]/20 border border-[#b4b4b5]/10 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            The Core Issue
          </h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            Wisconsin taxpayers invest nearly a billion dollars annually in just
            10 school districts, but there's no systematic, data-driven method
            to identify where money is being used efficiently and where spending
            doesn't align with educational outcomes.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Budget documents and district report cards exist separately, making
            it nearly impossible for communities, school boards, and
            policymakers to conduct meaningful side-by-side comparisons and
            identify districts that warrant deeper review.
          </p>
        </div>

        <div className="bg-gradient-to-r from-[#1b254e]/30 to-transparent border-l-4 border-[#b4b4b5] p-6 rounded-r-xl">
          <h4 className="text-xl font-semibold mb-3 text-white flex items-center gap-2">
            <Users className="w-6 h-6 text-[#b4b4b5]" />
            Local Impact: Wisconsin
          </h4>
          <p className="text-gray-300">
            In our home state, taxpayers deserve to know whether their education
            dollars are translating into student success. Without objective
            analysis tools, inefficiencies remain hidden and opportunities for
            improvement go unnoticed.
          </p>
        </div>
      </Section>

      {/* Section 2: Relevance to Administration */}
      <Section
        id="relevance"
        icon={<Award className="w-12 h-12" />}
        title="Federal Alignment"
        subtitle="Supporting Executive Priorities"
      >
        <div className="bg-[#1b254e]/20 border border-[#b4b4b5]/10 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Aligned with Executive Order: Government Efficiency
          </h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1b254e] flex items-center justify-center border border-[#b4b4b5]/20">
                <DollarSign className="w-6 h-6 text-[#b4b4b5]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  Cutting Wasteful Spending
                </h4>
                <p className="text-gray-300">
                  DistrictLens directly supports federal mandates to eliminate
                  inefficiencies in public spending by providing data-driven
                  identification of districts where spending patterns don't
                  align with educational outcomes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1b254e] flex items-center justify-center border border-[#b4b4b5]/20">
                <TrendingUp className="w-6 h-6 text-[#b4b4b5]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  Accountability & Transparency
                </h4>
                <p className="text-gray-300">
                  Our AI solution transforms opaque budget data into clear,
                  actionable insights that enable taxpayers, school boards, and
                  policymakers to hold districts accountable for fiscal
                  responsibility.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#1b254e] flex items-center justify-center border border-[#b4b4b5]/20">
                <Brain className="w-6 h-6 text-[#b4b4b5]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  AI for Civic Good
                </h4>
                <p className="text-gray-300">
                  Demonstrates how artificial intelligence can serve the public
                  interest by surfacing patterns invisible to manual review and
                  helping ensure every education dollar serves students.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#1b254e]/40 to-[#1b254e]/10 p-6 rounded-xl border border-[#b4b4b5]/10">
            <h4 className="text-3xl font-bold text-[#b4b4b5] mb-2">$39.8M</h4>
            <p className="text-gray-300 text-sm">
              Potential annual savings identified across flagged districts
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#1b254e]/40 to-[#1b254e]/10 p-6 rounded-xl border border-[#b4b4b5]/10">
            <h4 className="text-3xl font-bold text-[#b4b4b5] mb-2">3</h4>
            <p className="text-gray-300 text-sm">
              Districts flagged for immediate efficiency review
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#1b254e]/40 to-[#1b254e]/10 p-6 rounded-xl border border-[#b4b4b5]/10">
            <h4 className="text-3xl font-bold text-[#b4b4b5] mb-2">100%</h4>
            <p className="text-gray-300 text-sm">
              Data-driven, objective, and scalable analysis
            </p>
          </div>
        </div>
      </Section>

      {/* Section 3: The Solution */}
      <Section
        id="solution"
        icon={<Brain className="w-12 h-12" />}
        title="The Solution"
        subtitle="DistrictLens AI Pipeline"
      >
        <div className="bg-[#1b254e]/20 border border-[#b4b4b5]/10 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            How It Works
          </h3>
          <p className="text-gray-300 leading-relaxed mb-6">
            DistrictLens is an end-to-end machine learning pipeline that
            transforms disconnected budget documents and report cards into
            actionable intelligence for civic accountability.
          </p>

          <div className="space-y-6">
            <ProcessStep
              number="1"
              title="Data Integration"
              description="Automatically extracts and merges data from Wisconsin DPI Report Cards and district budget documents"
            />
            <ProcessStep
              number="2"
              title="Peer Group Clustering"
              description="Uses K-Means clustering to create fair comparison groups based on enrollment, spending, and outcomes"
            />
            <ProcessStep
              number="3"
              title="Predictive Modeling"
              description="Linear regression establishes expected outcomes given spending levels, revealing over/underperformance"
            />
            <ProcessStep
              number="4"
              title="Anomaly Detection"
              description="Isolation Forest algorithm flags statistically unusual spending-to-outcome patterns"
            />
            <ProcessStep
              number="5"
              title="Actionable Recommendations"
              description="Generates specific guidance and quantified savings potential for each district"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-[#1b254e]/30 to-transparent border border-[#b4b4b5]/10 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-400" />
              What Makes It Different
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#b4b4b5] mt-1">•</span>
                <span>Objective, data-driven analysis removes human bias</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b4b4b5] mt-1">•</span>
                <span>Peer-group clustering ensures fair comparisons</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b4b4b5] mt-1">•</span>
                <span>Scalable to all school districts nationwide</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b4b4b5] mt-1">•</span>
                <span>Open-source and transparent methodology</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-[#1b254e]/30 to-transparent border border-[#b4b4b5]/10 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4 text-white flex items-center gap-2">
              <Database className="w-6 h-6 text-blue-400" />
              Data Sources
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-[#b4b4b5] mt-1">•</span>
                <span>Wisconsin DPI District Report Cards (2024-25)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b4b4b5] mt-1">•</span>
                <span>District Annual Budget Reports</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b4b4b5] mt-1">•</span>
                <span>Financial Statements (per district)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#b4b4b5] mt-1">•</span>
                <span>All sources publicly available and verifiable</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Section 4: Solution in Practice */}
      <Section
        id="practice"
        icon={<TrendingUp className="w-12 h-12" />}
        title="In Practice"
        subtitle="How Policymakers Use DistrictLens"
      >
        <div className="bg-[#1b254e]/20 border border-[#b4b4b5]/10 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Real-World Application
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#b4b4b5]">
                For School Boards & Administrators
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
                  <p className="text-gray-300">
                    📊 View district ranking against peer groups
                  </p>
                </div>
                <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
                  <p className="text-gray-300">
                    🎯 Identify specific efficiency opportunities
                  </p>
                </div>
                <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
                  <p className="text-gray-300">
                    💡 Learn from high-performing districts
                  </p>
                </div>
                <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
                  <p className="text-gray-300">
                    📈 Track improvement over time
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#b4b4b5]">
                For Taxpayers & Community Members
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
                  <p className="text-gray-300">
                    🔍 Understand where tax dollars go
                  </p>
                </div>
                <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
                  <p className="text-gray-300">
                    ⚖️ Compare district to neighbors
                  </p>
                </div>
                <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
                  <p className="text-gray-300">
                    💬 Ask informed questions at board meetings
                  </p>
                </div>
                <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
                  <p className="text-gray-300">
                    ✅ Hold leadership accountable
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-[#b4b4b5]">
                For State & Federal Policymakers
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
                  <p className="text-gray-300">
                    🎯 Target audits to high-risk districts
                  </p>
                </div>
                <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
                  <p className="text-gray-300">
                    💰 Quantify potential budget savings
                  </p>
                </div>
                <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
                  <p className="text-gray-300">
                    📋 Identify best practices for replication
                  </p>
                </div>
                <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
                  <p className="text-gray-300">🌐 Scale to all 50 states</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Placeholder for screenshots */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Sample Outputs & Visualizations
          </h3>
          <p className="text-gray-400 mb-8">
            <em>
              Data outputs, graphs, and district comparisons will be displayed
              here during the video presentation
            </em>
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#1b254e]/10 border-2 border-dashed border-[#b4b4b5]/20 rounded-xl p-12 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Database className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p>Efficiency Quadrant Chart</p>
              </div>
            </div>
            <div className="bg-[#1b254e]/10 border-2 border-dashed border-[#b4b4b5]/20 rounded-xl p-12 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <TrendingUp className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p>Spending vs Outcomes Scatter</p>
              </div>
            </div>
            <div className="bg-[#1b254e]/10 border-2 border-dashed border-[#b4b4b5]/20 rounded-xl p-12 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Brain className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p>Peer Group Clusters</p>
              </div>
            </div>
            <div className="bg-[#1b254e]/10 border-2 border-dashed border-[#b4b4b5]/20 rounded-xl p-12 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <AlertCircle className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p>District Recommendations</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Section 5: Tech Stack */}
      <Section
        id="tech"
        icon={<Code className="w-12 h-12" />}
        title="Development"
        subtitle="Process, Tech Stack & Iteration"
      >
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#1b254e]/20 border border-[#b4b4b5]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              Technology Stack
            </h3>
            <div className="space-y-4">
              <TechItem category="Language" tech="Python 3.11" />
              <TechItem category="Data Processing" tech="pandas, numpy" />
              <TechItem category="Machine Learning" tech="scikit-learn" />
              <TechItem category="Visualization" tech="matplotlib" />
              <TechItem category="PDF Extraction" tech="pdfplumber" />
              <TechItem category="Development" tech="Jupyter Notebooks" />
            </div>
          </div>

          <div className="bg-[#1b254e]/20 border border-[#b4b4b5]/10 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold mb-6 text-white">
              ML Models Used
            </h3>
            <div className="space-y-4">
              <ModelCard
                name="K-Means Clustering"
                purpose="Fair peer group creation"
                accuracy="3 distinct clusters identified"
              />
              <ModelCard
                name="Linear Regression"
                purpose="Expected outcome prediction"
                accuracy="Baseline performance model"
              />
              <ModelCard
                name="Random Forest"
                purpose="Feature importance analysis"
                accuracy="Enhanced prediction accuracy"
              />
              <ModelCard
                name="Isolation Forest"
                purpose="Anomaly detection"
                accuracy="Statistical outlier flagging"
              />
            </div>
          </div>
        </div>

        <div className="bg-[#1b254e]/20 border border-[#b4b4b5]/10 rounded-2xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Development Process
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#1b254e] flex items-center justify-center mx-auto mb-4 border border-[#b4b4b5]/20">
                <span className="text-2xl font-bold text-[#b4b4b5]">1</span>
              </div>
              <h4 className="font-semibold mb-2 text-white">Data Collection</h4>
              <p className="text-sm text-gray-400">
                Manual PDF extraction, data cleaning, validation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#1b254e] flex items-center justify-center mx-auto mb-4 border border-[#b4b4b5]/20">
                <span className="text-2xl font-bold text-[#b4b4b5]">2</span>
              </div>
              <h4 className="font-semibold mb-2 text-white">Model Training</h4>
              <p className="text-sm text-gray-400">
                Feature engineering, cross-validation, hyperparameter tuning
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-[#1b254e] flex items-center justify-center mx-auto mb-4 border border-[#b4b4b5]/20">
                <span className="text-2xl font-bold text-[#b4b4b5]">3</span>
              </div>
              <h4 className="font-semibold mb-2 text-white">Validation</h4>
              <p className="text-sm text-gray-400">
                Testing, sensitivity analysis, peer review
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#1b254e]/30 to-transparent border-l-4 border-[#b4b4b5] p-6 rounded-r-xl">
          <h4 className="text-xl font-semibold mb-3 text-white">
            Challenges & Iterations
          </h4>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-[#b4b4b5] mt-1">•</span>
              <span>
                <strong>Challenge:</strong> Inconsistent PDF formats across
                districts → <strong>Solution:</strong> Built robust pdfplumber
                extraction pipeline
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b4b4b5] mt-1">•</span>
              <span>
                <strong>Challenge:</strong> Small sample size (10 districts) →{" "}
                <strong>Solution:</strong> Focused on proof-of-concept with
                plans to scale
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b4b4b5] mt-1">•</span>
              <span>
                <strong>Challenge:</strong> Missing demographic controls →{" "}
                <strong>Solution:</strong> Acknowledged limitations, used peer
                clustering
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#b4b4b5] mt-1">•</span>
              <span>
                <strong>Iteration:</strong> Started with simple ratios, evolved
                to multi-model ML pipeline
              </span>
            </li>
          </ul>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-900/20 to-transparent border border-green-500/20 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-3 text-green-400">
              Accuracy & Validation
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Cross-validated models, sensitivity analysis performed,
              residual-based scoring validated against human expert review
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Reproducible results with documented methodology</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-transparent border border-blue-500/20 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-3 text-blue-400">
              Open Source
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              All code, data sources, and methodology fully documented in the
              presidentialai repository
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Code className="w-4 h-4 text-blue-400" />
              <span>Transparent, auditable, and ready to scale nationwide</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-[#1b254e] py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            DistrictLens
          </h3>
          <p className="text-gray-400 mb-6">
            AI-Powered Public Education Spending Analysis
          </p>
          <p className="text-sm text-gray-500">
            Presidential AI Challenge 2026 • Wisconsin Team
          </p>
        </div>
      </footer>
    </div>
  );
}

// Component Helpers
function Section({ id, icon, title, subtitle, children }: any) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block p-4 bg-[#1b254e]/30 rounded-2xl mb-6 text-[#b4b4b5]">
            {icon}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {title}
          </h2>
          <p className="text-xl text-[#b4b4b5]">{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </motion.section>
  );
}

function StatCard({ number, label, description }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gradient-to-br from-[#1b254e]/40 to-[#1b254e]/10 p-6 rounded-xl border border-[#b4b4b5]/10"
    >
      <div className="text-4xl font-bold text-[#b4b4b5] mb-2">{number}</div>
      <div className="text-lg font-semibold text-white mb-1">{label}</div>
      <div className="text-sm text-gray-400">{description}</div>
    </motion.div>
  );
}

function ProcessStep({ number, title, description }: any) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#1b254e] to-[#1b254e]/50 flex items-center justify-center border-2 border-[#b4b4b5]/30">
        <span className="text-xl font-bold text-[#b4b4b5]">{number}</span>
      </div>
      <div className="flex-1">
        <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function TechItem({ category, tech }: any) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-[#b4b4b5]/5">
      <span className="text-gray-400">{category}</span>
      <span className="text-white font-medium">{tech}</span>
    </div>
  );
}

function ModelCard({ name, purpose, accuracy }: any) {
  return (
    <div className="bg-[#1b254e]/30 p-4 rounded-lg border border-[#b4b4b5]/5">
      <h5 className="font-semibold text-white mb-1">{name}</h5>
      <p className="text-sm text-gray-400 mb-2">{purpose}</p>
      <p className="text-xs text-[#b4b4b5]">{accuracy}</p>
    </div>
  );
}
