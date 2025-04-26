"use client"

import { PageHeader } from "@/components/page-header"
import Image from "next/image"

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <PageHeader
        title="About Me"
        description="Learn more about me and my inspiration"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
          <Image
            width={500}
            height={500}
            src="/tesfa.png"
            alt="Designer portrait"
            className="w-full h-auto rounded-lg shadow-lg object-cover relative z-10"
            priority
          />
          <div className="absolute top-4 right-4 w-32 h-32 border-2 border-primary/20 rounded-full -z-10" />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-serif"></h2>
            <p className="mt-4 text-muted-foreground">
              As a passionate graphic designer, I thrive at the intersection of
              creativity and strategy. With a keen eye for detail and a love for
              storytelling, I craft designs that captivate audiences and elevate
              brands. My journey is fueled by a relentless pursuit of innovation
              and a commitment to delivering exceptional visual experiences.
              Whether it's branding, visual identity, or digital design, I'm
              dedicated to helping businesses and individuals tell their stories
              with clarity and impact.
            </p>
            <p className="mt-4 text-muted-foreground"></p>
          </div>

          

          <div>
            <h2 className="text-2xl font-bold font-serif">Inspiration</h2>
            <p className="mt-4 text-muted-foreground">
              My creative process is informed by a diverse range of influences,
              from the aesthetic nuances of art and nature to the innovative
              principles of technology and culture. I draw inspiration from the
              works of pioneering designers who continually push the boundaries
              of visual communication. This eclectic blend of influences enables
              me to craft designs that are not only visually striking but also
              strategically effective, resonating with audiences and
              contributing to the success of my clients.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24 mb-12">
        <h2 className="text-2xl font-bold mb-8 font-serif">Design Philosophy</h2>
        <div className="relative p-8 bg-muted/30 rounded-lg border">
          <div className="absolute top-0 left-8 transform -translate-y-1/2 bg-background px-4 text-primary font-medium">
            Design Statement
          </div>
          <blockquote className="text-lg italic text-muted-foreground">
            "Design is not what you see, but what you make others see. My work aims
            to bridge the gap between perception and emotion, inviting viewers
            to discover their own narratives within each Work."
          </blockquote>
        </div>
      </div>
    </main>
  );
}

