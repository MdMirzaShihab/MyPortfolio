import React, { useRef, useEffect, useState, memo } from 'react';

const LazyVideo = memo(({ src, className, title, autoPlay = true, muted = true, loop = true, ...props }) => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(video);
        }
      },
      {
        rootMargin: '50px',
        threshold: 0.1
      }
    );

    observer.observe(video);

    return () => {
      if (video) {
        observer.unobserve(video);
      }
    };
  }, []);

  const handleLoadedData = () => {
    setIsLoaded(true);
  };

  return (
    <div className="relative">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
          <div className="text-gray-400">Loading...</div>
        </div>
      )}
      <video
        ref={videoRef}
        className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        autoPlay={autoPlay && isInView}
        muted={muted}
        loop={loop}
        onLoadedData={handleLoadedData}
        preload="metadata"
        {...props}
      >
        {isInView && <source src={src} type="video/mp4" />}
      </video>
    </div>
  );
});

LazyVideo.displayName = 'LazyVideo';

export default LazyVideo;