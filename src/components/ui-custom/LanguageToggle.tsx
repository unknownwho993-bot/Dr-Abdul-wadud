import { useLanguage } from '../../contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
      className="rounded-full border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 font-bold px-3 shadow-sm hover:bg-emerald-50 dark:hover:bg-emerald-900/30"
    >
      <Languages className="w-4 h-4 mr-1" />
      {lang === 'en' ? 'বাংলা' : 'EN'}
    </Button>
  );
}
