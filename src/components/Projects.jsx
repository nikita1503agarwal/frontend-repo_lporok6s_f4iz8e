import React from 'react'

const Projects = () => {
  return (
    <section id="projects" className="relative bg-[#fff]">
      {/* wave background motif */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-x-0 -top-10 w-full" viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60C180 20 360 100 540 60C720 20 900 100 1080 60C1260 20 1350 80 1440 60V0H0V60Z" fill="#f1f5f9"/>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Projects</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <article className="group bg-white/80 backdrop-blur rounded-3xl p-6 shadow-[0_10px_40px_-10px_rgba(2,6,23,0.15)] ring-1 ring-slate-200 hover:shadow-[0_20px_60px_-15px_rgba(2,6,23,0.2)] transition-all">
            <div className="aspect-[16/9] rounded-2xl overflow-hidden ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
                alt="ESP32 hardware project"
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="mt-4 text-2xl font-semibold text-slate-800">Air Quality Monitoring & Alert System (ESP32 + Gas Sensors + Blynk IoT)</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              The portfolio should showcase my project titled ‘Air Quality Monitoring & Alert System (ESP32 + Gas Sensors + Blynk IoT).’ It is an IoT-based safety system that uses an ESP32 and gas sensors to measure real-time air quality. Sensor values are processed through Python and transmitted to the user via the Blynk IoT app. When the air quality crosses unsafe thresholds, the system immediately sends push notifications to the user’s phone and triggers automated email alerts. I developed the firmware logic in Python, integrated Blynk for communication, calibrated the sensors, and implemented the full alert workflow.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['ESP32','Gas Sensors','Python','Blynk IoT','Wi‑Fi'].map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-medium ring-1 ring-indigo-100">{tag}</span>
              ))}
            </div>
          </article>
          <div className="hidden md:flex flex-col justify-center">
            <div className="rounded-3xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(2,6,23,0.15)] ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1600&auto=format&fit=crop"
                alt="Osaka pastel skyline"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
