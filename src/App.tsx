import { useCallback, useEffect, useState } from "react";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { IdeasSection } from "./components/IdeasSection";
import { IntroOverlay } from "./components/IntroOverlay";
import { IntroductionSection } from "./components/IntroductionSection";
import { SpeakingSection } from "./components/SpeakingSection";
import { VenturesSection } from "./components/VenturesSection";
import { IntroReadyContext, prefersReducedMotion } from "./lib/motion";

export default function App() {
  const [progress, setProgress] = useState(0);
  const [introReady, setIntroReady] = useState(() => prefersReducedMotion());

  const finishIntro = useCallback(() => setIntroReady(true), []);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setIntroReady(true);
      return;
    }

    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? window.scrollY / height : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <IntroReadyContext.Provider value={introReady}>
      {!introReady ? <IntroOverlay onComplete={finishIntro} /> : null}
      <div
        className="progress"
        style={{ transform: `scaleX(${introReady ? progress : 0})` }}
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
    </IntroReadyContext.Provider>
  );
}
