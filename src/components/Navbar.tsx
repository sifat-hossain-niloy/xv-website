"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Apparel", href: "/apparel" },
  { name: "Bags", href: "/bags" },
  { name: "Catalogue", href: "/catalogue" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="flex items-center justify-between px-4 sm:px-8 lg:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpeg"
              alt="XV Apparels Logo"
              width={45}
              height={45}
              className="rounded-lg"
            />
            <span className="hidden sm:block text-lg font-semibold text-white tracking-wide">
              XV APPARELS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={link.href} className="nav-link">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary text-xs"
              >
                Get Quote
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white w-10 h-10 flex items-center justify-center rounded-lg glass"
          >
            {isMobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt4 size={24} />}
          </motion.button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-[var(--secondary)] border-l border-white/5"
            >
              <div className="flex flex-col h-full pt-24 px-8">
                <div className="flex items-center gap-3 mb-8 pb-8 border-b border-white/10">
                  <Image
                    src="/logo.jpeg"
                    alt="XV Apparels Logo"
                    width={50}
                    height={50}
                    className="rounded-lg"
                  />
                  <span className="text-lg font-semibold text-white">XV APPARELS</span>
                </div>

                <div className="flex-1 flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-4 text-xl font-light text-white/80 hover:text-white hover:pl-4 transition-all border-b border-white/5"
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="py-8"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <button className="btn-primary w-full">Get Quote</button>
                  </Link>
                  <p className="text-center text-white/40 text-sm mt-4">
                    Crafted in Bangladesh
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
