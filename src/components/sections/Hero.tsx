'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, FileText, ArrowRight, Sparkles, MapPin, GraduationCap, Code2, CheckCircle2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { meta } from '@/data/meta'
import TechMarquee from '../ui/TechMarquee'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Aurora / Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-flame/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Value Prop */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-paper/5 border border-paper/10 text-stone text-xs sm:text-sm font-medium shadow-sm backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-paper font-semibold">{meta.badge}</span>
              <span className="text-stone/40">•</span>
              <span className="text-stone font-mono">Semester 5 UNTAR</span>
            </div>

            {/* Main Title Header */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-paper leading-[1.1]">
                Halo! Saya <span className="gradient-text font-black">{meta.name}</span> 👋
              </h1>
              <p className="text-xl sm:text-2xl font-medium text-stone leading-snug">
                {meta.tagline}
              </p>
            </div>

            {/* Paragraph Bio */}
            <p className="text-base sm:text-lg text-stone/90 max-w-2xl leading-relaxed">
              {meta.description}
            </p>

            {/* Quick Highlights / Bullet Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2.5 text-sm text-stone">
                <CheckCircle2 className="w-4 h-4 text-flame shrink-0 mt-0.5" />
                <span><strong className="text-paper">Full-Stack Capability:</strong> Web & Mobile Apps</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-stone">
                <CheckCircle2 className="w-4 h-4 text-flame shrink-0 mt-0.5" />
                <span><strong className="text-paper">Production Proven:</strong> Dipakai 400+ pengguna aktif</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-stone">
                <CheckCircle2 className="w-4 h-4 text-flame shrink-0 mt-0.5" />
                <span><strong className="text-paper">Experienced Leader:</strong> Team Leader & Ketua Dept</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-stone">
                <CheckCircle2 className="w-4 h-4 text-flame shrink-0 mt-0.5" />
                <span><strong className="text-paper">Fast Learner:</strong> Siap kontribusi langsung magang</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group flex items-center gap-2 bg-flame hover:bg-flame-hover text-ink font-bold px-6 py-3.5 rounded-full text-base transition-all shadow-lg shadow-flame/25 hover:shadow-flame/40 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Lihat Proyek Saya</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={meta.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-paper/10 hover:bg-paper/15 border border-paper/15 text-paper font-semibold px-6 py-3.5 rounded-full text-base transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5 text-flame" />
                <span>Download CV (PDF)</span>
              </a>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-4 pt-2 text-stone text-sm">
              <span className="font-mono text-xs uppercase tracking-wider text-stone/70">Hubungi:</span>
              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-paper/5 border border-paper/10 text-paper hover:text-flame hover:bg-paper/10 transition-all hover:scale-110"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-paper/5 border border-paper/10 text-paper hover:text-flame hover:bg-paper/10 transition-all hover:scale-110"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${meta.email}`}
                aria-label="Email Elvan"
                className="p-2.5 rounded-xl bg-paper/5 border border-paper/10 text-paper hover:text-flame hover:bg-paper/10 transition-all hover:scale-110"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Right Column: Hero Profile Card / Code Snippet Decorative */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-flame/30 via-orange-500/20 to-flame/30 blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-tilt"></div>
              
              <div className="relative rounded-2xl bg-ink/90 border border-paper/15 p-6 shadow-2xl space-y-6 backdrop-blur-xl">
                
                {/* Header Profile Box */}
                <div className="flex items-center gap-4 pb-4 border-b border-paper/10">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-flame shadow-md shrink-0 bg-stone/20">
                    <Image
                      src={meta.profilePhoto}
                      alt={meta.name}
                      fill
                      sizes="64px"
                      priority
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-paper">{meta.name}</h3>
                    <p className="text-xs text-flame font-mono font-medium">{meta.title}</p>
                    <div className="flex items-center gap-1.5 text-xs text-stone mt-1">
                      <GraduationCap className="w-3.5 h-3.5 text-flame" />
                      <span>{meta.university}</span>
                    </div>
                  </div>
                </div>

                {/* Code window mock */}
                <div className="rounded-xl bg-black/60 p-4 font-mono text-xs text-stone space-y-2 border border-paper/5">
                  <div className="flex items-center justify-between text-stone/40 text-[10px] pb-2 border-b border-white/5 font-sans">
                    <span className="flex items-center gap-1.5"><Code2 className="w-3 h-3 text-flame" /> developer.ts</span>
                    <span>UTF-8</span>
                  </div>
                  <div className="space-y-1 font-mono text-[11px] leading-relaxed text-slate-300">
                    <p><span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> = &#123;</p>
                    <p className="pl-4"><span className="text-sky-300">name</span>: <span className="text-emerald-400">&apos;Elvan Mariano&apos;</span>,</p>
                    <p className="pl-4"><span className="text-sky-300">role</span>: <span className="text-emerald-400">&apos;Software Engineer&apos;</span>,</p>
                    <p className="pl-4"><span className="text-sky-300">gpa</span>: <span className="text-flame font-bold">{meta.gpa}</span>,</p>
                    <p className="pl-4"><span className="text-sky-300">stack</span>: [<span className="text-emerald-400">&apos;Next.js&apos;</span>, <span className="text-emerald-400">&apos;Flutter&apos;</span>, <span className="text-emerald-400">&apos;Firebase&apos;</span>],</p>
                    <p className="pl-4"><span className="text-sky-300">openForRole</span>: <span className="text-purple-400">true</span>,</p>
                    <p>&#125;;</p>
                  </div>
                </div>

                {/* Quick Info Badges */}
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-paper/5 border border-paper/10">
                    <div className="text-xl font-bold text-flame font-display">4+</div>
                    <div className="text-[11px] text-stone">Proyek Real & Selesai</div>
                  </div>
                  <div className="p-3 rounded-xl bg-paper/5 border border-paper/10">
                    <div className="text-xl font-bold text-flame font-display">{meta.gpa}</div>
                    <div className="text-[11px] text-stone">IPK Komulatif (Semester 5)</div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Infinite Tech Marquee ribbon below Hero */}
      <div className="mt-16 pt-8 border-t border-paper/10">
        <p className="text-center text-xs font-mono text-stone/60 uppercase tracking-widest mb-4">
          Teknologi & Stack Utama yang Digunakan
        </p>
        <TechMarquee />
      </div>
    </section>
  )
}
