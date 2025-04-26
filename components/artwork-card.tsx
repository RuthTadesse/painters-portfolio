"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Artwork {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
  size?: string;
}

interface ArtworkCardProps {
  artwork: Artwork;
  className?: string;
}

export function ArtworkCard({ artwork, className }: ArtworkCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-lg transition-all duration-300",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={artwork.image || "/placeholder.svg"}
          alt={artwork.title}
          className={cn(
            "h-full w-full object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
      </div>

      <div className="absolute bottom-16 right-2 z-10">
        <Button
          variant="outline"
          size="icon"
          className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90"
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
        >
          <Heart
            className={`h-4 w-4 ${isLiked ? "fill-red-500 text-red-500" : ""}`}
          />
        </Button>
      </div>

      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 transition-opacity duration-300",
          isHovered ? "opacity-0 dark:opacity-100" : "opacity-0"
        )}
      />

      <div
        className={cn(
          "absolute bottom-0 left-0 w-full p-4 transform transition-transform duration-300",
          isHovered ? "translate-y-0" : "translate-y-8 opacity-0"
        )}
      >
        <h3 className="font-medium text-lg text-white line-clamp-1">
          {artwork.title}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-white/80">{artwork.category}</p>
        </div>
      </div>

      <div
        className={cn(
          "mt-3 transition-all duration-300",
          isHovered
            ? "opacity-100 dark:opacity-0 pointer-events-none"
            : "opacity-100"
        )}
      >
        <h3 className="font-medium line-clamp-1">{artwork.title}</h3>
        <div className="flex items-center justify-between mt-1">
          <p className="text-sm text-muted-foreground">{artwork.category}</p>
        </div>
      </div>
    </div>
  );
}
