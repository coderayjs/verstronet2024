import {
  FLICKNET_VARIANTS,
  flicknetFinishSlug,
  flicknetImg,
} from "./flicknetVariants";

const flicknetColorwayItems = FLICKNET_VARIANTS.map((v) => ({
  id: `fn-${flicknetFinishSlug(v.title)}`,
  name: v.title,
  note: "Colorway",
  detail: v.spec,
  cover: flicknetImg(v.file),
  href: `/sale/flicknet#finish-${flicknetFinishSlug(v.title)}`,
}));

const flicknetExtraItems = [
  {
    id: "fn-clip",
    name: "Product clip",
    note: "Motion & overview",
    detail:
      "Short product video: form factor, vents, and how it reads in real lighting before you commit.",
    href: "/sale/flicknet#clip",
    cover: flicknetImg("FLICKNET1qq.png"),
    buyLabel: "Watch",
    /** Watch jumps to the clip; other CTAs open checkout. */
    skipCheckout: true,
  },
  {
    id: "fn-presale-cta",
    name: "Join presale list",
    note: "Early access",
    detail:
      "Get in line for allocation and updates. Same signup block as on the full Flicknet presale view.",
    href: "/sale/flicknet#presale",
    cover: flicknetImg("FLICKNET1aas.png"),
    buyLabel: "Pre-order",
  },
];

/** Shop index: Flicknet tab = every colorway + clip + presale; other categories = table rows. */
export const SHOP_CATEGORIES = [
  {
    id: "flicknet",
    title: "Flicknet",
    items: [...flicknetColorwayItems, ...flicknetExtraItems],
  },
  {
    id: "niletron",
    title: "Niletron 1.0",
    items: [
      {
        id: "niletron-1",
        name: "Niletron 1.0",
        note: "Operator-facing control surface — full section on the home page",
        href: "/#niletron",
      },
    ],
  },
  {
    id: "gadgets",
    title: "Smart gadgets",
    items: [
      {
        id: "gadgets-placeholder",
        name: "Catalog",
        note: "Connected accessories and desk tools—listings as inventory is added",
        href: null,
      },
    ],
  },
  {
    id: "decoration",
    title: "Decoration",
    items: [
      {
        id: "decoration-placeholder",
        name: "Catalog",
        note: "Ambient accents, display objects, and finishing touches—listings as inventory is added",
        href: null,
      },
    ],
  },
  {
    id: "prints",
    title: "3D-printed",
    items: [
      {
        id: "prints-placeholder",
        name: "Catalog",
        note: "Listings appear as inventory is added",
        href: null,
      },
    ],
  },
];
