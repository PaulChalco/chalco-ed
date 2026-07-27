export interface Reel {
  id: string;
  title: string;
  client: string;
  category: "VFX" | "Motion" | "Básicos" | "IA" | "Evento";
  vimeoId: string;
  vimeoHash: string;
  year: number;
  /** Si true, aparece en la vista "Principal" */
  featured?: boolean;
}

export const reels: Reel[] = [
  // --- MOTION ---
  {
    id: "brothers-granito-tx",
    title: "Brothers — Granito TX",
    client: "Brothers Construction & Restoration",
    category: "Motion",
    vimeoId: "1203923815",
    vimeoHash: "8da65eb006",
    year: 2025,
    featured: true,
  },
  {
    id: "brothers-granito",
    title: "Brothers — Granito",
    client: "Brothers Construction & Restoration",
    category: "Motion",
    vimeoId: "1203928437",
    vimeoHash: "bee075608c",
    year: 2025,
    featured: true,
  },
  {
    id: "xpress-latino",
    title: "Xpress Latino",
    client: "Xpress Latino",
    category: "Motion",
    vimeoId: "1203929342",
    vimeoHash: "c5dc5bd060",
    year: 2025,
    featured: true,
  },
  {
    id: "brothers-fx-impact",
    title: "Brothers — FX impact",
    client: "Brothers Construction & Restoration",
    category: "Motion",
    vimeoId: "1203928440",
    vimeoHash: "ad8029da5e",
    year: 2025,
  },
  {
    id: "musician-to-builder",
    title: "From Musician to Home Builder",
    client: "NWH",
    category: "Motion",
    vimeoId: "1203923813",
    vimeoHash: "816d662902",
    year: 2025,
    featured: true,
  },
  {
    id: "iul-vs-banco",
    title: "IUL vs Banco",
    client: "Cliente financiero",
    category: "Motion",
    vimeoId: "1203923814",
    vimeoHash: "77eeb09fcd",
    year: 2025,
  },
  // --- VFX ---
  {
    id: "brothers-vfx-rev",
    title: "Brothers — VFX Reveal",
    client: "Brothers Construction & Restoration",
    category: "VFX",
    vimeoId: "1203924211",
    vimeoHash: "dd2f566c30",
    year: 2025,
    featured: true,
  },
  {
    id: "brothers-fx-tel",
    title: "Brothers — FX Teleport",
    client: "Brothers Construction & Restoration",
    category: "VFX",
    vimeoId: "1203928439",
    vimeoHash: "915e379301",
    year: 2025,
  },
  // --- BÁSICOS ---
  {
    id: "xpress-top10",
    title: "Xpress Latino — Top 10",
    client: "Xpress Latino",
    category: "Básicos",
    vimeoId: "1203929559",
    vimeoHash: "44c7a796a3",
    year: 2025,
    featured: true,
  },
  {
    id: "tulum",
    title: "Tulum",
    client: "Cliente turismo",
    category: "Básicos",
    vimeoId: "1210868300",
    vimeoHash: "327a650f29",
    year: 2026,
    featured: true,
  },
  {
    id: "restobot",
    title: "Brothers — RestoBot",
    client: "NOVAI",
    category: "Básicos",
    vimeoId: "1210871680",
    vimeoHash: "5f101e95ba",
    year: 2026,
  },
  {
    id: "restorank",
    title: "Brothers — RestoRank",
    client: "NOVAI",
    category: "Básicos",
    vimeoId: "1210871675",
    vimeoHash: "7c39aaaee8",
    year: 2026,
  },
  // --- IA ---
  {
    id: "mercadeo-ai",
    title: "Mercadeo Reel — AI",
    client: "Proyecto AI",
    category: "IA",
    vimeoId: "1210869569",
    vimeoHash: "12cc5574c7",
    year: 2026,
    featured: true,
  },
  {
    id: "balzamo",
    title: "Balzamo",
    client: "Balzamo",
    category: "IA",
    vimeoId: "1203928973",
    vimeoHash: "c4647c406d",
    year: 2025,
  },
  // --- EVENTO ---
  {
    id: "flores-que-brillan",
    title: "Flores que Brillan",
    client: "Evento",
    category: "Evento",
    vimeoId: "1210869862",
    vimeoHash: "254e27e9b2",
    year: 2026,
    featured: true,
  },
  {
    id: "brothers-egbanos",
    title: "Brothers — EG Baños",
    client: "Brothers Construction & Restoration",
    category: "Evento",
    vimeoId: "1203923816",
    vimeoHash: "f8ea26c182",
    year: 2025,
    featured: true,
  },
];

export const reelCategories = ["Principal", "VFX", "Motion", "Básicos", "IA", "Evento", "Todos"] as const;
