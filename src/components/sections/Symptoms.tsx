import { motion } from 'motion/react';
import { AlertCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Symptoms() {
  const { lang } = useLanguage();

  const text = {
    en: {
      label: 'Warning Signs',
      title: 'When Should You Visit a Cardiologist?',
      desc: 'Heart diseases often show early warning signs. Ignoring these symptoms can lead to fatal complications. If you or your loved ones experience any of the following, seek Dr. Wadud\'s consultation immediately.',
      box_title: 'Emergency Rule of Thumb',
      box_desc: 'If chest pain spreads to your arms, back, neck, or jaw, accompanied by sweating and nausea, it could be a heart attack. Seek emergency medical help immediately.',
      s1_title: 'Chest Pain', s1_desc: 'Feeling of pressure, tightness, or pain in the center of your chest.',
      s2_title: 'Shortness of Breath', s2_desc: 'Difficulty breathing or catching your breath, especially during exertion.',
      s3_title: 'Palpitations', s3_desc: 'Feeling like your heart is racing, fluttering, or skipping a beat.',
      s4_title: 'Dizziness', s4_desc: 'Fainting, lightheadedness, or feeling unusually dizzy.',
      s5_title: 'Swollen Legs', s5_desc: 'Noticeable swelling in your legs or ankles due to fluid retention.',
      s6_title: 'Irregular Heartbeat', s6_desc: 'Heart beating too fast, too slow, or with an irregular rhythm.'
    },
    bn: {
      label: 'সতর্কীকরণ লক্ষণ',
      title: 'কখন আপনার কার্ডিওলজিস্ট দেখানো উচিত?',
      desc: 'হৃদরোগ প্রায়ই প্রাথমিক সতর্কতা লক্ষণ দেখায়। এই লক্ষণগুলি উপেক্ষা করলে মারাত্মক জটিলতা দেখা দিতে পারে। আপনি বা আপনার প্রিয়জন নিচের কোনোটি অনুভব করলে, অবিলম্বে ডাঃ ওয়াদুদের পরামর্শ নিন।',
      box_title: 'জরুরি সতর্কবার্তা',
      box_desc: 'বুকের ব্যথা যদি হাত, পিঠ, ঘাড় বা চোয়ালে ছড়িয়ে পড়ে, সাথে ঘাম এবং বমি বমি ভাব থাকে, তবে এটি হার্ট অ্যাটাক হতে পারে। অবিলম্বে জরুরি চিকিৎসা সহায়তা নিন।',
      s1_title: 'বুকের ব্যথা', s1_desc: 'বুকের মাঝখানে চাপ, শক্তভাব বা ব্যথার অনুভূতি।',
      s2_title: 'শ্বাসকষ্ট', s2_desc: 'শ্বাস নিতে কষ্ট হওয়া বা হাঁপিয়ে ওঠা, বিশেষ করে পরিশ্রমে।',
      s3_title: 'বুক ধড়ফড়', s3_desc: 'মনে হওয়া যেন হৃদপিণ্ড দ্রুত ছুটছে বা স্পন্দন এড়িয়ে যাচ্ছে।',
      s4_title: 'মাথা ঘোরা', s4_desc: 'অজ্ঞান হওয়া, হালকা মাথাব্যথা বা অস্বাভাবিক মাথা ঘোরা।',
      s5_title: 'পা ফুলে যাওয়া', s5_desc: 'তরল জমার কারণে আপনার পা বা গোড়ালিতে লক্ষণীয় ফোলাভাব।',
      s6_title: 'অনিয়মিত হৃদস্পন্দন', s6_desc: 'হৃদপিণ্ড খুব দ্রুত, খুব ধীরে বা অনিয়মিত ছন্দে স্পন্দিত হওয়া।'
    }
  };

  const t = text[lang];

  const symptomsList = [
    { title: t.s1_title, desc: t.s1_desc, bg: 'bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400' },
    { title: t.s2_title, desc: t.s2_desc, bg: 'bg-orange-50 dark:bg-orange-950/20 text-orange-700 dark:text-orange-400' },
    { title: t.s3_title, desc: t.s3_desc, bg: 'bg-yellow-50 dark:bg-yellow-950/20 text-yellow-700 dark:text-yellow-400' },
    { title: t.s4_title, desc: t.s4_desc, bg: 'bg-blue-50 dark:bg-blue-950/20 text-blue-700 dark:text-blue-400' },
    { title: t.s5_title, desc: t.s5_desc, bg: 'bg-indigo-50 dark:bg-indigo-950/20 text-indigo-700 dark:text-indigo-400' },
    { title: t.s6_title, desc: t.s6_desc, bg: 'bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400' },
  ];

  return (
    <section id="symptoms" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2">
            <h2 className="text-[10px] font-black text-red-600 uppercase tracking-widest mb-2">{t.label}</h2>
            <h3 className="text-3xl md:text-4xl font-black text-emerald-950 dark:text-emerald-50 mb-6">
              {t.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed">
              {t.desc}
            </p>
            
            <div className="bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 p-6 rounded-r-2xl">
              <h4 className="font-bold text-red-900 dark:text-red-400 flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5" /> {t.box_title}
              </h4>
              <p className="text-sm text-red-800 dark:text-red-300">
                {t.box_desc}
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 w-full">
            <div className="grid sm:grid-cols-2 gap-4">
              {symptomsList.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                  className={`p-5 rounded-2xl glass-card ${item.bg} border-emerald-100 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all shadow-sm hover:shadow-md`}
                >
                  <h4 className="font-bold text-emerald-950 dark:text-emerald-50 mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
