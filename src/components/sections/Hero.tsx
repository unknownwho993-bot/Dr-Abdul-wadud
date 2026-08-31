import { motion } from 'motion/react';
import { MapPin, Phone, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '../../contexts/LanguageContext';

export function Hero() {
  const { lang } = useLanguage();

  const text = {
    en: {
      badge: 'Now Available in Sherpur',
      title1: 'Expert Heart Care by',
      name: 'Dr. Md. Abdul Wadud',
      subtitle: 'Regular Heart Specialist from National Heart Institute & Hospital, Dhaka.',
      quals: 'MBBS (Dhaka), BCS (Health), MD (Cardiology)\nClinical & Interventional Cardiologist',
      book: 'Book Appointment',
      call: 'Call Now',
      trusted: 'Trusted by 1000+ Patients',
      chamber: 'Roich Medical Hall',
      address: 'Hospital Road, Sherpur',
      time: 'Every Thursday (5 PM - 9 PM)',
      nhi: 'National Heart Institute',
      dhakaSpec: 'Dhaka Specialist'
    },
    bn: {
      badge: 'এখন শেরপুরে নিয়মিত রোগী দেখছেন',
      title1: 'বিশেষজ্ঞ হৃদরোগ চিকিৎসক', 
      name: 'ডাঃ মোঃ আব্দুল ওয়াদুদ',
      subtitle: 'জাতীয় হৃদরোগ ইনস্টিটিউট ও হাসপাতাল, ঢাকা এর নিয়মিত হৃদরোগ বিশেষজ্ঞ।',
      quals: 'এমবিবিএস (ঢাকা), বিসিএস (স্বাস্থ্য), এমডি (কার্ডিওলজি)\nক্লিনিক্যাল ও ইন্টারভেনশনাল কার্ডিওলজিস্ট',
      book: 'অ্যাপয়েন্টমেন্ট নিন',
      call: 'কল করুন',
      trusted: '১০০০+ রোগীর আস্থার প্রতীক',
      chamber: 'রইছ মেডিকেল হল',
      address: 'হাসপাতাল রোড, শেরপুর',
      time: 'প্রতি বৃহস্পতিবার (বিকাল ৫টা - রাত ৯টা)',
      nhi: 'জাতীয় হৃদরোগ ইনস্টিটিউট ও হাসপাতাল',
      dhakaSpec: 'হৃদরোগ বিশেষজ্ঞ'
    }
  };

  const t = text[lang];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="medical-grid"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="doctor-badge w-fit mb-2">
              {t.badge}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-emerald-950 dark:text-emerald-50">
              {t.title1} <span className="text-primary block mt-2">{t.name}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-xl font-medium">
              {t.subtitle}
            </p>
            
            <div className="bg-white dark:bg-slate-900 border-l-4 border-primary p-4 rounded-r-xl shadow-sm max-w-xl">
              <p className="font-bold text-slate-800 dark:text-slate-100 whitespace-pre-line leading-relaxed">
                {t.quals}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="rounded-full text-base font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-200">
                <a href="#appointment">
                  <Calendar className="mr-2 h-5 w-5" /> {t.book}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base font-bold border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50">
                <a href="tel:01712613826">
                  <Phone className="mr-2 h-5 w-5" /> {t.call}
                </a>
              </Button>
            </div>
            
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white dark:border-slate-950 bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                {t.trusted}
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto"
          >
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800">
              {/* Fallback image if real doctor image is missing */}
              <img 
                src="https://res.cloudinary.com/dcnqydnz6/image/upload/v1768733059/submissions/qm2hwhcrvqau3c2yvjut.png" 
                alt="Dr. Md. Abdul Wadud" 
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 to-transparent flex flex-col justify-end p-6">
                 <div className="glass-card rounded-2xl p-4 flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-xl shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-700 dark:text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white">{t.chamber}</h3>
                      <p className="text-sm text-slate-700 dark:text-slate-300 mt-1">{t.address}</p>
                      <p className="text-sm font-bold text-primary mt-1">{t.time}</p>
                    </div>
                 </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
