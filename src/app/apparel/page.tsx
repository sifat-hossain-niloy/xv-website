"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";

const apparelProducts = [
  {
    title: "Hoodies",
    description: "Premium heavyweight hoodies with custom embroidery, screen printing, and DTG options.",
    image: "/apparel/hoodie.jpg",
    features: ["280-400 GSM fabric", "Custom embroidery", "Fleece & Terry options"],
  },
  {
    title: "Sweatshirts",
    description: "Comfortable crewneck and pullover sweatshirts with premium cotton blends.",
    image: "/apparel/sweatshirts.jpg",
    features: ["Premium cotton blends", "Ribbed cuffs & hem", "Multiple colors"],
  },
  {
    title: "T-Shirts & Polo",
    description: "High-quality cotton t-shirts and classic polo shirts for everyday wear, merchandise, and corporate branding.",
    image: "/apparel/tshirts.avif",
    features: ["100% Cotton & blends", "Pique & jersey fabrics", "Screen & DTG printing"],
  },
  {
    title: "Jersey & Sportswear",
    description: "Custom sports jerseys, tracksuits, and performance athletic wear with moisture-wicking fabrics.",
    image: "/apparel/jersey.webp",
    features: ["Moisture-wicking", "Sublimation printing", "Performance fabrics"],
  },
  {
    title: "Jackets",
    description: "Durable jackets and outerwear with advanced stitching and custom linings.",
    image: "/apparel/jackets.webp",
    features: ["Weather resistant", "Custom linings", "Multiple pockets"],
  },
  {
    title: "Pants & Joggers",
    description: "Comfortable joggers and pants with elastic waistbands and premium finishes.",
    image: "/apparel/pants.jpg",
    features: ["Elastic waistbands", "Side pockets", "Tapered fits"],
  },
  {
    title: "Caps",
    description: "Custom caps and headwear with embroidery, patches, and screen printing options.",
    image: "/apparel/CAPS.jpg",
    features: ["Embroidery & patches", "Snapback & fitted", "Custom colors"],
  },
  {
    title: "Custom Merchandise",
    description: "Bring your unique designs to life with our custom merchandise services.",
    image: "/apparel/custom merch.jpg",
    features: ["Tech packs accepted", "Sample development", "Full design support"],
  },
];

const processSteps = [
  { step: "01", title: "Customer Design & Idea", description: "Share your tech pack, sketch, or inspiration photo. We offer DTF, embroidery, screen printing, heat transfer, and more." },
  { step: "02", title: "Fabric Sourcing", description: "We recommend the best fabric for your design from ISO 9001 certified suppliers with multiple options available." },
  { step: "03", title: "Confirm Mock Up", description: "Your project manager confirms design details. Our pattern master creates precise layout charts." },
  { step: "04", title: "Paper Pattern Designing", description: "Fashion Editor creates your paper pattern in 3 days." },
  { step: "05", title: "Payment", description: "We accept Online banking, PayPal, TT, Western Union, and bank transfer." },
  { step: "06", title: "Sample/Bulk Production", description: "7 days for samples, 2-3 weeks for bulk. Professional production line ensures quality." },
  { step: "07", title: "Quality Control", description: "Every garment undergoes thorough inspection and professional pressing before shipping." },
  { step: "08", title: "Shipping", description: "Multiple shipping options available. Most cost-effective method recommended." },
];

export default function ApparelPage() {
  return (
    <>
      <Hero
        subtitle="Apparel Manufacturing"
        title="High-Quality Clothing, Made to Order"
        description="From hoodies to jackets, we manufacture premium apparel with no minimum order quantity."
        backgroundImage="https://vijaygarments.com/images/banner-2-min.jpg"
        ctaText="Request Quote"
      />

      {/* Products Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div className="gradient-mesh" style={{ position: "absolute", inset: 0 }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <SectionTitle
            subtitle="Our Apparel Range"
            title="Clothing Categories"
            description="We manufacture all types of apparel with premium materials and expert craftsmanship."
          />

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "2rem" 
          }}>
            {apparelProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                description={product.description}
                image={product.image}
                features={product.features}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/bags/9.jpeg" alt="Background" fill style={{ objectFit: "cover", opacity: 0.2 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.85)" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <SectionTitle
            subtitle="How It Works"
            title="Our Manufacturing Process"
            description="From your design to finished products — here's how we bring your vision to life."
          />

          <div style={{ 
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1.5rem",
            maxWidth: "1400px",
            margin: "0 auto"
          }}>
            {processSteps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
                style={{
                  width: "calc(25% - 1.125rem)",
                  minWidth: "280px",
                  maxWidth: "320px"
                }}
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
                    {item.step}
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
                    <span style={{ color: "#fff", fontWeight: 700, fontSize: "1.125rem" }}>{item.step}</span>
                  </div>

                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem" }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.9)", lineHeight: 1.7, fontSize: "0.9rem" }}>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, #243d24, #325232, #4a7a4a)" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center" }}
          >
            <h2 style={{ fontSize: "clamp(1.875rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: "2rem" }}>
              Ready to Start Your Apparel Line?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.125rem", marginBottom: "3rem", lineHeight: 1.75, textAlign: "center" }}>
              Whether you have a complete tech pack or just an idea, we&apos;re here to
              help you create premium quality clothing.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  backgroundColor: "#fff",
                  color: "#325232",
                  padding: "1.25rem 3rem",
                  borderRadius: "0.75rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
                }}
              >
                Request a Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
