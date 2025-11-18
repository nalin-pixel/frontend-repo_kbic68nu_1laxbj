import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const submit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const base = import.meta.env.VITE_BACKEND_URL || "";
      const res = await fetch(`${base}/api/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Failed to subscribe");
      setStatus("success");
      setEmail("");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10">
        <h3 className="text-2xl md:text-3xl font-bold text-white">Be the first to hear the next movement</h3>
        <p className="text-fuchsia-100/80 mt-2">Join the circle for premiere dates, behind-the-scenes fragments, and call-outs for community voices.</p>
        <form onSubmit={submit} className="mt-6 flex flex-col sm:flex-row gap-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
            required
            className="flex-1 px-4 py-3 rounded-xl bg-black/40 border border-white/15 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-6 py-3 rounded-xl bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-semibold shadow-lg shadow-fuchsia-600/30 transition disabled:opacity-60"
          >
            {status === "loading" ? "Joining…" : status === "success" ? "Welcome!" : "Join"}
          </button>
        </form>
      </div>
    </section>
  );
}
