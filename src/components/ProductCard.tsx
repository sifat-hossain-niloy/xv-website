"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  features?: string[];
  index?: number;
}

export default function ProductCard({
  title,
  description,
  image,
  link = "/contact",
  features,
  index = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative h-[480px] rounded-3xl overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-500" />

      {/* Decorative Border */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-[var(--primary)]/30 transition-colors duration-500" />

      {/* Content Container */}
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-end", 
        padding: "1.5rem 1.5rem 2rem 1.5rem"
      }}>
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.2 }}
          style={{ marginBottom: "auto", paddingTop: "0.5rem" }}
        >
          <span style={{
            display: "inline-block",
            padding: "0.25rem 0.5rem",
            borderRadius: "0.75rem",
            backgroundColor: "rgba(160, 173, 160, 0.2)",
            backdropFilter: "blur(4px)",
            border: "1px solid rgba(0, 128, 0, 0.3)",
            color: "var(--green-dark)",
            fontSize: "0.75rem",
            fontWeight: 500,
            textTransform: "uppercase",
            letterSpacing: "0.1em"
          }}>
            Premium
          </span>
        </motion.div>

        {/* Main Content */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Title - always visible, moves up on hover */}
          <h3 
            style={{ fontSize: "1.375rem", fontWeight: 700, color: "#fff", transition: "all 0.4s ease" }} 
            className="group-hover:text-[var(--green-light)] translate-y-0 group-hover:-translate-y-0"
          >
            {title}
          </h3>

          {/* Hidden content container - expands on hover */}
          <div 
            style={{ overflow: "hidden", transition: "all 0.4s ease" }}
            className="max-h-0 group-hover:max-h-[200px] opacity-0 group-hover:opacity-100"
          >
            {/* Description */}
            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.875rem", lineHeight: 1.6, marginTop: "0.75rem" }}>
              {description}
            </p>

            {/* Features */}
            {features && features.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.75rem", paddingBottom: "0.25rem" }}>
                {features.slice(0, 3).map((feature, i) => (
                  <span
                    key={i}
                    style={{ 
                      padding: "0.375rem 0.625rem", 
                      borderRadius: "0.375rem", 
                      backgroundColor: "rgba(255,255,255,0.15)", 
                      backdropFilter: "blur(4px)",
                      color: "rgba(255,255,255,0.85)", 
                      fontSize: "0.75rem" 
                    }}
                  >
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Shine Effect on Hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
    </motion.div>
  );
}
