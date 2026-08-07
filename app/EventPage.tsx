import { AboutSection } from "./components/AboutSection/AboutSection";
import { CatsSection } from "./components/CatsSection/CatsSection";
import { ComeSection } from "./components/ComeSection/ComeSection";
import { ContactSection } from "./components/ContactSection/ContactSection";
import { FaqSection } from "./components/FaqSection/FaqSection";
import { Footer } from "./components/Footer/Footer";
import { HelpSection } from "./components/HelpSection/HelpSection";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ScheduleSection } from "./components/ScheduleSection/ScheduleSection";
import { eventCopy, eventSupplement, type Language } from "./content/eventCopy";

export function EventPage({ language }: { language: Language }) {
  const t = eventCopy[language];
  const supplement = eventSupplement[language];

  return (
    <main data-language={language}>
      <HeroSection language={language} copy={t} />
      <AboutSection copy={t} />
      <CatsSection copy={t} />
      <ScheduleSection copy={t} />
      <HelpSection copy={supplement} />
      <FaqSection copy={supplement} />
      <ComeSection copy={t} />
      <ContactSection copy={t} />
      <Footer copy={t} />
    </main>
  );
}
