import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface BrowserFrameProps {
  children: ReactNode
  className?: string
  url?: string
}

export default function BrowserFrame({
  children,
  className,
  url = 'localhost:3000',
}: BrowserFrameProps) {
  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden border border-raised/60',
        'shadow-2xl w-full max-w-3xl mx-auto',
        className
      )}
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}
    >
      {/* Browser Chrome / Title bar */}
      <div className="bg-raised px-4 py-2.5 flex items-center gap-3">
        {/* Traffic lights */}
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        {/* URL bar */}
        <div className="flex-1 bg-canvas/60 rounded-md px-3 py-1 flex items-center gap-2">
          <span className="text-stone/40" style={{ fontSize: '10px' }}>🔒</span>
          <span className="text-stone text-xs truncate font-mono">{url}</span>
        </div>
      </div>
      {/* Content */}
      <div className="relative overflow-hidden bg-canvas">
        {children}
      </div>
    </div>
  )
}
