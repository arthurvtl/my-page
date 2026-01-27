import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Helper para gerar caminhos de assets com basePath
// O basePath é sempre /my-page para GitHub Pages
const basePath = '/my-page';

export function getAssetPath(path: string): string {
  if (!path) return path;
  if (path.startsWith('http')) return path;
  if (path.startsWith(basePath)) return path; // Já tem o prefixo
  return `${basePath}${path.startsWith('/') ? path : '/' + path}`;
}

export function formatDuration(seconds: number): string {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`
}