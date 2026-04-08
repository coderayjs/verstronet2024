import React, { useState } from "react";
import CustomButton from "../layout/CustomButton";

const FLICKNET_IMAGES = [
  "DESIGN 1B.png",
  "DESIGN 188U.png",
  "FLICKNET1aas.png",
  "FLICKNET1qq.png",
  "FLICKNET1ww.png",
  "aaaaaxa.png",
  "qqqa.png",
  "wwwwa.png",
  "wwwwsds.png",
  "wwwww.png",
  "wwwwwss.png",
];

const imageSrc = (filename) =>
  `/images/products/flicknet/${encodeURIComponent(filename)}`;

const FlicknetPresale = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="flicknet" className="scroll-mt-24 border-t border-white/10">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-[11px] tracking-[0.28em] uppercase text-zinc-500">
            Products
          </span>
          <span className="text-zinc-600">·</span>
          <span className="inline-flex items-center rounded-sm border border-amber-500/40 bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-amber-200">
            Presale
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Flicknet
            </h2>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Our latest connected platform—engineered for reliability in
              demanding environments. Early access opens soon; secure your place
              in line.
            </p>
            <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
              Renders below are from the current industrial design set (multiple
              configurations and form factors under evaluation).
            </p>
            <div className="flex flex-wrap gap-4">
              <CustomButton to="/sale" variant="primary">
                Presale & colorways
              </CustomButton>
              <CustomButton href="#innovations" variant="secondary">
                Product story
              </CustomButton>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-sm border border-white/15 bg-black/40">
              <img
                src={imageSrc(FLICKNET_IMAGES[activeIndex])}
                alt={`Flicknet design ${activeIndex + 1}`}
                className="w-full h-auto object-contain max-h-[min(420px,55vh)] mx-auto"
              />
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {FLICKNET_IMAGES.map((file, i) => (
                <button
                  key={file}
                  type="button"
                  aria-label={`View design ${file.replace(".png", "")}`}
                  onClick={() => setActiveIndex(i)}
                  className={`overflow-hidden rounded-sm border bg-black/30 p-0.5 transition-colors ${
                    i === activeIndex
                      ? "border-white ring-1 ring-white/40"
                      : "border-white/10 hover:border-white/30"
                  }`}>
                  <img
                    src={imageSrc(file)}
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
