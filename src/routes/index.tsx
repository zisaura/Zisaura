import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  ClipboardList,
  Users,
  Layers,
  LineChart,
  MailOpen,
  MessageSquare,
  Phone,
  Receipt,
  Repeat,
  Search,
  Settings2,
  Share2,
  Target,
  UserRound,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookCallButton, CONTACT_EMAIL } from "@/components/BookingDialog";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const TITLE = "Zisaura | Outsourced Sales, Marketing & Back-Office Support";
const DESCRIPTION =
  "Zisaura is an outsourced growth and operations partner for growing U.S. businesses — lead generation, sales development, social media marketing, and accounting and back-office support, run by one accountable team.";

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

const problems = [
  {
    icon: Phone,
    title: "Leads go cold",
    body: "Inquiries arrive, then sit. By the time anyone replies, the prospect has already spoken to someone else.",
  },
  {
    icon: Target,
    title: "Sales gets neglected",
    body: "Follow-up depends on whoever has a spare hour, so quotes go unchased and pipeline stalls.",
  },
  {
    icon: Share2,
    title: "Marketing becomes an afterthought",
    body: "Posting and outreach happen in bursts, and nothing compounds because nothing is consistent.",
  },
  {
    icon: Receipt,
    title: "Back-office work piles up",
    body: "Invoicing, reconciliation, and admin drift to evenings and weekends — usually the owner's.",
  },
];

const services = [
  {
    no: "01",
    icon: Search,
    title: "Lead Generation",
    body: "We build and run the top of your funnel so there is always a next conversation in the pipeline.",
    points: [
      "Ideal-customer definition and list building",
      "Outbound email and LinkedIn outreach",
      "Inbound inquiry capture and routing",
      "Campaign tracking and reporting",
    ],
  },
  {
    no: "02",
    icon: MessageSquare,
    title: "Sales Development",
    body: "Every lead gets a timely, consistent response and a documented follow-up sequence.",
    points: [
      "Lead qualification and discovery calls",
      "Structured multi-touch follow-up",
      "CRM setup, hygiene, and pipeline stages",
      "Proposal and quote coordination",
    ],
  },
  {
    no: "03",
    icon: Share2,
    title: "Social Media Marketing",
    body: "A steady, professional presence that supports sales conversations instead of competing with them.",
    points: [
      "Content calendar and copywriting",
      "Profile and page management",
      "Scheduling and publishing",
      "Engagement monitoring and reporting",
    ],
  },
  {
    no: "04",
    icon: ClipboardList,
    title: "Accounting & Back-Office Support",
    body: "Day-to-day bookkeeping and administrative support so your records stay current. We provide support work, not CPA, tax, audit, or legal services.",
    points: [
      "Bookkeeping data entry and categorization",
      "Invoicing and receivables follow-up",
      "Expense and document organization",
      "Administrative and scheduling support",
    ],
  },
];

const whyZisaura = [
  {
    icon: UserRound,
    title: "One point of contact",
    body: "A single accountable partner across sales and operations, rather than four vendors who never talk to each other.",
  },
  {
    icon: Settings2,
    title: "Built around your business",
    body: "We start from how your business already sells and operates, then build the process around it.",
  },
  {
    icon: ClipboardList,
    title: "Clear monthly scope",
    body: "You know what is being worked on, who is doing it, and what was delivered each month.",
  },
  {
    icon: Layers,
    title: "Built to scale",
    body: "Start with one function. Add the next when it makes sense — the systems are documented as we go.",
  },
];

const steps = [
  {
    no: "01",
    title: "Discover",
    body: "We map how leads arrive, how deals move, and where admin work is accumulating today.",
  },
  {
    no: "02",
    title: "Prioritize",
    body: "Together we pick the one function that will relieve the most pressure first.",
  },
  {
    no: "03",
    title: "Build",
    body: "We set up the process, tools, templates, and documentation needed to run it properly.",
  },
  {
    no: "04",
    title: "Run",
    body: "Our team operates it as an agreed monthly scope, with regular reporting back to you.",
  },
  {
    no: "05",
    title: "Improve",
    body: "We review what is working, refine the process, and expand only when the current work is stable.",
  },
];

const audience = [
  {
    icon: LineChart,
    title: "Growing businesses",
    body: "Demand is increasing faster than the internal capacity to handle it properly.",
  },
  {
    icon: UserRound,
    title: "Owner-led companies",
    body: "Too much still routes through the owner, from follow-up to invoicing.",
  },
  {
    icon: Users,
    title: "Lean teams",
    body: "A small team already at capacity, with no appetite for four new hires.",
  },
];

const expansion = [
  "Lead Generation",
  "Sales Follow-Up",
  "Social Media",
  "Back Office",
  "Integrated Operations",
];

const faqs = [
  {
    q: "What exactly does Zisaura do?",
    a: "We act as an outsourced growth and operations function. That covers lead generation, sales development and follow-up, social media marketing, and accounting and back-office support — coordinated by one team rather than four separate providers.",
  },
  {
    q: "Do you guarantee leads or sales?",
    a: "No. We commit to executing the activities we agree on, consistently and transparently, and to reporting what was done and what resulted. Anyone guaranteeing a specific number of leads or sales is guessing about your market.",
  },
  {
    q: "Do we have to start with everything?",
    a: "No. Most engagements begin with a single function — usually the one causing the most pressure — and expand only when that work is running reliably.",
  },
  {
    q: "Are you an accounting firm?",
    a: "No. We provide bookkeeping and back-office support work. We do not provide CPA, tax, audit, or legal services, and we work alongside your accountant rather than replacing them.",
  },
  {
    q: "How is the work scoped and priced?",
    a: "As a defined monthly scope agreed in advance, so you know what is included before anything starts. We discuss scope and pricing openly on the first call.",
  },
  {
    q: "What happens on the first call?",
    a: "A short conversation about how your business currently gets leads, follows up, and handles admin. If there is an obvious first thing we can take off your plate, we will say so. If there isn't, we will say that too.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] grid-lines"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full blur-3xl"
            style={{ background: "var(--gradient-accent)" }}
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
            <div className="rise">
              <p className="eyebrow">Outsourced Growth &amp; Operations</p>
              <h1 className="font-display mt-6 text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Your sales and back office.
                <br />
                <span className="text-accent">One team.</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Zisaura runs the work that keeps a growing business moving —
                generating leads, following up on sales, maintaining your presence,
                and handling back-office admin — as one coordinated function instead
                of four disconnected services.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <BookCallButton />
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                >
                  Explore Services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
              <p className="mt-6 font-mono text-xs text-muted-foreground">
                No long-term commitment required to start a conversation.
              </p>
            </div>

            <OperatingSystemVisual />
          </div>
        </section>

        {/* Problem */}
        <Section id="problem" eyebrow="The Problem">
          <SectionHeading>
            Growth gets complicated when everything depends on the owner.
          </SectionHeading>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {problems.map((p) => (
              <div key={p.title} className="bg-card p-7">
                <p.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="font-display mt-5 text-lg tracking-tight">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Services */}
        <Section id="services" eyebrow="What We Do" tone="surface">
          <SectionHeading>Four functions. One accountable partner.</SectionHeading>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.no}
                className="rounded-lg border border-border bg-card p-7 transition-colors hover:border-border-strong"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs tracking-[0.2em] text-accent">
                    {s.no}
                  </span>
                  <s.icon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <h3 className="font-display mt-6 text-2xl tracking-tight">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                      <span
                        className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden="true"
                      />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        {/* Why Zisaura */}
        <Section id="about" eyebrow="Why Zisaura">
          <SectionHeading>An operating partner, not another vendor.</SectionHeading>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Zisaura exists because growing businesses rarely need four separate
            agencies. They need one team that understands how the work connects, and
            takes responsibility for keeping it running.
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {whyZisaura.map((w) => (
              <div
                key={w.title}
                className="flex gap-5 rounded-lg border border-border bg-card p-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-secondary">
                  <w.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-lg tracking-tight">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {w.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section id="how-it-works" eyebrow="How It Works" tone="surface">
          <SectionHeading>A deliberate five-step engagement.</SectionHeading>
          <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {steps.map((s) => (
              <li key={s.no} className="rounded-lg border border-border bg-card p-6">
                <span className="font-mono text-xs tracking-[0.2em] text-accent">
                  {s.no}
                </span>
                <div className="mt-4 h-px w-full bg-border" aria-hidden="true" />
                <h3 className="font-display mt-4 text-lg tracking-tight">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </Section>

        {/* Who we work with */}
        <Section id="who-we-work-with" eyebrow="Who We Work With">
          <SectionHeading>Built for businesses in the messy middle.</SectionHeading>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {audience.map((a) => (
              <div key={a.title} className="rounded-lg border border-border bg-card p-7">
                <a.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="font-display mt-5 text-lg tracking-tight">{a.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Starting point */}
        <Section id="starting-point" eyebrow="Starting Point" tone="surface">
          <SectionHeading>Start with one function. Expand when it's working.</SectionHeading>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Most partnerships follow the same path. You don't have to move through all
            of it — you move as far as it makes sense for your business.
          </p>
          <div className="mt-12 flex flex-col gap-3 lg:flex-row lg:items-stretch">
            {expansion.map((label, i) => (
              <div key={label} className="flex flex-1 items-center gap-3">
                <div className="flex-1 rounded-lg border border-border bg-card px-5 py-6">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-sm font-medium leading-snug">{label}</p>
                </div>
                {i < expansion.length - 1 && (
                  <ArrowRight
                    className="hidden h-4 w-4 shrink-0 text-muted-foreground lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            ))}
          </div>
        </Section>

        {/* Transparency */}
        <Section id="transparency" eyebrow="Transparency">
          <SectionHeading>Simple, transparent partnerships.</SectionHeading>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
            {[
              {
                icon: ClipboardList,
                title: "Scope agreed in advance",
                body: "You know what is included each month before any work begins.",
              },
              {
                icon: Repeat,
                title: "Regular reporting",
                body: "A clear account of what was done and what came of it — no vague dashboards.",
              },
              {
                icon: Building2,
                title: "No overstated claims",
                body: "We describe what we will do, not results we cannot promise.",
              },
            ].map((t) => (
              <div key={t.title} className="bg-card p-7">
                <t.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="font-display mt-5 text-lg tracking-tight">{t.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {t.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq" eyebrow="FAQ" tone="surface">
          <SectionHeading>Questions worth asking.</SectionHeading>
          <Accordion type="single" collapsible className="mt-12 max-w-3xl">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-border">
                <AccordionTrigger className="text-left font-display text-base tracking-tight hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        {/* Final CTA / booking */}
        <section id="contact" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
            <div className="relative overflow-hidden rounded-xl border border-border bg-card p-9 sm:p-14">
              <div
                className="pointer-events-none absolute inset-0 opacity-30 grid-lines"
                aria-hidden="true"
              />
              <div className="relative max-w-2xl">
                <p className="eyebrow">Book a Call</p>
                <h2 className="font-display mt-6 text-3xl leading-tight tracking-tight sm:text-4xl">
                  Let's find the first thing Zisaura can take off your plate.
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                  A short, direct conversation about how your business currently gets
                  leads, follows up, and handles admin. No pitch deck, no pressure.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <BookCallButton />
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    <MailOpen className="h-4 w-4" aria-hidden="true" />
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <p className="mt-6 font-mono text-xs text-muted-foreground">
                  No long-term commitment required to start a conversation.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function Section({
  id,
  eyebrow,
  tone,
  children,
}: {
  id: string;
  eyebrow: string;
  tone?: "surface";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`border-b border-border ${tone === "surface" ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <p className="eyebrow">{eyebrow}</p>
        {children}
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display mt-6 max-w-3xl text-3xl leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
      {children}
    </h2>
  );
}

function OperatingSystemVisual() {
  const nodes = [
    { label: "Lead", icon: Search },
    { label: "Sales", icon: MessageSquare },
    { label: "Customer", icon: UserRound },
    { label: "Operations", icon: Settings2 },
  ];

  return (
    <div
      className="relative rounded-xl border border-border bg-card p-7 shadow-[var(--shadow-panel)] sm:p-9"
      role="img"
      aria-label="Diagram of a connected business operating system: Lead flows to Sales, Sales to Customer, Customer to Operations, and Operations back to Lead."
    >
      <div className="flex items-center justify-between font-mono text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground">
        <span>Operating System</span>
        <span className="text-accent">Connected</span>
      </div>

      <div className="mt-8 space-y-4">
        {nodes.map((n, i) => (
          <div key={n.label}>
            <div className="flex items-center gap-4 rounded-lg border border-border bg-secondary/60 px-5 py-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background">
                <n.icon className="h-4 w-4 text-accent" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium">{n.label}</span>
              <span className="ml-auto font-mono text-[0.625rem] text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            {i < nodes.length - 1 && (
              <div className="ml-9 h-5 w-px bg-border" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center gap-3 border-t border-border pt-6 font-mono text-[0.625rem] uppercase tracking-[0.18em] text-muted-foreground">
        <Repeat className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
        One continuous loop — run by one team
      </div>
    </div>
  );
}
