"use client";

export default function Footer() {
  return (
    <footer className="bg-[#020817] border-t border-cyan-400/10 py-8 text-center">
      <p className="text-slate-500 text-sm">
        © {new Date().getFullYear()} Nic Gumina. All rights reserved.
      </p>
      <p className="text-slate-600 text-xs mt-1">
        Cloud Security Consultant · AWS
      </p>
    </footer>
  );
}