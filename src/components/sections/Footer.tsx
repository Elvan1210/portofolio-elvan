'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { meta } from '@/data/meta'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-ink border-t border-paper/10 py-12 relative text-stone text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-paper/10">
          
          {/* Left Brand */}
          <div className="space-y-2 text-center md:text-left">
            <Link href="#" className="text-xl font-bold text-paper font-display">
              Elvan<span className="text-flame">.</span> Portfolio
            </Link>
            <p className="text-xs text-stone/80 max-w-sm">
              Portofolio Software Engineering Elvan Mariano, Mahasiswa Informatika UNTAR (Magang MBKM 2026).
            </p>
          </div>

          {/* Quick Nav */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-stone">
            <a href="#about" className="hover:text-paper transition-colors">Tentang</a>
            <a href="#skills" className="hover:text-paper transition-colors">Keahlian</a>
            <a href="#projects" className="hover:text-paper transition-colors">Proyek Utama</a>
            <a href="#leadership" className="hover:text-paper transition-colors">Organisasi</a>
            <a href="#contact" className="hover:text-paper transition-colors">Kontak</a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 p-3 rounded-full bg-paper/5 hover:bg-paper/15 text-paper border border-paper/10 transition-all hover:-translate-y-1"
            aria-label="Kembali ke Atas"
          >
            <ArrowUp className="w-4 h-4 text-flame" />
          </button>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone/70">
          <p>© {new Date().getFullYear()} Elvan Mariano. Built with Next.js 15, React, & Tailwind CSS.</p>
          <div className="flex items-center gap-4">
            <a href={meta.github} target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">
              GitHub
            </a>
            <a href={meta.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-paper transition-colors">
              LinkedIn
            </a>
            <a href={`mailto:${meta.email}`} className="hover:text-paper transition-colors">
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
