/**
 * Core Photography & Archival Plate Data Types
 * Atelier Obscura / Kroma Archive
 */

export type AspectRatio = '3:2' | '2:3' | '4:5' | '1:1' | '16:9';

export type PhotoOrientation = 'horizontal' | 'vertical' | 'square' | 'panoramic';

export interface PhotoImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  aspectRatio: AspectRatio;
}

export interface PhotoMetadata {
  year: number;
  location: string;
  camera: string;
  lens: string;
  focalLength: string;
  aperture: string;
  shutterSpeed: string;
  iso: number;
  medium: string;
  series: string;
  plateNumber: string;
}

export interface PhotoEditorial {
  description: string;
  caption: string;
  curatorialNotes?: string;
}

export interface PhotoPresentation {
  featured: boolean;
  order: number;
  orientation: PhotoOrientation;
}

export interface Photograph {
  id: string;
  slug: string;
  title: string;
  image: PhotoImage;
  metadata: PhotoMetadata;
  editorial: PhotoEditorial;
  presentation: PhotoPresentation;
}
