import React, { useState } from "react";
import CustomButton from "../layout/CustomButton";

/** Web-ready assets under public/images/products/niletron/ (PNG/JPG; HEIC is converted for browsers). */
const NILETRON_IMAGES = [
  "IMG_0820.png",
  "IMG_0842.png",
  "IMG_0850.png",
  "IMG_0851.png",
  "IMG_0852.png",
  "IMG_0854.png",
];

const imageSrc = (filename) =>
  `/images/products/niletron/${encodeURIComponent(filename)}`;

const NiletronProduct = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const hasImages = NILETRON_IMAGES.length > 0;

  const frame =
    "overflow-hidden rounded-sm border border-zinc-200/90 bg-zinc-100/80 dark:border-white/15 dark:bg-black/40";

  return (
    <section
      id="niletron"
      className="scroll-mt-24 border-t border-zinc-200/80 dark:border-white/10">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
            Products
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">·</span>
          <span className="inline-flex items-center rounded-sm border border-sky-500/50 bg-sky-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-sky-900 dark:border-sky-500/40 dark:bg-sky-500/10 dark:text-sky-200">
            Niletron 1.0
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
              Niletron 1.0
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              Next-generation control and telemetry fabric—built for scale,
              auditability, and long-run deployments. Browse the photo set
              beside this panel.
            </p>
            <p className="mb-8 text-sm leading-relaxed text-zinc-500">
              Specs and availability will be announced as we lock the release.
            </p>
            <div className="flex flex-wrap gap-4">
              <CustomButton href="#" variant="primary">
                Get updates
              </CustomButton>
              <CustomButton href="#products" variant="secondary">
                All products
              </CustomButton>
            </div>
          </div>

          <div className="space-y-4">
            {!hasImages ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center rounded-sm border border-dashed border-zinc-300 bg-zinc-50 px-6 py-12 text-center dark:border-white/20 dark:bg-black/30">
                <p className="max-w-sm text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Product imagery coming soon. When your Niletron 1.0 renders are
                  ready, they will appear in this gallery automatically.
                </p>
              </div>
            ) : (
              <>
                <div className={frame}>
                  <img
                    src={imageSrc(NILETRON_IMAGES[activeIndex])}
                    alt={`Niletron 1.0 ${activeIndex + 1}`}
                    className="mx-auto h-auto max-h-[min(420px,55vh)] w-full object-contain"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {NILETRON_IMAGES.map((file, i) => (
                    <button
                      key={file}
                      type="button"
                      aria-label={`View ${file.replace(/\.[^.]+$/, "")}`}
                      onClick={() => setActiveIndex(i)}
                      className={`overflow-hidden rounded-sm border bg-zinc-100/90 p-0.5 transition-colors dark:bg-black/30 ${
                        i === activeIndex
                          ? "border-zinc-900 ring-1 ring-zinc-900/30 dark:border-white dark:ring-white/40"
                          : "border-zinc-200 hover:border-zinc-400 dark:border-white/10 dark:hover:border-white/30"
                      }`}>
                      <img
                        src={imageSrc(file)}
                        alt=""
                        className="h-14 w-full object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NiletronProduct;
