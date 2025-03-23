"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/her-image.avif')",
          filter: "brightness(0.7)",
        }}
      />

      {/* Decorative elements */}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90" /> */}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-4 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6">
            Where Art Meets <span className="text-primary">Imagination</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Discover a collection of unique artworks that capture emotions,
            stories, and moments frozen in time through vibrant colors and
            expressive brushstrokes.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/#gallery">Explore Gallery</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-background/20 text-white hover:text-white backdrop-blur-sm hover:bg-background/30"
              asChild
            >
              <Link href="/contact">Contact Artist</Link>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Decorative brush strokes */}
      {/* <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent bg-no-repeat bg-cover" /> */}
    </section>
  );
}
