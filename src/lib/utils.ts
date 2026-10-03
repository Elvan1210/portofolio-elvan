import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Convert a filename like "Login-siswa.png" to a readable caption */
export function fileToCaption(filename: string): string {
  return filename
    .replace(/\.[^.]+$/, '')           // remove extension
    .replace(/-siswa|-guru|-admin|-untarest|-kantin/gi, '') // remove role/app suffix
    .replace(/-/g, ' ')               // dashes to spaces
    .replace(/\b\w/g, (c) => c.toUpperCase()) // title case
    .trim()
}
