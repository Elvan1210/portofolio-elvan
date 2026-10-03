import Image from 'next/image'
import { GraduationCap, Award, Rocket, CheckCircle2, UserCheck, BookOpen, Laptop } from 'lucide-react'
import { meta } from '@/data/meta'

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-flame/10 text-flame text-xs font-mono font-semibold uppercase tracking-widest border border-flame/20">
            <UserCheck className="w-3.5 h-3.5" /> Tentang Elvan Mariano
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-paper font-display tracking-tight">
            Mahasiswa Informatika Berdedikasi Tinggi & Siap Magang MBKM
          </h2>
          <p className="text-stone text-base sm:text-lg">
            Menggabungkan pemahaman akademis yang solid (IPK 3.86) dengan eksekusi nyata dalam pengembangan aplikasi web dan mobile.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Main Story */}
          <div className="lg:col-span-7 rounded-2xl bg-paper/5 border border-paper/10 p-6 sm:p-8 space-y-6 flex flex-col justify-between backdrop-blur-sm">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-paper font-display flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-flame" />
                Filosofi & Pendekatan Kerja
              </h3>
              <p className="text-stone leading-relaxed text-sm sm:text-base">
                Bagi saya, pemrograman bukan sekadar menulis sintaks, tetapi <span className="text-paper font-semibold">menyelesaikan masalah nyata</span> yang memberikan manfaat langsung bagi pengguna. 
              </p>
              <p className="text-stone leading-relaxed text-sm sm:text-base">
                Selama perkuliahan, saya aktif menguji teori ke dalam proyek nyata—mulai dari aplikasi manajemen sekolah berstatus PWA (<span className="text-flame">MyPSKD</span>), platform social discovery (<span className="text-flame">Untarest</span>), hingga sistem pemesanan makanan kantin (<span className="text-flame">Kantin Kita</span>).
              </p>
              <p className="text-stone leading-relaxed text-sm sm:text-base">
                Selain kemampuan teknis, saya aktif dalam organisasi dan pengembangan diri, seperti berpartisipasi dalam <span className="text-paper font-semibold">Hackathon</span> (UNTAR & Umum), menjadi panitia inti <span className="text-paper font-semibold">Event TOEFL TEC UNTAR</span>, hingga <span className="text-paper font-semibold">Sekretaris OSIS</span> semasa sekolah. Pengalaman ini mengasah kemampuan komunikasi, problem-solving, dan kerjasama tim saya.
              </p>
            </div>

            {/* Quick Badges */}
            <div className="pt-6 border-t border-paper/10 grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs text-stone">
                <CheckCircle2 className="w-4 h-4 text-flame shrink-0" />
                <span>Clean Code & Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone">
                <CheckCircle2 className="w-4 h-4 text-flame shrink-0" />
                <span>Responsive & Mobile-First</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone">
                <CheckCircle2 className="w-4 h-4 text-flame shrink-0" />
                <span>Git & Collaborative Flow</span>
              </div>
            </div>
          </div>

          {/* Card 2: Education & Academic History */}
          <div className="lg:col-span-5 rounded-2xl bg-paper/5 border border-paper/10 p-6 sm:p-8 space-y-6 flex flex-col justify-between backdrop-blur-sm">
            <div>
              <h3 className="text-xl font-bold text-paper font-display flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6 text-flame" />
                Riwayat Pendidikan
              </h3>

              <div className="space-y-6 relative pl-6 border-l-2 border-paper/15">
                
                {/* University */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-flame border-4 border-ink" />
                  <div className="text-xs font-mono text-flame font-semibold">2023 - Sekarang (Semester 5)</div>
                  <h4 className="text-base font-bold text-paper mt-0.5">S1 Teknik Informatika</h4>
                  <p className="text-sm text-stone">Universitas Tarumanagara (UNTAR), Jakarta</p>
                  <div className="inline-block mt-2 px-2.5 py-1 rounded-md bg-flame/10 text-flame text-xs font-bold font-mono border border-flame/20">
                    IPK: {meta.gpa} / 4.00
                  </div>
                </div>

                {/* High School */}
                <div className="relative">
                  <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-stone/40 border-4 border-ink" />
                  <div className="text-xs font-mono text-stone">2020 - 2023</div>
                  <h4 className="text-base font-semibold text-paper mt-0.5">SMA Providentia</h4>
                  <p className="text-sm text-stone">Jurusan IPA</p>
                </div>

              </div>
            </div>

            {/* Target MBKM Role Card */}
            <div className="p-4 rounded-xl bg-flame/10 border border-flame/20 space-y-1">
              <div className="text-xs font-mono font-bold text-flame uppercase tracking-wider flex items-center gap-1.5">
                <Rocket className="w-4 h-4" /> Target Magang MBKM 2026
              </div>
              <p className="text-xs text-stone leading-relaxed">
                Terbuka untuk posisi <strong className="text-paper">Software Engineer Intern</strong>, <strong className="text-paper">Front-End Developer Intern</strong>, atau <strong className="text-paper">Full-Stack Developer Intern</strong>. Siap berkontribusi secara Full-time / Hybrid.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
