"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
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

interface HeroProps {
  dictionary: any
}

export default function Hero({ dictionary }: HeroProps) {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeInOut" },
  }

  return (
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
  )
}
