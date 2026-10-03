import { skillCategories } from '@/data/skills'
import { Cpu, Code, Smartphone, Database, Wrench } from 'lucide-react'

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-paper/5 border-y border-paper/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flame/10 text-flame text-xs font-mono font-semibold uppercase tracking-widest border border-flame/20">
            <Cpu className="w-3.5 h-3.5" /> Tech Stack & Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-paper font-display tracking-tight">
            Keahlian Teknis & Ekosistem Pengembangan
          </h2>
          <p className="text-stone text-base sm:text-lg">
            Daftar teknologi dan alat yang aktif saya gunakan dalam membangun aplikasi modern dari nol hingga siap pakai.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.id}
              className="rounded-2xl bg-ink/90 border border-paper/10 p-6 space-y-4 flex flex-col justify-between hover:border-flame/40 transition-all duration-300 shadow-md group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between pb-4 border-b border-paper/10">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{cat.emoji}</span>
                    <h3 className="text-lg font-bold text-paper font-display group-hover:text-flame transition-colors">
                      {cat.label}
                    </h3>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-paper/10 text-stone">
                    {cat.skills.length} skills
                  </span>
                </div>

                {/* Skill Badges List */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-paper/5 border border-paper/10 text-stone hover:text-paper hover:bg-paper/15 text-xs sm:text-sm font-medium transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-flame opacity-75" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent */}
              <div className="pt-4 border-t border-paper/5 text-[11px] text-stone/60 font-mono">
                Penerapan langsung di proyek real
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
