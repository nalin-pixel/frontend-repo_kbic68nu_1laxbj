import { motion } from "framer-motion";

export default function Hero({ onSubscribe }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" aria-hidden>
        <div className="absolute -top-48 -right-48 w-[40rem] h-[40rem] rounded-full bg-fuchsia-600 blur-[120px]" />
        <div className="absolute -bottom-48 -left-48 w-[40rem] h-[40rem] rounded-full bg-cyan-500 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-36">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_0_30px_rgba(236,72,153,0.35)]"
        >
          Carthage: A Techno Opera
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 text-lg md:text-2xl text-fuchsia-100/90 max-w-3xl"
        >
          A sonic ritual reclaiming the silenced memory of a Mediterranean empire. Rhythm as archive. Bass as testimony.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={onSubscribe}
            className="px-6 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold shadow-lg shadow-fuchsia-600/30 transition"
          >
            Join the Circle
          </button>
          <a
            href="#timeline"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur border border-white/20 transition"
          >
            Explore the Timeline
          </a>
        </motion.div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 opacity-80">
          {[
            "Punic voices",
            "Ritual electronics",
            "Bodies as drum",
            "Archaeologies of bass",
          ].map((t) => (
            <div key={t} className="text-fuchsia-100/70 text-sm md:text-base bg-white/5 border border-white/10 rounded-xl px-4 py-3">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
