import ScrollProgress from '@/components/ui/ScrollProgress'
import CursorGlow from '@/components/ui/CursorGlow'
import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import StatsSection from '@/components/sections/StatsSection'
import AboutSection from '@/components/sections/AboutSection'
import SkillsSection from '@/components/sections/SkillsSection'
import ProjectsSection from '@/components/sections/ProjectsSection'
import LeadershipSection from '@/components/sections/LeadershipSection'
import GithubSection from '@/components/sections/GithubSection'
import ContactSection from '@/components/sections/ContactSection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ink text-paper selection:bg-flame selection:text-ink font-sans">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <StatsSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <LeadershipSection />
        <GithubSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
