"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Heart } from "lucide-react"

const giftAmounts = [25, 50, 75, 100, 150, 200, 300]

export default function GiftCardPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16 bg-gradient-to-b from-pink-50/50 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 text-center">
              eGift Card
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
              You can't go wrong with a gift card. Choose an amount and write a personalized message to make this gift
              your own.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-pink-100 overflow-hidden shadow-xl">
                {/* Gift Card Banner */}
                <div className="relative bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 p-16 md:p-20 text-white text-center rounded-t-lg overflow-hidden">
                  {/* Decorative Elements */}
                  <Star className="absolute top-6 left-6 w-6 h-6 text-pink-200/60 stroke-2" strokeWidth={1.5} />
                  <Star className="absolute bottom-6 left-8 w-5 h-5 text-pink-200/60 stroke-2" strokeWidth={1.5} />
                  <Heart className="absolute top-8 right-8 w-5 h-5 text-pink-200/60 stroke-2" strokeWidth={1.5} fill="none" />
                  <Heart className="absolute bottom-6 right-6 w-6 h-6 text-pink-200/60 stroke-2" strokeWidth={1.5} fill="none" />
                  
                  {/* Main Text */}
                  <div className="relative z-10">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold mb-3">Pink Perfection</h2>
                    <p className="text-2xl md:text-3xl font-serif mb-2">Nails & Beauty</p>
                    <p className="text-lg md:text-xl font-serif opacity-95">Gift Card</p>
                  </div>
                </div>

                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">Select Amount</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                    {giftAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        className="h-16 text-lg font-semibold border-2 border-pink-200 hover:bg-pink-50 hover:border-pink-400 bg-transparent text-foreground transition-all"
                      >
                        ${amount}
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      className="h-16 text-lg font-semibold border-2 border-pink-200 hover:bg-pink-50 hover:border-pink-400 bg-transparent text-foreground transition-all"
                    >
                      Other
                    </Button>
                  </div>

                  <div className="bg-pink-50/50 rounded-lg p-6 mb-8">
                    <h4 className="font-semibold text-foreground mb-4 text-lg">Gift Card Features:</h4>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>Can be purchased for someone else or for yourself</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>Choose your delivery date</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>Add a personalized message</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-pink-500 mt-1">•</span>
                        <span>Delivered instantly via email</span>
                      </li>
                    </ul>
                  </div>

                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg py-6 mb-4">
                    Purchase Gift Card
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Gift cards can be redeemed for any service at Pink Perfection Nails & Beauty
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
