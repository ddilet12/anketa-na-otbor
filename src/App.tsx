import { motion } from "motion/react";
import { 
  Instagram, 
  ArrowRight, 
  CheckCircle2, 
  Play, 
  MessageCircle, 
  TrendingUp, 
  Users, 
  Award,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "./lib/utils";

// --- Components ---

const Button = ({ 
  children, 
  className, 
  variant = 'primary', 
  onClick,
  type = 'button'
}: { 
  children: React.ReactNode, 
  className?: string, 
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost',
  onClick?: () => void,
  type?: 'button' | 'submit'
}) => {
  const variants = {
    primary: "bg-red-600 text-white hover:bg-red-700 shadow-lg shadow-red-900/20 uppercase tracking-widest font-black italic",
    secondary: "bg-zinc-800 text-white hover:bg-zinc-700 uppercase tracking-widest font-black italic",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-600/10 uppercase tracking-widest font-black italic",
    ghost: "text-zinc-500 hover:text-white uppercase tracking-widest font-black italic",
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={cn(
        "px-8 py-5 rounded-none font-medium transition-all flex items-center justify-center gap-2 text-base md:text-lg",
        variants[variant],
        className
      )}
    >
      {children}
    </motion.button>
  );
};

const SectionHeader = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 text-center px-4">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-6xl font-black italic uppercase tracking-tighter mb-4 leading-none"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto uppercase tracking-wide font-bold"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- Sections ---

const Hero = ({ onCtaClick }: { onCtaClick: () => void }) => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-end md:justify-center pt-24 pb-20 px-6 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://storage.googleapis.com/test-media-humanitarian/attachments/8f773b06-444b-4fc6-819a-9c7ce422896c.png" 
          alt="Bakhytzhan Keldi" 
          className="w-full h-full object-cover object-top md:object-center grayscale brightness-[0.4] scale-110 md:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col items-center md:items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 flex items-center gap-3 bg-red-600 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em]"
        >
          <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span>КЕЛЕ СІЗГЕ КЕЗЕК КЕЛДІ</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-8xl font-black text-center md:text-left tracking-tighter mb-8 leading-[0.85] uppercase italic"
        >
          ОҚЫРМАН ЖИНАУДЫ <br /> 
          <span className="text-red-600">ТОҚТАТ.</span> <br /> 
          САУДА ЖАСАУДЫ <br />
          <span className="bg-white text-black px-4 inline-block mt-2 not-italic">БАСТА.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-300 text-lg md:text-2xl text-center md:text-left max-w-xl mb-12 font-medium leading-tight"
        >
          Рилс арқылы «өлі» аккаунтты миллиондық сауда жасайтын машинаға айналдырудың авторлық стратегиясы.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="w-full max-w-sm flex flex-col items-center md:items-start"
        >
          <Button onClick={onCtaClick} className="w-full text-xl py-6 rounded-none">
            ОТБОРҒА ӨТІНІШ БЕРУ <ArrowRight size={24} />
          </Button>
          
          <div className="mt-10 grid grid-cols-2 gap-10 border-t border-zinc-800/50 pt-8 w-full">
            <div className="text-left">
              <div className="text-3xl font-black italic tracking-tighter text-white">10.2M ₸</div>
              <div className="text-[10px] uppercase text-zinc-500 font-black tracking-widest leading-none mt-1">6 АЙДА КЕЛГЕН ТАБЫС</div>
            </div>
            <div className="text-left">
              <div className="text-3xl font-black italic tracking-tighter text-white">739+</div>
              <div className="text-[10px] uppercase text-zinc-500 font-black tracking-widest leading-none mt-1">ЖАСАЛҒАН САУДА</div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={32} className="text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
};

const Problem = () => {
  const items = [
    {
      title: "ОҚЫРМАН ЖОҚ",
      desc: "Күнде Рилс салсаң да, охваттарың өспейді. Статикалық контент сенің уақытыңды жеп жатыр."
    },
    {
      title: "САТЫЛЫМ НӨЛ",
      desc: "Просмотр көп, бірақ ешкім сатып алмайды. Бұл тек цифр болып қала береді."
    },
    {
      title: "ЖҮЙЕ ЖОҚТЫҒЫ",
      desc: "Сценарий жазуға 5 сағат кетеді. Рандомды контент сенің энергияңды тауысты."
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#0E0E0E] border-y border-zinc-900">
      <SectionHeader 
        title="Неге Рилстерің жұмыс істемейді?" 
        subtitle="Сені тоқтатып тұрған басты кедергілер"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {items.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="bg-zinc-900/40 p-10 rounded-[32px] border border-zinc-800/50 hover:border-red-600/30 transition-all group"
          >
            <div className="text-red-600 mb-6 font-black italic text-4xl opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
            <h3 className="text-2xl font-black italic uppercase tracking-tighter mb-4">{item.title}</h3>
            <p className="text-zinc-400 leading-snug font-medium text-lg">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const VideoSocialProof = () => {
  return (
    <section className="py-24 px-6 overflow-hidden bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-8 leading-[0.9]"
            >
              Біздің оқушылар <br />
              <span className="text-red-600">1 миллион охватты</span> <br />
              қалай жасайды?
            </motion.h2>
            <p className="text-zinc-400 text-xl mb-10 font-medium leading-tight">
              Рилс — бұл тек видео емес. Бұл дұрыс сценарий және сату психологиясының қосындысы.
            </p>
            <div className="space-y-6">
              {[
                "10,000+ оқырман 2 аптада",
                "Жоғары чекке сату жүйесі",
                "Контентмейкерсіз премиум сапа"
              ].map((text, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={14} className="text-white" />
                  </div>
                  <span className="font-black italic uppercase tracking-wider text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex-1 relative w-full aspect-[9/14] md:h-[700px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative w-full h-full bg-zinc-900 rounded-[50px] border-[12px] border-zinc-800 shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 w-full h-8 flex justify-center items-center px-8 z-10">
                <div className="w-20 h-5 bg-zinc-800 rounded-b-2xl"></div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" 
                alt="Reels Work"
                className="w-full h-full object-cover grayscale brightness-50"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-red-600/90 rounded-full flex items-center justify-center shadow-2xl shadow-red-600/40">
                  <Play size={40} className="text-white fill-white ml-2" />
                </div>
              </div>
              <div className="absolute bottom-10 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                  <p className="text-white font-black italic text-2xl mb-1 uppercase">Бахытжан Келди</p>
                  <p className="text-zinc-400 text-sm font-bold uppercase tracking-widest tracking-widest\">Смотреть разбор (45 сек)</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CourseSteps = () => {
  const steps = [
    { title: "Стратегия", desc: "Сенің нишаңа сай келетін контент план мен позиционирование" },
    { title: "Сценарий", desc: "Вирустық және сататын сценарий жазудың авторлық схемасы" },
    { title: "Түсірілім", desc: "Телефонмен премиум сапалы видео түсіріп, монтаждау" },
    { title: "Монетизация", desc: "Жаңа оқырмандарды клиентке айналдыру және чек көтеру" }
  ];

  return (
    <section className="py-24 px-6 bg-red-600 text-white rounded-[40px] md:rounded-[80px] mx-4 my-10 shadow-huge overflow-hidden relative">
      <div className="absolute top-0 right-0 p-10 opacity-10">
        <TrendingUp size={400} />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <span className="text-white/60 font-black text-sm tracking-widest mb-16 block text-center uppercase">Программа / 04 КЕЗЕҢ</span>
        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex gap-10 border-b border-white/20 pb-16 last:border-0"
            >
              <div className="text-5xl md:text-8xl font-black italic text-white/20 tabular-nums">
                0{i + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter mb-4">
                  {step.title}
                </h3>
                <p className="text-white/80 text-xl md:text-2xl font-medium leading-tight max-w-xl">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SelectionForm = ({ id }: { id: string }) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    console.log("Form Data:", data);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div id={id} className="scroll-mt-24 py-24 px-6 bg-[#0A0A0A]">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto bg-zinc-900 p-16 rounded-none text-center border-t-4 border-red-600 flex flex-col items-center gap-8 shadow-2xl"
        >
          <div className="w-24 h-24 bg-red-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-red-600/40">
            <CheckCircle2 size={48} />
          </div>
          <div>
            <h3 className="text-4xl font-black italic uppercase tracking-tighter mb-4">ӨТІНІШІҢІЗ ҚАБЫЛДАНДЫ!</h3>
            <p className="text-zinc-400 text-lg font-medium max-w-sm mx-auto">
              Саған менеджер емес, Бахытжанның командасынан эксперт хабарласады. Телефонда бол!
            </p>
          </div>
          <Button onClick={() => window.open('https://wa.me/77000000000', '_blank')} className="px-12 w-full">
            WHATSAPP: СВЯЗЬҒА ШЫҒУ <MessageCircle size={20} />
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <section id={id} className="py-24 px-6 scroll-mt-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-red-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-4 py-1.5 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Статус: Қабылдау жүріп жатыр</span>
          </motion.div>
          <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter mb-6 leading-none text-white">
            АНКЕТА <br /> <span className="text-red-600">ОТБОРА</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] font-black uppercase tracking-widest text-zinc-500">
            <div className="flex items-center gap-2">
              <span className="text-white">420+</span> АДАМ ТАПСЫРДЫ
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600">12 МЕСТО</span> ҚАЛДЫ
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-xs font-black italic border border-zinc-800">01</div>
              <p className="text-xs font-black uppercase tracking-widest text-zinc-400">ЖЕКЕ МӘЛІМЕТТЕР</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <input 
                  {...register("fullName", { required: true })}
                  placeholder="АТЫ-ЖӨНІҢІЗ"
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-zinc-800 text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-700 font-black italic text-xl uppercase"
                />
                {errors.fullName && <p className="text-red-600 text-[10px] font-black uppercase italic">Атыңызды жазу міндетті</p>}
              </div>
              <div className="space-y-2">
                <input 
                  {...register("instagram", { required: true })}
                  placeholder="INSTAGRAM @USERNAME"
                  className="w-full px-0 py-4 bg-transparent border-b-2 border-zinc-800 text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-700 font-black italic text-xl uppercase"
                />
              </div>
            </div>

            <div className="space-y-2">
              <input 
                {...register("phone", { required: true })}
                placeholder="TELEPHONE +7 (___) ___"
                className="w-full px-0 py-4 bg-transparent border-b-2 border-zinc-800 text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-700 font-black italic text-xl uppercase"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-8 h-8 bg-zinc-900 rounded-lg flex items-center justify-center text-xs font-black italic border border-zinc-800">02</div>
              <p className="text-xs font-black uppercase tracking-widest text-zinc-400">МАҚСАТ ЖӘНЕ ТӘЖІРИБЕ</p>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">ҚАЗІРГІ СТАТУСЫҢЫЗ ҚАНДАЙ?</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['ЭКСПЕРТ', 'SMM / КОНТЕНТМЕЙКЕР', 'КӘСІПКЕР', 'НӨЛДЕН БАСТАУШЫ'].map((role) => (
                  <label key={role} className="relative group cursor-pointer">
                    <input type="radio" {...register("role")} value={role} className="peer sr-only" />
                    <div className="px-6 py-4 bg-zinc-900 border border-zinc-800 text-zinc-500 peer-checked:border-red-600 peer-checked:text-white transition-all font-black italic text-sm uppercase group-hover:bg-zinc-800">
                      {role}
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-600">НЕГЕ ТӘЖІРИБЕҢІЗ БАР? (REELS, САУДА, Т.Б.)</label>
              <textarea 
                {...register("goal")}
                placeholder="ЖАСАҒАН НӘТИЖЕЛЕРІҢДІ ЖАЗ..."
                rows={3}
                className="w-full px-6 py-4 bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-red-600 transition-all placeholder:text-zinc-700 font-bold text-lg resize-none"
              />
            </div>
          </div>

          <div className="pt-8">
            <Button type="submit" className="w-full py-8 text-2xl rounded-none shadow-2xl shadow-red-600/20">
              {isSubmitting ? "ӨҢДЕЛУДЕ..." : "КЕЗЕККЕ ТҰРУ / ОТПРАВИТЬ"}
            </Button>
            <p className="text-center text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em] mt-8">
              ӨТІНІШТЕР 24 САҒАТ ІШІНДЕ ҚАРАЛАДЫ • 100% ҚАУІПСІЗ
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);
  const questions = [
    { q: "КҮРС ҚАШАН БАСТАЛАДЫ?", a: "Отбор аяқталғаннан кейін 3 күн ішінде топтар жасақталады." },
    { q: "МЕНДЕ ОҚЫРМАН АЗ, БАСТАУҒА БОЛА МА?", a: "Әрине! Біздің стратегия нөлден бастап жинауға бағытталған." },
    { q: "ОФЛАЙН ФОРМАТЫ ҚАЙ ҚАЛАДА?", a: "Офлайн формат тек Алматы қаласында өтеді." },
    { q: "ҚАНДАЙ ТЕХНИКА КЕРЕК?", a: "Тек қана телефоныңыз болса жеткілікті. Арнайы камера керек емес." }
  ];

  return (
    <section className="py-24 px-6 bg-[#0E0E0E]">
      <div className="max-w-2xl mx-auto">
        <SectionHeader title="СҰРАҚТАР / FAQ" />
        <div className="space-y-4">
          {questions.map((item, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">
              <button 
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="font-black italic uppercase tracking-tighter text-lg">{item.q}</span>
                <ChevronDown className={cn("text-zinc-600 transition-transform", open === i && "rotate-180 text-red-600")} size={24} />
              </button>
              {open === i && (
                <div className="px-8 pb-6 text-zinc-400 font-medium text-lg leading-snug">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  const scrollToForm = () => {
    document.getElementById('selection-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-red-600 selection:text-white">
      {/* Sticky Top Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-zinc-900 px-6 py-6 flex items-center justify-between">
        <div className="font-black text-2xl tracking-tighter italic uppercase">B.KELDI</div>
        <button 
          onClick={scrollToForm}
          className="text-xs font-black bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition-all active:scale-95 uppercase tracking-widest italic"
        >
          ЖАЗЫЛУ
        </button>
      </nav>

      {/* Hero Section */}
      <Hero onCtaClick={scrollToForm} />

      {/* Social Proof Bar */}
      <div className="py-8 border-y border-zinc-900 flex overflow-hidden whitespace-nowrap bg-zinc-900/20">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center justify-center shrink-0 pr-24"
        >
          {[
            "1,000,000+ ОХВАТ", "10,000+ ОҚЫРМАН", "ТОП-1 КЕЙСТЕР", 
            "ВЕРТИКАЛ ВИДЕО", "САТУ ЖҮЙЕСІ", "ИНСТАГРАМ МОНЕТИЗАЦИЯ"
          ].map((text, i) => (
            <span key={i} className="text-zinc-800 font-black italic text-4xl tracking-tighter uppercase">{text}</span>
          ))}
        </motion.div>
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center justify-center shrink-0 pr-24"
        >
          {[
            "1,000,000+ ОХВАТ", "10,000+ ОҚЫРМАН", "ТОП-1 КЕЙСТЕР", 
            "ВЕРТИКАЛ ВИДЕО", "САТУ ЖҮЙЕСІ", "ИНСТАГРАМ МОНЕТИЗАЦИЯ"
          ].map((text, i) => (
            <span key={i} className="text-zinc-800 font-black italic text-4xl tracking-tighter uppercase">{text}</span>
          ))}
        </motion.div>
      </div>

      {/* Problems Section */}
      <Problem />

      {/* Video / Value Prop Section */}
      <VideoSocialProof />

      {/* Program Steps */}
      <CourseSteps />

      {/* Form Section */}
      <SelectionForm id="selection-form" />

      {/* FAQ */}
      <FAQSection />

      {/* Footer */}
      <footer className="py-24 px-6 border-t border-zinc-900 bg-[#0E0E0E]">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <div className="font-black text-6xl leading-none tracking-tighter mb-10 italic uppercase">B.KELDI</div>
          <p className="text-zinc-500 mb-10 max-w-sm font-medium text-lg leading-tight">
            Контент арқылы үлкен нәтижеге келу — бұл сәттілік емес, бұл нақты жүйе. Осы жүйеге сені күтемін.
          </p>
          <div className="flex gap-8 mb-16">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-all cursor-pointer group">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </div>
            ))}
          </div>
          <div className="h-2 w-24 bg-red-600 rounded-full mb-6"></div>
          <p className="text-zinc-600 text-xs uppercase font-black tracking-[0.3em]">© 2026 Bakhytzhan Keldi. FORCE & RESULTS.</p>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToForm}
            className="bg-red-600 text-white px-8 py-5 rounded-2xl shadow-2xl shadow-red-900/40 flex items-center gap-4 font-black italic uppercase tracking-widest group"
        >
          <span className="hidden md:inline">ОТБОРҒА ҚАТЫСУ</span>
          <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </div>
  );
}

