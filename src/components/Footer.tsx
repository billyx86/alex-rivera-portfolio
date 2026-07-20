import { profile } from "~/lib/data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div>
          <p className="font-display text-lg text-cream">
            {profile.name}
          </p>
          <p className="mt-1 font-mono text-xs text-muted">
            Designed &amp; built with care · {year}
          </p>
        </div>
        <a
          href="#top"
          className="text-sm text-muted transition hover:text-amber-bright"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
