"use client"

import React, { useRef, useEffect, useState } from "react"
import { motion, useMotionValue, useAnimationFrame } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import logoMasPlug from "public/logos/+plug.png"
import logoCasaFertil from "public/logos/casa_fertil.png"
import logoTdft from "public/logos/tdft.png"
import logoJipiVibes from "public/logos/jipivibes.png"

const SLIDES = [
  {
    id: "mayuscula",
    country: "argentina",
    href: "https://www.youtube.com/watch?v=EWqbLEdrS6A",
    type: "img",
    src: "https://bjsjaggleivajaqgymsb.supabase.co/storage/v1/object/public/images/posters/MAY_TRAP.png",
    alt: "Mayúscula Trapacera",
    title: "Mayúscula Trapacera",
    year: "2025",
    description: "Dirección · Guión · Montaje",
    className: "w-72",
    imgClassName: "aspect-[9/16]",
    bg: null,
  },
  {
    id: "jipivibes",
    country: "australia",
    href: "https://jipivibes.com",
    type: "logo",
    logo: logoJipiVibes,
    alt: "Jipi Vibes Logo",
    title: "Jipi Vibes",
    year: "2024–2025",
    description: "Brand Identity · Website",
    className: "w-76",
    imgClassName: "aspect-square",
    bg: "#b52a2a",
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
    description: "Brand Identity · Marketing",
    className: "w-76",
    imgClassName: "aspect-4/5",
    bg: "#000",
  },
  {
    id: "tdft",
    country: "australia",
    href: "https://www.thedogfoodtruck.com.au",
    type: "logo",
    logo: logoTdft,
    alt: "The DogFood Truck Logo",
    title: "The DogFood Truck",
    year: "2025",
    description: "Brand Identity",
    className: "w-76",
    imgClassName: "aspect-4/3",
    bg: "#fffbc7",
  },
  {
    id: "casafertil",
    country: "argentina",
    href: null,
    type: "logo",
    logo: logoCasaFertil,
    alt: "Casa Fértil Logo",
    title: "Casa Fértil",
    year: "2025",
    description: "Brand Identity",
    className: "w-76",
    imgClassName: "aspect-square",
    bg: "#e1d4b4",
  },
]

// Número de copias para el loop — 3 es suficiente para cualquier viewport
const COPIES = 3

export default function ImageCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const velocity = useRef(0) // velocidad actual (px/frame)
  const targetVelocity = useRef(0) // velocidad objetivo (del wheel)
  const singleWidth = useRef(0) // ancho de un set de slides

  // Mide el ancho de un set al montar
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        singleWidth.current = trackRef.current.scrollWidth / COPIES
        // Arranca en el set del medio para poder ir en ambas direcciones
        x.set(-singleWidth.current)
      }
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  // Captura la rueda del mouse y carga velocidad
  useEffect(() => {
    const el = trackRef.current?.parentElement
    if (!el) return

    const onWheel = (e: WheelEvent) => {
      e.preventDefault()
      // deltaY → scroll vertical lo convertimos en horizontal
      targetVelocity.current += e.deltaY * 0.1
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    return () => el.removeEventListener("wheel", onWheel)
  }, [])

  // Loop de animación: inercia + loop infinito
  useAnimationFrame(() => {
    // Lerp hacia la velocidad objetivo, luego decaimiento natural
    velocity.current += (targetVelocity.current - velocity.current) * 0.1
    targetVelocity.current *= 0.9 // fricción del wheel
    if (velocity.current < 0) velocity.current = 0 // ← add this

    // Mueve el track
    const next = x.get() - velocity.current
    x.set(next)

    // Loop: si salimos del set del medio, saltamos al equivalente sin que se note
    const sw = singleWidth.current
    if (!sw) return

    if (x.get() < -sw * 2) x.set(x.get() + sw)
    if (x.get() > 0) x.set(x.get() - sw)
  })

  const onWheel = (e: WheelEvent) => {
    e.preventDefault()
    targetVelocity.current += e.deltaY * 0.6
    // Clamp: never scroll right
    if (targetVelocity.current < 0) targetVelocity.current = 0
  }

  const slides = Array.from({ length: COPIES }, () => SLIDES).flat()

  return (
    <div className="w-full cursor-grab overflow-hidden active:cursor-grabbing">
      <motion.div
        ref={trackRef}
        drag="x"
        style={{ x }}
        className="flex items-end gap-6 will-change-transform"
      >
        {slides.map((slide, i) => {
          const inner = (
            <>
              {/* Thumbnail */}
              <div
                className={`group relative ${slide.imgClassName} overflow-hidden ${slide.bg ? "" : ""} *:cursor-pointer`}
                style={slide.bg ? { background: slide.bg } : undefined}
              >
                {slide.type === "img" ? (
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="h-full w-full object-cover duration-700"
                    draggable={false}
                  />
                ) : (
                  <Image
                    className="absolute top-2 scale-105 transition-transform duration-700 ease-out group-hover:scale-100"
                    src={slide.logo!}
                    alt={slide.alt}
                  />
                )}
              </div>

              {/* Caption */}
              <div className="mt-3 space-y-0.5">
                <div className="inline-flex w-full items-center justify-between gap-2">
                  {slide.href ? (
                    <Link
                      href={slide.href}
                      target="_blank"
                      className="font-medium text-foreground"
                    >
                      {slide.title}
                    </Link>
                  ) : (
                    <span className="font-medium text-foreground">
                      {slide.title}
                    </span>
                  )}
                  <span className="text-[10px] font-light text-muted-foreground">
                    {slide.year} {slide.country}
                  </span>
                </div>
                <p className="text-xs text-gray-400">{slide.description}</p>
              </div>
            </>
          )

          return (
            <div
              key={`${slide.id}-${i}`}
              className={`${slide.className} shrink-0`}
            >
              {inner}
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}
