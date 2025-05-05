"use client";

import { Button } from "@/components/ui/button";
import { artworks } from "@/data/artworks";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ArtworkDetails({ params }: { params: { id: string } }) {
  const [isLiked, setIsLiked] = useState(false);

  const artwork = artworks.find((art) => art.id === Number.parseInt(params.id));

  if (!artwork) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <Link
        href="/"
        className="flex items-center text-muted-foreground mb-6 hover:text-primary transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute -top-4 -left-4 w-24 h-24 border border-primary/20 rounded-full -z-10" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rounded-full -z-10" />

          <img
            src={artwork.image || "/placeholder.svg"}
            alt={artwork.title}
            className="w-full h-auto rounded-lg shadow-lg object-cover aspect-square"
          />

          <div className="absolute top-4 right-4 flex gap-2">
            {/* <Button
              variant="outline"
              size="icon"
              className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart className={`h-5 w-5 ${isLiked ? "fill-green-500 text-red-500" : ""}`} />
            </Button> */}
            <Button
              variant="outline"
              size="icon"
              className="bg-background/80 backdrop-blur-sm hover:bg-background/90"
            >
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-serif">
              {artwork.title}
            </h1>
          </div>

          <div className="space-y-2">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
              {artwork.category}
            </div>
            {artwork.size && (
              <div className="inline-block bg-muted px-3 py-1 rounded-full text-sm ml-2">
                {artwork.size}
              </div>
            )}
          </div>

          <div className="pt-4 border-t">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-muted-foreground">{artwork.description}</p>
          </div>

          <div className="pt-4 border-t">
            <h2 className="text-xl font-semibold mb-4">
              Interested in this design?
            </h2>
            <div className="flex flex-wrap gap-3">
              <Button className="flex-1">Contact Me</Button>
              <Button variant="outline" className="flex-1">
                Share
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-24">
        <h2 className="text-2xl font-bold mb-8 font-serif">
          You might also like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {artworks
            .filter(
              (art) =>
                art.id !== artwork.id && art.category === artwork.category
            )
            .slice(0, 4)
            .map((relatedArt, index) => (
              <motion.div
                key={relatedArt.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/artwork/${relatedArt.id}`} className="group">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={relatedArt.image || "/placeholder.svg"}
                      alt={relatedArt.title}
                      className="w-full h-auto aspect-square object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 w-full p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="font-medium text-white">
                        {relatedArt.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </main>
  );
}
