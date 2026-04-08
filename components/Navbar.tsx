"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Crown, ExternalLink } from "lucide-react";

const navLinks = [
  { label: "Events", href: "#events" },
  { label: "Vibe", href: "#vibe" },
  { label: "Social", href: "#social" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route/link click
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      {/* ── Floating Navbar Shell ─────────────────────────────────────────── */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-3xl"
        aria-label="Main navigation"
      >
        <nav
          className="flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(0,0,0,0.85)"
              : "rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.15)"
              : "0 4px 16px rgba(0,0,0,0.3)",
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#hero");
            }}
            className="flex items-center gap-2 group"
          >
            <Crown
              size={18}
              style={{ color: "var(--gold)" }}
              className="transition-transform duration-300 group-hover:rotate-12"
            />
            <span
              className="text-sm font-bold tracking-[0.15em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              Maal
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="relative text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-200 group cursor-pointer"
                  style={{ color: "var(--text-secondary)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--text-primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--text-secondary)")
                  }
                >
                  {link.label}
                  <span
                    className="absolute -bottom-0.5 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                    style={{ background: "var(--gold)" }}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="hidden md:flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-semibold tracking-[0.1em] uppercase transition-all duration-200 hover:brightness-110"
            style={{ background: "var(--gold)", color: "#000" }}
          >
            <ExternalLink size={12} />
            Book Now
          </a>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl transition-colors duration-200"
            style={{
              background: isOpen
                ? "rgba(201,168,76,0.15)"
                : "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: isOpen ? "var(--gold)" : "var(--text-primary)",
            }}
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={18} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={18} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile Dropdown Menu ──────────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.96 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[88px] left-1/2 -translate-x-1/2 z-40 w-[calc(100%-2rem)] max-w-sm rounded-2xl overflow-hidden"
            style={{
              background: "rgba(6,6,6,0.96)",
              border: "1px solid rgba(201,168,76,0.2)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.8)",
            }}
          >
            <ul className="flex flex-col p-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.25 }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="w-full flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium tracking-[0.1em] uppercase transition-colors duration-150 cursor-pointer"
                    style={{ color: "var(--text-primary)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "rgba(201,168,76,0.08)";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--gold)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                      (e.currentTarget as HTMLElement).style.color =
                        "var(--text-primary)";
                    }}
                  >
                    {link.label}
                    <span
                      className="text-xs"
                      style={{ color: "var(--text-muted)" }}
                    >
                      →
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>

            <div
              className="p-3 pt-0"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="flex items-center justify-center gap-2 w-full rounded-xl px-4 py-3 text-sm font-bold tracking-[0.1em] uppercase transition-all duration-200 mt-3 hover:brightness-110"
                style={{ background: "var(--gold)", color: "#000" }}
              >
                Book Maal
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 md:hidden"
            style={{ background: "rgba(0,0,0,0.5)" }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
