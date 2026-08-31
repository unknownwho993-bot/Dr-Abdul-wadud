import { useState, useEffect } from 'react';
import { HeartPulse, Menu, Phone, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '../ui-custom/ThemeToggle';
import { LanguageToggle } from '../ui-custom/LanguageToggle';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = {
    en: [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Symptoms', href: '#symptoms' },
      { name: 'FAQ', href: '#faq' },
    ],
    bn: [
      { name: 'হোম', href: '#home' },
      { name: 'পরিচিতি', href: '#about' },
      { name: 'সেবাসমূহ', href: '#services' },
      { name: 'লক্ষণ', href: '#symptoms' },
      { name: 'প্রশ্নাবলী', href: '#faq' },
    ]
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-b border-emerald-100 dark:border-slate-800 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl emerald-gradient text-white shadow-sm">
              <HeartPulse className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </div>
            <div>
              <h1 className="font-bold text-lg md:text-xl tracking-tight text-emerald-950 dark:text-emerald-50 uppercase">
                {lang === 'bn' ? 'ডাঃ ওয়াদুদ' : 'Dr. Wadud'}
              </h1>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium block -mt-1">
                {lang === 'bn' ? 'হৃদরোগ বিশেষজ্ঞ' : 'Cardiology Specialist'}
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks[lang].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 border-l pl-6 border-slate-200 dark:border-slate-800">
              <LanguageToggle />
              <ThemeToggle />
              <Button asChild className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200 font-bold px-6">
                <a href="#appointment">{lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট' : 'Book Appointment'}</a>
              </Button>
            </div>
          </nav>

          {/* Mobile Nav Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-700 dark:text-slate-200"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-lg py-4 px-4 flex flex-col gap-4 animate-in slide-in-from-top-4">
          <ul className="flex flex-col gap-2">
            {navLinks[lang].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-bold text-slate-700 dark:text-slate-200 hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <a
              href="tel:01712613826"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-primary font-bold"
            >
              <Phone className="w-4 h-4" /> 01712613826
            </a>
            <Button asChild className="w-full rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold" onClick={() => setMobileMenuOpen(false)}>
              <a href="#appointment">{lang === 'bn' ? 'অ্যাপয়েন্টমেন্ট' : 'Book Appointment'}</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
