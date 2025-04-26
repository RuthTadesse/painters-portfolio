import { ArtworkGrid } from "@/components/artwork-grid";
import { FilterBar } from "@/components/filter-bar";
import { HeroSection } from "@/components/hero-section";
import { FeaturedCarousel } from "@/components/featured-carousel";

import { Button } from "@/components/ui/button";
import { ArrowRight, Loader2 } from "lucide-react";
import Link from "next/link";
import { ArtisstFeature } from "@/components/artist-feature";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <HeroSection />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              Latest Works
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Dive into my latest works, where creativity and functionality come
              together to elevate brands and tell stories.
            </p>
          </div>
          <Button variant="ghost" asChild className="group">
            <Link href="/about">
              About Me
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
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                Design Collection
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                Explore our diverse collection of Designs, from vibrant logos to
                thought-provoking Posters.
              </p>
            </div>
          </div>

          <Suspense
            fallback={
              <div className="flex justify-center items-center py-20">
                <Loader2 className="h-10 w-10 animate-spin text-primary" />
              </div>
            }
          >
            <FilterBar /> <ArtworkGrid />
          </Suspense>
        </div>
      </section>

      <ArtisstFeature />
    </main>
  );
}
