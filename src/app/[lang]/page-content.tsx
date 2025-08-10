"use client"

import { useState, useEffect } from "react"
import { Header, Hero, Partners, Services, Testimonials, Blog, Contact, Footer } from "@/src/components"
import type { Locale } from "@/src/app/i18n-config"

const PageContent = ({
  dictionary,
  lang,
}: {
  dictionary: any
  lang: Locale
}) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = "/logo.png"

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-white/80 dark:bg-background/80 backdrop-blur-md">
      <Header dictionary={dictionary} lang={lang} logoSrc={logoSrc} />

      <main>
        <Hero dictionary={dictionary} />
        <Partners dictionary={dictionary} />
        <Services dictionary={dictionary} />
        <Testimonials dictionary={dictionary} />
        <Blog dictionary={dictionary} />
        <Contact dictionary={dictionary} />
      </main>

      <Footer dictionary={dictionary} />
    </div>
  )
}

export default PageContent
