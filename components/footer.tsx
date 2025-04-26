import Link from "next/link"
import { ContactLinks } from "@/components/contact-links"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="font-serif font-bold text-2xl">
              <span className="text-primary">Nahom's </span>Designs
            </Link>
            <p className="mt-4 text-muted-foreground">
              Showcasing unique Design that capture emotions and stories. Each Design is created with
              passion and attention to detail.
            </p>
            <ContactLinks className="mt-6" />
          </div>


          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/?category=Landscape"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Logo
                </Link>
              </li>
              <li>
                <Link href="/?category=Abstract" className="text-muted-foreground hover:text-primary transition-colors">
                  Poster
                </Link>
              </li>
              <li>
                <Link href="/?category=Portrait" className="text-muted-foreground hover:text-primary transition-colors">
                  Bus Card
                </Link>
              </li>
              <li>
                <Link
                  href="/?category=Still Life"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nahom's Design. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

