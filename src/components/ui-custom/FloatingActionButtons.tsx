import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function FloatingActionButtons() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {showTopBtn && (
        <Button
          size="icon"
          onClick={scrollToTop}
          className="rounded-full bg-slate-800 hover:bg-slate-700 text-white shadow-lg animate-in slide-in-from-bottom-2 fade-in"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}
      
      <a
        href="tel:01712613826"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-emerald-600 transition-colors"
        aria-label="Call Now"
      >
        <Phone className="h-5 w-5" />
      </a>
      
      <a
        href="https://wa.me/8801712613826"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#22c15e] transition-colors"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}