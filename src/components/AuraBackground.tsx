import { useEffect, useRef, useState } from 'react';

/**
 * AuraBackground — Premium layered background inspired by Linear/Stripe/Vercel.
 * No video. Pure CSS + minimal JS for mouse-reactive glow and floating particles.
 * GPU-accelerated via transform/opacity only.
 */
export function AuraBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const rafRef = useRef<number>(0);
  const targetRef = useRef({ x: 50, y: 50 });
  const currentRef = useRef({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };
    };

    const animate = () => {
      // Smooth lerp toward target
      currentRef.current.x += (targetRef.current.x - currentRef.current.x) * 0.03;
      currentRef.current.y += (targetRef.current.y - currentRef.current.y) * 0.03;
      setMouse({ x: currentRef.current.x, y: currentRef.current.y });
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* ── Layer 0: Deep obsidian base ─────────────────────── */}
      <div className="absolute inset-0 bg-[#09090b]" />

      {/* ── Layer 1: Noise texture overlay ──────────────────── */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* ── Layer 2: Animated thin grid lines ──────────────── */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          animation: 'gridDrift 30s linear infinite',
        }}
      />

      {/* ── Layer 3: Large radial gradient — top center ────── */}
      <div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1200px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(111,127,183,0.06) 0%, transparent 70%)',
        }}
      />

      {/* ── Layer 4: Large radial gradient — bottom right ─── */}
      <div
        className="absolute bottom-[-15%] right-[-10%] w-[1000px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(75,90,138,0.04) 0%, transparent 65%)',
        }}
      />

      {/* ── Layer 5: Mouse-reactive glow ───────────────────── */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full transition-none"
        style={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(111,127,183,0.07) 0%, transparent 60%)',
          willChange: 'left, top',
        }}
      />

      {/* ── Layer 6: Massive elliptical outlines ───────────── */}
      <div
        className="absolute left-1/2 top-[10%] -translate-x-1/2 border border-white/[0.025] rounded-full animate-lumina-pulse"
        style={{ width: '160vw', height: '160vw' }}
      />
      <div
        className="absolute left-1/2 top-[18%] -translate-x-1/2 border border-white/[0.015] rounded-full"
        style={{ width: '130vw', height: '130vw', animation: 'lumina-pulse 5s ease-in-out 1s infinite' }}
      />
      <div
        className="absolute left-1/2 top-[26%] -translate-x-1/2 border border-white/[0.01] rounded-full"
        style={{ width: '100vw', height: '100vw', animation: 'lumina-pulse 7s ease-in-out 2s infinite' }}
      />

      {/* ── Layer 7: Center vertical gradient beam ─────────── */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-zinc-500/[0.04] to-transparent" />

      {/* ── Layer 8: Horizontal gradient beam ──────────────── */}
      <div className="absolute left-0 top-[40%] w-full h-px bg-gradient-to-r from-transparent via-[#6F7FB7]/[0.03] to-transparent" />

      {/* ── Layer 9: Soft blurred glow circles ─────────────── */}
      <div className="absolute top-[5%] left-[15%] w-[400px] h-[400px] rounded-full bg-[#6F7FB7]/[0.02] blur-[100px] animate-lumina-float" />
      <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] rounded-full bg-white/[0.015] blur-[120px]" style={{ animation: 'lumina-float 5s ease-in-out 1.5s infinite' }} />
      <div className="absolute top-[50%] left-[60%] w-[250px] h-[250px] rounded-full bg-[#4B5A8A]/[0.025] blur-[80px]" style={{ animation: 'lumina-float 6s ease-in-out 0.5s infinite' }} />

      {/* ── Layer 10: Animated light streaks / gradient beams ─ */}
      <div
        className="absolute top-0 left-[30%] w-[1px] h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(111,127,183,0.08) 30%, transparent 60%)',
          animation: 'streakSlide 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-0 right-[25%] w-[1px] h-full"
        style={{
          background: 'linear-gradient(to bottom, transparent 20%, rgba(255,255,255,0.04) 50%, transparent 80%)',
          animation: 'streakSlide 10s ease-in-out 3s infinite',
        }}
      />

      {/* ── Layer 11: Floating light particles ─────────────── */}
      <div className="absolute inset-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/[0.15]"
            style={{
              width: `${1.5 + Math.random() * 2}px`,
              height: `${1.5 + Math.random() * 2}px`,
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
              animation: `particleFloat ${4 + Math.random() * 6}s ease-in-out ${Math.random() * 5}s infinite`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>

      {/* ── Layer 12: Glass reflection bands ────────────────── */}
      <div
        className="absolute top-[20%] left-0 w-full h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 30%, rgba(255,255,255,0.06) 50%, rgba(255,255,255,0.04) 70%, transparent 100%)',
          animation: 'lumina-highlight 6s ease-in-out infinite',
        }}
      />
      <div
        className="absolute top-[65%] left-0 w-full h-[1px]"
        style={{
          background: 'linear-gradient(90deg, transparent 10%, rgba(111,127,183,0.04) 40%, rgba(111,127,183,0.06) 60%, transparent 90%)',
          animation: 'lumina-highlight 8s ease-in-out 2s infinite',
        }}
      />

      {/* ── Layer 13: Aura lighting — upper ambient ────────── */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[30%] w-[900px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(111,127,183,0.04) 0%, transparent 60%)',
          animation: 'lumina-scale 10s ease-in-out infinite',
        }}
      />
    </div>
  );
}
