import { ArtworkGrid } from "@/components/artwork-grid"
import { FilterBar } from "@/components/filter-bar"
import { HeroSection } from "@/components/hero-section"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { ArtistFeature } from "@/components/artist-feature"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Featured Artworks</h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover the latest masterpieces from our collection, each telling a unique story through color and form.
            </p>
          </div>
          <Button variant="ghost" asChild className="group">
            <Link href="/about">
              About the Artist
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <FeaturedCarousel />
      </section>

      <section className="bg-muted/50 py-16">
        <div className="max-w-7xl px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Gallery Collection</h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore our diverse collection of artworks, from vibrant landscapes to thought-provoking abstracts.
              </p>
            </div>
          </div>

          <FilterBar />
          <ArtworkGrid />
        </div>
      </section>

      <ArtistFeature />
    </main>
  )
}

