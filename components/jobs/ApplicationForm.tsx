"use client";

import { useEffect, useState } from "react";
import type { FormEvent } from "react";
import { CheckCircle2, Upload } from "lucide-react";
import { toast } from "sonner";
import { FormField } from "@/components/ui/FormField";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { positions } from "@/data/site";

export function ApplicationForm({ prefillPosition }: { prefillPosition: string }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", position: "", availability: "", experience: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (prefillPosition) setForm((f) => ({ ...f, position: prefillPosition }));
  }, [prefillPosition]);

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Please enter your full name.";
    if (!form.phone.trim()) errs.phone = "Please enter a phone number.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Please enter a valid email.";
    if (!form.position) errs.position = "Please choose a position.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setSending(true);
    window.setTimeout(() => {
      setSending(false);
      setSubmitted(true);
      toast.success("Application received — we'll be in touch!");
    }, 900);
  }

  if (submitted) {
    return (
      <div className="mt-10 border border-turf/50 bg-panel p-10 text-center" data-testid="application-success">
        <CheckCircle2 className="mx-auto h-12 w-12 text-green-400" aria-hidden="true" />
        <h3 className="mt-4 font-heading text-2xl font-extrabold uppercase tracking-tight text-bone">
          Application Sent
        </h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-fog">
          Thanks, {form.name.split(" ")[0]} — our team will review your application and reach out soon.
        </p>
        <button
          type="button"
          data-testid="application-reset"
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", phone: "", email: "", position: "", availability: "", experience: "", message: "" });
          }}
          className="mt-6 inline-flex min-h-12 items-center border border-bone/30 px-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-bone transition-colors hover:border-ember hover:text-ember"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="mt-10 space-y-6" data-testid="application-form">
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Full Name" htmlFor="app-name" required error={errors.name}>
          <Input id="app-name" data-testid="app-name" type="text" autoComplete="name" value={form.name} onChange={set("name")} aria-invalid={!!errors.name} />
        </FormField>
        <FormField label="Phone" htmlFor="app-phone" required error={errors.phone}>
          <Input id="app-phone" data-testid="app-phone" type="tel" autoComplete="tel" value={form.phone} onChange={set("phone")} aria-invalid={!!errors.phone} />
        </FormField>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Email" htmlFor="app-email" required error={errors.email}>
          <Input id="app-email" data-testid="app-email" type="email" autoComplete="email" value={form.email} onChange={set("email")} aria-invalid={!!errors.email} />
        </FormField>
        <FormField label="Position Interested In" htmlFor="app-position" required error={errors.position}>
          <Select id="app-position" data-testid="app-position" value={form.position} onChange={set("position")} aria-invalid={!!errors.position}>
            <option value="">Select a position</option>
            {positions.map((p) => (
              <option key={p.title} value={p.title}>{p.title}</option>
            ))}
          </Select>
        </FormField>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <FormField label="Availability" htmlFor="app-availability">
          <Input id="app-availability" data-testid="app-availability" type="text" placeholder="e.g. Nights & weekends" value={form.availability} onChange={set("availability")} />
        </FormField>
        <FormField label="Experience" htmlFor="app-experience">
          <Input id="app-experience" data-testid="app-experience" type="text" placeholder="e.g. 2 years serving" value={form.experience} onChange={set("experience")} />
        </FormField>
      </div>
      <FormField label="Message" htmlFor="app-message">
        <Textarea id="app-message" data-testid="app-message" rows={4} value={form.message} onChange={set("message")} placeholder="Tell us a little about yourself" />
      </FormField>
      <div>
        <label htmlFor="app-resume" className="mb-2 block font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-fog">
          Resume (optional)
        </label>
        <label
          htmlFor="app-resume"
          className="flex min-h-14 cursor-pointer items-center gap-3 border border-dashed border-line bg-graphite px-4 text-sm text-fog transition-colors hover:border-ember"
        >
          <Upload className="h-4 w-4 text-ember" aria-hidden="true" />
          Upload a PDF or Word document
        </label>
        <input id="app-resume" data-testid="app-resume" type="file" accept=".pdf,.doc,.docx" className="sr-only" />
      </div>
      <button
        type="submit"
        data-testid="application-submit"
        disabled={sending}
        className="inline-flex min-h-14 w-full items-center justify-center bg-copper px-8 font-mono text-sm font-semibold uppercase tracking-[0.2em] text-white transition-all duration-200 hover:bg-copper-deep active:scale-[0.98] disabled:opacity-60 sm:w-auto"
      >
        {sending ? "Sending…" : "Submit Application"}
      </button>
    </form>
  );
}
