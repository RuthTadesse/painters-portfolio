import type React from "react"
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle, Send } from "lucide-react"
import { cn } from "@/lib/utils"

interface ContactLinksProps {
  className?: string
}

export function ContactLinks({ className }: ContactLinksProps) {
  return (
    <div className={cn("flex flex-wrap gap-3", className)}>
      <Button variant="outline" size="icon" asChild>
        <a href="https://t.me/artistname" target="_blank" rel="noopener noreferrer">
          <Send className="h-4 w-4" />
          <span className="sr-only">Telegram</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href="https://instagram.com/artistname" target="_blank" rel="noopener noreferrer">
          <Instagram className="h-4 w-4" />
          <span className="sr-only">Instagram</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href="https://tiktok.com/@artistname" target="_blank" rel="noopener noreferrer">
          <TiktokIcon className="h-4 w-4" />
          <span className="sr-only">TikTok</span>
        </a>
      </Button>
      <Button variant="outline" size="icon" asChild>
        <a href="https://messenger.com/artistname" target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-4 w-4" />
          <span className="sr-only">Messenger</span>
        </a>
      </Button>
    </div>
  )
}

// Custom TikTok icon since it's not in Lucide
function TiktokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  )
}

