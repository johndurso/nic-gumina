import { ExternalLink, Play, Video } from "lucide-react";

const webinars = [
  {
    title: "AWS Security Deep Dive",
    description:
      "An in-depth walkthrough of AWS security best practices, threat modeling, and real-world attack scenarios on cloud infrastructure.",
    url: "https://youtu.be/c8k6ramUSNQ?si=VA7oTq04GYwUpLQm",
    type: "youtube",
    embedId: "c8k6ramUSNQ",
    tag: "AWS Security",
  },
  {
    title: "Zero Trust for Agentic AI",
    description:
      "Exploring Zero Trust architecture principles applied to agentic AI systems with IBM, HashiCorp, and AWS experts.",
    url: "https://webinars.techstronglearning.com/zero-trust-for-agentic-ai-ibm-hashicorp-and-aws",
    type: "external",
    tag: "AI Security",
  },
  {
    title: "Strengthen AWS Infrastructure Security with Sentinel in Terraform",
    description:
      "Learn how to enforce security policies and strengthen AWS infrastructure security using HashiCorp Sentinel within Terraform workflows.",
    url: "https://webinars.techstronglearning.com/strengthen-aws-infrastructure-security-with-sentinel-in-terraform",
    type: "external",
    tag: "Infrastructure",
  },
  {
    title: "Prevent Secret Sprawl with HCP Vault Radar",
    description:
      "A deep dive into preventing secret sprawl across cloud environments using HashiCorp Vault Radar on AWS, published on the AWS Partner Network blog.",
    url: "https://aws.amazon.com/blogs/apn/prevent-secret-sprawl-with-hcp-vault-radar/",
    type: "external",
    tag: "Secrets Management",
  },
];

export default function Webinars() {
  return (
    <section id="webinars" className="py-28 bg-[#020817] relative">
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="section-accent" />
          </div>
          <p className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Knowledge Sharing
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Webinars &{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
              Talks
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg leading-relaxed">
            Nic's cloud security expertise through webinars, panels, and published content with the broader security community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {webinars.map((webinar) => (
            <div
              key={webinar.title}
              className="card-glow bg-[#0a1628]/60 backdrop-blur-sm rounded-2xl overflow-hidden group"
            >
              {/* YouTube Embed */}
              {webinar.type === "youtube" && webinar.embedId ? (
                <div className="relative w-full aspect-video bg-[#020817]">
                  <iframe
                    src={`https://www.youtube.com/embed/${webinar.embedId}`}
                    title={webinar.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : (
                /* Placeholder for external links */
                <div className="relative w-full aspect-video bg-gradient-to-br from-navy-900 to-navy-800 flex items-center justify-center border-b border-cyan-400/10">
                  <div className="absolute inset-0 grid-pattern opacity-30" />
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors duration-300">
                      <Video className="w-8 h-8 text-cyan-400" />
                    </div>
                    <span className="text-slate-500 text-sm">
                      External Webinar
                    </span>
                  </div>
                </div>
              )}

              {/* Content */}
              <div className="p-7">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <span className="text-xs font-semibold text-cyan-400/70 tracking-widest uppercase bg-cyan-400/10 px-3 py-1 rounded-full flex-shrink-0">
                    {webinar.tag}
                  </span>
                </div>

                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
                  {webinar.title}
                </h3>

                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {webinar.description}
                </p>

                <a
                  href={webinar.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition-colors duration-200 group/link"
                >
                  {webinar.type === "youtube" ? (
                    <>
                      <Play className="w-4 h-4" />
                      Watch on YouTube
                    </>
                  ) : (
                    <>
                      <ExternalLink className="w-4 h-4" />
                      View Webinar
                    </>
                  )}
                  <span className="inline-block group-hover/link:translate-x-1 transition-transform duration-200">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}