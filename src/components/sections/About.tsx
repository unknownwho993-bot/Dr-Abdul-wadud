import { motion } from 'motion/react';
import { Award, BookOpen, Heart, Stethoscope } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function About() {
  const { lang } = useLanguage();

  const text = {
    en: {
      label: 'About The Doctor',
      desc: 'Dr. Md. Abdul Wadud is a highly reputed Clinical & Interventional Cardiologist currently serving at the prestigious National Heart Institute & Hospital, Dhaka. He completed his specialized training in cardiovascular diseases from Bangladesh Medical University (Former PG Hospital), Dhaka. With his vast clinical experience, he brings world-class heart care to the people of Sherpur.',
      q1Title: 'MBBS (Dhaka)',
      q1Desc: 'Bachelor of Medicine, Bachelor of Surgery',
      q2Title: 'BCS (Health)',
      q2Desc: 'Bangladesh Civil Service Health Cadre',
      q3Title: 'MD (Cardiology)',
      q3Desc: 'Doctor of Medicine in Cardiology',
      q4Title: 'Clinical & Interventional',
      q4Desc: 'Expertise in Advanced Heart Treatments'
    },
    bn: {
      label: 'ডাক্তার সম্পর্কে',
      desc: 'ডাঃ মোঃ আব্দুল ওয়াদুদ একজন স্বনামধন্য ক্লিনিক্যাল এবং ইন্টারভেনশনাল কার্ডিওলজিস্ট, যিনি বর্তমানে ঢাকার স্বনামধন্য জাতীয় হৃদরোগ ইনস্টিটিউট ও হাসপাতালে কর্মরত আছেন। তিনি বাংলাদেশ মেডিকেল ইউনিভার্সিটি (সাবেক পিজি হাসপাতাল), ঢাকা থেকে হৃদরোগে তার বিশেষ প্রশিক্ষণ সম্পন্ন করেছেন। তার বিশাল ক্লিনিক্যাল অভিজ্ঞতা নিয়ে তিনি শেরপুরের মানুষের জন্য বিশ্বমানের হৃদরোগ চিকিৎসা নিয়ে এসেছেন।',
      q1Title: 'এমবিবিএস (ঢাকা)',
      q1Desc: 'ব্যাচেলর অব মেডিসিন, ব্যাচেলর অব সার্জারি',
      q2Title: 'বিসিএস (স্বাস্থ্য)',
      q2Desc: 'বাংলাদেশ সিভিল সার্ভিস হেলথ ক্যাডার',
      q3Title: 'এমডি (কার্ডিওলজি)',
      q3Desc: 'ডক্টর অফ মেডিসিন ইন কার্ডিওলজি',
      q4Title: 'ক্লিনিক্যাল ও ইন্টারভেনশনাল',
      q4Desc: 'উন্নত হৃদরোগ চিকিৎসায় বিশেষজ্ঞ'
    }
  };

  const t = text[lang];

  const highlights = [
    { icon: BookOpen, title: t.q1Title, desc: t.q1Desc },
    { icon: Award, title: t.q2Title, desc: t.q2Desc },
    { icon: Heart, title: t.q3Title, desc: t.q3Desc },
    { icon: Stethoscope, title: t.q4Title, desc: t.q4Desc },
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">{t.label}</h2>
          <h3 className="text-3xl md:text-4xl font-black text-emerald-950 dark:text-emerald-50 mb-4">
            {lang === 'bn' ? 'ডাঃ মোঃ আব্দুল ওয়াদুদ' : 'Dr. Md. Abdul Wadud'}
          </h3>
          <div className="w-20 h-1 bg-emerald-600 rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-300 max-w-3xl text-lg leading-relaxed">
            {lang === 'bn' ? (
              <>
                ডাঃ মোঃ আব্দুল ওয়াদুদ একজন স্বনামধন্য <strong className="text-emerald-950 dark:text-emerald-100">ক্লিনিক্যাল এবং ইন্টারভেনশনাল কার্ডিওলজিস্ট</strong>, যিনি বর্তমানে ঢাকার স্বনামধন্য <strong className="text-emerald-950 dark:text-emerald-100">জাতীয় হৃদরোগ ইনস্টিটিউট ও হাসপাতালে</strong> কর্মরত আছেন। তিনি বাংলাদেশ মেডিকেল ইউনিভার্সিটি (সাবেক পিজি হাসপাতাল), ঢাকা থেকে হৃদরোগে তার বিশেষ প্রশিক্ষণ সম্পন্ন করেছেন। তার বিশাল ক্লিনিক্যাল অভিজ্ঞতা নিয়ে তিনি শেরপুরের মানুষের জন্য বিশ্বমানের হৃদরোগ চিকিৎসা নিয়ে এসেছেন।
              </>
            ) : (
              <>
                Dr. Md. Abdul Wadud is a highly reputed <strong className="text-emerald-950 dark:text-emerald-100">Clinical & Interventional Cardiologist</strong> currently serving at the prestigious <strong className="text-emerald-950 dark:text-emerald-100">National Heart Institute & Hospital, Dhaka</strong>. He completed his specialized training in cardiovascular diseases from Bangladesh Medical University (Former PG Hospital), Dhaka. With his vast clinical experience, he brings world-class heart care to the people of Sherpur.
              </>
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card p-6 rounded-2xl flex flex-col items-center text-center shadow-sm group"
            >
              <div className="w-12 h-12 mx-auto rounded-full emerald-gradient text-white flex items-center justify-center mb-4 group-hover:-translate-y-1 transition-transform">
                <item.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1">{item.title}</h4>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 font-bold uppercase tracking-wider">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
