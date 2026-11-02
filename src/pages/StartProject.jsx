import { Link } from "react-router-dom";
import InquiryForm from "../components/InquiryForm";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const steps = [
  { num: "01", title: "Tell us where you want to go", text: "Share the brand, campaign or idea you want to build, launch or reimagine." },
  { num: "02", title: "Strategy, creativity and craft", text: "We bring the thinking and the making together so the work has a clear purpose." },
  { num: "03", title: "A stronger result", text: "From brand identity to digital marketing and AI-powered content, the goal is work with presence." },
];

export default function StartProject() {
  return (
    <>
      <PageHero eyebrow="Start a project" pageTitle="Start a Project" title="Make your next move iconic.">
        From brand identity to digital marketing and AI-powered content, we’re ready to bring your vision to life.
      </PageHero>
      <section className="py-16 md:py-20">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
          <h2 className="mb-3 font-serif text-4xl tracking-tight">A clear process. A stronger result.</h2>
          <p className="mb-8 max-w-2xl text-muted">
            Tell us where you want to go. We’ll bring the strategy, creativity and craft to help you get there.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal
                as="article"
                key={step.num}
                delay={index * 110}
                className="rounded-[18px] border border-navy/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/25"
              >
                <p className="mb-4 text-sm font-extrabold tracking-[0.12em] text-brand">{step.num}</p>
                <h3 className="mb-2 text-xl font-extrabold tracking-tight">{step.title}</h3>
                <p className="text-muted">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="pb-16 md:pb-20">
        <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] gap-6 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="font-serif text-4xl tracking-tight">Tell us about your project</h2>
            <p className="mt-3 text-muted">
              Share your goals, timeline and what success looks like. Prefer a shorter note? <Link className="font-extrabold text-brand" to="/contact">Use the contact page.</Link>
            </p>
          </div>
          <Reveal delay={100} className="rounded-[20px] border border-navy/10 bg-white p-7 shadow-[0_18px_50px_rgba(7,20,38,0.08)]">
            <InquiryForm includeProject />
          </Reveal>
        </div>
      </section>
    </>
  );
}
