import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const values = [
  { title: "Creativity", text: "We challenge ordinary ideas and search for better creative solutions." },
  { title: "Quality", text: "We believe every detail matters." },
  { title: "Strategy", text: "Creative work should always have a clear purpose." },
  { title: "Innovation", text: "We continuously explore new technologies, tools and AI-powered possibilities." },
  { title: "Partnership", text: "We work with our clients as an extension of their team." },
  { title: "Growth", text: "Everything we create should contribute toward a stronger brand and better business." },
];

export default function About() {
  return (
    <>
      <PageHero eyebrow="About Us" pageTitle="About Us" title="We build brands that people remember.">
        <p>
          DigiBrandHub is a creative digital agency focused on helping businesses build stronger brands through strategy, design, content, video and technology.
        </p>
        <p className="mt-3">
          We bring multiple creative capabilities together under one roof so businesses don’t have to manage multiple disconnected creative partners.
        </p>
      </PageHero>

      <section className="py-16 md:py-20">
        <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-4">
          <Reveal as="article" className="rounded-[18px] border border-navy/10 bg-white p-8">
            <p className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand">Our story</p>
            <h2 className="mb-3 font-serif text-4xl tracking-tight">One hub. Endless creative possibilities.</h2>
            <div className="max-w-3xl space-y-3 text-muted">
              <p>The digital world is constantly changing.</p>
              <p>Brands need more than a logo or a social media post. They need a complete visual and digital presence that works together.</p>
              <p>DigiBrandHub was created with a simple vision: to bring branding, creativity, content, video and digital marketing together into one powerful creative ecosystem.</p>
              <p>We combine creative thinking with modern technology to help businesses communicate better, look better and grow faster.</p>
            </div>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal as="article" delay={80} className="rounded-[18px] border border-navy/10 bg-white p-8">
              <p className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand">Our mission</p>
              <h2 className="mb-3 font-serif text-3xl tracking-tight">Make every brand more powerful.</h2>
              <p className="text-muted">Our mission is to help businesses transform their ideas into meaningful brands and engaging digital experiences.</p>
              <p className="mt-3 text-muted">We believe great creative work should not only look impressive — it should have a purpose.</p>
            </Reveal>
            <Reveal as="article" delay={160} className="rounded-[18px] border border-navy/10 bg-white p-8">
              <p className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand">Our vision</p>
              <h2 className="mb-3 font-serif text-3xl tracking-tight">Creating the future of digital creativity.</h2>
              <p className="text-muted">We envision DigiBrandHub as a complete creative partner for businesses looking to build, promote and grow their brands in the digital age.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
          <p className="mb-3 text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand">Our values</p>
          <h2 className="mb-8 font-serif text-4xl tracking-tight">What guides our work.</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {values.map((value, index) => (
              <Reveal
                as="article"
                key={value.title}
                delay={index * 70}
                className="rounded-[18px] border border-navy/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/25"
              >
                <h3 className="mb-2 text-[22px] font-extrabold tracking-tight">{value.title}</h3>
                <p className="text-muted">{value.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/10 bg-white py-16">
        <div className="mx-auto flex w-[min(1120px,calc(100%-40px))] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Reveal>
            <h2 className="font-serif text-4xl tracking-tight">Let’s build something people remember.</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/contact" className="inline-flex min-h-[52px] items-center rounded-lg bg-brand px-5 font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-deep">
              Work with us →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
