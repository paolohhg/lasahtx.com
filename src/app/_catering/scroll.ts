"use client";

/** Shared client-side helper for "scroll to the full inquiry form". Called
 * from multiple client components on /catering (Hero CTAs, MidPageCTA,
 * MenuSnapshot CTA, FinalCTA, FloatingCTA). */
export function scrollToInquiryForm(): void {
  if (typeof document === "undefined") return;
  document
    .getElementById("inquiry-form")
    ?.scrollIntoView({ behavior: "smooth" });
}
