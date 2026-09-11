'use client';

/**
 * 03 — CONTATO
 * Título grande em serifa, links como linhas em régua com seta que desliza no hover.
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/language-context';

const contactLinks = {
  github: 'https://github.com/arthurvtl',
  linkedin: 'https://www.linkedin.com/in/arthurvtl/',
  email: 'arthur.vitall05@gmail.com',
};

export default function ContactSection() {
  const { t, language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  const rows = [
    { label: 'GitHub', handle: '@arthurvtl', href: contactLinks.github, ext: true },
    { label: 'LinkedIn', handle: '/in/arthurvtl', href: contactLinks.linkedin, ext: true },
    { label: 'Email', handle: contactLinks.email, href: `mailto:${contactLinks.email}`, ext: false },
  ];

  return (
    <section id="contact" className="border-t border-line py-20 md:py-28">
      <div className="container-page">
        <div ref={ref} className="grid gap-10 md:grid-cols-[180px_1fr] md:gap-16">
          <div className="md:sticky md:top-28 md:self-start">
            <p className="num text-sm text-ink/40">03</p>
            <h2 className="mt-1 font-display text-2xl text-ink">
              {t?.nav?.contact ?? 'Contato'}
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <h3 className="font-display text-4xl leading-[1.05] tracking-[-0.02em] text-ink md:text-5xl">
              {t?.contact?.title ?? 'Vamos conversar?'}
            </h3>
            <p className="measure mt-5 text-lg leading-relaxed text-ink/65">
              {t?.contact?.subtitle ?? ''}
            </p>

            <ul className="mt-10 border-t border-ink">
              {rows.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target={r.ext ? '_blank' : undefined}
                    rel={r.ext ? 'noopener noreferrer' : undefined}
                    className="group -mx-3 flex items-baseline justify-between gap-6 border-b border-line px-3 py-6 transition-colors hover:bg-wash"
                  >
                    <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span className="font-display text-xl text-ink transition-colors group-hover:text-blue">
                        {r.label}
                      </span>
                      <span className="font-mono text-xs tracking-wide text-ink/45">
                        {r.handle}
                      </span>
                    </span>
                    <span className="font-mono text-ink/40 transition-transform group-hover:translate-x-1 group-hover:text-blue">
                      {r.ext ? '↗' : '→'}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
