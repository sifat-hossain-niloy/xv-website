"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
  index?: number;
}

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  const stepNumber = String(index + 1).padStart(2, '0');
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group"
      style={{ height: "100%" }}
    >
      <div style={{
        position: "relative",
        height: "100%",
        borderRadius: "1.5rem",
        overflow: "hidden",
        background: "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.04))",
        border: "1px solid rgba(255,255,255,0.15)",
        padding: "2rem",
        transition: "all 0.5s ease"
      }}>
        {/* Step Number Background */}
        <span style={{
          position: "absolute",
          top: "1.5rem",
          right: "1.5rem",
          fontSize: "4.5rem",
          fontWeight: 900,
          color: "rgba(50, 82, 50, 0.12)"
        }}>
          {stepNumber}
        </span>

        {/* Icon Circle */}
        <div style={{
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "1rem",
          background: "linear-gradient(135deg, #325232, #243d24)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1.5rem",
          boxShadow: "0 10px 30px rgba(50, 82, 50, 0.3)"
        }}>
          <Icon style={{ color: "#fff", fontSize: "1.25rem" }} />
        </div>

        <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
          {title}
        </h3>
        <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.7, fontSize: "0.9rem" }}>{description}</p>
      </div>
    </motion.div>
  );
}
