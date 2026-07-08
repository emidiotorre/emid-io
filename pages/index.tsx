import Head from "next/head";
import dynamic from "next/dynamic";
import { ReactNode, useEffect, useState } from "react";
import CopyEmail from "../components/copyEmail";

const MethaneMap = dynamic(() => import("../components/MethaneMap"), {
  ssr: false,
});
const SmpMap = dynamic(() => import("../components/SmpMap"), {
  ssr: false,
});

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

const Reveal: React.FC<{
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}> = ({ children, className = "", delay = 0, as: Tag = "div" }) => {
  const style = delay ? ({ ["--reveal-delay" as any]: `${delay}ms` } as any) : undefined;
  // @ts-ignore - dynamic tag
  return (
    <Tag className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
};

const Kicker: React.FC<{ children: ReactNode; onDark?: boolean }> = ({
  children,
  onDark,
}) => (
  <span
    className={`inline-flex items-center gap-2.5 font-mono text-[0.7rem] uppercase tracking-mono ${
      onDark ? "text-on-abyss-mut" : "text-ink-3"
    }`}
  >
    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
    {children}
  </span>
);

const Todo: React.FC<{ children: ReactNode }> = ({ children }) => (
  <span
    title="Placeholder — replace with confirmed content"
    className="font-mono text-[0.7rem] uppercase tracking-mono text-accent-strong/90"
  >
    ◌ {children}
  </span>
);

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */

const CAPABILITIES = [
  {
    title: "Data platform architecture",
    body: "End-to-end design and delivery of analytics and data platforms — from ingestion and storage through serving, access, and governance.",
    tag: "ARCHITECTURE",
  },
  {
    title: "Data pipelines & engineering",
    body: "Reliable pipelines that move data from source to decision: batch and streaming, tested, observable, and owned by your team.",
    tag: "ENGINEERING",
  },
  {
    title: "GIS & geospatial data",
    body: "Geospatial pipelines, spatial analytics, and mapping — turning location and Earth-observation data into layers people can use.",
    tag: "GEOSPATIAL",
  },
  {
    title: "Data visualization",
    body: "Dense, technical datasets rendered into legible, decision-grade views that hold up in front of an audience.",
    tag: "VISUALIZATION",
  },
  {
    title: "AI adoption & management",
    body: "Strategy, governance, and pragmatic rollout of AI — deciding where it earns its place, and keeping it accountable once it's live.",
    tag: "AI",
  },
  {
    title: "Analytics & data strategy",
    body: "The business layer: what to measure, what it's worth, and how the platform pays for the investment behind it.",
    tag: "STRATEGY",
  },
];

const PRINCIPLES = [
  {
    title: "Business first",
    body: "Every platform decision ties back to an outcome. Technology that can't earn its place doesn't ship.",
  },
  {
    title: "Real over impressive",
    body: "Working software in production beats architecture diagrams. I move quickly and leave things you can run.",
  },
  {
    title: "Built to be owned",
    body: "Systems your team can operate, extend, and govern — not a black box that depends on me forever.",
  },
  {
    title: "Legible by design",
    body: "Data, models, and decisions made transparent, so the people who are accountable can see what's happening.",
  },
];

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

const Nav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-nav transition-colors duration-500 ease-out-quart ${
        scrolled
          ? "border-b border-line bg-paper/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="group flex items-baseline gap-3">
          <span
            className={`text-lg font-extrabold tracking-tight transition-colors ${
              scrolled ? "text-ink" : "text-on-abyss"
            }`}
          >
            Emidio&nbsp;Torre
          </span>
          <span
            className={`hidden font-mono text-[0.65rem] uppercase tracking-mono sm:inline ${
              scrolled ? "text-ink-3" : "text-on-abyss-mut"
            }`}
          >
            Data&nbsp;·&nbsp;Platform&nbsp;·&nbsp;AI
          </span>
        </a>
        <nav className="flex items-center gap-6">
          <div
            className={`hidden items-center gap-6 font-mono text-[0.7rem] uppercase tracking-mono md:flex ${
              scrolled ? "text-ink-2" : "text-on-abyss-mut"
            }`}
          >
            <a href="#capabilities" className="transition-colors hover:text-accent">
              Capabilities
            </a>
            <a href="#approach" className="transition-colors hover:text-accent">
              Approach
            </a>
            <a href="#contact" className="transition-colors hover:text-accent">
              Contact
            </a>
          </div>
          <CopyEmail variant={scrolled ? "ghost" : "onDark"} className="scale-90 sm:scale-100" />
        </nav>
      </div>
    </header>
  );
};

const Hero: React.FC = () => (
  <section
    id="top"
    className="relative isolate min-h-[100svh] overflow-hidden bg-abyss text-on-abyss"
  >
    <div className="mx-auto grid min-h-[100svh] max-w-[1380px] grid-cols-1 items-center gap-y-12 px-5 pb-12 pt-28 sm:px-8 lg:grid-cols-[0.92fr_1.15fr] lg:gap-x-8 lg:pb-16">
      {/* content */}
      <div className="order-2 lg:order-1">
        <Reveal>
          <Kicker onDark>Business &amp; data-platform consultant</Kicker>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-6 max-w-[16ch] text-[clamp(2.25rem,1rem+4.4vw,4.25rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-on-abyss">
            I build the data platforms that critical work depends on.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-7 max-w-prose text-lg leading-relaxed text-on-abyss-mut">
            A business and technical consultant working across data engineering,
            GIS, visualization, and AI. Currently leading development of the data
            platform at the{" "}
            <span className="text-on-abyss">
              International Methane Emissions Observatory (IMEO)
            </span>
            .
          </p>
        </Reveal>
        <Reveal
          delay={240}
          className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <CopyEmail variant="onDark" />
          <a
            href="#capabilities"
            className="font-mono text-xs uppercase tracking-mono text-on-abyss-mut underline decoration-abyss-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
          >
            What I do ↓
          </a>
        </Reveal>
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-[0.65rem] uppercase tracking-mono text-on-abyss-mut">
          <span>Salerno, Italy — working worldwide</span>
          <span className="hidden text-abyss-line sm:inline">/</span>
          <span>GIS · Pipelines · Platforms · AI</span>
        </div>
      </div>

      {/* globe module — intentionally NOT wrapped in a reveal/transform:
          a transformed or will-change ancestor can offset the WebGL canvas's
          pointer hit-testing and break dragging. It fades in on its own. */}
      <figure className="order-1 lg:order-2 lg:ml-auto lg:justify-self-end">
        <div className="relative mx-auto aspect-square w-full max-w-[28rem] cursor-grab active:cursor-grabbing sm:max-w-[34rem] lg:max-w-[48rem]">
          <MethaneMap />
          {/* fade the square edges into the background — must not eat pointer
              events, so the globe stays fully draggable */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 50% 48%, transparent 56%, var(--abyss) 78%)",
            }}
          />
        </div>
        <figcaption className="mx-auto mt-8 max-w-[28rem] font-mono text-[0.62rem] uppercase leading-relaxed tracking-mono text-on-abyss-mut sm:max-w-[34rem] lg:max-w-[48rem]">
          <span className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-on-abyss">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
            Top 50 methane super-emitters
            <span className="text-abyss-line">·</span>
            <span className="text-on-abyss-mut">sized by flux rate</span>
            <span className="text-abyss-line">·</span>
            <span className="text-accent">drag to rotate ↻</span>
          </span>
          <span className="mt-1 block text-[0.55rem] text-on-abyss-mut/70">
            Publicly available data · UNEP IMEO (2026-06) · Basemap © OpenStreetMap, © CARTO
          </span>
        </figcaption>
      </figure>
    </div>
  </section>
);

const Statement: React.FC = () => (
  <section className="relative overflow-hidden border-b border-line bg-paper">
    <div className="mx-auto grid max-w-content items-center gap-y-12 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-[1fr_1fr] lg:gap-x-16">
      <Reveal as="p" className="max-w-[24ch] text-title font-medium text-ink">
        I help enterprise and public-sector teams{" "}
        <span className="text-ink-3">design, build, and govern</span> the
        platforms their decisions run on — and get them there faster than they
        expect.
      </Reveal>
      <Reveal delay={120} as="figure" className="w-full">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-paper-2">
          <SmpMap />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-line"
          />
        </div>
        <figcaption className="mt-3 font-mono text-[0.6rem] uppercase tracking-mono text-ink-3">
          <span className="flex flex-wrap items-center gap-x-4 gap-y-1 text-ink-2">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#c0392b]" />
              Coal mines
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#2f6b8f]" />
              Steel plants
            </span>
          </span>
          <span className="mt-1.5 block leading-relaxed">
            Publicly available data · UNEP IMEO Coal Methane Database (CC BY 4.0)
            · Basemap © OpenStreetMap, © CARTO
          </span>
        </figcaption>
      </Reveal>
    </div>
  </section>
);

const Capabilities: React.FC = () => (
  <section id="capabilities" className="border-b border-line bg-paper-2">
    <div className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28">
      <div className="grid gap-6 md:grid-cols-[1fr_2fr] md:gap-16">
        <div className="md:sticky md:top-28 md:self-start">
          <Reveal>
            <h2 className="text-display-sm font-extrabold text-ink">
              Capabilities
            </h2>
            <p className="mt-5 max-w-prose text-ink-2">
              Six areas, one job: making data infrastructure that a business can
              trust and a team can run. I move across them as the problem
              demands.
            </p>
          </Reveal>
        </div>

        <ul className="border-t border-line-strong">
          {CAPABILITIES.map((c, i) => (
            <Reveal
              as="li"
              key={c.tag}
              delay={i * 60}
              className="group grid grid-cols-1 gap-2 border-b border-line py-7 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
            >
              <div>
                <h3 className="text-xl font-bold text-ink">{c.title}</h3>
                <p className="mt-2 max-w-prose text-ink-2">{c.body}</p>
              </div>
              <span className="font-mono text-[0.7rem] uppercase tracking-mono text-ink-3 transition-colors group-hover:text-accent-strong">
                {c.tag}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const Approach: React.FC = () => (
  <section id="approach" className="relative overflow-hidden bg-abyss text-on-abyss">
    <div
      aria-hidden
      className="grain pointer-events-none absolute inset-0 opacity-60"
    />
    <div className="relative mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-32">
      <Reveal className="max-w-2xl">
        <h2 className="text-display-sm font-extrabold text-on-abyss">
          Principles, not slideware.
        </h2>
        <p className="mt-5 max-w-prose text-on-abyss-mut">
          Clients bring me in when something important has to work and can't
          wait. These are the commitments that get it there.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px overflow-hidden rounded-lg border border-abyss-line bg-abyss-line sm:grid-cols-2">
        {PRINCIPLES.map((p, i) => (
          <Reveal
            key={p.title}
            delay={i * 70}
            className="bg-abyss p-7 transition-colors duration-500 hover:bg-abyss-2 sm:p-9"
          >
            <div className="flex items-center gap-3">
              <span aria-hidden className="h-px w-6 shrink-0 bg-accent" />
              <h3 className="text-xl font-bold text-on-abyss">{p.title}</h3>
            </div>
            <p className="mt-3 max-w-prose text-on-abyss-mut">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Contact: React.FC = () => (
  <section id="contact" className="relative overflow-hidden bg-abyss text-on-abyss">
    <div className="mx-auto max-w-content px-5 py-28 sm:px-8 sm:py-36">
      <Reveal className="max-w-3xl">
        <h2 className="text-display font-extrabold text-on-abyss">
          Have a data problem worth solving?
        </h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-on-abyss-mut">
          If you're standing up a data platform, wrangling pipelines, bringing
          GIS or AI into the picture — or you just need someone senior to work
          out what's actually going on — let's talk.
        </p>
        <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
          <CopyEmail variant="onDark" className="text-sm" />
          <div className="flex items-center gap-5 font-mono text-[0.7rem] uppercase tracking-mono text-on-abyss-mut">
            <span>Salerno, Italy</span>
            <span className="text-abyss-line">/</span>
            <span className="inline-flex items-center gap-1.5">
              LinkedIn <Todo>Link</Todo>
            </span>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="border-t border-abyss-line bg-abyss text-on-abyss-mut">
    <div className="mx-auto flex max-w-content flex-col gap-4 px-5 py-8 font-mono text-[0.65rem] uppercase tracking-mono sm:flex-row sm:items-center sm:justify-between sm:px-8">
      <span className="text-on-abyss">Emidio Torre — Data &amp; platform consultant</span>
      <span>40.6824°N · 14.7681°E</span>
      <span>© {2026} · Built with Next.js</span>
    </div>
  </footer>
);

/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <Head>
        <title>Emidio Torre — Data &amp; Platform Consultant</title>
        <meta
          name="description"
          content="Emidio Torre is a business and technical consultant working across data engineering, GIS, visualization, and AI — currently leading the data platform at the International Methane Emissions Observatory (IMEO)."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Nav />
      <main>
        <Hero />
        <Statement />
        <Capabilities />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
