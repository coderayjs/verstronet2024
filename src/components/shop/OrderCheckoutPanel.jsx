import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useOrderCheckout } from "../../context/OrderCheckoutContext";
import CustomButton from "../layout/CustomButton";
import {
  SHIPPING_COUNTRIES,
  SUBDIVISIONS_BY_COUNTRY,
  countryHasSubdivisions,
  getCountryName,
  getStateRegionLabel,
  getSubdivisionLabel,
} from "../../constants/shippingCountries";

/** Dial codes for phone field (value = E.164 prefix without spaces). `flag` = regional-indicator emoji. */
const PHONE_COUNTRY_CODES = [
  { dial: "+1", flag: "🇺🇸🇨🇦", label: "+1 · US / CA" },
  { dial: "+44", flag: "🇬🇧", label: "+44 · UK" },
  { dial: "+33", flag: "🇫🇷", label: "+33 · France" },
  { dial: "+49", flag: "🇩🇪", label: "+49 · Germany" },
  { dial: "+81", flag: "🇯🇵", label: "+81 · Japan" },
  { dial: "+82", flag: "🇰🇷", label: "+82 · Korea" },
  { dial: "+86", flag: "🇨🇳", label: "+86 · China" },
  { dial: "+91", flag: "🇮🇳", label: "+91 · India" },
  { dial: "+61", flag: "🇦🇺", label: "+61 · Australia" },
  { dial: "+64", flag: "🇳🇿", label: "+64 · New Zealand" },
  { dial: "+971", flag: "🇦🇪", label: "+971 · UAE" },
  { dial: "+966", flag: "🇸🇦", label: "+966 · Saudi Arabia" },
  { dial: "+234", flag: "🇳🇬", label: "+234 · Nigeria" },
  { dial: "+27", flag: "🇿🇦", label: "+27 · South Africa" },
  { dial: "+55", flag: "🇧🇷", label: "+55 · Brazil" },
  { dial: "+52", flag: "🇲🇽", label: "+52 · Mexico" },
  { dial: "+54", flag: "🇦🇷", label: "+54 · Argentina" },
  { dial: "+351", flag: "🇵🇹", label: "+351 · Portugal" },
  { dial: "+39", flag: "🇮🇹", label: "+39 · Italy" },
  { dial: "+34", flag: "🇪🇸", label: "+34 · Spain" },
  { dial: "+31", flag: "🇳🇱", label: "+31 · Netherlands" },
  { dial: "+46", flag: "🇸🇪", label: "+46 · Sweden" },
  { dial: "+47", flag: "🇳🇴", label: "+47 · Norway" },
  { dial: "+45", flag: "🇩🇰", label: "+45 · Denmark" },
  { dial: "+41", flag: "🇨🇭", label: "+41 · Switzerland" },
  { dial: "+43", flag: "🇦🇹", label: "+43 · Austria" },
  { dial: "+32", flag: "🇧🇪", label: "+32 · Belgium" },
  { dial: "+353", flag: "🇮🇪", label: "+353 · Ireland" },
  { dial: "+48", flag: "🇵🇱", label: "+48 · Poland" },
  { dial: "+420", flag: "🇨🇿", label: "+420 · Czechia" },
  { dial: "+7", flag: "🇷🇺🇰🇿", label: "+7 · Russia / KZ" },
];

const initialForm = {
  fullName: "",
  email: "",
  phoneCountryCode: "+1",
  phone: "",
  countryCode: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  postalCode: "",
};

function CheckoutProductSummary({ product }) {
  if (!product) return null;
  return (
    <div className="flex shrink-0 gap-3.5 rounded-sm border border-zinc-200/90 bg-zinc-100/80 p-3.5 dark:border-white/10 dark:bg-black/30">
      {product.cover ? (
        <img
          src={product.cover}
          alt=""
          className="h-20 w-20 shrink-0 rounded-sm object-cover sm:h-24 sm:w-24"
        />
      ) : (
        <div className="h-20 w-20 shrink-0 rounded-sm bg-zinc-200 dark:bg-zinc-800 sm:h-24 sm:w-24" />
      )}
      <div className="min-w-0 flex-1 py-0.5">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          {product.note}
        </p>
        <p className="mt-1.5 text-lg font-semibold leading-tight tracking-tight text-zinc-900 dark:text-white sm:text-xl">
          {product.name}
        </p>
        {product.detail ? (
          <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-base">
            {product.detail}
          </p>
        ) : null}
      </div>
    </div>
  );
}

const OrderCheckoutPanel = () => {
  const { open, product, closeOrder } = useOrderCheckout();
  const [step, setStep] = useState("form");
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (!open) return;
    setStep("form");
    setForm(initialForm);
  }, [open, product?.id]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeOrder();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, closeOrder]);

  const setField = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  const setCountryCode = (e) => {
    const v = e.target.value;
    setForm((f) => ({ ...f, countryCode: v, state: "" }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep("confirmation");
  };

  if (!open) return null;

  const fieldBase =
    "rounded-sm border border-zinc-200 bg-white px-2.5 py-1.5 text-sm text-zinc-900 outline-none focus:border-zinc-400 dark:border-white/15 dark:bg-black/40 dark:text-zinc-100 dark:focus:border-white/35";

  const inputClass = `mt-1 w-full ${fieldBase} placeholder:text-zinc-500 dark:placeholder:text-zinc-600`;

  const labelClass = "text-[9px] uppercase tracking-[0.16em] text-zinc-500";

  const formTitle = step === "form" ? "Order confirmation" : "You’re on the list";

  const formEyebrow = step === "form" ? "Presale" : "Confirmed";

  return (
    <>
      <button
        type="button"
        aria-label="Close checkout"
        className="fixed inset-0 z-[199] bg-zinc-900/40 backdrop-blur-[2px] transition-opacity dark:bg-black/70"
        onClick={closeOrder}
      />

      <aside
        className="fixed inset-y-0 right-0 z-[200] flex h-[100dvh] max-h-[100dvh] w-full max-w-lg flex-col border-l border-zinc-200/90 bg-zinc-50 shadow-2xl dark:border-white/10 dark:bg-[#080808]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-panel-title">
        <div
          className={`flex shrink-0 items-start justify-between gap-3 border-b border-zinc-200/90 dark:border-white/10 ${
            step === "confirmation" ? "px-4 py-2.5" : "px-4 py-3"
          }`}>
          <div>
            <p className="text-[9px] uppercase tracking-[0.24em] text-zinc-500">
              {formEyebrow}
            </p>
            <h2
              id="order-panel-title"
              className={`font-semibold tracking-tight text-zinc-900 dark:text-white ${
                step === "confirmation" ? "mt-0.5 text-lg" : "mt-1 text-lg"
              }`}>
              {formTitle}
            </h2>
          </div>
          <button
            type="button"
            onClick={closeOrder}
            className="rounded-sm border border-zinc-300 p-1.5 text-zinc-500 transition-colors hover:border-zinc-400 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/30 dark:hover:text-white">
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        <div className="flex min-h-0 flex-1 flex-col overflow-hidden px-4 py-3">
          {step === "form" && product ? (
            <div className="mb-3">
              <CheckoutProductSummary product={product} />
            </div>
          ) : null}

          {step === "form" ? (
            <form
              onSubmit={handleFormSubmit}
              className="flex min-h-0 flex-1 flex-col">
              <div className="min-h-0 flex-1 space-y-2 overflow-y-auto pb-3">
                <p className="text-xs leading-snug text-zinc-600 dark:text-zinc-400">
                  Add your details and shipping address. We’ll follow up to confirm
                  payment and delivery for presale items.
                </p>
                <div>
                  <label className={labelClass}>Full name</label>
                  <input
                    required
                    className={inputClass}
                    value={form.fullName}
                    onChange={setField("fullName")}
                    placeholder="Jane Doe"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input
                    required
                    type="email"
                    className={inputClass}
                    value={form.email}
                    onChange={setField("email")}
                    placeholder="you@company.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label className={labelClass}>Phone</label>
                  <div className="mt-1 flex gap-1.5">
                    <select
                      className={`${fieldBase} w-[min(100%,11rem)] shrink-0 px-1.5 text-xs`}
                      value={form.phoneCountryCode}
                      onChange={setField("phoneCountryCode")}
                      autoComplete="tel-country-code"
                      aria-label="Country calling code">
                      {PHONE_COUNTRY_CODES.map(({ dial, flag, label }) => (
                        <option key={dial} value={dial}>
                          {flag} {label}
                        </option>
                      ))}
                    </select>
                    <input
                      required
                      type="tel"
                      className={`${fieldBase} min-w-0 flex-1 placeholder:text-zinc-600`}
                      value={form.phone}
                      onChange={setField("phone")}
                      placeholder="Number"
                      autoComplete="tel-national"
                      inputMode="tel"
                    />
                  </div>
                </div>
                <p className="pt-0.5 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  Shipping address
                </p>
                <div>
                  <label className={labelClass}>Country</label>
                  <select
                    required
                    className={inputClass}
                    value={form.countryCode}
                    onChange={setCountryCode}
                    autoComplete="country">
                    <option value="" disabled>
                      Select country
                    </option>
                    {SHIPPING_COUNTRIES.map(({ code, name, flag }) => (
                      <option key={code} value={code}>
                        {flag} {name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Address line 1</label>
                  <input
                    required
                    className={inputClass}
                    value={form.address1}
                    onChange={setField("address1")}
                    placeholder="Street, building, unit"
                    autoComplete="address-line1"
                  />
                </div>
                <div>
                  <label className={labelClass}>Address line 2</label>
                  <input
                    className={inputClass}
                    value={form.address2}
                    onChange={setField("address2")}
                    placeholder="Optional"
                    autoComplete="address-line2"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className={labelClass}>City</label>
                    <input
                      required
                      className={inputClass}
                      value={form.city}
                      onChange={setField("city")}
                      autoComplete="address-level2"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      {getStateRegionLabel(form.countryCode)}
                    </label>
                    {countryHasSubdivisions(form.countryCode) ? (
                      <select
                        required
                        className={inputClass}
                        value={form.state}
                        onChange={setField("state")}
                        autoComplete="address-level1">
                        <option value="">Select…</option>
                        {(SUBDIVISIONS_BY_COUNTRY[form.countryCode] ?? []).map(
                          ({ code, name }) => (
                            <option key={code} value={code}>
                              {name}
                            </option>
                          )
                        )}
                      </select>
                    ) : (
                      <input
                        required
                        className={inputClass}
                        value={form.state}
                        onChange={setField("state")}
                        autoComplete="address-level1"
                        placeholder="Region"
                      />
                    )}
                  </div>
                </div>
                <div>
                  <label className={labelClass}>Postal code</label>
                  <input
                    required
                    className={inputClass}
                    value={form.postalCode}
                    onChange={setField("postalCode")}
                    autoComplete="postal-code"
                  />
                </div>
              </div>
              <div className="shrink-0 border-t border-zinc-200/90 bg-zinc-50 pt-3 dark:border-white/10 dark:bg-[#080808]">
                <CustomButton type="submit" variant="primary" className="w-full">
                  Confirm order
                </CustomButton>
              </div>
            </form>
          ) : (
            <div className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto">
              <CheckoutProductSummary product={product} />
              <div className="rounded-sm border border-emerald-500/30 bg-emerald-50 px-2.5 py-2 dark:border-emerald-500/25 dark:bg-emerald-500/5">
                <p className="text-xs font-medium text-emerald-800 dark:text-emerald-200/95">
                  Order request received
                </p>
                <p className="mt-1 text-[11px] leading-snug text-zinc-600 dark:text-zinc-400">
                  We saved your details for{" "}
                  <span className="text-zinc-900 dark:text-zinc-200">
                    {product?.name}
                  </span>
                  . You’ll get a confirmation email at{" "}
                  <span className="text-zinc-900 dark:text-zinc-200">
                    {form.email || "—"}
                  </span>{" "}
                  when your line item is ready to finalize.
                </p>
              </div>
              <div className="rounded-sm border border-zinc-200/90 bg-white/80 p-2.5 text-[11px] leading-snug text-zinc-600 dark:border-white/10 dark:bg-black/25 dark:text-zinc-500">
                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-600">
                  Summary
                </p>
                <div className="mt-1 space-y-0 text-zinc-700 dark:text-zinc-400">
                  <p>{form.fullName}</p>
                  {form.phone ? (
                    <p>
                      {form.phoneCountryCode} {form.phone}
                    </p>
                  ) : null}
                  <p>{form.address1}</p>
                  {form.address2 ? <p>{form.address2}</p> : null}
                  <p>
                    {[
                      form.city,
                      getSubdivisionLabel(form.countryCode, form.state) || form.state,
                      form.postalCode,
                    ]
                      .filter(Boolean)
                      .join(", ")}
                  </p>
                  <p>{getCountryName(form.countryCode)}</p>
                </div>
              </div>
              <CustomButton
                type="button"
                onClick={closeOrder}
                variant="secondary"
                className="w-full shrink-0">
                Close
              </CustomButton>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default OrderCheckoutPanel;
