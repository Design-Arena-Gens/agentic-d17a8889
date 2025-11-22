const features = [
  {
    title: 'Templates gallery',
    description: 'Kickstart projects with ready-made templates tailored for social, promo, and more.',
  },
  {
    title: 'Getting started guides',
    description: 'Short guides to help you level up workflow while your videos process.',
  },
  {
    title: 'Community showcase',
    description: 'See what others are creating and get inspired by curated examples.',
  },
]

export default function ExplorePage() {
  return (
    <section className="mx-auto max-w-5xl">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Explore</h1>
      <p className="mt-3 text-gray-600">Discover resources while we finish processing your videos.</p>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl border border-gray-200 bg-white/70 p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">{f.title}</h2>
            <p className="mt-2 text-sm text-gray-600">{f.description}</p>
            <a href="#" className="mt-4 inline-block text-sm text-brand-700 hover:underline">Open ?</a>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-gradient-to-r from-brand-50 to-white p-6 border border-brand-100">
        <h3 className="text-base font-semibold text-brand-800">Status</h3>
        <p className="mt-1 text-sm text-gray-700">We?ll notify you at your email once processing completes. You can safely close this tab.</p>
      </div>
    </section>
  )
}
