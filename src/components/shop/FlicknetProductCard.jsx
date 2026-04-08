import React from "react";
import CustomButton from "../layout/CustomButton";
import { useOrderCheckout } from "../../context/OrderCheckoutContext";

/**
 * Product-style card: image, labels, detail copy, primary Buy CTA (not a full-card link).
 * Buy / Pre-order opens the order panel; skipCheckout rows keep a normal link (e.g. Watch).
 */
const FlicknetProductCard = ({ row }) => {
  const { openOrder } = useOrderCheckout();
  const label = row.buyLabel ?? "Buy";
  const useCheckout = row.href && !row.skipCheckout;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-sm border border-zinc-200/90 bg-white/80 shadow-sm transition-colors hover:border-zinc-300 hover:bg-white dark:border-white/10 dark:bg-black/30 dark:shadow-none dark:hover:border-white/25 dark:hover:bg-white/[0.03]">
      <div className="aspect-[4/3] shrink-0 overflow-hidden bg-zinc-100 dark:bg-zinc-900/80">
        {row.cover ? (
          <img
            src={row.cover}
            alt={row.name}
            className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="h-full w-full bg-gradient-to-br from-zinc-200 to-zinc-300 dark:from-zinc-800 dark:to-black" />
        )}
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">
          {row.note}
        </p>
        <h3 className="mt-2 text-base font-medium tracking-tight text-zinc-900 dark:text-white">
          {row.name}
        </h3>
        {row.detail ? (
          <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
            {row.detail}
          </p>
        ) : null}
        {useCheckout ? (
          <CustomButton
            type="button"
            onClick={() => openOrder(row)}
            variant="primary"
            className="mt-5 w-full">
            {label}
          </CustomButton>
        ) : row.href ? (
          <CustomButton to={row.href} variant="primary" className="mt-5 w-full">
            {label}
          </CustomButton>
        ) : (
          <CustomButton disabled variant="primary" className="mt-5 w-full">
            {label}
          </CustomButton>
        )}
      </div>
    </article>
  );
};

export default FlicknetProductCard;
