
export default function Properties() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-bold">Land for Sale</h1>
      <p className="mt-3 text-neutral-600">No active listings yet. Join our email list to get early alerts.</p>
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {[1,2,3].map(i => (
          <div className="card p-4 h-56 bg-neutral-50" key={i}>
            <div className="text-neutral-400 text-sm">Property placeholder #{i}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
