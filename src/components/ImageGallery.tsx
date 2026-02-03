"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

interface GalleryImage {
  src: string;
  alt: string;
  category?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  columns?: number;
}

export default function ImageGallery({
  images,
  columns = 3,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goNext = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const goPrev = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  return (
    <>
      {/* Gallery Grid */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 ${
          columns === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
        } gap-4`}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${image.src})` }}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileHover={{ opacity: 1, scale: 1 }}
                className="w-12 h-12 rounded-full bg-[var(--primary)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <svg
                  className="w-6 h-6 text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </motion.div>
            </div>
            {image.category && (
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white text-sm">{image.category}</span>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl hover:text-[var(--primary)] transition-colors z-10"
            >
              <HiX />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-4 text-white text-4xl hover:text-[var(--primary)] transition-colors z-10"
            >
              <HiChevronLeft />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-4 text-white text-4xl hover:text-[var(--primary)] transition-colors z-10"
            >
              <HiChevronRight />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl max-h-[80vh] w-full mx-4"
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              {images[selectedImage].category && (
                <div className="absolute bottom-4 left-4 bg-black/70 px-4 py-2 rounded">
                  <span className="text-white">
                    {images[selectedImage].category}
                  </span>
                </div>
              )}
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-gray-400">
              {selectedImage + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
