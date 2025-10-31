"use client"

import { motion } from "framer-motion"
import { Clock, MapPin, Gift, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Clock,
    title: "Opening Hours",
    description: "Mon-Fri: 9:30am - 6:30pm\nSat: 9:30am - 5:30pm\nSun: Closed\n\nBookings available by negotiation",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "64 Grampians Circuit\nYarrabilba, QLD 4207",
  },
  {
    icon: Gift,
    title: "Gift Cards",
    description: "Perfect for any occasion\nAvailable for all services",
  },
  {
    icon: Star,
    title: "Quality Service",
    description: "Professional treatments\nRelaxing atmosphere",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Welcome to Pink Perfection</h2>
          <div className="text-lg text-muted-foreground max-w-3xl mx-auto space-y-4">
            <p>
              Pink Perfection Nails And Beauty is a service-based business providing beauty and nail treatments in a home-based salon located in Yarrabilba, QLD. Our salon offers a wide range of nail and beauty treatments, including waxing, tanning, facials, massage, lash lifts & tinting, spa treatments, and various packages. Including Children's Birthday Spa Parties.
            </p>
            <p>
              Our business started with a passion for providing high-quality beauty services in a comfortable and convenient setting. We pride ourselves on providing a friendly, relaxing, and tranquil atmosphere for clients to enjoy their treatments. Our skilled and experienced technician aims to provide a professional and high-quality experience for our customers. We believe in going above and beyond for our clients, and our commitment to customer satisfaction is what sets us apart from the crowd. Get to know us better and book an appointment today!
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full text-center border-pink-100 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-8 pb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-50 text-pink-500 mb-4">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
