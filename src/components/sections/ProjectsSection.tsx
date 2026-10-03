'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FolderCode, ArrowUpRight, Sparkles, ExternalLink, Star, CheckCircle } from 'lucide-react'
import { projects } from '@/data/projects'
import { TabGallery, StripGallery, BrowserGallery } from '../ui/Gallery'

export default function ProjectsSection() {
  const [filter, setFilter] = useState<'all' | 'flagship' | 'mobile' | 'web'>('all')

  const filteredProjects = projects.filter((p) => {
    if (filter === 'flagship') return p.slug === 'mypskd' || p.slug === 'untarest'
    if (filter === 'mobile') return p.stack.includes('Flutter') || p.thumbnailType === 'phone'
    if (filter === 'web') return p.stack.includes('Next.js') || p.stack.includes('Laravel')
    return true
  })

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header & Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-paper/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flame/10 text-flame text-xs font-mono font-semibold uppercase tracking-widest border border-flame/20">
              <FolderCode className="w-3.5 h-3.5" /> Showcased Works
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-paper font-display tracking-tight">
              Bukti Nyata Karya & Proyek Utama
            </h2>
            <p className="text-stone text-base sm:text-lg">
              Setiap proyek dibangun untuk menyelesaikan permasalahan dunia nyata, dilengkapi screenshot aplikasi dan penjelasan teknis lengkap.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-paper/5 p-1.5 rounded-2xl border border-paper/10 self-start md:self-auto">
            {(
              [
                { id: 'all', label: 'Semua Proyek' },
                { id: 'flagship', label: '⭐ Featured / Utama' },
                { id: 'mobile', label: '📱 Mobile Apps' },
                { id: 'web', label: '🌐 Web Apps' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  filter === tab.id
                    ? 'bg-flame text-ink font-bold shadow-md'
                    : 'text-stone hover:text-paper hover:bg-paper/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-16">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className={`rounded-3xl bg-ink/90 border border-paper/15 p-6 sm:p-8 lg:p-10 shadow-2xl transition-all duration-300 hover:border-flame/40 relative overflow-hidden group grid grid-cols-1 ${
                project.slug === 'mypskd' ? 'ring-1 ring-flame/30' : ''
              }`}
            >
              {/* Featured Ribbon */}
              {project.slug === 'mypskd' && (
                <div className="absolute top-0 right-0">
                  <div className="bg-flame text-ink font-mono text-xs font-bold px-4 py-1 rounded-bl-xl shadow-md flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-ink" /> FLAGSHIP PROJECT
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                
                {/* Left side: Metadata & Text Details */}
                <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    
                    {/* Role & Year Badges */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                      <span className="px-2.5 py-1 rounded-md bg-paper/10 text-paper font-semibold">
                        {project.period}
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-flame/10 text-flame font-semibold border border-flame/20">
                        {project.role}
                      </span>
                    </div>

                    {/* Title & Tagline */}
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-paper font-display group-hover:text-flame transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-stone font-medium text-sm sm:text-base mt-1">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Summary Description */}
                    <p className="text-stone text-sm leading-relaxed">
                      {project.summary}
                    </p>

                    {/* Key Features Bullet List */}
                    <div className="space-y-2 pt-2">
                      <div className="text-xs font-mono text-stone/70 uppercase tracking-wider">Fitur Kunci:</div>
                      <ul className="space-y-1.5">
                        {project.features.slice(0, 4).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-stone">
                            <CheckCircle className="w-3.5 h-3.5 text-flame shrink-0 mt-0.5" />
                            <span><strong className="text-paper">{feat.title}:</strong> {feat.description}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((item) => (
                          <span
                            key={item}
                            className="px-2.5 py-1 rounded-md bg-paper/5 border border-paper/10 text-stone text-xs font-mono font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Actions & Links */}
                  <div className="pt-6 border-t border-paper/10 flex flex-wrap items-center gap-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="flex items-center gap-2 bg-flame hover:bg-flame-hover text-ink font-bold px-5 py-2.5 rounded-xl text-sm transition-all shadow-md hover:shadow-flame/30"
                    >
                      <span>Studi Kasus Lengkap</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-paper/10 hover:bg-paper/20 text-paper font-medium px-4 py-2.5 rounded-xl text-sm transition-colors border border-paper/10"
                      >
                        <ExternalLink className="w-4 h-4 text-flame" />
                        <span>Live Web / PWA</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-paper/5 hover:bg-paper/10 text-stone hover:text-paper font-medium px-3.5 py-2.5 rounded-xl text-sm transition-colors"
                      >
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>

                </div>

                {/* Right side: Interactive Screenshot Gallery */}
                <div className="lg:col-span-7">
                  <div className="rounded-2xl bg-black/40 p-4 border border-paper/10 space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-stone/60 pb-2 border-b border-paper/5 px-1">
                      <span>Pratinjau Screenshot (Klik untuk Perbesar)</span>
                      <span>{project.gallery.type.toUpperCase()} GALLERY</span>
                    </div>

                    {/* Gallery rendering depending on gallery type */}
                    {project.gallery.type === 'tabs' && project.gallery.tabs && (
                      <TabGallery tabs={project.gallery.tabs} />
                    )}

                    {project.gallery.type === 'strip' && project.gallery.images && (
                      <StripGallery images={project.gallery.images} />
                    )}

                    {project.gallery.type === 'browser' && project.gallery.images && (
                      <BrowserGallery images={project.gallery.images} />
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
