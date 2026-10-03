'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ThemeToggle({ className }: { className?: string }) {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const isLight = stored === 'light'
    setIsDark(!isLight)
    if (isLight) document.documentElement.classList.add('light')
  }, [])

  const toggle = () => {
    const html = document.documentElement
    const nowLight = !isDark
    if (nowLight) {
      html.classList.add('light')
      localStorage.setItem('theme', 'light')
    } else {
      html.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    }
    setIsDark(!nowLight)
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap'}
      className={cn(
        'relative w-10 h-10 rounded-full flex items-center justify-center',
        'text-stone hover:text-gold transition-colors duration-200',
        'hover:bg-gold/10 focus-visible:bg-gold/10',
        className
      )}
    >
      <span className={cn('absolute transition-all duration-300', isDark ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90')}>
        <Moon size={18} />
      </span>
      <span className={cn('absolute transition-all duration-300', isDark ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0')}>
        <Sun size={18} />
      </span>
    </button>
  )
}
