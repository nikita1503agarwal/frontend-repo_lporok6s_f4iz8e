import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white to-slate-50">
      <div className="absolute inset-x-0 -top-10"> 
        <svg className="w-full" viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 40C240 0 480 80 720 40C960 0 1200 80 1440 40V80H0V40Z" fill="#f8fafc"/>
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16">
        <div className="grid md:grid-cols-2 gap-8 items-end">
          <div>
            <p className="text-slate-600">Crafted with curiosity and soft neon dreams.</p>
          </div>
          <div className="relative h-24">
            {/* Simple Mt. Fuji silhouette */}
            <svg className="absolute bottom-0 right-0 w-full h-24" viewBox="0 0 600 120" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <defs>
                <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e0e7ff"/>
                  <stop offset="100%" stopColor="#fdf2f8"/>
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="600" height="120" fill="url(#sky)"/>
              <path d="M50 110 L200 60 L260 80 L310 50 L420 110 Z" fill="#c7d2fe" opacity="0.7"/>
              <path d="M215 68 L230 63 L240 75 L220 80 Z" fill="#ffffff" opacity="0.9"/>
              <circle cx="480" cy="40" r="14" fill="#fde68a" opacity="0.8"/>
              <g opacity="0.25" fill="#94a3b8">
                <rect x="470" y="86" width="8" height="18" rx="2"/>
                <rect x="482" y="82" width="10" height="22" rx="2"/>
                <rect x="496" y="88" width="8" height="16" rx="2"/>
              </g>
            </svg>
          </div>
        </div>
        <div className="mt-6 text-sm text-slate-500">© {new Date().getFullYear()} Mrityun Jay Garnipudi</div>
      </div>
    </footer>
  )
}

export default Footer
