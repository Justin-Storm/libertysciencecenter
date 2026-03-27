export default function RatingScreen() {
  return (
    <section 
      id="rating" 
      className="min-h-svh w-full max-w-6xl mx-auto px-6 py-24 flex flex-col items-center justify-center gap-16 [scroll-margin-top:6rem]"
    >
      {/* Section Header */}
      <div className="space-y-4 text-center">
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 uppercase tracking-wider">
          Section 04
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
          FINAL <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">VERDICT</span>
        </h2>
      </div>

      {/* Top Layout: Rating + Quick Summary */}
      <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-4xl">
        {/* Large Rating Display */}
        <div className="relative group shrink-0">
          <div className="absolute -inset-8 rounded-full bg-indigo-500/20 blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative flex flex-col items-center justify-center w-52 h-52 rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl transition-transform duration-500 group-hover:scale-105">
            <span className="text-8xl font-black text-white tracking-tighter">10</span>
            <span className="text-sm font-bold text-blue-400 uppercase tracking-[0.3em] mt-[-5px]">Rating</span>
          </div>
        </div>

        {/* Quick Summary Quote */}
        <div className="text-center md:text-left space-y-4">
          <p className="text-xl md:text-2xl text-white/70 leading-relaxed italic font-medium border-l-2 border-blue-500/30 pl-6">
            "Honestly, for a school trip, this was as good as it gets. Coding the Sphero Bolts was actually fun, and the Planetarium looked incredible."
          </p>
        </div>
      </div>

      {/* Reflection Questions Grid (The 6 Points Section) */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
        {[
          {
            q: "What did you learn?",
            a: "I learned how to use JS logic to control physical hardware with the Sphero Bolts, and got a way better understanding of scale in the Planetarium."
          },
          {
            q: "What surprised you?",
            a: "How immersive the exhibits actually were. Usually, school trips feel a bit slow, but exploring the insects and fish actually felt like a real expedition."
          },
          {
            q: "Would you recommend?",
            a: "100%. It’s a perfect mix of tech and science. It doesn't feel like school work when you're actually hands-on with the robots and the animals."
          }
        ].map((item, i) => (
          <div key={i} className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:border-blue-500/30 transition-colors group">
            <h4 className="text-blue-400 text-xs font-black uppercase tracking-[0.2em] mb-4">
               {item.q}
            </h4>
            <p className="text-white/60 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
              {item.a}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Branding */}
      <div className="mt-8 pt-12 border-t border-white/10 w-full opacity-30 text-center">
        <p className="text-white text-[10px] uppercase tracking-[1em]">Mission Complete</p>
      </div>
    </section>
  );
}