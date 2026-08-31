import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Symptoms } from './components/sections/Symptoms';
import { Calculators } from './components/sections/Calculators';
import { FAQ } from './components/sections/FAQ';
import { Appointment } from './components/sections/Appointment';
import { FloatingActionButtons } from './components/ui-custom/FloatingActionButtons';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-900">
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <Symptoms />
          <Calculators />
          <Appointment />
          <FAQ />
        </main>
        <Footer />
        <FloatingActionButtons />
      </div>
    </LanguageProvider>
  );
}
