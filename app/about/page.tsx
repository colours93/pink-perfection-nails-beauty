"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Heart, Sparkles, Award } from "lucide-react"

export default function AboutPage() {
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Welcome to Pink Perfection Nails And Beauty, your go-to destination for a truly indulgent and relaxing
              beauty experience.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-12 items-center mb-16"
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://static.wixstatic.com/media/06018d_e91b737194cb40f4b5180b011b1930f8~mv2.png/v1/fill/w_1412,h_1177,al_c,q_90,enc_avif,quality_auto/06018d_e91b737194cb40f4b5180b011b1930f8~mv2.png"
                  alt="Carolyn - Owner of Pink Perfection Nails & Beauty"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Meet Carolyn</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Pink Perfection Nails And Beauty is a service-based business providing beauty and nail treatments in a
                  home-based salon located in Yarrabilba, QLD. Our salon offers a wide range of nail and beauty
                  treatments, including waxing, tanning, facials, massage, lash lifts & tinting, spa treatments, and
                  various packages. Including Children's Birthday Spa Parties.
                </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Our business started with a passion for providing high-quality beauty services in a comfortable and convenient setting. We pride ourselves on providing a friendly, relaxing, and tranquil atmosphere for clients to enjoy their treatments. Our skilled and experienced technician aims to provide a professional and high-quality experience for our customers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    We believe in going above and beyond for our clients, and our commitment to customer satisfaction is what sets us apart from the crowd. Get to know us better and book an appointment today!
                  </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
                What Sets Us Apart
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-pink-100 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Complimentary Consultations</h3>
                    <p className="text-muted-foreground">
                      Personalized advice to help you choose the perfect treatment
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-pink-100 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Unbeatable Satisfaction</h3>
                    <p className="text-muted-foreground">We guarantee quality work and stand behind our services</p>
                  </CardContent>
                </Card>

                <Card className="border-pink-100 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 text-center">
                    <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-pink-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">Expert Professionalism</h3>
                    <p className="text-muted-foreground">Skilled technician with years of experience and training</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="border-pink-100 bg-gradient-to-br from-pink-50/50 to-rose-50/50">
                <CardContent className="p-8">
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6">Our Policies</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-pink-500" />
                        Deposit Policy
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Every client is important to us. Due to the high level of no shows, we require a deposit when
                        all bookings are made to confirm your booking. This deposit will be taken off of the total
                        service fee on the day of the appointment.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-pink-500" />
                        Cancellation Policy
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We respectfully request at least 24 hours' notice if you need to cancel or make changes to your
                        appointment time. Failure to arrive for your appointment, or arriving late without prior
                        notification will result in the loss of your deposit.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-pink-500" />
                        Late Arrival Policy
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Please be sure to arrive on time for your appointment. Arriving late may result in your
                        appointment being cancelled or rescheduled. Please call us on 0400 113 407 if you know you are
                        going to be over 10 minutes late.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-pink-500" />
                        Our Guarantee
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We pride ourselves on our work and if there is any problems with your nails after having them done, please contact us straight away. We will fix them at no cost within the first week of completion of our work if notified, within this timeframe.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-pink-500" />
                        Other Salons Note
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We do not guarantee other salons workmanship, due to being unaware of their workmanship or the integrity of their products.
                      </p>
                    </div>
                  </div>
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
