'use client';

import { useState } from 'react';

type FormState = {
  name: string;
  email: string;
  phone: string;
  acreage: string;
  county: string;
  goal: string;
  timeline: string;
  message: string;
  company?: string; // honeypot
};

export default function Contact() {
  const [state, setState] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    acreage: '',
    county: '',
    goal: '',
    timeline: '',
    message: '',
    company: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setState({ ...state, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo-only: prevent submission. Replace with AWeber embed or API when ready.
    alert('Thanks! This demo form does not send. Replace with your AWeber embed or API when ready.');
  };

  return (
    <main className="container py-16 md:py-24">
      {/* Header */}
      <section className="mb-10 md:mb-14">
        <p className="text-sm font-semibold tracking-widest text-neutral-500">CONTACT</p>
        <h1 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">
          Free 15-Minute Property Strategy Call
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-neutral-700">
          Tell us about your acreage, goals, and timeline. We’ll map the fastest path to a hunt-ready property—so you can
          attract, hold, and kill mature whitetails.
        </p>
      </section>

      {/* Two-column */}
      <section className="grid gap-10 lg:grid-cols-2">
        {/* Left: Value props */}
        <div>
          <div className="rounded-2xl border border-neutral-200 p-6 md:p-8 shadow-soft bg-white">
            <h2 className="text-xl font-bold">What to Expect</h2>
            <ul className="mt-4 space-y-3 text-neutral-700">
              <li>• Quick discovery of your goals, acreage, and access realities</li>
              <li>• Clear, hunter-focused recommendations and next steps</li>
              <li>• Zero pressure—decide if we’re the right fit for your vision</li>
            </ul>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Badge text="PA-Based" />
              <Badge text="Forestry & Habitat Expertise" />
              <Badge text="Whitetail-First Designs" />
              <Badge text="Transparent Pricing" />
            </div>

            <p className="mt-6 text-sm text-neutral-600">
              Prefer to write it out? Use the form and we’ll reply within one business day.
            </p>
          </div>
        </div>

        {/* Right: Form */}
        <div className="rounded-2xl border border-neutral-200 p-6 md:p-8 shadow-soft bg-white">
          {/* Replace this entire <form> with your AWeber embed when ready */}
          <form className="space-y-4" onSubmit={onSubmit} noValidate>
            {/* honeypot */}
            <div className="hidden">
              <label>
                Company
                <input
                  name="company"
                  value={state.company}
                  onChange={onChange}
                  autoComplete="off"
                  tabIndex={-1}
                  className="border px-2 py-1"
                />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Name" name="name" value={state.name} onChange={onChange} required />
              <Field label="Email" name="email" type="email" value={state.email} onChange={onChange} required />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Phone (optional)" name="phone" value={state.phone} onChange={onChange} />
              <Field label="County/State" name="county" value={state.county} onChange={onChange} />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Acreage" name="acreage" value={state.acreage} onChange={onChange} inputMode="numeric" />
              <SelectField
                label="Timeline"
                name="timeline"
                value={state.timeline}
                onChange={onChange}
                options={[
                  { value: '', label: 'Select...' },
                  { value: 'asap', label: 'ASAP' },
                  { value: '30-60', label: '30–60 days' },
                  { value: '60-90', label: '60–90 days' },
                  { value: '90+', label: '90+ days' },
                ]}
              />
            </div>

            <SelectField
              label="Primary Goal"
              name="goal"
              value={state.goal}
              onChange={onChange}
              options={[
                { value: '', label: 'Select...' },
                { value: 'buy', label: 'Buy Land' },
                { value: 'tour', label: 'Tour Property' },
                { value: 'improve', label: 'Improve My Current Property' },
                { value: 'mature-bucks', label: 'Attract & Kill Mature Bucks' },
                { value: 'other', label: 'Other' },
              ]}
            />

            <TextArea
              label="Message"
              name="message"
              value={state.message}
              onChange={onChange}
              placeholder="Tell us about your property, current access, habitat, pressure, and your end goal…"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-brand-700 px-4 py-3 font-semibold text-white transition hover:bg-brand-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-700"
            >
              Request My Call
            </button>

            <p className="text-xs text-neutral-500">
              Demo only: this form does not send. Replace with your AWeber embed (recommended), or ask me to wire it to
              your list via API.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

/* ——— Reusable bits ——— */

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  inputMode,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  type?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        inputMode={inputMode}
        required={required}
        className="mt-1 w-full rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-700"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  options: { value: string; label: string }[];
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-1 w-full appearance-none rounded-xl border border-neutral-300 bg-white px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-700"
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextArea({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: any) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 w-full min-h-[120px] rounded-xl border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand-700"
      />
    </div>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <div className="inline-flex items-center rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700">
      {text}
    </div>
  );
}
