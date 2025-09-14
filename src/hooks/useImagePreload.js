import { useState, useEffect } from 'react';

export const useImagePreload = (imageSources) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  useEffect(() => {
    if (!imageSources || imageSources.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedImages = 0;
    const totalImages = imageSources.length;

    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          loadedImages += 1;
          setLoadedCount(loadedImages);
          if (loadedImages === totalImages) {
            setImagesLoaded(true);
          }
          resolve();
        };
        img.onerror = reject;
        img.src = src;
      });
    };

    // Preload all images
    Promise.all(imageSources.map(loadImage)).catch((error) => {
      console.warn('Some images failed to preload:', error);
      setImagesLoaded(true);
    });
  }, [imageSources]);

  return { imagesLoaded, loadedCount, totalImages: imageSources?.length || 0 };
};