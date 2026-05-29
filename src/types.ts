export interface ProjectCard {
  id: string;
  number: string;
  title: string;
  category: string;
  imageUrl: string;
  accentColor: string;
  tiltAngle: number; // degrees
  scale?: number;
}

export interface FloatingAppScreen {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  bgColor: string;
  textColor: string;
  position: 'left-outer' | 'left-inner' | 'right-inner' | 'right-outer';
  offsetY: number; // For parallax offset positioning
  depth: number; // z-index feel/scale factor
}
