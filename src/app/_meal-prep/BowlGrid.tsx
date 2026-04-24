"use client";

import { mealPrepBowls } from "@/content/meal-prep";
import { BowlCard } from "./BowlCard";

export function BowlGrid() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex flex-col gap-3">
          {mealPrepBowls.map((bowl, i) => (
            <BowlCard key={bowl.id} bowl={bowl} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
