"use client"

import { motion, cubicBezier } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import BlurText from "../text-animations/BlurText/BlurText"
import RotatingText from "../text-animations/RotatingText/RotatingText"

interface HeroProps {
    dictionary: any
  }
  
  export default function Hero2({ dictionary }: HeroProps) {
    const ease = cubicBezier(0.22, 1, 0.36, 1)
    const fadeIn = {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.3 },
      transition: { duration: 0.6, ease },
    }
  
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>
        </div>
  
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center text-white gap-6">
          {/* Title */}
          <motion.h1
            {...fadeIn}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
          >
            <BlurText
              text={dictionary.hero.line1}
              delay={150}
              animateBy="words"
              direction="top"
              className="block"
            />
            <BlurText
              text={dictionary.hero.line2}
              delay={150}
              animateBy="words"
              direction="top"
              className="block justify-center"
            />
            <RotatingText
              texts={dictionary.hero.animatedWords}
              mainClassName="inline-block  h-fit md:h-fit overflow-hidden text-cyan-300"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </motion.h1>
  
          {/* Subtitle */}
          <motion.p
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200"
          >
            <BlurText
              text={dictionary.hero.subtitle}
              delay={20}
              animateBy="words"
              direction="top"
            />
          </motion.p>
  
          {/* Buttons */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-blue-900 hover:bg-cyan-500 text-primary-foreground"
            >
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
  
  