"use client"

import { PageHeader } from "@/components/page-header"

export default function About() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <PageHeader title="About the Artist" description="Learn more about the creative journey and inspiration" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full -z-10" />
          <img
            src="/placeholder.svg?height=600&width=500&text=Artist"
            alt="Artist portrait"
            className="w-full h-auto rounded-lg shadow-lg object-cover relative z-10"
          />
          <div className="absolute top-4 right-4 w-32 h-32 border-2 border-primary/20 rounded-full -z-10" />
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold font-serif">The Artist</h2>
            <p className="mt-4 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl
              nisl aliquam nisl, vel aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl
              aliquam nisl, vel aliquam nisl nisl sit amet nisl.
            </p>
            <p className="mt-4 text-muted-foreground">
              Vivamus ac risus eget orci mollis sodales. Praesent et dolor bibendum, facilisis magna non, commodo sem.
              Nullam quis lorem at libero mattis pharetra a non nulla. Vivamus ac risus eget orci mollis sodales.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-serif">Artistic Journey</h2>
            <p className="mt-4 text-muted-foreground">
              Praesent et dolor bibendum, facilisis magna non, commodo sem. Nullam quis lorem at libero mattis pharetra
              a non nulla. Vivamus ac risus eget orci mollis sodales. Praesent et dolor bibendum, facilisis magna non,
              commodo sem.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold font-serif">Inspiration</h2>
            <p className="mt-4 text-muted-foreground">
              Nullam quis lorem at libero mattis pharetra a non nulla. Vivamus ac risus eget orci mollis sodales.
              Praesent et dolor bibendum, facilisis magna non, commodo sem. Nullam quis lorem at libero mattis pharetra
              a non nulla.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <h2 className="text-2xl font-bold mb-8 font-serif">Exhibitions & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border rounded-lg p-6 shadow-sm bg-card hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">Exhibitions</h3>
            <ul className="mt-4 space-y-4">
              <li className="border-b pb-4">
                <p className="font-medium">National Gallery Showcase</p>
                <p className="text-sm text-muted-foreground">New York, 2023</p>
              </li>
              <li className="border-b pb-4">
                <p className="font-medium">Modern Art Exhibition</p>
                <p className="text-sm text-muted-foreground">Paris, 2022</p>
              </li>
              <li>
                <p className="font-medium">Contemporary Art Fair</p>
                <p className="text-sm text-muted-foreground">London, 2021</p>
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-6 shadow-sm bg-card hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">Awards & Recognition</h3>
            <ul className="mt-4 space-y-4">
              <li className="border-b pb-4">
                <p className="font-medium">Excellence in Fine Arts</p>
                <p className="text-sm text-muted-foreground">International Art Association, 2023</p>
              </li>
              <li className="border-b pb-4">
                <p className="font-medium">Best New Artist</p>
                <p className="text-sm text-muted-foreground">Contemporary Art Foundation, 2022</p>
              </li>
              <li>
                <p className="font-medium">Innovation Award</p>
                <p className="text-sm text-muted-foreground">Modern Art Society, 2021</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-24 mb-12">
        <h2 className="text-2xl font-bold mb-8 font-serif">Art Philosophy</h2>
        <div className="relative p-8 bg-muted/30 rounded-lg border">
          <div className="absolute top-0 left-8 transform -translate-y-1/2 bg-background px-4 text-primary font-medium">
            Artist Statement
          </div>
          <blockquote className="text-lg italic text-muted-foreground">
            "Art is not what you see, but what you make others see. My work aims to bridge the gap between perception
            and emotion, inviting viewers to discover their own narratives within each piece."
          </blockquote>
        </div>
      </div>
    </main>
  )
}

