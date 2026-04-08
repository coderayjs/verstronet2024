import React, { useState } from "react";
import { Link } from "react-router-dom";
import CustomButton from "../components/layout/CustomButton";
import {
  FLICKNET_VIDEO_POSTER,
  FLICKNET_VIDEO_SRC,
} from "../constants/flicknetMedia";

const FLICKNET_VARIANTS = [
  {
    file: "DESIGN 1B.png",
    title: "Graphite",
    spec: "Matte black shell, low-reflectance finish for rack and field use.",
  },
  {
    file: "DESIGN 188U.png",
    title: "Steel",
    spec: "Brushed metal accent with vent-forward thermal layout.",
  },
  {
    file: "FLICKNET1aas.png",
    title: "Amber",
    spec: "Warm accent trim for high-visibility operator cues.",
  },
  {
    file: "FLICKNET1qq.png",
    title: "Ocean",
    spec: "Cool blue-gray tone, neutral in mixed lighting.",
  },
  {
    file: "FLICKNET1ww.png",
    title: "Snow",
    spec: "Light chassis for contrast against dark consoles.",
  },
  {
    file: "aaaaaxa.png",
    title: "Carbon",
    spec: "Compact footprint, carbon-texture grip surfaces.",
  },
  {
    file: "qqqa.png",
    title: "Signal",
    spec: "Safety-forward highlights for lab and staging builds.",
  },
  {
    file: "wwwwa.png",
    title: "Slate",
    spec: "Mid-gray baseline, blends with standard rack gear.",
  },
  {
    file: "wwwwsds.png",
    title: "Sand",
    spec: "Desert-tan option for outdoor and mobile kits.",
  },
  {
    file: "wwwww.png",
    title: "Obsidian",
    spec: "Deep gloss trim—flagship presentation variant.",
  },
  {
    file: "wwwwwss.png",
    title: "Silver",
    spec: "Silver alloy accents, lab-grade optics compatibility.",
  },
];

const imageSrc = (filename) =>
  `/images/products/flicknet/${encodeURIComponent(filename)}`;

const FlicknetSalePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = FLICKNET_VARIANTS[activeIndex];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-10 md:py-14">
        <Link
          to="/"
          className="inline-block text-[11px] tracking-[0.2em] uppercase text-zinc-500 hover:text-white transition-colors mb-10">
          ← Back to home
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[11px] tracking-[0.28em] uppercase text-zinc-500">
            Flicknet
          </span>
          <span className="text-zinc-600">·</span>
          <span className="inline-flex items-center rounded-sm border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-amber-200">
            Presale
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
          Flicknet presale
        </h1>
        <p className="text-lg text-zinc-300 mb-8 max-w-2xl leading-relaxed">
          Pick a colorway to see the large preview and specs. Early access list
          opens soon.
        </p>

        <div className="mb-12 overflow-hidden rounded-sm border border-white/15 bg-black">
          <video
            className="w-full h-auto max-h-[min(480px,65vh)] object-contain mx-auto block"
            src={FLICKNET_VIDEO_SRC}
            poster={FLICKNET_VIDEO_POSTER}
            autoPlay
            muted
            loop
            playsInline
            controls
          />
          <p className="border-t border-white/10 px-4 py-3 text-center text-[11px] tracking-[0.18em] uppercase text-zinc-500">
            Flicknet · product video
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="space-y-6 order-2 lg:order-1">
            <div className="overflow-hidden rounded-sm border border-white/15 bg-black/40">
              <img
                src={imageSrc(active.file)}
                alt={`Flicknet ${active.title}`}
                className="w-full h-auto object-contain max-h-[min(420px,55vh)] mx-auto"
              />
              <div className="border-t border-white/10 px-4 py-4">
                <p className="text-[11px] tracking-[0.22em] uppercase text-amber-200/90 mb-1">
                  {active.title}
                </p>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {active.spec}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <CustomButton href="#" variant="primary">
                Join presale list
              </CustomButton>
              <CustomButton to="/" variant="secondary">
                Home
              </CustomButton>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-sm text-zinc-500 mb-4 uppercase tracking-wide">
              Colorways
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FLICKNET_VARIANTS.map((variant, i) => (
                <button
                  key={variant.file}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  className={`text-left rounded-sm border overflow-hidden transition-colors ${
                    i === activeIndex
                      ? "border-white ring-1 ring-white/35 bg-white/[0.06]"
                      : "border-white/10 bg-black/20 hover:border-white/25"
                  }`}>
                  <div className="aspect-[4/3] max-h-32 sm:max-h-36 overflow-hidden bg-black/50">
                    <img
                      src={imageSrc(variant.file)}
                      alt=""
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] tracking-[0.18em] uppercase text-amber-200/90 mb-1">
                      {variant.title}
                    </p>
                    <p className="text-[11px] text-zinc-500 leading-snug line-clamp-3">
                      {variant.spec}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlicknetSalePage;
