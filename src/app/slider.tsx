"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";


export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useTranslation();

  const slides = [
    { url: "https://utfs.io/f/RGBMPHafKzagFTkzz4r93MdughzF2KovnXHIwNtk1m0aC865", title: t("Signature Burgers") },
    { url: "https://utfs.io/f/RGBMPHafKzagrLH96O0Xv5n7DcMzkHFNr6hlAsK0YqmVoByf", title: t("Fresh Ingredients") },
    { url: "https://utfs.io/f/RGBMPHafKzagJQ9UARWgY2auvO5XKyAw3MeJZVDHht40cQU7", title: t("Cozy Atmosphere") },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // changing slides every 5 seconds

    return () => clearInterval(interval); // cleanup on unmount
  }, [slides.length]);
  // changes when slides.length changes
  //

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000
                ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={slide.url}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 flex items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-6xl font-light mb-4">
            {slides[currentSlide].title}
          </h2>
          <p className="text-xl font-light">{t("Experience culinary excellence")}</p>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all
                ${currentSlide === index ? "bg-white w-8" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
}
