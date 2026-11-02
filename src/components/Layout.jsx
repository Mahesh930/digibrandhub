import { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact" },
];

function navClass({ isActive }) {
  return [
    "relative text-[15px] font-bold tracking-tight transition-colors",
    "after:absolute after:bottom-[-7px] after:left-0 after:h-0.5 after:rounded-full after:bg-brand after:transition-all after:duration-300",
    "max-md:py-2 max-md:after:hidden",
    isActive ? "text-brand after:w-full" : "text-navy after:w-0 hover:text-brand hover:after:w-full",
  ].join(" ");
}

export default function Layout() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const close = () => setOpen(false);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-brand focus:px-3 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <header
        className={`sticky top-0 z-40 border-b bg-white transition-shadow duration-300 ${
          scrolled || open ? "border-navy/10 shadow-[0_10px_30px_rgba(7,20,38,0.06)]" : "border-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] w-[min(1200px,calc(100%-40px))] items-center justify-between gap-6">
          <Link to="/" onClick={close} aria-label="DigiBrandHub home" className="shrink-0 transition-transform duration-300 hover:scale-[1.03]">
            <img src="/logo-nav.png" alt="DigiBrandHub — Build. Brand. Grow." className="h-11 w-auto" />
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-navy/10 bg-white transition hover:border-brand/40 md:hidden"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="relative block h-3.5 w-[18px]">
              <span className={`absolute left-0 h-0.5 w-[18px] bg-navy transition duration-300 ${open ? "top-[6px] rotate-45" : "top-0"}`} />
              <span className={`absolute left-0 top-[6px] h-0.5 w-[18px] bg-navy transition duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 h-0.5 w-[18px] bg-navy transition duration-300 ${open ? "top-[6px] -rotate-45" : "top-3"}`} />
            </span>
          </button>
          <nav
            id="site-nav"
            aria-label="Primary"
            className={`${open ? "menu-in flex" : "hidden"} absolute left-0 right-0 top-[76px] z-50 flex-col gap-1 border-b border-navy/10 bg-white px-5 py-4 shadow-[0_16px_30px_rgba(7,20,38,0.08)] md:static md:z-auto md:flex md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={navClass}
                onClick={close}
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/start-a-project"
              onClick={close}
              className={({ isActive }) =>
                `group mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-[15px] font-extrabold text-white shadow-[0_8px_18px_rgba(241,90,34,0.28)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_22px_rgba(241,90,34,0.34)] md:mt-0 md:ml-1 ${isActive ? "bg-brand-deep" : "bg-brand hover:bg-brand-deep"}`
              }
            >
              Start a Project
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </NavLink>
          </nav>
        </div>
      </header>

      <main id="content">
        <Outlet />
      </main>

      <footer className="bg-navy px-0 pb-7 pt-14 text-paper/80">
        <div className="mx-auto w-[min(1120px,calc(100%-40px))]">
          <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <Link to="/" className="mb-4 inline-flex">
                <img src="/logo-footer.png" alt="DigiBrandHub — Build. Brand. Grow." className="h-24 w-auto" />
              </Link>
              <p>
                A creative studio for brands that want to look premium, communicate clearly, and create real impact.
              </p>
            </div>
            <div>
              <p className="mb-2 font-extrabold text-white">Studio</p>
              <ul className="grid gap-2">
                <li><Link to="/services" className="transition-colors hover:text-white">Services</Link></li>
                <li><Link to="/about" className="transition-colors hover:text-white">About Us</Link></li>
                <li><Link to="/start-a-project" className="transition-colors hover:text-white">Start a Project</Link></li>
                <li><Link to="/privacy" className="transition-colors hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-2 font-extrabold text-white">Contact</p>
              <ul className="grid gap-2">
                <li><a className="transition-colors hover:text-white" href="mailto:contact@digibrandhub.com">contact@digibrandhub.com</a></li>
                <li><a className="transition-colors hover:text-white" href="mailto:hello@digibrandhub.com">hello@digibrandhub.com</a></li>
                <li><a className="transition-colors hover:text-white" href="tel:+919503652659">95036 52659</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 pt-4 text-sm md:flex-row md:justify-between">
            <span>Copyright © 2026 DigiBrandHub</span>
            <span>Build. Brand. Grow.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
