import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram, MessageCircle, Facebook, Mail, Phone, MapPin, Clock } from "lucide-react"

interface FooterProps {
  dictionary: any
}

export default function Footer({ dictionary }: FooterProps) {
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/your-agency",
      icon: Linkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      href: "https://instagram.com/your_agency",
      icon: Instagram,
      color: "hover:text-pink-400"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/your-phone-number",
      icon: MessageCircle,
      color: "hover:text-green-400"
    },
    {
      name: "Facebook",
      href: "https://facebook.com/your.agency",
      icon: Facebook,
      color: "hover:text-blue-500"
    }
  ]

  const services = [
    "Digital Marketing",
    "Social Media Management",
    "Web Development",
    "Branding & Design",
    "SEO Optimization",
    "Content Creation"
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Image src="/logo-white.png" alt="Агентство Лого" width={130} height={44} />
            </div>
            <p className="text-sm leading-relaxed">
              Professional digital marketing agency specializing in comprehensive online solutions for businesses of all sizes.
            </p>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 text-blue-400" />
              <span>+994 50 123 45 67</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Mail className="h-4 w-4 text-blue-400" />
              <span>info@youragency.az</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="#services" 
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Details */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Bakı şəhəri, Nərimanov rayonu</p>
                  <p>Atatürk prospekti 123</p>
                  <p>AZ1000, Azərbaycan</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Bazar ertəsi - Cümə: 09:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Social Media & Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg mb-4">Connect With Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-gray-800 rounded-lg transition-all duration-200 hover:bg-gray-700 hover:scale-105 ${social.color}`}
                  title={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
         
          </div>
        </div>

        {/* Navigation Links */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link href="#services" className="text-sm hover:text-white transition-colors duration-200">
              {dictionary.header.services}
            </Link>
            <Link href="#portfolio" className="text-sm hover:text-white transition-colors duration-200">
              {dictionary.header.portfolio}
            </Link>
            <Link href="#blog" className="text-sm hover:text-white transition-colors duration-200">
              {dictionary.header.blog}
            </Link>
            <Link href="#contact" className="text-sm hover:text-white transition-colors duration-200">
              {dictionary.header.contact}
            </Link>
            <Link href="#about" className="text-sm hover:text-white transition-colors duration-200">
              About Us
            </Link>
            <Link href="#team" className="text-sm hover:text-white transition-colors duration-200">
              Our Team
            </Link>
          </nav>
        </div>

        {/* Tags */}
        <div className="text-center text-xs opacity-60 mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-gray-800 rounded-full">#digitalmarketing</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">#smm</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">#вебсайт</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">#брендинг</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">#pr</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">#дизайн</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">#seo</span>
            <span className="px-3 py-1 bg-gray-800 rounded-full">#content</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Marketing Agency. {dictionary.footer.copyright}
          </p>
          <p className="mt-2 text-xs opacity-60">
            All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}
