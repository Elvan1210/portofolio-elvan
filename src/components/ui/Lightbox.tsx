'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { GalleryImage } from '@/data/projects'

interface LightboxProps {
  images: GalleryImage[]
  currentIndex: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const current = images[currentIndex]
  const hasPrev = currentIndex > 0
  const hasNext = currentIndex < images.length - 1

  const prev = useCallback(() => {
    if (hasPrev) onNavigate(currentIndex - 1)
  }, [hasPrev, currentIndex, onNavigate])

  const next = useCallback(() => {
    if (hasNext) onNavigate(currentIndex + 1)
  }, [hasNext, currentIndex, onNavigate])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  if (!current) return null

  return (
    <div
      className="fixed inset-0 z-[9000] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Gambar: ${current.caption}`}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Image container */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col items-center gap-4">
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Tutup lightbox"
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-raised/80 flex items-center justify-center text-stone hover:text-gold hover:bg-raised transition-colors"
        >
          <X size={18} />
        </button>

        {/* Counter */}
        <div className="absolute -top-12 left-0 text-stone text-sm">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Image */}
        <div className="relative rounded-xl overflow-hidden border border-raised/40 max-h-[80vh] flex items-center justify-center"
          style={{ background: 'rgba(20,17,15,0.5)' }}>
          <Image
            src={current.src}
            alt={current.caption}
            width={current.width || 800}
            height={current.height || 600}
            className="object-contain max-h-[75vh] w-auto"
            priority
          />
        </div>

        {/* Caption */}
        <p className="text-cream text-sm font-medium text-center px-4">
          {current.caption}
        </p>

        {/* Navigation */}
        <div className="flex items-center gap-3 mt-1">
          <button
            onClick={prev}
            disabled={!hasPrev}
            aria-label="Gambar sebelumnya"
            className={cn(
              'w-10 h-10 rounded-full flex items-center justify-center transition-all',
              hasPrev
                ? 'bg-raised hover:bg-gold/20 text-cream hover:text-gold'
                : 'bg-raised/30 text-stone/30 cursor-not-allowed'
            )}
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => onNavigate(i)}
                aria-label={`Gambar ${i + 1}: ${images[i].caption}`}
                className={cn(
                  'rounded-full transition-all duration-200',
                  i === currentIndex
                    ? 'w-4 h-2 bg-gold'
                    : 'w-2 h-2 bg-stone/40 hover:bg-stone'
                )}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={!hasNext}
            aria-label="Gambar berikutnya"
            className={cn(
              'w-10 h-10 rounded-full flex items-center justify-center transition-all',
              hasNext
                ? 'bg-raised hover:bg-gold/20 text-cream hover:text-gold'
                : 'bg-raised/30 text-stone/30 cursor-not-allowed'
            )}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
