"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle";
import { HiX, HiChevronLeft, HiChevronRight, HiZoomIn, HiPlay } from "react-icons/hi";

type GalleryItem = {
  src: string;
  alt: string;
  category: string;
  // When set, src is the poster image and the lightbox plays this video
  video?: string;
};

const galleryImages: GalleryItem[] = [
  // Client Work
  { src: "/partners/work/hoodie-navy-front.jpg", alt: "Custom Hoodie – Front Print", category: "Client Work" },
  { src: "/partners/work/hoodie-navy-back.jpg", alt: "Custom Hoodie – Back Print", category: "Client Work" },
  { src: "/partners/work/mstt-quarter-zip.jpg", alt: "MSTT Embroidered Quarter-Zip", category: "Client Work" },
  { src: "/partners/work/mstt-quarter-zip-mockup.jpg", alt: "MSTT Quarter-Zip Design", category: "Client Work" },
  { src: "/partners/work/quarter-zip-embroidered.jpg", alt: "Embroidered Quarter-Zip", category: "Client Work" },
  { src: "/partners/work/trident-hoodie.jpg", alt: "UCSD Trident Hoodie", category: "Client Work" },
  { src: "/partners/work/trident-hoodie-blue.jpg", alt: "UCSD Trident Hoodie – Blue Patch", category: "Client Work" },
  { src: "/partners/work/name-tees-1.jpg", alt: "Personalised Team Tees", category: "Client Work" },
  { src: "/partners/work/name-tees-2.jpg", alt: "Personalised Team Tees", category: "Client Work" },
  { src: "/partners/work/trident-tees.jpg", alt: "UCSD Trident Tees", category: "Client Work" },
  { src: "/partners/work/trident-tee.jpg", alt: "UCSD Trident Tee", category: "Client Work" },
  { src: "/partners/work/arch-hoodie-maroon.jpg", alt: "Arch Print Hoodie – Maroon", category: "Client Work" },
  { src: "/partners/work/arch-hoodie-olive.jpg", alt: "Arch Print Hoodie – Olive", category: "Client Work" },
  { src: "/partners/work/arch-hoodie-sample.jpg", alt: "Arch Print Hoodie – Production Sample", category: "Client Work" },
  { src: "/partners/work/calligraphy-hoodie-maroon.jpg", alt: "Embroidered Calligraphy Hoodie – Maroon", category: "Client Work" },
  { src: "/partners/work/calligraphy-hoodie-olive.jpg", alt: "Embroidered Calligraphy Hoodie – Olive", category: "Client Work" },
  { src: "/partners/work/polo-back.jpg", alt: "Sublimated Team Polo – Back", category: "Client Work" },
  { src: "/partners/work/polo-front.jpg", alt: "Sublimated Team Polo – Front", category: "Client Work" },
  { src: "/partners/work/polos-display.jpg", alt: "Team Polos on Display", category: "Client Work" },
  { src: "/partners/work/alpha-omicron-jersey.jpg", alt: "Alpha Omicron Pinstripe Jersey", category: "Client Work" },
  { src: "/partners/work/alpha-omicron-tank-1.jpg", alt: "Alpha Omicron Tank Top", category: "Client Work" },
  { src: "/partners/work/alpha-omicron-tank-2.jpg", alt: "Alpha Omicron Tank Top", category: "Client Work" },
  { src: "/partners/work/alpha-omicron-tank-3.jpg", alt: "Alpha Omicron Tank Top", category: "Client Work" },
  { src: "/partners/work/aoii-tank.jpg", alt: "AOII Strike-Out Tank Top", category: "Client Work" },
  { src: "/partners/work/alpha-omicron-shorts.jpg", alt: "Alpha Omicron Shorts", category: "Client Work" },
  { src: "/partners/work/alpha-omicron-cap.jpg", alt: "Alpha Omicron Cap", category: "Client Work" },
  // Apparel
  { src: "/our-works/work-1.jpeg", alt: "Premium Hoodie Collection", category: "Apparel" },
  { src: "/our-works/work-2.jpeg", alt: "Custom T-Shirt Design", category: "Apparel" },
  { src: "/our-works/work-3.jpeg", alt: "Branded Sweatshirt", category: "Apparel" },
  { src: "/our-works/work-4.jpeg", alt: "Embroidered Polo Shirt", category: "Apparel" },
  { src: "/our-works/work-5.jpeg", alt: "Streetwear Collection", category: "Apparel" },
  { src: "/our-works/work-6.jpeg", alt: "Custom Jacket Design", category: "Apparel" },
  { src: "/our-works/work-7.jpeg", alt: "Athletic Wear", category: "Apparel" },
  { src: "/our-works/work-8.jpeg", alt: "Casual Wear Line", category: "Apparel" },
  { src: "/our-works/work-9.jpeg", alt: "Corporate Uniform", category: "Apparel" },
  { src: "/our-works/work-10.jpeg", alt: "Screen Printed Tee", category: "Apparel" },
  { src: "/our-works/work-11.jpeg", alt: "Fashion Forward Design", category: "Apparel" },
  { src: "/our-works/work-12.jpeg", alt: "Vintage Style Apparel", category: "Apparel" },
  { src: "/our-works/work-13.jpeg", alt: "Urban Streetwear", category: "Apparel" },
  { src: "/our-works/work-14.jpeg", alt: "Custom Merchandise", category: "Apparel" },
  { src: "/our-works/work-15.jpeg", alt: "Brand Collaboration", category: "Apparel" },
  { src: "/our-works/work-16.jpeg", alt: "Limited Edition Piece", category: "Apparel" },
  { src: "/our-works/work-17.jpeg", alt: "Seasonal Collection", category: "Apparel" },
  { src: "/our-works/work-18.jpeg", alt: "Premium Cotton Wear", category: "Apparel" },
  { src: "/our-works/work-19.jpeg", alt: "Custom Embroidery Work", category: "Apparel" },
  { src: "/our-works/work-20.jpeg", alt: "Graphic Print Design", category: "Apparel" },
  { src: "/our-works/work-21.jpeg", alt: "Signature Collection", category: "Apparel" },
  { src: "/our-works/work-22.jpeg", alt: "Artisan Crafted Wear", category: "Apparel" },
  { src: "/our-works/work-23.jpeg", alt: "DTG Printed Apparel", category: "Apparel" },
  { src: "/our-works/work-24.jpeg", alt: "Custom Label Design", category: "Apparel" },
  { src: "/our-works/work-25.jpeg", alt: "Exclusive Print Run", category: "Apparel" },
  { src: "/our-works/work-26.jpeg", alt: "Handcrafted Details", category: "Apparel" },
  // Bags
  { src: "/bags/1.webp", alt: "Cotton Tote Bag", category: "Bags" },
  { src: "/bags/2.jpg", alt: "Canvas Tote", category: "Bags" },
  { src: "/bags/3.webp", alt: "Natural Jute Bag", category: "Bags" },
  { src: "/bags/4.webp", alt: "Premium Jute Tote", category: "Bags" },
  { src: "/bags/5.jpg", alt: "Printed Canvas Bag", category: "Bags" },
  { src: "/bags/6.jpeg", alt: "Custom Branded Tote", category: "Bags" },
  { src: "/bags/7.jpeg", alt: "Designer Tote", category: "Bags" },
  { src: "/bags/8.jpeg", alt: "Eco Shopping Bag", category: "Bags" },
  { src: "/bags/9.jpeg", alt: "Premium Gift Bag", category: "Bags" },
  { src: "/bags/10.jpeg", alt: "Custom Print Design", category: "Bags" },
  { src: "/catalogue/bags-11.jpeg", alt: "Luxury Canvas Tote", category: "Bags" },
  { src: "/catalogue/bags-12.jpeg", alt: "Artisan Jute Bag", category: "Bags" },
  { src: "/catalogue/bags-13.jpeg", alt: "Eco-Friendly Shopper", category: "Bags" },
  { src: "/catalogue/bags-14.jpeg", alt: "Branded Promotional Bag", category: "Bags" },
  { src: "/catalogue/bags-15.jpeg", alt: "Reusable Market Bag", category: "Bags" },
  { src: "/catalogue/bags-16.jpeg", alt: "Fashion Forward Tote", category: "Bags" },
  { src: "/catalogue/bags-17.jpeg", alt: "Sustainable Carry Bag", category: "Bags" },
  { src: "/catalogue/bags-18.jpeg", alt: "Corporate Gift Bag", category: "Bags" },
  { src: "/catalogue/bags-19.jpeg", alt: "Custom Cap Design", category: "Apparel" },
  { src: "/catalogue/bags-20.jpeg", alt: "Embroidered Headwear", category: "Apparel" },
  { src: "/catalogue/bags-21.jpeg", alt: "Designer Handbag", category: "Bags" },
  // Our Office
  { src: "/contact/1.jpeg", alt: "Production Floor", category: "Our Office" },
  { src: "/contact/2.jpeg", alt: "Quality Control Area", category: "Our Office" },
  { src: "/contact/3.jpeg", alt: "Design Studio", category: "Our Office" },
  { src: "/contact/4.jpeg", alt: "Fabric Warehouse", category: "Our Office" },
  { src: "/contact/5.jpeg", alt: "Finishing Department", category: "Our Office" },
  { src: "/contact/6.jpeg", alt: "Embroidery Section", category: "Our Office" },
  { src: "/contact/7.jpeg", alt: "Packaging Area", category: "Our Office" },
  { src: "/contact/8.jpeg", alt: "Showroom Display", category: "Our Office" },
  { src: "/partners/videos/embroidery-poster.jpg", video: "/partners/videos/embroidery.mp4", alt: "Embroidery in Action", category: "Our Office" },
  { src: "/partners/videos/washing-poster.jpg", video: "/partners/videos/washing.mp4", alt: "Industrial Washing Room", category: "Our Office" },
  { src: "/partners/work/embroidery-machines.jpg", alt: "Embroidery Machines", category: "Our Office" },
  { src: "/partners/work/embroidery-detail.jpg", alt: "Embroidery Detail", category: "Our Office" },
  { src: "/partners/work/fabric-cutting.jpg", alt: "Fabric Cutting", category: "Our Office" },
  { src: "/partners/work/packed-hoodies.jpg", alt: "Packed Hoodies Ready to Ship", category: "Our Office" },
  { src: "/partners/work/packed-order.jpg", alt: "Packed Order Ready to Ship", category: "Our Office" },
];

const categories = ["All", "Client Work", "Apparel", "Bags", "Our Office"];

const clients = [
  { name: "University of Arizona", logo: "/partners/university-of-arizona.png" },
  { name: "Rutgers University", logo: "/partners/rutgers.jpeg" },
  { name: "Roblox", logo: "/partners/roblox.jpeg" },
  { name: "UC San Diego Cricket", logo: "/partners/ucsd-cricket.jpeg" },
  { name: "UC San Diego Men's Rowing", logo: "/partners/ucsd-rowing.png" },
  { name: "UCSD Sitaare", logo: "/partners/ucsd-sitaare.jpeg" },
  { name: "Friends of Dialysis UCSD", logo: "/partners/friends-of-dialysis-ucsd.jpeg" },
  { name: "UMich PSA", logo: "/partners/umich-psa.jpeg" },
  { name: "UCR SAF", logo: "/partners/ucr-saf.jpeg" },
  { name: "CURIS Public Health Advocacy", logo: "/partners/curis.png" },
  { name: "Rahma Center", logo: "/partners/rahma-center.png" },
  { name: "MSTT", logo: "/partners/mstt.jpeg" },
];

export default function PartnersPage() {
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
      {/* Video Hero Section */}
      <section style={{ 
        position: "relative", 
        minHeight: "100vh", 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        overflow: "hidden"
      }}>
        {/* Background Video */}
        <video
          src="/partners/videos/embroidery.mp4"
          poster="/partners/videos/embroidery-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center"
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
              Partners
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
              Our Partners
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
            Trusted by universities, student organizations, and brands around the world.
          </motion.p>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", zIndex: 10 }}
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

        {/* Bottom Fade */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "8rem", background: "linear-gradient(to top, var(--background), transparent)", zIndex: 5 }} />
      </section>

      {/* Clients Section */}
      <section style={{ padding: "8rem 0 4rem", position: "relative" }}>
        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <SectionTitle
            subtitle="Who We Work With"
            title="Our Trusted Clients"
            description="We're proud to have partnered with these organizations."
          />

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
          >
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                style={{ textAlign: "center" }}
              >
                <div style={{
                  position: "relative",
                  aspectRatio: "1",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  backgroundColor: "#fff",
                  border: "1px solid rgba(255,255,255,0.1)"
                }}>
                  <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 200px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", marginTop: "0.75rem" }}>
                  {client.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section style={{ padding: "4rem 0 6rem", position: "relative" }}>
        <div style={{ position: "relative", zIndex: 10, width: "100%", padding: "0 2rem" }}>
          <div
            className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-center"
            style={{ maxWidth: "1200px", margin: "0 auto" }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
              style={{
                position: "relative",
                aspectRatio: "4/3",
                borderRadius: "1.5rem",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 30px 80px rgba(0,0,0,0.5)"
              }}
            >
              <Image
                src="/partners/work/polos-display.jpg"
                alt="Custom team polos on display"
                fill
                sizes="(max-width: 1024px) 100vw, 720px"
                style={{ objectFit: "cover" }}
              />
              <span style={{
                position: "absolute",
                top: "1.25rem",
                left: "1.25rem",
                padding: "0.375rem 0.875rem",
                borderRadius: "9999px",
                backgroundColor: "rgba(0,0,0,0.55)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#fff",
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase"
              }}>
                Featured Project
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-2"
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
                Spotlight
              </span>
              <h2 style={{ fontSize: "clamp(1.875rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: "1.25rem" }}>
                Custom <span className="text-gradient">Team Polos</span>
              </h2>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "1.75rem" }}>
                A full set of personalised team polos, produced from design to delivery and ready to wear on day one.
              </p>

              <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {["All-over sublimated gradient print", "Custom crest on the chest", "Personalised names on the back"].map((point) => (
                  <li key={point} style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "rgba(255,255,255,0.75)", fontSize: "0.9375rem" }}>
                    <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "50%", backgroundColor: "#4a7a4a", flexShrink: 0 }} />
                    {point}
                  </li>
                ))}
              </ul>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", maxWidth: "22rem" }}>
                {[
                  { src: "/partners/work/polo-front.jpg", label: "Front" },
                  { src: "/partners/work/polo-back.jpg", label: "Back" },
                ].map((shot) => (
                  <div key={shot.label}>
                    <div style={{ position: "relative", aspectRatio: "3/4", borderRadius: "1rem", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <Image src={shot.src} alt={`Team polo – ${shot.label.toLowerCase()}`} fill sizes="180px" style={{ objectFit: "cover" }} />
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", marginTop: "0.5rem", textAlign: "center", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      {shot.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
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
                      {image.video ? (
                        <HiPlay style={{ width: "1.75rem", height: "1.75rem", color: "#fff" }} />
                      ) : (
                        <svg style={{ width: "1.5rem", height: "1.5rem", color: "#fff" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Video badge (always visible so visitors know it plays) */}
                  {image.video && (
                    <div style={{
                      position: "absolute",
                      top: "0.75rem",
                      right: "0.75rem",
                      width: "2.25rem",
                      height: "2.25rem",
                      borderRadius: "50%",
                      backgroundColor: "rgba(0,0,0,0.6)",
                      backdropFilter: "blur(4px)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      pointerEvents: "none"
                    }}>
                      <HiPlay size={18} />
                    </div>
                  )}
                  
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
              {filteredImages[selectedImage].video ? (
                <video
                  key={filteredImages[selectedImage].video}
                  src={filteredImages[selectedImage].video}
                  poster={filteredImages[selectedImage].src}
                  controls
                  autoPlay
                  muted
                  playsInline
                  style={{ maxWidth: "80vw", maxHeight: "70vh", borderRadius: "1rem", backgroundColor: "#000" }}
                />
              ) : (
              /* Image Container with Zoom */
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
              )}

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
    </>
  );
}
