"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface BlogProps {
  dictionary: any
}

export default function Blog({ dictionary }: BlogProps) {
  const blogImages = [
    "https://placehold.co/400x250",
    "https://placehold.co/400x250",
    "https://placehold.co/400x250",
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
      <section id="blog" className="py-20 md:py-28 relative">
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
              {dictionary.blog.posts.map((post: any, index: number) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group overflow-hidden rounded-lg shadow-lg bg-card/80 backdrop-blur-sm border border-white/10 hover:shadow-xl transition-all duration-300 hover:scale-105"
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
  )
}
