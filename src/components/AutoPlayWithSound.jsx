import { useEffect, useRef, useState } from 'react';
import video1 from "../assets/video1.mp4"


//VER VIDEO Y QUE AUTOMATICAMENTE SE REPRODUZCA CON SONIDO
export default function AutoPlayWithSound() {
  const videoRef = useRef(null);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleInteraction = () => setUserInteracted(true);
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && userInteracted) {
          const video = videoRef.current;
          if (video) {
            video.muted = false;
            video.play().catch(err => console.log('Play error:', err));
          }
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, [userInteracted]);

  return (
    <video
      ref={videoRef}
      src={video1}
      playsInline
      loop
      muted
      style={{ width: '100%', height: 'auto' }}
    />
  );
}
