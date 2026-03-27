// app/layout.tsx o app/page.tsx
import VideoBackground from "@/components/video-background"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Projects from "@/components/projects"

export default function Page() {
  return (
    <>
      {/* Tu contenido va aquí, encima del video */}
      <VideoBackground />
      <main className="absolute top-0 left-0 z-10 flex h-[calc(100vh-1.5rem)] w-full items-center justify-between p-6 font-medium text-white">
        <h1 className="leading-none">PEDRO MACHADO</h1>
        <span className="mr-4 h-px w-full bg-white"></span>
        <div className="flex flex-col uppercase">
          <span className="inline-flex items-center gap-2">
            <span className="block size-2 rounded-full bg-white"></span> Film
          </span>
          <span>Design</span>
        </div>
      </main>

      <section className="h-[calc(100vh-1.5rem)] w-screen"></section>

      <Tabs
        defaultValue="about"
        className="relative grid min-h-screen place-items-center gap-4 bg-white py-12"
      >
        <div className="absolute top-0 flex h-6 w-full flex-row justify-between px-2 text-sm text-black uppercase">
          <a
            href="https://www.instagram.com/pdromchado_"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
            <span className="sr-only">Instagram</span>
          </a>
          <a
            href="mailto:pedromachadofulcheri@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black px-2 text-white"
          >
            Email
            <span className="sr-only">Email</span>
          </a>
          <a
            href="https://www.youtube.com/@mchadopedro"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
            <span className="sr-only">YouTube</span>
          </a>
        </div>

        <TabsContent value="about" className="flex flex-col gap-12">
          <div className="my-auto grid w-full grid-cols-5 items-start gap-4">
            <div className="col-span-4 col-start-2 lg:col-span-2 lg:col-start-2">
              <h4 className="text-lg text-black">
                La experiencia cinematográfica hoy se despliega en un rango
                anchísimo. De videografía, pasando por diseño gráfico, hasta
                software, mi trabajo se centra en generar experiencias
                (audio)visuales que tengan impacto estético, emocional &
                intelectual en audiencias.
              </h4>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="projects" className="flex flex-col gap-12">
          <Projects />
        </TabsContent>

        <TabsList
          variant={"line"}
          className="absolute bottom-0 flex w-full flex-row justify-between px-2 text-black uppercase"
        >
          <TabsTrigger value="about">ABOUT</TabsTrigger>
          <TabsTrigger value="projects">PROYECTOS</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  )
}
