import { useEffect, useRef } from "react";

export default function Reveal({ as: Tag = "div", className = "", delay = 0, children }) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) {
      node.classList.add("is-in");
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.classList.add("is-in");
        observer.disconnect();
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    const onEnd = (event) => {
      if (event.target !== node) return;
      node.style.animation = "none";
      node.style.opacity = "1";
    };

    node.addEventListener("animationend", onEnd);
    observer.observe(node);
    return () => {
      node.removeEventListener("animationend", onEnd);
      observer.disconnect();
    };
  }, []);

  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
