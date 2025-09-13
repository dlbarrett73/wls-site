
'use client';
import { useState } from 'react';

export default function Contact() {
  const [state, setState] = useState({ name:'', email:'', phone:'', acreage:'', county:'', goal:'', timeline:'', message:'' });
  const onChange = (e:any)=> setState({ ...state, [e.target.name]: e.target.value });

  return (
    <main className="container py-16 grid lg:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold">Free 15‑Minute Property Strategy Call</h1>
        <p className="mt-3 text-neutral-600">Tell us about your acreage, goals, and timeline. We’ll map the fastest path to a hunt‑ready property.</p>
        <ul className="mt-6 text-sm text-neutral-700 space-y-2">
          <li>• Quick discovery and next steps</li>
          <li>• Clear, hunter‑focused recommendations</li>
          <li>• No pressure—see if we’re the right fit</li>
        </ul>
      </div>
      <div className="card p-6">
        {/* For speed, you can paste your AWeber embed form below and remove this custom form. */}
        <form className="space-y-3" onSubmit={(e)=>e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-3">
            <Field label="Name" name="name" value={state.name} onChange={onChange} required />
            <Field label="Email" name="email" type="email" value={state.email} onChange={onChange} required />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <Field label="Phone" name="phone" value={state.phone} onChange={onChange} />
            <Field label="County/State" name="county" value={state.county} onChange={onChange} />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            <Field label="Acreage" name="acreage" value={state.acreage} onChange={onChange} />
            <Field label="Timeline" name="timeline" value={state.timeline} onChange={onChange} />
          </div>
          <Field label="Primary Goal ( trophy deer / legacy / buy land / improve land)" name="goal" value={state.goal} onChange={onChange} />
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" value={state.message} onChange={onChange} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900 min-h-[100px]" placeholder="Tell us about your property and goals..." />
          </div>
          <button className="w-full btn btn-primary">Request My Call</button>
          <p className="text-xs text-neutral-500 mt-2">This demo form doesn’t send. Replace with your AWeber embed (recommended), or ask me to wire it to your AWeber list via API.</p>
        </form>
      </div>
    </main>
  );
}

function Field({label, name, value, onChange, type='text', required=false}: any) {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      <input className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-900"
        name={name} value={value} onChange={onChange} type={type} required={required} />
    </div>
  );
}
