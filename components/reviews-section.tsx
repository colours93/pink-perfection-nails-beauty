"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const reviews = [
  {
    name: "Ruby Dean",
    initials: "RD",
    rating: 5,
    text: "I highly recommend Pink Perfection for those who value nail care. The level of hygiene exceeded the standard usually experienced in busy nail salons. The owner was friendly and demonstrated a wealth of experience and knowledge in the industry.",
    service: "Nail Care",
  },
  {
    name: "Millie",
    initials: "M",
    rating: 5,
    text: "Carolyn is the perfect mix of professional and friendly. She ensured I was comfortable during the entire appointment and was happy to explain her process. Walked out with beautiful nails and a big smile, all at a fantastic price.",
    service: "Acrylic Nails",
  },
  {
    name: "Simone Wheoki",
    initials: "SW",
    rating: 5,
    text: "Booked in for a hot stone massage with Carolyn and it was amazing. Arrived with so much discomfort and left feeling lighter and relaxed.",
    service: "Hot Stone Massage",
  },
  {
    name: "Leanne Tsui",
    initials: "LT",
    rating: 5,
    text: "Carolyn is a very lovely and friendly lady. She listens to what her clients needs and do her best. I had a body massage with her several times and I enjoyed them very much.",
    service: "Body Massage",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="py-24 bg-gradient-to-b from-pink-50/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Reviews From Happy Customers
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Small businesses thrive on reviews and word-of-mouth recommendations, making your candid feedback invaluable to us. Your input helps us grow and improve, ensuring we continue to meet and exceed your expectations.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full border-pink-100 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Avatar className="w-12 h-12 border-2 border-pink-100">
                      <AvatarFallback className="bg-pink-50 text-pink-600 font-semibold">
                        {review.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{review.name}</h4>
                      <div className="flex items-center gap-1 mt-1">
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-pink-400 text-pink-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">"{review.text}"</p>
                  <p className="text-sm text-pink-600 font-medium">{review.service}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
