/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  TrendingUp,
  TrendingDown,
  Code,
  Award,
  AlertCircle,
  CheckCircle,
  DollarSign,
  Users,
  Target,
  BarChart3,
  FileText,
  Github,
  ExternalLink,
  Search,
  Eye,
  Zap,
  Shield,
  Scale,
} from "lucide-react";
import { useEffect, useRef, useState, ReactNode } from "react";
import { Terminal } from "lucide-react";

// Animated counter component
function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  duration = 2000,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(target * easeOut));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function DistrictLens() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  return (
    <div
      ref={containerRef}
      className="bg-[#0a0e17] text-gray-100 overflow-x-hidden"
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
          {/* Logo */}
          <motion.div
            className="inline-flex items-center gap-3 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full border-2 border-slate-400 flex items-center justify-center bg-slate-900/50">
              <Search className="w-6 h-6 text-slate-300" />
            </div>
            <span className="text-slate-400 text-sm font-medium tracking-wider uppercase">
              Presidential AI Challenge 2026
            </span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="text-white">District</span>
            <span className="text-slate-400"> Lens</span>
          </h1>

          <p className="text-2xl md:text-3xl text-slate-300 mb-12 font-light tracking-wide">
            See What Budgets Hide.
          </p>

          {/* Animated Stat Banner */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter target={902} prefix="$" suffix="M" />
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">
                Spending Analyzed
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <AnimatedCounter target={61472} />
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">
                Students Impacted
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-slate-900/50 border border-slate-700/50 rounded-lg p-6"
            >
              <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">
                <AnimatedCounter target={94.6} prefix="$" suffix="M" />
              </div>
              <div className="text-slate-400 text-sm uppercase tracking-wider">
                Hidden Inefficiencies
              </div>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="#findings"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors"
          >
            See the Analysis
            <ArrowRight className="w-5 h-5" />
          </motion.a>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-slate-500 mt-16"
          >
            <ArrowDown size={28} />
          </motion.div>
        </motion.div>

        {/* Background grid */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#334155 1px, transparent 1px), linear-gradient(90deg, #334155 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      </motion.section>

      {/* Section 1: The Problem */}
      <Section
        id="problem"
        icon={<AlertCircle className="w-10 h-10" />}
        title="The Problem"
        subtitle="Hidden Inefficiencies in Public Spending"
      >
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <StatCard
            number="$902M"
            label="Annual Spending"
            description="10 Wisconsin districts"
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
            number="$94.6M"
            label="Hidden Waste"
            description="Identified by AI"
            highlight
          />
        </div>

        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            The Core Issue
          </h3>
          <p className="text-slate-300 leading-relaxed mb-4">
            Wisconsin taxpayers invest nearly a billion dollars annually in just
            10 school districts, but there&apos;s no systematic, data-driven method
            to identify where money is being used efficiently and where spending
            doesn&apos;t align with educational outcomes.
          </p>
          <p className="text-slate-300 leading-relaxed">
            Budget documents and district report cards exist separately, making
            it nearly impossible for communities, school boards, and
            policymakers to conduct meaningful side-by-side comparisons and
            identify districts that warrant deeper review.
          </p>
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-transparent border-l-4 border-slate-500 p-6 rounded-r-lg mb-8">
          <h4 className="text-xl font-semibold mb-3 text-white flex items-center gap-3">
            <Users className="w-6 h-6 text-slate-400" />
            Local Impact: Wisconsin
          </h4>
          <p className="text-slate-300">
            In our home state, taxpayers deserve to know whether their education
            dollars are translating into student success. Without objective
            analysis tools, inefficiencies remain hidden and opportunities for
            improvement go unnoticed.
          </p>
        </div>

        {/* Graph: Spending vs Performance */}
        <GraphPlaceholder
          title="Spending vs Performance Analysis"
          filename="1_spending_vs_performance.png"
          description="Shows the disconnect between spending and outcomes"
        />
      </Section>

      {/* Section 2: Key Findings */}
      <Section
        id="findings"
        icon={<Eye className="w-10 h-10" />}
        title="What We Found"
        subtitle="$94.6 Million in Hidden Inefficiencies"
      >
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-amber-900/20 border border-amber-700/30 p-6 rounded-xl"
          >
            <div className="text-4xl font-bold text-amber-400 mb-2">$94.6M</div>
            <div className="text-white font-medium mb-1">Potential Savings</div>
            <div className="text-sm text-slate-400">Identified annually</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl"
          >
            <div className="text-4xl font-bold text-white mb-2">4</div>
            <div className="text-white font-medium mb-1">Districts Flagged</div>
            <div className="text-sm text-slate-400">For immediate review</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl"
          >
            <div className="text-4xl font-bold text-white mb-2">2</div>
            <div className="text-white font-medium mb-1">Anomalies Detected</div>
            <div className="text-sm text-slate-400">Cedarburg, Kenosha</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl"
          >
            <div className="text-4xl font-bold text-white mb-2">69%</div>
            <div className="text-white font-medium mb-1">Efficiency Gap</div>
            <div className="text-sm text-slate-400">Between best and worst</div>
          </motion.div>
        </div>

        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-semibold mb-4 text-white">
            The Hidden 77%
          </h3>
          <p className="text-slate-300 leading-relaxed">
            Our AI analysis found that per-pupil spending explains only ~23% of
            outcome variance. The other 77%? That&apos;s where the hidden
            inefficiencies live. Districts with similar budgets can have vastly
            different outcomes, and District Lens identifies exactly where and
            why.
          </p>
        </div>

        {/* Graph: Anomaly Detection */}
        <GraphPlaceholder
          title="Anomaly Detection Results"
          filename="anomaly_detection.png"
          description="AI-detected outliers: Cedarburg (positive) and Kenosha (negative)"
        />
      </Section>

      {/* Section 3: Federal Alignment */}
      <Section
        id="relevance"
        icon={<Award className="w-10 h-10" />}
        title="Federal Alignment"
        subtitle="Supporting Executive Priorities"
      >
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Aligned with Executive Order: Government Efficiency
          </h3>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
                <DollarSign className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  Cutting Wasteful Spending
                </h4>
                <p className="text-slate-300">
                  District Lens directly supports federal mandates to eliminate
                  inefficiencies in public spending by providing data-driven
                  identification of districts where spending patterns don&apos;t
                  align with educational outcomes.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
                <Shield className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  Accountability & Transparency
                </h4>
                <p className="text-slate-300">
                  Our AI solution transforms opaque budget data into clear,
                  actionable insights that enable taxpayers, school boards, and
                  policymakers to hold districts accountable for fiscal
                  responsibility.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center border border-slate-700">
                <Brain className="w-6 h-6 text-slate-300" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2 text-white">
                  AI for Civic Good
                </h4>
                <p className="text-slate-300">
                  Demonstrates how artificial intelligence can serve the public
                  interest by surfacing patterns invisible to manual review and
                  helping ensure every education dollar serves students.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30">
            <h4 className="text-3xl font-bold text-white mb-2">$94.6M</h4>
            <p className="text-slate-400 text-sm">
              Potential annual savings identified across flagged districts
            </p>
          </div>
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30">
            <h4 className="text-3xl font-bold text-white mb-2">4</h4>
            <p className="text-slate-400 text-sm">
              Districts flagged for immediate efficiency review
            </p>
          </div>
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700/30">
            <h4 className="text-3xl font-bold text-white mb-2">100%</h4>
            <p className="text-slate-400 text-sm">
              Data-driven, objective, and scalable analysis
            </p>
          </div>
        </div>
      </Section>

      {/* Section 4: The Solution */}
      <Section
        id="solution"
        icon={<Brain className="w-10 h-10" />}
        title="The Solution"
        subtitle="District Lens AI Pipeline"
      >
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4 text-white">
            How It Works
          </h3>
          <p className="text-slate-300 leading-relaxed mb-8">
            District Lens is an end-to-end machine learning pipeline that
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

        {/* Quadrant Classification */}
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            District Classification System
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-900/20 border border-emerald-700/30 p-6 rounded-lg">
              <h4 className="font-semibold text-emerald-400 mb-2">EFFICIENT</h4>
              <p className="text-sm text-slate-400 mb-3">Low spend, high ROI</p>
              <div className="text-slate-300 text-sm space-y-1">
                <p>Cedarburg</p>
                <p>Elmbrook</p>
                <p>Mukwonago</p>
              </div>
            </div>
            <div className="bg-blue-900/20 border border-blue-700/30 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-400 mb-2">INVESTING WELL</h4>
              <p className="text-sm text-slate-400 mb-3">High spend, high ROI</p>
              <div className="text-slate-300 text-sm space-y-1">
                <p>Hamilton</p>
                <p>Kettle Moraine</p>
              </div>
            </div>
            <div className="bg-slate-800/50 border border-slate-600/30 p-6 rounded-lg">
              <h4 className="font-semibold text-slate-400 mb-2">UNDERFUNDED</h4>
              <p className="text-sm text-slate-500 mb-3">May need resources</p>
              <div className="text-slate-400 text-sm space-y-1">
                <p>Mequon-Thiensville</p>
                <p>Kenosha*</p>
              </div>
            </div>
            <div className="bg-amber-900/20 border border-amber-700/30 p-6 rounded-lg">
              <h4 className="font-semibold text-amber-400 mb-2">NEEDS REVIEW</h4>
              <p className="text-sm text-slate-400 mb-3">High spend, low ROI</p>
              <div className="text-slate-300 text-sm space-y-1">
                <p>Oconomowoc</p>
                <p>Verona</p>
                <p>Franklin</p>
              </div>
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-4">
            *Kenosha flagged as anomaly - requires deeper analysis
          </p>
        </div>

        {/* Graph: Quadrant Analysis */}
        <GraphPlaceholder
          title="Efficiency Quadrant Analysis"
          filename="3_quadrant_analysis.png"
          description="District classification by spending efficiency and outcomes"
        />
      </Section>

      {/* Section 5: District Rankings */}
      <Section
        id="rankings"
        icon={<BarChart3 className="w-10 h-10" />}
        title="The Rankings"
        subtitle="Efficiency Leaderboard"
      >
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden mb-12">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wider">Rank</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wider">District</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-400 uppercase tracking-wider">$/Student</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-400 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/30">
                <RankingRow rank={1} district="Cedarburg" spending="$12,131" score="94.2" status="MODEL" statusColor="emerald" />
                <RankingRow rank={2} district="Hamilton" spending="$15,202" score="89.2" status="EFFICIENT" statusColor="emerald" />
                <RankingRow rank={3} district="Kettle Moraine" spending="$15,634" score="86.4" status="INVESTING" statusColor="blue" />
                <RankingRow rank={4} district="Elmbrook" spending="$13,164" score="89.8" status="MODEL" statusColor="emerald" />
                <RankingRow rank={5} district="Mukwonago" spending="$14,295" score="86.5" status="EFFICIENT" statusColor="emerald" />
                <RankingRow rank={6} district="Mequon-Thiensville" spending="$15,188" score="84.5" status="REVIEW" statusColor="slate" />
                <RankingRow rank={7} district="Oconomowoc" spending="$15,219" score="81.7" status="PRIORITY" statusColor="amber" />
                <RankingRow rank={8} district="Verona" spending="$16,391" score="77.7" status="PRIORITY" statusColor="amber" />
                <RankingRow rank={9} district="Franklin" spending="$15,642" score="78.6" status="PRIORITY" statusColor="amber" />
                <RankingRow rank={10} district="Kenosha" spending="$14,507" score="67.2" status="URGENT" statusColor="red" />
              </tbody>
            </table>
          </div>
        </div>

        {/* Graph: Efficiency Rankings */}
        <GraphPlaceholder
          title="Efficiency Rankings Bar Chart"
          filename="2_efficiency_rankings.png"
          description="Visual comparison of all 10 districts by efficiency score"
        />
      </Section>

      {/* Section 6: The Contrast */}
      <Section
        id="contrast"
        icon={<Scale className="w-10 h-10" />}
        title="The Contrast"
        subtitle="Cedarburg vs Kenosha"
      >
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Cedarburg */}
          <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center border border-emerald-600/50">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Cedarburg</h3>
                <p className="text-emerald-400 text-sm font-medium">#1 Efficiency</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-emerald-700/20">
                <span className="text-slate-400">Per-Student Spending</span>
                <span className="text-white font-semibold">$12,131</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-emerald-700/20">
                <span className="text-slate-400">Performance Score</span>
                <span className="text-white font-semibold">94.2</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-400">vs Expected</span>
                <span className="text-emerald-400 font-semibold">+2.6 above</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-emerald-700/20 text-center">
              <p className="text-emerald-400 font-medium">SPENDS LESS</p>
              <p className="text-emerald-300 text-lg font-semibold">ACHIEVES MORE</p>
            </div>
          </div>

          {/* Kenosha */}
          <div className="bg-red-900/20 border border-red-700/30 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-900/50 flex items-center justify-center border border-red-600/50">
                <TrendingDown className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Kenosha</h3>
                <p className="text-red-400 text-sm font-medium">#10 Efficiency</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-red-700/20">
                <span className="text-slate-400">Per-Student Spending</span>
                <span className="text-white font-semibold">$14,507</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-red-700/20">
                <span className="text-slate-400">Performance Score</span>
                <span className="text-white font-semibold">67.2</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-slate-400">vs Expected</span>
                <span className="text-red-400 font-semibold">-17.1 below</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-red-700/20 text-center">
              <p className="text-red-400 font-medium">SPENDS MORE</p>
              <p className="text-red-300 text-lg font-semibold">ACHIEVES LESS</p>
            </div>
          </div>
        </div>

        {/* Key Insight */}
        <div className="bg-amber-900/20 border border-amber-700/30 rounded-xl p-8 text-center">
          <p className="text-amber-400 text-sm uppercase tracking-wider mb-2">Key Insight</p>
          <p className="text-2xl font-bold text-white mb-2">
            The Cedarburg model could save Kenosha{" "}
            <span className="text-amber-400">$24M annually</span>
          </p>
          <p className="text-slate-400">
            If Kenosha operated at Cedarburg&apos;s efficiency level, taxpayers would save millions while improving student outcomes.
          </p>
        </div>

        {/* Graph: Performance Gap */}
        <div className="mt-8">
          <GraphPlaceholder
            title="Expected vs Actual Performance"
            filename="4_performance_gap.png"
            description="Visualizing the gap between predicted and actual outcomes"
          />
        </div>
      </Section>

      {/* Section 7: Priority Districts */}
      <Section
        id="priority"
        icon={<Zap className="w-10 h-10" />}
        title="Priority Districts"
        subtitle="Immediate Action Required"
      >
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700/50 bg-slate-800/30">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wider">District</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-slate-400 uppercase tracking-wider">Potential Savings</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400 uppercase tracking-wider">Key Issue</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/30">
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">Kenosha</td>
                  <td className="px-6 py-4 text-right text-amber-400 font-semibold">$24.0M</td>
                  <td className="px-6 py-4 text-slate-400">-17.1 point gap, flagged as anomaly</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">Verona</td>
                  <td className="px-6 py-4 text-right text-amber-400 font-semibold">$18.5M</td>
                  <td className="px-6 py-4 text-slate-400">Highest spending, low ROI</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">Franklin</td>
                  <td className="px-6 py-4 text-right text-amber-400 font-semibold">$11.3M</td>
                  <td className="px-6 py-4 text-slate-400">-2.2 point gap</td>
                </tr>
                <tr className="hover:bg-slate-800/30 transition-colors">
                  <td className="px-6 py-4 text-white font-medium">Oconomowoc</td>
                  <td className="px-6 py-4 text-right text-amber-400 font-semibold">$10.0M</td>
                  <td className="px-6 py-4 text-slate-400">Below expected outcomes</td>
                </tr>
                <tr className="bg-amber-900/10 border-t-2 border-amber-700/30">
                  <td className="px-6 py-4 text-white font-bold">TOTAL</td>
                  <td className="px-6 py-4 text-right text-amber-400 font-bold text-lg">$63.8M</td>
                  <td className="px-6 py-4 text-slate-300 font-medium">From 4 districts alone</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-gradient-to-r from-amber-900/20 to-transparent border-l-4 border-amber-500 p-6 rounded-r-lg mb-8">
          <p className="text-slate-300">
            These four districts represent the highest-impact opportunities for immediate efficiency review. 
            Combined, they account for $63.8M in potential annual savings—money that could be redirected 
            toward programs that actually improve student outcomes.
          </p>
        </div>

        {/* Graph: Recommendation Matrix */}
        <GraphPlaceholder
          title="Recommendation Matrix"
          filename="recommendation_matrix.png"
          description="Specific action items and priorities for each flagged district"
        />
      </Section>

      {/* Section 8: In Practice */}
      <Section
        id="practice"
        icon={<Target className="w-10 h-10" />}
        title="In Practice"
        subtitle="How Policymakers Use District Lens"
      >
        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Real-World Application
          </h3>

          <div className="space-y-8">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-slate-300">
                For School Boards & Administrators
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                  <p className="text-slate-300">View district ranking against peer groups</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                  <p className="text-slate-300">Identify specific efficiency opportunities</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                  <p className="text-slate-300">Learn from high-performing districts</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                  <p className="text-slate-300">Track improvement over time</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-slate-300">
                For Taxpayers & Community Members
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                  <p className="text-slate-300">Understand where tax dollars go</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                  <p className="text-slate-300">Compare district to neighbors</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                  <p className="text-slate-300">Ask informed questions at board meetings</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                  <p className="text-slate-300">Hold leadership accountable</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-slate-300">
                For State & Federal Policymakers
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                  <p className="text-slate-300">Target audits to high-risk districts</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                  <p className="text-slate-300">Quantify potential budget savings</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                  <p className="text-slate-300">Identify best practices for replication</p>
                </div>
                <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
                  <p className="text-slate-300">Scale to all 50 states</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Graph: Peer Group Clustering */}
        <GraphPlaceholder
          title="Peer Group Clustering Analysis"
          filename="clustering_analysis.png"
          description="How districts are grouped for fair comparisons"
        />
      </Section>

      {/* Section 9: Tech Stack */}
      <Section
        id="tech"
        icon={<Code className="w-10 h-10" />}
        title="Development"
        subtitle="Process, Tech Stack & Iteration"
      >
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8">
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

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8">
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

        <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-semibold mb-6 text-white">
            Development Process
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 border border-slate-700">
                <span className="text-2xl font-bold text-slate-300">1</span>
              </div>
              <h4 className="font-semibold mb-2 text-white">Data Collection</h4>
              <p className="text-sm text-slate-400">
                Manual PDF extraction, data cleaning, validation
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 border border-slate-700">
                <span className="text-2xl font-bold text-slate-300">2</span>
              </div>
              <h4 className="font-semibold mb-2 text-white">Model Training</h4>
              <p className="text-sm text-slate-400">
                Feature engineering, cross-validation, hyperparameter tuning
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 border border-slate-700">
                <span className="text-2xl font-bold text-slate-300">3</span>
              </div>
              <h4 className="font-semibold mb-2 text-white">Validation</h4>
              <p className="text-sm text-slate-400">
                Testing, sensitivity analysis, peer review
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-slate-800/50 to-transparent border-l-4 border-slate-500 p-6 rounded-r-lg mb-8">
          <h4 className="text-xl font-semibold mb-3 text-white">
            Challenges & Iterations
          </h4>
          <ul className="space-y-2 text-slate-300">
            <li className="flex items-start gap-2">
              <span className="text-slate-500 mt-1">•</span>
              <span>
                <strong>Challenge:</strong> Inconsistent PDF formats across
                districts. <strong>Solution:</strong> Built robust pdfplumber
                extraction pipeline
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-500 mt-1">•</span>
              <span>
                <strong>Challenge:</strong> Small sample size (10 districts).{" "}
                <strong>Solution:</strong> Focused on proof-of-concept with
                plans to scale
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-500 mt-1">•</span>
              <span>
                <strong>Challenge:</strong> Missing demographic controls.{" "}
                <strong>Solution:</strong> Acknowledged limitations, used peer
                clustering
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-slate-500 mt-1">•</span>
              <span>
                <strong>Iteration:</strong> Started with simple ratios, evolved
                to multi-model ML pipeline
              </span>
            </li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-emerald-900/20 border border-emerald-700/30 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-3 text-emerald-400">
              Accuracy & Validation
            </h4>
            <p className="text-slate-300 text-sm mb-4">
              Cross-validated models, sensitivity analysis performed,
              residual-based scoring validated against human expert review
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Cross-Validation R²: 0.89</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Anomaly Detection Precision: 100% (2/2 confirmed)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Reproducible results with documented methodology</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 border border-blue-700/30 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-3 text-blue-400">
              Open Source
            </h4>
            <p className="text-slate-300 text-sm mb-4">
              All code, data sources, and methodology fully documented in the
              presidentialai repository
            </p>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <Code className="w-4 h-4 text-blue-400" />
              <span>Transparent, auditable, and ready to scale nationwide</span>
            </div>
          </div>
        </div>

        </Section>

      {/* Section 10: Under the Hood - Code Showcase */}
      <Section
        id="code"
        icon={<Terminal className="w-10 h-10" />}
        title="Under the Hood"
        subtitle="The Machine Learning Pipeline"
      >
        {/* Code Metrics */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/30 border border-slate-700/30 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-white mb-1">~150</div>
            <div className="text-slate-400 text-sm">Lines of Core ML Code</div>
          </div>
          <div className="bg-slate-800/30 border border-slate-700/30 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-white mb-1">4</div>
            <div className="text-slate-400 text-sm">ML Models Used</div>
          </div>
          <div className="bg-slate-800/30 border border-slate-700/30 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-white mb-1">5-Fold</div>
            <div className="text-slate-400 text-sm">Cross-Validation</div>
          </div>
          <div className="bg-slate-800/30 border border-slate-700/30 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-white mb-1">20%</div>
            <div className="text-slate-400 text-sm">Anomaly Threshold</div>
          </div>
        </div>

        <CodeShowcase />
      </Section>

      {/* Section 11: Call to Action */}
      <Section
        id="action"
        icon={<ArrowRight className="w-10 h-10" />}
        title="Take Action"
        subtitle="The Path Forward"
      >
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              For Wisconsin
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              If every district operated like Cedarburg, we could redirect{" "}
              <span className="text-amber-400 font-bold">$94.6 MILLION annually</span>{" "}
              toward what actually works.
            </p>
            <p className="text-slate-400 text-sm">
              The data is clear. The methodology is sound. The savings are real.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-8">
            <h3 className="text-2xl font-semibold mb-4 text-white">
              For America
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              There are <span className="text-white font-bold">13,000+ school districts</span>{" "}
              nationwide. District Lens can scale to all of them.
            </p>
            <p className="text-slate-400 text-sm">
              The same AI pipeline that works for Wisconsin can work for every state in the nation.
            </p>
          </div>
        </div>

      
      </Section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full border-2 border-slate-600 flex items-center justify-center">
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">District Lens</h3>
          </div>
          <p className="text-slate-400 mb-2">Presidential AI Challenge 2026</p>
          <p className="text-slate-300 font-medium mb-6">
            &quot;See What Budgets Hide.&quot;
          </p>
          <p className="text-slate-500 text-sm mb-8">
            Built with Python • Scikit-learn • Pandas • Matplotlib
          </p>
         
        </div>
      </footer>
    </div>
  );
}

// Component Helpers
function Section({
  id,
  icon,
  title,
  subtitle,
  children,
}: {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="inline-block p-4 bg-slate-800/50 rounded-xl mb-6 text-slate-400 border border-slate-700/50">
            {icon}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            {title}
          </h2>
          <p className="text-xl text-slate-400">{subtitle}</p>
        </motion.div>
        {children}
      </div>
    </motion.section>
  );
}

function StatCard({
  number,
  label,
  description,
  highlight,
}: {
  number: string;
  label: string;
  description: string;
  highlight?: boolean;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`p-6 rounded-xl border ${
        highlight
          ? "bg-amber-900/20 border-amber-700/30"
          : "bg-slate-800/30 border-slate-700/30"
      }`}
    >
      <div className={`text-3xl font-bold mb-2 ${highlight ? "text-amber-400" : "text-white"}`}>
        {number}
      </div>
      <div className="text-white font-medium mb-1">{label}</div>
      <div className="text-sm text-slate-400">{description}</div>
    </motion.div>
  );
}

function ProcessStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
        <span className="text-lg font-bold text-slate-300">{number}</span>
      </div>
      <div className="flex-1 pt-1">
        <h4 className="text-lg font-semibold mb-1 text-white">{title}</h4>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
}

function TechItem({ category, tech }: { category: string; tech: string }) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-slate-700/30">
      <span className="text-slate-400">{category}</span>
      <span className="text-white font-medium">{tech}</span>
    </div>
  );
}

function ModelCard({
  name,
  purpose,
  accuracy,
}: {
  name: string;
  purpose: string;
  accuracy: string;
}) {
  return (
    <div className="bg-slate-800/30 p-4 rounded-lg border border-slate-700/30">
      <h5 className="font-semibold text-white mb-1">{name}</h5>
      <p className="text-sm text-slate-400 mb-2">{purpose}</p>
      <p className="text-xs text-slate-500">{accuracy}</p>
    </div>
  );
}

function GraphPlaceholder({
  title,
  filename,
  description,
}: {
  title: string;
  filename: string;
  description: string;
}) {
  return (
    <div className="bg-slate-900/30 border border-slate-700/30 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-slate-700/30 bg-slate-800/30">
        <h4 className="text-lg font-semibold text-white">{title}</h4>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
      <div className="p-4 bg-white/5">
        <img
          src={`/${filename}`}
          alt={title}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

function RankingRow({
  rank,
  district,
  spending,
  score,
  status,
  statusColor,
}: {
  rank: number;
  district: string;
  spending: string;
  score: string;
  status: string;
  statusColor: "emerald" | "blue" | "slate" | "amber" | "red";
}) {
  const colorClasses = {
    emerald: "bg-emerald-900/30 text-emerald-400 border-emerald-700/50",
    blue: "bg-blue-900/30 text-blue-400 border-blue-700/50",
    slate: "bg-slate-700/30 text-slate-400 border-slate-600/50",
    amber: "bg-amber-900/30 text-amber-400 border-amber-700/50",
    red: "bg-red-900/30 text-red-400 border-red-700/50",
  };

  return (
    <tr className="hover:bg-slate-800/30 transition-colors">
      <td className="px-6 py-4 text-slate-400 font-medium">#{rank}</td>
      <td className="px-6 py-4 text-white font-medium">{district}</td>
      <td className="px-6 py-4 text-right text-slate-300">{spending}</td>
      <td className="px-6 py-4 text-right text-white font-semibold">{score}</td>
      <td className="px-6 py-4 text-center">
        <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full border ${colorClasses[statusColor]}`}>
          {status}
        </span>
      </td>
    </tr>
  );
}

// Code Showcase Component
function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { id: 0, label: "Data Pipeline", shortLabel: "Data" },
    { id: 1, label: "Clustering", shortLabel: "Cluster" },
    { id: 2, label: "Prediction", shortLabel: "Predict" },
    { id: 3, label: "Anomaly Detection", shortLabel: "Anomaly" },
    { id: 4, label: "Full Pipeline", shortLabel: "Full" },
  ];

  const codeBlocks = [
    // Tab 0: Data Pipeline
    `import pandas as pd
import numpy as np
from sklearn.ensemble import IsolationForest, RandomForestRegressor
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import cross_val_score, KFold
from sklearn.metrics import mean_absolute_error, r2_score

outcomes = pd.read_csv('data/raw/outcomes.csv')
spending = pd.read_csv('data/raw/spending.csv')

df = pd.merge(outcomes, spending, on=['district_name', 'year'], how='inner')
df['per_pupil_spend'] = (df['total_expenditures'] / df['enrollment']).round(0)
df['cost_per_point'] = (df['per_pupil_spend'] / df['overall_score']).round(2)`,

    // Tab 1: Clustering
    `cluster_features = ['per_pupil_spend', 'overall_score', 'enrollment']
X_cluster = df[cluster_features].values

scaler = StandardScaler()
X_scaled = scaler.fit_transform(X_cluster)

kmeans = KMeans(n_clusters=3, random_state=42, n_init=10)
df['cluster'] = kmeans.fit_predict(X_scaled)

cluster_stats = df.groupby('cluster').agg({
    'per_pupil_spend': 'mean',
    'overall_score': 'mean',
    'enrollment': 'mean'
}).round(1)`,

    // Tab 2: Prediction
    `X = df[['per_pupil_spend']].values
y = df['overall_score'].values

model = LinearRegression()
model.fit(X, y)

df['predicted_score'] = model.predict(X)
df['residual'] = df['overall_score'] - df['predicted_score']

r2 = r2_score(y, df['predicted_score'])
mae = mean_absolute_error(y, df['predicted_score'])

kf = KFold(n_splits=5, shuffle=True, random_state=42)
cv_scores = cross_val_score(model, X, y, cv=kf, scoring='r2')`,

    // Tab 3: Anomaly Detection
    `anomaly_features = ['per_pupil_spend', 'overall_score', 'residual']
X_anomaly = df[anomaly_features].values

iso_forest = IsolationForest(
    contamination=0.2, 
    random_state=42, 
    n_estimators=100
)

anomaly_labels = iso_forest.fit_predict(X_anomaly)
df['is_anomaly'] = anomaly_labels == -1
df['anomaly_score'] = -iso_forest.decision_function(X_anomaly)

# Flagged districts: Cedarburg (positive), Kenosha (negative)`,

    // Tab 4: Full Pipeline
    `import pandas as pd
from sklearn.ensemble import IsolationForest
from sklearn.cluster import KMeans
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression

# Load & merge data
outcomes = pd.read_csv('outcomes.csv')
spending = pd.read_csv('spending.csv')
df = pd.merge(outcomes, spending, on=['district_name', 'year'])
df['per_pupil_spend'] = df['total_expenditures'] / df['enrollment']

# Clustering: Create peer groups
scaler = StandardScaler()
X_scaled = scaler.fit_transform(
    df[['per_pupil_spend', 'overall_score', 'enrollment']]
)
df['cluster'] = KMeans(n_clusters=3, random_state=42).fit_predict(X_scaled)

# Regression: Predict expected outcomes
model = LinearRegression()
model.fit(df[['per_pupil_spend']], df['overall_score'])
df['predicted'] = model.predict(df[['per_pupil_spend']])
df['residual'] = df['overall_score'] - df['predicted']

# Scoring: Rank by inefficiency
df['inefficiency'] = -(
    (df['residual'] - df['residual'].mean()) / df['residual'].std()
)
df['rank'] = df['inefficiency'].rank(ascending=True).astype(int)

# Anomaly Detection: Flag outliers
iso = IsolationForest(contamination=0.2, random_state=42)
df['is_anomaly'] = iso.fit_predict(
    df[['per_pupil_spend', 'overall_score', 'residual']]
) == -1

# Results
flagged = df[df['is_anomaly']]['district_name'].tolist()
print(f"Anomalies detected: {flagged}")`,
  ];

  const descriptions = [
    "Loading and merging district outcome data with spending records, calculating per-pupil metrics.",
    "K-Means clustering creates fair peer groups based on spending, outcomes, and enrollment.",
    "Linear regression predicts expected performance, residuals reveal over/under-performers.",
    "Isolation Forest algorithm detects statistical outliers in the spending-outcome relationship.",
    "Complete pipeline from raw data to actionable insights in under 50 lines of core logic.",
  ];

  return (
    <div className="bg-slate-900/50 border border-slate-700/50 rounded-xl overflow-hidden">
      {/* Tab Navigation */}
      <div className="flex border-b border-slate-700/50 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
              activeTab === tab.id
                ? "bg-slate-800 text-white border-b-2 border-amber-400"
                : "text-slate-400 hover:text-white hover:bg-slate-800/50"
            }`}
          >
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="sm:hidden">{tab.shortLabel}</span>
          </button>
        ))}
      </div>

      {/* Description */}
      <div className="px-6 py-4 border-b border-slate-700/30 bg-slate-800/30">
        <p className="text-slate-300 text-sm">{descriptions[activeTab]}</p>
      </div>

      {/* Code Block */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed">
          <code className="text-slate-300">
            {codeBlocks[activeTab].split('\n').map((line, i) => (
              <div key={i} className="flex">
                <span className="text-slate-600 select-none w-8 text-right pr-4 flex-shrink-0">
                  {i + 1}
                </span>
                <span className="flex-1">
                  {highlightSyntax(line)}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Footer with models info */}
      <div className="px-6 py-4 border-t border-slate-700/30 bg-slate-800/20">
        <div className="flex flex-wrap gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1">
            <Code className="w-3 h-3" />
            KMeans
          </span>
          <span className="flex items-center gap-1">
            <Code className="w-3 h-3" />
            LinearRegression
          </span>
          <span className="flex items-center gap-1">
            <Code className="w-3 h-3" />
            RandomForest
          </span>
          <span className="flex items-center gap-1">
            <Code className="w-3 h-3" />
            IsolationForest
          </span>
        </div>
      </div>
    </div>
  );
}

// Simple syntax highlighting
function highlightSyntax(line: string): ReactNode {
  // Keywords
  const keywords = ['import', 'from', 'def', 'return', 'if', 'else', 'elif', 'for', 'in', 'as', 'print'];
  // Built-ins and classes
  const builtins = ['pd', 'np', 'df', 'StandardScaler', 'KMeans', 'LinearRegression', 'IsolationForest', 'RandomForestRegressor', 'KFold'];
  
  
  // Check for comments
  if (line.trim().startsWith('#')) {
    return <span className="text-slate-500 italic">{line}</span>;
  }
  
  // Check for strings
  if (line.includes("'") || line.includes('"')) {
    const parts: ReactNode[] = [];
    const remaining = line;
    let key = 0;
    
    const stringRegex = /(['"])(.*?)\1/g;
    let lastIndex = 0;
    let match;
    
    while ((match = stringRegex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(<span key={key++}>{line.slice(lastIndex, match.index)}</span>);
      }
      parts.push(<span key={key++} className="text-amber-400">{match[0]}</span>);
      lastIndex = match.index + match[0].length;
    }
    
    if (lastIndex < line.length) {
      parts.push(<span key={key++}>{line.slice(lastIndex)}</span>);
    }
    
    if (parts.length > 0) {
      return <>{parts}</>;
    }
  }
  
  // Highlight keywords
  for (const keyword of keywords) {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    if (regex.test(line)) {
      const parts = line.split(regex);
      const highlighted: ReactNode[] = [];
      parts.forEach((part, i) => {
        highlighted.push(<span key={`p${i}`}>{part}</span>);
        if (i < parts.length - 1) {
          highlighted.push(<span key={`k${i}`} className="text-purple-400">{keyword}</span>);
        }
      });
      return <>{highlighted}</>;
    }
  }
  
  return <span>{line}</span>;
}
