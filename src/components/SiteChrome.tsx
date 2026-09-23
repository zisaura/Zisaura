import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { BookCallButton } from "@/components/BookingDialog";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Plans", href: "/#plans" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      to="/"
      className={`font-display text-lg font-medium tracking-tight ${className}`}
    >
      Zisaura
      <span className="text-accent">.</span>
    </Link>
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Wordmark />

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <BookCallButton className="px-4 py-2">Book a Call</BookCallButton>
        </div>

        <Button
          variant="outline"
          size="icon"
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="h-10 w-10 md:hidden"
        >
          {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {menuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <nav
            aria-label="Mobile"
            className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8"
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-border py-3.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <div className="py-4">
              <BookCallButton className="w-full">Book a Call</BookCallButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Outsourced Growth &amp; Operations
          </p>
        </div>

        <div>
          <h2 className="text-sm font-medium">Contact</h2>
          <a href="mailto:hello@zisaura.com" className="mt-4 block text-sm text-muted-foreground transition-colors hover:text-foreground">hello@zisaura.com</a>
        </div>

        <div>
          <h2 className="text-sm font-medium">Navigate</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {[...navLinks, { label: "Contact", href: "/#contact" }].map((l) => (
              <li key={l.label}>
                <a href={l.href} className="transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-medium">Legal</h2>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <Link to="/privacy" className="transition-colors hover:text-foreground">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="transition-colors hover:text-foreground">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-6 font-mono text-xs text-muted-foreground sm:px-8">
          © 2026 Zisaura. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
        <h1 className="font-display text-4xl tracking-tight">{title}</h1>
        <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Last updated {updated}
        </p>
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl tracking-tight text-foreground">{heading}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
