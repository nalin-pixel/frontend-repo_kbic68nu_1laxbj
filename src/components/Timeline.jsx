import { useEffect, useState } from "react";

export default function Timeline() {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || "";
        const res = await fetch(`${base}/api/timeline`);
        if (!res.ok) throw new Error("Failed to load timeline");
        const data = await res.json();
        setEntries(data);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  if (loading) return <div className="text-fuchsia-200/80">Loading timeline…</div>;
  if (error) return <div className="text-red-300">{error}</div>;

  return (
    <section id="timeline" className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Silenced History: A Timeline</h2>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/20" />
        <div className="space-y-10">
          {entries.map((e, i) => (
            <div key={i} className="relative grid md:grid-cols-2 gap-6">
              <div className="md:col-start-1 md:text-right pr-8">
                <div className="inline-flex items-center gap-2 text-fuchsia-300 font-semibold bg-white/5 border border-white/10 rounded-full px-3 py-1">
                  <span>{e.year}</span>
                </div>
              </div>
              <div className="md:col-start-2 pl-8">
                <div className="absolute left-3.5 md:left-1/2 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-fuchsia-500 border-2 border-white" />
                <h3 className="text-xl text-white font-semibold">{e.title}</h3>
                <p className="text-fuchsia-100/80 mt-2">{e.description}</p>
                {e.tags?.length ? (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {e.tags.map((t) => (
                      <span key={t} className="text-xs text-white/80 bg-white/10 border border-white/10 rounded-full px-2 py-1">
                        {t}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
