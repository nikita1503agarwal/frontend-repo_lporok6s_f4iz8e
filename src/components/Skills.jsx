import React from 'react'

const Skills = () => {
  return (
    <section id="skills" className="relative bg-white">
      <div className="relative max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Skills</h2>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-6 ring-1 ring-slate-200 shadow-[0_10px_30px_-10px_rgba(2,6,23,0.12)]">
            <h3 className="text-xl font-semibold text-slate-800">Technical</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              My technical skill set includes C, C++, Python, Java, ESP32, Arduino, basic STM32, Blynk IoT, Wi‑Fi and IoT dashboards, circuit prototyping, soldering, Git, Linux, and beginner-level KiCad.
            </p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-6 ring-1 ring-slate-200 shadow-[0_10px_30px_-10px_rgba(2,6,23,0.12)]">
            <h3 className="text-xl font-semibold text-slate-800">Soft</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              My soft skills include problem-solving, debugging, clear communication, rapid learning, attention to detail, team collaboration, time management, and ongoing Japanese language development at the JLPT N3 level.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
