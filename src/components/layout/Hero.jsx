import React from "react";
import CustomButton from "./CustomButton";

const HERO_PRODUCT_IMG = `/images/products/flicknet/${encodeURIComponent("DESIGN 1B.png")}`;

const Hero = () => {
  return (
    <main id="top" className="container mx-auto px-6 pt-16 pb-20 md:pb-28 text-left">
      <div className="grid gap-12 lg:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-3 border border-white/20 bg-black/40 px-4 py-2 rounded-sm mb-10">
            <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-300">
              Product preview
            </span>
            <span className="text-sm text-zinc-200">
              Flicknet — presale opening soon
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight mb-8 max-w-5xl">
            Internet-grade training
            <br />
            for modern IT teams.
          </h1>

          <p className="text-lg text-zinc-300 mb-10 max-w-2xl leading-relaxed">
            Build practical cloud, networking, and security skills with guided
            labs and expert-led paths. Learn faster. Ship smarter. Stay mission
            ready.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <CustomButton href="#flicknet">View Flicknet</CustomButton>
            <CustomButton href="#innovations" variant="secondary">
              Learn more
            </CustomButton>
          </div>
        </div>

        <div className="lg:pl-4">
          <figure className="relative">
            <img
              src={HERO_PRODUCT_IMG}
              alt="Flicknet hardware design preview"
              className="w-full h-auto object-contain max-h-[min(640px,78vh)] lg:max-h-[min(820px,88vh)] mx-auto origin-center animate-hero-spin motion-reduce:animate-none will-change-transform"
            />
            <figcaption className="mt-4 text-center text-[11px] tracking-[0.18em] uppercase text-zinc-500">
              Flicknet · industrial design render
            </figcaption>
          </figure>
        </div>
      </div>
    </main>
  );
};

export default Hero;
