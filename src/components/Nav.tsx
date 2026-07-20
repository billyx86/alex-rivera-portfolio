import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "~/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/80 bg-ink/85 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-[4.25rem] sm:px-8">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-amber/40 bg-amber/10 font-mono text-xs font-medium text-amber-bright transition group-hover:border-amber group-hover:bg-amber/20">
            AR
          </span>
          <span className="font-display text-lg tracking-tight text-cream sm:text-xl">
            Alex Rivera
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition hover:text-cream"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-amber/40 bg-amber/10 px-4 py-1.5 text-sm font-medium text-amber-bright transition hover:border-amber hover:bg-amber/20"
          >
            Hire me
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-cream md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-ink/95 px-5 pb-8 pt-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-soft transition hover:bg-panel hover:text-cream"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-4 py-3 text-sm font-medium text-amber-bright"
            >
              Hire me
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
