import Link from "next/link";

export function BottomCTA() {
  return (
    <section className="border-t border-border py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-4">
          Request a Corporate Catering Quote
        </h2>
        <p className="text-muted-foreground text-sm font-sans mb-8 max-w-lg mx-auto">
          Tell us about your event and we&apos;ll send a custom proposal within
          24 hours.
        </p>
        <Link
          href="/catering"
          className="inline-flex items-center justify-center bg-accent text-accent-foreground hover:bg-accent/90 font-sans font-semibold tracking-wide px-10 py-6 text-sm transition-colors"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
