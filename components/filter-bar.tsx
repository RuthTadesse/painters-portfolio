"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const categories = ["All", "Logo", "Poster", "Bus-cards",]

export function FilterBar() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const currentCategory = searchParams.get("category") || "All"

  const handleCategoryChange = (category: string) => {
    if (category === "All") {
      router.push("/#Home")
    } else {
      router.push(`/?category=${category}#Home`)
    }
  }

  return (
    <motion.div
      className="flex flex-wrap gap-3 mt-6"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Button
            variant="outline"
            size="sm"
            className={cn(
              "rounded-full border-primary/20 px-6 transition-all",
              currentCategory === category
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground border-primary"
                : "hover:border-primary/50",
            )}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  )
}

