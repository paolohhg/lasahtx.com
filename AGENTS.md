<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Lasa HTX — Project Context

This repo is the **Next.js rebuild** of [lasahtx.com](https://lasahtx.com), a modern Asian catering / pop-up / meal prep concept in Houston, TX. Filipino roots, Houston influence. Paolo Nucum is Founder & Culinary Director.

**Three service lines:** Catering (corporate lunches, weddings, private celebrations, large-scale events), Pop-Ups (scheduled drops and private events at rotating Houston venues), Meal Prep (chef-driven weekly rotating bowls).

## Migration context

This repo is being built fresh to replace a Lovable-era Vite + React + Shopify + Supabase SPA. The **old repo lives at [`paolohhg/lasa-htx`](https://github.com/paolohhg/lasa-htx)** and continues to serve the live site at lasahtx.com until DNS flips to this build.

The full migration brief — business context, design tokens, page-level decisions, forms/waitlist plans, route keep/drop/redirect table — lives in the old repo at [`.lovable/claude.md`](https://github.com/paolohhg/lasa-htx/blob/main/.lovable/claude.md). Read that file for anything not covered here. During transition, it's the source of truth for decisions that affect both repos.

When in doubt about **visual design**, refer to the old repo's [`docs/LOVABLE_BRIEF_ORIGINAL.md`](https://github.com/paolohhg/lasa-htx/blob/main/docs/LOVABLE_BRIEF_ORIGINAL.md) and preserve what was built. When in doubt about **technology, IA, or SEO**, this file + the old repo's `.lovable/claude.md` win.

## Physical address vs. service area

- **Kitchen / pickup location:** The Deck Food Park in Magnolia, TX (shared facility with a separate meal prep business Paolo also owns — distinct brands sharing space, NOT the same company).
- **Service area:** Greater Houston neighborhoods (Montrose, Heights, EaDo, Rice Village, Museum District, Midtown, Galleria, Sugar Land, Katy, The Woodlands) plus the Magnolia / Tomball / Cypress / Spring / Conroe / Energy Corridor corridor.
- **Schema pattern:** `address` = Magnolia, `areaServed` = Houston + neighborhoods. Google Business Profile is configured as a Service Area Business so the kitchen address stays hidden from the public.
- **Page copy** markets Houston-first for intent, even though the kitchen is in Magnolia.

## Stack

**Scaffolded on latest stable at time of scaffolding (April 2026).** Exact versions live in `package.json` and evolve — don't pin prose references to specific majors, or the next audit will find drift again.

Approximate profile as of scaffolding:

- **Next.js 16** (App Router, Turbopack build, React Server Components).
- **React 19** (`useActionState` replaces `useFormState`; async `params` / `searchParams` in page props).
- **TypeScript**, strict mode on.
- **Tailwind CSS 4** — no `tailwind.config.ts`; design tokens live in `src/app/globals.css` under `@theme inline { ... }`. Content scanning is automatic.
- **shadcn/ui** via the `base-nova` preset — components wrap `@base-ui/react` primitives (not Radix). `shadcn@latest add <name>` adds individual components.
- **framer-motion** for page-level animations.
- **lucide-react** for iconography.
- **sonner** for toast notifications (shadcn wrapper at `@/components/ui/sonner`).
- **Vercel** for hosting + deploys.
- **Resend** for transactional email (session 3+; not wired yet).
- **Stripe Payment Links** for all paid transactions (no cart, no Stripe API — just hosted-checkout links rendered as buttons).
- **Email marketing tool** (Beehiiv / ConvertKit / Mailchimp — TBD) for the pop-ups waitlist. Pick before launch.

No database. No Shopify. No Supabase. No Lovable-era dependencies. Form submissions email Paolo via Resend.

## Next 16 / React 19 / Tailwind 4 — specific gotchas

These differ from Next 14 patterns. Check before writing:

- **Redirects / rewrites** live in `next.config.ts` under `redirects()` / `rewrites()` — **not middleware**. `middleware.ts` was renamed to `proxy.ts` in Next 16 with different semantics. Don't reach for middleware reflexively for URL preservation work (`/order-trays` → `/catering`, `/product/:handle` → `/meal-prep`, `/o/*` grace-period handling, etc.).
- **Tailwind 4 tokens** — add to `src/app/globals.css` inside `@theme inline { ... }`, namespaced (`--color-*`, `--font-*`, `--animate-*`). Reference in JSX via the usual class names (`bg-background`, `font-display`).
- **Async params** — dynamic routes' `params` and `searchParams` are `Promise<...>` and must be awaited. Session 1 has no dynamic routes so this doesn't bite yet.
- **Server-by-default** — `page.tsx` and `layout.tsx` are server components unless you explicitly add `"use client"`. Keep pages server (so `metadata`, JSON-LD, and static content SSR cleanly) and extract motion-using sections into small `"use client"` sub-components. See `src/app/_home/` for the pattern.

## Content modules

V1 has no CMS. Pop-ups and meal-prep bowls live in typed TS modules under `src/content/`:

- `src/content/pop-ups.ts` — `PopUp` interface + `popUps[]`.
- `src/content/meal-prep.ts` — `MealPrepBowl` interface + ordered `mealPrepBowls[]` (order = display order; carries the Lovable `BOWL_ORDER` curation intent).

Rules:
- **Never hardcode dates, prices, or product titles in JSX** — they belong in a content module.
- **`status` on `PopUp` is explicit.** NEVER derive it from `Date.now()` — that's the mistake that stuck the Lovable `/pop-ups` in "Sold Out" for two months.
- **Placeholders are expected.** `priceUSD: 0` = not priced yet (UI renders "coming soon"). `stripePaymentLinkUrl: ""` = Stripe product not created yet (Order button disabled).
- **JSON-LD reads the same module.** The `Event` schema on `/pop-ups` and the `Menu`/`Product` schema on `/meal-prep` both map from the same typed entries that drive the UI — one source of truth per content type.

## SEO non-negotiables

- Server-rendered HTML on every public page. If it matters for SEO or social link previews, it ships in the initial HTML response.
- Per-page `metadata` export (title, description, OG, Twitter, canonical) or inheritance from root layout.
- `app/robots.ts` allows crawlers only when `VERCEL_ENV === "production"`; preview/dev return `disallow: /`.
- `app/sitemap.ts` enumerates every public URL. Per-entry pop-ups and meal-prep bowls read from the content modules at build time.
- JSON-LD: Organization + Restaurant/Caterer + WebSite graph in root layout. Per-page schema (`Service`, `Event`, `Menu`, `FAQPage`) rendered in each page component.
- `next/image` for all imagery with explicit width/height (or `fill`) and meaningful alt text.
- Proper heading hierarchy — one H1 per page.
- Core Web Vitals: green on mobile. Image compression is load-bearing; several Lovable heroes are multi-megabyte and need re-export to WebP/AVIF at 200–300 KB before public launch.

## Session discipline (working agreements)

- **Read this file at session start**, then the migration brief in the old repo if the task touches migration decisions.
- **Audit before writing.** The Phase 1 audit pattern (extract ground truth from the old repo, report in chat, get approval, then scaffold) scales — follow it for each page port.
- **One concern per commit.** Scoped commits on `main` in this repo match the flow established in session 1 (`Initialize scaffold` → `Configure design system` → `Add chrome` → `Port home page` → etc.).
- **Git writes are on Claude.** Commit, push, and merge without asking unless the action is genuinely destructive (force-push to main, history rewrite, merge conflict resolution that changes shape).
- **Never delete the Lovable site** until this build is verified on Vercel preview and Paolo has approved the DNS cutover. The old site takes orders until flip day.
- **No Shopify, Supabase, Lovable-tagger, or react-router code in this repo, ever.**
