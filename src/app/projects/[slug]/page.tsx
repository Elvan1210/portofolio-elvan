import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  ArrowLeft,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  FolderCode,
  ShieldCheck,
  Code2,
} from 'lucide-react'
import { GithubIcon } from '@/components/ui/Icons'
import { projects, getProjectBySlug } from '@/data/projects'
import { TabGallery, StripGallery, BrowserGallery } from '@/components/ui/Gallery'
import Navbar from '@/components/sections/Navbar'
import Footer from '@/components/sections/Footer'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const project = getProjectBySlug(resolvedParams.slug)
  if (!project) return { title: 'Proyek Tidak Ditemukan' }

  return {
    title: `${project.title} — Studi Kasus Portofolio Elvan Mariano`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Elvan Mariano Portfolio`,
      description: project.summary,
    },
  }
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const project = getProjectBySlug(resolvedParams.slug)

  if (!project) {
    notFound()
  }

  // Find next and prev projects for navigation
  const currentIndex = projects.findIndex((p) => p.slug === project.slug)
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length]
  const nextProject = projects[(currentIndex + 1) % projects.length]

  return (
    <div className="min-h-screen bg-ink text-paper selection:bg-flame selection:text-ink font-sans">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Back link & Breadcrumbs */}
          <div className="flex items-center gap-2 text-xs font-mono text-stone">
            <Link
              href="/#projects"
              className="flex items-center gap-1 text-flame hover:underline font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Daftar Proyek</span>
            </Link>
            <span>/</span>
            <span className="text-paper">{project.title}</span>
          </div>

          {/* Hero Header */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
              <span className="px-3 py-1 rounded-md bg-flame/10 text-flame font-semibold border border-flame/20">
                {project.shortTitle}
              </span>
              <span className="px-3 py-1 rounded-md bg-paper/10 text-paper font-semibold">
                {project.period}
              </span>
              <span className="px-3 py-1 rounded-md bg-paper/5 text-stone border border-paper/10">
                Role: {project.role}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-paper font-display tracking-tight leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl text-stone font-medium max-w-3xl leading-relaxed">
              {project.tagline}
            </p>

            {/* Summary Banner */}
            <div className="p-4 rounded-2xl bg-flame/10 border border-flame/20 text-sm text-paper flex items-start gap-3 max-w-3xl">
              <Sparkles className="w-5 h-5 text-flame shrink-0 mt-0.5" />
              <p className="leading-relaxed">{project.summary}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-flame hover:bg-flame-hover text-ink font-bold px-6 py-3 rounded-xl text-sm transition-all shadow-lg shadow-flame/25 hover:-translate-y-0.5"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Kunjungi Live Web / App</span>
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-paper/10 hover:bg-paper/20 text-paper font-semibold px-6 py-3 rounded-xl text-sm transition-all border border-paper/10 hover:-translate-y-0.5"
                >
                  <GithubIcon className="w-4 h-4 text-flame" />
                  <span>Lihat Repository GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* Screenshot Showcase Section if available */}
          {project.gallery.type !== 'none' && (
            <div className="rounded-3xl bg-black/50 border border-paper/15 p-6 sm:p-8 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between text-xs font-mono text-stone pb-3 border-b border-paper/10">
                <span className="flex items-center gap-2">
                  <FolderCode className="w-4 h-4 text-flame" />
                  GALERI SCREENSHOT APLIKASI
                </span>
                <span>Klik gambar untuk tampilan penuh (Fullscreen Lightbox)</span>
              </div>

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
          )}

          {/* Project Overview & Tech Stack Info */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-8">
            
            {/* Left Main Content: Problem, Solution, MyRole, Features, Challenges */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Problem Section */}
              {project.problem && (
                <div className="rounded-2xl bg-paper/5 border border-paper/10 p-6 sm:p-8 space-y-4">
                  <h2 className="text-2xl font-bold text-paper font-display flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-flame" />
                    Tantangan & Masalah
                  </h2>
                  <p className="text-stone leading-relaxed text-sm sm:text-base whitespace-pre-line">
                    {project.problem}
                  </p>
                </div>
              )}

              {/* Solution Section */}
              {project.solution && (
                <div className="rounded-2xl bg-paper/5 border border-paper/10 p-6 sm:p-8 space-y-4">
                  <h2 className="text-2xl font-bold text-paper font-display flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-500" />
                    Solusi Teknis
                  </h2>
                  <p className="text-stone leading-relaxed text-sm sm:text-base whitespace-pre-line">
                    {project.solution}
                  </p>
                </div>
              )}

              {/* My Role Breakdown */}
              <div className="rounded-2xl bg-paper/5 border border-paper/10 p-6 sm:p-8 space-y-4">
                <h2 className="text-2xl font-bold text-paper font-display">
                  Kontribusi & Tanggung Jawab Elvan
                </h2>
                <ul className="space-y-2.5">
                  {project.myRole.map((roleItem, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-stone">
                      <CheckCircle2 className="w-4 h-4 text-flame shrink-0 mt-0.5" />
                      <span>{roleItem}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features List */}
              <div className="rounded-2xl bg-paper/5 border border-paper/10 p-6 sm:p-8 space-y-6">
                <h2 className="text-2xl font-bold text-paper font-display">
                  Fitur-Fitur Utama Aplikasi
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-ink/80 border border-paper/10 space-y-1"
                    >
                      <h4 className="text-sm font-bold text-paper flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-flame" />
                        {feat.title}
                      </h4>
                      <p className="text-xs text-stone leading-relaxed">{feat.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Challenges & Solutions */}
              {project.challenges.length > 0 && (
                <div className="rounded-2xl bg-paper/5 border border-paper/10 p-6 sm:p-8 space-y-6">
                  <h2 className="text-2xl font-bold text-paper font-display flex items-center gap-2">
                    <ShieldCheck className="w-6 h-6 text-flame" />
                    Tantangan Teknis Kunci & Solusi
                  </h2>
                  <div className="space-y-4">
                    {project.challenges.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-ink/80 border border-paper/10 space-y-2">
                        <div className="text-sm font-bold text-flame">
                          🔴 Tantangan: {item.challenge}
                        </div>
                        <div className="text-xs sm:text-sm text-stone leading-relaxed">
                          🟢 Solusi: {item.solution}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right Sidebar: Tech Stack & Specs */}
            <div className="lg:col-span-4 space-y-6 sticky top-28">
              
              {/* Tech Stack List */}
              <div className="rounded-2xl bg-paper/5 border border-paper/10 p-6 space-y-4">
                <h3 className="text-lg font-bold text-paper font-display flex items-center gap-2 border-b border-paper/10 pb-3">
                  <Code2 className="w-5 h-5 text-flame" />
                  Teknologi yang Digunakan
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-lg bg-ink border border-paper/10 text-stone text-xs font-mono font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Specs */}
              <div className="rounded-2xl bg-paper/5 border border-paper/10 p-6 space-y-4 text-xs font-mono">
                <h3 className="text-sm font-bold text-paper font-sans uppercase tracking-wider border-b border-paper/10 pb-3">
                  Detail Proyek
                </h3>
                <div className="space-y-3 text-stone">
                  <div className="flex justify-between">
                    <span>Tipe Aplikasi:</span>
                    <span className="text-paper capitalize">{project.thumbnailType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tahun Pembuatan:</span>
                    <span className="text-paper">{project.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Peran:</span>
                    <span className="text-flame font-semibold">{project.role}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tim:</span>
                    <span className="text-paper">{project.team}</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Bottom Next/Prev Project Navigation */}
          <div className="pt-12 border-t border-paper/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/projects/${prevProject.slug}`}
              className="p-6 rounded-2xl bg-paper/5 border border-paper/10 hover:border-flame/40 transition-all flex items-center justify-between group"
            >
              <div>
                <div className="text-xs font-mono text-stone">← Proyek Sebelumnya</div>
                <div className="text-lg font-bold text-paper font-display group-hover:text-flame transition-colors mt-1">
                  {prevProject.title}
                </div>
              </div>
            </Link>

            <Link
              href={`/projects/${nextProject.slug}`}
              className="p-6 rounded-2xl bg-paper/5 border border-paper/10 hover:border-flame/40 transition-all flex items-center justify-between text-right group"
            >
              <div className="w-full">
                <div className="text-xs font-mono text-stone">Proyek Selanjutnya →</div>
                <div className="text-lg font-bold text-paper font-display group-hover:text-flame transition-colors mt-1">
                  {nextProject.title}
                </div>
              </div>
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}
