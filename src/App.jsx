import React, { useState } from 'react'

const fontLink = document.createElement('link')
fontLink.href = 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap'
fontLink.rel = 'stylesheet'
document.head.appendChild(fontLink)

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const MailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.72.73.73 0 00.1.25l1.62 3.24a1 1 0 01-.14 1.17L9.25 9.75A14.9 14.9 0 0014.25 14.75l1.37-1.37a1 1 0 011.17-.14l3.24 1.62c.1.05.19.14.25.25a1 1 0 01-.72.94H19a10 10 0 01-10-10z" />
  </svg>
)

const GlobeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const MenuIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
  </svg>
)

const content = {
  EN: {
    greeting: "Hi, I'm",
    name: "Danah Matuq",
    subTitle: "AI Engineer · Machine Learning · Computer Vision",
    aiQuote: "Artificial Intelligence is not just about making machines smarter; it's about solving problems that matter.",
    downloadCv: "Download CV 📄",
    aboutTag: "01 — Profile 🔍",
    aboutSub: "About me",
    aboutText: "An Artificial Intelligence engineer. Passionate about developing intelligent solutions using machine learning, data analysis, and computer vision. Driven by the potential of AI to create positive societal impact, I aim to build systems that continuously learn, adapt, and evolve, with a focus on predictive models and data-driven solutions.",
    expectedGrad: "🎓 Expected Graduation 2027",
    eduTitle: "Education 🏛️",
    eduUni: "Umm Al-Qura University",
    eduDegree: "Bachelor's in Artificial Intelligence",
    workTag: "02 — Selected Work 💻",
    workSub: "Featured Work",
    hackathonTag: "03 — Hackathons 🚀",
    hackathonSub: "Hackathons",
    skillsTag: "04 — Capabilities 🧠",
    skillsSub: "Capabilities",
    certTag: "05 — Courses 🎖️",
    certSub: "Courses",
    contactTag: "06 — Get in touch 📬",
    contactHeading: "I always welcome inquiries and new ideas.",
    closeBtn: "CLOSE",
    tools: ['⚡ PyTorch', '🧩 Python', '👁️ Computer Vision', '🎯 YOLOv10', '🧮 MATLAB', '☕ Java', '🗄️ SQL', '📊 Pandas'],
    menu: [
      { href: '#about', num: '// 01', label: 'Profile' },
      { href: '#projects', num: '// 02', label: 'Projects' },
      { href: '#hackathons', num: '// 03', label: 'Hackathons' },
      { href: '#skills', num: '// 04', label: 'Skills' },
      { href: '#contact', num: '// 05', label: 'Get in Touch' },
    ],
    projects: [
      { num: '1/4', tag: '🔥 Current Mission', title: 'NABEEH | نبيه – Smart System for Predicting Pedestrian Safety in Blind Spots', desc: 'An AI-powered pedestrian safety system designed for Infrastructure-to-Vehicle (I2V) environments. It combines object detection, tracking, trajectory prediction, and risk assessment to provide real-time safety alerts for drivers.', tech: ['YOLOv10', 'DeepSORT', 'Social-LSTM', 'OpenCV'] },
      { num: '2/4', tag: '', title: '🏥 Cardiac Arrest Risk Prediction System', desc: 'A specialized machine learning system that utilizes deep time-series parsing and synthetic medical feature engineering to predict patient cardiac arrest risks 10-30 minutes in advance.', tech: ['PyTorch', 'LSTM', 'SHAP (XAI)', 'Scikit-Learn', 'Pandas', 'Synthetic Data'] },
      { num: '3/4', tag: '', title: '🎨 Discovering Emergent Visual Identities in Static Images', desc: 'An unsupervised learning project that discovers hidden visual patterns in interior design images using feature extraction, dimensionality reduction, and clustering techniques.', tech: ['ResNet50', 'PCA', 'K-Means', 'DBSCAN', 't-SNE', 'Python'] },
      { num: '4/4', tag: '', title: '👁️ Neural Style Transfer', desc: 'Deep Learning project that transforms images into artistic styles using convolutional neural networks and representation learning.', tech: ['PyTorch', 'VGG19', 'Computer Vision'] }
    ],
    hackathons: [
      { title: '☕ CoFind - Asir Tabtaker Hackathon (2025)', date: 'Jul 2025 - Jul 2025', desc: "Developed an AI-powered classification system, achieving 91.2% accuracy in identifying export-quality coffee beans. Reduced agricultural waste and increased farmers profitability.", tools: ['Python', 'Machine Learning', 'Computer Vision (YOLOv11)'] }
    ],
    skills: [
      { cat: '🤖 AI & Machine Learning', items: [{ n: 'Machine Learning', l: '92%' }, { n: 'Deep Learning', l: '88%' }, { n: 'Computer Vision', l: '85%' }, { n: 'Neural Networks', l: '80%' }] },
      { cat: '💻 Programming & Tools', items: [{ n: 'Object-Oriented Programming (OOP)', l: '90%' }, { n: 'Java Development', l: '85%' }] },
      { cat: '📊 Data & Analytics', items: [{ n: 'Data Analysis', l: '90%' }, { n: 'Data Visualization', l: '95%' }] }
    ],
    courses: [
      { t: "📉 Introduction to Optimization in Python", p: "DataCamp - Dec 2024" },
      { t: "🐼 Data Manipulation with pandas", p: "DataCamp - Jan 2025" },
      { t: "🚀 PRE-AI Bootcamp", p: "AI Pioneers Club & PRE HACK - Jul 2025" },
      { t: "🤖 Artificial Intelligence Fundamentals with Capstone Project", p: "IBM SkillsBuild - Jul 2025" },
      { t: "💼 IBM SkillsBuild: EYOUTH Learning Plan", p: "IBM & EYOUTH - Jan 2026" }
    ]
  },
  AR: {
    greeting: 'أهلاً، أنا',
    name: 'دانه معتوق',
    subTitle: "AI Engineer · Machine Learning · Computer Vision",
    aiQuote: 'الذكاء الاصطناعي لا يقتصر فقط على جعل الآلات أكثر ذكاءً؛ بل يتعلق بحل المشكلات المعقدة التي تهم البشرية وتصنع الفارق.',
    downloadCv: "تحميل السيرة الذاتية 📄",
    aboutTag: "01 — الملف الشخصي 🔍",
    aboutSub: "نبذة عني",
    aboutText: 'مهندسة ذكاء اصطناعي، شغوفة بتطوير الحلول الذكية باستخدام تعلم الآلة، تحليل البيانات، والرؤية الحاسوبية. مدفوعة بإمكانيات الذكاء الاصطناعي لخلق تأثير مجتمعي إيجابي، وأهدف إلى بناء أنظمة تتعلم وتتكيف وتتطور باستمرار، مع التركيز على النماذج التنبؤية والحلول القائمة على البيانات.',
    expectedGrad: '🎓 التخرج المتوقع 2027',
    eduTitle: 'التعليم 🏛️',
    eduUni: 'جامعة أم القرى',
    eduDegree: 'بكالوريوس في الذكاء الاصطناعي',
    workTag: "02 — المشاريع المختارة 💻",
    workSub: "المشاريع البارزة",
    hackathonTag: "03 — الهاكاثونات 🚀",
    hackathonSub: 'الهاكاثونات',
    skillsTag: "04 — القدرات 🧠",
    skillsSub: "القدرات",
    certTag: "05 — الدورات 🎖️",
    certSub: "الدورات",
    contactTag: "06 — تواصلي معي 📬",
    contactHeading: 'أرحب دائماً بالاستفسارات والأفكار الجديدة.',
    closeBtn: "إغلاق",
    tools: ['⚡ PyTorch', '🧩 Python', '👁️ Computer Vision', '🎯 YOLOv10', '🧮 MATLAB', '☕ Java', '🗄️ SQL', '📊 Pandas'],
    menu: [
      { href: '#about', num: '// 01', label: 'الملف الشخصي' },
      { href: '#projects', num: '// 02', label: 'المشاريع' },
      { href: '#hackathons', num: '// 03', label: 'الهاكاثونات' },
      { href: '#skills', num: '// 04', label: 'المهارات' },
      { href: '#contact', num: '// 05', label: 'تواصلي معي' },
    ],
    projects: [
      { num: '1/4', tag: '🔥 المهمة الحالية', title: 'نبيه | NABEEH - نظام ذكي للتنبؤ بسلامة المشاة في النقاط العمياء', desc: 'نظام أمان للمشاة مدعوم بالذكاء الاصطناعي مصمم لبيئات البنية التحتية للمركبات (I2V). يجمع بين اكتشاف الأشياء، التتبع، التنبؤ بالمسار، وتقييم المخاطر لتقديم تنبيهات أمان فورية للسائقين.', tech: ['YOLOv10', 'DeepSORT', 'Social-LSTM', 'OpenCV'] },
      { num: '2/4', tag: '', title: '🏥 نظام التنبؤ بمخاطر السكتة القلبية', desc: 'نظام متخصص في تعلم الآلة يستخدم التحليل العميق للسلاسل الزمنية وهندسة الميزات الطبيعية الاصطناعية للتنبؤ بمخاطر السكتة القلبية للمرضى قبل 10-30 دقيقة.', tech: ['PyTorch', 'LSTM', 'SHAP (XAI)', 'Scikit-Learn', 'Pandas', 'Synthetic Data'] },
      { num: '3/4', tag: '', title: '🎨 اكتشاف الهويات البصرية الناشئة في الصور الثابتة', desc: 'مشروع تعلم غير خاضع للإشراف يكتشف الأنماط البصرية المخفية في صور التصميم الداخلي باستخدام استخراج الميزات، تقليل الأبعاد، وتقنيات التجميع.', tech: ['ResNet50', 'PCA', 'K-Means', 'DBSCAN', 't-SNE', 'Python'] },
      { num: '4/4', tag: '', title: '👁️ نقل الأنماط العصبية (Neural Style Transfer)', desc: 'مشروع تعلم عميق يقوم بتحويل الصور إلى أنماط فنية باستخدام الشبكات العصبية الالتفافية والتعلم التمثيلي.', tech: ['PyTorch', 'VGG19', 'Computer Vision'] }
    ],
    hackathons: [
      { title: '☕ CoFind - هاكاثون عسير تبتكر (2025)', date: 'يوليو 2025 - يوليو 2025', desc: 'تطوير نظام تصنيف مدعوم بالذكاء الاصطناعي، وتحقيق دقة بلغت 91.2% في تحديد حبوب البن الصالحة للتصدير. ساهم المشروع في تقليل النفايات الزراعية وزيادة ربحية المزارعين.', tools: ['Python', 'Machine Learning', 'Computer Vision (YOLOv11)'] }
    ],
    skills: [
      { cat: '🤖 الذكاء الاصطناعي وتعلم الآلة', items: [{ n: 'Machine Learning', l: '92%' }, { n: 'Deep Learning', l: '88%' }, { n: 'Computer Vision', l: '85%' }, { n: 'Neural Networks', l: '80%' }] },
      { cat: '💻 البرمجة والأدوات', items: [{ n: 'Object-Oriented Programming (OOP)', l: '90%' }, { n: 'Java Development', l: '85%' }] },
      { cat: '📊 البيانات والتحليل', items: [{ n: 'Data Analysis', l: '90%' }, { n: 'Data Visualization', l: '95%' }] }
    ],
    courses: [
      { t: "📉 Introduction to Optimization in Python", p: "DataCamp - Dec 2024" },
      { t: "🐼 Data Manipulation with pandas", p: "DataCamp - Jan 2025" },
      { t: "🚀 PRE-AI Bootcamp", p: "AI Pioneers Club & PRE HACK - Jul 2025" },
      { t: "🤖 Artificial Intelligence Fundamentals with Capstone Project", p: "IBM SkillsBuild - Jul 2025" },
      { t: "💼 IBM SkillsBuild: EYOUTH Learning Plan", p: "IBM & EYOUTH - Jan 2026" }
    ]
  }
}

export default function App() {
  const [lang, setLang] = useState('EN')
  const [menuOpen, setMenuOpen] = useState(false)
  const current = content[lang]
  const isRtl = lang === 'AR'
  const fontFamily = isRtl
    ? "'IBM Plex Sans Arabic', 'IBM Plex Mono', monospace"
    : "'IBM Plex Mono', monospace"

  return (
    <div
      className="min-h-screen bg-[#0B111E] text-zinc-100 selection:bg-cyan-500 selection:text-black antialiased relative overflow-hidden transition-all duration-500"
      style={{ direction: isRtl ? 'rtl' : 'ltr', fontFamily }}
    >
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px]" />
      </div>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 bg-[#0B111E]/80 backdrop-blur-md border-b border-zinc-800/40">
        <div className="flex items-center gap-3 group cursor-pointer">
          <img src="https://avatars.githubusercontent.com/u/183488293?v=4" alt="Logo" className="w-11 h-11 rounded-xl object-cover shadow-lg border border-zinc-800/80 group-hover:border-cyan-500/50 transition-all duration-300" />
          <div className="px-4 py-1.5 bg-zinc-900/40 border border-zinc-800/60 rounded-full group-hover:border-cyan-500/30 transition-all duration-300 shadow-inner">
            <span className="text-sm md:text-base font-black tracking-wider text-zinc-100 group-hover:text-cyan-400 transition-colors duration-300">{current.name}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <a href="https://1drv.ms/b/c/30548c9fda99acc0/IQBsU9NUgJtvSrubLLO3LQUJATIegTLgUdx9ZyTRyP7P8wc" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-black bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 hover:opacity-90 rounded-lg transition-all shadow-md shadow-cyan-500/10">
            <span>{current.downloadCv}</span>
          </a>
          <button onClick={() => setLang(lang === 'EN' ? 'AR' : 'EN')} className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-zinc-400 hover:text-cyan-400 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 rounded-lg transition-all">
            <GlobeIcon />
            <span>{lang === 'EN' ? 'العربية' : 'English'}</span>
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 text-zinc-400 hover:text-cyan-400 bg-zinc-900/50 hover:bg-zinc-900 border border-zinc-800/80 rounded-lg transition-all">
            <MenuIcon />
          </button>
        </div>
      </nav>

      {/* MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-center p-8">
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-zinc-500 hover:text-cyan-400 text-xs tracking-widest bg-zinc-900/80 px-4 py-2 rounded-xl border border-zinc-800 transition-all">
            [ {current.closeBtn} ]
          </button>
          <div className="max-w-xl w-full mx-auto divide-y divide-zinc-900/80 border-y border-zinc-900/80 mt-12">
            {current.menu.map((item, i) => (
              <a key={i} href={item.href} onClick={() => setMenuOpen(false)} className="flex items-baseline gap-4 py-6 group hover:px-4 transition-all duration-300 hover:bg-zinc-900/20">
                <span className="text-zinc-600 text-xs">{item.num}</span>
                <span className="text-xl font-bold text-zinc-300 group-hover:text-cyan-400 transition-colors">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* HERO */}
      <header className="pt-64 pb-20 px-6 text-center max-w-4xl mx-auto relative space-y-5">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none">
            {current.greeting}{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent font-black">{current.name}</span>
          </h1>
          <p className="text-sm md:text-base tracking-widest text-blue-300/90 font-semibold uppercase">{current.subTitle}</p>
        </div>
        <p className="text-slate-400 max-w-2xl mx-auto font-light text-base md:text-lg italic leading-relaxed pt-2">"{current.aiQuote}"</p>
        <div className="pt-4">
          <a href="https://1drv.ms/b/c/30548c9fda99acc0/IQBsU9NUgJtvSrubLLO3LQUJATIegTLgUdx9ZyTRyP7P8wc" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-slate-900/80 hover:bg-slate-900 text-zinc-200 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/30 rounded-xl text-xs font-bold transition-all shadow-md tracking-wider shadow-cyan-500/5">
            <DownloadIcon />
            <span>{current.downloadCv}</span>
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto pt-4">
          {current.tools.map((tool, i) => (
            <span key={i} className="px-3 py-1.5 text-xs bg-slate-900/60 text-slate-200 rounded-lg border border-slate-800/60 shadow-sm hover:border-cyan-500/30 transition-all">{tool}</span>
          ))}
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-900/60">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest text-cyan-400/80 font-bold">{current.aboutTag}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">{current.aboutSub}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 text-lg text-slate-300 font-light leading-relaxed space-y-4">
            <p>{current.aboutText}</p>
            <div className="inline-block text-xs text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded border border-cyan-500/20 tracking-wider uppercase font-semibold">{current.expectedGrad}</div>
          </div>
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-950/80 border border-slate-800 p-6 rounded-2xl space-y-3 shadow-xl backdrop-blur-sm hover:border-cyan-500/30 transition-all">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-400">{current.eduTitle}</h3>
            <div>
              <h4 className="font-bold text-white text-base">{current.eduUni}</h4>
              <p className="text-sm text-slate-400 mt-1">{current.eduDegree}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-900/60">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-cyan-400/80 font-bold">{current.workTag}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">{current.workSub}</h2>
        </div>
        <div className="divide-y divide-slate-900/80">
          {current.projects.map((project, i) => (
            <div key={i} className="group py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-900/30 px-4 -mx-4 rounded-xl transition-all duration-300">
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="text-xs text-slate-500 group-hover:text-cyan-400 transition-colors">{project.num}</span>
                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                  {project.tag && (
                    <span className="text-cyan-400 tracking-wider uppercase font-semibold text-[10px] bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">{project.tag}</span>
                  )}
                </div>
                <p className="text-slate-400 text-sm font-light leading-relaxed pl-7">{project.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 md:justify-end max-w-xs pl-7 md:pl-0">
                {project.tech.map((tech, j) => (
                  <span key={j} className="px-2 py-0.5 text-[11px] text-slate-400 bg-slate-950/60 border border-slate-800 rounded-md group-hover:border-cyan-500/20 transition-colors">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* HACKATHONS */}
      <section id="hackathons" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-900/60">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest text-cyan-400/80 font-bold">{current.hackathonTag}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">{current.hackathonSub}</h2>
        </div>
        <div className="space-y-6">
          {current.hackathons.map((hack, i) => (
            <div key={i} className="p-8 bg-slate-900/40 border border-slate-800/60 rounded-2xl hover:border-cyan-500/30 transition-all backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-1">{hack.title}</h3>
              <p className="text-xs text-slate-500 mb-4">{hack.date}</p>
              <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">{hack.desc}</p>
              <div className="flex flex-wrap gap-2">
                {hack.tools.map((t, j) => (
                  <span key={j} className="px-2.5 py-1 text-xs text-cyan-400 bg-cyan-500/10 rounded-md border border-cyan-500/20">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-900/60">
        <div className="mb-14">
          <div className="text-xs uppercase tracking-widest text-cyan-400/80 font-bold">{current.skillsTag}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">{current.skillsSub}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {current.skills.map((category, i) => (
            <div key={i} className="space-y-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-slate-800 pb-2">{category.cat}</h3>
              <div className="space-y-4">
                {category.items.map((skill, j) => (
                  <div key={j} className="space-y-2">
                    <div className="flex justify-between text-xs font-medium text-slate-300">
                      <span>{skill.n}</span>
                      <span className="text-cyan-400">{skill.l}</span>
                    </div>
                    <div className="w-full bg-slate-950 border border-slate-800/80 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full rounded-full" style={{ width: skill.l }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COURSES */}
      <section className="py-24 px-6 max-w-5xl mx-auto border-t border-slate-900/60">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-widest text-cyan-400/80 font-bold">{current.certTag}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-1">{current.certSub}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {current.courses.map((course, i) => (
            <div key={i} className="p-5 bg-slate-900/40 border border-slate-800/60 rounded-xl flex flex-col justify-between hover:border-cyan-500/20 transition-all">
              <h4 className="text-sm font-bold text-slate-200 leading-snug">{course.t}</h4>
              <p className="text-xs text-slate-500 mt-3">{course.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-slate-900/60 text-center relative z-30">
        <div className="max-w-xl mx-auto space-y-8 pointer-events-auto">
          <div className="text-xs uppercase tracking-widest text-cyan-400/80 font-bold">{current.contactTag}</div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white leading-snug">{current.contactHeading}</h2>
          <div className="pt-2">
            <a href="mailto:d4n4h8@outlook.sa" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 rounded-xl font-bold hover:opacity-90 transition-all text-sm tracking-wide shadow-xl shadow-cyan-500/10 text-white cursor-pointer relative z-30">
              <MailIcon />
              <span>d4n4h8@outlook.sa</span>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-slate-400 text-sm pt-4 border-t border-slate-800/60 max-w-md mx-auto relative z-30">
            <a href="tel:+966595098760" className="flex items-center gap-2 hover:text-cyan-400 transition-colors py-1 cursor-pointer relative z-30">
              <PhoneIcon />
              <span>+966 59 509 8760</span>
            </a>
            <span className="hidden sm:inline text-slate-800">|</span>
            <a href="https://www.linkedin.com/in/danah-matuq-079515306/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors py-1 cursor-pointer relative z-30">
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
            <span className="hidden sm:inline text-slate-800">|</span>
            <a href="https://github.com/d4n4h8" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-cyan-400 transition-colors py-1 cursor-pointer relative z-30">
              <GithubIcon />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-slate-900/40 bg-slate-950/40 text-center text-xs text-slate-600">
        <div>© 2026 Danah Matuq</div>
      </footer>
    </div>
  )
}