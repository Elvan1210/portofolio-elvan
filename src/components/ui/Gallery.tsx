'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import PhoneFrame from './PhoneFrame'
import BrowserFrame from './BrowserFrame'
import Lightbox from './Lightbox'
import type { TabGallery as TabGalleryType, GalleryImage } from '@/data/projects'

/* ─── Phone Tab Gallery (MyPSKD) ────────────────── */
interface TabGalleryProps {
  tabs: TabGalleryType[]
}

export function TabGallery({ tabs }: TabGalleryProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)
  const currentImages = tabs[activeTab]?.images ?? []

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-2 mb-6" role="tablist">
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={i === activeTab}
            aria-controls={`tab-panel-${i}`}
            id={`tab-btn-${i}`}
            onClick={() => setActiveTab(i)}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              i === activeTab
                ? 'bg-gold text-canvas font-semibold'
                : 'bg-raised text-stone hover:text-cream hover:bg-raised/80 border border-raised/60'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Images grid */}
      <div
        id={`tab-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-btn-${activeTab}`}
        className="flex flex-wrap gap-4 justify-center"
      >
        {currentImages.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightboxIdx(i)}
            aria-label={`Buka gambar: ${img.caption}`}
            className="group flex-shrink-0 focus-visible:outline-none"
          >
            <PhoneFrame size="sm" className="group-hover:border-gold/40 transition-colors duration-200">
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="180px"
                className="object-cover object-top"
              />
            </PhoneFrame>
            <p className="text-stone text-xs text-center mt-2 group-hover:text-cream transition-colors">
              {img.caption}
            </p>
          </button>
        ))}
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          images={currentImages}
          currentIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onNavigate={setLightboxIdx}
        />
      )}
    </div>
  )
}

/* ─── Strip Gallery (Untarest) ──────────────────── */
interface StripGalleryProps {
  images: GalleryImage[]
}

export function StripGallery({ images }: StripGalleryProps) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setLightboxIdx(i)}
            aria-label={`Buka gambar: ${img.caption}`}
            className="group relative overflow-hidden rounded-xl border border-raised/40 hover:border-gold/30 transition-all duration-200 text-left"
            style={{ background: 'linear-gradient(135deg, var(--card), var(--raised))' }}
          >
            <div className="relative w-full aspect-[7/4] overflow-hidden">
              <Image
                src={img.src}
                alt={img.caption}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
              />
              {/* Blur gradient bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-card to-transparent" />
            </div>
            <p className="text-stone text-xs px-3 py-2 group-hover:text-cream transition-colors">
              {img.caption}
            </p>
          </button>
        ))}
      </div>
      {lightboxIdx !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onNavigate={setLightboxIdx}
        />
      )}
    </div>
  )
}

/* ─── Browser Gallery (Kantin Kita) ─────────────── */
interface BrowserGalleryProps {
  images: GalleryImage[]
  urlLabel?: string
}

export function BrowserGallery({ images, urlLabel = 'kantin-kita.vercel.app' }: BrowserGalleryProps) {
  const [activeIdx, setActiveIdx] = useState(0)
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null)

  return (
    <div className="space-y-4">
      <BrowserFrame url={urlLabel}>
        <button
          onClick={() => setLightboxIdx(activeIdx)}
          aria-label={`Buka gambar: ${images[activeIdx]?.caption}`}
          className="w-full block"
        >
          <div className="relative w-full aspect-[8/5] overflow-hidden">
            <Image
              src={images[activeIdx].src}
              alt={images[activeIdx].caption}
              fill
              sizes="100vw"
              className="object-cover object-top"
              priority={activeIdx === 0}
            />
          </div>
        </button>
      </BrowserFrame>

      {/* Caption + thumbnail strip */}
      <p className="text-stone text-sm text-center">{images[activeIdx].caption}</p>

      <div className="flex gap-2 flex-wrap justify-center">
        {images.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActiveIdx(i)}
            aria-label={img.caption}
            className={cn(
              'relative w-20 h-14 rounded-lg overflow-hidden border-2 transition-all duration-200 flex-shrink-0',
              i === activeIdx ? 'border-gold' : 'border-raised/40 hover:border-stone/40'
            )}
          >
            <Image
              src={img.src}
              alt={img.caption}
              fill
              sizes="80px"
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>

      {lightboxIdx !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onNavigate={setLightboxIdx}
        />
      )}
    </div>
  )
}
