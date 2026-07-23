import { ArrowDown, ArrowRight, Mail, Sparkles, Shield, Clock } from 'lucide-react';
import { HeroVisual } from './HeroVisual';

export function HeroBlock() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center overflow-hidden pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ── Left Column — Editorial Content ──────── */}
          <div className="relative z-20">
            {/* AI Automation Badge */}
            <div
              className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-8"
              style={{
                animation: 'animationIn 0.8s ease-out forwards',
                opacity: 0,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#6F7FB7] animate-lumina-pulse" />
              <span className="text-xs font-medium text-zinc-400 tracking-wide uppercase">
                AI Automation Studio
              </span>
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[1.1] mb-6"
              style={{
                fontFamily: "'Geist', 'Inter', sans-serif",
                animation: 'animationIn 0.8s ease-out 100ms forwards',
                opacity: 0,
              }}
            >
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-[#6F7FB7] to-[#9BA8D4] bg-clip-text text-transparent">
                Hari.
              </span>
            </h1>

            {/* Founder Description */}
            <p
              className="text-base sm:text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-lg mb-10"
              style={{
                animation: 'animationIn 0.8s ease-out 200ms forwards',
                opacity: 0,
              }}
            >
              Founder of pennyworth.ai. I build AI operating systems,
              automation ecosystems, and premium web experiences that
              transform how businesses operate.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-3 sm:gap-4"
              style={{
                animation: 'animationIn 0.8s ease-out 300ms forwards',
                opacity: 0,
              }}
            >
              {/* Primary CTA */}
              <a
                href="#projects"
                className="double-text-btn inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 sm:px-7 py-3 text-sm font-medium text-[#09090b] transition-all duration-500 hover:bg-zinc-200 hover:shadow-lg hover:shadow-white/10"
              >
                <span className="btn-text-visible flex items-center gap-2">
                  View Projects
                  <ArrowDown className="w-4 h-4" />
                </span>
                <span className="btn-text-hidden">
                  See my work
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="mailto:hariprasadshadowoperator@gmail.com"
                className="double-text-btn glass-card inline-flex items-center justify-center gap-2 rounded-full px-6 sm:px-7 py-3 text-sm font-medium text-white hover:border-white/15"
              >
                <span className="btn-text-visible flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </span>
                <span className="btn-text-hidden">
                  <Mail className="w-4 h-4" />
                  Let's talk
                </span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div
              className="mt-10 sm:mt-12 flex flex-wrap items-center gap-x-6 gap-y-3"
              style={{
                animation: 'animationIn 0.8s ease-out 400ms forwards',
                opacity: 0,
              }}
            >
              <div className="flex items-center gap-2 text-zinc-500">
                <Sparkles className="w-3.5 h-3.5 text-[#6F7FB7]" />
                <span className="text-xs font-medium">AI-First Approach</span>
              </div>
              <div className="w-px h-3 bg-zinc-800 hidden sm:block" />
              <div className="flex items-center gap-2 text-zinc-500">
                <Shield className="w-3.5 h-3.5 text-emerald-400/70" />
                <span className="text-xs font-medium">Enterprise Grade</span>
              </div>
              <div className="w-px h-3 bg-zinc-800 hidden sm:block" />
              <div className="flex items-center gap-2 text-zinc-500">
                <Clock className="w-3.5 h-3.5 text-amber-400/70" />
                <span className="text-xs font-medium">120+ Days Training</span>
              </div>
            </div>

            {/* Scroll hint */}
            <div
              className="mt-10 sm:mt-14 flex items-center gap-3 text-zinc-600"
              style={{
                animation: 'animationIn 0.8s ease-out 500ms forwards',
                opacity: 0,
              }}
            >
              <div className="w-px h-8 bg-gradient-to-b from-zinc-600 to-transparent" />
              <span className="text-xs uppercase tracking-widest">Scroll to explore</span>
            </div>
          </div>

          {/* ── Right Column — Animated Visual Composition ── */}
          <div className="hidden lg:block relative">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
