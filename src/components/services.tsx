"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import {
  Search,
  Palette,
  Megaphone,
  PenTool,
  BrainCircuit,
  Users,
  Camera,
  Globe,
  Monitor,
} from "lucide-react"

interface ServicesProps {
  dictionary: any
}

export default function Services({ dictionary }: ServicesProps) {
  // Servis başlıqlarına görə ikon map
  const iconMap: Record<string, JSX.Element> = {
    "Rəqəmsal Marketinq": <BrainCircuit className="w-10 h-10 text-primary" />,
    SMM: <Users className="w-10 h-10 text-primary" />,
    "Bazar Araşdırması": <Search className="w-10 h-10 text-primary" />,
    Brendinq: <Palette className="w-10 h-10 text-primary" />,
    Dizayn: <PenTool className="w-10 h-10 text-primary" />,
    "Foto/Video Çəkiliş": <Camera className="w-10 h-10 text-primary" />,
    "Saytların Hazırlanması": <Globe className="w-10 h-10 text-primary" />,
    "Indoor Reklam": <Monitor className="w-10 h-10 text-primary" />,
    "Outdoor Reklam": <Megaphone className="w-10 h-10 text-primary" />,
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0, rotate: -3 },
    visible: {
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const { scrollY } = useScroll()
  const yParallax = useTransform(scrollY, [0, 500], [0, -100]) 

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden">
      {/* 🔮 Background watermark W */}
      <motion.div
        style={{ y: yParallax }}
        className="absolute right-[-8rem] top-1/2 -translate-y-1/2 rotate-90 
             font-extrabold text-[20rem] md:text-[25rem] text-primary/5 
             select-none pointer-events-none leading-none"
      >
        WOOM
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-center text-foreground"
          >
            {dictionary.services.title}
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-2xl mx-auto text-center text-muted-foreground"
          >
            {dictionary.services.subtitle}
          </motion.p>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {dictionary.services.items.map((service: any, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="relative p-8 bg-card/80 backdrop-blur-lg rounded-2xl shadow-lg 
                           border border-white/10 hover:border-primary/50 
                           hover:shadow-xl transition-all duration-500 overflow-hidden"
              >
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                {/* Icon animasiya */}
                <motion.div
                  initial={{ scale: 0, rotate: -45, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{
                    delay: 0.2 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                  }}
                >
                  {iconMap[service.title] ??
                    <Megaphone className="w-10 h-10 text-primary" />}
                </motion.div>

                <h3 className="mt-6 text-xl font-semibold text-foreground relative z-10">
                  {service.title}
                </h3>
                <p className="mt-2 text-muted-foreground relative z-10">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
