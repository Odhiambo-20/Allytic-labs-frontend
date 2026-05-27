import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Bot, Cpu, Globe2, Leaf, ShieldCheck, Target, Zap } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';

const strengths = [
  {
    title: 'Applied robotics',
    description: 'We focus on machines that solve operational problems in manufacturing, agriculture, inspection, and service delivery.',
    icon: Bot,
  },
  {
    title: 'Autonomous systems',
    description: 'Our drone and automation work is built around field reliability, route intelligence, payload handling, and real-time visibility.',
    icon: Cpu,
  },
  {
    title: 'Energy resilience',
    description: 'We connect solar technology with practical deployment planning for homes, businesses, farms, and institutions.',
    icon: Leaf,
  },
];

const operatingPrinciples = [
  'Build for real working environments, not showroom demos',
  'Prioritize safety, maintainability, and measurable performance',
  'Support customers from discovery through deployment and aftercare',
  'Work with partners who can help scale technology responsibly',
];

const metrics = [
  ['3', 'Core technology lines'],
  ['24/7', 'Automation mindset'],
  ['Africa', 'Deployment focus'],
  ['Future-ready', 'Engineering standard'],
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <section className="bg-slate-950 pt-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-16 pt-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100">
              <Globe2 className="h-4 w-4" />
              Built for practical technology deployment
            </div>
            <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-normal md:text-6xl">
              About Allytic Labs
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Allytic Labs develops and supplies robotics, drone, and solar technology for organizations that need smarter operations, cleaner energy, and dependable automation.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Talk to our team
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link to="/partners" className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
                Partner with us
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/5 p-6">
            <BrandLogo />
            <div className="mt-8 grid grid-cols-2 gap-4">
              {metrics.map(([value, label]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-slate-900/70 p-4">
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="mt-2 text-sm leading-5 text-slate-300">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-blue-700">What We Do</p>
            <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950 md:text-4xl">
              Technology that moves from concept to field use.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              We bring together intelligent machines, aerial systems, and renewable energy products so customers can modernize how they inspect, move, produce, monitor, and power their operations.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {strengths.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase text-blue-700">How We Work</p>
              <h2 className="mt-3 text-3xl font-bold tracking-normal text-slate-950">Engineering with accountability.</h2>
              <p className="mt-5 text-base leading-7 text-slate-700">
                Production-ready technology is not only about impressive hardware. It requires planning, training, support, supply discipline, and clear communication.
              </p>
            </div>
            <div className="grid gap-4">
              {operatingPrinciples.map((principle) => (
                <div key={principle} className="flex gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <p className="text-sm font-semibold leading-6 text-slate-800">{principle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-3">
          <div className="rounded-lg bg-slate-950 p-8 text-white lg:col-span-2">
            <Target className="h-8 w-8 text-cyan-300" />
            <h2 className="mt-5 text-3xl font-bold tracking-normal">Our mission</h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
              To make advanced automation and renewable energy more accessible to businesses, institutions, and communities that are ready to operate with higher precision and resilience.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
            <Zap className="h-8 w-8 text-blue-700" />
            <h2 className="mt-5 text-2xl font-bold tracking-normal">Where we are going</h2>
            <p className="mt-4 text-sm leading-6 text-slate-700">
              We are building a technology company known for serious deployment, strong partner networks, and products that work outside perfect lab conditions.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
