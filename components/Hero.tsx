"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { ArrowDown, Briefcase, MapPin, Shield, Lock, Cloud, Server, Eye, Key, Wifi, Database, AlertTriangle, CheckCircle, Globe, Cpu } from "lucide-react";

// All the floating icons with their config
const floatingIcons = [
  { Icon: Shield,        size: 32, x: "8%",   y: "15%", duration: 6,   delay: 0    },
  { Icon: Lock,          size: 24, x: "15%",  y: "70%", duration: 7,   delay: 1    },
  { Icon: Cloud,         size: 40, x: "88%",  y: "20%", duration: 8,   delay: 0.5  },
  { Icon: Server,        size: 28, x: "80%",  y: "65%", duration: 6.5, delay: 1.5  },
  { Icon: Eye,           size: 22, x: "25%",  y: "85%", duration: 7.5, delay: 0.8  },
  { Icon: Key,           size: 26, x: "72%",  y: "80%", duration: 6,   delay: 2    },
  { Icon: Wifi,          size: 20, x: "5%",   y: "45%", duration: 9,   delay: 0.3  },
  { Icon: Database,      size: 30, x: "92%",  y: "50%", duration: 7,   delay: 1.2  },
  { Icon: AlertTriangle, size: 22, x: "40%",  y: "90%", duration: 8,   delay: 0.6  },
  { Icon: CheckCircle,   size: 24, x: "60%",  y: "88%", duration: 6.5, delay: 1.8  },
  { Icon: Globe,         size: 36, x: "18%",  y: "25%", duration: 10,  delay: 0.4  },
  { Icon: Cpu,           size: 28, x: "78%",  y: "35%", duration: 7,   delay: 2.2  },
  { Icon: Shield,        size: 18, x: "50%",  y: "92%", duration: 8.5, delay: 1.1  },
  { Icon: Lock,          size: 34, x: "92%",  y: "12%", duration: 6,   delay: 0.9  },
  { Icon: Cloud,         size: 22, x: "3%",   y: "80%", duration: 9,   delay: 1.7  },
];

// Particle dot config
const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1,
  duration: Math.random() * 6 + 4,
  delay: Math.random() * 4,
}));

// Animated connection lines between random points
const connectionLines = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  x1: Math.random() * 100,
  y1: Math.random() * 100,
  x2: Math.random() * 100,
  y2: Math.random() * 100,
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
}));

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020817]"
    >
      {/* ── Animated grid background ── */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Radial glow in center ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(34,211,238,0.07) 0%, transparent 70%)",
        }}
      />

      {/* ── SVG connection lines ── */}
      {mounted && (
        <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          {connectionLines.map((line) => (
            <motion.line
              key={line.id}
              x1={`${line.x1}%`}
              y1={`${line.y1}%`}
              x2={`${line.x2}%`}
              y2={`${line.y2}%`}
              stroke="rgba(34,211,238,0.15)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.6, 0.6, 0] }}
              transition={{
                duration: line.duration,
                delay: line.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
      )}

      {/* ── Floating particles ── */}
      {mounted &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-cyan-400 pointer-events-none z-0"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.5, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      {/* ── Floating security icons ── */}
      {mounted &&
        floatingIcons.map(({ Icon, size, x, y, duration, delay }, i) => (
          <motion.div
            key={i}
            className="absolute z-0 pointer-events-none"
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.08, 0.25, 0.08],
              scale: [0.9, 1.1, 0.9],
              y: [0, -14, 0],
              rotate: [0, i % 2 === 0 ? 8 : -8, 0],
            }}
            transition={{
              opacity:  { duration, delay, repeat: Infinity, ease: "easeInOut" },
              scale:    { duration, delay, repeat: Infinity, ease: "easeInOut" },
              y:        { duration, delay, repeat: Infinity, ease: "easeInOut" },
              rotate:   { duration: duration * 1.5, delay, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Icon size={size} className="text-cyan-400" />
          </motion.div>
        ))}

      {/* ── Large decorative background shield ── */}
      {mounted && (
        <motion.div
          className="absolute z-0 pointer-events-none"
          style={{ left: "50%", top: "50%", x: "-50%", y: "-50%" }}
          animate={{ opacity: [0.02, 0.05, 0.02], scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <Shield size={500} className="text-cyan-400" />
        </motion.div>
      )}

      {/* ── Glowing orbs ── */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }}
        animate={{ scale: [1.2, 1, 1.2], opacity: [1, 0.5, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* ══════════════════════════════
              HERO CONTENT
         ══════════════════════════════ */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-6xl md:text-8xl font-black text-white mb-4 tracking-tight leading-none"
        >
          Nic{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
            Gumina
          </span>
        </motion.h1>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-3 mb-3"
        >
          <Briefcase className="w-5 h-5 text-cyan-400" />
          <p className="text-xl md:text-2xl font-semibold text-slate-200 tracking-wide">
            Cloud Security Consultant
          </p>
        </motion.div>

        {/* Company */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <MapPin className="w-4 h-4 text-cyan-400/70" />
          <p className="text-lg text-slate-400 font-medium">
            at{" "}
            <span className="text-cyan-400 font-bold tracking-wide">
              Amazon Web Services (AWS)
            </span>
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400/50" />
          <div className="w-2 h-2 bg-cyan-400 rounded-full" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.88 }}
          className="text-slate-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Securing cloud infrastructure, identifying vulnerabilities, and
          empowering organizations to build resilient, compliant, and secure
          systems on AWS.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.a
            href="#skills"
            className="btn-cyan px-8 py-4 rounded-lg text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Explore My Skills
          </motion.a>
          <motion.a
            href="#contact"
            className="btn-outline-cyan px-8 py-4 rounded-lg text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.4, duration: 0.6 }, y: { delay: 1.4, duration: 1.8, repeat: Infinity, ease: "easeInOut" } }}
      >
        <span className="text-slate-500 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="w-4 h-4 text-cyan-400/60" />
      </motion.div>
    </section>
  );
}