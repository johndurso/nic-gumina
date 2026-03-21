import Link from "next/link";
import {
  Shield,
  Code2,
  FlaskConical,
  ClipboardCheck,
  Brain,
  Search,
  ArrowRight,
} from "lucide-react";

const skills = [
  {
    icon: Shield,
    title: "Container & Orchestration Security",
    description:
      "Comprehensive penetration testing of containerized environments and orchestration platforms to uncover critical vulnerabilities before threat actors can exploit them.",
    tag: "Offensive Security",
  },
  {
    icon: Code2,
    title: "Source Code Reviews",
    description:
      "In-depth static analysis and manual code reviews to identify security flaws, logic errors, and insecure coding patterns at the source level.",
    tag: "Code Analysis",
  },
  {
    icon: FlaskConical,
    title: "Security Testing",
    description:
      "End-to-end security testing across web, API, and cloud environments using industry-standard methodologies including OWASP and NIST frameworks.",
    tag: "Testing",
  },
  {
    icon: ClipboardCheck,
    title: "Cyber Security Auditing",
    description:
      "Thorough security audits aligned with compliance frameworks such as SOC 2, ISO 27001, CIS Benchmarks, and AWS Well-Architected security pillars.",
    tag: "Compliance",
  },
  {
    icon: Brain,
    title: "AI/ML Penetration Testing",
    description:
      "Specialized adversarial testing of AI and machine learning systems, including prompt injection, model inversion, data poisoning, and LLM security assessments.",
    tag: "Emerging Tech",
  },
  {
    icon: Search,
    title: "Vulnerability Assessments",
    description:
      "Systematic identification, classification, and prioritization of security vulnerabilities across cloud infrastructure, networks, and applications.",
    tag: "Risk Management",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[#020817] relative">
      {/* Background grid */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="section-accent" />
          </div>
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Core{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
              Skills
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A specialized skill set built at the intersection of cloud
            infrastructure, offensive security, and emerging technology threats.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="card-glow bg-[#0a1628]/60 backdrop-blur-sm rounded-2xl p-7 group cursor-default"
              >
                {/* Tag */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-xs font-semibold text-cyan-400/70 tracking-widest uppercase bg-cyan-400/10 px-3 py-1 rounded-full">
                    {skill.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <Icon className="w-5 h-5 text-cyan-400" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">
                  {skill.description}
                </p>

                {/* Bottom accent */}
                <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-cyan-400 to-transparent group-hover:w-full transition-all duration-500 rounded-full" />
              </div>
            );
          })}
        </div>

        {/* Learn More Button */}
        <div className="text-center">
          <Link
            href="/skills"
            className="inline-flex items-center gap-3 btn-cyan px-6 py-3 rounded-xl text-base group"
          >
            Learn More About My Skills
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
          <p className="text-slate-500 text-sm mt-4">
            Deep dives into each area of expertise
          </p>
        </div>
      </div>
    </section>
  );
}