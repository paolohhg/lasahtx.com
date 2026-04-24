import {
  ShieldCheck,
  Factory,
  BarChart3,
  Clock,
  MapPin,
} from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Licensed & Insured" },
  { icon: Factory, label: "Commercial Production Kitchen" },
  { icon: BarChart3, label: "Structured High-Volume Systems" },
  { icon: Clock, label: "24-Hour Response Guarantee" },
  { icon: MapPin, label: "Serving Greater Houston Area" },
];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <Icon className="h-4 w-4 text-accent shrink-0" />
              <span className="tracking-wide">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
