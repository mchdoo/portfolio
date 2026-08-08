"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "motion/react"
import VideoBackground from "@/components/video-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Projects from "@/components/projects"

export default function Page() {
  const [titleOrder, setTitleOrder] = useState("Director designer")

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTitleOrder((current) =>
        current === "Director designer"
          ? "Designer director"
          : "Director designer"
      )
    }, 2000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <>
      {/* Tu contenido va aquí, encima del video */}
      <VideoBackground />
      <main className="absolute top-0 left-0 z-10 flex h-[calc(100vh-1.5rem)] w-full items-center justify-between p-6 leading-none font-medium text-white select-none">
        <h1 className="leading-none">PEDRO MACHADO</h1>

        <div className="relative mx-4 h-8 w-full border-x">
          <span className="absolute left-0 h-px w-full bg-white"></span>
          <span className="absolute top-1/2 left-0 h-px w-full bg-white"></span>
          <span className="absolute bottom-0 left-0 h-px w-full bg-white"></span>
        </div>

        <div className="w relative flex flex-col text-right uppercase">
          {titleOrder}
        </div>
      </main>

      <a
        href="https://youtu.be/PATkQS_V0R0"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 left-2 animate-pulse rounded-full bg-white/30 px-2 font-semibold tracking-tight text-white backdrop-blur-md"
      >
        ver reel completo
      </a>
      <a
        href="cv/CV-2026.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-2 bottom-2 animate-pulse rounded-full bg-white/30 px-2 font-semibold tracking-tight text-white backdrop-blur-md"
      >
        descargar cv
      </a>

      <section className="h-[calc(100vh)] w-screen"></section>

      <section
        defaultValue="projects"
        className="relative grid min-h-screen place-items-center gap-4 bg-white py-12"
      >
        <Projects />

        <div className="relative mt-6 h-8 w-[calc(100vw-2rem)] border-x border-black">
          <span className="absolute left-0 h-px w-full bg-black"></span>
          <span className="absolute top-1/2 left-0 h-px w-full bg-black"></span>
          <span className="absolute bottom-0 left-0 h-px w-full bg-black"></span>
        </div>

        <h4 className="py-4 text-5xl leading-none tracking-tighter text-black">
          La experiencia cinematográfica hoy se despliega en un rango anchísimo.
          De videografía, pasando por diseño gráfico, hasta software, mi trabajo
          se centra en generar experiencias (audio)visuales que tengan impacto
          estético, emocional & intelectual en audiencias.
        </h4>

        <h4 className="w-full py-6 text-right text-5xl leading-none tracking-tighter text-black">
          hablame dale
        </h4>

        <div className="flex w-full flex-col divide-y divide-black text-4xl *:tracking-tighter *:transition-all *:hover:py-2">
          <a
            href="https://www.instagram.com/pdromchado_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/machadope/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="mailto:pedromachadofulcheri@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://www.youtube.com/@mchadopedro"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
        </div>

        <p className="mt-6 text-center text-xs">
          copyright 2026 pedro machado <br /> este sitio ha sido hecho con mucho
          amor
        </p>
      </section>
    </>
  )
}
