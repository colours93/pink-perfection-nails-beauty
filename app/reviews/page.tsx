"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const allReviews = [
  {
    name: "Andriena van Molendorff",
    initials: "AV",
    rating: 5,
    date: "1 week ago",
    text: "Facial was very good relaxing and calm surroundings. Pedi well done",
    response:
      "I am so happy that your Mum enjoyed her pampering session yesterday. Thankyou so much for the lovely review I really appreciate the positive feedback ☺️",
  },
  {
    name: "sparkles beauty lounge",
    initials: "SB",
    rating: 5,
    date: "1 month ago",
    text: "Got my pedicure done from Carolyn. Great experience with that as i never experienced a good massage in pedicure which i always wanted but Carolyn did it and i was almost asleep 😀 she is lovely lady as well who understands your feeling and provide you best services. Will book for massage soon.",
    response:
      "Thankyou so much for your lovely review Navpreet, it's my pleasure to ensure that you and all of my clients have only the best experience possible when attending my salon! I'm so happy to know that you enjoyed your massage and am certainly looking forward to pampering you with your total massage on your return appointment.☺️🌹",
  },
  {
    name: "Debbie Bell",
    initials: "DB",
    rating: 5,
    date: "3 months ago",
    text: "Carolyn is amazing, very friendly, great work on my nails, and found out she does massages as well. I will be going back 😊",
    response: "Thanks Debbie, I am looking forward to doing your message for you soon ❣️",
  },
  {
    name: "Ruby Dean",
    initials: "RD",
    rating: 5,
    date: "7 months ago",
    text: "I highly recommend Pink Perfection for those who value nail care. The level of hygiene exceeded the standard usually experienced in busy nail salons. The owner was friendly and demonstrated a wealth of experience and knowledge in the industry. Thank you.",
    response:
      "I certainly appreciate your recommendation Ruby, I absolutely pride myself on ensuring that hygiene is paramount in the salon. It's important to me to ensure that my clients are kept well informed of how to maintain nail care. It was a pleasure meeting you ☺️",
  },
  {
    name: "Valerie Moore",
    initials: "VM",
    rating: 5,
    date: "1 year ago",
    text: "I have been visiting Carolyn for my manicures and facials since she started her business in Myponga. Always get the best service in a relaxed friendly atmosphere. It's great to have her in our town and would definitely recommend her services. She has become a dear friend and I wouldn't want to go anywhere else.",
    response:
      "Thank you so much for your lovely review Val, as always it's my pleasure to pamper such a deserving person. I always look forward to seeing you! You were my very first client when I opened, and have become a most valued client and dear friend 😊",
  },
  {
    name: "Chazel Wadin",
    initials: "CW",
    rating: 5,
    date: "2 years ago",
    text: "Very very happy with my nails, Carolyn made me feel so welcome and when I have the spare cash I'll go back for sure. 😀 Thanks you again",
    response:
      "It was my pleasure doing your nails today Chazel, I feel very privileged that you came and spent your hard earned savings with me.😊 I would love to see you again whenever you are able to get the chance to pamper yourself. Carolyn.",
  },
  {
    name: "Millie",
    initials: "M",
    rating: 5,
    date: "3 years ago",
    text: "Carolyn is the perfect mix of professional and friendly. She ensured I was comfortable during the entire appointment and was happy to explain her process. Walked out with beautiful nails and a big smile, all at a fantastic price. Couldn't recommend more!",
    response:
      "Thank you Tyler for your lovely review, it was a pleasure meeting you today. I always aim to educate my clients whilst ensuring that they feel comfortable, and relaxed whilst visiting my salon. I look forward to seeing you again in 2 weeks!",
  },
  {
    name: "Tayla Ferguson",
    initials: "TF",
    rating: 5,
    date: "3 years ago",
    text: "Very friendly and awesome quality waxing. Very happy with result. 😁",
    response:
      "Thank you so much for giving me the opportunity to provide you with your waxing today, it was a pleasure meeting you and I look forward to seeing you again.😃",
  },
  {
    name: "Pauline McLean",
    initials: "PM",
    rating: 5,
    date: "3 years ago",
    text: "Fantastic experience excellent service Thank you 😊 will be happy to continue to use this salon",
    response:
      "Thank you so much Pauline, it was a pleasure meeting you today and I am so happy that you're going to be coming back for more pampering.😊",
  },
  {
    name: "Donna Stathi",
    initials: "DS",
    rating: 5,
    date: "February 2021",
    text: "Feeling absolutely blissful after my relaxation package. My skin is completely revitalised.",
    response: "So happy that you enjoyed it Donna, and that your skin's feeling so good!",
  },
  {
    name: "Simone Wheoki",
    initials: "SW",
    rating: 5,
    date: "2 months ago",
    text: "Booked in for a hot stone massage with Carolyn and it was amazing. Arrived with so much discomfort and left feeling lighter and relaxed.",
    response:
      "I'm so happy to have been able to help you out last night with your massage Simone, and was really glad to hear that you felt so much better after the treatment. It was very clear to me that you were feeling so much more relaxed when you left. I look forward to seeing you again soon 😊",
  },
  {
    name: "Leanne Tsui",
    initials: "LT",
    rating: 5,
    date: "3 months ago",
    text: "Carolyn is a very lovely and friendly lady. She listens to what her clients needs and do her best. I had a body massage with her several times and I enjoyed them very much. I will definitely visit her regularly.",
    response:
      "Thankyou so much Leanne, I always listen to my clients as they are very important to me. It is always my policy to ensure that when my clients leave they feel that they have received the treatment that they are happy with, and they do want to return. I look forward to our next pampering session ❣️",
  },
  {
    name: "Shannon Akkermans",
    initials: "SA",
    rating: 5,
    date: "10 months ago",
    text: "My 14 year old daughter had her nails done for the first time. She is thrilled with them. Carolyn was very thorough and professional.",
    response:
      "Thankyou so much Shannon, I was so privileged to be able to do them for her, and really glad that she's so happy with them. It was so lovely to meet you both and look forward to seeing you again soon! ☺️",
  },
  {
    name: "Deanna Roberts",
    initials: "DR",
    rating: 5,
    date: "2 years ago",
    text: "Caroline is so accommodating and can't do enough to ensure your total happiness and satisfaction with her service. Caroline takes the time to listen, to oblige and to have you leave knowing you'll return. Highly recommended. Caroline's care and attention to detail sets the bar on quality nail technicians.",
    response:
      "Deanna thank you so much for your lovely review, it was such a pleasure having the privilege of doing your nails for you today! I always strive to ensure that my clients are comfortable whilst in my salon, and that they leave satisfied with the finished results. I would be very happy to help you again, any time.",
  },
  {
    name: "Sheena Nankivell",
    initials: "SN",
    rating: 5,
    date: "3 years ago",
    text: "Visited with Carolyn today from Pink Perfection to have my nails done. Guys and Girls you need to visit this awesome Lady. Attention to to detail...amazing....care factor..off the charts....pricing....!!!!! Well let's just say you are being overcharged!!!!! Don't forget the name....PINK PERFECTION....awesome experience I've already booked in advance with my mum.",
    response:
      "Thank you so much Sheena! It was most certainly my pleasure meeting you and your beautiful Mum today, and having the opportunity to do your nails. I look forward creating some fantastic nails for you both. Thank you so much for your kind review. Carolyn. ☺️",
  },
]

export default function ReviewsPage() {
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
              <Quote className="w-10 h-10 text-pink-500" />
            </div>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6">
              Reviews From Happy Customers
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-4">
              Small businesses thrive on reviews and word-of-mouth recommendations, making your candid feedback invaluable to us. Your input helps us grow and improve, ensuring we continue to meet and exceed your expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              It's truly gratifying to receive reviews from our clients. These testimonials validate our efforts to consistently deliver positive outcomes and exceptional experiences. We welcome feedback of all kinds, as it provides valuable insights for improvement. Your honest reviews and opinions are incredibly valuable to us and help us strive for excellence.
            </p>
            <div className="flex items-center justify-center gap-2 text-pink-600 font-semibold">
              <Star className="w-5 h-5 fill-pink-500 text-pink-500" />
              <span>50+ Five Star Reviews</span>
            </div>
          </motion.div>

          <div className="max-w-5xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-pink-100 bg-gradient-to-br from-pink-50/50 to-rose-50/50">
                <CardContent className="p-8 text-center">
                  <Quote className="w-12 h-12 text-pink-300 mx-auto mb-4" />
                  <p className="text-lg text-muted-foreground leading-relaxed italic">
                    "It's truly gratifying to receive reviews from our clients. These testimonials validate our efforts
                    to consistently deliver positive outcomes and exceptional experiences. We welcome feedback of all
                    kinds, as it provides valuable insights for improvement. Your honest reviews and opinions are
                    incredibly valuable to us and help us strive for excellence."
                  </p>
                  <p className="text-pink-600 font-semibold mt-4">- Carolyn, Owner</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="max-w-5xl mx-auto space-y-6">
            {allReviews.map((review, idx) => (
              <motion.div
                key={`${review.name}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: Math.min(idx * 0.05, 0.3) }}
              >
                <Card className="border-pink-100 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-4">
                      <Avatar className="w-12 h-12 border-2 border-pink-100">
                        <AvatarFallback className="bg-pink-50 text-pink-600 font-semibold">
                          {review.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h4 className="font-semibold text-foreground">{review.name}</h4>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-pink-400 text-pink-400" />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-4 pl-16">{review.text}</p>
                    {review.response && (
                      <div className="pl-16 mt-4 pt-4 border-t border-pink-100">
                        <div className="bg-pink-50/50 rounded-lg p-4">
                          <p className="text-sm font-semibold text-pink-600 mb-2">Response from Carolyn:</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{review.response}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-6">Want to share your experience?</p>
            <Button asChild className="bg-pink-500 hover:bg-pink-600 text-white">
              <a
                href="https://book.heygoldie.com/PINK-PERFECTION-NAILS-BEAUTY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your Appointment
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
