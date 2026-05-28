import {
  ShieldCheck,
  Factory,
  BarChart3,
  Clock,
  MapPin,
} from "lucide-react";

const trustItems = [
  { icon: ShieldCheck, label: "Professional Catering Execution" },
  { icon: Factory, label: "Centralized Production" },
  { icon: BarChart3, label: "Multi-Concept Menu Planning" },
  { icon: Clock, label: "Recurring & One-Time Programs" },
  { icon: MapPin, label: "Serving Greater Houston" },
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
