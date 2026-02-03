"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { HiUser, HiMail, HiPhone, HiChat, HiPaperAirplane } from "react-icons/hi";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const mailtoLink = `mailto:ilhaan@xvapparels.com?subject=${encodeURIComponent(
        formData.subject || "New Inquiry from XV Apparels Website"
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nWhatsApp: ${formData.whatsapp}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        whatsapp: "",
        subject: "",
        message: "",
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  const inputStyle = (fieldName: string) => ({
    width: "100%",
    padding: "1rem 1rem 1rem 3rem",
    backgroundColor: focusedField === fieldName ? "rgba(50, 82, 50, 0.1)" : "rgba(255, 255, 255, 0.03)",
    border: focusedField === fieldName ? "1px solid rgba(74, 122, 74, 0.5)" : "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "0.75rem",
    color: "#fff",
    fontSize: "0.95rem",
    transition: "all 0.3s ease",
    outline: "none",
    boxShadow: focusedField === fieldName ? "0 0 20px rgba(50, 82, 50, 0.2)" : "none",
  });

  const labelStyle = {
    display: "block",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: "0.85rem",
    fontWeight: 500,
    marginBottom: "0.5rem",
    letterSpacing: "0.02em",
  };

  const iconStyle = (fieldName: string) => ({
    position: "absolute" as const,
    left: "1rem",
    top: "50%",
    transform: "translateY(-50%)",
    color: focusedField === fieldName ? "#4a7a4a" : "rgba(255, 255, 255, 0.4)",
    transition: "color 0.3s ease",
    fontSize: "1.1rem",
  });

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
    >
      {/* Name & Email Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
        <div>
          <label style={labelStyle}>Full Name *</label>
          <div style={{ position: "relative" }}>
            <HiUser style={iconStyle("name")} />
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onFocus={() => setFocusedField("name")}
              onBlur={() => setFocusedField(null)}
              placeholder="John Doe"
              style={inputStyle("name")}
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Email Address *</label>
          <div style={{ position: "relative" }}>
            <HiMail style={iconStyle("email")} />
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              placeholder="john@example.com"
              style={inputStyle("email")}
            />
          </div>
        </div>
      </div>

      {/* WhatsApp & Subject Row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
        <div>
          <label style={labelStyle}>WhatsApp Number</label>
          <div style={{ position: "relative" }}>
            <HiPhone style={iconStyle("whatsapp")} />
            <input
              type="tel"
              value={formData.whatsapp}
              onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              onFocus={() => setFocusedField("whatsapp")}
              onBlur={() => setFocusedField(null)}
              placeholder="+1 234 567 8900"
              style={inputStyle("whatsapp")}
            />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Inquiry Type *</label>
          <div style={{ position: "relative" }}>
            <HiChat style={{ ...iconStyle("subject"), top: "50%" }} />
            <select
              required
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              onFocus={() => setFocusedField("subject")}
              onBlur={() => setFocusedField(null)}
              style={{
                ...inputStyle("subject"),
                cursor: "pointer",
                appearance: "none",
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='rgba(255,255,255,0.4)'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
                backgroundSize: "1.25rem",
                paddingRight: "3rem",
              }}
            >
              <option value="" style={{ backgroundColor: "#1a1a1a" }}>Select inquiry type</option>
              <option value="Apparel Inquiry" style={{ backgroundColor: "#1a1a1a" }}>Apparel Inquiry</option>
              <option value="Bags Inquiry" style={{ backgroundColor: "#1a1a1a" }}>Bags Inquiry</option>
              <option value="Bulk Order" style={{ backgroundColor: "#1a1a1a" }}>Bulk Order</option>
              <option value="Custom Order" style={{ backgroundColor: "#1a1a1a" }}>Custom Order</option>
              <option value="General Inquiry" style={{ backgroundColor: "#1a1a1a" }}>General Inquiry</option>
            </select>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <label style={labelStyle}>Your Message *</label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          placeholder="Tell us about your project requirements, quantities, and any specific details..."
          style={{
            ...inputStyle("message"),
            padding: "1rem",
            resize: "none",
            minHeight: "140px",
          }}
        />
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02, boxShadow: "0 10px 40px rgba(50, 82, 50, 0.4)" }}
        whileTap={{ scale: 0.98 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.75rem",
          padding: "1rem 2rem",
          background: "linear-gradient(135deg, #325232 0%, #4a7a4a 50%, #325232 100%)",
          backgroundSize: "200% 200%",
          border: "none",
          borderRadius: "0.75rem",
          color: "#fff",
          fontSize: "0.95rem",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          cursor: isSubmitting ? "not-allowed" : "pointer",
          opacity: isSubmitting ? 0.7 : 1,
          transition: "all 0.3s ease",
          boxShadow: "0 4px 20px rgba(50, 82, 50, 0.3)",
        }}
      >
        {isSubmitting ? (
          <>
            <span style={{
              width: "20px",
              height: "20px",
              border: "2px solid rgba(255,255,255,0.3)",
              borderTopColor: "#fff",
              borderRadius: "50%",
              animation: "spin 0.8s linear infinite",
            }} />
            Sending...
          </>
        ) : (
          <>
            <HiPaperAirplane style={{ fontSize: "1.2rem" }} />
            Send Message
          </>
        )}
      </motion.button>

      {/* Status Messages */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem 1.25rem",
            borderRadius: "0.75rem",
            background: "linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(34, 197, 94, 0.05))",
            border: "1px solid rgba(34, 197, 94, 0.3)",
            color: "#4ade80",
            fontSize: "0.9rem",
          }}
        >
          <svg style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Your email client should open with your message. If not, please email us directly.</span>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "1rem 1.25rem",
            borderRadius: "0.75rem",
            background: "linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))",
            border: "1px solid rgba(239, 68, 68, 0.3)",
            color: "#f87171",
            fontSize: "0.9rem",
          }}
        >
          <svg style={{ width: "1.25rem", height: "1.25rem", flexShrink: 0 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Something went wrong. Please try again or contact us directly.</span>
        </motion.div>
      )}
    </motion.form>
  );
}
