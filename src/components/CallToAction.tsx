import { ArrowRight, Mail } from 'lucide-react';

export function CallToAction() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        <div className="relative glass-card rounded-3xl overflow-hidden animate-on-scroll">
          {/* Background gradient effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#131316] to-[#0e0e11]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#6F7FB7]/[0.04] blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/[0.01] blur-[80px] pointer-events-none" />

          {/* Content */}
          <div className="relative z-10 py-20 md:py-28 px-6 sm:px-12 text-center">
            <div className="max-w-2xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-8">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-lumina-pulse" />
                <span className="text-xs font-medium text-zinc-400 tracking-wide">
                  Available for new projects
                </span>
              </div>

              {/* Heading */}
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-[-0.03em] text-white leading-tight mb-6"
                style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
              >
                Ready to build something{' '}
                <span className="bg-gradient-to-r from-[#6F7FB7] to-[#9BA8D4] bg-clip-text text-transparent">
                  extraordinary?
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-lg text-zinc-400 font-light leading-relaxed mb-10 max-w-lg mx-auto">
                Let's create an AI-powered system or a stunning digital experience that transforms
                your business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:hariprasadshadowoperator@gmail.com"
                  className="double-text-btn inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-medium text-[#09090b] transition-all duration-500 hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
                >
                  <span className="btn-text-visible flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </span>
                  <span className="btn-text-hidden">
                    Let's talk
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>

                <a
                  href="#projects"
                  className="double-text-btn glass-card inline-flex items-center justify-center gap-2 rounded-full px-8 py-3.5 text-sm font-medium text-white hover:border-white/15"
                >
                  <span className="btn-text-visible">View Projects</span>
                  <span className="btn-text-hidden">
                    See my work
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-600">
          <span>© {new Date().getFullYear()} pennyworth.ai. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-zinc-400 transition-colors">Home</a>
            <a href="#story" className="hover:text-zinc-400 transition-colors">Story</a>
            <a href="#projects" className="hover:text-zinc-400 transition-colors">Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
}
