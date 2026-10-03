import { Star, GitFork, ExternalLink, Code2 } from 'lucide-react'
import { GithubIcon } from '../ui/Icons'
import { meta } from '@/data/meta'

const githubRepos = [
  {
    name: 'portofolio-elvan',
    description: 'Portfolio website interaktif & modern dibangun dengan Next.js 15, React, Tailwind CSS, & TypeScript.',
    language: 'TypeScript',
    stars: 5,
    forks: 1,
    url: 'https://github.com/Elvan1210/portofolio-elvan',
  },
  {
    name: 'MyPSKD-App',
    description: 'Aplikasi Mobile & Web PWA Sekolah PSKD berbasis Flutter & Web untuk 400+ pengguna (Siswa, Guru, Admin).',
    language: 'Dart / Flutter',
    stars: 12,
    forks: 3,
    url: 'https://github.com/Elvan1210',
  },
  {
    name: 'Untarest-Web',
    description: 'Platform discovery media sosial berbasis Next.js & TypeScript yang terinspirasi dari Pinterest.',
    language: 'TypeScript',
    stars: 8,
    forks: 2,
    url: 'https://github.com/Elvan1210',
  },
  {
    name: 'KantinKita-Laravel',
    description: 'Sistem pemesanan & e-commerce makanan kantin berbasis Laravel PHP & MySQL DB.',
    language: 'PHP / Laravel',
    stars: 6,
    forks: 2,
    url: 'https://github.com/Elvan1210',
  },
]

export default function GithubSection() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-paper/10">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flame/10 text-flame text-xs font-mono font-semibold uppercase tracking-widest border border-flame/20">
              <GithubIcon className="w-3.5 h-3.5" /> Open Source & Code Repositories
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-paper font-display tracking-tight">
              Aktivitas Kode di GitHub
            </h2>
            <p className="text-stone text-base">
              Kunjungi profil GitHub <span className="text-paper font-mono font-semibold">@Elvan1210</span> untuk melihat repositori kode sumber dan commit history.
            </p>
          </div>

          <a
            href={meta.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-paper/10 hover:bg-paper/20 text-paper font-semibold px-5 py-2.5 rounded-xl text-sm transition-all border border-paper/15 self-start md:self-auto hover:scale-105"
          >
            <GithubIcon className="w-4 h-4 text-flame" />
            <span>Lihat Profil GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-stone" />
          </a>
        </div>

        {/* Repositories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {githubRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-paper/5 border border-paper/10 p-6 space-y-4 hover:border-flame/40 hover:bg-paper/10 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-paper font-bold font-mono text-base group-hover:text-flame transition-colors">
                    <Code2 className="w-4 h-4 text-flame" />
                    <span>{repo.name}</span>
                  </div>
                  <ExternalLink className="w-4 h-4 text-stone/50 group-hover:text-flame transition-colors" />
                </div>
                <p className="text-xs sm:text-sm text-stone leading-relaxed">
                  {repo.description}
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-stone pt-4 border-t border-paper/5">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-flame" />
                  {repo.language}
                </span>
                <span className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-yellow-400" />
                  {repo.stars}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="w-3.5 h-3.5 text-stone/60" />
                  {repo.forks}
                </span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}
