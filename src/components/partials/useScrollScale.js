import { useState, useEffect } from 'react';

// Custom hook to handle scroll scaling
const useScrollScale = (minScale = 0.5, maxScale = 1, scrollThreshold = 2100) => {
  const [scale, setScale] = useState(minScale);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const scaleValue = Math.min(Math.max(scrollY / scrollThreshold, minScale), maxScale);
      setScale(scaleValue);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [minScale, maxScale, scrollThreshold]);

  return scale;
};

export default useScrollScale;