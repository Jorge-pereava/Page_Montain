import { useEffect, useRef, useState } from 'react';
import VideoPromocional from "../assets/VideoPromocional.mp4"

export default function AutoPlayWithSound() {
  const videoRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => setUserInteracted(true);

    window.addEventListener('click', handleUserInteraction);
    window.addEventListener('touchstart', handleUserInteraction); // Para móviles

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    const videoElement = videoRef.current;
    if (videoElement) observer.observe(videoElement);

    return () => {
      window.removeEventListener('click', handleUserInteraction);
      window.removeEventListener('touchstart', handleUserInteraction);
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) return;

    if (isVisible) {
      // Si es visible, intenta reproducir
      video.play().catch((err) => console.log('Error al reproducir:', err));
    } else {
      // Si no es visible, pausa
      video.pause();
    }
  }, [isVisible]);

  useEffect(() => {
    const video = videoRef.current;

    // Si el usuario interactuó, permite activar sonido manualmente
    if (userInteracted && video) {
      video.muted = false;
    }
  }, [userInteracted]);

  return (
    <video
      ref={videoRef}
      src={VideoPromocional}
      playsInline
      loop
      muted
      controls // Mostramos controles para que el usuario active el sonido
      style={{ width: '100%', height: 'auto' }}
    />
  );
}
