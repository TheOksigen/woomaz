"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"
import { Quote, Star } from "lucide-react"

interface TestimonialsProps {
  dictionary: any
}

export default function Testimonials({ dictionary }: TestimonialsProps) {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <Quote className="w-8 h-8 mx-auto mb-4 text-blue-600" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">{dictionary.testimonials.title}</h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {dictionary.testimonials.items.map((testimonial: any, index: number) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-6">
                  <p className="text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                </div>

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="flex items-center">
                  <Avatar className="ring-2 ring-border">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback className="bg-muted text-muted-foreground">
                      {testimonial.name.charAt(0)}
                    </AvatarFallback>
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
  )
}
