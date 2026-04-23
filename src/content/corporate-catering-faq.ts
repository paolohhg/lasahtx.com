/**
 * Corporate Catering FAQ content.
 *
 * Paolo edits this file directly to add, remove, or update Q&A pairs.
 * The /corporate-catering-faq page UI and the FAQPage JSON-LD both read
 * from `faqSections` below — one source of truth.
 *
 * When revising: keep section titles short (they become H2s) and keep
 * answer text tight and factual — Google truncates long FAQ answers in
 * rich-result cards.
 */

export interface FAQQuestion {
  q: string;
  a: string;
}

export interface FAQSection {
  title: string;
  questions: FAQQuestion[];
}

export const faqSections: FAQSection[] = [
  {
    title: "Service Area & Logistics",
    questions: [
      {
        q: "What areas do you deliver corporate catering to?",
        a: "LASA HTX serves Houston, The Woodlands, Spring, Conroe, Tomball, Magnolia, and the Energy Corridor.",
      },
      {
        q: "Do you deliver or is it pickup only?",
        a: "We offer delivery and on-site setup for corporate catering orders. Pickup is available for tray orders only.",
      },
      {
        q: "Is there a delivery fee?",
        a: "Delivery fees vary based on distance and order size. Most corporate orders within our primary service area include delivery at no additional cost.",
      },
    ],
  },
  {
    title: "Group Size & Pricing",
    questions: [
      {
        q: "What size groups do you cater?",
        a: "We cater events from 25 to 500+ guests.",
      },
      {
        q: "What is the per-person pricing range?",
        a: "Corporate catering ranges from $15–$25 per person depending on menu selection, guest count, and service level. Boxed lunch programs start at $14–$18 per person.",
      },
      {
        q: "Do you offer boxed lunches?",
        a: "Yes, we offer structured boxed lunch programs for corporate offices. Each box is individually packaged and clearly labeled.",
      },
      {
        q: "Is there a minimum order?",
        a: "Our corporate catering minimum is 25 guests. For tray orders, minimums vary by item.",
      },
    ],
  },
  {
    title: "Booking & Scheduling",
    questions: [
      {
        q: "How far in advance should we book?",
        a: "For 25–75 guests, 48–72 hours is typically sufficient. Larger events may require 5–7 days notice.",
      },
      {
        q: "Do you offer recurring lunch programs?",
        a: "Yes. We work with offices that need weekly or biweekly catering on a set schedule. Contact us to set up a recurring program.",
      },
      {
        q: "Can we book same-day catering?",
        a: "Same-day orders are subject to availability. We recommend booking at least 48 hours in advance for guaranteed service.",
      },
    ],
  },
  {
    title: "Dietary & Packaging",
    questions: [
      {
        q: "Can you accommodate dietary restrictions?",
        a: "Yes. We provide clearly labeled trays and separate packaging for dietary needs including gluten-free, vegetarian, and allergen-conscious options.",
      },
      {
        q: "How is the food packaged for corporate delivery?",
        a: "All trays arrive sealed and labeled. Boxed lunches are individually packaged. We include serving utensils, napkins, and setup materials for buffet-style service.",
      },
    ],
  },
  {
    title: "Pop-Up & Special Drops",
    questions: [
      {
        q: "What are LASA HTX pop-up drops?",
        a: "Our pop-up drops are limited pre-order events featuring specialty Filipino dishes. Orders are placed online in advance and picked up at a designated location.",
      },
      {
        q: "How do I find out about upcoming drops?",
        a: "Follow us on social media or join our waitlist at lasahtx.com to get first access to drop announcements.",
      },
      {
        q: "Can I walk in and buy at a pop-up?",
        a: "No. All pop-up drops are pre-order only. No walk-ins or day-of sales.",
      },
    ],
  },
  {
    title: "Contact",
    questions: [
      {
        q: "How do I request a catering quote?",
        a: "You can request a quote through our catering page at lasahtx.com/catering, email us at catering@lasahtx.com, or call 832-510-8440.",
      },
      {
        q: "What is the best way to reach LASA HTX?",
        a: "Email catering@lasahtx.com or call 832-510-8440. We respond within 24 hours.",
      },
    ],
  },
];
