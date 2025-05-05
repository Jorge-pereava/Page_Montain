import { useRef } from 'react';

export default function VideoWithSoundToggle() {
  const videoRef = useRef(null);

  const handleEnableSound = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = false;
      video.play().catch(err => console.log('Play error:', err));
    }
  };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        src="/video/mi-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
      />
      <button
        onClick={handleEnableSound}
        className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-xl shadow text-black font-semibold hover:bg-gray-200 transition"
      >
        Activar sonido
      </button>
    </div>
  );
}
