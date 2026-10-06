"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";

const reasons = ["General Question", "Large Party", "Event Inquiry", "Feedback", "Employment", "Other"];

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", reason: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your full name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Please enter a valid email.";
    if (!form.reason) errs.reason = "Please choose a reason.";
    if (!form.message.trim()) errs.message = "Please write a short message.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      toast.success("Message sent — we'll get back to you soon!");
    }, 900);
  }

  if (submitted) {
    return (
      <div className="flex h-full flex-col items-center justify-center border border-turf/50 bg-panel p-10 text-center" data-testid="contact-success">
        <CheckCircle2 className="h-12 w-12 text-green-400" aria-hidden="true" />
        <h2 className="mt-4 font-heading text-2xl font-extrabold uppercase tracking-tight text-bone">
          Message Sent
        </h2>
        <p className="mx-auto mt-2 max-w-sm text-sm text-fog">
          Thanks, {form.name.split(" ")[0]} — our team will get back to you soon.
        </p>
        <button
          type="button"
          data-testid="contact-reset"
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", phone: "", reason: "", message: "" });
          }}
          className="mt-6 inline-flex min-h-12 items-center border border-bone/30 px-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone transition-colors hover:border-ember hover:text-ember"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6 border border-line bg-panel p-7 lg:p-9" data-testid="contact-form">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="c-name" required error={errors.name}>
          <Input id="c-name" data-testid="contact-name" type="text" autoComplete="name" value={form.name} onChange={set("name")} aria-invalid={!!errors.name} />
        </FormField>
        <FormField label="Email" htmlFor="c-email" required error={errors.email}>
          <Input id="c-email" data-testid="contact-email" type="email" autoComplete="email" value={form.email} onChange={set("email")} aria-invalid={!!errors.email} />
        </FormField>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Phone" htmlFor="c-phone">
          <Input id="c-phone" data-testid="contact-phone" type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} />
        </FormField>
        <FormField label="Reason for Contacting" htmlFor="c-reason" required error={errors.reason}>
          <Select id="c-reason" data-testid="contact-reason" value={form.reason} onChange={set("reason")} aria-invalid={!!errors.reason}>
            <option value="">Select a reason</option>
            {reasons.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </Select>
        </FormField>
      </div>
      {form.reason === "Large Party" && (
        <p className="border border-ember/40 bg-copper/10 px-4 py-3 text-xs leading-relaxed text-ember" role="note" data-testid="party-disclaimer">
          Submitting this form does not confirm a reservation. Our team will contact you to confirm availability.
        </p>
      )}
      <FormField label="Message" htmlFor="c-message" required error={errors.message}>
        <Textarea id="c-message" data-testid="contact-message" rows={5} value={form.message} onChange={set("message")} className="min-h-32" aria-invalid={!!errors.message} />
      </FormField>
      <button
        type="submit"
        data-testid="contact-submit"
        disabled={sending}
        className="inline-flex min-h-14 w-full items-center justify-center gap-2 bg-copper px-8 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-copper-deep active:scale-[0.98] disabled:opacity-60 sm:w-auto"
      >
        <Send className="h-4 w-4" aria-hidden="true" />
        {sending ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
