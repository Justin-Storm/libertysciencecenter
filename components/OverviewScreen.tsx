export default function OverviewScreen() {
  return (
    <section 
      id="overview" 
      className="min-h-svh w-full max-w-6xl mx-auto px-6 py-24 flex flex-col justify-center gap-16 [scroll-margin-top:6rem]"
    >
      {/* Section Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 uppercase tracking-wider">
          Section 01
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
          MISSION <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">OVERVIEW</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-12">
          {/* The Timeline */}
          <div className="space-y-6 group">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-blue-500/50" />
              <h3 className="text-xl font-bold text-white uppercase tracking-widest text-blue-400">The Timeline</h3>
            </div>
            <p className="text-lg text-white/60 leading-relaxed italic border-l-2 border-blue-500/30 pl-6">
              A quick window of exploration from <span className="text-white font-semibold">08:30</span> to <span className="text-white font-semibold">3:15</span>. 
              We traded the classroom for a laboratory of the real world.
            </p>
          </div>

          {/* Initial Expectations */}
          <div className="space-y-6 group">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-indigo-500/50" />
              <h3 className="text-xl font-bold text-white uppercase tracking-widest text-indigo-400">Expectations</h3>
            </div>
            <p className="text-lg text-white/60 leading-relaxed italic border-l-2 border-indigo-500/30 pl-6">
              I honestly didn't think we'd have enough time to see everything. I expected a bit of a rush, but I was curious to see how the JS coding part would actually work with the robots.
            </p>
          </div>
        </div>

        {/* Key Objectives */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-px w-8 bg-purple-500/50" />
            <h3 className="text-xl font-bold text-white uppercase tracking-widest text-purple-400">Key Objectives</h3>
          </div>
          <ul className="space-y-8">
            {[
              { label: "Robotics", desc: "Programming Sphero Bolt units using JavaScript logic." },
              { label: "Cosmos", desc: "Immersive deep-space traversal in the Planetarium." },
              { label: "Biology", desc: "Exploring diverse animal, fish, and insect species." }
            ].map((obj, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="text-blue-400 font-mono text-sm">0{i+1}</span>
                <div>
                  <strong className="text-white block text-sm uppercase tracking-wider mb-1">{obj.label}</strong>
                  <span className="text-white/50 text-sm leading-relaxed">{obj.desc}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-12 border-t border-white/10">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm group hover:border-blue-500/30 transition-colors">
          <p className="text-xs text-white/40 uppercase tracking-[0.3em] mb-2">Total Duration</p>
          <p className="text-3xl font-black text-white">6h 45m</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm group hover:border-purple-500/30 transition-colors">
          <p className="text-xs text-white/40 uppercase tracking-[0.3em] mb-2">Environment</p>
          <p className="text-3xl font-black text-white">Multi-Terrain</p>
        </div>
      </div>
    </section>
  )
}