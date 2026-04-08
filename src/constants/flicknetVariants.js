/** Single source for Flicknet finishes (home, shop, presale page). */
export const flicknetImg = (file) =>
  `/images/products/flicknet/${encodeURIComponent(file)}`;

export const flicknetFinishSlug = (title) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const FLICKNET_VARIANTS = [
  {
    file: "DESIGN 1B.png",
    title: "Graphite",
    spec: "Matte black shell, low-reflectance finish for rack and field use.",
  },
  {
    file: "DESIGN 188U.png",
    title: "Steel",
    spec: "Brushed metal accent with vent-forward thermal layout.",
  },
  {
    file: "FLICKNET1aas.png",
    title: "Amber",
    spec: "Warm accent trim for high-visibility operator cues.",
  },
  {
    file: "FLICKNET1qq.png",
    title: "Ocean",
    spec: "Cool blue-gray tone, neutral in mixed lighting.",
  },
  {
    file: "FLICKNET1ww.png",
    title: "Snow",
    spec: "Light chassis for contrast against dark consoles.",
  },
  {
    file: "aaaaaxa.png",
    title: "Carbon",
    spec: "Compact footprint, carbon-texture grip surfaces.",
  },
  {
    file: "qqqa.png",
    title: "Signal",
    spec: "Safety-forward highlights for lab and staging builds.",
  },
  {
    file: "wwwwa.png",
    title: "Slate",
    spec: "Mid-gray baseline, blends with standard rack gear.",
  },
  {
    file: "wwwwsds.png",
    title: "Sand",
    spec: "Desert-tan option for outdoor and mobile kits.",
  },
  {
    file: "wwwww.png",
    title: "Obsidian",
    spec: "Deep gloss trim—flagship presentation variant.",
  },
  {
    file: "wwwwwss.png",
    title: "Silver",
    spec: "Silver alloy accents, lab-grade optics compatibility.",
  },
];
