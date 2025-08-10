"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { X, Twitter, Instagram, Linkedin } from "lucide-react"
import type { ReactNode } from "react"
import { useEffect } from "react"

interface NavLink {
  href: string
  label: string
  icon: ReactNode
}

interface MobileMenuProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  navLinks: NavLink[]
  getOfferLabel: string
  lang: string
  logoSrc: string
}

export function MobileMenu({ isOpen, setIsOpen, navLinks, getOfferLabel, lang, logoSrc }: MobileMenuProps) {
  // Disable body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    // Cleanup function to restore scroll when component unmounts
    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }
  }, [isOpen])

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const menuVariants = {
    hidden: {
      x: "100%",
      transition: { type: "spring" as const, stiffness: 400, damping: 40 },
    },
    visible: {
      x: 0,
      transition: { type: "spring" as const, stiffness: 400, damping: 40 },
    },
  }

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          />
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm flex flex-col"
            style={{
              background: `
                linear-gradient(
                  135deg, 
                  rgba(255, 255, 255, 0.1) 0%, 
                  rgba(255, 255, 255, 0.05) 25%, 
                  rgba(255, 255, 255, 0.15) 50%, 
                  rgba(255, 255, 255, 0.08) 75%, 
                  rgba(255, 255, 255, 0.12) 100%
                )
              `,
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: `
                0 8px 32px rgba(0, 0, 0, 0.15),
                0 2px 8px rgba(0, 0, 0, 0.08),
                inset 0 1px 0 rgba(255, 255, 255, 0.3)
              `,
            }}
          >
            <div className="p-6 flex items-center justify-between border-b border-white/20">
              <Link href={`/${lang}`} onClick={() => setIsOpen(false)}>
                <Image src={logoSrc || "/placeholder.svg"} alt="Агентство Лого" width={120} height={34} />
              </Link>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-lg hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-grow p-6">
              <motion.ul variants={listVariants} initial="hidden" animate="visible" className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <motion.li key={link.href} variants={itemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-4 p-4 text-4xl text-white rounded-xl font-bold hover:bg-white/10 transition-all duration-200 hover:scale-105 group"
                    >
                      <span className="text-primary">{link.icon}</span>
                      {link.label}
                      <span className="ml-auto w-0 h-0.5 bg-gradient-to-r from-primary/60 to-primary transition-all duration-300 group-hover:w-4"></span>
                    </Link>
                  </motion.li>  
                ))}
              </motion.ul>
            </nav>

            <div className="p-6 border-t border-white/20">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                  style={{
                    background: `
                      linear-gradient(
                        135deg, 
                        rgba(59, 130, 246, 0.9) 0%, 
                        rgba(59, 130, 246, 0.8) 50%, 
                        rgba(59, 130, 246, 0.9) 100%
                      )
                    `,
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: `
                      0 8px 32px rgba(59, 130, 246, 0.3),
                      0 2px 8px rgba(59, 130, 246, 0.2),
                      inset 0 1px 0 rgba(255, 255, 255, 0.3)
                    `,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  <span className="relative z-10 text-white">{getOfferLabel}</span>
                </Link>
                <div className="mt-6 flex justify-center gap-6 text-muted-foreground">
                  <a href="#" className="hover:text-primary transition-colors duration-200 hover:scale-110">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors duration-200 hover:scale-110">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors duration-200 hover:scale-110">
                    <Linkedin size={20} />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
