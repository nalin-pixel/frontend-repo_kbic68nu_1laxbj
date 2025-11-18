import { useRef, useState } from "react";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  const [showSubscribe, setShowSubscribe] = useState(false);
  const subscribeRef = useRef(null);

  const handleSubscribe = () => {
    subscribeRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-950 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(236,72,153,0.15),transparent_35%),radial-gradient(circle_at_80%_90%,rgba(34,211,238,0.12),transparent_35%)]" />
      <div className="relative">
        <Hero onSubscribe={handleSubscribe} />
        <Timeline />
        <div ref={subscribeRef}>
          <CTA />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
