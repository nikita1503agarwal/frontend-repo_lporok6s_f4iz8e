import React from 'react'

const About = () => {
  return (
    <section id="about" className="relative bg-white">
      {/* subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-rose-400 via-indigo-400 to-sky-400"/>
      <div className="relative max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800">About Me</h2>
        <div className="mt-6 space-y-5 text-slate-700 leading-relaxed">
          <p>
            I’m an engineering student specializing in IoT, embedded systems, and sensor-driven hardware solutions. My focus lies in designing efficient, real-world systems that merge reliability with innovation, while steadily upskilling toward contributing to Japan’s advanced technology ecosystem. I balance hands-on experience with continuous learning—both academically and linguistically—as part of my broader professional growth.
          </p>
          <p>
            Now that the corporate pitch is out of the way—hi, I’m MJ, a guy who spends half his time debugging sensors and the other half wondering if the code is debugging me back. When I’m not teaching microcontrollers how to behave, I’m busy studying Japanese and pretending I’m already working somewhere in Tokyo with a coffee in one hand and a soldering iron in the other. I’m also a travel dreamer at heart—someone who wants to hop cities, chase new cultures, get lost in airports, and collect stories like Pokémon. Every new place gives me fresh ideas, fresh energy, and occasionally… fresh food poisoning. But we move. And when my brain decides it’s had enough circuits and kanji, I switch to my keyboard and play music like I’m scoring the soundtrack of my own anime arc.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
