"use client"
import { motion } from "framer-motion"
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: "Nail Services", href: "/#services" },
      { name: "Massage Therapy", href: "/#services" },
      { name: "Spa Treatments", href: "/#services" },
      { name: "Waxing", href: "/#services" },
      { name: "Lash Services", href: "/#services" },
    ],
    Information: [
      { name: "About Us", href: "/about" },
      { name: "Reviews", href: "/reviews" },
      { name: "Gift Cards", href: "/gift-card" },
      { name: "Policies", href: "/about" },
      { name: "Contact", href: "/contact" },
    ],
  }

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Facebook", icon: Facebook, href: "#" },
  ]

  return (
    <footer className="bg-pink-50/50 border-t border-pink-100">
      <div className="container mx-auto px-4 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-pink-600 mb-4">Pink Perfection</h3>
                <p className="text-muted-foreground mb-7 leading-relaxed text-sm font-serif">
                  Your go-to destination for a truly indulgent and relaxing beauty experience in Yarrabilba, Queensland.
                </p>

                <div className="space-y-3.5 mb-7">
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                    <span className="font-serif">64 Grampians Circuit, Yarrabilba QLD 4207</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Phone className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                    <a href="tel:+61400113407" className="hover:text-pink-500 transition-colors font-serif">
                      0400 113 407
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Mail className="w-4 h-4 text-pink-500 mt-0.5 flex-shrink-0" />
                    <a href="mailto:carolynbrow318@yahoo.com.au" className="hover:text-pink-500 transition-colors break-all font-serif">
                      carolynbrow318@yahoo.com.au
                    </a>
                  </div>
                </div>

                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-white border border-pink-200 rounded-full flex items-center justify-center text-pink-500 hover:text-pink-600 hover:border-pink-300 transition-all duration-200 shadow-sm"
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

            {/* Links Sections */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-serif font-semibold text-foreground mb-5 text-base">Services</h4>
                  <ul className="space-y-3.5">
                    {footerLinks.Services.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-pink-500 transition-colors duration-200 font-serif"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-serif font-semibold text-foreground mb-5 text-base">Information</h4>
                  <ul className="space-y-3.5">
                    {footerLinks.Information.map((link) => (
                      <li key={link.name}>
                        <a
                          href={link.href}
                          className="text-sm text-muted-foreground hover:text-pink-500 transition-colors duration-200 font-serif"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-pink-100 flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground text-center sm:text-left">
            &copy; {currentYear} Pink Perfection Nails & Beauty. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="/about" className="hover:text-pink-500 transition-colors">
              Privacy Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
