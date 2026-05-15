declare module 'figma:asset/*.png' {
  const src: string;
  export default src;
}

declare module 'figma:asset/*.jpg' {
  const src: string;
  export default src;
}

declare module 'figma:asset/*.svg' {
  const src: string;
  export default src;
}

declare module 'figma:asset/*.gif' {
  const src: string;
  export default src;
}

declare module 'figma:asset/*.webp' {
  const src: string;
  export default src;
}

declare module 'lucide-react/dist/esm/icons/*' {
  import { LucideIcon } from 'lucide-react';
  const icon: LucideIcon;
  export default icon;
}
