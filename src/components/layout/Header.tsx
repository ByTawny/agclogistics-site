"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { NAV_LINKS } from "@/lib/constants"
import { Menu, X, Package2 } from "lucide-react"
import { cn } from "@/lib/utils"

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
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#e2e8f0]"
          : "bg-white/80 backdrop-blur-sm"
      )}
    >
      <div className="container-xl">
        <nav className="flex items-center justify-between h-16" aria-label="Navigation principale">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-[#0f172a] hover:text-[#0b5fff] transition-colors"
            aria-label="AGC Logistics - Accueil"
          >
            <div className="w-8 h-8 bg-[#0b5fff] rounded-lg flex items-center justify-center">
              <Package2 className="w-5 h-5 text-white" />
            </div>
            <span>
              AGC <span className="text-[#0b5fff]">Logistics</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-6" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-[#475569] hover:text-[#0b5fff] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">Nous contacter</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/contact?type=pharmacie">Devis pharmacie</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-[#475569] hover:bg-[#f8fafc] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-[#e2e8f0] py-4 bg-white">
            <ul className="flex flex-col gap-1" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-2.5 text-sm font-medium text-[#475569] hover:text-[#0b5fff] hover:bg-[#f8fafc] rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-2 px-3">
              <Button variant="outline" asChild>
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Nous contacter
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact?type=pharmacie" onClick={() => setIsOpen(false)}>
                  Devis pharmacie
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
