"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const NAV_ITEMS = [
  { label: "Services", href: "/services" },
  { label: "Fonctionnement", href: "/comment-ca-marche" },
  { label: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white shadow-sm border-b border-[#E2E8F0]"
          : "bg-white/90 backdrop-blur-md"
      )}
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between h-16" aria-label="Navigation principale">
          {/* Logo */}
          <Link href="/" className="flex items-center" aria-label="AGC Logistics - Accueil">
            <Image
              src="/logo-agc.png"
              alt="AGC Logistics"
              width={140}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8" role="list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm font-medium text-[#374151] hover:text-[#1F6FEB] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center">
            <Link
              href="/contact"
              className="btn-primary text-sm"
            >
              Demander un rendez-vous
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#374151] hover:bg-[#F5F7FA] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#E2E8F0] py-4 bg-white">
            <ul className="flex flex-col gap-1" role="list">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-3 py-3 text-sm font-medium text-[#374151] hover:text-[#1F6FEB] hover:bg-[#F5F7FA] rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 px-3">
              <Link
                href="/contact"
                className="btn-primary w-full justify-center text-sm"
                onClick={() => setIsOpen(false)}
              >
                Demander un rendez-vous
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
