"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { artworks } from "@/data/artworks"
import { ArtworkCard } from "@/components/artwork-card"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { motion } from "framer-motion"

export function ArtworkGrid() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")
  const [filteredArtworks, setFilteredArtworks] = useState(artworks)
  const [isLoading, setIsLoading] = useState(true)
  const [visibleCount, setVisibleCount] = useState(8)

  useEffect(() => {
    setIsLoading(true)

    // Simulate loading delay
    const timer = setTimeout(() => {
      if (categoryParam) {
        setFilteredArtworks(artworks.filter((artwork) => artwork.category === categoryParam))
      } else {
        setFilteredArtworks(artworks)
      }
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [categoryParam])

  const loadMore = () => {
    setVisibleCount((prev) => prev + 8)
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    )
  }

  if (filteredArtworks.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-xl font-semibold">No artworks found</h3>
        <p className="text-muted-foreground mt-2">
          Try changing your filter criteria or check back later for new additions.
        </p>
      </div>
    )
  }

  return (
    <div className="mt-8" id="gallery">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {filteredArtworks.slice(0, visibleCount).map((artwork, index) => (
          <motion.div
            key={artwork.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/artwork/${artwork.id}`}>
              <ArtworkCard artwork={artwork} />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {visibleCount < filteredArtworks.length && (
        <div className="flex justify-center mt-12">
          <Button onClick={loadMore} variant="outline" size="lg">
            Load More
          </Button>
        </div>
      )}
    </div>
  )
}

