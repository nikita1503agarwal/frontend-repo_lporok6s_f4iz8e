import React from 'react'

const InfoSections = () => {
  return (
    <section className="relative bg-white">
      <div className="relative max-w-6xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="rounded-3xl p-6 ring-1 ring-slate-200 bg-white shadow-[0_10px_30px_-10px_rgba(2,6,23,0.12)]">
            <h3 className="text-lg font-semibold text-slate-800">Achievements</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              My achievements include successfully clearing JLPT N5, completing the NPTEL Soft Skills certification, and completing the NPTEL IoT course. More details are available on my LinkedIn profile.
            </p>
          </div>
          <div className="rounded-3xl p-6 ring-1 ring-slate-200 bg-white shadow-[0_10px_30px_-10px_rgba(2,6,23,0.12)]">
            <h3 className="text-lg font-semibold text-slate-800">Languages</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              I can speak English, Hindi, Tamil, Telugu, and Japanese.
            </p>
          </div>
          <div className="rounded-3xl p-6 ring-1 ring-slate-200 bg-white shadow-[0_10px_30px_-10px_rgba(2,6,23,0.12)]">
            <h3 className="text-lg font-semibold text-slate-800">Contact</h3>
            <p className="mt-3 text-slate-600 leading-relaxed">
              My contact details are: Email — <a className="text-indigo-600 hover:text-indigo-700 underline" href="mailto:mrityun2007jay@gmail.com">mrityun2007jay@gmail.com</a>, LinkedIn — <a className="text-indigo-600 hover:text-indigo-700 underline" href="https://www.linkedin.com/in/mrityun-jay-g-270351327" target="_blank" rel="noreferrer">www.linkedin.com/in/mrityun-jay-g-270351327</a>, GitHub — <a className="text-indigo-600 hover:text-indigo-700 underline" href="https://github.com/Mrityun-jay18" target="_blank" rel="noreferrer">https://github.com/Mrityun-jay18</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InfoSections
