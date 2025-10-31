"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Phone, Mail, Gift } from "lucide-react"

export function BookingSection() {
  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="border-pink-100 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-8 md:p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Book Your Appointment</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to treat yourself? Book online or get in touch to schedule your perfect pampering session
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="lg" className="bg-pink-500 hover:bg-pink-600 text-white gap-2" asChild>
                  <a
                    href="https://book.heygoldie.com/PINK-PERFECTION-NAILS-BEAUTY"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-5 h-5" />
                    Book Online
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-pink-200 hover:bg-pink-50 gap-2 bg-transparent"
                  asChild
                >
                  <a href="/gift-card">
                    <Gift className="w-5 h-5" />
                    Purchase Gift Card
                  </a>
                </Button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                <a
                  href="tel:+61400113407"
                  className="flex items-center justify-center gap-2 p-4 rounded-lg bg-white/50 hover:bg-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-pink-500" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Call us</p>
                    <p className="font-semibold text-foreground">0400 113 407</p>
                  </div>
                </a>
                <a
                  href="mailto:carolynbrow318@yahoo.com.au"
                  className="flex items-center justify-center gap-2 p-4 rounded-lg bg-white/50 hover:bg-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-pink-500" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">Email us</p>
                    <p className="font-semibold text-foreground text-sm">carolynbrow318@...</p>
                  </div>
                </a>
              </div>
            </div>

            <CardContent className="p-8 text-center">
              <div className="text-sm text-muted-foreground space-y-2">
                <p>
                  <strong>Deposit Policy:</strong> Every client is important to us, and we understand things come up that may cause you to miss your appointment. With that in mind, we also want to give your appointment the time and attention it deserves. Unfortunately due to the high level of no shows, it has been necessary for us to require to take a deposit when all bookings are made, in order to confirm your booking, this deposit will be taken off of the total service fee on the day of the appointment.
                </p>
                <p>
                  <strong>Cancellation Policy:</strong> As a result, we respectfully request at least 24 hours' notice if you need to cancel or make changes to your appointment time. Failure to arrive for your appointment, or arriving late without prior notification will result in the loss of your deposit.
                </p>
                <p>
                  <strong>Late Arrival Policy:</strong> Please be sure to arrive on time for your appointment. Arriving late may result in your appointment being cancelled or rescheduled. Please call us on (0400113407) if you know you are going to be over 10 minutes late, so we can advise you on whether or not to attend your appointment.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
