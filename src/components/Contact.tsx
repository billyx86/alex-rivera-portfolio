import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { profile, socials } from "~/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setSending(true);
    window.setTimeout(() => {
      toast.success("Message sent — I'll get back to you soon.", {
        description: `Thanks, ${name.split(" ")[0]}!`,
      });
      setName("");
      setEmail("");
      setMessage("");
      setSending(false);
    }, 700);
  };

  return (
    <section id="contact" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="05 — Contact"
              title="Let's build something worth shipping."
              description="Whether it's a product rebuild, a design system, or an ambitious greenfield app — I'd love to hear about it."
            />
          </Reveal>

          <Reveal delay={1}>
            <ul className="mt-10 space-y-4">
              <li className="flex items-start gap-3 text-sm text-muted">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                <a
                  href={`mailto:${profile.email}`}
                  className="text-soft transition hover:text-amber-bright"
                >
                  {profile.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                <span>{profile.location} · Remote-friendly</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={2}>
            <div className="mt-10 flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs text-soft transition hover:border-amber/40 hover:text-amber-bright"
                >
                  {s.label}
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={1}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-border bg-panel/40 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block sm:col-span-1">
                  <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                    Name
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jordan Lee"
                    className="w-full rounded-xl border border-border bg-ink/60 px-4 py-3 text-sm text-cream outline-none transition placeholder:text-muted/60 focus:border-amber/50 focus:ring-1 focus:ring-amber/30"
                  />
                </label>
                <label className="block sm:col-span-1">
                  <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                    Email
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-border bg-ink/60 px-4 py-3 text-sm text-cream outline-none transition placeholder:text-muted/60 focus:border-amber/50 focus:ring-1 focus:ring-amber/30"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-2 block font-mono text-xs uppercase tracking-wider text-muted">
                    Message
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={5}
                    placeholder="Tell me about the project, timeline, and what success looks like…"
                    className="w-full resize-y rounded-xl border border-border bg-ink/60 px-4 py-3 text-sm text-cream outline-none transition placeholder:text-muted/60 focus:border-amber/50 focus:ring-1 focus:ring-amber/30"
                  />
                </label>
              </div>

              <button
                type="submit"
                disabled={sending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-amber-bright disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {sending ? "Sending…" : "Send message"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
