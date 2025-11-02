"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { Sparkles, Clock, MapPin } from "lucide-react" // Updated icons for beauty salon
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"
import { Button } from "./ui/button"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 0.95])
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50])
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
    return (
      <span>
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: delay + index * 0.03,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            style={{ display: char === " " ? "inline" : "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </span>
    )
  }

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/bamboonails.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-pink-900/40 via-rose-900/30 to-pink-950/50" />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex items-center justify-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <div className="container-custom text-center text-white px-4">
          <Reveal>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight mb-6">
              <AnimatedText text="Pink Perfection" delay={0.5} />
              <br />
              <span className="italic font-light text-pink-200">
                <AnimatedText text="Nails And Beauty" delay={1.1} />
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.p
              className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              Welcome to Pink Perfection Nails And Beauty, your go-to destination for a truly indulgent and relaxing beauty experience. Our tranquil home salon offers a wide range of services, from indulgent massages & serene spa treatments, to luxurious nail services, waxing, spray tanning, lash lifts, and tinting. Whatever your beauty needs, we have you covered!
            </motion.p>
          </Reveal>

          <Reveal delay={0.3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 text-lg" asChild>
                <a
                  href="https://book.heygoldie.com/PINK-PERFECTION-NAILS-BEAUTY"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Online
                </a>
              </Button>
            </motion.div>
          </Reveal>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-20 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <BlurPanel className="mx-6 mb-6 px-6 py-4 bg-pink-950/40 backdrop-blur-md border-pink-200/20">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/90">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-pink-300" />
              <span className="text-sm">Premium Services</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-pink-300" />
              <span className="text-sm">Mon-Fri 9:30am-6:30pm, Sat 9:30am-5:30pm</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-pink-300" />
              <span className="text-sm">Yarrabilba, QLD</span>
            </div>
          </div>
        </BlurPanel>
      </motion.div>
    </section>
  )
}
