import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomButton from "../components/layout/CustomButton";
import FlicknetProductCard from "../components/shop/FlicknetProductCard";
import {
  FLICKNET_VIDEO_POSTER,
  FLICKNET_VIDEO_SRC,
} from "../constants/flicknetMedia";
import { SHOP_CATEGORIES } from "../constants/shopCategories";
import {
  FLICKNET_VARIANTS,
  flicknetFinishSlug,
  flicknetImg,
} from "../constants/flicknetVariants";

const flicknetShopItems =
  SHOP_CATEGORIES.find((c) => c.id === "flicknet")?.items ?? [];

const FlicknetSalePage = () => {
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(0);
  const active = FLICKNET_VARIANTS[activeIndex];

  useEffect(() => {
    const raw = (location.hash || "").replace(/^#/, "");
    if (!raw.startsWith("finish-")) return;
    const slug = raw.slice("finish-".length);
    const idx = FLICKNET_VARIANTS.findIndex(
      (v) => flicknetFinishSlug(v.title) === slug
    );
    if (idx >= 0) setActiveIndex(idx);
  }, [location.hash]);

  const frame =
    "overflow-hidden rounded-sm border border-zinc-200/90 bg-zinc-100/80 dark:border-white/15 dark:bg-black/40";

  return (
    <section className="min-h-screen border-t border-zinc-200/80 dark:border-white/10">
      <div className="container mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex flex-wrap items-center gap-3 md:mb-12">
          <Link
            to="/sale"
            className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white">
            ← Shop
          </Link>
          <span className="text-zinc-400 dark:text-zinc-600">·</span>
          <span className="text-[11px] uppercase tracking-[0.28em] text-zinc-500">
            Products
          </span>
          <span className="text-zinc-400 dark:text-zinc-600">·</span>
          <span className="inline-flex items-center rounded-sm border border-amber-500/50 bg-amber-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-900 dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-200">
            Presale
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-5xl">
              Flicknet
            </h1>
            <p className="mb-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
              Browse every finish. Specs update with your selection—then join the
              presale list when you’re ready.
            </p>
            <p className="mb-6 border-l border-zinc-300 pl-4 text-sm leading-relaxed text-zinc-600 dark:border-white/15 dark:text-zinc-500">
              <span className="text-zinc-800 dark:text-zinc-400">{active.title}</span>
              <span className="mt-2 block">{active.spec}</span>
            </p>
            <div
              id="presale"
              className="mb-10 flex flex-wrap gap-4 scroll-mt-28">
              <CustomButton href="#" variant="primary">
                Join presale list
              </CustomButton>
              <CustomButton to="/#flicknet" variant="secondary">
                Back to overview
              </CustomButton>
            </div>

            <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-zinc-500">
              Product clip
            </p>
            <div id="clip" className={`${frame} scroll-mt-28`}>
              <video
                className="h-auto max-h-[200px] w-full object-contain md:max-h-[240px]"
                src={FLICKNET_VIDEO_SRC}
                poster={FLICKNET_VIDEO_POSTER}
                autoPlay
                muted
                loop
                playsInline
                controls
              />
            </div>
          </div>

          <div id="colorways" className="scroll-mt-28 space-y-4">
            <div className={frame}>
              <img
                src={flicknetImg(active.file)}
                alt={`Flicknet ${active.title}`}
                className="mx-auto h-auto max-h-[min(420px,55vh)] w-full object-contain"
              />
            </div>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6">
              {FLICKNET_VARIANTS.map((variant, i) => (
                <button
                  key={variant.file}
                  type="button"
                  id={`finish-${flicknetFinishSlug(variant.title)}`}
                  aria-label={`View ${variant.title}`}
                  aria-current={i === activeIndex || undefined}
                  onClick={() => setActiveIndex(i)}
                  className={`overflow-hidden rounded-sm border bg-zinc-100/90 p-0.5 transition-colors dark:bg-black/30 ${
                    i === activeIndex
                      ? "border-zinc-900 ring-1 ring-zinc-900/30 dark:border-white dark:ring-white/40"
                      : "border-zinc-200 hover:border-zinc-400 dark:border-white/10 dark:hover:border-white/30"
                  }`}>
                  <img
                    src={flicknetImg(variant.file)}
                    alt=""
                    className="h-14 w-full object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {flicknetShopItems.length > 0 ? (
          <div className="mt-16 md:mt-24">
            <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-zinc-500">
              Products
            </p>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {flicknetShopItems.map((row) => (
                <FlicknetProductCard key={row.id} row={row} />
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default FlicknetSalePage;
