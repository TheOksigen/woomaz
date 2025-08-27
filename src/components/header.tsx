"use client"

import { useState, useEffect, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import LocaleSwitcher from "@/src/components/locale-switcher"
import { MobileMenu } from "@/src/components/mobile-menu"
import type { Locale } from "@/src/app/i18n-config"
import GlassSurface from "./c/GlassSurface/GlassSurface"

interface NavLink {
  href: string
  label: string
  icon: ReactNode
}

interface HeaderProps {
  dictionary: any
  lang: Locale
  logoSrc: string
}

export default function Header({ dictionary, lang, logoSrc }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  // Removed heavy scroll-based refraction logic for performance

  const navLinks: NavLink[] = [
    { href: "#services", label: dictionary.header.services, icon: null },
    { href: "#process", label: dictionary.header.process, icon: null },
    { href: "#portfolio", label: dictionary.header.portfolio, icon: null },
    { href: "#blog", label: dictionary.header.blog, icon: null },
    { href: "#contact", label: dictionary.header.contact, icon: null },
  ]

  // Static refined glass backdrop; dynamic values removed

  return (
    <>
      <MobileMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        navLinks={navLinks}
        getOfferLabel={dictionary.header.getOffer}
        lang={lang}
        logoSrc={logoSrc}
      />
      <GlassSurface
      borderRadius={0}
        displace={0.5}
        distortionScale={-180}
        redOffset={0}
        greenOffset={10}
        blueOffset={20}
        brightness={50}
        opacity={0.93}
        backgroundOpacity={0}
        saturation={1}
        borderWidth={0.07}
        blur={11}
        width={"100%"}
        mixBlendMode="screen"
        className="w-full sticky top-0 z-30">
        <header className="w-full rounded-b-[24px]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex items-center justify-between h-20">
              <Link href={`/${lang}`} className="flex items-center">
                <Image src={logoSrc || "/placeholder.svg"} alt="Агентство Лого" width={140} height={40} />
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-black font-medium hover:text-primary transition-all duration-300 hover:scale-105 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary/60 to-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                ))}
              </nav>
              <div className="flex items-center gap-2">
                <LocaleSwitcher />
                <Button className="hidden lg:inline-flex liquid-glass-button text-black">{dictionary.header.getOffer}</Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="md:hidden liquid-glass-button-icon"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </div>
            </div>
          </div>
        </header>
      </GlassSurface>
    </>
  )
}
