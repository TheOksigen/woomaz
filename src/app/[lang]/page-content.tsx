"use client"

import { useState, useEffect, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
// import { Button } from "@/components/ui/button"
import { Input } from "@/src/components/ui/input"

import { Textarea } from "@/src/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import {
  ArrowRight,
  BrainCircuit,
  Megaphone,
  Palette,
  PenTool,
  Search,
  Send,
  Users,
  Menu,
  Sparkles,
  Briefcase,
  BookOpen,
  Mail,
  Workflow,
} from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "@/src/components/theme-toggle"
import LocaleSwitcher from "@/src/components/locale-switcher"
import { MobileMenu } from "@/src/components/mobile-menu"
import type { Locale } from "@/src/app/i18n-config"
import { Button } from "@/src/components/ui/button"

const AnimatedWords = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [words.length])

  return (
    <span className="inline-block relative h-12 md:h-16 overflow-hidden text-cyan-300">
      {words.map((word, index) => (
        <motion.span
          key={word}
          className="absolute"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: index === currentWordIndex ? "0%" : "-100%", opacity: index === currentWordIndex ? 1 : 0 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

const PageContent = ({
  dictionary,
  lang,
}: {
  dictionary: any
  lang: Locale
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = mounted && theme === "dark" ? "/logo-white.png" : "/logo.png"

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeInOut" },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  interface NavLink {
    href: string
    label: string
    icon: ReactNode
  }

  const navLinks: NavLink[] = [
    { href: "#services", label: dictionary.header.services, icon: <Sparkles size={22} /> },
    { href: "#process", label: dictionary.header.process, icon: <Workflow size={22} /> },
    { href: "#portfolio", label: dictionary.header.portfolio, icon: <Briefcase size={22} /> },
    { href: "#blog", label: dictionary.header.blog, icon: <BookOpen size={22} /> },
    { href: "#contact", label: dictionary.header.contact, icon: <Mail size={22} /> },
  ]

  const partners = [
    { name: "Innovate Co", logo: "https://placehold.co/140x40" },
    { name: "Quantum Leap", logo: "https://placehold.co/140x40" },
    { name: "Stellar Solutions", logo: "https://placehold.co/140x40" },
    { name: "Apex Dynamics", logo: "https://placehold.co/140x40" },
    { name: "FusionWorks", logo: "https://placehold.co/140x40" },
    { name: "NextGen Corp", logo: "https://placehold.co/140x40" },
    { name: "Synergy Inc", logo: "https://placehold.co/140x40" },
  ]

  const serviceIcons = [
    <Search key="search" className="w-8 h-8 text-primary" />,
    <Palette key="palette" className="w-8 h-8 text-primary" />,
    <Megaphone key="megaphone" className="w-8 h-8 text-primary" />,
    <PenTool key="pen-tool" className="w-8 h-8 text-primary" />,
    <BrainCircuit key="brain-circuit" className="w-8 h-8 text-primary" />,
    <Users key="users" className="w-8 h-8 text-primary" />,
  ]
  const blogImages = [

    "https://placehold.co/400x250",
    "https://placehold.co/400x250",
    "https://placehold.co/400x250",
  ]
  const testimonialAvatars = [
    "https://placehold.co/48x48",
    "https://placehold.co/48x48",
    "https://placehold.co/48x48",
  ]

  return (
    <div className="bg-white/80 dark:bg-background/80 backdrop-blur-md">
      <MobileMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        navLinks={navLinks}
        getOfferLabel={dictionary.header.getOffer}
        lang={lang}
        logoSrc={logoSrc}
      />
      <header className="sticky top-0 z-30 bg-white/80 dark:bg-background/80 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href={`/${lang}`} className="flex items-center">
              <Image src={logoSrc || "/placeholder.svg"} alt="Агентство Лого" width={140} height={40} />
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2">
              <LocaleSwitcher />
              <ThemeToggle />
              <Button className="hidden lg:inline-flex">{dictionary.header.getOffer}</Button>
              <Button
                variant="outline"
                size="icon"
                className="md:hidden bg-transparent"
                onClick={() => setIsMenuOpen(true)}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Открыть меню</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <div className="absolute top-0 left-0 w-full h-full z-[-1]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="/placeholder.svg?width=1920&height=1080&text=Loading+Video..."
            >
              <source src="/hero-background.mp4" type="video/mp4" />
            </video>
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30 dark:bg-black/50"></div>
          </div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.h1
              {...fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-shadow-lg"
            >
              {dictionary.hero.line1} <br /> {dictionary.hero.line2}{" "}
              <AnimatedWords words={dictionary.hero.animatedWords} />
            </motion.h1>
            <motion.p
              {...fadeIn}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-200 text-shadow"
            >
              {dictionary.hero.subtitle}
            </motion.p>
            <motion.div
              {...fadeIn}
              transition={{ delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" className="w-full sm:w-auto bg-blue-900 hover:bg-cyan-500 text-primary-foreground">
                {dictionary.hero.getOffer}
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto bg-white/20 hover:bg-white/30 backdrop-blur-sm border-none"
              >
                {dictionary.hero.learnMore} <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="py-12 bg-secondary/70">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-center text-sm font-semibold text-muted-foreground tracking-wider uppercase">
              {dictionary.partners.title}
            </h3>
            <div className="mt-8 relative overflow-hidden whitespace-nowrap">
              <div className="logos-slide">
                {[...partners, ...partners].map((partner, index) => (
                  <Image
                    key={index}
                    src={partner.logo}
                    alt={partner.name}
                    width={140}
                    height={40}
                    className="inline-block mx-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all dark:invert dark:opacity-40 dark:hover:opacity-100"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center text-foreground">
                {dictionary.services.title}
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
                {dictionary.services.subtitle}
              </motion.p>
              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {dictionary.services.items.map((service, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="p-8 bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border"
                  >
                    {serviceIcons[index]}
                    <h3 className="mt-4 text-xl font-semibold text-foreground">{service.title}</h3>
                    <p className="mt-2 text-muted-foreground">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 md:py-28 bg-secondary/70">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center text-foreground">
                {dictionary.testimonials.title}
              </motion.h2>
              <div className="mt-16 grid gap-8 lg:grid-cols-3">
                {dictionary.testimonials.items.map((testimonial, index) => (
                  <motion.div key={index} variants={itemVariants} className="bg-card p-8 rounded-lg shadow-md border">
                    <p className="text-card-foreground/80 italic before:content-['“'] before:mr-1 after:content-['”'] after:ml-1">
                      {testimonial.quote}
                    </p>
                    <div className="mt-6 flex items-center">
                      <Avatar>
                        <AvatarImage src={testimonialAvatars[index] || "/placeholder.svg"} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center text-foreground">
                {dictionary.blog.title}
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground">
                {dictionary.blog.subtitle}
              </motion.p>
              <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {dictionary.blog.posts.map((post, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group overflow-hidden rounded-lg shadow-lg bg-card border"
                  >
                    <div className="overflow-hidden">
                      <Image
                        src={blogImages[index] || "/placeholder.svg"}
                        alt={post.title}
                        width={400}
                        height={250}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm font-medium text-primary">{post.category}</p>
                      <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <a href="#" className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                        {dictionary.blog.readMore} <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-28 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="max-w-3xl mx-auto text-center"
            >
              <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold">
                {dictionary.contact.title}
              </motion.h2>
              <motion.p variants={itemVariants} className="mt-4 text-lg text-primary-foreground/80">
                {dictionary.contact.subtitle}
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="mt-12 max-w-xl mx-auto"
            >
              <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <Input
                  placeholder={dictionary.contact.namePlaceholder}
                  className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60 focus:ring-primary-foreground"
                />
                <Input
                  type="email"
                  placeholder={dictionary.contact.emailPlaceholder}
                  className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60 focus:ring-primary-foreground"
                />
                <Textarea
                  placeholder={dictionary.contact.messagePlaceholder}
                  className="sm:col-span-2 bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60 focus:ring-primary-foreground"
                  rows={4}
                />
                <Button
                  type="submit"
                  size="lg"
                  className="sm:col-span-2 w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                >
                  {dictionary.contact.submitButton} <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-400">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <Image src="/logo-white.png" alt="Агентство Лого" width={130} height={44} />
            </div>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-8 md:mt-0">
              <Link href="#services" className="text-sm hover:text-white transition-colors">
                {dictionary.header.services}
              </Link>
              <Link href="#portfolio" className="text-sm hover:text-white transition-colors">
                {dictionary.header.portfolio}
              </Link>
              <Link href="#blog" className="text-sm hover:text-white transition-colors">
                {dictionary.header.blog}
              </Link>
              <Link href="#contact" className="text-sm hover:text-white transition-colors">
                {dictionary.header.contact}
              </Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-xs opacity-50 space-x-2">
            <span>#digitalmarketing</span>
            <span>#smm</span>
            <span>#вебсайт</span>
            <span>#брендинг</span>
            <span>#pr</span>
            <span>#дизайн</span>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            <p>
              &copy; {new Date().getFullYear()} Marketing Agency. {dictionary.footer.copyright}
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PageContent
