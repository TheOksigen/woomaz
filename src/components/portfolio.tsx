// import Image from "next/image"

interface PortfolioProps {
  dictionary: any
}


import React from 'react'
import { ThreeDMarquee } from './ui/3d-marquee'
import { motion } from "framer-motion"

const Portfolio = ({ dictionary }: PortfolioProps) => {
  const partners = [
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=f59e0b&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=3b82f6&color=000000",
    "https://place.davidhtml.xyz/api/image?w=400&h=200&bg=10b981&color=000000",
    "https://place.davidhtml.xyz/api/image?w=300&h=200&bg=ef4444&color=000000",
    "https://place.davidhtml.xyz/api/image?w=1100&h=200&bg=8b5cf6&color=000000",
    "https://place.davidhtml.xyz/api/image?w=500&h=200&bg=f97316&color=000000",
    "https://place.davidhtml.xyz/api/image?w=640&h=600&bg=22c55e&color=000000",
    "https://place.davidhtml.xyz/api/image?w=300&h=200&bg=a855f7&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=eab308&color=000000",
    "https://place.davidhtml.xyz/api/image?w=200&h=200&bg=06b6d4&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=84cc16&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=0ea5e9&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=d946ef&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=f43f5e&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=64748b&color=ffffff",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=1f2937&color=ffffff",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=ef4444&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=8b5cf6&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=f97316&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=22c55e&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=a855f7&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=eab308&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=06b6d4&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=84cc16&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=0ea5e9&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=d946ef&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=f43f5e&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=64748b&color=ffffff",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=1f2937&color=ffffff",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=ef4444&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=8b5cf6&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=f97316&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=22c55e&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=a855f7&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=eab308&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=06b6d4&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=84cc16&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=0ea5e9&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=d946ef&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=f43f5e&color=000000",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=64748b&color=ffffff",
    "https://place.davidhtml.xyz/api/image?w=600&h=200&bg=1f2937&color=ffffff",
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
    <>
    <div className='m-24'>
      
      <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold text-center text-foreground">Portfolio</motion.h2>
      <motion.p variants={itemVariants} className='mt-4 max-w-2xl mx-auto text-center text-muted-foreground'>Onlarin heyatinda bizde variq</motion.p>
    </div>
      <ThreeDMarquee images={partners} />
    </>
  )
}

export default Portfolio