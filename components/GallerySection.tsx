"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const galleryImages = [
  { src: "/image1.jpeg", date: "10 | 03 | 2025" },
  { src: "/image3.jpeg", date: "15 | 05 | 2025" },
  { src: "/image4.jpeg", date: "22 | 06 | 2025" },
  { src: "/image5.jpeg", date: "11 | 08 | 2025" },
  { src: "/image2.jpeg", date: "19 | 09 | 2025" },
  { src: "/image6.jpeg", date: "04 | 11 | 2025" },
  {src: "/image7.jpeg", date: "25 | 12 | 2025" },
  {src: "/image8.jpeg", date: "01 | 01 | 2026" },
  { src: "/image9.jpeg", date: "14 | 02 | 2026" },
];

export default function GallerySection() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const rotations = useMemo(
    () => ["-8deg", "6deg", "-4deg", "9deg", "-6deg", "5deg"],
    []
  );

  const openImage = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="min-h-screen px-6 py-20 text-white overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-serif md:text-5xl">Gallery</h2>
          <p className="mt-3 text-white/75">
            Beautiful moments, frozen in time.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 place-items-center">
          {galleryImages.map((image, index) => (
            <motion.button
              key={image.src}
              onClick={() => openImage(index)}
              initial={{
                opacity: 0,
                y: -220,
                rotateX: 65,
                rotateY: index % 2 === 0 ? -20 : 20,
                rotateZ: rotations[index % rotations.length],
                scale: 0.8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                rotateY: 0,
                rotateZ: rotations[index % rotations.length],
                scale: 1,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: index * 0.12,
                type: "spring",
                stiffness: 90,
                damping: 15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group perspective-[1200px]"
            >
              <div className="image-card w-44 sm:w-52 md:w-60 rounded-[1.5rem] border border-white/15 bg-[#f8f1e7] p-3 shadow-2xl">
                <div className="relative h-52 w-full overflow-hidden rounded-xl md:h-64">
                  <Image
                    src={image.src}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    sizes="30vw"
                    loading="eager"
                    className=" transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="pt-4 text-center text-sm font-medium tracking-wide text-black">
                  {image.date}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-5xl border-white/10 bg-black/90 p-3 text-white">
          <DialogTitle className="sr-only">Gallery image viewer</DialogTitle>

          <div className="relative flex items-center justify-center">
            <Button
              onClick={prevImage}
              className="absolute left-2 z-20 rounded-full border border-white/20 bg-black/40 p-3 backdrop-blur-md transition hover:bg-black/60"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <div className="relative h-[70vh] w-full overflow-hidden rounded-2xl">
              <Image
                src={galleryImages[currentIndex].src}
                alt={`Gallery image ${currentIndex + 1}`}
                fill
                sizes="80vw"
                className="object-contain"
              />
            </div>

            <button
              onClick={nextImage}
              className="absolute right-2 z-20 rounded-full border border-white/20 bg-black/40 p-3 backdrop-blur-md transition hover:bg-black/60"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-3 text-center text-sm text-white/70">
            {currentIndex + 1} / {galleryImages.length}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}