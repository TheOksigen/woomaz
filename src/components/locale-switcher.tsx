"use client"

import { usePathname, useRouter } from "next/navigation"
import { i18n } from "@/src/app/(frontend)/i18n-config"
import { Button } from "@/src/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/src/components/ui/dropdown-menu"
import { Languages } from "lucide-react"

export default function LocaleSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/"
    const segments = pathName.split("/")
    segments[1] = locale
    return segments.join("/")
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="liquid-glass-button-icon">
          <Languages className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Change language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end"
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 shadow-2xl"
      >
        {i18n.locales.map((locale) => (
          <DropdownMenuItem 
            key={locale} 
            onClick={() => router.push(redirectedPathName(locale))}
            className="hover:bg-white/20 focus:bg-white/20 transition-colors duration-200"
          >
            {locale.toUpperCase()}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
