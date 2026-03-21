import Link from "next/link";
import {
  Shield,
  Code2,
  FlaskConical,
  ClipboardCheck,
  Brain,
  Search,
  ArrowLeft,
  CheckCircle,
} from "lucide-react";

const skillDetails = [
  {
    icon: Shield,
    title: "Container & Orchestration Security",
    tag: "Offensive Security",
    summary:
      "Comprehensive penetration testing of containerized environments and orchestration platforms to uncover critical vulnerabilities before threat actors can exploit them.",
    details: [
      "Full-scope black-box, grey-box, and white-box penetration testing of Kubernetes clusters, including control plane components, RBAC policies, and node-level attack surfaces.",
      "Exploitation of container escape vulnerabilities, misconfigured pod security contexts, exposed Docker sockets, and overprivileged service accounts.",
      "Kubernetes-specific attack chain simulation: from initial foothold in a compromised pod through lateral movement to cluster-admin escalation.",
      "Testing aligned with the OWASP Kubernetes Top 10, CIS Kubernetes Benchmark, and NIST SP 800-190 (Application Container Security Guide).",
      "Detailed reporting with CVSS scoring, proof-of-concept exploits, and prioritized remediation guidance covering both runtime and infrastructure layers.",
      "Post-remediation validation testing to confirm fixes are effective and no regressions introduced.",
    ],
    tools: ["Trivy", "Falco", "kube-bench", "Metasploit", "Peirates", "Deepce", "Nmap"],
  },
  {
    icon: Code2,
    title: "Source Code Reviews",
    tag: "Code Analysis",
    summary:
      "In-depth static analysis and manual code reviews to identify security flaws, logic errors, and insecure coding patterns at the source level.",
    details: [
      "Manual and automated static application security testing (SAST) across multiple programming languages including Python, Java, Go, and JavaScript.",
      "Identification of insecure cryptographic implementations, hardcoded secrets, injection sinks, and unsafe deserialization.",
      "Review of authentication and authorization logic, session management, and data validation routines.",
      "Integration guidance for secure SDLC practices, including CI/CD pipeline security gates.",
      "Developer-friendly findings with annotated code snippets and concrete fix recommendations.",
    ],
    tools: ["Semgrep", "SonarQube", "Checkmarx", "Snyk Code", "CodeQL"],
  },
  {
    icon: FlaskConical,
    title: "Security Testing",
    tag: "Testing",
    summary:
      "End-to-end security testing across web, API, and cloud environments using industry-standard methodologies.",
    details: [
      "API security testing including REST, GraphQL, and gRPC endpoints for authentication flaws, rate limiting bypass, and data exposure.",
      "Cloud-native security testing on AWS covering IAM misconfigurations, S3 bucket policies, Lambda functions, and container security.",
      "Network-layer testing including firewall rule analysis, port scanning, and protocol-level vulnerabilities.",
      "Automated regression security testing integration into CI/CD pipelines for continuous assurance.",
      "Threat modeling sessions using STRIDE and PASTA methodologies to proactively identify risks early in development.",
    ],
    tools: [
      "AWS Security Hub",
      "Prowler",
      "ScoutSuite",
      "Postman",
      "Trivy",
      "Nessus",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Cyber Security Auditing",
    tag: "Compliance",
    summary:
      "Thorough security audits aligned with compliance frameworks including SOC 2, ISO 27001, CIS Benchmarks, and AWS Well-Architected.",
    details: [
      "AWS Well-Architected Framework security pillar reviews with detailed gap analysis and remediation roadmaps.",
      "CIS AWS Foundations Benchmark assessments with automated and manual validation of over 50 controls.",
      "SOC 2 Type II readiness assessments covering security, availability, and confidentiality trust service criteria.",
      "ISO 27001 audit support including risk register development, control mapping, and evidence collection.",
      "Cloud governance audits covering tagging policies, resource management, logging, and monitoring configurations.",
    ],
    tools: [
      "AWS Config",
      "AWS Security Hub",
      "Prowler",
      "CloudMapper",
      "Steampipe",
    ],
  },
  {
    icon: Brain,
    title: "AI/ML Penetration Testing",
    tag: "Emerging Tech",
    summary:
      "Specialized adversarial testing of AI and machine learning systems, including LLM security, prompt injection, and model integrity assessments.",
    details: [
      "Prompt injection and jailbreak testing of Large Language Models (LLMs) deployed in production environments.",
      "Model inversion and membership inference attack simulation to assess data leakage risks.",
      "Testing of AI-powered applications for indirect prompt injection via retrieval-augmented generation (RAG) pipelines.",
      "Evaluation of agentic AI systems for tool misuse, privilege escalation through tool calls, and unintended action execution.",
      "AI supply chain security review covering model provenance, training data integrity, and third-party model risks.",
    ],
    tools: [
      "Garak",
      "PyRIT",
      "LLM Guard",
      "Burp Suite AI Extensions",
      "Custom Adversarial Frameworks",
    ],
  },
  {
    icon: Search,
    title: "Vulnerability Assessments",
    tag: "Risk Management",
    summary:
      "Systematic identification, classification, and prioritization of security vulnerabilities across cloud infrastructure, networks, and applications.",
    details: [
      "Comprehensive vulnerability scanning of cloud infrastructure, containers, and virtual machines with false-positive triage.",
      "Risk-based vulnerability prioritization using CVSS scores, exploit availability, asset criticality, and business context.",
      "Continuous vulnerability management program design including SLA definition, ticketing integration, and KPI tracking.",
      "Attack surface mapping and external exposure analysis to identify unknown and shadow IT assets.",
      "Executive and technical reporting with trend analysis, risk scoring, and remediation progress tracking.",
    ],
    tools: [
      "Tenable.io",
      "Qualys VMDR",
      "AWS Inspector",
      "Rapid7 InsightVM",
      "Trivy",
    ],
  },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#020817]">
      {/* Header */}
      <div className="bg-[#0a1628] border-b border-cyan-400/10 pt-28 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            Back to Home
          </Link>

          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Deep Dive
          </p>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            Skills &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
              Expertise
            </span>
          </h1>
          <p className="text-slate-400 text-xl max-w-3xl leading-relaxed">
            A detailed breakdown of each area of expertise: the methodologies, tools, and deliverables that define my approach to cloud security consulting at AWS.
          </p>
        </div>
      </div>

      {/* Skills Detail */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="space-y-12">
          {skillDetails.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="card-glow bg-[#0a1628]/60 backdrop-blur-sm rounded-3xl p-8 md:p-12"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {/* Left */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-cyan-400" />
                      </div>
                      <span className="text-xs font-semibold text-cyan-400/70 tracking-widest uppercase bg-cyan-400/10 px-3 py-1 rounded-full">
                        {skill.tag}
                      </span>
                    </div>

                    <h2 className="text-2xl font-black text-white mb-4 leading-snug">
                      {skill.title}
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {skill.summary}
                    </p>

                    {/* Tools */}
                    <div>
                      <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-3">
                        Tools & Frameworks
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {skill.tools.map((tool) => (
                          <span
                            key={tool}
                            className="text-xs bg-[#020817]/80 border border-cyan-400/20 text-slate-300 px-3 py-1.5 rounded-lg font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-2">
                    <p className="text-slate-500 text-xs font-semibold tracking-widest uppercase mb-5">
                      What's Included
                    </p>
                    <ul className="space-y-4">
                      {skill.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-200" />
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {detail}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-[#0a1628]/60 border border-cyan-400/15 rounded-3xl p-12">
            <h3 className="text-3xl font-black text-white mb-4">
              Ready to Secure Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                Cloud Infrastructure?
              </span>
            </h3>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
              Let's discuss how these skills can be applied to your organization's security challenges.
            </p>
            <a
              href="https://www.linkedin.com/in/nic-gumina/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-cyan px-10 py-4 rounded-xl text-base"
            >
              Get In Touch on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}