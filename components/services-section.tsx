"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Heart, Flower2, Star, Scissors, Hand } from "lucide-react"

const services = [
  {
    category: "Nail Services",
    icon: Sparkles,
    color: "text-pink-500",
    items: [
      { name: "Acrylic Full Set", duration: "2 hrs 20 min", price: "$65" },
      { name: "Acrylic Re Fill", duration: "-", price: "$50" },
      { name: "Acrylic overlay", duration: "-", price: "$50" },
      { name: "Gel Full Set", duration: "-", price: "$65" },
      { name: "Gel Re fill", duration: "-", price: "$60" },
      { name: "Builder in a Bottle Overlay", duration: "-", price: "$50" },
      { name: "Gel Polish", duration: "-", price: "$25" },
      { name: "Removal of Acrylic Nails", duration: "-", price: "$25" },
    ],
  },
  {
    category: "Manicure & Pedicure",
    icon: Hand,
    color: "text-rose-500",
    items: [
      { name: "Manicure No Polish", duration: "-", price: "$30" },
      { name: "Manicure + Lacquer Polish", duration: "-", price: "$35" },
      { name: "Manicure + Gel/Shellac Polish", duration: "-", price: "$45" },
      { name: "Mani Pedi with Lacquer Polish", duration: "-", price: "$60" },
      { name: "Pedicure No Polish", duration: "-", price: "$30" },
      { name: "Pedicure With Lacquer Polish", duration: "-", price: "$40" },
      { name: "Pedicure With Gel/Shellac Polish", duration: "-", price: "$55" },
      { name: "Toenail Trim & Buff", duration: "-", price: "$15" },
    ],
  },
  {
    category: "Massage Services",
    icon: Heart,
    color: "text-fuchsia-500",
    items: [
      { name: "Hot Stone Massage 1 hr", duration: "1 hr", price: "$85" },
      { name: "Hot Stone Massage 45 min", duration: "45 min", price: "$75" },
      { name: "Hot Stone massage 30 min", duration: "30 min", price: "$65" },
      { name: "Hot Stone Massage 20 min", duration: "20 min", price: "$55" },
      { name: "Relaxation Massage 1 hr", duration: "1 hr", price: "$75" },
      { name: "Relaxation Massage 45 min", duration: "45 min", price: "$65" },
      { name: "Relaxation Massage 30 min", duration: "30 min", price: "$55" },
      { name: "Relaxation Massage 20 min", duration: "20 min", price: "$45" },
    ],
  },
  {
    category: "Facial & Spa Treatments",
    icon: Flower2,
    color: "text-pink-400",
    items: [
      { name: "Mini Facial 30 min", duration: "30 min", price: "$50" },
      { name: "Specialty Facial 1 hr", duration: "1 hr", price: "$95" },
      { name: "Head To Toe Deluxe Facial", duration: "1hr 30 min", price: "$120" },
      { name: "Body Scrub & Butter Spa Treatment", duration: "1 hr", price: "$65" },
      { name: "Serenity Spa Treatment", duration: "1 hr 45 min", price: "$145" },
      { name: "Scrub Tone & Tighten Spa Package", duration: "2 hrs", price: "$175" },
      { name: "Deluxe Spa Treatment", duration: "2hrs 45 mins", price: "$200" },
      { name: "Absolute Bliss Spa Treatment", duration: "3 hrs 30", price: "$270" },
      { name: "Skin Rejuvenation Package", duration: "-", price: "$100" },
    ],
  },
  {
    category: "Lash Services",
    icon: Star,
    color: "text-rose-400",
    items: [
      { name: "Lash Tint 30 min", duration: "30 min", price: "$15" },
      { name: "Lash Lift 45 min", duration: "45 min", price: "$60" },
      { name: "Lash Lift & Tint 1 hr", duration: "1 hr", price: "$70" },
    ],
  },
  {
    category: "Waxing Services",
    icon: Scissors,
    color: "text-pink-600",
    items: [
      { name: "Wax Lip", duration: "-", price: "$10" },
      { name: "Wax Chin", duration: "-", price: "$15" },
      { name: "Wax Sides Of Face", duration: "-", price: "$15" },
      { name: "Wax Under Arm", duration: "-", price: "$20" },
      { name: "Arm Wax", duration: "-", price: "$25" },
      { name: "Half Leg Wax", duration: "-", price: "$35" },
      { name: "Full Leg Wax", duration: "-", price: "$40" },
      { name: "Bikini Wax", duration: "-", price: "$25" },
    ],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-pink-50/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Indulge in our range of premium beauty treatments, all performed in the comfort of our tranquil home salon
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="h-full border-pink-100 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-full bg-pink-50 ${service.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-xl font-serif">{service.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {service.items.map((item) => (
                        <div
                          key={item.name + item.duration}
                          className="flex items-start justify-between gap-4 pb-3 border-b border-pink-50 last:border-0"
                        >
                          <div className="flex-1">
                            <p className="font-medium text-foreground text-sm">{item.name}</p>
                            {item.duration !== "-" && <p className="text-xs text-muted-foreground">{item.duration}</p>}
                          </div>
                          <Badge variant="secondary" className="bg-pink-50 text-pink-700 hover:bg-pink-100 text-sm">
                            {item.price}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">All prices in AUD. Gift cards available for all services.</p>
        </motion.div>
      </div>
    </section>
  )
}
