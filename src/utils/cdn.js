const CDN_ORIGIN = (import.meta.env.VITE_CDN_URL || '').replace(/\/$/, '');
const IMAGE_LOADER_URL = (import.meta.env.VITE_IMAGE_LOADER_URL || '').replace(/\/$/, '');
const DEFAULT_QUALITY = 82;

export const getCdnAssetUrl = (src) => {
  if (!src || !CDN_ORIGIN) {
    return src;
  }

  if (src.startsWith('/assets/')) {
    return `${CDN_ORIGIN}${src}`;
  }

  return src;
};

export const getImageUrl = (src, options = {}) => {
  const assetUrl = getCdnAssetUrl(src);

  if (!assetUrl || !IMAGE_LOADER_URL) {
    return assetUrl;
  }

  const params = new URLSearchParams({
    url: assetUrl,
    q: String(options.quality || DEFAULT_QUALITY),
    format: 'auto',
  });

  if (options.width) {
    params.set('w', String(options.width));
  }

  return `${IMAGE_LOADER_URL}?${params.toString()}`;
};

export const getImageSrcSet = (src, widths = [], quality) => {
  if (!IMAGE_LOADER_URL || !widths.length) {
    return undefined;
  }

  return widths
    .map((width) => `${getImageUrl(src, { width, quality })} ${width}w`)
    .join(', ');
};
