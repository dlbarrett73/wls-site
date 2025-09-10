
export default function About() {
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-bold">About Whitetail Land Solutions</h1>
      <p className="mt-3 text-neutral-600 max-w-prose">
        We combine decades of woods work, timber economics, and habitat design to create properties that hunt easier and produce more daylight opportunities on mature bucks. Based in Pennsylvania.
      </p>
      <dl className="grid md:grid-cols-2 gap-6 text-sm mt-8">
        <div>
          <dt className="text-neutral-500">Mailing Address</dt>
          <dd className="font-semibold">PO Box 167, NuMine, PA 16244</dd>
        </div>
        <div>
          <dt className="text-neutral-500">Email</dt>
          <dd className="font-semibold">info@whitetaillandsolutions.com</dd>
        </div>
        <div>
          <dt className="text-neutral-500">YouTube</dt>
          <dd className="font-semibold"><a className="underline" href="https://www.youtube.com/@GiantLegacy_WLS" target="_blank">@GiantLegacy_WLS</a></dd>
        </div>
      </dl>
    </main>
  );
}
