'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Check, ArrowRight, Sparkles, Shield, TrendingUp, Zap, Star } from 'lucide-react';

const Section = ({ id, children, className = '' }: any) => (
  <section id={id} className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</section>
);

const Badge = ({ children }: any) => (
  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium bg-white/60 backdrop-blur border-black/10">
    {children}
  </span>
);

export default function Page() {
  const [email, setEmail] = useState('');

  const IMAGES = {
    hero: 'https://placehold.co/1200x900/png?text=Hero',
    showcase: [
      'https://placehold.co/600x450/png?text=1',
      'https://placehold.co/600x450/png?text=2',
      'https://placehold.co/600x450/png?text=3',
      'https://placehold.co/600x450/png?text=4',
    ],
  } as const;

  const featureItems = [
    { icon: Sparkles, title: 'Design elegante', desc: 'Interface moderna com foco na conversão e performance.' },
    { icon: Shield, title: 'Seguro por padrão', desc: 'Boas práticas de segurança e acessibilidade inclusas.' },
    { icon: TrendingUp, title: 'Pronto para escalar', desc: 'Estrutura pensada para crescer junto com seu negócio.' },
    { icon: Zap, title: 'Rápido como um raio', desc: 'Carregamento otimizado e UX responsiva.' },
  ];

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 bg-white/70 backdrop-blur border-b border-zinc-200/60">
        <Section className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-2xl bg-zinc-900 text-white grid place-items-center">
              <Star className="h-4 w-4" />
            </div>
            <span className="font-semibold tracking-tight">SuaMarca</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex">Entrar</Button>
            <Button className="rounded-2xl">Começar agora</Button>
          </div>
        </Section>
      </header>

      <Section className="pt-16 pb-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-6">
              <Badge>Novo • Template didático</Badge>
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-900">
                Landing page minimalista para testes rápidos
              </h1>
              <p className="text-lg text-zinc-600 max-w-xl">
                Estrutura simples para você entender e publicar em minutos. Depois é só trocar textos, imagens e cores.
              </p>
              <form
                onSubmit={(e) => { e.preventDefault(); alert(`Obrigado! Enviaremos novidades para: ${email}`); }}
                className="flex flex-col sm:flex-row gap-3 max-w-xl"
              >
                <input
                  className="w-full flex-1 rounded-xl border border-zinc-300 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400/60"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                />
                <Button type="submit" className="rounded-xl">
                  Quero experimentar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative">
              <div className="absolute -inset-4 -z-10 bg-amber-200/40 blur-2xl rounded-3xl" />
              <div className="aspect-[4/3] w-full rounded-3xl border border-zinc-200 bg-white shadow-sm overflow-hidden">
                <img src={IMAGES.hero} alt="Hero placeholder" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section id="features" className="py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Tudo que você precisa</h2>
          <p className="text-zinc-600">Componentes prontos, acessíveis e fáceis de editar.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureItems.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="rounded-2xl shadow-sm">
              <CardHeader>
                <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-800 grid place-items-center">
                  <Icon className="h-5 w-5" />
                </div>
                <CardTitle className="mt-4 text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-zinc-600">{desc}</CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="showcase" className="py-16">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Destaque o valor do seu produto</h3>
            <p className="text-zinc-600">Troque as caixas por screenshots ou animações do seu app/serviço.</p>
            <ul className="space-y-2 text-zinc-700">
              {['Layout flexível e modular', 'Copy orientada a resultado', 'Padrões de UX comprovados'].map((item) => (
                <li key={item} className="flex items-start gap-2"><Check className="h-5 w-5 mt-0.5" /> {item}</li>
              ))}
            </ul>
            <div className="flex gap-3 pt-2">
              <Button className="rounded-xl">Criar conta</Button>
              <Button variant="outline" className="rounded-xl">Falar com vendas</Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {IMAGES.showcase.map((src, i) => (
              <img key={i} src={src} alt={`Showcase ${i+1}`} className="h-40 w-full rounded-2xl object-cover border border-zinc-200" />
            ))}
          </div>
        </div>
      </Section>

      <footer className="mt-16 border-t border-zinc-200/80">
        <Section className="py-10 text-sm text-zinc-600">
          <div className="text-zinc-500">Feito com ❤️ usando Next.js + Tailwind.</div>
        </Section>
      </footer>
    </div>
  );
}
