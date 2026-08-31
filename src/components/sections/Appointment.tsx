import { Calendar, Clock, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '../../contexts/LanguageContext';

export function Appointment() {
  const { lang } = useLanguage();

  const text = {
    en: {
      title1: 'Book an Appointment',
      desc1: 'Schedule a consultation with Dr. Md. Abdul Wadud. Please fill out the form to request a callback for slot confirmation, or call directly.',
      locTitle: 'Chamber Location',
      locDesc: 'Roich Medical Hall & Nakib Diagnostic Center\nHospital Road, Sherpur',
      timeTitle: 'Visiting Hours',
      timeDesc: 'Every Thursday\n5:00 PM - 9:00 PM',
      contactTitle: 'Emergency Contact',
      formTitle: 'Request a Call Back',
      name: 'Patient Name',
      phone: 'Phone Number',
      date: 'Preferred Date (Thursday)',
      msg: 'Brief Symptoms / Notes',
      btn: 'Request Appointment'
    },
    bn: {
      title1: 'অ্যাপয়েন্টমেন্ট বুক করুন',
      desc1: 'ডাঃ মোঃ আব্দুল ওয়াদুদের সাথে পরামর্শের জন্য সময় নির্ধারণ করুন। আপনার স্লট নিশ্চিত করতে দয়া করে ফর্মটি পূরণ করুন বা সরাসরি কল করুন।',
      locTitle: 'চেম্বারের অবস্থান',
      locDesc: 'রইছ মেডিকেল হল এবং নাকিব ডায়াগনস্টিক সেন্টার\nহাসপাতাল রোড, শেরপুর',
      timeTitle: 'রোগী দেখার সময়',
      timeDesc: 'প্রতি বৃহস্পতিবার\nবিকাল ৫:০০ - রাত ৯:০০',
      contactTitle: 'জরুরি যোগাযোগ',
      formTitle: 'কল ব্যাক রিকোয়েস্ট',
      name: 'রোগীর নাম',
      phone: 'ফোন নম্বর',
      date: 'পছন্দের তারিখ (বৃহস্পতিবার)',
      msg: 'সংক্ষিপ্ত উপসর্গ / নোট',
      btn: 'অ্যাপয়েন্টমেন্ট রিকোয়েস্ট করুন'
    }
  };

  const t = text[lang];

  return (
    <section id="appointment" className="py-20 bg-background relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 bg-emerald-950 rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10 border-8 border-white dark:border-slate-800 relative">
          
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[400px] h-[400px] rounded-full bg-emerald-800/50 blur-3xl" />
          
          <div className="lg:w-1/2 p-8 md:p-12 text-white relative z-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.title1}</h2>
            <p className="text-emerald-100 mb-10 text-lg leading-relaxed">
              {t.desc1}
            </p>
            
            <div className="space-y-6">
              <a href="https://maps.app.goo.gl/tnqBsxhRwDfvWeW29" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <div className="bg-emerald-800/80 p-3 rounded-xl shrink-0 group-hover:bg-emerald-700 transition-colors">
                  <MapPin className="w-6 h-6 text-emerald-300 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h4 className="font-bold text-lg group-hover:text-emerald-300 transition-colors">{t.locTitle}</h4>
                  <p className="text-emerald-100 whitespace-pre-line mt-1 group-hover:text-white transition-colors">{t.locDesc}</p>
                </div>
              </a>
              
              <div className="flex items-start gap-4">
                <div className="bg-emerald-800/80 p-3 rounded-xl shrink-0">
                  <Clock className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t.timeTitle}</h4>
                  <p className="text-emerald-100 whitespace-pre-line mt-1">{t.timeDesc}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-emerald-800/80 p-3 rounded-xl shrink-0">
                  <Phone className="w-6 h-6 text-emerald-300" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{t.contactTitle}</h4>
                  <a href="tel:01712613826" className="text-emerald-100 mt-1 block hover:text-white transition-colors text-xl font-semibold">01712613826</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 p-8 md:p-12 bg-white dark:bg-slate-900 relative z-10 lg:rounded-l-[3rem]">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-black text-emerald-950 dark:text-emerald-50 mb-6">{t.formTitle}</h3>
              
              <div className="space-y-2">
                <Label htmlFor="name">{t.name}</Label>
                <Input id="name" placeholder={lang === 'bn' ? 'আপনার নাম লিখুন' : 'John Doe'} />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">{t.phone}</Label>
                <Input id="phone" type="tel" placeholder="017XXXXXXXX" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="date">{t.date}</Label>
                <Input id="date" type="date" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">{t.msg}</Label>
                <Textarea id="message" placeholder={lang === 'bn' ? 'কী সমস্যা হচ্ছে সংক্ষেপে লিখুন...' : 'Write your concerns here...'} className="min-h-[100px] resize-y" />
              </div>
              
              <Button type="submit" className="w-full font-bold shadow-lg bg-emerald-600 hover:bg-emerald-700 text-white" size="lg">
                <Calendar className="mr-2 h-5 w-5" /> {t.btn}
              </Button>
              <p className="text-xs text-center text-slate-500 mt-4">
                {lang === 'bn' ? '* এটি শুধুমাত্র একটি কল ব্যাক রিকোয়েস্ট। আমাদের টিম আপনাকে কল করে সময় নিশ্চিত করবে।' : '* This is a call back request. Our team will call you to confirm the exact time slot.'}
              </p>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
