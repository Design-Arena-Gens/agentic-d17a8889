export default function HomePage() {
  return (
    <section className="mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-3 py-1 text-brand-700">
        <span className="h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
        Processing in progress
      </div>
      <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        We?ll email you when your videos are ready ? feel free to explore!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Your videos are processing securely in the background. In the meantime, check out
        new features, browse templates, or learn tips to get the most out of your content.
      </p>
      <div className="mt-8 flex items-center justify-center gap-3">
        <a
          href="/explore"
          className="rounded-md bg-brand-600 px-5 py-3 text-white shadow hover:bg-brand-700"
        >
          Explore now
        </a>
        <a
          href="https://nextjs.org/docs"
          className="rounded-md border border-gray-300 px-5 py-3 text-gray-700 hover:border-gray-400"
          target="_blank"
          rel="noreferrer"
        >
          Learn more
        </a>
      </div>
    </section>
  )
}
