import React, { useState } from "react";
import CustomButton from "../layout/CustomButton";
import {
  FLICKNET_VARIANTS,
  flicknetImg,
} from "../../constants/flicknetVariants";

const FLICKNET_IMAGES = FLICKNET_VARIANTS.map((v) => v.file);

const FlicknetPresale = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const frame =
    "overflow-hidden rounded-sm border border-zinc-200/90 bg-zinc-100/80 dark:border-white/15 dark:bg-black/40";

  return (
    <section
      id="flicknet"
      className="scroll-mt-24 border-t border-zinc-200/80 dark:border-white/10">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
            Products
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">·</span>
          <span className="inline-flex items-center rounded-sm border border-amber-500/50 bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-200">
            Presale
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
              Flicknet
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              Our latest connected platform—engineered for reliability in
              demanding environments. Early access opens soon; secure your place
              in line.
            </p>
            <p className="mb-8 text-sm leading-relaxed text-zinc-500">
              Renders below are from the current industrial design set (multiple
              configurations and form factors under evaluation).
            </p>
            <div className="flex flex-wrap gap-4">
              <CustomButton to="/sale/flicknet" variant="primary">
                Presale & colorways
              </CustomButton>
              <CustomButton href="#innovations" variant="secondary">
                Product story
              </CustomButton>
            </div>
          </div>

          <div className="space-y-4">
            <div className={frame}>
              <img
                src={flicknetImg(FLICKNET_IMAGES[activeIndex])}
                alt={`Flicknet design ${activeIndex + 1}`}
                className="mx-auto h-auto max-h-[min(420px,55vh)] w-full object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
              {FLICKNET_IMAGES.map((file, i) => (
                <button
                  key={file}
                  type="button"
                  aria-label={`View design ${file.replace(".png", "")}`}
                  onClick={() => setActiveIndex(i)}
                  className={`overflow-hidden rounded-sm border bg-zinc-100/90 p-0.5 transition-colors dark:bg-black/30 ${
                    i === activeIndex
                      ? "border-zinc-900 ring-1 ring-zinc-900/30 dark:border-white dark:ring-white/40"
                      : "border-zinc-200 hover:border-zinc-400 dark:border-white/10 dark:hover:border-white/30"
                  }`}>
                  <img
                    src={flicknetImg(file)}
                    alt=""
                    className="h-14 w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlicknetPresale;
