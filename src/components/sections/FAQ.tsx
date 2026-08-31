import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from '../../contexts/LanguageContext';

export function FAQ() {
  const { lang } = useLanguage();

  const text = {
    en: {
      label: 'Help Center',
      title: 'Frequently Asked Questions',
      q1: 'Where does Dr. Md. Abdul Wadud see patients in Sherpur?',
      a1: 'Dr. Wadud is available at Roich Medical Hall and Nakib Diagnostic Center, located at Hospital Road, Sherpur.',
      q2: 'What are the consultation days and timings?',
      a2: 'The doctor is available every Thursday from 5:00 PM to 9:00 PM.',
      q3: 'Can I get an ECG done at the chamber?',
      a3: 'Yes, the diagnostic center has facilities for ECG and basic cardiac diagnostics. The doctor will review the reports immediately.',
      q4: 'How can I book an appointment?',
      a4: 'You can book an appointment by calling 01712613826. You can also send a message via WhatsApp to the same number, or fill out the form on this website.',
      q5: 'Does the doctor treat pediatric heart conditions?',
      a5: 'Dr. Wadud is a clinical and interventional cardiologist primarily for adults. For congenital heart defects in small children, a pediatric cardiologist should be consulted.',
      q6: 'What symptoms indicate that I should consult an interventional cardiologist?',
      a6: 'You should consult a cardiologist immediately if you experience chest tightness or severe pain, pain spreading to the arm, neck, or jaw, shortness of breath with mild exertion, sudden palpitations, excessive sweating, or dizziness.'
    },
    bn: {
      label: 'হেল্প সেন্টার',
      title: 'সাধারণ জিজ্ঞাসিত প্রশ্নাবলী',
      q1: 'ডাঃ মোঃ আব্দুল ওয়াদুদ শেরপুরে কোথায় রোগী দেখেন?',
      a1: 'ডাঃ ওয়াদুদ শেরপুরের হাসপাতাল রোডে অবস্থিত রইছ মেডিকেল হল ও নাকিব ডায়াগনস্টিক সেন্টারে বসেন।',
      q2: 'শেরপুরে ডাক্তার কোন দিন ও সময়ে বসেন?',
      a2: 'ডাক্তার প্রতি বৃহস্পতিবার বিকেল ৫:০০ টা থেকে রাত ৯:০০ টা পর্যন্ত বসেন।',
      q3: 'চেম্বারে কি ইসিজি ও ইকো করা যাবে?',
      a3: 'হ্যাঁ, ডায়াগনস্টিক সেন্টারে ইসিজি এবং বেসিক কার্ডিয়াক ডায়াগনস্টিক সুবিধা রয়েছে। ডাক্তার সাথে সাথেই রিপোর্টগুলো দেখবেন।',
      q4: 'আমি কিভাবে অ্যাপয়েন্টমেন্ট বুক করতে পারি?',
      a4: 'আপনি 01712613826 নম্বরে কল করে অ্যাপয়েন্টমেন্ট বুক করতে পারেন। আপনি একই নম্বরে হোয়াটসঅ্যাপের মাধ্যমেও মেসেজ পাঠাতে পারেন, অথবা এই ওয়েবসাইটের ফর্মটি পূরণ করে রাখতে পারেন।',
      q5: 'ডাক্তার কি শিশুদের হৃদরোগের চিকিৎসা করেন?',
      a5: 'ডাঃ ওয়াদুদ একজন ক্লিনিক্যাল ও ইন্টারভেনশনাল কার্ডিওলজিস্ট। ছোট শিশুদের হৃদরোগের জন্য পরামর্শ প্রদান করে থাকেন।',
      q6: 'কী কী লক্ষণ দেখলে ইন্টারভেনশনাল কার্ডিওলোজিস্টের পরামর্শ নেওয়া উচিত?',
      a6: 'বুকে চাপ বা তীব্র ব্যথা, বাহু, ঘাড় বা চোয়ালে ব্যথা ছড়িয়ে পড়া, সামান্য হাঁটাহাঁটিতে শ্বাসকষ্ট, হঠাৎ বুক ধড়ফড় করা, অতিরিক্ত ঘাম এবং মাথা ঘোরার মতো সমস্যা দেখা দিলে দ্রুত হৃদরোগ বিশেষজ্ঞের কাছে যেতে হবে।'
    }
  };

  const t = text[lang];

  const faqs = [
    { q: t.q1, a: t.a1 },
    { q: t.q2, a: t.a2 },
    { q: t.q3, a: t.a3 },
    { q: t.q4, a: t.a4 },
    { q: t.q5, a: t.a5 },
    { q: t.q6, a: t.a6 },
  ];

  return (
    <section id="faq" className="py-12 md:py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-8 md:mb-12">
          <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">{t.label}</div>
          <h2 className="text-3xl md:text-4xl font-black text-emerald-950 dark:text-emerald-50 mb-4">
            {t.title}
          </h2>
          <div className="w-20 h-1 bg-emerald-600 rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="glass-card border-emerald-100 dark:border-emerald-900/30 rounded-2xl px-4 md:px-6 data-[state=open]:shadow-md transition-all mb-3 md:mb-4">
                <AccordionTrigger className="text-left font-bold text-emerald-950 dark:text-emerald-100 hover:no-underline py-4 md:py-5 text-base md:text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 dark:text-slate-400 pb-5 leading-relaxed text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
