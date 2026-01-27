'use client';

/**
 * ===========================================
 * COMPONENTE: DISCLAIMER SECTION (OTIMIZADO)
 * ===========================================
 * 
 * Animações simplificadas para melhor performance.
 */

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Bot, Brain, Lightbulb } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function DisclaimerSection() {
  const { language } = useLanguage();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const content = {
    'pt-BR': {
      badge: '😉 Um pequeno aviso...',
      title: 'Não se engane!',
      paragraphs: [
        'Apesar deste site bonito, <strong>não sou desenvolvedor web!</strong> Meu verdadeiro foco está em transformar dados brutos em insights de valor para a empresa/cliente final, criar automações inteligentes e facilitar o entendimento da informação.',
        'Minha paixão está em mergulhar em bases de dados complexas, construir pipelines de ETL eficientes, desenvolver dashboards que contam histórias e criar scripts que automatizam processos repetitivos — liberando tempo para o que realmente importa: <strong>análise e tomada de decisão.</strong>',
        'Python, SQL, Pandas e muita curiosidade são minhas ferramentas do dia a dia. A web? Bem, ela é apenas mais um canal para apresentar o trabalho que faço nos bastidores com dados.',
      ],
      reflection: {
        title: 'Uma reflexão sobre IA',
        text: 'Devemos usar a Inteligência Artificial com sabedoria — tanto para nosso próprio aprendizado quanto para conseguirmos expor nossas habilidades de forma mais eficiente. A IA não substitui o conhecimento técnico, mas potencializa quem sabe usá-la.',
        confession: 'Este site foi construído com auxílio de IA, e não tenho vergonha de admitir. O importante é saber <strong>o que pedir</strong>, <strong>como validar</strong> e <strong>quando ajustar</strong>. No fim das contas, a criatividade e a visão continuam sendo humanas.',
      },
    },
    'en-US': {
      badge: '😉 A small disclaimer...',
      title: "Don't be fooled!",
      paragraphs: [
        "Despite this beautiful website, <strong>I'm not a web developer!</strong> My true focus is on transforming raw data into valuable insights for the company/end client, creating intelligent automations, and making information easier to understand.",
        "My passion lies in diving into complex databases, building efficient ETL pipelines, developing dashboards that tell stories, and creating scripts that automate repetitive processes — freeing up time for what really matters: <strong>analysis and decision-making.</strong>",
        "Python, SQL, Pandas, and lots of curiosity are my everyday tools. The web? Well, it's just another channel to showcase the work I do behind the scenes with data.",
      ],
      reflection: {
        title: 'A reflection on AI',
        text: "We should use Artificial Intelligence wisely — both for our own learning and to showcase our skills more efficiently. AI doesn't replace technical knowledge, but it empowers those who know how to use it.",
        confession: "This website was built with AI assistance, and I'm not ashamed to admit it. What matters is knowing <strong>what to ask</strong>, <strong>how to validate</strong>, and <strong>when to adjust</strong>. In the end, creativity and vision remain human.",
      },
    },
  };

  const t = content[language];

  // Animação simples de fade
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background gradient estático */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/10 via-background to-muted/10" />
      
      {/* Blobs decorativos estáticos */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-30" />
      
      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div variants={fadeIn} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              {t.badge}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
            <span className="text-gradient">{t.title}</span>
          </motion.h2>

          {/* Main content */}
          <motion.div variants={fadeIn} className="space-y-6 mb-12">
            {t.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-muted-foreground leading-relaxed text-center"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            ))}
          </motion.div>

          {/* Skills icons */}
          <motion.div variants={fadeIn} className="flex justify-center gap-8 mb-16">
            {[
              { icon: Brain, label: 'Data Analysis', color: 'text-primary' },
              { icon: Bot, label: 'Automation', color: 'text-secondary' },
              { icon: Lightbulb, label: 'Problem Solving', color: 'text-accent' },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 hover:scale-105 transition-transform"
              >
                <div className={`p-4 rounded-2xl bg-muted/50 ${item.color}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <span className="text-xs font-medium text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </motion.div>

          {/* AI Reflection Card */}
          <motion.div variants={fadeIn} className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative bg-card/90 backdrop-blur-md border border-primary/20 rounded-3xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t.reflection.title}
              </h3>
              
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {t.reflection.text}
              </p>
              
              <div className="flex items-start gap-4 p-4 bg-muted/30 rounded-2xl">
                <Sparkles className="w-5 h-5 text-primary shrink-0 mt-1" />
                <p
                  className="text-muted-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: t.reflection.confession }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
