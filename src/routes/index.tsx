import { createFileRoute } from "@tanstack/react-router";

const TITLE = "Zisaura — Growth & Operations Partner for U.S. Businesses";
const DESCRIPTION =
  "Zisaura is the done-for-you growth and operations team for U.S. businesses: lead generation, sales follow-up, and back-office systems run for you. Book a free strategy call.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    no: "01",
    title: "Lead Generation Engine",
    body: "Outbound lists, cold email and LinkedIn sequences, local SEO and paid search — one pipeline that fills your calendar instead of your inbox.",
    points: ["ICP research & list building", "Email + LinkedIn sequences", "Google & Meta campaigns"],
  },
  {
    no: "02",
    title: "Sales Follow-Up & CRM",
    body: "Every inquiry answered in minutes, every deal tracked. We build the CRM, write the follow-up, and keep the pipeline honest.",
    points: ["Speed-to-lead automations", "CRM build & clean-up", "Proposal and quote templates"],
  },
  {
    no: "03",
    title: "Back-Office Operations",
    body: "Scheduling, invoicing, AR follow-up, vendor coordination, and reporting handled by a trained U.S.-hours team.",
    points: ["Invoicing & collections", "Scheduling & dispatch support", "Weekly KPI reporting"],
  },
  {
    no: "04",
    title: "Systems & Automation",
    body: "We replace the spreadsheet duct tape with documented workflows your team can actually run without you.",
    points: ["SOPs & documentation", "Workflow automation", "Tool stack consolidation"],
  },
];

const steps = [
  {
    label: "Week 1",
    title: "Diagnostic",
    body: "A 60-minute call plus a review of your funnel, tools, and numbers. You get a written map of where revenue and hours are leaking.",
  },
  {
    label: "Week 2",
    title: "Build",
    body: "We stand up the pipeline, CRM, and automations, and document how each step runs. No new software for your team to learn from scratch.",
  },
  {
    label: "Week 3–4",
    title: "Run",
    body: "Our team operates it during U.S. business hours — outreach sent, leads answered, invoices chased, reports delivered every Friday.",
  },
  {
    label: "Ongoing",
    title: "Scale",
    body: "Monthly review of cost per lead, close rate, and cycle time. We double down on what works and retire what doesn't.",
  },
];

const testimonials = [
  {
    quote:
      "We went from chasing quotes at 10pm to a pipeline that runs itself. Zisaura booked 34 qualified appointments for us in the first quarter.",
    name: "Marcus Ellery",
    role: "Owner, Ellery Mechanical — Columbus, OH",
  },
  {
    quote:
      "Their team cleaned up two years of messy invoicing and cut our average collection time from 51 days to 19. That alone paid for the engagement.",
    name: "Dana Whitfield",
    role: "COO, Whitfield Dental Group — Austin, TX",
  },
  {
    quote:
      "It feels like hiring a director of operations without the six-figure salary. Everything is documented, and I finally know my numbers weekly.",
    name: "Priya Raghavan",
    role: "Founder, Northbay Logistics — Sacramento, CA",
  },
];

const valueProps = [
  {
    title: "U.S. business hours, always",
    body: "Coverage across all four time zones, so a lead at 8:04am in Boston is answered before your competitor opens.",
  },
  {
    title: "Built for U.S. compliance",
    body: "CAN-SPAM and TCPA-aware outreach, W-9s and 1099 workflows, state sales-tax-aware invoicing.",
  },
  {
    title: "One partner, not five vendors",
    body: "Marketing agency, VA firm, bookkeeper, and automation consultant replaced by one accountable team.",
  },
  {
    title: "Flat monthly fee",
    body: "No hourly billing, no ad-spend percentage games. You know the number before you sign.",
  },
];

const stats = [
  { value: "120+", label: "U.S. businesses supported" },
  { value: "3.4x", label: "Average pipeline growth in 6 months" },
  { value: "< 5 min", label: "Median lead response time" },
  { value: "19 days", label: "Average invoice collection time" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-xl tracking-tight">
            Zisaura<span className="text-accent">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
            <a href="#value" className="transition-colors hover:text-foreground">
              Why Zisaura
            </a>
            <a href="#services" className="transition-colors hover:text-foreground">
              Services
            </a>
            <a href="#process" className="transition-colors hover:text-foreground">
              Process
            </a>
            <a href="#testimonials" className="transition-colors hover:text-foreground">
              Results
            </a>
          </nav>
          <a
            href="#book"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Book a call
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden border-b border-border/60">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent/15 blur-3xl" />
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Growth & operations partner
            </span>
            <h1 className="font-display mt-7 text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Your growth engine and back office, run by one team.
            </h1>
            <p className="mt-7 max-w-xl text-lg text-muted-foreground">
              Zisaura is the done-for-you growth and operations partner for U.S.
              businesses doing $500K–$20M. We fill your pipeline, answer every lead,
              and keep the back office running — so you can stay out of the weeds.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#book"
                className="rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Book a free strategy call
              </a>
              <a
                href="#services"
                className="rounded-full border border-border px-7 py-3.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                See what we run
              </a>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              30 minutes. No pitch deck. You leave with a written plan either way.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 self-center">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]"
              >
                <div className="font-display text-3xl tracking-tight">{s.value}</div>
                <div className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value proposition */}
      <section id="value" className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel>The value proposition</SectionLabel>
          <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Built specifically for how U.S. businesses win work.
            </h2>
            <p className="text-lg text-muted-foreground">
              Most owners are stuck between an agency that only does ads and a
              bookkeeper who only does books. Zisaura sits across both: the revenue
              side and the operations side, staffed for American business hours and
              American paperwork. One contract, one point of contact, one weekly
              report you can actually read.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {valueProps.map((v) => (
              <div key={v.title} className="bg-card p-8">
                <h3 className="text-lg font-semibold tracking-tight">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel>Services</SectionLabel>
          <h2 className="font-display mt-6 max-w-2xl text-4xl leading-tight tracking-tight sm:text-5xl">
            Four systems we own end to end.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <div
                key={s.no}
                className="group rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-[var(--shadow-soft)]"
              >
                <div className="font-display text-sm text-accent">{s.no}</div>
                <h3 className="font-display mt-3 text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <ul className="mt-6 space-y-2 border-t border-border pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-sm">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="border-b border-border/60 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <span className="text-xs uppercase tracking-[0.22em] text-primary-foreground/60">
            Process
          </span>
          <h2 className="font-display mt-6 max-w-2xl text-4xl leading-tight tracking-tight sm:text-5xl">
            Live in 30 days, documented from day one.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex items-center gap-3">
                  <span className="font-display text-2xl text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">
                    {step.label}
                  </span>
                </div>
                <div className="mt-5 h-px w-full bg-primary-foreground/20" />
                <h3 className="font-display mt-5 text-xl tracking-tight">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <SectionLabel>Results</SectionLabel>
          <h2 className="font-display mt-6 max-w-2xl text-4xl leading-tight tracking-tight sm:text-5xl">
            What owners say after two quarters.
          </h2>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8"
              >
                <blockquote className="font-display text-xl leading-snug tracking-tight">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-8 border-t border-border pt-5">
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="book" className="bg-secondary/40">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <SectionLabel center>Book a call</SectionLabel>
          <h2 className="font-display mt-6 text-4xl leading-tight tracking-tight sm:text-5xl">
            Let's find the leaks in 30 minutes.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Bring your numbers, your tools, and your biggest bottleneck. You'll leave
            with a written plan you can run with or without us.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:hello@zisaura.com?subject=Strategy%20call%20request"
              className="rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Book your strategy call
            </a>
            <a
              href="mailto:hello@zisaura.com"
              className="rounded-full border border-border px-8 py-4 text-sm font-medium transition-colors hover:bg-card"
            >
              hello@zisaura.com
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-muted-foreground sm:flex-row">
          <span className="font-display text-base text-foreground">
            Zisaura<span className="text-accent">.</span>
          </span>
          <span>Growth & operations for U.S. businesses. All 50 states.</span>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({
  children,
  center,
}: {
  children: React.ReactNode;
  center?: boolean;
}) {
  return (
    <span
      className={`block text-xs uppercase tracking-[0.22em] text-muted-foreground ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </span>
  );
}
