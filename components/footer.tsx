"use client"
import { motion } from "framer-motion"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ]

  return (
    <footer className="bg-pink-50/50">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Clean Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-pink-600 mb-3">Pink Perfection</h3>
          <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-serif">
            Your go-to destination for a truly indulgent and relaxing beauty experience in Yarrabilba, Queensland.
          </p>

          {/* Contact Details */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 text-pink-500 flex-shrink-0" />
              <span className="font-serif">64 Grampians Circuit, Yarrabilba QLD 4207</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <Phone className="w-4 h-4 text-pink-500 flex-shrink-0" />
              <a href="tel:+61400113407" className="hover:text-pink-500 transition-colors font-serif">
                0400 113 407
              </a>
            </div>
            <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
              <Mail className="w-4 h-4 text-pink-500 flex-shrink-0" />
              <a href="mailto:carolynbrow318@yahoo.com.au" className="hover:text-pink-500 transition-colors break-all font-serif">
                carolynbrow318@yahoo.com.au
              </a>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-3 justify-center">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-white border border-pink-200 rounded-full flex items-center justify-center text-pink-500 hover:text-pink-600 hover:border-pink-300 transition-all duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} />
                <span className="sr-only">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
