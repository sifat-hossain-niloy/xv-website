"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ProductCard from "@/components/ProductCard";

const bagProducts = [
  {
    title: "Cotton Tote Bags",
    description: "Premium 100% cotton tote bags perfect for everyday use, shopping, and brand promotions.",
    image: "/bags/1.webp",
    features: ["100% organic cotton", "Multiple sizes", "Custom printing"],
  },
  {
    title: "Canvas Tote Bags",
    description: "Heavy-duty canvas tote bags built to last. Ideal for retail, events, and merchandise.",
    image: "/bags/2.jpg",
    features: ["Heavy-duty canvas", "12-16 oz weight", "Gusseted bottoms"],
  },
  {
    title: "Jute Bags",
    description: "Eco-friendly jute bags with natural aesthetics. Perfect for eco-conscious brands.",
    image: "/bags/3.webp",
    features: ["100% natural jute", "Biodegradable", "Custom shapes"],
  },
  {
    title: "Premium Jute Totes",
    description: "Stylish jute tote bags with premium finishes for fashion brands and retail stores.",
    image: "/bags/4.webp",
    features: ["Premium jute", "Leather accents", "Multiple handles"],
  },
  {
    title: "Printed Canvas Bags",
    description: "Full-color printed canvas bags with custom designs for promotional items.",
    image: "/bags/5.jpg",
    features: ["Full color print", "Durable canvas", "Custom designs"],
  },
  {
    title: "Custom Tote Collection",
    description: "Handcrafted tote bags with personalized touches for boutiques and specialty stores.",
    image: "/bags/6.jpeg",
    features: ["Handcrafted", "Personalized", "Unique finishes"],
  },
  {
    title: "Designer Tote Bags",
    description: "Fashion-forward tote bags with designer aesthetics for high-end brands.",
    image: "/bags/7.jpeg",
    features: ["Designer look", "Premium materials", "Luxury finishes"],
  },
  {
    title: "Eco Shopping Bags",
    description: "Sustainable shopping bags made from eco-friendly materials for grocery stores.",
    image: "/bags/8.jpeg",
    features: ["Eco-friendly", "Reusable", "Brand customization"],
  },
];

const ecoFeatures = [
  {
    icon: "🌿",
    title: "Sustainable Materials",
    description: "Crafted using 100% natural jute, premium canvas, and durable cotton.",
  },
  {
    icon: "♻️",
    title: "Reusable & Eco-Friendly",
    description: "Long-lasting, reusable, and biodegradable for natural fiber options.",
  },
  {
    icon: "🌍",
    title: "Planet-Friendly",
    description: "Made from renewable and responsibly sourced materials.",
  },
  {
    icon: "🎨",
    title: "Custom Branding",
    description: "Personalize with logos, designs, slogans, or artwork.",
  },
  {
    icon: "🛍️",
    title: "Any Order Size",
    description: "From 10 pieces to 10,000+ with the same attention to quality.",
  },
  {
    icon: "🚚",
    title: "On-Time Delivery",
    description: "Efficient production and worldwide shipping on schedule.",
  },
];

const useCases = [
  { title: "For Brands", description: "Branded merchandise bags your customers will love.", icon: "🏷️" },
  { title: "For Cafes", description: "Eco-friendly takeaway bags for sustainable businesses.", icon: "☕" },
  { title: "For Retailers", description: "Stylish shopping bags that enhance customer experience.", icon: "🛍️" },
  { title: "For Events", description: "Custom event bags and promotional giveaways.", icon: "🎪" },
  { title: "For Amazon Sellers", description: "White-label bags ready for your branding.", icon: "📦" },
  { title: "For Distributors", description: "Bulk orders with competitive pricing.", icon: "🚚" },
];

export default function BagsPage() {
  return (
    <>
      <Hero
        subtitle="Eco-Friendly Bags"
        title="Custom Eco-Friendly Bags Collection"
        description="Sustainable, reusable, and customizable bags crafted with jute, cotton, and canvas."
        backgroundImage="/bags/4.webp"
        ctaText="Get Custom Quote"
        showCTA={true}
      />

      {/* Eco Features Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div className="gradient-mesh" style={{ position: "absolute", inset: 0 }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <SectionTitle
            subtitle="Why Choose Our Bags"
            title="Sustainable, Stylish, Superior"
            description="Upgrade your brand with sustainable, customized bags."
          />

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
          >
            {ecoFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group"
              >
                <div style={{
                  position: "relative",
                  height: "100%",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "2rem",
                  transition: "all 0.5s ease"
                }}>
                  <span style={{ fontSize: "3rem", marginBottom: "2rem", display: "block" }}>{feature.icon}</span>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/bags/9.jpeg" alt="Background" fill style={{ objectFit: "cover", opacity: 0.1 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.85)" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <SectionTitle
            subtitle="Our Collection"
            title="Premium Bag Categories"
            description="Eco-friendly and stylish bags for every need. Custom branding available."
          />

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", 
            gap: "2rem" 
          }}>
            {bagProducts.map((product, index) => (
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

      {/* Use Cases Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div className="gradient-mesh" style={{ position: "absolute", inset: 0 }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <SectionTitle
            subtitle="Perfect For"
            title="Who Uses Our Bags"
            description="Our bags serve a wide range of industries and purposes."
          />

          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
          >
            {useCases.map((useCase, index) => (
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
                  height: "100%",
                  borderRadius: "1.5rem",
                  overflow: "hidden",
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                  border: "1px solid rgba(255,255,255,0.1)",
                  padding: "2rem",
                  textAlign: "center",
                  transition: "all 0.5s ease"
                }}>
                  <span style={{ fontSize: "3.5rem", marginBottom: "2rem", display: "block" }}>{useCase.icon}</span>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>
                    {useCase.title}
                  </h3>
                  <p style={{ color: "rgba(255,255,255,0.5)" }}>{useCase.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/bags/2.jpg" alt="Background" fill style={{ objectFit: "cover", opacity: 0.1 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.9)" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <SectionTitle subtitle="Our Work" title="Bag Gallery" />

          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", 
            gap: "1.5rem" 
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
              const ext = num <= 2 ? (num === 1 ? "webp" : "jpg") : num <= 4 ? "webp" : num === 5 ? "jpg" : "jpeg";
              return (
                <motion.div
                  key={num}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: num * 0.05, duration: 0.5 }}
                  className="group"
                  style={{
                    position: "relative",
                    aspectRatio: "1/1",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.1)",
                    cursor: "pointer"
                  }}
                >
                  <Image
                    src={`/bags/${num}.${ext}`}
                    alt={`Bag ${num}`}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                    className="group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginTop: "4rem" }}
          >
            <Link href="/catalogue">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-secondary"
              >
                View Full Catalogue
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Sustainability Message */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div className="gradient-mesh" style={{ position: "absolute", inset: 0 }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center" }}
          >
            <span style={{ fontSize: "4.5rem", marginBottom: "2.5rem", display: "block" }}>🌱</span>
            <h2 style={{ fontSize: "clamp(1.875rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: "2rem" }}>
              Let&apos;s Carry <span className="text-gradient">Sustainability</span> Together
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.125rem", marginBottom: "3rem", lineHeight: 1.75, textAlign: "center" }}>
              Perfect for businesses, startups, student organizations, events, and retail.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                Get Your Quote
              </motion.button>
            </Link>
          </motion.div>
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
              Ready to Create Your Custom Bags?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.125rem", marginBottom: "3rem", lineHeight: 1.75, textAlign: "center" }}>
              Whether you need 50 bags or 50,000, we&apos;re here to help.
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
                Get Your Quote
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
