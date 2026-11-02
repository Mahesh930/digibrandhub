import PageHero from "../components/PageHero";
import Reveal from "../components/Reveal";

const sections = [
  {
    title: "Who we are",
    text: "Our website address is https://digibrandhub.com.",
  },
  {
    title: "Comments",
    text: "When visitors leave comments, we collect the data shown in the comments form, along with the visitor’s IP address and browser user agent string to help with spam detection.",
  },
  {
    title: "Cookies",
    text: "Our site may use cookies for convenience, login functionality and basic site operation.",
  },
  {
    title: "Your rights",
    text: "You may request access to, export of, or deletion of personal data we hold about you, subject to legal and administrative requirements.",
  },
];

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="DigiBrandHub — Privacy" pageTitle="Privacy Policy" title="Privacy policy" />
      <section className="py-16">
        <div className="mx-auto w-[min(800px,calc(100%-40px))]">
          {sections.map((section, index) => (
            <Reveal as="article" key={section.title} delay={index * 70} className="mb-3.5 rounded-2xl border border-navy/10 bg-white px-7 py-6">
              <h2 className="mb-2 font-serif text-3xl tracking-tight">{section.title}</h2>
              <p className="text-muted">{section.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
