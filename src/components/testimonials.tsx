"use client"

import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/src/components/ui/avatar"

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
      <section id="testimonials" className="py-20 md:py-28 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              {dictionary.testimonials.title}
            </motion.h2>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {dictionary.testimonials.items.map((testimonial: any, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-card/80 backdrop-blur-sm p-8 rounded-lg shadow-lg border border-white/10 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <p className='text-card-foreground/80 italic before:content-["""] before:mr-1 after:content-["""] after:ml-1'>
                    {testimonial.quote}
                  </p>

                  <div className="mt-6 flex items-center">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                      />
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
  )
}
