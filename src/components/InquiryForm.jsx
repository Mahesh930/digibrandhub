import { useState } from "react";

const inputClass =
  "w-full rounded-[10px] border border-navy/10 bg-[#fbfaf8] px-3.5 py-3.5 text-ink";

export default function InquiryForm({ includeProject = false }) {
  const [status, setStatus] = useState({ type: "", text: "" });

  function onSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const timeline = String(data.get("timeline") || "").trim();

    if (!name || !phone || !email || !message) {
      setStatus({ type: "error", text: "Please complete every required field." });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: "error", text: "Enter a valid email address." });
      return;
    }

    const lines = [`Name: ${name}`, `Contact number: ${phone}`, `Email: ${email}`];
    if (timeline) lines.push(`Timeline: ${timeline}`);
    lines.push("", message);

    const subject = includeProject ? `Project enquiry from ${name}` : `Message from ${name}`;
    const href = `mailto:contact@digibrandhub.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;

    setStatus({ type: "ok", text: "Opening your email app with this message." });
    window.location.href = href;
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit} noValidate>
      <label className="grid gap-1.5 text-sm font-extrabold">
        Name
        <input className={inputClass} name="name" autoComplete="name" required />
      </label>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-extrabold">
          Contact number
          <input className={inputClass} name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label className="grid gap-1.5 text-sm font-extrabold">
          Email ID
          <input className={inputClass} name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      {includeProject ? (
        <label className="grid gap-1.5 text-sm font-extrabold">
          Timeline
          <input className={inputClass} name="timeline" placeholder="When do you want to launch?" />
        </label>
      ) : null}
      <label className="grid gap-1.5 text-sm font-extrabold">
        Message
        <textarea className={`${inputClass} min-h-36 resize-y`} name="message" required />
      </label>
      <button
        type="submit"
        className="inline-flex min-h-[52px] items-center justify-center rounded-lg bg-brand px-5 font-extrabold text-white hover:bg-brand-deep"
      >
        Send message
      </button>
      <p className={`text-sm ${status.type === "error" ? "text-red-800" : "text-emerald-800"}`}>
        {status.text || "This opens your email app so the note goes straight to the studio."}
      </p>
    </form>
  );
}
