"use client";

import { useActionState, useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { submitQuickQuote, type ActionResult } from "./actions";
import { quickQuoteSchema, guestCountOptions } from "./schemas";

const initialState: ActionResult = { status: "idle" };

const inputCls =
  "bg-white/5 border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-accent h-12";
const inputErrCls = "border-destructive";

type FieldName =
  | "company"
  | "name"
  | "email"
  | "phone"
  | "eventDate"
  | "guestCount";

export function QuickQuoteForm() {
  const [state, formAction, pending] = useActionState(
    submitQuickQuote,
    initialState
  );
  const formRef = useRef<HTMLFormElement>(null);
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({});
  const [guestCount, setGuestCount] = useState("");

  useEffect(() => {
    if (state.status === "ok") {
      toast.success("Thanks! We received your request.");
      formRef.current?.reset();
      setGuestCount("");
      setClientErrors({});
    } else if (state.status === "error" && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  const errors = { ...clientErrors, ...(state.fieldErrors ?? {}) };
  const err = (f: FieldName) => errors[f];

  const validateField = (field: FieldName, value: string) => {
    const fieldSchema = quickQuoteSchema.shape[field];
    const result = fieldSchema.safeParse(value);
    setClientErrors((p) => ({
      ...p,
      [field]: result.success ? "" : result.error.issues[0]?.message ?? "",
    }));
  };

  const handleBlur =
    (field: FieldName) => (e: React.FocusEvent<HTMLInputElement>) => {
      validateField(field, e.target.value);
    };

  return (
    <form ref={formRef} action={formAction} className="space-y-3" noValidate>
      <input
        type="text"
        name="website_url_xz7"
        className="absolute opacity-0 h-0 w-0 pointer-events-none"
        tabIndex={-1}
        autoComplete="new-password"
        aria-hidden="true"
      />

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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
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

      <div>
        <Input
          name="eventDate"
          type="date"
          onBlur={handleBlur("eventDate")}
          className={`${inputCls} ${err("eventDate") ? inputErrCls : ""}`}
        />
        {err("eventDate") && (
          <p className="text-destructive text-xs mt-1">{err("eventDate")}</p>
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
          <p className="text-destructive text-xs mt-1">{err("guestCount")}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={pending}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-semibold tracking-wide py-6 text-sm"
      >
        {pending ? "Sending..." : "Request Catering Quote"}
      </Button>
    </form>
  );
}
