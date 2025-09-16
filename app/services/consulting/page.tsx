export default function ConsultingPage() {
return (
<main className="mx-auto max-w-5xl px-6 py-16">
{/* Hero */}
<section className="mb-16">
<h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Expert Consulting to Engineer Your Big Buck Paradise</h1>
<p className="mt-6 text-lg leading-relaxed text-zinc-700">
Every great property transformation starts with a clear plan. Our consulting services give you the
blueprint to design a property that consistently attracts, holds, and produces mature whitetail bucks.
</p>
<p className="mt-4 text-lg leading-relaxed text-zinc-700">
We walk your land with you, analyze habitat, access, food, and cover, and design a strategy that fits your
goals, budget, and hunting style. You’ll leave with a step-by-step action plan—so you know exactly what to
do first, and why.
</p>
<div className="mt-8">
<CtaButton />
</div>
</section>


{/* Value / Differentiators */}
<section className="grid gap-6 rounded-2xl bg-zinc-50 p-8 sm:grid-cols-3">
{[
{
title: "Whitetail Biology + Forestry",
body:
"A practical blend of deer behavior, proven hunting strategy, and forestry expertise to maximize results.",
},
{
title: "Tailored to Your Goals",
body:
"Every plan is custom—aligned to your property, your budget, and how you want to hunt and enjoy it.",
},
{
title: "Action-First Clarity",
body:
"You’ll know the exact order of operations for the highest impact improvements this season and beyond.",
},
].map((item) => (
<div key={item.title} className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm">
<h3 className="text-lg font-semibold">{item.title}</h3>
<p className="mt-3 text-zinc-700">{item.body}</p>
</div>
))}
</section>


{/* Deliverables */}
<section className="mt-16">
<h2 className="text-2xl font-bold">What You Get</h2>
<ul className="mt-6 grid gap-4 sm:grid-cols-2">
{[
"Customized property design map (digital + printable)",
"Written action plan with prioritized steps",
"Hunting strategy: stand locations, access routes, seasonal tactics",
"Optional timber + habitat recommendations for added value",
"Clear next steps—DIY or have us implement",
].map((text) => (
<li key={text} className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-4">
}
