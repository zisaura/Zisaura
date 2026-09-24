import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardList,
  FileText,
  Layers3,
  LineChart,
  Mail,
  MessageSquare,
  Receipt,
  Repeat2,
  Search,
  Settings2,
  Share2,
  Target,
  UserRound,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookCallButton, CONTACT_EMAIL } from "@/components/BookingDialog";
import { ContactForm } from "@/components/ContactForm";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

const TITLE = "Zisaura | Outsourced Sales, Marketing & Back-Office Support";
const DESCRIPTION =
  "Zisaura helps growing U.S. businesses with lead generation, sales follow-up, social media marketing, bookkeeping support and back-office operations.";
const SITE_URL = "https://your-web-dream-maker-02.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

const services = [
  {
    icon: Search,
    title: "Lead Generation",
    description:
      "Build a consistent pipeline of qualified prospects through targeted research, list building and outbound outreach.",
    items: ["ICP and target research", "Prospect research", "List building", "Cold outreach", "Lead qualification"],
  },
  {
    icon: MessageSquare,
    title: "Sales Development",
    description:
      "Turn prospects into conversations through consistent follow-up and organized sales execution.",
    items: ["Lead follow-up", "Appointment setting", "CRM management", "Sales sequences", "Sales administration", "Reporting"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Keep your business visible with consistent planning, content and social media management.",
    items: ["Content planning", "Content creation", "Posting", "Basic creative support", "Performance tracking"],
  },
  {
    icon: Receipt,
    title: "Accounting & Back Office",
    description:
      "Reduce administrative workload with practical bookkeeping support and recurring back-office assistance.",
    items: ["Bookkeeping support", "Invoicing", "Accounts receivable support", "Accounts payable support", "Data entry", "Scheduling", "Administrative reporting"],
  },
];

const plans = [
  {
    tier: "Starter",
    title: "Build Your Foundation",
    setup: "$995",
    monthly: "$745",
    items: ["Website setup", "Website management", "Social media management", "Content planning", "Content creation", "Basic reporting"],
    cta: "Get Started",
    featured: false,
  },
  {
    tier: "Growth",
    label: "Recommended Starting Point",
    title: "Build Your Pipeline",
    setup: "$1,995",
    monthly: "$2,950",
    items: ["Everything in Starter", "Lead generation", "Prospect research", "List building", "Cold outreach", "Sales follow-up", "Appointment setting", "CRM management", "Monthly reporting", "Basic workflow automation"],
    cta: "Book a Call",
    featured: true,
  },
  {
    tier: "Ultimate",
    label: "Outsource Your Operations",
    title: "Outsource Your Operations",
    setup: "$2,995",
    monthly: "$4,950",
    items: ["Everything in Growth", "Bookkeeping support", "Accounts receivable support", "Accounts payable support", "Administrative support", "Dedicated team", "Dedicated account management", "Custom workflows", "Automation", "Detailed reporting", "Management review", "Priority support"],
    cta: "Book a Call",
    featured: false,
  },
];

const steps = [
  ["01", "Discover", "Understand your business, goals, current processes and priorities."],
  ["02", "Prioritize", "Identify the functions that should be outsourced first."],
  ["03", "Build", "Set up the required workflows, systems and processes."],
  ["04", "Run", "Execute the agreed work consistently."],
  ["05", "Improve", "Review performance, identify bottlenecks and improve the workflow over time."],
];

const faqs = [
  ["Do you work with businesses in the U.S.?", "Yes. Zisaura is focused on supporting growing U.S. businesses with outsourced growth and operational functions."],
  ["Can I outsource only one function?", "Yes. Businesses can start with the function or functions that are most relevant to their current needs."],
  ["Can I add services later?", "Yes. As requirements change, additional functions can be added subject to scope and capacity."],
  ["Do you guarantee leads or sales?", "No. Results depend on factors including the market, offer, pricing, sales process and execution. Zisaura focuses on delivering the agreed work, processes and reporting."],
  ["Are you a CPA firm?", "Zisaura provides bookkeeping and back-office support. CPA, tax, audit and other regulated professional services are not included unless separately provided by appropriately qualified professionals."],
  ["How does pricing work?", "Plans have a setup fee and monthly service fee. Final scope and workload are agreed before work begins."],
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden border-b border-border">
          <div className="pointer-events-none absolute inset-0 opacity-30 grid-lines" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-28">
            <div className="rise">
              <p className="eyebrow">Outsourced Growth &amp; Operations</p>
              <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
                Your sales and back office. <span className="text-accent">One team.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Zisaura helps growing U.S. businesses generate leads, follow up with prospects, manage their online presence, and handle essential back-office work — without building a separate team for every function.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <BookCallButton>Book a Call</BookCallButton>
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-md border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:bg-secondary">
                  Explore Services <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
            <OperatingSystemVisual />
          </div>
        </section>

        <Section id="problem" eyebrow="The Challenge">
          <SectionHeading>Growth gets complicated when every function needs another hire.</SectionHeading>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Growing businesses need to find new prospects, follow up consistently, manage sales activity, maintain their online presence, keep administrative work organized, and handle recurring back-office tasks.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {["Finding new prospects", "Following up consistently", "Managing sales activity", "Maintaining online presence", "Organizing administrative work", "Handling recurring back-office tasks"].map((item, index) => (
              <div key={item} className="bg-card p-6">
                <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-4 text-sm font-medium">{item}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 font-display text-xl">Zisaura brings these functions together under one outsourced team.</p>
        </Section>

        <Section id="services" eyebrow="Services" tone="surface">
          <SectionHeading>The functions that keep a growing business moving.</SectionHeading>
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {services.map((service, index) => (
              <article key={service.title} className="rounded-lg border border-border bg-card p-7 transition-colors hover:border-border-strong">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
                  <service.icon className="h-5 w-5 text-muted-foreground" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                <ul className="mt-6 grid gap-2.5 border-t border-border pt-5 sm:grid-cols-2">
                  {service.items.map((item) => <ListItem key={item}>{item}</ListItem>)}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">Accounting and back-office services are support functions. Zisaura does not provide CPA, tax, audit, legal, or other regulated professional services.</p>
        </Section>

        <Section id="about" eyebrow="Why Zisaura">
          <SectionHeading>One partner. Multiple functions.</SectionHeading>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">
            Instead of hiring separate people for lead generation, sales administration, social media and recurring back-office work, businesses can outsource the functions they need to one coordinated team.
          </p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [Users, "One team", "Keep related growth and operational functions coordinated."],
              [Layers3, "Flexible support", "Start with the functions that matter most and expand as your needs change."],
              [ClipboardList, "Clear execution", "Work from defined responsibilities, reporting and practical workflows."],
            ].map(([Icon, title, copy]) => (
              <article key={String(title)} className="rounded-lg border border-border bg-card p-7">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl">{String(title)}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{String(copy)}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="plans" eyebrow="Plans" tone="surface">
          <SectionHeading>Simple plans for different stages of growth.</SectionHeading>
          <p className="mt-5 text-base text-muted-foreground">Start with what you need. Expand when the business requires it.</p>
          <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.tier} className={`relative rounded-lg border bg-card p-7 ${plan.featured ? "border-accent shadow-[var(--shadow-panel)]" : "border-border"}`}>
                {plan.label && <p className={`font-mono text-[0.6875rem] uppercase ${plan.featured ? "text-accent" : "text-muted-foreground"}`}>{plan.label}</p>}
                <p className="mt-5 font-mono text-xs uppercase text-muted-foreground">{plan.tier}</p>
                <h3 className="mt-3 font-display text-2xl">{plan.title}</h3>
                <div className="mt-7 grid grid-cols-2 gap-4 border-y border-border py-5">
                  <div><p className="text-xs text-muted-foreground">Setup</p><p className="mt-1 font-display text-xl">{plan.setup}</p></div>
                  <div><p className="text-xs text-muted-foreground">Monthly</p><p className="mt-1 font-display text-xl">{plan.monthly}<span className="text-xs font-normal text-muted-foreground"> / month</span></p></div>
                </div>
                <ul className="mt-6 space-y-2.5">{plan.items.map((item) => <ListItem key={item}>{item}</ListItem>)}</ul>
                <BookCallButton className="mt-7 w-full" variant={plan.featured ? "primary" : "outline"}>{plan.cta}</BookCallButton>
              </article>
            ))}
          </div>
          <p className="mt-7 text-center text-sm text-muted-foreground">All plans are customized to the agreed scope and workload.</p>
        </Section>

        <Section id="how-it-works" eyebrow="How It Works">
          <SectionHeading>A practical process built around your business.</SectionHeading>
          <ol className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {steps.map(([number, title, body]) => (
              <li key={number} className="rounded-lg border border-border bg-card p-6">
                <span className="font-mono text-xs text-accent">{number}</span>
                <div className="mt-4 h-px bg-border" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="who-we-work-with" eyebrow="Who We Work With" tone="surface">
          <SectionHeading>Built for growing businesses.</SectionHeading>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground">Zisaura works with growing U.S. businesses that need additional execution capacity without immediately building a large internal team.</p>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [LineChart, "Growing businesses", "Businesses that need more capacity as they grow."],
              [UserRound, "Owner-led companies", "Business owners who are still personally handling too many recurring tasks."],
              [Users, "Lean teams", "Companies that need additional execution without adding multiple full-time roles."],
            ].map(([Icon, title, body]) => (
              <article key={String(title)} className="rounded-lg border border-border bg-card p-7">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-5 font-display text-xl">{String(title)}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{String(body)}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="transparency" eyebrow="Transparency">
          <SectionHeading>Straightforward from the start.</SectionHeading>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
            {[
              [ClipboardList, "Clear scope", "We define responsibilities and deliverables before work begins."],
              [FileText, "Real reporting", "You should know what work is being performed and what is happening."],
              [Settings2, "Practical support", "We focus on execution that supports the way your business actually operates."],
              [CheckCircle2, "No inflated promises", "We do not promise guaranteed sales or results that depend on factors outside our control."],
            ].map(([Icon, title, body]) => (
              <article key={String(title)} className="bg-card p-7">
                <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg">{String(title)}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{String(body)}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="faq" eyebrow="FAQ" tone="surface">
          <SectionHeading>Questions before we start.</SectionHeading>
          <Accordion type="single" collapsible className="mt-12 max-w-3xl">
            {faqs.map(([question, answer]) => (
              <AccordionItem key={question} value={question} className="border-border">
                <AccordionTrigger className="text-left font-display text-base hover:no-underline">{question}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Section>

        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <div className="relative overflow-hidden rounded-lg border border-border bg-card p-8 sm:p-12">
              <div className="pointer-events-none absolute inset-0 opacity-20 grid-lines" aria-hidden="true" />
              <div className="relative max-w-3xl">
                <p className="eyebrow">Next Step</p>
                <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">Ready to take work off your plate?</h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground">Tell us what you're trying to improve. We'll discuss where outsourced support could make the biggest difference.</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <BookCallButton>Book a Call</BookCallButton>
                  <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-border-strong px-5 py-3 text-sm font-medium hover:bg-secondary">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:py-28">
            <div>
              <p className="eyebrow">Contact</p>
              <h2 className="mt-6 font-display text-3xl leading-tight sm:text-4xl">Let's talk about what your business needs next.</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">Share a little about your business and where you need more execution capacity.</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-7 inline-flex items-center gap-2 text-sm text-accent hover:underline">
                <Mail className="h-4 w-4" aria-hidden="true" /> {CONTACT_EMAIL}
              </a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Section({ id, eyebrow, tone, children }: { id: string; eyebrow: string; tone?: "surface"; children: React.ReactNode }) {
  return <section id={id} className={`border-b border-border ${tone === "surface" ? "bg-surface" : ""}`}><div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28"><p className="eyebrow">{eyebrow}</p>{children}</div></section>;
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-6 max-w-4xl font-display text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">{children}</h2>;
}

function ListItem({ children }: { children: React.ReactNode }) {
  return <li className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />{children}</li>;
}

function OperatingSystemVisual() {
  const nodes = [[Search, "Lead"], [Target, "Sales"], [UserRound, "Customer"], [Settings2, "Operations"]] as const;
  return (
    <div className="relative rounded-lg border border-border bg-card p-7 shadow-[var(--shadow-panel)] sm:p-9" role="img" aria-label="Connected business system flowing from lead to sales, customer, and operations.">
      <div className="flex items-center justify-between font-mono text-[0.625rem] uppercase text-muted-foreground"><span>Business System</span><span className="text-accent">Connected</span></div>
      <div className="mt-8 space-y-3">
        {nodes.map(([Icon, label], index) => <div key={label} className="flex items-center gap-4 rounded-md border border-border bg-secondary/60 px-5 py-4"><div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background"><Icon className="h-4 w-4 text-accent" aria-hidden="true" /></div><span className="text-sm font-medium">{label}</span><span className="ml-auto font-mono text-[0.625rem] text-muted-foreground">{String(index + 1).padStart(2, "0")}</span></div>)}
      </div>
      <div className="mt-7 flex items-center gap-3 border-t border-border pt-6 font-mono text-[0.625rem] uppercase text-muted-foreground"><Repeat2 className="h-3.5 w-3.5 text-accent" aria-hidden="true" />One coordinated team</div>
    </div>
  );
}
