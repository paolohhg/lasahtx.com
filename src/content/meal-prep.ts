/**
 * Meal-prep bowls — chef-driven weekly rotating menu.
 *
 * The /meal-prep page UI, the Product JSON-LD, and the cart store's price
 * helpers all read from `mealPrepBowls` below. One source of truth.
 *
 * Array order = display order — carries the `BOWL_ORDER` curation intent
 * from the legacy Lovable site (Sinigang → Adobo → Filipino BBQ → Pancit →
 * Beef Caldereta → Lechon Kawali). Do not sort alphabetically.
 *
 * Images: placeholder-first for v1 launch. `image` omitted → the card
 * renders a "Photo Soon" placeholder. Paolo adds real photos in a later
 * commit by dropping files into `src/assets/bowls/` and wiring each entry's
 * `image` field to an imported static asset.
 *
 * Inventory: Level 2 of the roadmap (see AGENTS.md). `available?: boolean`
 * on each BowlVariant defaults to true when undefined. Setting `false`
 * filters the variant from the picker and flips its JSON-LD Offer to
 * OutOfStock. If every variant on a bowl is unavailable, the card renders
 * "Sold Out This Week". Manual edits here + Vercel redeploy; real-time sync
 * lands with Level 3.
 */

/* ── Add-ons ──────────────────────────────────────────────────────────── */

export interface AddOn {
  id: "extra-protein" | "extra-rice" | "chili-garlic-sauce";
  label: string;
  priceUSD: number;
}

/** Universal — every bowl accepts every add-on. */
export const addOns: AddOn[] = [
  { id: "extra-protein", label: "Extra Protein", priceUSD: 4.0 },
  { id: "extra-rice", label: "Extra Rice", priceUSD: 2.0 },
  { id: "chili-garlic-sauce", label: "Chili Garlic Sauce", priceUSD: 1.0 },
];

/* ── Bowls ────────────────────────────────────────────────────────────── */

/** A selectable protein option on a bowl. Price differs per variant. */
export interface BowlVariant {
  /** Stable within bowl scope. Used as the value submitted to cart. */
  id: string;
  label: string;
  priceUSD: number;
  /** Level 2 inventory flag. Undefined = available (default). `false`
   * filters the variant from the picker and flips its JSON-LD Offer to
   * OutOfStock. */
  available?: boolean;
}

/** Boolean toggle unique to a specific bowl. Currently only Pancit's
 * "no pork" option. Distinct from add-ons (universal across bowls) and
 * variants (price-changing). */
export interface BowlModifier {
  id: string;
  label: string;
  /** Typically 0 for free opt-out modifiers. */
  priceUSD: number;
}

export interface MealPrepBowl {
  /** Stable slug, e.g. "sinigang-bowl". Used for JSON-LD @id + cart refs. */
  id: string;
  title: string;
  description: string;
  /** 1+ variants. Empty array triggers the "Coming Soon" card state. */
  variants: BowlVariant[];
  /** Which variant starts pre-selected in the picker. Defaults to 0 when
   * omitted. Falls through to first available if the default is unavailable. */
  defaultVariantIndex?: number;
  /** Bowl-specific boolean toggles. Most bowls have none. */
  modifiers?: BowlModifier[];
  /** Undefined → "Photo Soon" placeholder card. */
  image?: string;
}

export const mealPrepBowls: MealPrepBowl[] = [
  {
    id: "sinigang-bowl",
    title: "Sinigang Bowl",
    description:
      "Sour-savory tamarind broth with seasonal vegetables and jasmine rice. Chicken at base; pork or beef available.",
    variants: [
      { id: "chicken", label: "Chicken", priceUSD: 15 },
      { id: "pork", label: "Pork", priceUSD: 15 },
      { id: "beef", label: "Beef", priceUSD: 17 },
    ],
    // defaultVariantIndex: 0 (implicit) — Chicken at base
  },
  {
    id: "adobo-bowl",
    title: "Adobo Bowl",
    description:
      "Slow-braised in soy, cane vinegar, garlic, and peppercorns — the Filipino national dish, tender and layered. Chicken or pork at base.",
    variants: [
      { id: "chicken", label: "Chicken", priceUSD: 15 },
      { id: "pork", label: "Pork", priceUSD: 15 },
    ],
  },
  {
    id: "filipino-bbq-bowl",
    title: "Filipino BBQ Bowl",
    description:
      "Skewers marinated in banana ketchup, soy, and citrus, grilled over flame. Pork at base; chicken available. Served with garlic rice and pickled vegetables.",
    variants: [
      { id: "chicken", label: "Chicken", priceUSD: 15 },
      { id: "pork", label: "Pork", priceUSD: 15 },
    ],
    defaultVariantIndex: 1, // Pork at base per copy ("Pork at base; chicken available")
  },
  {
    id: "pancit-bowl",
    title: "Pancit Bowl",
    description:
      'Stir-fried rice noodles with chicken and pork, tossed with julienned vegetables in a soy-aromatic sauce. "No pork" option available at no charge.',
    variants: [{ id: "standard", label: "Pancit", priceUSD: 15 }],
    modifiers: [{ id: "no-pork", label: "No pork", priceUSD: 0 }],
  },
  {
    id: "beef-caldereta-bowl",
    title: "Beef Caldereta Bowl",
    description:
      "Braised beef stew with tomato, potato, and bell peppers — slow-cooked Spanish-Filipino comfort food.",
    variants: [{ id: "beef", label: "Beef", priceUSD: 17 }],
  },
  {
    id: "lechon-kawali-bowl",
    title: "Lechon Kawali Bowl",
    description:
      "Twice-cooked pork belly — braised, then deep-fried for the crackling crust Lechon Kawali is known for. Served with dipping sauce.",
    variants: [{ id: "pork", label: "Pork", priceUSD: 17 }],
  },
];
