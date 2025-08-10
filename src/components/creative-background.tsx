"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

interface CreativeBackgroundProps {
  children: React.ReactNode
  sectionId?: string
  intensity?: number
  pattern?: "floating" | "grid" | "wave" | "particles"
}

export default function CreativeBackground({ 
  children, 
  sectionId = "section", 
  intensity = 1,
  pattern = "floating"
}: CreativeBackgroundProps) {
  const [scrollY, setScrollY] = useState(0)
  const { scrollYProgress } = useScroll()
  
  // Parallax transforms
  const logoY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const logoScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const logoOpacity = useTransform(scrollYProgress, [0, 1], [0.1, 0.05])
  
  // Floating elements transforms
  const float1Y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const float2Y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const float3Y = useTransform(scrollYProgress, [0, 1], [0, -80])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderPattern = () => {
    switch (pattern) {
      case "grid":
        return (
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>
        )
      
      case "wave":
        return (
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <path
                d="M0,200 Q300,100 600,200 T1200,200 L1200,400 L0,400 Z"
                fill="rgba(255,255,255,0.02)"
                className="animate-pulse"
              />
              <path
                d="M0,300 Q300,200 600,300 T1200,300 L1200,400 L0,400 Z"
                fill="rgba(255,255,255,0.01)"
                className="animate-pulse"
                style={{ animationDelay: '1s' }}
              />
            </svg>
          </div>
        )
      
      case "particles":
        return (
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        )
      
      default: // floating
        return (
          <>
            {/* Floating geometric shapes */}
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 border border-white/10 rounded-full"
              style={{ y: float1Y }}
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute top-40 right-20 w-24 h-24 border border-white/8 rounded-lg"
              style={{ y: float2Y }}
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-20 left-1/4 w-20 h-20 border border-white/6"
              style={{ y: float3Y }}
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 90, 180, 270, 360],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </>
        )
    }
  }

  return (
    <div className="relative overflow-hidden">
      {/* Main Logo Background with Parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          y: logoY,
          scale: logoScale,
          opacity: logoOpacity,
        }}
      >
        <Image
          src="/logo-white.png"
          alt="Background Logo"
          width={800}
          height={400}
          className="w-auto h-auto max-w-none opacity-20"
          priority={false}
        />
      </motion.div>

      {/* Secondary Logo Elements */}
      <div className="absolute inset-0">
        {/* Top left corner logo */}
        <motion.div
          className="absolute top-8 left-8 opacity-5"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Image
            src="/logo-white.png"
            alt="Corner Logo"
            width={120}
            height={60}
            className="w-auto h-auto"
          />
        </motion.div>

        {/* Top right corner logo */}
        <motion.div
          className="absolute top-8 right-8 opacity-5"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Image
            src="/logo-white.png"
            alt="Corner Logo"
            width={120}
            height={60}
            className="w-auto h-auto"
          />
        </motion.div>

        {/* Bottom left corner logo */}
        <motion.div
          className="absolute bottom-8 left-8 opacity-5"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <Image
            src="/logo-white.png"
            alt="Corner Logo"
            width={120}
            height={60}
            className="w-auto h-auto"
          />
        </motion.div>

        {/* Bottom right corner logo */}
        <motion.div
          className="absolute bottom-8 right-8 opacity-5"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        >
          <Image
            src="/logo-white.png"
            alt="Corner Logo"
            width={120}
            height={60}
            className="w-auto h-auto"
          />
        </motion.div>
      </div>

      {/* Pattern Overlay */}
      {renderPattern()}

      {/* Subtle gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5" />
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-white/5" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
