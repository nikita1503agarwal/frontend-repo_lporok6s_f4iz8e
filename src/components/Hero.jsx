import React from 'react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Soft pastel gradient background with subtle neon feel */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100 via-indigo-100 to-sky-100"/>

      {/* Sakura petals floating (very subtle) */}
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <svg className="absolute -top-10 left-10 w-64 h-64" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#fbcfe8" opacity="0.4">
            <circle cx="30" cy="40" r="2"/>
            <circle cx="60" cy="20" r="3"/>
            <circle cx="90" cy="60" r="2"/>
            <circle cx="120" cy="30" r="2"/>
            <circle cx="150" cy="70" r="3"/>
          </g>
        </svg>
        <svg className="absolute bottom-0 right-10 w-72 h-72" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g fill="#c7d2fe" opacity="0.35">
            <circle cx="40" cy="40" r="2"/>
            <circle cx="70" cy="80" r="3"/>
            <circle cx="110" cy="50" r="2"/>
            <circle cx="150" cy="100" r="3"/>
          </g>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-800">
              Mrityun Jay Garnipudi
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-600">
              Engineering Student · JLPT Aspirant · Embedded Systems & IoT Enthusiast · Occasional Keyboardist
            </p>
            <div className="mt-8 flex items-center gap-3 text-sm text-slate-500">
              <span className="inline-flex h-2 w-2 rounded-full bg-rose-400 animate-pulse"/>
              <span>Modern engineering student meets Japan travel dreamer</span>
            </div>
          </div>

          {/* Banner image collage with Japanese city vibes */}
          <div className="order-1 md:order-2 relative">
            <div className="relative w-full">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl shadow-rose-200/50 ring-1 ring-white/40">
                <img
                  src="https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?q=80&w=1600&auto=format&fit=crop"
                  alt="Tokyo streets at dusk"
                  className="h-full w-full object-cover scale-105"
                />
              </div>
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-40 md:w-48 rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/50">
                <img
                  src="https://images.unsplash.com/photo-1526481280698-8fcc13fd79b3?q=80&w=800&auto=format&fit=crop"
                  alt="Kyoto Torii gates"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="hidden sm:block absolute -top-6 -right-6 w-40 md:w-48 rounded-2xl overflow-hidden shadow-lg ring-1 ring-white/50">
                <img
                  src="https://images.unsplash.com/photo-1545569341-9eb8b30979d0?q=80&w=800&auto=format&fit=crop"
                  alt="Mt. Fuji pastel morning"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* gentle wave divider */}
      <div className="relative">
        <svg className="w-full" viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0V40Z" fill="#ffffff" fillOpacity="1"/>
        </svg>
      </div>
    </section>
  )
}

export default Hero
