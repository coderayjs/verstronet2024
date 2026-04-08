import React, { useState } from "react";
import { Link } from "react-router-dom";
import FlicknetProductCard from "../components/shop/FlicknetProductCard";
import { SHOP_CATEGORIES } from "../constants/shopCategories";

const ShopPage = () => {
  const [activeId, setActiveId] = useState(SHOP_CATEGORIES[0].id);
  const active = SHOP_CATEGORIES.find((c) => c.id === activeId) ?? SHOP_CATEGORIES[0];

  return (
    <section className="min-h-screen border-t border-zinc-200/80 dark:border-white/10">
      <div className="container mx-auto max-w-7xl px-6 pb-20">
        <header className="pt-14 pb-10 md:pt-20 md:pb-12">
          <Link
            to="/"
            className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-white">
            Home
          </Link>
          <h1 className="mt-10 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white md:text-4xl">
            Shop
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-zinc-500">
            Flicknet shows each finish as a product card with a Buy action. Other
            categories stay in a compact list for now.
          </p>
        </header>

        <div
          className="overflow-hidden rounded-sm border border-zinc-200/90 bg-white/60 dark:border-white/10 dark:bg-black/25"
          role="region"
          aria-label="Shop catalog">
          <div
            className="flex flex-wrap border-b border-zinc-200/90 bg-zinc-100/90 dark:border-white/10 dark:bg-zinc-950/80"
            role="tablist"
            aria-label="Shop categories">
            {SHOP_CATEGORIES.map((cat) => {
              const isOn = cat.id === activeId;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isOn}
                  id={`shop-tab-${cat.id}`}
                  aria-controls={`shop-panel-${cat.id}`}
                  onClick={() => setActiveId(cat.id)}
                  className={`relative px-5 py-3.5 text-left text-[11px] uppercase tracking-[0.18em] transition-colors md:px-8 md:py-4 ${
                    isOn
                      ? "bg-white text-zinc-900 dark:bg-white/[0.06] dark:text-white"
                      : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800 dark:hover:bg-white/[0.03] dark:hover:text-zinc-300"
                  }`}>
                  {isOn ? (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-px bg-zinc-900 dark:bg-white/90"
                      aria-hidden
                    />
                  ) : null}
                  {cat.title}
                </button>
              );
            })}
          </div>

          <div
            id={`shop-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`shop-tab-${active.id}`}
            className="p-0">
            {active.id === "flicknet" ? (
              <div className="p-6 md:p-8 lg:p-10">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
                  {active.items.map((row) => (
                    <FlicknetProductCard key={row.id} row={row} />
                  ))}
                </div>
              </div>
            ) : (
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-zinc-200/90 text-left text-[10px] uppercase tracking-[0.2em] text-zinc-500 dark:border-white/10">
                    <th scope="col" className="px-5 py-3 font-normal md:px-8">
                      Item
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3 font-normal sm:table-cell md:px-6">
                      Note
                    </th>
                    <th scope="col" className="w-12 px-3 py-3 md:px-6" />
                  </tr>
                </thead>
                <tbody>
                  {active.items.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-zinc-100 transition-colors last:border-0 hover:bg-zinc-50/80 dark:border-white/[0.06] dark:hover:bg-white/[0.02]">
                      <td className="px-5 py-4 align-top md:px-8 md:py-5">
                        {row.href ? (
                          <Link
                            to={row.href}
                            className="text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-100 dark:hover:text-white">
                            {row.name}
                          </Link>
                        ) : (
                          <span className="text-zinc-700 dark:text-zinc-300">
                            {row.name}
                          </span>
                        )}
                        <span className="mt-1.5 block text-xs text-zinc-500 sm:hidden">
                          {row.note}
                        </span>
                      </td>
                      <td className="hidden px-3 py-4 align-top text-zinc-600 dark:text-zinc-500 sm:table-cell md:px-6 md:py-5">
                        {row.note}
                      </td>
                      <td className="px-3 py-4 align-top text-right md:px-6 md:py-5">
                        {row.href ? (
                          <Link
                            to={row.href}
                            className="text-lg leading-none text-zinc-400 hover:text-zinc-900 dark:text-zinc-600 dark:hover:text-white"
                            aria-label={`Open ${row.name}`}>
                            →
                          </Link>
                        ) : (
                          <span className="text-[10px] uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-600">
                            —
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
