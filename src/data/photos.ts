import type { Photograph, PhotoMetadata } from '../types/photography';

export const photographs: Photograph[] = [
  {
    id: 'plate-01',
    slug: 'cantilever-at-dusk',
    title: 'Cantilever at Dusk',
    image: {
      src: '/photos/plate-01.svg',
      alt: 'Monolithic reinforced concrete cantilever jutting over a dark basalt reflecting pool during astronomical twilight.',
      width: 1800,
      height: 1200,
      aspectRatio: '3:2',
    },
    metadata: {
      year: 2024,
      location: 'Valencia, Spain',
      camera: 'Leica M11-P',
      lens: 'Summilux-M 35mm f/1.4 ASPH',
      focalLength: '35mm',
      aperture: 'f/4.0',
      shutterSpeed: '1/250s',
      iso: 100,
      medium: '35mm Optical Monochrome',
      series: 'Architectural Monoliths',
      plateNumber: 'PL-01',
    },
    editorial: {
      description: 'A study in structural tension and monolithic mass. Photographed under low ambient overcast, the cantilever reveals fine aggregate grain in the concrete skin while remaining grounded in deep shadow.',
      caption: 'Angular raw concrete cantilever silhouetted against deep dusk gradients.',
      curatorialNotes: 'Exposed to preserve high micro-contrast along the structural edge while holding deep mineral black in the lower pool reflections.',
    },
    presentation: {
      featured: true,
      order: 1,
      orientation: 'horizontal',
    },
  },
  {
    id: 'plate-02',
    slug: 'colonnade-in-stasis',
    title: 'Colonnade in Stasis',
    image: {
      src: '/photos/plate-02.svg',
      alt: 'Vertical composition of rhythmic stone pillars cast in raking afternoon shadow.',
      width: 1200,
      height: 1800,
      aspectRatio: '2:3',
    },
    metadata: {
      year: 2024,
      location: 'Kyoto, Japan',
      camera: 'Leica M11-P',
      lens: 'Apo-Summicron-M 50mm f/2 ASPH',
      focalLength: '50mm',
      aperture: 'f/2.8',
      shutterSpeed: '1/125s',
      iso: 200,
      medium: '35mm Silver Gelatin Emulsion',
      series: 'Architectural Monoliths',
      plateNumber: 'PL-02',
    },
    editorial: {
      description: 'The rhythmic progression of granite colonnades bisected by acute winter sunlight. The optical sharpness isolates micro-abrasions in the weathered stone surfaces.',
      caption: 'Repetitive vertical granite columns bisected by high-contrast diagonal shadows.',
      curatorialNotes: 'Orthogonal vertical framing creates architectural cadence, alternating between illuminated stone grain and deep shadow voids.',
    },
    presentation: {
      featured: false,
      order: 2,
      orientation: 'vertical',
    },
  },
  {
    id: 'plate-03',
    slug: 'basalt-core-extraction',
    title: 'Basalt Core Extraction',
    image: {
      src: '/photos/plate-03.svg',
      alt: 'Geometric basalt rock formations displaying sharp hexagonal vertical fractures under diffused northern fog.',
      width: 1440,
      height: 1800,
      aspectRatio: '4:5',
    },
    metadata: {
      year: 2023,
      location: 'Vik, Iceland',
      camera: 'Hasselblad 500C/M',
      lens: 'Carl Zeiss Planar 80mm f/2.8',
      focalLength: '80mm',
      aperture: 'f/5.6',
      shutterSpeed: '1/60s',
      iso: 100,
      medium: '120 Medium Format Panatomic-X',
      series: 'Nocturne Studies',
      plateNumber: 'PL-03',
    },
    editorial: {
      description: 'Hexagonal cooling joints captured with medium format tonal nuance. The tonal compression highlights silver sheen on damp volcanic stone surfaces.',
      caption: 'Volcanic basalt columns rising vertically through coastal sea mist.',
      curatorialNotes: 'Developed in dilute Rodinal to accentuate the natural prismatic geometry and sharp crystalline fracture lines.',
    },
    presentation: {
      featured: true,
      order: 3,
      orientation: 'vertical',
    },
  },
  {
    id: 'plate-04',
    slug: 'aperture-study-no-4',
    title: 'Aperture Study No. 4',
    image: {
      src: '/photos/plate-04.svg',
      alt: 'Square format optical study of light passing through an industrial circular diaphragm.',
      width: 1600,
      height: 1600,
      aspectRatio: '1:1',
    },
    metadata: {
      year: 2024,
      location: 'Berlin, Germany',
      camera: 'Hasselblad 500C/M',
      lens: 'Carl Zeiss Distagon 50mm f/4',
      focalLength: '50mm',
      aperture: 'f/8.0',
      shutterSpeed: '1/30s',
      iso: 100,
      medium: '120 Medium Format Tri-X 400',
      series: 'Nocturne Studies',
      plateNumber: 'PL-04',
    },
    editorial: {
      description: 'A square format examination of camera mechanics. Light converges through fifteen precision-honed aperture blades, reflecting tungsten warmth on burnished metal edges.',
      caption: 'Concentric steel aperture blades creating a centered circular light horizon.',
      curatorialNotes: 'The square crop eliminates directional bias, focusing visual attention entirely on mechanical symmetry and specular rim reflections.',
    },
    presentation: {
      featured: false,
      order: 4,
      orientation: 'square',
    },
  },
  {
    id: 'plate-05',
    slug: 'fjord-horizon-meridian',
    title: 'Fjord Horizon Meridian',
    image: {
      src: '/photos/plate-05.svg',
      alt: 'Cinematic wide panoramic view of deep glacial fjord water reflecting snow-capped peaks under midnight twilight.',
      width: 1920,
      height: 1080,
      aspectRatio: '16:9',
    },
    metadata: {
      year: 2023,
      location: 'Senja, Norway',
      camera: 'Linhof Master Technika 4x5',
      lens: 'Schneider Super-Angulon 90mm f/5.6',
      focalLength: '90mm',
      aperture: 'f/11',
      shutterSpeed: '2s',
      iso: 50,
      medium: '4x5 Sheet Film Velvia 50',
      series: 'Chroma & Void',
      plateNumber: 'PL-05',
    },
    editorial: {
      description: 'Expansive horizontal panorama exposed over two seconds to render the fjord surface mirror-flat. The glacial boundary separates obsidian water from cobalt mountain shadows.',
      caption: 'Panoramic expanse of dark arctic water and distant serrated granite peaks.',
      curatorialNotes: 'Extended exposure time creates absolute liquid stillness, balancing large-format resolution with meditative spatial depth.',
    },
    presentation: {
      featured: true,
      order: 5,
      orientation: 'panoramic',
    },
  },
  {
    id: 'plate-06',
    slug: 'helical-ascendance',
    title: 'Helical Ascendance',
    image: {
      src: '/photos/plate-06.svg',
      alt: 'Low-angle horizontal view of an austere concrete spiral stairwell framing an open skylight.',
      width: 1800,
      height: 1200,
      aspectRatio: '3:2',
    },
    metadata: {
      year: 2024,
      location: 'Rotterdam, Netherlands',
      camera: 'Leica M11-P',
      lens: 'Elmarit-M 28mm f/2.8 ASPH',
      focalLength: '28mm',
      aperture: 'f/5.6',
      shutterSpeed: '1/125s',
      iso: 160,
      medium: '35mm Optical Monochrome',
      series: 'Architectural Monoliths',
      plateNumber: 'PL-06',
    },
    editorial: {
      description: 'A study of centrifugal architectural motion captured in stillness. The texture of board-formed concrete retains the imprint of rough timber formwork.',
      caption: 'Sweeping helical curve of exposed aggregate concrete leading toward zenith light.',
      curatorialNotes: 'Diagonal composition guides the gaze upward through concrete gradations into neutral sky luminance.',
    },
    presentation: {
      featured: false,
      order: 6,
      orientation: 'horizontal',
    },
  },
  {
    id: 'plate-07',
    slug: 'monolith-portal',
    title: 'Monolith Portal',
    image: {
      src: '/photos/plate-07.svg',
      alt: 'Solitary natural stone monolith arch standing in an arid plateau against deep space darkness.',
      width: 1200,
      height: 1800,
      aspectRatio: '2:3',
    },
    metadata: {
      year: 2023,
      location: 'Atacama, Chile',
      camera: 'Leica M11-P',
      lens: 'Summicron-M 50mm f/2',
      focalLength: '50mm',
      aperture: 'f/8.0',
      shutterSpeed: '1/500s',
      iso: 100,
      medium: '35mm Panatomic-X',
      series: 'Chroma & Void',
      plateNumber: 'PL-07',
    },
    editorial: {
      description: 'Vertical framing emphasizes the monumental scale of wind-sculpted granite against extreme desert clarity. High micro-contrast reveals crystalline quartz veins in the rock face.',
      caption: 'Slender natural stone arch isolating a vertical sliver of desert horizon.',
      curatorialNotes: 'Photographed with a deep yellow optical filter to drop the desert sky into velvety darkness without losing shadow gradation.',
    },
    presentation: {
      featured: false,
      order: 7,
      orientation: 'vertical',
    },
  },
  {
    id: 'plate-08',
    slug: 'subterranean-vaults',
    title: 'Subterranean Vaults',
    image: {
      src: '/photos/plate-08.svg',
      alt: 'Arched brick cistern vault receding into darkness with calm water reflections.',
      width: 1440,
      height: 1800,
      aspectRatio: '4:5',
    },
    metadata: {
      year: 2024,
      location: 'Istanbul, Turkey',
      camera: 'Hasselblad 500C/M',
      lens: 'Carl Zeiss Distagon 50mm f/4',
      focalLength: '50mm',
      aperture: 'f/4.0',
      shutterSpeed: '1/15s',
      iso: 400,
      medium: '120 Medium Format HP5 Plus',
      series: 'Nocturne Studies',
      plateNumber: 'PL-08',
    },
    editorial: {
      description: 'Long subterranean exposure recording ancient masonry submerged in quiet water. Subtle tungsten lighting reveals mineral deposits cascading down ancient clay bricks.',
      caption: 'Receding brick barrel vaults reflected in still subterranean water reservoir.',
      curatorialNotes: 'Exposed to allow tungsten light sources to act as gentle spatial anchors without overpowering the cavernous obscurity.',
    },
    presentation: {
      featured: true,
      order: 8,
      orientation: 'vertical',
    },
  },
];

/**
 * Accessor Functions
 */

export function getPhotographs(): Photograph[] {
  return [...photographs].sort((a, b) => a.presentation.order - b.presentation.order);
}

export function getPhotographBySlug(slug: string): Photograph | undefined {
  return photographs.find((p) => p.slug === slug);
}

export function getPhotographById(id: string): Photograph | undefined {
  return photographs.find((p) => p.id === id);
}

export function getFeaturedPhotographs(): Photograph[] {
  return getPhotographs().filter((p) => p.presentation.featured);
}

export function getPhotographsBySeries(series: string): Photograph[] {
  return getPhotographs().filter((p) => p.metadata.series === series);
}

export function calculateAspectRatio(width: number, height: number): number {
  if (height === 0) return 1;
  return Number((width / height).toFixed(4));
}

export function formatTelemetry(metadata: PhotoMetadata): string {
  const parts = [
    metadata.focalLength,
    metadata.aperture,
    metadata.shutterSpeed,
    `ISO ${metadata.iso}`,
  ].filter(Boolean);
  return parts.join(' ');
}
