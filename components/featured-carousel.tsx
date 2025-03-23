"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { artworks } from "@/data/artworks"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const featuredArtworks = artworks.slice(0, 5)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex === featuredArtworks.length - 1 ? 0 : prevIndex + 1))
  }, [featuredArtworks.length])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? featuredArtworks.length - 1 : prevIndex - 1))
  }, [featuredArtworks.length])

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextSlide])

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const artwork = featuredArtworks[currentIndex]

  return (
    <div className="relative overflow-hidden rounded-xl bg-muted/30">
      <div className="aspect-[16/9] md:aspect-[21/9] w-full relative">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent md:via-background/40 md:to-transparent z-10" />
                <img
                  src={artwork.image || "/placeholder.svg"}
                  alt={artwork.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="relative z-20 flex items-center p-6 md:p-12">
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none" />
                <div className="relative z-10 max-w-xl">
                  <h3 className="text-sm font-medium text-primary mb-2">Featured Artwork</h3>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">{artwork.title}</h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3 md:line-clamp-4">{artwork.description}</p>
                  <div className="flex items-center gap-4">
                    <Button asChild>
                      <Link href={`/artwork/${artwork.id}`}>View Details</Link>
                    </Button>
                    <div className="text-xl font-semibold">${artwork.price}</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation dots */}
        <div className="absolute bottom-4 left-0 right-0 z-30 flex justify-center gap-2">
          {featuredArtworks.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 z-30 -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/70"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 z-30 -translate-y-1/2 bg-background/50 backdrop-blur-sm hover:bg-background/70"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  )
}

