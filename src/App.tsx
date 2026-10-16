import { useEffect, useState } from "react";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { IdeasSection } from "./components/IdeasSection";
import { IntroductionSection } from "./components/IntroductionSection";
import { SpeakingSection } from "./components/SpeakingSection";
import { VenturesSection } from "./components/VenturesSection";

export default function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        className="progress"
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
      <Header />
      <main>
        <HeroSection />
        <IntroductionSection />
        <VenturesSection />
        <IdeasSection />
        <SpeakingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
