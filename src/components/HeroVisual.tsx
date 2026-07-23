import { Bot, Workflow, BarChart3, MessageSquare, Database, Zap, Code2, Layers, GitBranch, Activity } from 'lucide-react';

/**
 * HeroVisual — Animated floating composition for the hero right column.
 * Features glass cards representing AI workflow nodes, dashboard widgets,
 * code snippets, chat interfaces, and analytics panels.
 * All animations are GPU-accelerated (transform + opacity only).
 */

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  duration?: number;
}

function FloatingCard({ children, className = '', style = {}, delay = 0, duration = 4 }: FloatingCardProps) {
  return (
    <div
      className={`absolute glass-card glass-highlight rounded-2xl p-4 transition-all duration-700 hover:scale-105 hover:z-50 ${className}`}
      style={{
        ...style,
        animation: `animationIn 0.8s ease-out ${delay}ms forwards, lumina-float ${duration}s ease-in-out ${delay / 1000}s infinite`,
        opacity: 0,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
}

export function HeroVisual() {
  return (
    <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[650px] flex items-center justify-center pointer-events-none">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] scale-[0.4] sm:scale-50 md:scale-[0.65] lg:scale-[0.75] xl:scale-[0.85] pointer-events-auto">
        
        {/* ── Central orchestration node (AI Engine) ── */}
        <FloatingCard
          className="w-[180px] sm:w-[200px] z-30"
          style={{ left: '300px', top: '200px' }}
          delay={200}
          duration={5}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6F7FB7] to-[#4B5A8A] flex items-center justify-center">
              <Bot className="w-4 h-4 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold text-white">AI Engine</div>
              <div className="text-[10px] text-zinc-500">GPT-4o • Active</div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-lumina-pulse" />
            <span className="text-[10px] text-emerald-400 font-medium">Processing</span>
          </div>
          {/* Connection lines */}
          <div className="absolute -top-6 left-1/2 w-px h-6 bg-gradient-to-b from-transparent to-[#6F7FB7]/30" />
          <div className="absolute -bottom-6 left-1/2 w-px h-6 bg-gradient-to-b from-[#6F7FB7]/30 to-transparent" />
          <div className="absolute top-1/2 -left-6 h-px w-6 bg-gradient-to-r from-transparent to-[#6F7FB7]/30" />
          <div className="absolute top-1/2 -right-6 h-px w-6 bg-gradient-to-r from-[#6F7FB7]/30 to-transparent" />
        </FloatingCard>

        {/* ── Workflow Pipeline Card (Automation) ── */}
        <FloatingCard
          className="w-[170px] sm:w-[190px] z-20"
          style={{ left: '80px', top: '30px' }}
          delay={350}
          duration={4.5}
        >
          <div className="flex items-center gap-2 mb-3">
            <Workflow className="w-3.5 h-3.5 text-[#6F7FB7]" />
            <span className="text-[11px] font-medium text-zinc-300">Automation</span>
          </div>
          <div className="space-y-2">
            {['Lead Capture', 'AI Analysis', 'Auto-Reply'].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <div className={`w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-bold ${
                  i < 2 ? 'bg-[#6F7FB7]/20 text-[#6F7FB7]' : 'bg-zinc-800 text-zinc-500'
                }`}>
                  {i + 1}
                </div>
                <span className={`text-[10px] ${i < 2 ? 'text-zinc-300' : 'text-zinc-600'}`}>{step}</span>
                {i < 2 && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-400/80" />}
              </div>
            ))}
          </div>
        </FloatingCard>

        {/* ── Analytics Panel ── */}
        <FloatingCard
          className="w-[160px] sm:w-[180px] z-20"
          style={{ left: '556px', top: '18px' }}
          delay={500}
          duration={5.5}
        >
          <div className="flex items-center gap-2 mb-3">
            <BarChart3 className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-[11px] font-medium text-zinc-300">Analytics</span>
          </div>
          <div className="flex items-end gap-1 h-12">
            {[35, 52, 45, 68, 55, 72, 60, 78, 65, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm transition-all duration-500"
                style={{
                  height: `${h}%`,
                  background: i >= 7
                    ? 'linear-gradient(to top, #6F7FB7, #9BA8D4)'
                    : 'rgba(255,255,255,0.06)',
                  animation: `lumina-scale 3s ease-in-out ${i * 0.15}s infinite`,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-[9px] text-zinc-600">Mon</span>
            <span className="text-[9px] text-zinc-600">Sun</span>
          </div>
        </FloatingCard>

        {/* ── Chat Interface (Voice Agent) ── */}
        <FloatingCard
          className="w-[175px] sm:w-[195px] z-25"
          style={{ left: '24px', top: '380px' }}
          delay={650}
          duration={4}
        >
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-[#9BA8D4]" />
            <span className="text-[11px] font-medium text-zinc-300">Voice Agent</span>
          </div>
          <div className="space-y-2">
            <div className="bg-white/[0.04] rounded-lg px-2.5 py-1.5">
              <p className="text-[9px] text-zinc-400">Schedule appointment for Dr. Patel</p>
            </div>
            <div className="bg-[#6F7FB7]/10 rounded-lg px-2.5 py-1.5 ml-4">
              <p className="text-[9px] text-[#9BA8D4]">Done! Booked for Thursday 2pm ✓</p>
            </div>
          </div>
        </FloatingCard>

        {/* ── Code Snippet (Pipeline) ── */}
        <FloatingCard
          className="w-[165px] sm:w-[185px] z-20"
          style={{ left: '575px', top: '410px' }}
          delay={800}
          duration={6}
        >
          <div className="flex items-center gap-2 mb-2">
            <Code2 className="w-3.5 h-3.5 text-amber-400/70" />
            <span className="text-[11px] font-medium text-zinc-300">Pipeline</span>
            <span className="text-[9px] text-zinc-600 ml-auto font-mono">.ts</span>
          </div>
          <div className="font-mono text-[9px] space-y-0.5 bg-white/[0.02] rounded-lg p-2">
            <div><span className="text-purple-400/80">const</span> <span className="text-[#9BA8D4]">agent</span> <span className="text-zinc-500">=</span></div>
            <div className="pl-2"><span className="text-amber-400/70">createAgent</span><span className="text-zinc-500">{"({"}</span></div>
            <div className="pl-4"><span className="text-zinc-400">model:</span> <span className="text-emerald-400/80">'gpt-4o'</span></div>
            <div className="pl-2"><span className="text-zinc-500">{"})"}</span></div>
          </div>
        </FloatingCard>

        {/* ── Database / Knowledge Base Card ── */}
        <FloatingCard
          className="w-[150px] sm:w-[170px] z-15"
          style={{ left: '240px', top: '488px' }}
          delay={950}
          duration={5}
        >
          <div className="flex items-center gap-2 mb-2">
            <Database className="w-3.5 h-3.5 text-zinc-400" />
            <span className="text-[11px] font-medium text-zinc-300">Knowledge</span>
          </div>
          <div className="space-y-1.5">
            {['FAQ Responses', 'Client Data', 'Templates'].map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                <Layers className="w-2.5 h-2.5 text-zinc-600" />
                <span className="text-[9px] text-zinc-500">{item}</span>
                <span className="text-[8px] text-zinc-700 ml-auto">{['2.4k', '847', '156'][i]}</span>
              </div>
            ))}
          </div>
        </FloatingCard>

        {/* ── Micro status badges ── */}
        <div
          className="absolute glass-card rounded-full px-3 py-1 flex items-center gap-1.5 z-10"
          style={{ left: '360px', top: '132px', animation: 'animationIn 0.8s ease-out 1100ms forwards, lumina-float 7s ease-in-out 0.5s infinite', opacity: 0 }}
        >
          <Zap className="w-2.5 h-2.5 text-amber-400" />
          <span className="text-[9px] text-zinc-400 font-medium">12 automations</span>
        </div>

        <div
          className="absolute glass-card rounded-full px-3 py-1 flex items-center gap-1.5 z-10"
          style={{ left: '380px', top: '360px', animation: 'animationIn 0.8s ease-out 1200ms forwards, lumina-float 6s ease-in-out 1s infinite', opacity: 0 }}
        >
          <GitBranch className="w-2.5 h-2.5 text-[#6F7FB7]" />
          <span className="text-[9px] text-zinc-400 font-medium">3 pipelines</span>
        </div>

        <div
          className="absolute glass-card rounded-full px-3 py-1 flex items-center gap-1.5 z-10"
          style={{ left: '584px', top: '290px', animation: 'animationIn 0.8s ease-out 1300ms forwards, lumina-float 5s ease-in-out 2s infinite', opacity: 0 }}
        >
          <Activity className="w-2.5 h-2.5 text-emerald-400" />
          <span className="text-[9px] text-zinc-400 font-medium">99.9% uptime</span>
        </div>

        {/* ── Subtle connection lines ── */}
        <svg className="absolute inset-0 w-full h-full z-[5] pointer-events-none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgba(111,127,183,0)" />
              <stop offset="50%" stopColor="rgba(111,127,183,0.08)" />
              <stop offset="100%" stopColor="rgba(111,127,183,0)" />
            </linearGradient>
          </defs>
          <line x1="20%" y1="20%" x2="50%" y2="40%" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="80%" y1="15%" x2="50%" y2="40%" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="15%" y1="70%" x2="50%" y2="40%" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="82%" y1="75%" x2="50%" y2="40%" stroke="url(#lineGrad)" strokeWidth="1" />
          <line x1="45%" y1="90%" x2="50%" y2="40%" stroke="url(#lineGrad)" strokeWidth="1" />
        </svg>
      </div>
    </div>
  );
}
