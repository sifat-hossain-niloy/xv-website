"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ContactForm from "@/components/ContactForm";
import { HiMail, HiPhone, HiLocationMarker, HiClock } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

const contactInfo = [
  {
    icon: HiMail,
    title: "Email Us",
    details: ["ilhaan@xvapparels.com", "raheem@xvapparels.com"],
    link: "mailto:ilhaan@xvapparels.com",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    details: ["+1 (951) 313-8242"],
    link: "https://wa.me/19513138242",
  },
  {
    icon: HiLocationMarker,
    title: "Location",
    details: ["Made in Bangladesh", "Shipped Worldwide"],
    link: null,
  },
  {
    icon: HiClock,
    title: "Response Time",
    details: ["Within 24-48 hours", "Quote delivery"],
    link: null,
  },
];

const faqs = [
  {
    question: "What is your minimum order quantity?",
    answer: "We have no minimum order quantity! Whether you need 10 pieces or 10,000, we're here to help.",
  },
  {
    question: "How long does production take?",
    answer: "Sample production typically takes 7-10 days. Bulk production ranges from 2-4 weeks depending on order size.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We ship to the US, UK, Europe, and worldwide with tracking and insurance options.",
  },
  {
    question: "Can you work from just an idea or sketch?",
    answer: "Absolutely! Share your idea, sketch, or reference images, and our team will help develop your design.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, PayPal, and other secure payment methods.",
  },
  {
    question: "Do you offer samples before bulk production?",
    answer: "Yes, we strongly recommend sample production before bulk orders.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Hero
        subtitle="Get In Touch"
        title="Let's Talk About Your Next Project"
        description="From fabric sourcing to finished products, we're ready to support your next order."
        backgroundImage="/contact/1.jpeg"
        showCTA={false}
      />

      {/* Contact Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/contact/2.jpeg" alt="Background" fill style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.9)" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <div style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", 
            gap: "4rem" 
          }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span style={{
                display: "inline-block",
                padding: "0.375rem 1rem",
                borderRadius: "9999px",
                backgroundColor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                color: "#4a7a4a",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                marginBottom: "1.5rem"
              }}>
                Contact Information
              </span>
              <h2 style={{ fontSize: "clamp(1.875rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>
                Let&apos;s Build Something <span className="text-gradient">Amazing</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.5)", marginBottom: "2.5rem", lineHeight: 1.75, fontSize: "1.125rem" }}>
                Ready to start your apparel or bag production? We&apos;re here to help.
              </p>

              <div style={{ 
                display: "grid", 
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
                gap: "1rem",
                marginBottom: "2.5rem"
              }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      position: "relative",
                      borderRadius: "1.5rem",
                      padding: "2rem",
                      background: "linear-gradient(to bottom, rgba(255,255,255,0.1), rgba(255,255,255,0.04))",
                      border: "1px solid rgba(255,255,255,0.15)",
                      overflow: "hidden"
                    }}
                  >
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
                      <info.icon style={{ color: "#fff", fontSize: "1.25rem" }} />
                    </div>
                    <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "0.75rem", fontSize: "1.125rem" }}>{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} style={{ color: "rgba(255,255,255,0.9)", fontSize: "0.9rem", lineHeight: 1.6 }}>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith("http") ? "_blank" : undefined}
                            rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                            style={{ color: "inherit", textDecoration: "none" }}
                          >
                            {detail}
                          </a>
                        ) : detail}
                      </p>
                    ))}
                  </motion.div>
                ))}
              </div>

            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div style={{
                position: "relative",
                borderRadius: "1.5rem",
                padding: "2.5rem",
                background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.12)",
                backdropFilter: "blur(10px)",
                overflow: "hidden"
              }}>
                {/* Decorative gradient orb */}
                <div style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "150px",
                  height: "150px",
                  background: "radial-gradient(circle, rgba(50, 82, 50, 0.3) 0%, transparent 70%)",
                  pointerEvents: "none"
                }} />
                <div style={{
                  position: "absolute",
                  bottom: "-30px",
                  left: "-30px",
                  width: "100px",
                  height: "100px",
                  background: "radial-gradient(circle, rgba(74, 122, 74, 0.2) 0%, transparent 70%)",
                  pointerEvents: "none"
                }} />
                
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <h3 style={{ 
                      fontSize: "1.75rem", 
                      fontWeight: 700, 
                      color: "#fff", 
                      marginBottom: "0.5rem",
                      background: "linear-gradient(135deg, #ffffff 0%, #4a7a4a 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}>
                      Send Us a Message
                    </h3>
                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem" }}>
                      We&apos;ll get back to you within 24-48 hours.
                    </p>
                  </div>
                  <ContactForm />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Strip */}
      <section style={{ padding: "0.5rem 0", backgroundColor: "var(--secondary)" }}>
        <div style={{ display: "flex", overflow: "hidden" }}>
          {[3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} style={{ flexShrink: 0, width: "16.666%", aspectRatio: "16/9", position: "relative" }}>
              <Image
                src={`/contact/${num}.jpeg`}
                alt={`Gallery ${num}`}
                fill
                style={{ objectFit: "cover", opacity: 0.6, transition: "opacity 0.3s ease" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/contact/3.jpeg" alt="Background" fill style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.85)" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <SectionTitle
            subtitle="Common Questions"
            title="Frequently Asked Questions"
            description="Find answers to common questions about our services."
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", maxWidth: "56rem", margin: "0 auto" }}>
            {faqs.map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{
                  borderRadius: "0.75rem",
                  backgroundColor: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)"
                }}
                className="group"
              >
                <summary style={{
                  padding: "1.25rem",
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}>
                  <span style={{ color: "#fff", fontWeight: 500, paddingRight: "1rem", fontSize: "0.9375rem" }}>{faq.question}</span>
                  <span style={{ color: "#4a7a4a", fontSize: "1.5rem", flexShrink: 0, transition: "transform 0.3s ease" }} className="group-open:rotate-45">+</span>
                </summary>
                <div style={{ padding: "0 1.25rem 1.25rem 1.25rem" }}>
                  <div style={{ height: "1px", background: "linear-gradient(to right, rgba(50,82,50,0.4), transparent)", marginBottom: "1rem" }} />
                  <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9375rem", lineHeight: 1.6 }}>{faq.answer}</p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/contact/5.jpeg" alt="Background" fill style={{ objectFit: "cover" }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(36,61,36,0.95), rgba(50,82,50,0.95), rgba(74,122,74,0.95))" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center" }}
          >
            <h2 style={{ fontSize: "clamp(1.875rem, 5vw, 3rem)", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>
              Prefer to Chat Directly?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.125rem", marginBottom: "2.5rem", textAlign: "center" }}>
              Connect with us instantly on WhatsApp for quick quotes.
            </p>
            <motion.a
              href="https://wa.me/19513138242"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                backgroundColor: "#fff",
                color: "#325232",
                padding: "1.25rem 2.5rem",
                borderRadius: "0.5rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                textDecoration: "none",
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)"
              }}
            >
              <FaWhatsapp size={22} />
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
