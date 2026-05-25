import React, { useEffect, useState } from 'react';
import { getImageSrcSet, getImageUrl } from '../utils/cdn';

const OptimizedImage = ({
  src,
  fallbackSrc,
  loading = 'lazy',
  decoding = 'async',
  fetchPriority,
  sizes = '100vw',
  widths = [480, 768, 1024, 1440, 1920],
  quality,
  onError,
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  const handleError = (event) => {
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }

    onError?.(event);
  };

  return (
    <img
      {...props}
      src={getImageUrl(currentSrc, { quality })}
      srcSet={getImageSrcSet(currentSrc, widths, quality)}
      sizes={sizes}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onError={handleError}
    />
  );
};

export default OptimizedImage;
