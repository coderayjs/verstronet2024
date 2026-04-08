import React from "react";
import {
  Cpu,
  Layers,
  Radar,
  Shield,
  Sparkles,
  Workflow,
} from "lucide-react";
import FlicknetPresale from "./FlicknetPresale";
import NiletronProduct from "./NiletronProduct";

const sectionBgUrl = (filename) =>
  `/images/sectionbg/${encodeURIComponent(filename)}`;

const SectionShell = ({
  id,
  eyebrow,
  title,
  children,
  className = "",
  bgImage,
}) => (
  <section
    id={id}
    className={`relative scroll-mt-24 border-t border-white/10 overflow-hidden ${className}`}>
    {bgImage ? (
      <>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{ backgroundImage: `url(${sectionBgUrl(bgImage)})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[#060606]/82"
          aria-hidden
        />
      </>
    ) : null}
    <div className="relative z-10 container mx-auto px-6 py-20 md:py-28">
      <p className="text-[11px] tracking-[0.28em] uppercase text-zinc-500 mb-4">
        {eyebrow}
      </p>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white max-w-3xl mb-12">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, body }) => (
  <div className="group border border-white/10 bg-black/35 backdrop-blur-sm p-6 md:p-8 rounded-sm hover:border-white/25 hover:bg-black/45 transition-colors">
    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/15 bg-black/40 text-zinc-200">
      <Icon className="h-5 w-5" strokeWidth={1.5} />
    </div>
    <h3 className="text-sm font-semibold tracking-wide uppercase text-zinc-100 mb-2">
      {title}
    </h3>
    <p className="text-sm text-zinc-400 leading-relaxed">{body}</p>
  </div>
);

const HomeSections = () => {
  return (
    <div id="products" className="scroll-mt-24">
      <FlicknetPresale />
      <NiletronProduct />
      <SectionShell
        id="innovations"
        eyebrow="Innovations"
        title="Research-driven products that push what’s possible in the field."
        bgImage="art002e009279~large.jpg">
        <p className="text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          We prototype fast, validate with operators, and harden what works.
          From edge AI to resilient networks, innovation stays tied to deployable
          outcomes—not slide decks.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={Sparkles}
            title="Applied R&D"
            body="Rapid experimentation on architectures, protocols, and automation—prioritized by mission impact and technical risk."
          />
          <FeatureCard
            icon={Cpu}
            title="Edge & intelligent systems"
            body="Models and services designed for constrained environments: low latency, offline-first patterns, and observable behavior."
          />
          <FeatureCard
            icon={Workflow}
            title="Operational feedback loops"
            body="Telemetry, testing in realistic conditions, and iteration cycles that mirror how teams actually run systems."
          />
        </div>
      </SectionShell>

      <SectionShell
        id="mission-systems"
        eyebrow="Military & intelligence"
        title="Mission-ready system design for defense and intelligence contexts."
        bgImage="art002e009301~large.jpg">
        <p className="text-zinc-400 max-w-2xl mb-12 leading-relaxed">
          Experience with environments that demand strict assurance, interoperability,
          and discretion. We align engineering choices to classification,
          accreditation, and coalition interoperability where applicable.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <FeatureCard
            icon={Radar}
            title="C2 & situational awareness"
            body="Pipelines and interfaces that fuse data into actionable views—built for reliability when links and sensors are imperfect."
          />
          <FeatureCard
            icon={Shield}
            title="Hardened foundations"
            body="Design patterns for resilient command, control, and communications—segmentation, redundancy, and recovery you can rehearse."
          />
          <FeatureCard
            icon={Layers}
            title="Intelligent decision support"
            body="Human-in-the-loop automation: triage, summarization, and routing—transparent, auditable, and tuned to operator trust."
          />
        </div>
      </SectionShell>

      <section
        id="team"
        className="scroll-mt-24 border-t border-white/10 py-16 md:py-20">
        <div className="container mx-auto px-6">
          <p className="text-[11px] tracking-[0.28em] uppercase text-zinc-500 mb-3">
            Team
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4 tracking-tight">
            People behind Verstronet
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
            Leadership, engineering, and operations—bios and roles will appear
            here.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomeSections;
