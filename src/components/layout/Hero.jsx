import React from "react";
import CustomButton from "./CustomButton";

const HERO_PRODUCT_IMG = `/images/products/flicknet/${encodeURIComponent("DESIGN 1B.png")}`;

const Hero = () => {
  return (
    <main
      id="top"
      className="container mx-auto px-6 pt-16 pb-20 text-left md:pb-28">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:items-center lg:gap-12">
        <div>
          <div className="mb-10 inline-flex items-center gap-3 rounded-sm border border-zinc-300/80 bg-white/70 px-4 py-2 dark:border-white/20 dark:bg-black/40">
            <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 dark:text-zinc-300">
              Product preview
            </span>
            <span className="text-sm text-zinc-800 dark:text-zinc-200">
              Flicknet — presale opening soon
            </span>
          </div>

          <h1 className="mb-8 max-w-5xl text-5xl font-semibold leading-[1.05] tracking-tight text-zinc-900 dark:text-white md:text-6xl xl:text-7xl">
            Industrial hardware
            <br />
            for operators and live environments.
          </h1>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
            Verstronet designs Flicknet, Niletron 1.0, and companion gear—built for
            racks, labs, and the field, with presales and inventory through our
            shop.
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
              className="mx-auto h-auto max-h-[min(640px,78vh)] w-full origin-center object-contain animate-hero-spin will-change-transform motion-reduce:animate-none lg:max-h-[min(820px,88vh)]"
            />
            <figcaption className="mt-4 text-center text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              Flicknet · industrial design render
            </figcaption>
          </figure>
        </div>
      </div>
    </main>
  );
};

export default Hero;
