"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ 
        textAlign: centered ? "center" : "left",
        marginBottom: "5rem"
      }}
    >
      {subtitle && (
        <span 
          style={{
            display: "inline-block",
            padding: "0.375rem 1rem",
            borderRadius: "9999px",
            backgroundColor: "rgba(50, 82, 50, 0.15)",
            border: "1px solid rgba(50, 82, 50, 0.3)",
            color: "#4a7a4a",
            fontSize: "0.75rem",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1.5rem"
          }}
        >
          {subtitle}
        </span>
      )}
      <h2
        style={{
          fontSize: "clamp(1.875rem, 5vw, 3.75rem)",
          fontWeight: 700,
          marginBottom: "1.5rem",
          color: light ? "#1f2937" : "#ffffff"
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            maxWidth: "42rem",
            margin: centered ? "0 auto" : "0",
            fontSize: "1.125rem",
            lineHeight: 1.75,
            color: light ? "#4b5563" : "rgba(255, 255, 255, 0.5)",
            textAlign: centered ? "center" : "left"
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
