import Link from "next/link";
import Image from "next/image";
import chefHero from "@/assets/chef-hero.webp";

export function AboutHero() {
  return (
    <section className="relative w-full aspect-[16/9] md:aspect-[16/9] min-h-[600px] md:min-h-[700px] overflow-hidden">
      <Image
        src={chefHero}
        alt="LASA Hospitality preparing chef-driven catering in a professional kitchen"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover object-center blur-[1px]"
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto max-w-5xl px-6 md:px-8 py-32 md:py-0">
          <div className="max-w-2xl text-left md:text-left text-center">
            <p className="text-accent text-xs tracking-[0.4em] uppercase mb-6 font-sans">
              About LASA Hospitality
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl tracking-wider text-primary-foreground mb-6 leading-[1.05]">
              BUILT FROM HOSPITALITY.
              <br />
              DESIGNED FOR SCALE.
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl font-sans leading-relaxed mb-3 max-w-xl">
              LASA Hospitality is a Houston-based multi-concept catering and
              hospitality company built to serve modern teams, events, and
              communities through chef-driven food, scalable systems, and
              professional execution.
            </p>
            <p className="text-primary-foreground/60 text-sm md:text-base font-sans tracking-widest uppercase mb-10">
              Modern hospitality built for Houston.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/catering"
                className="inline-block bg-accent text-accent-foreground hover:bg-accent/90 text-sm tracking-[0.15em] uppercase font-sans px-8 py-4 transition-colors duration-300 text-center"
              >
                Start a Catering Inquiry
              </Link>
              <Link
                href="/#concepts"
                className="inline-block border border-primary-foreground/40 text-primary-foreground/80 hover:border-primary-foreground hover:text-primary-foreground text-sm tracking-[0.15em] uppercase font-sans px-8 py-4 transition-colors duration-300 text-center"
              >
                Explore Our Concepts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
