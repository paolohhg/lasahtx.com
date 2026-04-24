import { MapPin, ShoppingBasket, Truck } from "lucide-react";
import { MIN_BOWLS } from "@/stores/cart-store";

export function OrderDetails() {
  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-4 py-10 max-w-4xl">
        <p className="text-accent text-xs tracking-[0.2em] uppercase font-sans font-semibold text-center mb-8">
          Order Details
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          <div className="flex flex-col items-center text-center gap-2">
            <MapPin className="h-6 w-6 text-accent mb-2" />
            <p className="font-display text-lg leading-tight">
              Pickup Only — The Deck Food Park
            </p>
            <p className="text-muted-foreground text-sm font-sans">
              5802 FM 1488
              <br />
              Magnolia, TX 77354
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <ShoppingBasket className="h-6 w-6 text-accent mb-2" />
            <p className="font-display text-lg leading-tight">
              {MIN_BOWLS}-bowl minimum
            </p>
            <p className="text-muted-foreground text-sm font-sans">
              Mix and match any combination of bowls. Adjust quantities in cart.
            </p>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <Truck className="h-6 w-6 text-accent mb-2" />
            <p className="font-display text-lg leading-tight">
              Delivery coming soon
            </p>
            <p className="text-muted-foreground text-sm font-sans">
              Pickup only for now. Delivery logistics in development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
