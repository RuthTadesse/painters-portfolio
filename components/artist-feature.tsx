import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
export function ArtisstFeature() {
  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
              <Image
                width={500}
                height={500}
                src="/tesfa.png"
                alt="ThemeProvider Designer"
                className="w-full h-auto rounded-lg shadow-lg object-cover relative z-10"
              />
              <div className="absolute top-4 right-4 w-32 h-32 border-2 border-primary/20 rounded-full -z-10" />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                As a passionate graphic designer, I thrive at the intersection
                of creativity and strategy. With a keen eye for detail and a
                love for storytelling, I craft designs that captivate audiences
                and elevate brands.
              </p>
              <p>
                My journey is fueled by a relentless pursuit of innovation and a
                commitment to delivering exceptional visual experiences. Whether
                it's branding, visual identity, or digital design, I'm dedicated
                to helping businesses and individuals tell their stories with
                clarity and impact.
              </p>
            </div>
            <Button asChild>
              <Link href="/about" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

