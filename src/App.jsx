function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-8 lg:px-12">
        <header className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-400">MatchForge</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Build your landing page with React + Tailwind.
            </h1>
          </div>
          <a
            className="inline-flex items-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg transition hover:bg-cyan-300"
            href="#features"
          >
            Explore the page
          </a>
        </header>

        <main className="mt-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <section>
            <p className="text-lg leading-8 text-slate-300">
              A clean starter template for a landing page using Vite, React, and Tailwind CSS.
              Perfect for launching a modern web app quickly.
            </p>
            <div className="mt-10 space-y-4">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
                <h2 className="text-xl font-semibold">Fast setup</h2>
                <p className="mt-2 text-slate-400">Run the dev server and start customizing your page immediately.</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl shadow-slate-950/20">
                <h2 className="text-xl font-semibold">Responsive design</h2>
                <p className="mt-2 text-slate-400">Mobile-first layout and utility-driven styling for easy edits.</p>
              </div>
            </div>
          </section>

          <section id="features" className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-10 shadow-2xl shadow-slate-950/30">
            <h2 className="text-2xl font-semibold text-white">What’s included</h2>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Vite-powered React app</li>
              <li>• Tailwind CSS with PostCSS support</li>
              <li>• Minimal landing page layout</li>
              <li>• Production build script</li>
            </ul>
            <div className="mt-8 rounded-3xl bg-slate-950/80 p-5 text-slate-200">
              <p className="text-sm text-slate-400">Tip: Edit <code className="rounded bg-slate-800 px-1.5 py-0.5">src/App.jsx</code> to customize the headline and content.</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
