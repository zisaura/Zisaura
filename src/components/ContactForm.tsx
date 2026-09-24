import { useState, type FormEvent } from "react";
import { useServerFn } from "@tanstack/react-start";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  contactSubmissionSchema,
  submitContactRequest,
  type ContactSubmission,
} from "@/lib/contact.functions";

const initialValues: ContactSubmission = {
  fullName: "",
  company: "",
  workEmail: "",
  phone: "",
  businessDescription: "",
  serviceInterest: "not-sure",
  message: "",
};

const serviceOptions = [
  ["lead-generation", "Lead generation"],
  ["sales-follow-up", "Sales follow-up"],
  ["social-media-marketing", "Social media marketing"],
  ["accounting-back-office", "Accounting & back-office support"],
  ["multiple-services", "Multiple services"],
  ["not-sure", "Not sure yet"],
] as const;

export function ContactForm() {
  const submit = useServerFn(submitContactRequest);
  const [values, setValues] = useState<ContactSubmission>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactSubmission, string>>>({});
  const [submitError, setSubmitError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const update = (field: keyof ContactSubmission, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitError("");
    const parsed = contactSubmissionSchema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof ContactSubmission, string>> = {};
      for (const issue of parsed.error.issues) {
        const field = issue.path[0];
        if (typeof field === "string" && !(field in fieldErrors)) {
          fieldErrors[field as keyof ContactSubmission] = issue.message;
        }
      }
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      await submit({ data: parsed.data });
      setIsSuccess(true);
      setValues(initialValues);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="flex min-h-96 flex-col items-start justify-center rounded-lg border border-border bg-card p-8" role="status">
        <div className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-accent-soft">
          <CheckCircle2 className="h-5 w-5 text-accent" aria-hidden="true" />
        </div>
        <h3 className="mt-6 font-display text-2xl">Thanks — we've received your request.</h3>
        <p className="mt-3 text-sm text-muted-foreground">We'll be in touch shortly.</p>
      </div>
    );
  }

  const fieldClass = "mt-2 h-11 bg-background";
  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-lg border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" id="fullName" error={errors.fullName}>
          <Input id="fullName" name="fullName" autoComplete="name" required maxLength={100} value={values.fullName} onChange={(e) => update("fullName", e.target.value)} aria-invalid={Boolean(errors.fullName)} className={fieldClass} />
        </Field>
        <Field label="Company" id="company" error={errors.company}>
          <Input id="company" name="company" autoComplete="organization" required maxLength={150} value={values.company} onChange={(e) => update("company", e.target.value)} aria-invalid={Boolean(errors.company)} className={fieldClass} />
        </Field>
        <Field label="Work email" id="workEmail" error={errors.workEmail}>
          <Input id="workEmail" name="workEmail" type="email" autoComplete="email" required maxLength={255} value={values.workEmail} onChange={(e) => update("workEmail", e.target.value)} aria-invalid={Boolean(errors.workEmail)} className={fieldClass} />
        </Field>
        <Field label="Phone number" id="phone" error={errors.phone}>
          <Input id="phone" name="phone" type="tel" autoComplete="tel" required maxLength={30} value={values.phone} onChange={(e) => update("phone", e.target.value)} aria-invalid={Boolean(errors.phone)} className={fieldClass} />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="What does your business do?" id="businessDescription" error={errors.businessDescription}>
          <Textarea id="businessDescription" name="businessDescription" required maxLength={1000} value={values.businessDescription} onChange={(e) => update("businessDescription", e.target.value)} aria-invalid={Boolean(errors.businessDescription)} className="mt-2 min-h-24 bg-background" />
        </Field>
      </div>

      <div className="mt-5">
        <Field label="What are you looking for?" id="serviceInterest" error={errors.serviceInterest}>
          <Select value={values.serviceInterest} onValueChange={(value) => update("serviceInterest", value)}>
            <SelectTrigger id="serviceInterest" className="mt-2 h-11 bg-background" aria-label="What are you looking for?">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {serviceOptions.map(([value, label]) => <SelectItem key={value} value={value}>{label}</SelectItem>)}
            </SelectContent>
          </Select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Tell us briefly about what you need." id="message" error={errors.message}>
          <Textarea id="message" name="message" required maxLength={2000} value={values.message} onChange={(e) => update("message", e.target.value)} aria-invalid={Boolean(errors.message)} className="mt-2 min-h-32 bg-background" />
        </Field>
      </div>

      {submitError && <p className="mt-5 text-sm text-destructive" role="alert">{submitError}</p>}
      <Button type="submit" disabled={isSubmitting} className="mt-6 h-11 w-full bg-accent text-accent-foreground hover:bg-accent/90">
        {isSubmitting ? <><Loader2 className="animate-spin" aria-hidden="true" />Sending…</> : "Let's Talk"}
      </Button>
    </form>
  );
}

function Field({ label, id, error, children }: { label: string; id: string; error: string | undefined; children: React.ReactNode }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="mt-1.5 text-xs text-destructive" role="alert">{error}</p>}
    </div>
  );
}