import InquiryForm from "../components/InquiryForm";
import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="DigiBrandHub — Contact" pageTitle="Contact" title="Let’s make something people remember.">
        Have a brand challenge, campaign idea or creative project in mind? Tell us what you’re building.
      </PageHero>
      <section className="py-16 md:py-20">
        <div className="mx-auto grid w-[min(1120px,calc(100%-40px))] items-start gap-6 md:grid-cols-[0.85fr_1.15fr]">
          <Reveal as="aside" className="rounded-[20px] border border-navy/10 bg-white p-7 shadow-[0_18px_50px_rgba(7,20,38,0.08)]">
            <h2 className="font-serif text-4xl tracking-tight">Start a conversation</h2>
            <p className="mt-3 text-muted">
              Share your goals, timeline and what success looks like. We’ll come back with a clear next step.
            </p>
            <div className="mt-8 grid gap-5">
              <p>
                <span className="mb-1 block text-xs font-extrabold uppercase tracking-[0.14em] text-muted">Email</span>
                <a className="font-extrabold text-brand" href="mailto:contact@digibrandhub.com">contact@digibrandhub.com</a>
              </p>
              <p>
                <span className="mb-1 block text-xs font-extrabold uppercase tracking-[0.14em] text-muted">Studio</span>
                <a className="font-extrabold text-brand" href="mailto:hello@digibrandhub.com">hello@digibrandhub.com</a>
              </p>
              <p>
                <span className="mb-1 block text-xs font-extrabold uppercase tracking-[0.14em] text-muted">Call us</span>
                <a className="font-extrabold text-brand" href="tel:+919503652659">95036 52659</a>
              </p>
            </div>
          </Reveal>
          <Reveal delay={120} className="rounded-[20px] border border-navy/10 bg-white p-7 shadow-[0_18px_50px_rgba(7,20,38,0.08)]">
            <InquiryForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
