"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 12, suffix: "+", label: "Countries Served" },
  { value: 500, suffix: "+", label: "Products Delivered" },
  { value: 0, suffix: "", label: "Minimum Order Qty" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-gradient" style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", fontWeight: 700 }}>
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section style={{ padding: "8rem 0", position: "relative" }}>
      <div style={{ 
        position: "absolute", 
        inset: 0, 
        background: "linear-gradient(to bottom, var(--background), rgba(15,15,15,1), var(--background))" 
      }} />

      <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "5rem" }}
        >
          <span style={{
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
          }}>
            Track Record
          </span>
          <h2 style={{ fontSize: "clamp(1.875rem, 5vw, 3.75rem)", fontWeight: 700, color: "#fff" }}>
            Numbers That <span className="text-gradient">Speak</span>
          </h2>
        </motion.div>

        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "2rem" 
        }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div style={{
                position: "relative",
                padding: "2.5rem 2rem",
                borderRadius: "1.5rem",
                background: "linear-gradient(to bottom, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
                border: "1px solid rgba(255,255,255,0.1)",
                textAlign: "center",
                transition: "all 0.5s ease"
              }}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.875rem", marginTop: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
