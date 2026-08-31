import { HeartPulse, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function Footer() {
  const { lang } = useLanguage();

  const text = {
    en: {
      name: 'Dr. Md. Abdul Wadud',
      spec: 'Clinical & Interventional Cardiologist',
      desc: 'Dedicated to providing world-class cardiovascular care in Sherpur. Your heart health is our priority.',
      links: 'Quick Links',
      l1: 'Home', l2: 'About Doctor', l3: 'Treatments', l4: 'FAQ',
      services: 'Services',
      s1: 'Heart Check-up', s2: 'ECG Review', s3: 'High Blood Pressure', s4: 'Heart Attack Risk',
      contact: 'Contact Details',
      address: 'Roich Medical Hall & Nakib Diagnostic Center, Hospital Road, Sherpur',
      rights: 'Dr. Md. Abdul Wadud. All rights reserved.',
      privacy: 'Privacy Policy', terms: 'Terms of Service'
    },
    bn: {
      name: 'ডাঃ মোঃ আব্দুল ওয়াদুদ',
      spec: 'ক্লিনিক্যাল ও ইন্টারভেনশনাল কার্ডিওলজিস্ট',
      desc: 'শেরপুরে বিশ্বমানের কার্ডিওভাসকুলার যত্ন প্রদানের জন্য নিবেদিত। আপনার হৃদরোগের স্বাস্থ্য আমাদের অগ্রাধিকার।',
      links: 'গুরুত্বপূর্ণ লিংক',
      l1: 'হোম', l2: 'পরিচিতি', l3: 'সেবাসমূহ', l4: 'প্রশ্নাবলী',
      services: 'চিকিৎসাসমূহ',
      s1: 'হার্ট চেকআপ', s2: 'ইসিজি পর্যালোচনা', s3: 'উচ্চ রক্তচাপ', s4: 'হার্ট অ্যাটাক ঝুঁকি',
      contact: 'যোগাযোগের ঠিকানা',
      address: 'রইছ মেডিকেল হল এবং নাকিব ডায়াগনস্টিক সেন্টার, হাসপাতাল রোড, শেরপুর',
      rights: 'ডাঃ মোঃ আব্দুল ওয়াদুদ। সর্বস্বত্ব সংরক্ষিত।',
      privacy: 'গোপনীয়তা নীতি', terms: 'পরিষেবার শর্তাবলী'
    }
  };

  const t = text[lang];

  return (
    <footer className="bg-emerald-950 text-slate-300 py-12 md:py-16 shrink-0">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 text-emerald-400">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-white uppercase tracking-tight">{t.name}</h3>
                <p className="text-xs text-emerald-400 font-medium">{t.spec}</p>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              {t.desc}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t.links}</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">{t.l1}</a></li>
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">{t.l2}</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">{t.l3}</a></li>
              <li><a href="#faq" className="hover:text-emerald-400 transition-colors">{t.l4}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t.services}</h4>
            <ul className="space-y-3">
              <li>{t.s1}</li>
              <li>{t.s2}</li>
              <li>{t.s3}</li>
              <li>{t.s4}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">{t.contact}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 group-hover:text-emerald-400 transition-colors" />
                <a href="https://maps.app.goo.gl/tnqBsxhRwDfvWeW29" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">{t.address}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href="tel:01712613826" className="text-sm hover:text-white transition-colors">01712613826</a>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {t.rights}
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
