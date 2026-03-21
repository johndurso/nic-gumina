import { MessageSquare, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-28 bg-[#0a1628] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-cyan-400/30" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Header */}
        <div className="flex justify-center mb-4">
          <div className="section-accent" />
        </div>
        <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
          Let's Connect
        </p>
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
          Reach{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
            Out
          </span>{" "}
          to Me
        </h2>

        <p className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed mb-14">
          Whether you're looking to strengthen your cloud security posture,
          schedule a security assessment, or simply want to connect — I'd love
          to hear from you.
        </p>

        {/* Contact Card */}
        <div className="bg-[#020817]/80 border border-cyan-400/15 rounded-3xl p-10 md:p-14 shadow-2xl mb-10">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 border border-cyan-400/30 flex items-center justify-center mx-auto mb-8">
            <MessageSquare className="w-10 h-10 text-cyan-400" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            Connect on LinkedIn
          </h3>
          <p className="text-slate-400 mb-8 max-w-md mx-auto">
            The best way to reach me is through LinkedIn. Send a connection
            request or a direct message and I'll get back to you promptly.
          </p>

          <a
            href="https://www.linkedin.com/in/nic-gumina/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 btn-cyan px-8 py-4 rounded-xl text-md group mx-auto"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            View LinkedIn Profile
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cyan-400/20" />
            <span className="text-slate-600 text-sm">or</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cyan-400/20" />
          </div>

          {/* LinkedIn profile link text */}
          <p className="text-slate-500 text-sm">
            linkedin.com/in/
            <span className="text-cyan-400 font-medium">nic-gumina</span>
          </p>
        </div>
      </div>
    </section>
  );
}