export default function VSL() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-2">
            Assista antes de decidir
          </p>
          <h2 className="text-2xl md:text-4xl font-extrabold">
            Como criei 2 negócios online do zero
          </h2>
        </div>
        <div className="w-full aspect-video rounded-2xl shadow-[0_0_50px_rgba(16,185,129,0.12)] overflow-hidden border border-emerald-500/30">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/e-6aTiYizWI?rel=0&modestbranding=1"
            title="VSL - MPN-On"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
