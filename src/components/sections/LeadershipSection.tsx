import { Users, Award, Briefcase, Calendar, CheckCircle2 } from 'lucide-react'

const leadershipRoles = [
  {
    role: 'Anggota Divisi Acara — Event TOEFL',
    org: 'TEC UNTAR',
    period: 'Kuliah',
    tag: 'Event & Acara',
    description:
      'Berperan aktif dalam merancang dan menyelenggarakan acara tes TOEFL yang diadakan oleh TEC UNTAR untuk mahasiswa.',
    achievements: [
      'Menyusun rundown dan memastikan kelancaran alur acara',
      'Mengkoordinasikan kebutuhan peserta dan panitia',
    ],
  },
  {
    role: 'Peserta Kompetisi Hackathon',
    org: 'Berbagai Kompetisi (Internal & Eksternal)',
    period: 'Kuliah',
    tag: 'Kompetisi IT',
    description:
      'Berpartisipasi aktif dalam kompetisi Hackathon yang diselenggarakan oleh UNTAR maupun institusi eksternal.',
    achievements: [
      'Berkolaborasi dalam tim untuk merancang solusi inovatif dalam waktu singkat',
      'Mengembangkan prototipe aplikasi di bawah tekanan waktu',
    ],
  },
  {
    role: 'Sekretaris Ketua OSIS',
    org: 'SMA Providentia',
    period: '2020 - 2023',
    tag: 'Administrasi & Kepemimpinan',
    description:
      'Membantu dan mengambil andil penuh dalam pencatatan, administrasi, dan koordinasi internal OSIS di sekolah.',
    achievements: [
      'Mencatat seluruh agenda dan rapat penting OSIS',
      'Mengelola dokumen dan korespondensi organisasi',
    ],
  },
]

export default function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-paper/5 border-y border-paper/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flame/10 text-flame text-xs font-mono font-semibold uppercase tracking-widest border border-flame/20">
            <Users className="w-3.5 h-3.5" /> Leadership & Organization
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-paper font-display tracking-tight">
            Pengalaman Organisasi & Kepemimpinan
          </h2>
          <p className="text-stone text-base sm:text-lg">
            Teruji memimpin tim, mengelola acara skala besar, dan berkomunikasi secara efektif dalam organisasi kampus.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipRoles.map((item) => (
            <div
              key={item.role}
              className="rounded-2xl bg-ink/90 border border-paper/10 p-6 space-y-6 flex flex-col justify-between hover:border-flame/40 transition-all duration-300 shadow-lg group"
            >
              <div className="space-y-4">
                
                {/* Header Tag & Period */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-flame/10 text-flame font-semibold border border-flame/20">
                    {item.tag}
                  </span>
                  <span className="text-stone flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-stone/60" />
                    {item.period}
                  </span>
                </div>

                {/* Role Title & Org */}
                <div>
                  <h3 className="text-xl font-bold text-paper font-display group-hover:text-flame transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-sm font-semibold text-stone mt-1">{item.org}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-stone leading-relaxed">{item.description}</p>

                {/* Achievements List */}
                <div className="space-y-2 pt-2 border-t border-paper/5">
                  <div className="text-[11px] font-mono text-stone/70 uppercase">Pencapaian Kunci:</div>
                  <ul className="space-y-1.5">
                    {item.achievements.map((ach, aIdx) => (
                      <li key={aIdx} className="flex items-start gap-2 text-xs text-stone">
                        <CheckCircle2 className="w-3.5 h-3.5 text-flame shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              <div className="pt-4 border-t border-paper/5 text-[11px] text-stone/60 font-mono">
                Organisasi Resmi UNTAR
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
