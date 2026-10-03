import { allTechStack } from '@/data/skills'

const TechItem = ({ name }: { name: string }) => (
  <span className="inline-flex items-center gap-2 px-4 py-1.5 mx-3 whitespace-nowrap text-stone text-sm font-medium">
    <span className="w-1 h-1 rounded-full bg-gold/50 flex-shrink-0" />
    {name}
  </span>
)

export default function TechMarquee() {
  const doubled = [...allTechStack, ...allTechStack]

  return (
    <div
      className="relative overflow-hidden py-3"
      aria-label="Tech stack yang dikuasai"
    >
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10"
        style={{ background: 'linear-gradient(to right, var(--canvas), transparent)' }}
      />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10"
        style={{ background: 'linear-gradient(to left, var(--canvas), transparent)' }}
      />
      <div
        className="flex animate-marquee"
        style={{ width: 'max-content' }}
        aria-hidden="true"
      >
        {doubled.map((name, i) => (
          <TechItem key={`${name}-${i}`} name={name} />
        ))}
      </div>
    </div>
  )
}
