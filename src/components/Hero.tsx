"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage: string;
  showCTA?: boolean;
  ctaText?: string;
  ctaLink?: string;
  showLogo?: boolean;
  smallerTitle?: boolean;
}

export default function Hero({
  title,
  subtitle,
  description,
  backgroundImage,
  showCTA = true,
  ctaText = "Get Quote",
  ctaLink = "/contact",
  showLogo = false,
  smallerTitle = false,
}: HeroProps) {
  return (
    <section style={{ 
      position: "relative", 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      overflow: "hidden"
    }}>
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0
        }}
      />
      
      {/* Dark Overlay */}
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        zIndex: 1,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.5), rgba(0,0,0,0.7))" 
      }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "5rem 2rem", textAlign: "center" }}>
        {(subtitle || showLogo) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: showLogo ? "2rem" : "1.5rem" }}
          >
            {showLogo ? (
              <Image
                src="/logo.jpeg"
                alt="XV Apparels Logo"
                width={160}
                height={160}
                style={{ borderRadius: "1.5rem", margin: "0 auto", boxShadow: "0 10px 40px rgba(0,0,0,0.3)" }}
              />
            ) : (
              <span style={{
                display: "inline-block",
                padding: "0.5rem 1.25rem",
                borderRadius: "9999px",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                backdropFilter: "blur(4px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                color: "#ffffff",
                fontSize: "0.875rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase"
              }}>
                {subtitle}
              </span>
            )}
          </motion.div>
        )}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ 
            fontSize: smallerTitle ? "clamp(1.25rem, 3vw, 2rem)" : "clamp(2.5rem, 8vw, 4.5rem)", 
            fontWeight: 700, 
            lineHeight: 1.1, 
            marginBottom: "2rem",
            color: "#fff",
            padding: "0.5rem 1rem",
            borderRadius: "0.5rem",
            background: "rgba(0,0,0,0.25)",
            backdropFilter: "blur(3px)",
            display: "inline-block"
          }}
        >
          <span style={{
            background: "linear-gradient(135deg, #ffffff 0%, #60ff60 35%, #90ff90 65%, #ffffff 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))"
          }}>
            {title}
          </span>
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ 
              fontSize: "1.125rem", 
              color: "rgba(255,255,255,0.7)", 
              maxWidth: "42rem", 
              margin: showCTA ? "0 auto 3rem auto" : "0 auto 0 auto", 
              lineHeight: 1.75,
              textAlign: "center"
            }}
          >
            {description}
          </motion.p>
        )}

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ display: "flex", flexDirection: "row", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <Link href={ctaLink}>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                {ctaText}
              </motion.button>
            </Link>
            <Link href="/catalogue">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary"
              >
                View Catalogue
              </motion.button>
            </Link>
          </motion.div>
        )}

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}
          >
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
            <div style={{ width: "1px", height: "2.5rem", background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "8rem", background: "linear-gradient(to top, var(--background), transparent)", zIndex: 5 }} />
    </section>
  );
}
