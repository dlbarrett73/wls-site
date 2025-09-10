
export default function Services() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-bold">Services</h1>
      <p className="mt-3 text-neutral-600">Consulting • Habitat Implementation • Land for Sale</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {['Consulting','Habitat Implementation','Land for Sale'].map((s)=>(
          <div key={s} className="card p-6">
            <h2 className="text-xl font-semibold">{s}</h2>
            <p className="mt-2 text-sm text-neutral-700">Details coming soon. Contact us to discuss your goals.</p>
          </div>
        ))}
      </div>
    </main>
  );
}
