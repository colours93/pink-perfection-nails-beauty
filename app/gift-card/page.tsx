"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Gift, Heart, Sparkles } from "lucide-react"

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
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Gift className="w-10 h-10 text-pink-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">eGift Card</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
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
              <Card className="border-pink-100 overflow-hidden">
                <div className="bg-gradient-to-br from-pink-500 via-rose-400 to-pink-600 p-12 text-white text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <Sparkles className="absolute top-4 left-4 w-8 h-8" />
                    <Heart className="absolute top-8 right-8 w-6 h-6" />
                    <Sparkles className="absolute bottom-8 left-12 w-6 h-6" />
                    <Heart className="absolute bottom-4 right-4 w-8 h-8" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Pink Perfection</h2>
                    <p className="text-xl mb-2">Nails & Beauty</p>
                    <p className="text-sm opacity-90">Gift Card</p>
                  </div>
                </div>

                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">Select Amount</h3>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {giftAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant="outline"
                        className="h-16 text-lg font-semibold border-pink-200 hover:bg-pink-50 hover:border-pink-300 bg-transparent"
                      >
                        ${amount}
                      </Button>
                    ))}
                    <Button
                      variant="outline"
                      className="h-16 text-lg font-semibold border-pink-200 hover:bg-pink-50 hover:border-pink-300 bg-transparent"
                    >
                      Other
                    </Button>
                  </div>

                  <div className="bg-pink-50/50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-foreground mb-3">Gift Card Features:</h4>
                    <ul className="space-y-2 text-muted-foreground">
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

                  <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white text-lg py-6">
                    Purchase Gift Card
                  </Button>

                  <p className="text-sm text-muted-foreground text-center mt-4">
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
