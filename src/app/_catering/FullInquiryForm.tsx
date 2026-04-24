"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { submitFullInquiry, type ActionResult } from "./actions";
import {
  fullInquirySchema,
  guestCountOptions,
  budgetOptions,
  eventTypes,
} from "./schemas";

const initialState: ActionResult = { status: "idle" };

const inputCls =
  "bg-white/5 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-accent h-12";
const inputErrCls = "border-destructive";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1 },
  }),
};

type FieldName =
  | "company"
  | "name"
  | "email"
  | "phone"
  | "eventDate"
  | "guestCount"
  | "budgetRange"
  | "eventType"
  | "eventLocation"
  | "notes";

export function FullInquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitFullInquiry,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [guestCount, setGuestCount] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [eventType, setEventType] = useState("");

  useEffect(() => {
    if (state.status === "ok") {
      toast.success("Thanks! We received your request.");
      formRef.current?.reset();
      setGuestCount("");
      setBudgetRange("");
      setEventType("");
      setClientErrors({});
    } else if (state.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const errors = { ...clientErrors, ...(state.fieldErrors ?? {}) };
  const err = (f: FieldName) => errors[f];

  const validateField = (field: FieldName, value: string) => {
    const fieldSchema = fullInquirySchema.shape[field];
    const result = fieldSchema.safeParse(value);
    setClientErrors((p) => ({
      ...p,
      [field]: result.success ? "" : result.error.issues[0]?.message ?? "",
    }));
  };

  const handleBlur =
    (field: FieldName) =>
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      validateField(field, e.target.value);
    };

  return (
    <section
      id="inquiry-form"
      className="py-24 md:py-32 border-t border-border"
    >
      <div className="container mx-auto px-4 max-w-2xl">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
            Get Catering Proposal
          </h2>
          <p className="text-muted-foreground text-sm font-sans tracking-wide">
            We respond within 24 hours. Limited daily capacity to maintain
            execution standards.
          </p>
        </motion.div>

        <motion.form
          ref={formRef}
          action={formAction}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          className="space-y-4"
          noValidate
        >
          <input
            type="text"
            name="website_url_xz7"
            className="absolute opacity-0 h-0 w-0 pointer-events-none"
            tabIndex={-1}
            autoComplete="new-password"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              name="company"
              placeholder="Company Name"
              className={inputCls}
            />
            <div>
              <Input
                name="name"
                placeholder="Contact Name *"
                onBlur={handleBlur("name")}
                className={`${inputCls} ${err("name") ? inputErrCls : ""}`}
              />
              {err("name") && (
                <p className="text-destructive text-xs mt-1">{err("name")}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email *"
                onBlur={handleBlur("email")}
                className={`${inputCls} ${err("email") ? inputErrCls : ""}`}
              />
              {err("email") && (
                <p className="text-destructive text-xs mt-1">{err("email")}</p>
              )}
            </div>
            <div>
              <Input
                name="phone"
                type="tel"
                placeholder="Phone *"
                onBlur={handleBlur("phone")}
                className={`${inputCls} ${err("phone") ? inputErrCls : ""}`}
              />
              {err("phone") && (
                <p className="text-destructive text-xs mt-1">{err("phone")}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Input
                name="eventDate"
                type="date"
                onBlur={handleBlur("eventDate")}
                className={`${inputCls} ${
                  err("eventDate") ? inputErrCls : ""
                }`}
              />
              {err("eventDate") && (
                <p className="text-destructive text-xs mt-1">
                  {err("eventDate")}
                </p>
              )}
            </div>
            <div>
              <Select
                value={guestCount}
                onValueChange={(v) => {
                  const next = v ?? "";
                  setGuestCount(next);
                  validateField("guestCount", next);
                }}
              >
                <SelectTrigger
                  className={`${inputCls} w-full ${
                    err("guestCount") ? inputErrCls : ""
                  }`}
                >
                  <SelectValue placeholder="Estimated Guest Count *" />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  {guestCountOptions.map((opt) => (
                    <SelectItem
                      key={opt}
                      value={opt}
                      className="text-foreground focus:bg-muted"
                    >
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" name="guestCount" value={guestCount} />
              {err("guestCount") && (
                <p className="text-destructive text-xs mt-1">
                  {err("guestCount")}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Select value={budgetRange} onValueChange={(v) => setBudgetRange(v ?? "")}>
              <SelectTrigger className={`${inputCls} w-full`}>
                <SelectValue placeholder="Budget Range (optional)" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {budgetOptions.map((opt) => (
                  <SelectItem
                    key={opt}
                    value={opt}
                    className="text-foreground focus:bg-muted"
                  >
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input type="hidden" name="budgetRange" value={budgetRange} />
            <Select value={eventType} onValueChange={(v) => setEventType(v ?? "")}>
              <SelectTrigger className={`${inputCls} w-full`}>
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {eventTypes.map((opt) => (
                  <SelectItem
                    key={opt}
                    value={opt}
                    className="text-foreground focus:bg-muted"
                  >
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <input type="hidden" name="eventType" value={eventType} />
          </div>

          <Input
            name="eventLocation"
            placeholder="Event Location / City"
            className={inputCls}
          />

          <Textarea
            name="notes"
            placeholder="Additional Notes (dietary restrictions, setup requirements, etc.)"
            rows={4}
            className="bg-white/5 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-accent"
          />

          <Button
            type="submit"
            disabled={pending}
            size="lg"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-semibold tracking-wide py-6 text-sm"
          >
            {pending ? "Sending..." : "Get Catering Proposal"}
          </Button>

          <p className="text-center text-muted-foreground text-xs font-sans tracking-wide pt-1">
            Prefer to call or text?{" "}
            <a
              href="tel:+18325108440"
              className="text-foreground hover:text-accent transition-colors underline underline-offset-2"
            >
              +1 (832) 510-8440
            </a>{" "}
            or{" "}
            <a
              href="mailto:info@lasahtx.com"
              className="text-foreground hover:text-accent transition-colors underline underline-offset-2"
            >
              info@lasahtx.com
            </a>
          </p>
        </motion.form>
      </div>
    </section>
  );
}
