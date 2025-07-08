"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { X, Twitter, Instagram, Linkedin } from "lucide-react"
import type { ReactNode } from "react"

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
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  }

  const menuVariants = {
    hidden: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
    visible: {
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 },
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
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-card flex flex-col"
          >
            <div className="p-6 flex items-center justify-between border-b">
              <Link href={`/${lang}`} onClick={() => setIsOpen(false)}>
                <Image src={logoSrc || "/placeholder.svg"} alt="Агентство Лого" width={120} height={34} />
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-2 text-muted-foreground hover:text-foreground">
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
                      className="flex items-center gap-4 p-4 rounded-lg text-lg font-medium text-foreground hover:bg-secondary transition-colors"
                    >
                      <span className="text-primary">{link.icon}</span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </nav>

            <div className="p-6 border-t">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center px-8 py-4 text-lg font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  {getOfferLabel}
                </Link>
                <div className="mt-6 flex justify-center gap-6 text-muted-foreground">
                  <a href="#" className="hover:text-primary transition-colors">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="hover:text-primary transition-colors">
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
