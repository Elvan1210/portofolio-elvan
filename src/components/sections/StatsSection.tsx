'use client'

import CountUp from '../ui/CountUp'
import { meta } from '@/data/meta'

export default function StatsSection() {
  return (
    <section className="py-12 bg-paper/5 border-y border-paper/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-paper/10">
          {meta.stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center text-center p-4 ${
                idx !== 0 ? 'pt-6 sm:pt-4' : ''
              }`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-paper font-display tracking-tight flex items-center gap-1">
                <CountUp
                  target={stat.value}
                  decimals={stat.decimal || 0}
                  suffix={stat.suffix}
                  className="text-flame"
                />
              </div>
              <div className="mt-2 text-sm sm:text-base font-semibold text-paper">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
