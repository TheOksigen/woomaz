"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Button } from "@/src/components/ui/button"
import { Input } from "@/src/components/ui/input"
import { Textarea } from "@/src/components/ui/textarea"
import CreativeBackground from "./creative-background"

interface ContactProps {
  dictionary: any
}

export default function Contact({ dictionary }: ContactProps) {
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
    <CreativeBackground pattern="particles" intensity={0.9}>
      <section id="contact" className="py-20 md:py-28 relative bg-primary/90 text-primary-foreground">
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
                className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60 focus:ring-primary-foreground backdrop-blur-sm"
              />
              <Input
                type="email"
                placeholder={dictionary.contact.emailPlaceholder}
                className="bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60 focus:ring-primary-foreground backdrop-blur-sm"
              />
              <Textarea
                placeholder={dictionary.contact.messagePlaceholder}
                className="sm:col-span-2 bg-primary-foreground/10 border-primary-foreground/20 placeholder:text-primary-foreground/60 focus:ring-primary-foreground backdrop-blur-sm"
                rows={4}
              />
              <Button
                type="submit"
                size="lg"
                className="sm:col-span-2 w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover:scale-105 transition-all duration-300"
              >
                {dictionary.contact.submitButton} <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </CreativeBackground>
  )
}
