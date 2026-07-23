import { ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  client: string;
  description: string;
  imageUrl: string;
  liveLink: string;
}

const projects: Project[] = [
  {
    id: '01',
    title: "Mr. Moglee's Restaurant",
    client: 'Restaurant & Hospitality',
    description:
      'A premium, highly-animated dining experience website featuring seamless navigation and a modern aesthetic.',
    imageUrl: '/projects/mrmogleewebsite.png',
    liveLink: 'https://mrmogglee.netlify.app/',
  },
  {
    id: '02',
    title: 'Matcha Tea',
    client: 'E-Commerce & Beverage',
    description:
      'A serene and organic e-commerce storefront designed to highlight premium matcha products.',
    imageUrl: '/projects/matchawebsite.png',
    liveLink: 'https://matchatea1.netlify.app/',
  },
  {
    id: '03',
    title: 'Keyboard Animation',
    client: 'Creative Interactive',
    description:
      'An interactive showcase featuring complex 3D-like keyboard animations and engaging micro-interactions.',
    imageUrl: '/projects/keyboardanimation.png',
    liveLink: 'https://keyboardanimation1.netlify.app/',
  },
  {
    id: '04',
    title: 'Porsche Showcase',
    client: 'Automotive & Luxury',
    description:
      'A sleek, high-performance landing page reflecting the engineering and elegance of luxury automotive brands.',
    imageUrl: '/projects/porchewebsite.png',
    liveLink: 'https://porschewebsite1.netlify.app/',
  },
  {
    id: '05',
    title: 'The Power of Automation AI',
    client: 'Ample AI',
    description:
      'Unlock 72% cost savings and 24/7 customer engagement. Replace your ₹30,000/month receptionist with AI for ₹8,500/month.',
    imageUrl: '/projects/ample.ai.png',
    liveLink: 'https://merry-blancmange-dbfa0d.netlify.app/',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <main className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        {/* ── Section Header ───────────────────── */}
        <div className="max-w-3xl mb-16 md:mb-20 animate-on-scroll">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-[#6F7FB7] to-transparent" />
            <span className="text-xs font-medium text-zinc-500 uppercase tracking-widest">
              Portfolio
            </span>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] text-white leading-tight mb-6"
            style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
          >
            Selected Works
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 font-light leading-relaxed">
            A curated showcase of high-end digital products, AI automation ecosystems, and
            award-winning web platforms.
          </p>
        </div>

        {/* ── Project Grid ─────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, i) => (
            <a
              key={project.id}
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative glass-card glass-highlight rounded-3xl overflow-hidden
                transition-all duration-700 ease-[cubic-bezier(0.15,0.83,0.66,1)]
                hover:scale-[1.02] hover:z-[100] hover:shadow-2xl hover:shadow-[#6F7FB7]/5
                cursor-pointer block h-[400px] sm:h-[500px] md:h-[550px]
                animate-on-scroll
                ${project.id === '05' ? 'md:col-span-2 md:justify-self-center md:w-[calc(50%-1rem)]' : ''}`}
              data-delay={`${(i % 2) * 100}`}
            >
              {/* Project Image */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/50 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-end z-10">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-600 ease-out">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#6F7FB7] font-mono text-sm tracking-wider font-medium">
                      {project.id}
                    </span>
                    <div className="w-6 h-px bg-[#6F7FB7]/30" />
                    <span className="text-zinc-500 text-xs font-medium tracking-wider uppercase">
                      {project.client}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-2xl sm:text-3xl text-white font-semibold tracking-tight mb-3"
                    style={{ fontFamily: "'Geist', 'Inter', sans-serif" }}
                  >
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 font-light text-sm sm:text-base leading-relaxed max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 mb-6">
                    {project.description}
                  </p>

                  {/* Visit button */}
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-white glass-card rounded-full px-5 py-2.5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200 hover:bg-white/10">
                    Visit Live Site
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </section>
  );
}
