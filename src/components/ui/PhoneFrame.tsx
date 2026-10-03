import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface PhoneFrameProps {
  children: ReactNode
  className?: string
  size?: 'sm' | 'md'
}

export default function PhoneFrame({ children, className, size = 'md' }: PhoneFrameProps) {
  const w = size === 'sm' ? 'w-[180px]' : 'w-[200px]'
  const h = size === 'sm' ? 'h-[360px]' : 'h-[400px]'

  return (
    <div
      className={cn(
        'relative rounded-[2.5rem] overflow-hidden flex-shrink-0',
        'border-[3px] border-raised shadow-2xl',
        'bg-canvas',
        w, h,
        className
      )}
      style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)' }}
    >
      {/* Status bar notch */}
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-center pt-2 pb-1 bg-canvas">
        <div className="w-24 h-5 rounded-full bg-raised flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-raised/80" />
          <div className="w-8 h-1.5 rounded-full bg-raised/80" />
        </div>
      </div>
      {/* Home indicator */}
      <div className="absolute bottom-1.5 left-0 right-0 z-10 flex justify-center">
        <div className="w-24 h-1 rounded-full bg-raised/60" />
      </div>
      {/* Screen content */}
      <div className="absolute inset-0 top-8 bottom-5 overflow-hidden">
        {children}
      </div>
    </div>
  )
}
