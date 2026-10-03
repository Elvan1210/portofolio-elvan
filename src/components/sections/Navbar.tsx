'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import ThemeToggle from '../ui/ThemeToggle'
import { meta } from '@/data/meta'

const navItems = [
  { label: 'Tentang', href: '#about' },
  { label: 'Keahlian', href: '#skills' },
  { label: 'Proyek Utama', href: '#projects' },
  { label: 'Organisasi', href: '#leadership' },
  { label: 'Kontak', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navItems.map((item) => item.href.substring(1))
      const current = sections.find((section) => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 150 && rect.bottom >= 150
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink/80 dark:bg-ink/90 backdrop-blur-md border-b border-paper/10 py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#"
          className="group flex items-center gap-2 text-paper font-bold text-lg sm:text-xl tracking-tight transition-transform hover:scale-105"
        >
          <span className="w-8 h-8 rounded-lg bg-flame flex items-center justify-center text-ink font-mono font-extrabold text-sm shadow-md group-hover:rotate-6 transition-transform">
            EM
          </span>
          <span className="font-display">
            Elvan<span className="text-flame">.</span>
          </span>
          <span className="hidden sm:inline-block text-xs px-2 py-0.5 rounded-full bg-paper/10 text-paper/70 font-normal">
            MBKM 2026
          </span>
        </Link>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-1 bg-paper/5 backdrop-blur-md p-1.5 rounded-full border border-paper/10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1)
            return (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-flame text-ink font-semibold shadow-sm'
                    : 'text-stone hover:text-paper hover:bg-paper/10'
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={meta.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-flame hover:bg-flame-hover text-ink font-semibold px-4 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-flame/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Lihat CV</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-paper/10 text-paper hover:bg-paper/20 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-ink/95 backdrop-blur-xl border-b border-paper/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-medium text-stone hover:text-paper hover:bg-paper/10 transition-all flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-flame opacity-50">→</span>
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-paper/10 flex flex-col gap-3">
            <a
              href={meta.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-flame hover:bg-flame-hover text-ink font-semibold w-full py-3 rounded-xl transition-all text-center shadow-md"
            >
              <span>Download / Lihat CV lengkap</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
