import video1 from "../assets/video1.mp4"
const AutoPlayWithSound = () => {
    const handlePlay = () => {
      const video = videoRef.current;
      if (video) {
        video.muted = false;
        video.play();
      }
    };
  
    return (
      <div onClick={handlePlay}>
        <video
          src={video1}
          loop
          controls
          className="w-full max-w-[700px] h-auto mx-auto rounded-lg shadow-lg"
        />
        <p className="text-center text-gray-500 mt-2">(Haz clic para reproducir con sonido)</p>
      </div>
    );
  };

export default AutoPlayWithSound;