"use client"

import { useState, useEffect, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import LocaleSwitcher from "@/src/components/locale-switcher"
import { MobileMenu } from "@/src/components/mobile-menu"
import type { Locale } from "@/src/app/(frontend)/i18n-config"

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
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks: NavLink[] = [
    { href: "#services", label: dictionary.header.services, icon: null },
    { href: "#process", label: dictionary.header.process, icon: null },
    { href: "#portfolio", label: dictionary.header.portfolio, icon: null },
    { href: "#blog", label: dictionary.header.blog, icon: null },
    { href: "#contact", label: dictionary.header.contact, icon: null },
  ]

  // Calculate blur and refraction effects based on scroll
  const blurIntensity = Math.min(scrollY * 0.01, 0.3)
  const refractionIntensity = Math.min(scrollY * 0.005, 0.15)

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
    
      <header
        className="sticky top-0 z-30 transition-all duration-300 ease-out rounded-b-[24px]"
        style={{
          backdropFilter: `blur(${20 + blurIntensity * 40}px)`,
          WebkitBackdropFilter: `blur(${20 + blurIntensity * 40}px)`,
        }}
      >
        {/* Liquid glass background with refraction effects */}
        <div 
          className="absolute inset-0 transition-all duration-500 ease-out"
          style={{
            background: `
              linear-gradient(
                135deg, 
                rgba(255, 255, 255, ${0.08 + refractionIntensity}) 0%, 
                rgba(255, 255, 255, ${0.05 + refractionIntensity * 0.5}) 25%, 
                rgba(255, 255, 255, ${0.12 + refractionIntensity * 0.8}) 50%, 
                rgba(255, 255, 255, ${0.06 + refractionIntensity * 0.3}) 75%, 
                rgba(255, 255, 255, ${0.09 + refractionIntensity * 0.6}) 100%
              )
            `,
            borderRadius: '0 0 24px 24px',
            border: `1px solid rgba(255, 255, 255, ${0.15 + refractionIntensity * 0.3})`,
            boxShadow: `
              0 8px 32px rgba(0, 0, 0, ${0.08 + refractionIntensity * 0.2}),
              0 2px 8px rgba(0, 0, 0, ${0.04 + refractionIntensity * 0.1}),
              inset 0 1px 0 rgba(255, 255, 255, ${0.2 + refractionIntensity * 0.4})
            `,
          }}
        />
        
        {/* Subtle refraction patterns */}
        <div 
          className="absolute inset-0 opacity-30 transition-opacity duration-700"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255, 255, 255, 0.06) 0%, transparent 50%)
            `,
            opacity: 0.3 + refractionIntensity * 0.7,
          }}
        />


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
    </>
  )
}
