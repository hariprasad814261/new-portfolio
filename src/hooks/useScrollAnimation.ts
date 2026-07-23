import { useEffect } from 'react';

/**
 * useScrollAnimation — IntersectionObserver-based scroll reveal
 * Observes all elements with class `.animate-on-scroll` and adds
 * `.is-visible` when they enter the viewport.
 * 
 * Uses a MutationObserver to pick up dynamically-rendered elements.
 */
export function useScrollAnimation() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe initial elements
    const observeAll = () => {
      document.querySelectorAll('.animate-on-scroll:not(.is-visible)').forEach((el) => {
        io.observe(el);
      });
    };

    // Initial pass
    observeAll();

    // Re-observe when new elements appear (React rendering)
    const mo = new MutationObserver(() => {
      observeAll();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
