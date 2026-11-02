import { useEffect } from "react";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";

const craft = [
  {
    index: "01",
    title: "Brand strategy",
    text: "Positioning, identity, and messaging that make your brand impossible to ignore.",
  },
  {
    index: "02",
    title: "Film & content",
    text: "Cinematic campaigns and visual stories that move people and build desire.",
  },
  {
    index: "03",
    title: "Digital experiences",
    text: "Premium websites and products designed to turn attention into action.",
  },
];

const frames = [
  { label: "01 — Sketch", title: "First sketch" },
  { label: "02 — Craft", title: "Strategy and craft" },
  { label: "03 — Frame", title: "Final frame" },
];

const clients = [
  { name: "TeamLease RegTech", src: "/clients/teamlease.png" },
  { name: "Shraddha IT Solutions", src: "/clients/shardha.png" },
  { name: "Kiara Digital", src: "/clients/kiara.png" },
  { name: "BYJU'S", src: "/clients/byjus.png" },
  { name: "Arun Icecreams", src: "/clients/arun.png" },
];

export default function Home() {
  useEffect(() => {
    document.title = "Home – DigiBrandHub";
  }, []);

  return (
    <>
      <section className="relative flex min-h-[calc(100dvh-76px)] flex-col justify-center overflow-hidden bg-navy text-paper">
        <div className="glow-drift pointer-events-none absolute -right-16 -top-24 h-[460px] w-[460px] rounded-full bg-brand/25 blur-3xl" />
        <div className="glow-drift pointer-events-none absolute -bottom-32 left-1/4 h-[280px] w-[280px] rounded-full bg-[#1d4e89]/40 blur-3xl [animation-delay:-6s]" />
        <div className="relative mx-auto flex w-[min(1120px,calc(100%-40px))] flex-1 flex-col justify-center py-16 md:py-20">
          <p className="rise mb-5 text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand">
            DigiBrandHub — Creative Studio
          </p>
          <h1 className="max-w-4xl font-serif text-[56px] leading-[0.96] tracking-tight text-white sm:text-7xl md:text-8xl">
            <span className="rise inline-block [animation-delay:120ms]">Ideas made</span>{" "}
            <em className="rise inline-block italic text-brand [animation-delay:240ms]">iconic.</em>
          </h1>
          <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-paper/80 [animation-delay:360ms] md:text-xl">
            We build bold brands, cinematic content, and digital experiences for companies ready to leave a lasting impression.
          </p>
          <div className="rise mt-9 flex flex-wrap gap-3 [animation-delay:480ms]">
            <Link
              to="/start-a-project"
              className="inline-flex min-h-[52px] items-center rounded-lg bg-brand px-5 font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              Start a project →
            </Link>
            <Link
              to="/services"
              className="inline-flex min-h-[52px] items-center rounded-lg border border-white/25 px-5 font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              See our craft
            </Link>
          </div>
        </div>
        <a
          href="#introduction"
          className="relative mx-auto mb-7 flex w-[min(1120px,calc(100%-40px))] items-center gap-3 text-[12px] font-extrabold uppercase tracking-[0.18em] text-paper/60 transition hover:text-white"
        >
          <span className="scroll-cue block h-8 w-px bg-brand" />
          Scroll
        </a>
      </section>

      <section id="introduction" className="scroll-mt-[76px] py-20 md:py-24">
        <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <p className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand">Trust / Introduction</p>
            <h2 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Your brand deserves more than just content.
            </h2>
          </Reveal>
          <div className="space-y-4 text-muted">
            <Reveal delay={80}>
              <p>In a crowded digital world, simply being visible isn’t enough.</p>
            </Reveal>
            <Reveal delay={140}>
              <p>
                At DigiBrandHub, we combine strategy, creativity, technology and storytelling to build brands that look premium, communicate clearly and create real impact.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p>From your first brand visual to your next digital campaign, we bring everything together under one creative hub.</p>
            </Reveal>
            <Reveal delay={280}>
              <p className="border-l-[3px] border-brand pl-4 font-serif text-3xl leading-tight text-navy">
                Your brand needs to be memorable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white py-16 md:py-20" aria-labelledby="clients-heading">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
          <Reveal>
            <p className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand">Our clients</p>
            <h2 id="clients-heading" className="font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Brands that trust the studio.
            </h2>
          </Reveal>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {clients.map((client, index) => (
              <Reveal
                as="li"
                key={client.name}
                delay={index * 80}
                className="flex h-32 items-center justify-center rounded-2xl border border-navy/10 bg-paper px-5 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_16px_40px_rgba(7,20,38,0.08)]"
              >
                <img src={client.src} alt={client.name} className="max-h-16 w-full object-contain" />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
          <div className="mb-9 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <Reveal>
              <p className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand">Our craft</p>
              <h2 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">
                Creative thinking with real-world impact.
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-muted">
                Strategy, film and digital work, shaped as one studio rather than a set of disconnected partners.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {craft.map((item, index) => (
              <Reveal
                as="article"
                key={item.title}
                delay={index * 110}
                className="min-h-60 rounded-[18px] border border-navy/10 bg-white p-7 shadow-[0_18px_50px_rgba(7,20,38,0.08)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(7,20,38,0.12)]"
              >
                <span className="mb-7 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#fff1ea] text-[13px] font-extrabold text-brand">
                  {item.index}
                </span>
                <h3 className="mb-2 text-[22px] font-extrabold tracking-tight">{item.title}</h3>
                <p className="text-muted">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-20 text-white md:py-24">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
          <div className="mb-9 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <Reveal>
              <p className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand">Selected work</p>
              <h2 className="font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">Built for the big screen.</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-paper/70">
                From first sketch to final frame, we bring strategy and craft together to create work with presence.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {frames.map((frame, index) => (
              <Reveal
                as="article"
                key={frame.title}
                delay={index * 140}
                className={`frame-card flex min-h-64 flex-col justify-between rounded-[20px] border border-white/10 p-7 transition duration-300 hover:-translate-y-1.5 ${index === 0 ? "bg-[radial-gradient(400px_180px_at_20%_0%,rgba(241,90,34,0.45),transparent_70%),#10243d]" : "bg-navy-soft"}`}
              >
                <span className="text-[13px] font-extrabold uppercase tracking-[0.14em] text-brand">{frame.label}</span>
                <h3 className="font-serif text-3xl tracking-tight">{frame.title}</h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-navy/10 bg-white py-16 md:py-20">
        <div className="mx-auto flex w-[min(1120px,calc(100%-40px))] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Reveal>
            <p className="mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand">Let’s create</p>
            <h2 className="max-w-xl font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Have a vision? Make it unforgettable.
            </h2>
            <p className="mt-3 text-muted">Tell us what you’re building, launching, or reimagining.</p>
          </Reveal>
          <Reveal delay={140}>
            <Link
              to="/contact"
              className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-brand px-5 font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              Get in touch →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
