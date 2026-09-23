"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import FeatureCard from "@/components/FeatureCard";
import StatsSection from "@/components/StatsSection";
import ClientMarquee from "@/components/ClientMarquee";
import ProductCard from "@/components/ProductCard";
import {
  HiOutlineGlobe,
  HiOutlineTruck,
  HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineSparkles,
  HiOutlineCurrencyDollar,
} from "react-icons/hi";

const features = [
  {
    icon: HiOutlineCube,
    title: "No Minimum Order",
    description: "Start with any quantity. Whether you need 10 or 10,000 pieces, we've got you covered.",
  },
  {
    icon: HiOutlineGlobe,
    title: "Global Shipping",
    description: "Serving clients across the US, UK, and Europe with reliable international delivery.",
  },
  {
    icon: HiOutlineTruck,
    title: "Fast Turnaround",
    description: "Quick production times without compromising on quality. Launch and restock fast.",
  },
  {
    icon: HiOutlineShieldCheck,
    title: "Quality Assured",
    description: "In-house manufacturing in Bangladesh gives us complete control over every piece.",
  },
  {
    icon: HiOutlineSparkles,
    title: "Custom Designs",
    description: "From concept to creation, we bring your unique designs to life with precision.",
  },
  {
    icon: HiOutlineCurrencyDollar,
    title: "Competitive Pricing",
    description: "Factory-direct pricing with transparent quotes. No hidden fees, no surprises.",
  },
];

const products = [
  {
    title: "Apparel",
    description: "Premium hoodies, t-shirts, jackets, and more with custom embroidery, screen printing, etc.",
    image: "/home/apparel.jpeg",
    features: ["Hoodies & T-Shirts", "Custom printing", "All sizes"],
  },
  {
    title: "Custom Bags",
    description: "Eco-friendly bags in jute, cotton, and canvas. Perfect for brands, retail, and promotional use.",
    image: "/home/Custom bags.jpeg",
    features: ["Eco-friendly", "Custom branding", "Multiple sizes"],
  },
  {
    title: "Caps & Accessories",
    description: "Custom caps, hats, and accessories with embroidery, patches, and screen printing options.",
    image: "/home/caps.jpeg",
    features: ["Embroidery & patches", "Snapback & fitted", "Custom designs"],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        showLogo={true}
        title="Crafted in Bangladesh, Carried Everywhere"
        smallerTitle={true}
        description="Premium apparel and bags manufacturer with no minimum order quantity. From fabric to finished products — we build brands with quality and care."
        backgroundImage="/contact/1.jpeg"
        ctaText="Start Your Order"
      />

      {/* Client Logos */}
      <ClientMarquee />

      {/* Features Section */}
      <section style={{ padding: "8rem 0" }}>
        <div style={{ position: "relative" }} className="gradient-mesh">
          <div style={{ width: "100%", padding: "0 2rem" }}>
            <SectionTitle
              subtitle="Why Choose Us"
              title="Built for Brands Like Yours"
              description="We combine competitive pricing with fast, reliable delivery to help you launch and restock without delay."
            />

            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              style={{ maxWidth: "1200px", margin: "0 auto" }}
            >
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Products Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/bags/1.webp"
            alt="Background"
            fill
            style={{ objectFit: "cover", opacity: 0.1 }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, var(--background), rgba(0,0,0,0.9), var(--background))" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <SectionTitle
            subtitle="Our Products"
            title="What We Manufacture"
            description="From everyday essentials to premium fashion items, we craft products that carry your brand with pride."
          />

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "2rem" 
          }}>
            {products.map((product, index) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginTop: "4rem" }}
          >
            <Link href="/apparel">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary"
              >
                View All Products
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Made in Bangladesh Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/bags/9.jpeg"
            alt="Background"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.9)" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", maxWidth: "56rem", margin: "0 auto" }}
          >
            <motion.span 
              style={{ fontSize: "4rem", display: "block", marginBottom: "2rem" }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              🇧🇩
            </motion.span>
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
              Made in Bangladesh
            </span>
            <h2 style={{ fontSize: "clamp(1.875rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: "2rem" }}>
              Full In-House <span className="text-gradient">Manufacturing</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.125rem", marginBottom: "3rem", lineHeight: 1.75, textAlign: "center" }}>
              Our production is fully based in Bangladesh, with in-house
              manufacturing giving us complete control over quality and timelines.
              We&apos;re a sister concern of a larger parent company that supplies to
              major distributors and retailers globally.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
              {["Quality Control", "Fast Production", "Ethical Manufacturing"].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    padding: "0.75rem 1.25rem",
                    borderRadius: "9999px",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backgroundColor: "rgba(255,255,255,0.05)"
                  }}
                >
                  <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", backgroundColor: "#4a7a4a" }} />
                  <span style={{ color: "rgba(255,255,255,0.7)" }}>{item}</span>
                </motion.div>
              ))}
            </div>

            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                Partner With Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

    </>
  );
}
