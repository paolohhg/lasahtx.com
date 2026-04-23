/**
 * Meal-prep bowls — chef-driven weekly rotating menu.
 *
 * The /meal-prep page UI and the Menu/Product JSON-LD both read from
 * `mealPrepBowls` below. Order of the array IS the display order; it carries
 * the `BOWL_ORDER` curation intent from the legacy Lovable site
 * (Sinigang → Adobo → Filipino BBQ → Pancit → Beef Caldereta → Lechon Kawali).
 * Do not sort alphabetically.
 *
 * Placeholders:
 * - `priceUSD: 0` → price not yet set; render "coming soon" in UI.
 * - `stripePaymentLinkUrl: ""` → Stripe product not yet created; disable
 *   the Order button.
 */

export interface MealPrepBowl {
  /** Stable slug, e.g. "sinigang-bowl" */
  id: string;
  title: string;
  description: string;
  protein: "beef" | "chicken" | "pork" | "seafood" | "veg";
  priceUSD: number;
  stripePaymentLinkUrl: string;
  image?: string;
}

export const mealPrepBowls: MealPrepBowl[] = [
  {
    id: "sinigang-bowl",
    title: "Sinigang Bowl",
    description:
      "Sour, savory tamarind-based broth with tender pork and vegetables over rice.",
    protein: "pork",
    priceUSD: 0,
    stripePaymentLinkUrl: "",
  },
  {
    id: "adobo-bowl",
    title: "Adobo Bowl",
    description:
      "Chicken braised in soy, vinegar, garlic, and black pepper — the national dish, done at a restaurant level.",
    protein: "chicken",
    priceUSD: 0,
    stripePaymentLinkUrl: "",
  },
  {
    id: "filipino-bbq-bowl",
    title: "Filipino BBQ Bowl",
    description:
      "Sweet-savory marinated grilled pork skewers over garlic rice.",
    protein: "pork",
    priceUSD: 0,
    stripePaymentLinkUrl: "",
  },
  {
    id: "pancit-bowl",
    title: "Pancit Bowl",
    description:
      "Stir-fried rice noodles with chicken and mixed vegetables — a Filipino celebration staple.",
    protein: "chicken",
    priceUSD: 0,
    stripePaymentLinkUrl: "",
  },
  {
    id: "beef-caldereta-bowl",
    title: "Beef Caldereta Bowl",
    description:
      "Slow-braised beef stew with peppers, potatoes, and a rich tomato-liver base over rice.",
    protein: "beef",
    priceUSD: 0,
    stripePaymentLinkUrl: "",
  },
  {
    id: "lechon-kawali-bowl",
    title: "Lechon Kawali Bowl",
    description:
      "Crispy deep-fried pork belly over rice with a vinegar-garlic dipping sauce.",
    protein: "pork",
    priceUSD: 0,
    stripePaymentLinkUrl: "",
  },
];
