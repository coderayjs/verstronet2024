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

  return (
    <section id="niletron" className="scroll-mt-24 border-t border-white/10">
      <div className="container mx-auto px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="text-[11px] tracking-[0.28em] uppercase text-zinc-500">
            Products
          </span>
          <span className="text-zinc-600">·</span>
          <span className="inline-flex items-center rounded-sm border border-sky-500/40 bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold tracking-[0.2em] uppercase text-sky-200">
            Niletron 1.0
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              Niletron 1.0
            </h2>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              Next-generation control and telemetry fabric—built for scale,
              auditability, and long-run deployments. Browse the photo set
              beside this panel.
            </p>
            <p className="text-sm text-zinc-500 mb-8 leading-relaxed">
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
              <div className="flex min-h-[280px] flex-col items-center justify-center rounded-sm border border-dashed border-white/20 bg-black/30 px-6 py-12 text-center">
                <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
                  Product imagery coming soon. When your Niletron 1.0 renders are
                  ready, they will appear in this gallery automatically.
                </p>
              </div>
            ) : (
              <>
                <div className="overflow-hidden rounded-sm border border-white/15 bg-black/40">
                  <img
                    src={imageSrc(NILETRON_IMAGES[activeIndex])}
                    alt={`Niletron 1.0 ${activeIndex + 1}`}
                    className="w-full h-auto object-contain max-h-[min(420px,55vh)] mx-auto"
                  />
                </div>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                  {NILETRON_IMAGES.map((file, i) => (
                    <button
                      key={file}
                      type="button"
                      aria-label={`View ${file.replace(/\.[^.]+$/, "")}`}
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
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NiletronProduct;
