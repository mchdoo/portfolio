"use client"

import { useEffect, useRef, useState } from "react"

export default function VideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [progress, setProgress] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [barVisible, setBarVisible] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Actualiza el progreso de carga del video
    const handleProgress = () => {
      if (video.buffered.length > 0 && video.duration) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1)
        const pct = Math.min((bufferedEnd / video.duration) * 100, 100)
        setProgress(pct)
      }
    }

    // El video ya tiene suficiente datos para reproducirse
    const handleCanPlay = () => {
      setProgress(100)
      setIsLoaded(true)

      // Oculta la barra de carga después de que el video empiece
      setTimeout(() => setBarVisible(false), 600)
    }

    video.addEventListener("progress", handleProgress)
    video.addEventListener("canplaythrough", handleCanPlay)

    return () => {
      video.removeEventListener("progress", handleProgress)
      video.removeEventListener("canplaythrough", handleCanPlay)
    }
  }, [])

  return (
    <div className="video-wrapper">
      {/* Barra de carga */}
      {barVisible && (
        <div
          className="loading-bar-container"
          style={{ opacity: isLoaded ? 0 : 1 }}
        >
          <div className="loading-bar" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* Video de fondo */}
      <video
        ref={videoRef}
        className={`background-video ${isLoaded ? "visible" : "hidden"}`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src="/output.mp4" type="video/mp4" />
        {/* Opcional: agrega webm como fallback para mejor rendimiento */}
        {/* <source src="/video/background.webm" type="video/webm" /> */}
      </video>

      {/* Overlay oscuro opcional para legibilidad */}
      <div className="overlay" />

      <style jsx>{`
        .video-wrapper {
          position: fixed;
          inset: 0;
          z-index: -1;
          background: #0a0a0a; /* color de fondo mientras carga el video */
          overflow: hidden;
        }

        /* Barra de carga — aparece arriba de la pantalla */
        .loading-bar-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.15);
          z-index: 10;
          transition: opacity 0.5s ease;
        }

        .loading-bar {
          height: 100%;
          background: #ffffff;
          border-radius: 0 2px 2px 0;
          transition: width 0.3s ease;
        }

        /* Video */
        .background-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: opacity 0.8s ease;
        }

        .background-video.hidden {
          opacity: 0;
        }

        .background-video.visible {
          opacity: 1;
        }

        /* Overlay semitransparente */
        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  )
}
