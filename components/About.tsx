import { User, Award, Cloud } from "lucide-react";

const stats = [
  { label: "Years in Security", value: "8+" },
  { label: "AWS Certifications", value: "5+" },
  { label: "Engagements Completed", value: "100+" },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0a1628] relative overflow-hidden">
      {/* Decorative orb */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual Panel */}
          <div className="relative">
            {/* Main card */}
            <div className="bg-[#020817]/80 rounded-3xl p-10 border border-cyan-400/10 shadow-2xl">
              {/* Avatar placeholder */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center mb-8 shadow-lg shadow-cyan-400/30">
                <User className="w-12 h-12 text-[#020817]" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">
                Nic Gumina
              </h3>
              <p className="text-cyan-400 font-medium mb-6">
                Cloud Security Consultant · AWS
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#0a1628]/60 rounded-xl p-4 text-center border border-cyan-400/10"
                  >
                    <div className="text-2xl font-black text-cyan-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-slate-500 text-xs leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl p-4 shadow-xl shadow-cyan-400/30 flex items-center gap-3">
              <Cloud className="w-6 h-6 text-[#020817]" />
              <div>
                <p className="text-[#020817] font-black text-sm">AWS</p>
                <p className="text-[#020817]/70 text-xs font-medium">
                  Certified
                </p>
              </div>
            </div>

            {/* Award badge */}
            <div className="absolute -top-5 -left-5 bg-[#0a1628] border border-cyan-400/30 rounded-2xl p-4 shadow-xl flex items-center gap-3">
              <Award className="w-6 h-6 text-cyan-400" />
              <div>
                <p className="text-white font-bold text-sm">Security</p>
                <p className="text-slate-400 text-xs">Expert</p>
              </div>
            </div>
          </div>

          {/* Right: Text Content */}
          <div>
            <div className="section-accent mb-4" />
            <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
              About Nic
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
              Securing the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
                Cloud
              </span>
            </h2>

            <div className="space-y-6">
              <p className="text-slate-400 text-lg leading-relaxed">
                Nic Gumina has been in the InfoSec realm of the professional world for over 10 years. He's a Cloud Security Consultant at Amazon Web Services (AWS), based in the Detroit Metropolitan Area. Passionate about all things security, Nic has a particular focus on containers and helping organizations build secure, scalable cloud infrastructure. With a deep understanding of the AWS ecosystem, he works alongside enterprise teams to identify vulnerabilities, implement best practices, and strengthen their overall security posture.
              </p>

              <p className="text-slate-400 text-lg leading-relaxed">
                Nic is also an active contributor to the broader cloud security community. He has co-authored technical content on the AWS Partner Network Blog, tackling real-world challenges such as secret sprawl, where unmanaged secrets proliferate across development environments, source code repositories, and infrastructure components, creating security vulnerabilities and compliance risks. Whether advising clients or sharing knowledge through published work, Nic is dedicated to making cloud environments safer for organizations of all sizes.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <a
                href="https://www.linkedin.com/in/nic-gumina/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 btn-outline-cyan px-4 py-2 rounded-xl text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}