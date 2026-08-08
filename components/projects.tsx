import { useMemo } from "react"
import ImageCarousel from "./carousel"
import Image from "next/image"
import Link from "next/link"
import logoMasPlug from "public/logos/+plug.png"
import logoCasaFertil from "public/logos/casa_fertil.png"
import logoTdft from "public/logos/tdft.png"
import logoJipiVibes from "public/logos/jipivibes.png"
import { div } from "motion/react-client"
import { title } from "node:process"

const Projects = () => {
  const slides = [
    {
      id: "mayusculatrapacera",
      country: "argentina",
      href: "https://www.youtube.com/watch?v=EWqbLEdrS6A",
      type: "img",
      src: "https://bjsjaggleivajaqgymsb.supabase.co/storage/v1/object/public/images/posters/MAY_TRAP.png",
      alt: "Mayúscula Trapacera",
      title: "Mayúscula Trapacera",
      year: "2025",
      category: "cortometraje",
      description: "Dirección · Guión · Montaje",
      className: "w-72",
      imgClassName: "aspect-[0.6]",
      color: "#1c6375",
    },
    {
      id: "jipivibes",
      country: "australia",
      href: "https://jipivibes.com",
      type: "logo",
      logo: logoJipiVibes,
      alt: "Jipi Vibes Logo",
      title: "Jipi Vibes",
      year: "2025",
      category: "trabajo",
      description: "Brand Identity · Website",
      className: "w-76",
      imgClassName: "aspect-square",
      color: "#b52a2a",
    },
    {
      id: "masplug",
      country: "argentina",
      href: "https://instagram.com/maspluggg",
      type: "logo",
      logo: logoMasPlug,
      alt: "MasPlug Logo",
      title: "+PLUG",
      year: "2026",
      category: "trabajo",
      description: "Brand Identity · Creative Direction",
      className: "w-76",
      imgClassName: "aspect-4/5",
      color: "#000",
    },
  ]

  const otrosProyectos = [
    {
      title: "el gesto minimo",
      href: "https://youtu.be/ESC-Ko8AHm4",
      category: "experimento",
    },
    {
      title: "tríptico por encargo",
      href: "https://youtu.be/ivolNKMmb1A",
      category: "cortometraje",
    },
    {
      title: "Δεν σε θέλω εδώ (den se thélo edó)",
      href: "https://youtu.be/EzqinN66WNk",
      category: "cortometraje",
    },
  ]

  const projectCount = otrosProyectos.length

  const gradientBackgrounds = useMemo(
    () =>
      Array.from({ length: projectCount }, () => {
        const hue = () => Math.floor(Math.random() * 360)
        return `radial-gradient(circle at center, hsl(${hue()}, 72%, 65%), hsl(${hue()}, 72%, 55%), hsl(${hue()}, 72%, 50%))`
      }),
    [projectCount]
  )

  return (
    <>
      <div className="grid w-full space-y-4 px-4 lg:grid-cols-2">
        {slides.map((slide) => (
          <div className="inline-flex h-fit w-full gap-4" key={slide.id}>
            {slide.src ? (
              <Link
                href={slide.href}
                className="group relative inline-block w-full overflow-hidden"
              >
                <div
                  style={{
                    backgroundColor: slide.color!,
                  }}
                  className="aspect-2/3 w-full"
                >
                  <Image
                    width={300}
                    height={300}
                    className="w-full"
                    src={slide.src}
                    alt={slide.alt}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-black/30 opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-medium text-white opacity-0 transition duration-300 group-hover:opacity-100">
                  Ver -&gt;
                </span>
              </Link>
            ) : (
              <Link
                href={slide.href}
                className="group relative inline-block w-full overflow-hidden"
              >
                <div
                  style={{
                    backgroundColor: slide.color!,
                  }}
                  className="grid aspect-square w-full place-content-center"
                >
                  <Image
                    className="transition-opacity group-hover:opacity-0"
                    width={170}
                    src={slide.logo!}
                    alt={slide.alt}
                  />
                </div>
                <div className="pointer-events-none absolute inset-0 bg-black/30 opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-medium text-white opacity-0 transition duration-300 group-hover:opacity-100">
                  Ver -&gt;
                </span>
              </Link>
            )}
            <div className="relative flex w-full flex-col justify-between py-1">
              <h3 className="text-2xl leading-none font-medium tracking-tighter">
                {slide.title}
                <p className="mt-2 text-xs leading-none font-normal tracking-normal opacity-50">
                  {slide.category} <br /> {slide.year} <br /> {slide.country}
                </p>
              </h3>
              {/* <span
              className="h-3 w-3"
              style={{
                backgroundColor: slide.color,
              }}
            ></span> */}
              <p className="w-full leading-none"> {slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex w-full flex-col space-y-4 px-4">
        <h2 className="text-xl font-semibold tracking-tight">[otros]</h2>
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
          {otrosProyectos.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className="group relative flex aspect-square gap-2 p-2 transition hover:text-slate-900"
              style={{
                backgroundImage: gradientBackgrounds[index],
                animation: "gradientShift 14s ease infinite",
                backgroundSize: "300% 300%",
              }}
            >
              <div className="w-1/3 text-xl leading-none font-medium tracking-tight text-white">
                "{project.title}"{" "}
                <span className="tracking-none font-normal">
                  ({project.category})
                </span>
              </div>
              <p className="absolute right-2 bottom-2 text-white opacity-20 group-hover:opacity-100">
                {" "}
                Ver -&gt;{" "}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </>
  )
}
export default Projects
