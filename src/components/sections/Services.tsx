import { motion } from 'motion/react';
import { Activity, Heart, Stethoscope, Thermometer, Droplets, Zap, ShieldAlert, Waves } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Services() {
  const { lang } = useLanguage();

  const text = {
    en: {
      label: 'Treatments & Services',
      title: 'Comprehensive Heart Care',
      desc: 'Providing evidence-based, modern medical treatments for all types of cardiovascular diseases with personal care and attention.',
      s1_title: 'Heart Check-up',
      s1_desc: 'Comprehensive screening and diagnosis of cardiovascular conditions.',
      s2_title: 'ECG Review',
      s2_desc: 'Accurate reading and analysis of Electrocardiogram (ECG) reports.',
      s3_title: 'High Blood Pressure',
      s3_desc: 'Management and treatment of hypertension to prevent complications.',
      s4_title: 'Heart Failure',
      s4_desc: 'Advanced care and monitoring for chronic heart failure patients.',
      s5_title: 'Chest Pain',
      s5_desc: 'Immediate evaluation and care for angina and chest discomfort.',
      s6_title: 'Arrhythmia',
      s6_desc: 'Treatment for irregular heartbeats and related rhythm disorders.',
      s7_title: 'Diabetes & Heart Risk',
      s7_desc: 'Specialized care for diabetic patients with high cardiac risk.',
      s8_title: 'Echocardiography (Echo)',
      s8_desc: 'Advanced ultrasound imaging to evaluate heart structure and function.'
    },
    bn: {
      label: 'চিকিৎসা ও সেবাসমূহ',
      title: 'সম্পূর্ণ হৃদরোগ চিকিৎসা',
      desc: 'ব্যক্তিগত যত্ন এবং মনোযোগ সহ সকল ধরণের কার্ডিওভাসকুলার রোগের জন্য প্রমাণ-ভিত্তিক, আধুনিক চিকিৎসা প্রদান।',
      s1_title: 'হার্ট চেকআপ',
      s1_desc: 'কার্ডিওভাসকুলার অবস্থার ব্যাপক স্ক্রীনিং এবং রোগ নির্ণয়।',
      s2_title: 'ইসিজি পর্যালোচনা',
      s2_desc: 'ইলেক্ট্রোকার্ডিওগ্রাম (ECG) রিপোর্টের সঠিক রিডিং এবং বিশ্লেষণ।',
      s3_title: 'উচ্চ রক্তচাপ',
      s3_desc: 'জটিলতা প্রতিরোধের জন্য হাইপারটেনশনের ব্যবস্থাপনা ও চিকিৎসা।',
      s4_title: 'হার্ট ফেইলিউর',
      s4_desc: 'ক্রনিক হার্ট ফেইলিওর রোগীদের জন্য উন্নত যত্ন এবং মনিটরিং।',
      s5_title: 'বুকের ব্যথা',
      s5_desc: 'অ্যাঞ্জাইনা এবং বুকের ব্যথার তাৎক্ষণিক মূল্যায়ন এবং যত্ন।',
      s6_title: 'অনিয়মিত হৃদস্পন্দন',
      s6_desc: 'অনিয়মিত হৃদস্পন্দন এবং সম্পর্কিত রিদম ডিজঅর্ডারের চিকিৎসা।',
      s7_title: 'ডায়াবেটিস ও হৃদরোগের ঝুঁকি',
      s7_desc: 'হৃদরোগের উচ্চ ঝুঁকিসম্পন্ন ডায়াবেটিক রোগীদের বিশেষ যত্ন।',
      s8_title: 'ইকোকার্ডিওগ্রাফি (Echo)',
      s8_desc: 'হৃদপিণ্ডের গঠন এবং কার্যকারিতা মূল্যায়নের জন্য উন্নত আল্ট্রাসাউন্ড ইমেজিং।'
    }
  };

  const t = text[lang];

  const servicesList = [
    { icon: Heart, title: t.s1_title, desc: t.s1_desc },
    { icon: Activity, title: t.s2_title, desc: t.s2_desc },
    { icon: Thermometer, title: t.s3_title, desc: t.s3_desc },
    { icon: Stethoscope, title: t.s4_title, desc: t.s4_desc },
    { icon: ShieldAlert, title: t.s5_title, desc: t.s5_desc },
    { icon: Zap, title: t.s6_title, desc: t.s6_desc },
    { icon: Droplets, title: t.s7_title, desc: t.s7_desc },
    { icon: Waves, title: t.s8_title, desc: t.s8_desc },
  ];

  return (
    <section id="services" className="py-20 bg-emerald-50/50 dark:bg-emerald-950/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-[10px] font-black text-emerald-600 uppercase tracking-widest mb-2">{t.label}</h2>
          <h3 className="text-3xl md:text-4xl font-black text-emerald-950 dark:text-emerald-50 mb-4">
            {t.title}
          </h3>
          <div className="w-20 h-1 bg-emerald-600 rounded-full mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            {t.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl shadow-emerald-900/5 border border-slate-100 dark:border-slate-800 transition-all group hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-full emerald-gradient text-white flex items-center justify-center mb-5 shadow-md">
                <service.icon className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 dark:text-slate-100 text-lg mb-2">{service.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
