'use client';

/**
 * "NÃO SE ENGANE" — bloco azul cobalto chapado, full-bleed, texto branco.
 * É o momento de contraste do site: inverte a paleta uma única vez, sem gradiente.
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/language-context';

export default function DisclaimerSection() {
  const { language } = useLanguage();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const content = {
    'pt-BR': {
      badge: 'Um pequeno aviso',
      title: 'Não se engane.',
      paragraphs: [
        'Apesar deste site, <strong>não sou desenvolvedor web.</strong> Meu foco está em transformar dados brutos em insight de valor para a empresa ou cliente final, criar automações inteligentes e facilitar o entendimento da informação.',
        'Minha paixão está em mergulhar em bases de dados complexas, construir pipelines de ETL eficientes, desenvolver dashboards que contam histórias e escrever scripts que automatizam processos repetitivos — liberando tempo para o que realmente importa: <strong>análise e tomada de decisão.</strong>',
        'Python, SQL, Pandas e muita curiosidade são as ferramentas do dia a dia. A web? É apenas mais um canal para apresentar o trabalho que faço nos bastidores com dados.',
      ],
      reflection: {
        title: 'Uma reflexão sobre IA',
        text: 'Devemos usar a Inteligência Artificial com sabedoria — tanto para o próprio aprendizado quanto para expor nossas habilidades de forma mais eficiente. A IA não substitui o conhecimento técnico; potencializa quem sabe usá-la.',
        confession:
          'Este site foi construído com auxílio de IA, e não tenho vergonha de admitir. O que importa é saber <strong>o que pedir</strong>, <strong>como validar</strong> e <strong>quando ajustar</strong>. No fim, a criatividade e a visão continuam humanas.',
      },
    },
    'en-US': {
      badge: 'A small disclaimer',
      title: "Don't be fooled.",
      paragraphs: [
        "Despite this website, <strong>I'm not a web developer.</strong> My focus is on turning raw data into valuable insight for the company or end client, building intelligent automations, and making information easier to understand.",
        'My passion lies in diving into complex databases, building efficient ETL pipelines, developing dashboards that tell stories, and writing scripts that automate repetitive work — freeing up time for what really matters: <strong>analysis and decision-making.</strong>',
        "Python, SQL, Pandas and a lot of curiosity are the everyday tools. The web? It's just another channel to showcase the work I do behind the scenes with data.",
      ],
      reflection: {
        title: 'A reflection on AI',
        text: "We should use Artificial Intelligence wisely — both for our own learning and to showcase our skills more efficiently. AI doesn't replace technical knowledge; it empowers those who know how to use it.",
        confession:
          "This website was built with AI assistance, and I'm not ashamed to admit it. What matters is knowing <strong>what to ask</strong>, <strong>how to validate</strong>, and <strong>when to adjust</strong>. In the end, creativity and vision stay human.",
      },
    },
  };

  const t = content[language];
  const strongCls =
    '[&_strong]:font-semibold [&_strong]:text-white [&_strong]:underline [&_strong]:decoration-white/40 [&_strong]:underline-offset-2';

  return (
    <section className="bg-blue text-white">
      <div ref={ref} className="container-page py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-white/60">
            {t.badge}
          </p>

          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-[-0.02em] md:text-6xl">
            {t.title}
          </h2>

          <div className={`mt-8 space-y-5 text-lg leading-relaxed text-white/85 ${strongCls}`}>
            {t.paragraphs.map((p, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
            ))}
          </div>

          <div className="mt-10 border border-white/25 p-6 md:p-8">
            <h3 className="font-display text-2xl">{t.reflection.title}</h3>
            <p className="mt-4 leading-relaxed text-white/80">{t.reflection.text}</p>
            <div className="mt-5 flex gap-3 bg-white/10 p-4">
              <span className="select-none font-mono text-white/50">/</span>
              <p
                className={`leading-relaxed text-white/80 ${strongCls}`}
                dangerouslySetInnerHTML={{ __html: t.reflection.confession }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
