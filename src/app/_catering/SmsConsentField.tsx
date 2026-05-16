import Link from "next/link";

type SmsConsentFieldProps = {
  id: string;
};

export function SmsConsentField({ id }: SmsConsentFieldProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-border bg-white/5 p-4">
      <input
        id={id}
        name="smsConsent"
        type="checkbox"
        value="agreed"
        className="mt-1 h-4 w-4 shrink-0 accent-accent"
      />
      <label
        htmlFor={id}
        className="text-xs leading-relaxed text-muted-foreground"
      >
        I agree to receive recurring SMS messages from{" "}
        <span className="text-foreground">Lasa HTX</span> about catering
        inquiries, quotes, event updates, and hospitality offers at the phone
        number provided. Message frequency varies. Message and data rates may
        apply. Reply STOP to opt out and HELP for help. Consent is not a
        condition of purchase. View our{" "}
        <Link
          href="/privacy"
          className="text-foreground underline underline-offset-2 transition-colors hover:text-accent"
        >
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link
          href="/sms-terms"
          className="text-foreground underline underline-offset-2 transition-colors hover:text-accent"
        >
          SMS Terms
        </Link>
        .
      </label>
    </div>
  );
}
