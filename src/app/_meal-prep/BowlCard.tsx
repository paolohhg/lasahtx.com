"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { addOns, type MealPrepBowl } from "@/content/meal-prep";
import { useCartStore } from "@/stores/cart-store";

interface BowlCardProps {
  bowl: MealPrepBowl;
  index: number;
}

export function BowlCard({ bowl, index }: BowlCardProps) {
  const availableVariants = bowl.variants.filter(
    (v) => v.available !== false
  );
  const unavailable = availableVariants.length === 0;
  const unavailableLabel =
    bowl.variants.length === 0 ? "Coming Soon" : "Sold Out This Week";

  /* Initial selected variant: defaultVariantIndex if it's available,
   * else fall through to first available. */
  const initialVariantId = (() => {
    if (unavailable) return "";
    const defaultIdx = bowl.defaultVariantIndex ?? 0;
    const defaultVariant = bowl.variants[defaultIdx];
    if (defaultVariant && defaultVariant.available !== false) {
      return defaultVariant.id;
    }
    return availableVariants[0]?.id ?? "";
  })();

  const [expanded, setExpanded] = useState(false);
  const [selectedVariantId, setSelectedVariantId] = useState(initialVariantId);
  const [selectedModifierIds, setSelectedModifierIds] = useState<string[]>([]);
  const [selectedAddOnIds, setSelectedAddOnIds] = useState<string[]>([]);

  const addItem = useCartStore((s) => s.addItem);

  const selectedVariant = bowl.variants.find((v) => v.id === selectedVariantId);

  const minAvailablePrice = unavailable
    ? 0
    : Math.min(...availableVariants.map((v) => v.priceUSD));

  const modifiersTotal = (bowl.modifiers ?? [])
    .filter((m) => selectedModifierIds.includes(m.id))
    .reduce((s, m) => s + m.priceUSD, 0);
  const addOnsTotal = addOns
    .filter((a) => selectedAddOnIds.includes(a.id))
    .reduce((s, a) => s + a.priceUSD, 0);
  const totalPrice =
    (selectedVariant?.priceUSD ?? 0) + modifiersTotal + addOnsTotal;

  const toggleModifier = (id: string) => {
    setSelectedModifierIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };
  const toggleAddOn = (id: string) => {
    setSelectedAddOnIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleAddToCart = () => {
    if (!selectedVariant || unavailable) return;
    addItem({
      bowlId: bowl.id,
      variantId: selectedVariant.id,
      modifierIds: selectedModifierIds,
      addOnIds: selectedAddOnIds,
      quantity: 1,
    });
    toast.success(`${bowl.title} added to cart`);
    setSelectedModifierIds([]);
    setSelectedAddOnIds([]);
    setExpanded(false);
  };

  /* ── Unavailable card (sold out or coming soon): no expand, disabled CTA ── */
  if (unavailable) {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ delay: index * 0.05, duration: 0.3 }}
        className="border border-dashed border-border bg-card text-card-foreground"
      >
        <div className="flex items-center gap-4 p-4">
          <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden bg-muted flex items-center justify-center text-muted-foreground/40 text-[10px] uppercase tracking-wider text-center leading-tight">
            Photo
            <br />
            Soon
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-xl leading-tight mb-0.5">
              {bowl.title}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed line-clamp-1 mb-2">
              {bowl.description}
            </p>
            <span className="text-muted-foreground text-sm font-sans uppercase tracking-wider">
              {unavailableLabel}
            </span>
          </div>
          <div className="shrink-0">
            <button
              type="button"
              disabled
              className="bg-muted text-muted-foreground px-4 py-2 text-xs tracking-wider uppercase cursor-not-allowed whitespace-nowrap"
            >
              {unavailableLabel}
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  /* ── Available card: collapse/expand with variant + modifier + add-on UI ── */
  const hasMultipleVariants = availableVariants.length > 1;
  const hasModifiers = (bowl.modifiers?.length ?? 0) > 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="border border-border bg-card text-card-foreground overflow-hidden"
    >
      <button
        type="button"
        onClick={() => setExpanded((x) => !x)}
        className="w-full flex items-center gap-4 p-4 text-left hover:bg-muted/30 transition-colors group"
        aria-expanded={expanded}
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 overflow-hidden bg-muted flex items-center justify-center text-muted-foreground/40 text-[10px] uppercase tracking-wider text-center leading-tight">
          Photo
          <br />
          Soon
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-display text-xl leading-tight mb-0.5">
            {bowl.title}
          </h3>
          <p className="text-muted-foreground text-xs leading-relaxed line-clamp-1 mb-2">
            {bowl.description}
          </p>
          <span className="text-accent text-sm font-sans font-semibold">
            Starting at ${minAvailablePrice.toFixed(2)}
          </span>
        </div>
        <div className="shrink-0 flex flex-col items-end gap-2">
          <span className="text-accent text-xs font-sans font-semibold tracking-wide uppercase whitespace-nowrap hidden sm:block">
            Customize &amp; Order
          </span>
          <ChevronDown
            className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${
              expanded ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-5 pt-1 border-t border-border space-y-5">
              {/* Variant picker (multi-variant bowls only) */}
              {hasMultipleVariants && (
                <div className="space-y-2">
                  <span className="text-xs tracking-wider uppercase text-muted-foreground">
                    Select Protein
                  </span>
                  <div className="space-y-1.5">
                    {availableVariants.map((v) => {
                      const isSelected = selectedVariantId === v.id;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => setSelectedVariantId(v.id)}
                          className={`w-full flex items-center justify-between px-4 py-2.5 text-sm border transition-colors ${
                            isSelected
                              ? "border-accent bg-accent/10 text-foreground"
                              : "border-border text-muted-foreground hover:border-accent/50"
                          }`}
                        >
                          <span>{v.label}</span>
                          <span className="font-semibold text-foreground">
                            ${v.priceUSD.toFixed(2)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Single-variant price display */}
              {!hasMultipleVariants && selectedVariant && (
                <div>
                  <span className="font-display text-3xl text-foreground">
                    ${selectedVariant.priceUSD.toFixed(2)}
                  </span>
                </div>
              )}

              {/* Modifiers (rare — only Pancit's no-pork) */}
              {hasModifiers && (
                <div className="space-y-2">
                  <span className="text-xs tracking-wider uppercase text-muted-foreground">
                    Options
                  </span>
                  {bowl.modifiers!.map((m) => (
                    <label
                      key={m.id}
                      className="flex items-center justify-between px-4 py-2 border border-border cursor-pointer hover:border-accent/40 transition-colors"
                    >
                      <span className="flex items-center gap-3">
                        <Checkbox
                          checked={selectedModifierIds.includes(m.id)}
                          onCheckedChange={() => toggleModifier(m.id)}
                          className="border-muted-foreground data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                        />
                        <span className="text-sm text-foreground">
                          {m.label}
                        </span>
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {m.priceUSD === 0
                          ? "Free"
                          : `+$${m.priceUSD.toFixed(2)}`}
                      </span>
                    </label>
                  ))}
                </div>
              )}

              {/* Add-ons (universal) */}
              <div className="space-y-2">
                <span className="text-xs tracking-wider uppercase text-muted-foreground">
                  Add-ons
                </span>
                {addOns.map((a) => (
                  <label
                    key={a.id}
                    className="flex items-center justify-between px-4 py-2 border border-border cursor-pointer hover:border-accent/40 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <Checkbox
                        checked={selectedAddOnIds.includes(a.id)}
                        onCheckedChange={() => toggleAddOn(a.id)}
                        className="border-muted-foreground data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      />
                      <span className="text-sm text-foreground">{a.label}</span>
                    </span>
                    <span className="text-sm text-muted-foreground">
                      +${a.priceUSD.toFixed(2)}
                    </span>
                  </label>
                ))}
              </div>

              {/* Total + Add to Cart */}
              <div className="pt-3 border-t border-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs tracking-wider uppercase text-muted-foreground">
                    Total
                  </span>
                  <span className="font-display text-3xl text-foreground">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 tracking-wider uppercase text-xs py-5"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
