"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Ticket, ChevronRight } from "lucide-react";

export interface EventCardProps {
  /** Full date string, e.g. "SAT, APR 19" */
  date?: string;
  /** Day number rendered large, e.g. "19" */
  day: string;
  /** Month abbreviation, e.g. "APR" */
  month: string;
  /** Event title */
  title: string;
  /** Optional subtitle / theme line */
  subtitle?: string;
  /** Venue name */
  venue: string;
  /** City, e.g. "Washington, DC" */
  city?: string;
  /** Door time / start time, e.g. "9 PM – 2 AM" */
  time?: string;
  /** Ticket / RSVP link */
  href: string;
  /** Visual accent: "gold" | "blue" */
  accent?: "gold" | "blue";
  /** Mark as sold out */
  soldOut?: boolean;
  /** Badge text, e.g. "NEW" | "FEATURED" */
  badge?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function EventCard({
  day,
  month,
  title,
  subtitle,
  venue,
  city,
  time,
  href,
  accent = "gold",
  soldOut = false,
  badge,
}: EventCardProps) {
  const accentColor = accent === "gold" ? "var(--gold)" : "var(--blue)";
  const accentMuted = accent === "gold" ? "var(--gold-muted)" : "var(--blue-muted)";
  const accentLight = accent === "gold" ? "var(--gold-light)" : "var(--blue-light)";

  return (
    <motion.article
      variants={cardVariants}
      whileHover={soldOut ? {} : { y: -4, transition: { duration: 0.2 } }}
      className="relative group flex gap-0 rounded-2xl overflow-hidden"
      style={{
        background: "var(--card)",
        border: "1px solid var(--card-border)",
        boxShadow: `0 0 0 0 ${accentMuted}`,
        transition: "box-shadow 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px 4px ${accentMuted}`;
        (e.currentTarget as HTMLElement).style.borderColor = accentColor;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${accentMuted}`;
        (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border)";
      }}
    >
      {/* Date Column */}
      <div
        className="flex flex-col items-center justify-center w-20 shrink-0 gap-0.5 py-6"
        style={{ background: accentMuted, borderRight: `1px solid ${accentColor}30` }}
      >
        <span
          className="text-3xl font-bold leading-none font-serif"
          style={{ color: accentColor }}
        >
          {day}
        </span>
        <span
          className="text-xs font-semibold tracking-[0.2em] uppercase"
          style={{ color: accentLight }}
        >
          {month}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-4 gap-3">
        <div className="flex flex-col gap-1">
          {badge && (
            <span
              className="self-start text-[10px] font-bold tracking-[0.2em] uppercase px-2 py-0.5 rounded-full"
              style={{
                background: accentMuted,
                color: accentColor,
                border: `1px solid ${accentColor}40`,
              }}
            >
              {badge}
            </span>
          )}
          <h3 className="text-lg font-bold tracking-wide uppercase text-text-primary leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {subtitle}
            </p>
          )}
        </div>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <span
            className="flex items-center gap-1 text-xs"
            style={{ color: "var(--text-secondary)" }}
          >
            <MapPin size={12} style={{ color: accentColor }} />
            {city ? `${venue} · ${city}` : venue}
          </span>
          {time && (
            <span
              className="flex items-center gap-1 text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              <Clock size={12} style={{ color: accentColor }} />
              {time}
            </span>
          )}
        </div>

        {/* CTA */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={soldOut}
          className="mt-1 flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold tracking-wide uppercase transition-all duration-200"
          style={
            soldOut
              ? {
                  background: "var(--text-muted)",
                  color: "#000",
                  cursor: "not-allowed",
                  pointerEvents: "none",
                }
              : {
                  background: accentColor,
                  color: "#000",
                }
          }
          onClick={(e) => soldOut && e.preventDefault()}
        >
          <span className="flex items-center gap-2">
            <Ticket size={14} />
            {soldOut ? "Sold Out" : "Get Tickets"}
          </span>
          {!soldOut && <ChevronRight size={16} />}
        </a>
      </div>
    </motion.article>
  );
}
