'use client'

import { useState } from 'react'
import { Mail, FileText, Check, Copy, Send, Sparkles, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'
import { meta } from '@/data/meta'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [subject, setSubject] = useState('Penawaran Magang MBKM / Software Engineer')
  const [message, setMessage] = useState('Halo Elvan, kami tertarik dengan portofolio kamu dan ingin mengundang diskusi terkait posisi magang MBKM...')

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(meta.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const mailtoUrl = `mailto:${meta.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

  return (
    <section id="contact" className="py-24 bg-paper/5 border-t border-paper/10 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-flame/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flame/10 text-flame text-xs font-mono font-semibold uppercase tracking-widest border border-flame/20">
            <Mail className="w-3.5 h-3.5" /> Hubungi & Rekrut Elvan
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-paper font-display tracking-tight">
            Mari Berdiskusi & Bekerja Sama!
          </h2>
          <p className="text-stone text-base sm:text-lg">
            Saya siap mengikuti proses seleksi magang MBKM 2026 atau diskusi peluang posisi Software Engineer / Full-Stack / Front-End Developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info & Quick Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Copy Card */}
            <div className="rounded-2xl bg-ink/90 border border-paper/15 p-6 space-y-4 shadow-xl">
              <div className="text-xs font-mono text-stone/70 uppercase">Email Langsung</div>
              <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-paper/5 border border-paper/10">
                <span className="font-mono text-sm sm:text-base font-semibold text-paper truncate">
                  {meta.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-flame text-ink font-bold text-xs hover:bg-flame-hover transition-colors shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Salin</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={meta.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-ink/90 border border-paper/15 p-5 flex items-center gap-3.5 hover:border-flame/40 transition-all hover:-translate-y-0.5 group shadow-md"
              >
                <div className="p-3 rounded-xl bg-paper/5 text-paper group-hover:text-flame transition-colors">
                  <LinkedinIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-stone font-mono">LinkedIn</div>
                  <div className="text-sm font-bold text-paper">Elvan Mariano</div>
                </div>
              </a>

              <a
                href={meta.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-ink/90 border border-paper/15 p-5 flex items-center gap-3.5 hover:border-flame/40 transition-all hover:-translate-y-0.5 group shadow-md"
              >
                <div className="p-3 rounded-xl bg-paper/5 text-paper group-hover:text-flame transition-colors">
                  <GithubIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-stone font-mono">GitHub</div>
                  <div className="text-sm font-bold text-paper">@Elvan1210</div>
                </div>
              </a>
            </div>

            {/* Location & Status Info */}
            <div className="rounded-2xl bg-ink/90 border border-paper/15 p-6 space-y-3">
              <div className="flex items-center gap-2 text-sm text-stone">
                <MapPin className="w-4 h-4 text-flame" />
                <span><strong className="text-paper">Lokasi:</strong> Jakarta, Indonesia (UNTAR Campus)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-stone">
                <Sparkles className="w-4 h-4 text-flame" />
                <span><strong className="text-paper">Ketersediaan:</strong> Full-time / Hybrid Internship (MBKM 2026)</span>
              </div>
            </div>

            {/* CV Download banner */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={meta.cvCreativePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-gradient-to-br from-flame to-flame-hover text-ink font-bold transition-all shadow-xl shadow-flame/20 hover:-translate-y-0.5 group text-center"
              >
                <Sparkles className="w-6 h-6 mb-2 group-hover:scale-110 transition-transform" />
                <div className="text-base font-extrabold">Creative CV</div>
                <div className="text-xs font-normal opacity-90 mt-1">Desain Menarik (PDF)</div>
              </a>

              <a
                href={meta.cvPath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-5 rounded-2xl bg-ink/90 border border-paper/15 text-paper font-bold transition-all hover:border-flame/40 hover:-translate-y-0.5 group text-center shadow-md"
              >
                <FileText className="w-6 h-6 mb-2 text-flame group-hover:scale-110 transition-transform" />
                <div className="text-base font-extrabold">ATS-Friendly CV</div>
                <div className="text-xs font-normal text-stone mt-1">Format Standar (PDF)</div>
              </a>
            </div>

          </div>

          {/* Right Column: Quick Mailto Generator Box */}
          <div className="lg:col-span-7 rounded-2xl bg-ink/90 border border-paper/15 p-6 sm:p-8 space-y-6 shadow-2xl">
            <div>
              <h3 className="text-xl font-bold text-paper font-display flex items-center gap-2">
                <Send className="w-5 h-5 text-flame" />
                Kirim Pesan Email Instan
              </h3>
              <p className="text-xs text-stone mt-1">
                Formulir ini akan membuka aplikasi email (Gmail / Outlook / Apple Mail) secara otomatis dengan draf pesan siap kirim.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-stone mb-1.5 uppercase">Subjek Email</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-paper/5 border border-paper/10 text-paper text-sm focus:outline-none focus:border-flame transition-colors font-sans"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-stone mb-1.5 uppercase">Isi Pesan</label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-paper/5 border border-paper/10 text-paper text-sm focus:outline-none focus:border-flame transition-colors font-sans leading-relaxed resize-none"
                />
              </div>

              <a
                href={mailtoUrl}
                className="w-full flex items-center justify-center gap-2 bg-flame hover:bg-flame-hover text-ink font-bold py-3.5 rounded-xl transition-all shadow-md hover:shadow-flame/30"
              >
                <Send className="w-4 h-4" />
                <span>Buka Aplikasi Email & Kirim</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
