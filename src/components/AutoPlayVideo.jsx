import React, { useEffect, useRef } from "react";
import video1 from "../assets/video1.mp4";

// VIDEO
const AutoPlayVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleInteraction = () => setUserInteracted(true);
    window.addEventListener('scroll', handleInteraction);
    document.getElementById("videito")
    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (video) {
          if (entry.isIntersecting) {
            video.play();
          } else {
            video.pause();
          }
        }
      },
      {
        threshold: 0.5, // El 50% del video debe estar visible
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      if (videoRef.current) observer.unobserve(videoRef.current);
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        src= {video1}
        loop
        controls
        className="w-full max-w-[700px] h-auto mx-auto rounded-lg shadow-lg"
      >
      </video>
    </div>
  );
};


export default AutoPlayVideo;