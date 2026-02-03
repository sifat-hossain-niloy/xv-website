"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { HiMail, HiPhone } from "react-icons/hi";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Apparel", href: "/apparel" },
  { name: "Bags", href: "/bags" },
  { name: "Catalogue", href: "/catalogue" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Custom Hoodies",
  "T-Shirts & Sweatshirts",
  "Jackets & Outerwear",
  "Tote Bags",
  "Canvas Bags",
  "Bulk Orders",
];

export default function Footer() {
  const pathname = usePathname();
  const showCTA = pathname === "/" || pathname === "/contact";
  return (
    <footer style={{ position: "relative", backgroundColor: "#0d0d0d" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "linear-gradient(to right, transparent, rgba(50,82,50,0.4), transparent)" }} />

      <div style={{ padding: "0 2rem" }}>
        {/* CTA Section - Only shown on home and contact pages */}
        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ padding: "6rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
          >
            <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center" }}>
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
                marginBottom: "2rem"
              }}>
                Ready to Start?
              </span>
              <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>
                Let&apos;s Build Your Brand <span className="text-gradient">Together</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem", fontSize: "1.125rem", lineHeight: 1.75, textAlign: "center" }}>
                From concept to creation, we&apos;re here to bring your vision to life with premium quality and care.
              </p>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                >
                  Get Manufacturing Quote
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}

        {/* Footer Grid */}
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
          gap: "3rem",
          padding: "5rem 0"
        }}>
          {/* Brand Column */}
          <div>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <Image
                src="/logo.jpeg"
                alt="XV Apparels Logo"
                width={50}
                height={50}
                style={{ borderRadius: "0.75rem" }}
              />
              <span style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}>XV APPARELS</span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.4)", marginBottom: "2rem", lineHeight: 1.75 }}>
              Crafted in Bangladesh, Carried Everywhere. Premium apparel and bags
              manufacturing with no minimum order quantity.
            </p>
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaLinkedinIn, href: "#" },
                { icon: FaWhatsapp, href: "https://wa.me/19513138242" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    borderRadius: "0.75rem",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.4)",
                    transition: "all 0.3s ease"
                  }}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1.5rem", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.name} style={{ marginBottom: "1rem" }}>
                  <Link
                    href={link.href}
                    style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", transition: "color 0.3s ease" }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1.5rem", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Our Services
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {services.map((service) => (
                <li key={service} style={{ marginBottom: "1rem" }}>
                  <span style={{ color: "rgba(255,255,255,0.4)" }}>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "1.5rem", fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Contact Info
            </h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "1rem" }}>
                <a
                  href="mailto:ilhaan@xvapparels.com"
                  style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}
                >
                  <HiMail style={{ color: "#4a7a4a", flexShrink: 0 }} size={18} />
                  <span>ilhaan@xvapparels.com</span>
                </a>
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <a
                  href="mailto:raheem@xvapparels.com"
                  style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}
                >
                  <HiMail style={{ color: "#4a7a4a", flexShrink: 0 }} size={18} />
                  <span>raheem@xvapparels.com</span>
                </a>
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <a
                  href="mailto:zarefahmedsyed@gmail.com"
                  style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}
                >
                  <HiMail style={{ color: "#4a7a4a", flexShrink: 0 }} size={18} />
                  <span>zarefahmedsyed@gmail.com</span>
                </a>
              </li>
              <li style={{ marginBottom: "1rem" }}>
                <a
                  href="https://wa.me/19513138242"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(255,255,255,0.4)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.75rem" }}
                >
                  <HiPhone style={{ color: "#4a7a4a", flexShrink: 0 }} size={18} />
                  <span>+1 (951) 313-8242</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          padding: "2rem 0", 
          borderTop: "1px solid rgba(255,255,255,0.05)", 
          display: "flex", 
          flexWrap: "wrap",
          justifyContent: "space-between", 
          alignItems: "center", 
          gap: "1rem" 
        }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.875rem" }}>
            © {new Date().getFullYear()} XV Apparels. All Rights Reserved.
          </p>
          <div style={{ display: "flex", gap: "2rem" }}>
            <Link
              href="/privacy"
              style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.875rem", textDecoration: "none" }}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.875rem", textDecoration: "none" }}
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
