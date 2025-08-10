"use client"

import { motion } from "framer-motion"
import { Search, Palette, Megaphone, PenTool, BrainCircuit, Users } from "lucide-react"

interface ServicesProps {
  dictionary: any
}

export default function Services({ dictionary }: ServicesProps) {
  const serviceIcons = [
    <Search key="search" className="w-8 h-8 text-primary" />,
    <Palette key="palette" className="w-8 h-8 text-primary" />,
    <Megaphone key="megaphone" className="w-8 h-8 text-primary" />,
    <PenTool key="pen-tool" className="w-8 h-8 text-primary" />,
    <BrainCircuit key="brain-circuit" className="w-8 h-8 text-primary" />,
    <Users key="users" className="w-8 h-8 text-primary" />,
  ]

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

  return (
      <section id="services" className="py-20 md:py-28 relative">
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
              {dictionary.services.items.map((service: any, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 bg-card/80 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10 hover:scale-105"
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
  )
}
