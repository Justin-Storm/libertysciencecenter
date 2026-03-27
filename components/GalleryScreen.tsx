export default function GalleryScreen() {
  const images = [
    { 
      src: "/images/IMG_0530.jpg", 
      alt: "Infinity Climber", 
      className: "md:col-span-1 md:row-span-1" 
    },
    { 
      src: "/images/IMG_0537.jpg", 
      alt: "Milky Way", 
      className: "md:col-span-1 md:row-span-1" 
    },
    { 
      src: "/images/IMG_0543.jpg", 
      alt: "Observable Universe", 
      className: "md:col-span-1 md:row-span-1" 
    },
    { 
      src: "/images/IMG_0561.jpg", 
      alt: "Monkey", 
      className: "md:col-span-1 md:row-span-1" 
    },
    { 
      /* This is the "Big One" */
      src: "/images/IMG_0567.jpg", 
      alt: "Snakes", 
      className: "md:col-span-2 md:row-span-1" 
    },
  ];

  return (
    <section 
      id="gallery" 
      className="min-h-svh w-full max-w-6xl mx-auto px-6 py-24 flex flex-col gap-16 [scroll-margin-top:6rem]"
    >
      {/* Section Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 uppercase tracking-wider">
          Section 03
        </div>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white uppercase">
          PHOTO <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">GALLERY</span>
        </h2>
        <p className="text-white/40 text-sm uppercase tracking-[0.3em] font-medium">Visual Documentation</p>
      </div>

      {/* New Layout Grid: 3 Columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {images.map((img, index) => (
          <div 
            key={index} 
            className={`relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 group transition-all duration-500 hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] ${img.className}`}
          >
            <img 
              src={img.src} 
              alt={img.alt}
              className="h-full w-full object-cover opacity-70 transition-all duration-700 scale-110 group-hover:scale-100 group-hover:opacity-100"
            />
            
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            
            {/* Caption - Glassmorphism */}
            <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <div className="bg-black/40 backdrop-blur-xl border border-white/10 px-4 py-2 rounded-2xl text-white text-xs font-bold uppercase tracking-widest">
                {img.alt}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}