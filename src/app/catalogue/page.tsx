"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { HiX, HiChevronLeft, HiChevronRight, HiZoomIn } from "react-icons/hi";

const galleryImages = [
  { src: "/bags/1.webp", alt: "Cotton Tote Bag", category: "Bags" },
  { src: "/bags/2.jpg", alt: "Canvas Tote", category: "Bags" },
  { src: "/bags/3.webp", alt: "Jute Bag", category: "Bags" },
  { src: "/bags/4.webp", alt: "Premium Jute Tote", category: "Bags" },
  { src: "/bags/5.jpg", alt: "Printed Canvas Bag", category: "Bags" },
  { src: "/bags/6.jpeg", alt: "Custom Tote", category: "Bags" },
  { src: "/bags/7.jpeg", alt: "Designer Tote", category: "Bags" },
  { src: "/bags/8.jpeg", alt: "Eco Shopping Bag", category: "Bags" },
  { src: "/bags/9.jpeg", alt: "Premium Bag", category: "Bags" },
  { src: "/bags/10.jpeg", alt: "Custom Design", category: "Bags" },
  { src: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800", alt: "Premium Hoodie", category: "Hoodies" },
  { src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800", alt: "Cotton T-Shirt", category: "T-Shirts" },
  { src: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800", alt: "Denim Jacket", category: "Jackets" },
  { src: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800", alt: "Crewneck Sweatshirt", category: "Sweatshirts" },
  { src: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=800", alt: "Polo Shirt", category: "Polo Shirts" },
  { src: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800", alt: "Joggers", category: "Pants" },
];

const categories = ["All", "Bags", "Hoodies", "T-Shirts", "Sweatshirts", "Jackets", "Polo Shirts", "Pants", "Our Office"];

export default function CataloguePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);

  const filteredImages = selectedCategory === "All" 
    ? galleryImages 
    : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => {
    setSelectedImage(null);
    setShowZoom(false);
  };

  const goNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
      setShowZoom(false);
    }
  };

  const goPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + filteredImages.length) % filteredImages.length);
      setShowZoom(false);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    if (!imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  return (
    <>
      {/* Custom Split Hero Section */}
      <section style={{ 
        position: "relative", 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        overflow: "hidden"
      }}>
        {/* Background Images with Diagonal Blend */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          {/* Base Layer - Bag */}
          <img
            src="/bags/4.webp"
            alt=""
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          {/* Overlay Layer - Clothing with diagonal mask */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 60% 100%)",
            WebkitClipPath: "polygon(40% 0, 100% 0, 100% 100%, 60% 100%)"
          }}>
            <img
              src="/apparel/hoodie.jpg"
              alt=""
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center"
              }}
            />
          </div>
          {/* Diagonal Gradient Blend */}
          <div style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(105deg, transparent 35%, rgba(0,0,0,0.4) 45%, rgba(0,0,0,0.4) 55%, transparent 65%)"
          }} />
        </div>
        
        {/* Dark Overlay */}
        <div style={{ 
          position: "absolute", 
          inset: 0, 
          zIndex: 1,
          background: "linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.5), rgba(0,0,0,0.7))" 
        }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "5rem 2rem", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ marginBottom: "1.5rem" }}
          >
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
              Our Work
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ 
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)", 
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
              Product Catalogue
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ 
              fontSize: "1.125rem", 
              color: "rgba(255,255,255,0.7)", 
              maxWidth: "42rem", 
              margin: "0 auto", 
              lineHeight: 1.75,
              textAlign: "center"
            }}
          >
            Browse our collection of premium apparel and bags.
          </motion.p>

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

      {/* Gallery Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div className="gradient-mesh" style={{ position: "absolute", inset: 0 }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <SectionTitle
            subtitle="Browse Collection"
            title="Product Gallery"
            description="Click on any image to view it in full size."
          />

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0.75rem", marginBottom: "3rem" }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.75rem",
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  transition: "all 0.3s ease",
                  border: selectedCategory === category ? "1px solid #325232" : "1px solid rgba(255,255,255,0.1)",
                  backgroundColor: selectedCategory === category ? "#325232" : "rgba(255,255,255,0.05)",
                  color: selectedCategory === category ? "#fff" : "rgba(255,255,255,0.6)",
                  cursor: "pointer"
                }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <div 
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            style={{ 
              maxWidth: "1200px",
              margin: "0 auto"
            }}
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => openLightbox(index)}
                  className="group"
                  style={{
                    position: "relative",
                    aspectRatio: "1/1",
                    borderRadius: "1rem",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    style={{ objectFit: "cover", transition: "transform 0.7s ease" }}
                    className="group-hover:scale-110"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  />
                  
                  {/* Overlay */}
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2), transparent)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }} className="group-hover:opacity-100">
                    <div style={{
                      width: "3.5rem",
                      height: "3.5rem",
                      borderRadius: "50%",
                      backgroundColor: "#325232",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transform: "scale(0)",
                      transition: "transform 0.3s ease"
                    }} className="group-hover:scale-100">
                      <svg style={{ width: "1.5rem", height: "1.5rem", color: "#fff" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div style={{
                    position: "absolute",
                    bottom: "1rem",
                    left: "1rem",
                    opacity: 0,
                    transition: "opacity 0.3s ease"
                  }} className="group-hover:opacity-100">
                    <span style={{
                      padding: "0.375rem 0.75rem",
                      borderRadius: "9999px",
                      backgroundColor: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      color: "#fff",
                      fontSize: "0.75rem",
                      fontWeight: 500
                    }}>
                      {image.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: "center", color: "rgba(255,255,255,0.4)", marginTop: "2rem", fontSize: "0.875rem" }}
          >
            Showing {filteredImages.length} of {galleryImages.length} items
          </motion.p>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 50,
              backgroundColor: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(20px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
            onClick={closeLightbox}
          >
            <button 
              onClick={closeLightbox} 
              style={{
                position: "absolute",
                top: "1.5rem",
                right: "1.5rem",
                color: "rgba(255,255,255,0.6)",
                fontSize: "1.875rem",
                zIndex: 10,
                width: "3rem",
                height: "3rem",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer"
              }}
            >
              <HiX />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); goPrev(); }} 
              style={{
                position: "absolute",
                left: "1.5rem",
                color: "rgba(255,255,255,0.6)",
                fontSize: "2.5rem",
                zIndex: 10,
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer"
              }}
            >
              <HiChevronLeft />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); goNext(); }} 
              style={{
                position: "absolute",
                right: "1.5rem",
                color: "rgba(255,255,255,0.6)",
                fontSize: "2.5rem",
                zIndex: 10,
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "50%",
                backgroundColor: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                cursor: "pointer"
              }}
            >
              <HiChevronRight />
            </button>

            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{ 
                position: "relative", 
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                maxWidth: "90vw",
                maxHeight: "80vh",
                margin: "0 auto"
              }}
            >
              {/* Image Container with Zoom */}
              <div style={{ position: "relative", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                {/* Main Image */}
                <div style={{ position: "relative" }}>
                  <img
                    ref={imageRef}
                    src={filteredImages[selectedImage].src}
                    alt={filteredImages[selectedImage].alt}
                    onMouseEnter={() => setShowZoom(true)}
                    onMouseLeave={() => setShowZoom(false)}
                    onMouseMove={handleMouseMove}
                    style={{ 
                      maxWidth: "60vw", 
                      maxHeight: "70vh", 
                      objectFit: "contain", 
                      borderRadius: "1rem",
                      cursor: "crosshair"
                    }}
                  />
                  {/* Zoom indicator */}
                  <div style={{
                    position: "absolute",
                    bottom: "0.75rem",
                    right: "0.75rem",
                    padding: "0.5rem 0.75rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    backdropFilter: "blur(4px)",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.75rem",
                    pointerEvents: "none"
                  }}>
                    <HiZoomIn size={14} />
                    <span>Hover to zoom</span>
                  </div>
                </div>

                {/* Zoom Preview Box */}
                <AnimatePresence>
                  {showZoom && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      style={{
                        width: "300px",
                        height: "300px",
                        borderRadius: "1rem",
                        overflow: "hidden",
                        border: "2px solid rgba(255,255,255,0.2)",
                        boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
                        flexShrink: 0
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundImage: `url(${filteredImages[selectedImage].src})`,
                          backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                          backgroundSize: "300%",
                          backgroundRepeat: "no-repeat"
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Caption */}
              <div style={{
                marginTop: "1rem",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.75rem",
                backgroundColor: "rgba(0,0,0,0.5)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)"
              }}>
                <span style={{ color: "#fff", fontSize: "0.875rem" }}>{filteredImages[selectedImage].alt}</span>
              </div>
            </motion.div>

            <div style={{
              position: "absolute",
              bottom: "1.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "0.5rem 1rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(255,255,255,0.1)",
              backdropFilter: "blur(10px)",
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.875rem"
            }}>
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section style={{ padding: "8rem 0", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/bags/2.jpg" alt="Background" fill style={{ objectFit: "cover", opacity: 0.1 }} />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0.95))" }} />

        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem", textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ maxWidth: "42rem", margin: "0 auto" }}
          >
            <h2 style={{ fontSize: "clamp(1.875rem, 5vw, 2.5rem)", fontWeight: 700, color: "#fff", marginBottom: "1.5rem" }}>
              Want to See <span className="text-gradient">More?</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: 1.75, textAlign: "center" }}>
              This catalogue represents just a sample of our work. Contact us to receive a personalized lookbook.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <motion.a href="/contact" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="btn-primary">
                Request Full Catalogue
              </motion.a>
              <motion.a href="https://wa.me/19513138242" target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="btn-secondary">
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
