/* =========================
   HERO (replace your current hero CTA area)
   ========================= */

{/* HERO */}
<section className="border-b border-slate-200 bg-gradient-to-b from-slate-900 to-slate-950">
  <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
    <div className="max-w-3xl">
      <div className="flex flex-wrap items-center gap-2">
        <Badge>Offer</Badge>
        <Badge>Optional</Badge>
        <Badge>After Audit + System Plan</Badge>
      </div>

      <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
        Execution that installs the system{" "}
        <span className="text-slate-200">without breaking it.</span>
      </h1>

      <p className="mt-6 text-lg leading-relaxed text-slate-200">
        Execution is where the plan becomes real — with access discipline, pressure governance,
        and habitat work sequenced to protect security. You can implement owner-led, or we can
        install it with our crew and equipment under the WLS umbrella.
      </p>

      {/* UPDATED CTAs (no up-funnel leakage to Plan pricing) */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
        <ButtonLink href="/capture/execution" variant="primary">
          Apply for Execution
        </ButtonLink>
        <ButtonLink href="/capture/property-audit" variant="secondary">
          Not qualified yet? Start with an Audit
        </ButtonLink>
      </div>

      <p className="mt-4 text-sm text-slate-300">
        Already completed the Audit + System Plan? Great —{" "}
        <span className="font-semibold text-white">Execution is scoped to your plan</span>{" "}
        and built around a pressure-safe sequence.
      </p>
    </div>

    {/* Doctrine strip */}
    <div className="mt-12 grid gap-4 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 sm:grid-cols-3">
      <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
        <div className="text-sm font-semibold text-white">1) Audit</div>
        <div className="mt-2 text-sm text-slate-200">
          Establish what’s true: structure, pressure, access, security, ceiling & limiting factors.
        </div>
      </div>
      <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
        <div className="text-sm font-semibold text-white">2) Plan</div>
        <div className="mt-2 text-sm text-slate-200">
          Engineer the system: pressure governance, access strategy, habitat sequence, sit budgets.
        </div>
      </div>
      <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
        <div className="text-sm font-semibold text-white">3) Execution</div>
        <div className="mt-2 text-sm text-slate-200">
          Implement with discipline: install, verify, and keep the system intact through season.
        </div>
      </div>
    </div>
  </div>
</section>

/* =========================
   SCOPE & OPTIONS (replace your current Investment section)
   ========================= */

<Section
  id="scope-options"
  eyebrow={<Badge>Scope & Options</Badge>}
  title="Transparent scope. Clear options."
  subtitle="Execution is scoped to your System Plan, your property, and your timeline. We price by phase and complexity — not vague promises."
>
  <div className="grid gap-6 lg:grid-cols-3">
    <Card title="Phase-based execution" icon={<span aria-hidden>🧱</span>}>
      Most clients execute in phases (access & security first, then habitat refinements). This keeps
      pressure risk low and makes outcomes predictable.
    </Card>

    <Card title="Owner-led or WLS-installed" icon={<span aria-hidden>🛠️</span>}>
      Choose your lane. You can implement yourself, use your contractor, or we can install it with
      our crew and equipment — all governed to the same standards.
    </Card>

    <Card title="Built-in stop rules" icon={<span aria-hidden>🧭</span>}>
      If a task would increase intrusion risk, compromise security, or make pressure cheaper, we
      redesign it, defer it, or remove it. Protecting the system is the job.
    </Card>
  </div>

  <div className="mt-10 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
    <h3 className="text-xl font-semibold text-slate-900">
      What you can expect
    </h3>

    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <ul className="space-y-4">
        <CheckItem>
          A scoped execution proposal with phases, responsibilities, and timeline windows
        </CheckItem>
        <CheckItem>
          Pressure-safe sequencing aligned to your plan (what happens now vs later)
        </CheckItem>
        <CheckItem>
          Access standards and intrusion controls installed to protect daylight
        </CheckItem>
      </ul>

      <ul className="space-y-4">
        <CheckItem>
          Habitat work chosen for system integrity (security held, pressure governed)
        </CheckItem>
        <CheckItem>
          Verification checkpoints so “installed” matches “designed”
        </CheckItem>
        <CheckItem>
          Optional in-season governance support (when appropriate)
        </CheckItem>
      </ul>
    </div>

    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <ButtonLink href="/capture/execution" variant="primary">
        Request a scoped proposal
      </ButtonLink>
      <ButtonLink href="/capture/property-audit" variant="secondary">
        Start with an Audit
      </ButtonLink>
    </div>

    <p className="mt-5 text-sm text-slate-600">
      Execution is not sold as “projects.” It’s the disciplined installation of the sequence your
      System Plan requires.
    </p>
  </div>
</Section>

/* =========================
   HABITAT & IMPLEMENTATION EXAMPLES (insert as a NEW section, ideally after Scope & Options)
   ========================= */

<Section
  id="habitat-examples"
  className="bg-white"
  eyebrow={<Badge>Habitat & Implementation Examples</Badge>}
  title="What we actually do on the ground (examples)."
  subtitle="These are not a menu. They’re tools — selected and sequenced by your System Plan to protect security, reduce intrusion, and keep pressure expensive."
>
  <div className="grid gap-6 lg:grid-cols-2">
    {/* Left column */}
    <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h3 className="text-xl font-semibold text-slate-900">Access + Intrusion Control</h3>
      <p className="mt-3 text-slate-600">
        We harden entry/exit so opportunities cost less than they produce.
      </p>
      <ul className="mt-6 space-y-4">
        <CheckItem>Screened access corridors and visual barriers</CheckItem>
        <CheckItem>Route refinement, quiet entries, and “no-contact” standards</CheckItem>
        <CheckItem>Trail work only when it reduces pressure cost (not convenience)</CheckItem>
        <CheckItem>Stand-area hardening to minimize detection risk</CheckItem>
      </ul>

      <Divider />

      <h3 className="text-xl font-semibold text-slate-900">Hunt Infrastructure</h3>
      <p className="mt-3 text-slate-600">
        Installed only where access and governance keep it viable.
      </p>
      <ul className="mt-6 space-y-4">
        <CheckItem>Stand/blind installation and access-proofing</CheckItem>
        <CheckItem>Low-impact observation setups for verification</CheckItem>
        <CheckItem>Entry/exit trimming with intrusion discipline</CheckItem>
      </ul>
    </div>

    {/* Right column */}
    <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200">
      <h3 className="text-xl font-semibold text-slate-900">Security + Structure</h3>
      <p className="mt-3 text-slate-600">
        Security drives ownership. Ownership drives mature-buck opportunity.
      </p>
      <ul className="mt-6 space-y-4">
        <CheckItem>Edge feathering, screening, and structural reinforcement</CheckItem>
        <CheckItem>TSI and timber work where it increases secure use (not intrusion)</CheckItem>
        <CheckItem>Hinge-cutting when it builds security without turning bedding into an ambush</CheckItem>
        <CheckItem>Selective plantings (trees/shrubs) to improve long-term cover</CheckItem>
      </ul>

      <Divider />

      <h3 className="text-xl font-semibold text-slate-900">Food + Holding (when the system can protect it)</h3>
      <p className="mt-3 text-slate-600">
        Food matters — but only inside a pressure-governed system. We build holding, not pulling.
      </p>
      <ul className="mt-6 space-y-4">
        <CheckItem>Spraying, soil conditioning, seedbed prep, planting</CheckItem>
        <CheckItem>Plot renovation and maintenance (lime, fertilizer, overseeding as needed)</CheckItem>
        <CheckItem>Perennial screens and “hold” food placement aligned to access</CheckItem>
      </ul>
    </div>
  </div>

  {/* Doctrine guardrail */}
  <div className="mt-10 rounded-3xl bg-slate-50 p-8 ring-1 ring-slate-200">
    <h3 className="text-xl font-semibold text-slate-900">Doctrine guardrails (non-negotiable)</h3>
    <div className="mt-6 grid gap-6 lg:grid-cols-2">
      <ul className="space-y-4">
        <CheckItem>
          Security is protected — we do not convert core areas into hunt zones.
        </CheckItem>
        <CheckItem>
          Access is engineered to be low-impact — intrusion is treated like a debt.
        </CheckItem>
        <CheckItem>
          Work is sequenced — we don’t rush tasks that jeopardize season.
        </CheckItem>
      </ul>

      <ul className="space-y-4">
        <XItem>
          We do not “create movement,” force travel, or build mandatory paths.
        </XItem>
        <XItem>
          We do not install food as a substitute for governance and access discipline.
        </XItem>
        <XItem>
          We do not sell random habitat projects. We install the system.
        </XItem>
      </ul>
    </div>

    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <ButtonLink href="/capture/execution" variant="primary">
        Apply for Execution
      </ButtonLink>
      <ButtonLink href="/property-audit" variant="secondary">
        Review the Audit
      </ButtonLink>
    </div>
  </div>
</Section>
