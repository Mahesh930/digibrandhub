import { useEffect } from "react";

export default function PageHero({ eyebrow, title, pageTitle, children }) {
  useEffect(() => {
    document.title = `${pageTitle || title} – DigiBrandHub`;
  }, [pageTitle, title]);

  return (
    <section className="bg-navy text-white">
      <div className="mx-auto w-[min(1120px,calc(100%-40px))] py-16 md:py-24">
        {eyebrow ? (
          <p className="rise mb-4 text-[13px] font-extrabold uppercase tracking-[0.16em] text-brand">{eyebrow}</p>
        ) : null}
        <h1 className="rise max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight [animation-delay:120ms] md:text-6xl">{title}</h1>
        {children ? <div className="rise mt-5 max-w-2xl text-lg text-paper/80 [animation-delay:220ms]">{children}</div> : null}
      </div>
    </section>
  );
}
