import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const services = [
  {
    num: "01",
    title: "Brand identity",
    text: "Positioning, visual systems and messaging that make your brand impossible to ignore.",
  },
  {
    num: "02",
    title: "Motion & content",
    text: "Video, photography, animation and social content designed to move people.",
  },
  {
    num: "03",
    title: "Digital marketing",
    text: "Digital campaigns and experiences that turn attention into meaningful action.",
  },
  {
    num: "04",
    title: "AI content creation",
    text: "The future of content is here. We combine human creativity with AI-powered tools to develop unique and scalable visual content.",
  },
];

export default function Services() {
  return (
    <>
      <PageHero eyebrow="Services" pageTitle="Services" title="Strategy, design and digital.">
        Creative services built to help ambitious brands move with clarity, confidence and real momentum.
      </PageHero>
      <section className="py-16 md:py-20">
        <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-4">
          <Reveal>
            <h2 className="mb-2 font-serif text-4xl tracking-tight">What we do</h2>
          </Reveal>
          {services.map((service, index) => (
            <Reveal
              as="article"
              key={service.num}
              delay={index * 90}
              className="grid gap-4 rounded-[18px] border border-navy/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(7,20,38,0.08)] md:grid-cols-[120px_1fr]"
            >
              <strong className="text-sm tracking-[0.12em] text-brand">{service.num}</strong>
              <div>
                <h3 className="mb-2 font-serif text-3xl tracking-tight">{service.title}</h3>
                <p className="max-w-2xl text-muted">{service.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-t border-navy/10 bg-white py-16">
        <div className="mx-auto flex w-[min(1120px,calc(100%-40px))] flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <Reveal>
            <h2 className="font-serif text-4xl tracking-tight">Ready to build what comes next?</h2>
          </Reveal>
          <Reveal delay={100}>
            <Link to="/start-a-project" className="inline-flex min-h-[52px] items-center rounded-lg bg-brand px-5 font-extrabold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-brand-deep">
              Start a project →
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
