export default function HighlightsScreen() {
  const highlights = [
    {
      title: "The Infinity Climber",
      reflection: "Watching these patterns repeat forever is hypnotic. It's a massive scale that makes you lose track of where you're standing.",
      image: "/images/IMG_0530.jpg",
    },
    {
      title: "The Milky Way",
      reflection: "A direct look at our cosmic neighborhood. It really puts into perspective how small our daily problems actually are.",
      image: "/images/IMG_0537.jpg",
    },
    {
      title: "The Observable Universe",
      reflection: "The literal edge of what we can see. It's wild to think about how much is still out there past the horizon.",
      image: "/images/IMG_0543.jpg",
    },
  ];

  return (
    <section 
      id="highlights" 
      className="min-h-svh w-full max-w-6xl mx-auto px-6 py-24 flex flex-col gap-16 [scroll-margin-top:6rem]"
    >
      {/* Section Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 uppercase tracking-wider">
          Section 02
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
          TOP 3 <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">HIGHLIGHTS</span>
        </h2>
      </div>

      {/* Highlights List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {highlights.map((item, index) => (
          <div key={index} className="group relative flex flex-col gap-6">
            
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 shadow-2xl transition-all duration-500 group-hover:border-blue-500/50">
              <img 
                src={item.image} 
                alt={item.title}
                className="h-full w-full object-cover opacity-60 transition-all duration-700 scale-110 group-hover:scale-100 group-hover:opacity-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />
            </div>

            {/* Text Content */}
            <div className="space-y-3 px-2">
              <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-white/50 leading-relaxed italic text-sm border-l-2 border-blue-500/30 pl-4">
                "{item.reflection}"
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}