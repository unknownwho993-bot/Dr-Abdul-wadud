import { useState } from 'react';
import { Activity, Calculator } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useLanguage } from '../../contexts/LanguageContext';

export function Calculators() {
  const { lang } = useLanguage();
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const text = {
    en: {
      label: 'Health Tools',
      title: 'Check Your Heart Risk (BMI)',
      desc: 'Body Mass Index (BMI) is a simple index of weight-for-height that is commonly used to classify overweight and obesity. A high BMI is strongly associated with cardiovascular diseases, hypertension, and diabetes.',
      u18: 'Under 18.5: Underweight',
      n18: '18.5 – 24.9: Normal Weight',
      o25: '25.0 – 29.9: Overweight',
      ob30: '30.0 and Above: Obesity',
      calcTitle: 'BMI Calculator',
      weightLbl: 'Weight (kg)',
      heightLbl: 'Height (cm)',
      calcBtn: 'Calculate BMI',
      resTxt: 'Your BMI is',
      resU: 'Underweight (At Risk)',
      resN: 'Normal (Healthy)',
      resO: 'Overweight (Increased Risk)',
      resOb: 'Obese (High Cardiac Risk)'
    },
    bn: {
      label: 'হেলথ টুলস',
      title: 'আপনার হৃদরোগের ঝুঁকি পরীক্ষা করুন (BMI)',
      desc: 'বডি মাস ইনডেক্স (BMI) হলো উচ্চতা এবং ওজনের একটি সূচক যা অতিরিক্ত ওজন এবং স্থূলতা শ্রেণীবদ্ধ করতে ব্যবহৃত হয়। উচ্চ BMI হৃদরোগ, উচ্চ রক্তচাপ এবং ডায়াবেটিসের ঝুঁকির সাথে দৃঢ়ভাবে সম্পর্কিত।',
      u18: '১৮.৫ এর নিচে: ওজন কম',
      n18: '১৮.৫ – ২৪.৯: স্বাভাবিক ওজন',
      o25: '২৫.০ – ২৯.৯: অতিরিক্ত ওজন',
      ob30: '৩০.০ এবং এর বেশি: স্থূলতা',
      calcTitle: 'বিএমআই ক্যালকুলেটর',
      weightLbl: 'ওজন (কেজি)',
      heightLbl: 'উচ্চতা (সেমি)',
      calcBtn: 'BMI হিসাব করুন',
      resTxt: 'আপনার BMI হলো',
      resU: 'কম ওজন (ঝুঁকিপূর্ণ)',
      resN: 'স্বাভাবিক (সুস্থ)',
      resO: 'অতিরিক্ত ওজন (ঝুঁকি বেশি)',
      resOb: 'স্থূলতা (হৃদরোগের উচ্চ ঝুঁকি)'
    }
  };

  const t = text[lang];

  const calculateBMI = (e: import("react").FormEvent) => {
    e.preventDefault();
    if (weight && height) {
      const hInMeters = parseFloat(height) / 100;
      const calcBmi = parseFloat(weight) / (hInMeters * hInMeters);
      setBmi(parseFloat(calcBmi.toFixed(1)));
    }
  };

  const getBmiStatus = (val: number) => {
    if (val < 18.5) return { label: t.resU, color: 'text-blue-500' };
    if (val >= 18.5 && val < 25) return { label: t.resN, color: 'text-emerald-500' };
    if (val >= 25 && val < 30) return { label: t.resO, color: 'text-orange-500' };
    return { label: t.resOb, color: 'text-red-500' };
  };

  return (
    <section className="py-20 bg-emerald-50/50 dark:bg-emerald-950/10 border-y border-emerald-100 dark:border-emerald-900/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-400 font-bold uppercase tracking-widest text-[10px] mb-4">
              <Activity className="w-4 h-4" /> {t.label}
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-emerald-950 dark:text-emerald-50 mb-6">
              {t.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-6 leading-relaxed">
              {t.desc}
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div> {t.u18}
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-bold">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div> {t.n18}
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-3 h-3 rounded-full bg-orange-500"></div> {t.o25}
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <div className="w-3 h-3 rounded-full bg-red-500"></div> {t.ob30}
              </li>
            </ul>
          </div>
          
          <div className="md:w-1/2 w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl shadow-emerald-900/5 border border-emerald-50 dark:border-slate-800">
            <h4 className="text-xl font-black text-emerald-950 dark:text-emerald-50 mb-6 flex items-center gap-2">
              <Calculator className="w-5 h-5 text-primary" /> {t.calcTitle}
            </h4>
            <form onSubmit={calculateBMI} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="weight">{t.weightLbl}</Label>
                <Input 
                  id="weight" 
                  type="number" 
                  placeholder="e.g. 70" 
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">{t.heightLbl}</Label>
                <Input 
                  id="height" 
                  type="number" 
                  placeholder="e.g. 170" 
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 font-bold text-white shadow-lg shadow-emerald-200 mt-2">
                {t.calcBtn}
              </Button>
            </form>
            
            {bmi !== null && (
              <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center animate-in fade-in zoom-in duration-300">
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-1">{t.resTxt}</p>
                <p className="text-4xl font-black text-slate-900 dark:text-white mb-2">{bmi}</p>
                <p className={`font-bold ${getBmiStatus(bmi).color}`}>
                  {getBmiStatus(bmi).label}
                </p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
