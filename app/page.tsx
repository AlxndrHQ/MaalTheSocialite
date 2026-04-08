"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Camera,
  Music2,
  Mail,
  Phone,
  Crown,
  Flame,
  Sparkles,
  ExternalLink,
  Heart,
  TrendingUp,
  Send,
  PartyPopper,
  AtSign,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import EventCard from "@/components/EventCard";

// ─── Animation Variants ────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: "easeOut" as const, delay: i * 0.1 },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

// ─── Events Data ───────────────────────────────────────────────────────────
const EVENTS = [
  {
    day: "19",
    month: "APR",
    title: "The Takeover",
    subtitle: "Brunch & Day Party",
    venue: "1923 Lounge",
    city: "Washington, DC",
    time: "12 PM – 6 PM",
    href: "https://linktr.ee/Maalthesocialite",
    accent: "gold" as const,
    badge: "FEATURED",
  },
  {
    day: "26",
    month: "APR",
    title: "Noir Nights",
    subtitle: "Upscale Social Mixer",
    venue: "The Wyn Hotel",
    city: "Washington, DC",
    time: "9 PM – 2 AM",
    href: "https://linktr.ee/Maalthesocialite",
    accent: "blue" as const,
    badge: "NEW",
  },
  {
    day: "10",
    month: "MAY",
    title: "Elevated Sundays",
    subtitle: "VIP Rooftop Experience",
    venue: "LGND Rooftop",
    city: "New York, NY",
    time: "3 PM – 9 PM",
    href: "https://linktr.ee/Maalthesocialite",
    accent: "gold" as const,
  },
];

// ─── Vibe Feed Placeholder Images ──────────────────────────────────────────
const VIBE_IMAGES = [
  { id: 1, aspect: "tall", label: "Night Out" },
  { id: 2, aspect: "wide", label: "Brunch Vibes" },
  { id: 3, aspect: "square", label: "VIP Access" },
  { id: 4, aspect: "tall", label: "The Scene" },
  { id: 5, aspect: "square", label: "Rooftop Life" },
  { id: 6, aspect: "wide", label: "DC Nights" },
];

// ─── Social Links ──────────────────────────────────────────────────────────
const SOCIALS = [
  {
    platform: "Instagram",
    handle: "@maalthesocialite",
    followers: "Follow on IG",
    icon: Camera,
    href: "https://instagram.com/maalthesocialite",
    accent: "gold" as const,
    metric: "Content Daily",
    metricIcon: Heart,
  },
  {
    platform: "TikTok",
    handle: "@maalthesocialite",
    followers: "Watch on TikTok",
    icon: Music2,
    href: "https://tiktok.com/@maalthesocialite",
    accent: "blue" as const,
    metric: "Trending Clips",
    metricIcon: TrendingUp,
  },
];

// ─── Page Component ────────────────────────────────────────────────────────
export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.06]);
  const heroBgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="relative min-h-screen" style={{ background: "#000" }}>
      <Navbar />

      {/* ──────────────────────────────────────────────────────────────────
          HERO SECTION
      ────────────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        ref={heroRef}
        className="relative flex min-h-screen items-end justify-center overflow-hidden pb-24"
      >
        {/* Video / Background Layer */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale: heroScale, y: heroBgY }}
        >
          {/* Video loop placeholder — swap src for actual video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            style={{ opacity: 0.4 }}
            aria-hidden="true"
          >
            {/* Add your video source here: <source src="/hero.mp4" type="video/mp4" /> */}
          </video>

          {/* Fallback gradient when no video */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, #0a0a0a 0%, #1a1200 50%, #000d1a 100%)",
            }}
          />

          {/* Noise texture overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundSize: "200px",
            }}
          />
        </motion.div>

        {/* Gradient Vignettes */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center top, transparent 30%, rgba(0,0,0,0.7) 100%)",
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 z-10 h-2/3 pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #000 0%, #00000099 40%, transparent 100%)",
          }}
        />

        {/* Gold Orb Glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Hero Content */}
        <motion.div
          className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          {/* Crown Badge */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 mb-6 rounded-full px-4 py-1.5"
            style={{
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.3)",
            }}
          >
            <Crown size={14} style={{ color: "var(--gold)" }} />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "var(--gold)" }}
            >
              DC · NYC · Worldwide
            </span>
            <Sparkles size={12} style={{ color: "var(--gold)" }} />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-serif text-6xl sm:text-8xl md:text-[110px] font-black leading-none tracking-tight mb-2"
          >
            <span className="block shimmer-text">MAAL</span>
            <span
              className="block text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.3em] uppercase mt-2"
              style={{ color: "var(--text-secondary)" }}
            >
              THE SOCIALITE
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-6 text-base sm:text-lg max-w-sm leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Your exclusive pass to the best events, parties, and experiences
            in&nbsp;DC&nbsp;&&nbsp;NYC.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row items-center gap-3 mt-10"
          >
            <a
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#events")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold tracking-[0.1em] uppercase transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5"
              style={{ background: "var(--gold)", color: "#000" }}
            >
              <PartyPopper size={16} />
              View Events
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-semibold tracking-[0.1em] uppercase transition-all duration-200 hover:bg-white/10"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "var(--text-primary)",
              }}
            >
              <Send size={14} />
              Book Me
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="mt-16 flex flex-col items-center gap-2"
            style={{ color: "var(--text-muted)" }}
          >
            <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="w-px h-8"
              style={{ background: "linear-gradient(to bottom, var(--gold), transparent)" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          EVENTS / RSVP SECTION
      ────────────────────────────────────────────────────────────────── */}
      <section id="events" className="relative py-24 px-6">
        {/* Section glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, var(--gold), transparent)" }}
        />

        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: "linear-gradient(to right, transparent, var(--gold))" }}
              />
              <span
                className="text-xs font-bold tracking-[0.3em] uppercase"
                style={{ color: "var(--gold)" }}
              >
                Upcoming Events
              </span>
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: "linear-gradient(to left, transparent, var(--gold))" }}
              />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Be in the Room
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm max-w-sm mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Exclusive brunches, rooftop parties, and curated mixers.
              Limited capacity — secure your spot.
            </motion.p>
          </motion.div>

          {/* Event Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="flex flex-col gap-4"
          >
            {EVENTS.map((event) => (
              <EventCard key={`${event.day}-${event.month}`} {...event} />
            ))}
          </motion.div>

          {/* All Events CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <a
              href="https://linktr.ee/Maalthesocialite"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide transition-colors duration-200"
              style={{ color: "var(--gold)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--gold-light)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--gold)")
              }
            >
              View all events on Linktree
              <ExternalLink size={14} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          VIBE FEED SECTION
      ────────────────────────────────────────────────────────────────── */}
      <section id="vibe" className="py-24 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-10 text-center"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: "linear-gradient(to right, transparent, var(--blue))" }}
              />
              <span
                className="text-xs font-bold tracking-[0.3em] uppercase"
                style={{ color: "var(--blue-light)" }}
              >
                The Vibe
              </span>
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: "linear-gradient(to left, transparent, var(--blue))" }}
              />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              The Lifestyle
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm"
              style={{ color: "var(--text-secondary)" }}
            >
              Moments from DC &amp; NYC — the scenes, the faces, the energy.
            </motion.p>
          </motion.div>

          {/* Masonry-style grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[180px]"
          >
            {VIBE_IMAGES.map((img, i) => (
              <motion.div
                key={img.id}
                variants={fadeUp}
                custom={i}
                className={`relative rounded-2xl overflow-hidden group cursor-pointer ${
                  img.aspect === "tall" ? "row-span-2" : ""
                }`}
                style={{
                  background: "var(--card)",
                  border: "1px solid var(--card-border)",
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              >
                {/* Placeholder gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg,
                      hsl(${(i * 47) % 360}, 20%, 8%) 0%,
                      hsl(${(i * 47 + 60) % 360}, 15%, 14%) 100%)`,
                  }}
                />

                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4"
                  style={{ background: "rgba(0,0,0,0.6)" }}
                >
                  <span
                    className="text-xs font-semibold tracking-[0.15em] uppercase"
                    style={{ color: "var(--gold)" }}
                  >
                    {img.label}
                  </span>
                </div>

                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera
                    size={28}
                    className="opacity-10 group-hover:opacity-20 transition-opacity duration-300"
                    style={{ color: "var(--gold)" }}
                  />
                </div>

                {/* Replace images instruction */}
                {i === 0 && (
                  <div
                    className="absolute top-2 left-2 text-[9px] font-bold tracking-widest uppercase rounded-md px-1.5 py-0.5 opacity-50"
                    style={{ background: "var(--gold-muted)", color: "var(--gold)" }}
                  >
                    Add Photos
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SOCIAL CONTENT SECTION
      ────────────────────────────────────────────────────────────────── */}
      <section id="social" className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          {/* Section header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="mb-12 text-center"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: "linear-gradient(to right, transparent, var(--gold))" }}
              />
              <span
                className="text-xs font-bold tracking-[0.3em] uppercase"
                style={{ color: "var(--gold)" }}
              >
                Social Content
              </span>
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: "linear-gradient(to left, transparent, var(--gold))" }}
              />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl font-bold"
              style={{ color: "var(--text-primary)" }}
            >
              Follow the Movement
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-3 text-sm max-w-xs mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Daily content, behind-the-scenes access, and nightlife coverage.
            </motion.p>
          </motion.div>

          {/* Social Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {SOCIALS.map((social) => {
              const Icon = social.icon;
              const MetricIcon = social.metricIcon;
              const accent =
                social.accent === "gold" ? "var(--gold)" : "var(--blue)";
              const accentMuted =
                social.accent === "gold" ? "var(--gold-muted)" : "var(--blue-muted)";
              const accentLight =
                social.accent === "gold" ? "var(--gold-light)" : "var(--blue-light)";

              return (
                <motion.a
                  key={social.platform}
                  variants={fadeUp}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-4 rounded-2xl p-6 group transition-all duration-300"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--card-border)",
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = accent;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 8px 32px ${accentMuted}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "var(--card-border)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {/* Platform icon */}
                  <div
                    className="flex items-center justify-between"
                  >
                    <div
                      className="flex items-center justify-center w-12 h-12 rounded-2xl transition-transform duration-300 group-hover:scale-110"
                      style={{ background: accentMuted }}
                    >
                      <Icon size={22} style={{ color: accent }} />
                    </div>
                    <ExternalLink
                      size={16}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      style={{ color: accent }}
                    />
                  </div>

                  {/* Platform info */}
                  <div>
                    <p
                      className="text-xs font-semibold tracking-[0.2em] uppercase mb-1"
                      style={{ color: accentLight }}
                    >
                      {social.platform}
                    </p>
                    <p className="font-bold text-lg" style={{ color: "var(--text-primary)" }}>
                      {social.handle}
                    </p>
                  </div>

                  {/* Metric pill */}
                  <div
                    className="flex items-center gap-2 rounded-xl px-3 py-2 self-start"
                    style={{ background: accentMuted }}
                  >
                    <MetricIcon size={12} style={{ color: accent }} />
                    <span className="text-xs font-semibold" style={{ color: accentLight }}>
                      {social.metric}
                    </span>
                  </div>

                  {/* CTA */}
                  <div
                    className="flex items-center gap-2 text-sm font-semibold tracking-wide"
                    style={{ color: accent }}
                  >
                    {social.followers}
                    <Flame size={14} />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Linktree pill */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 flex justify-center"
          >
            <a
              href="https://linktr.ee/Maalthesocialite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-200 hover:brightness-110"
              style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
                color: "var(--text-secondary)",
              }}
            >
              <AtSign size={14} style={{ color: "var(--gold)" }} />
              All links at Linktree
              <ExternalLink size={12} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          CONTACT / BOOKING FOOTER
      ────────────────────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="relative py-24 px-6"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(201,168,76,0.05) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-12"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center gap-3 mb-4"
            >
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: "linear-gradient(to right, transparent, var(--gold))" }}
              />
              <span
                className="text-xs font-bold tracking-[0.3em] uppercase"
                style={{ color: "var(--gold)" }}
              >
                Business
              </span>
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: "linear-gradient(to left, transparent, var(--gold))" }}
              />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-serif text-4xl sm:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Book Maal
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-sm max-w-sm mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Partnerships, event hosting, brand collaborations, and media
              inquiries. Let&rsquo;s create something unforgettable.
            </motion.p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 mb-12"
          >
            {/* Email */}
            <motion.a
              variants={fadeUp}
              href="mailto:booking@maalthesocialite.com"
              className="flex items-center gap-4 rounded-2xl p-5 group transition-all duration-300"
              style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--gold)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px var(--gold-muted)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--card-border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                style={{ background: "var(--gold-muted)" }}
              >
                <Mail size={20} style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold tracking-[0.15em] uppercase mb-0.5"
                  style={{ color: "var(--gold)" }}
                >
                  Email
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  booking@maalthesocialite.com
                </p>
              </div>
            </motion.a>

            {/* Phone / DM */}
            <motion.a
              variants={fadeUp}
              href="https://instagram.com/maalthesocialite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl p-5 group transition-all duration-300"
              style={{
                background: "var(--card)",
                border: "1px solid var(--card-border)",
              }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--blue)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 32px var(--blue-muted)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "var(--card-border)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl shrink-0"
                style={{ background: "var(--blue-muted)" }}
              >
                <Phone size={20} style={{ color: "var(--blue-light)" }} />
              </div>
              <div>
                <p
                  className="text-xs font-semibold tracking-[0.15em] uppercase mb-0.5"
                  style={{ color: "var(--blue-light)" }}
                >
                  DM for Inquiries
                </p>
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  @maalthesocialite
                </p>
              </div>
            </motion.a>
          </motion.div>

          {/* Footer */}
          <motion.footer
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <div
              className="h-px w-full mb-8"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,255,255,0.1), transparent)",
              }}
            />
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
              style={{ color: "var(--text-muted)" }}>
              <div className="flex items-center gap-2">
                <Crown size={12} style={{ color: "var(--gold)" }} />
                <span className="tracking-[0.15em] uppercase font-semibold" style={{ color: "var(--gold)" }}>
                  Maal The Socialite
                </span>
              </div>
              <span>© {new Date().getFullYear()} · All rights reserved</span>
              <div className="flex items-center gap-4">
                <a
                  href="https://instagram.com/maalthesocialite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Camera size={16} />
                </a>
                <a
                  href="https://tiktok.com/@maalthesocialite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors duration-200"
                  aria-label="TikTok"
                >
                  <Music2 size={16} />
                </a>
                <a
                  href="https://linktr.ee/Maalthesocialite"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-text-primary transition-colors duration-200"
                  aria-label="Linktree"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.footer>
        </div>
      </section>
    </div>
  );
}
