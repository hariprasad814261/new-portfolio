import { useState } from 'react';

export function About() {
  const [isColor, setIsColor] = useState(false);

  return (
    <section id="story" className="relative py-24 md:py-32">
      <main className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* ── Text Content ──────────────────────── */}
        <div className="lg:col-span-7 space-y-8 animate-on-scroll">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-px bg-gradient-to-r from-[#6F7FB7] to-transparent" />
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
              My Story
            </span>
          </div>

          <h2
            className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight"
            style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
          >
            Building the future,<br />
            <span className="text-zinc-500">one system at a time.</span>
          </h2>

          <div className="space-y-6 text-base sm:text-lg text-zinc-400 font-light leading-relaxed">
            <p className="animate-on-scroll" data-delay="100">
              I am a 19-year-old second-year college student and the sole founder of{' '}
              <strong className="text-white font-medium">pennyworth.ai</strong>. I'm building this
              startup from the ground up, bringing the raw hunger and relentless work ethic of a
              broke college student to every single project I take on.
            </p>

            <p className="animate-on-scroll" data-delay="200">
              What I lack in decades of corporate experience, I make up for with absolute focus. My
              goal is to engineer robust, next-generation technology solutions that resolve critical
              operational bottlenecks for modern businesses. Over the past 120 days, I have
              rigorously trained and practiced identifying and eliminating friction for business
              owners by creating highly personalized AI automation systems.
            </p>

            <p className="animate-on-scroll" data-delay="300">
              At our startup, we specialize in building sophisticated{' '}
              <strong className="text-white font-medium">
                Artificial Intelligence Operating Systems (AIOS)
              </strong>{' '}
              and{' '}
              <strong className="text-white font-medium">
                Artificial Intelligence Orchestration Systems (AIOS)
              </strong>
              . As part of this infrastructure, we have architected and deployed several advanced
              voice agents tailored to handle specific operational pain points, allowing complex
              operations to run entirely on autopilot.
            </p>

            <p className="animate-on-scroll" data-delay="400">
              Beyond AI infrastructure, my portfolio includes high-end, professional web development
              and specialized animal-focused animation tools. I strictly limit my roster to just two
              or three clients at a time, ensuring that every line of code I write adds meaningful,
              transformative value to your business.
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-6 pt-4 animate-on-scroll" data-delay="500">
            {[
              { value: '120+', label: 'Days of Training' },
              { value: '2–3', label: 'Clients at a Time' },
              { value: '∞', label: 'Dedication' },
            ].map((stat) => (
              <div key={stat.label} className="glass-card rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-white mb-1" style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-xs text-zinc-500 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Founder Images ───────────────────── */}
        <div
          className="lg:col-span-5 relative w-full h-[400px] sm:h-[500px] lg:h-[600px] group mt-10 lg:mt-0 cursor-pointer animate-on-scroll"
          data-delay="200"
          onClick={() => setIsColor(!isColor)}
        >
          {/* Main Image */}
          <div className="absolute inset-0 w-full h-full glass-card glass-highlight rounded-3xl overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]">
            <img
              src="/founder.jpeg"
              alt="Hari — Founder of pennyworth.ai"
              className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 ${
                isColor ? 'grayscale-0' : 'grayscale hover:grayscale-0'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent pointer-events-none" />
          </div>

          {/* Floating secondary image */}
          <div className="absolute -bottom-6 -left-6 w-44 h-52 sm:w-52 sm:h-60 glass-card glass-highlight rounded-2xl overflow-hidden z-20 hidden sm:block transition-all duration-500 group-hover:-rotate-3 group-hover:-translate-y-2 animate-lumina-float">
            <img
              src="/founder2.jpeg"
              alt="Hari behind the scenes"
              className={`w-full h-full object-cover transition-all duration-500 ${
                isColor ? 'grayscale-0' : 'grayscale hover:grayscale-0'
              }`}
            />
          </div>
        </div>
      </main>
    </section>
  );
}
