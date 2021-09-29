export const hive = {
  name: 'Hive',
  color: { range: { primary: { h: 37, s: 88 } }, contrast: { start: 33, end: 100 } },
  accent: { hsl: { h: 210, s: 60, l: 23 }, rgb: { r: 23, g: 59, b: 94 } },
  font: { display: { name: 'Kufam', weight: 400, style: 'normal' }, ui: { name: 'Inconsolata', weight: 400, style: 'normal' } },
  background: {
    type: 'video',
    color: { rgb: { r: 255, g: 255, b: 255 }, hsl: { h: 0, s: 0, l: 0 } },
    gradient: {
      angle: 160,
      start: { hsl: { h: 206, s: 16, l: 40 }, rgb: { r: 86, g: 104, b: 118 } },
      end: { hsl: { h: 219, s: 28, l: 12 }, rgb: { r: 22, g: 28, b: 39 } }
    },
    image: { type: 'url', url: '', blur: 0, grayscale: 0, opacity: 100, scale: 100, accent: 0, vignette: { opacity: 0, start: 90, end: 70 } },
    video: { url: 'https://github.com/zombieFox/nightTabAssets/blob/main/videos/1627763800511.mp4?raw=true', blur: 0, grayscale: 0, opacity: 16, scale: 100, accent: 0, vignette: { opacity: 50, start: 90, end: 0 } }
  },
  style: 'dark',
  shade: { opacity: 0, blur: 0 },
  bookmark: {
    shadow: { opacity: 10, blur: 0, color: { type: 'theme', hsl: { h: 0, s: 0, l: 0 }, rgb: { r: 0, g: 0, b: 0 } } },
    item: { opacity: 40 }
  },
  toolbar: { opacity: 0 }
};
