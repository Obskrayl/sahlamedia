const { useState, useEffect } = React;
const { Menu, X, ChevronDown, Star, Users, TrendingUp, Zap, Award, Check, ArrowRight, Send } = lucide;

function SahlaMedia() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Initialize Lucide icons
    lucide.createIcons();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "التسويق الرقمي",
      icon: "trending-up",
      items: ["إدارة صفحات السوشيال ميديا", "بناء استراتيجية تسويق", "إدارة الحملات الإعلانية", "تحليل الأداء والتقارير", "استهداف الجمهور"]
    },
    {
      title: "تعزيز الحسابات",
      icon: "users",
      items: ["نمو طبيعي للمتابعين", "زيادة التفاعل الحقيقي", "باقات شهرية مخصصة", "تحسين الوصول"]
    },
    {
      title: "الحملات الإعلانية",
      icon: "zap",
      items: ["إعلانات فيسبوك وإنستجرام", "إعلانات جوجل", "إعلانات تيك توك", "إدارة الميزانيات"]
    },
    {
      title: "إدارة المحتوى",
      icon: "award",
      items: ["كتابة محتوى تسويقي", "خطة نشر شهرية", "Copywriting احترافي", "تحسين الهوية البصرية"]
    },
    {
      title: "إنشاء المواقع الإلكترونية",
      icon: "globe",
      items: ["تصميم مواقع احترافية", "مواقع شركات ومتاجر", "Landing Pages فعالة", "ربط واتساب وأدوات التواصل", "تحسين محركات البحث SEO"]
    },
    {
      title: "إنشاء التطبيقات",
      icon: "smartphone",
      items: ["تطبيقات Android و iOS", "تطبيقات متاجر إلكترونية", "تصميم واجهات مستخدم UI/UX", "رفع التطبيق على المتاجر", "ربط التطبيق بقواعد البيانات"]
    }
  ];

  const stats = [
    { number: "500+", label: "عميل سعيد" },
    { number: "1000+", label: "حملة ناجحة" },
    { number: "250+", label: "مشروع مكتمل" },
    { number: "99%", label: "رضا العملاء" }
  ];

  const testimonials = [
    { name: "أحمد محمد", text: "خدمة احترافية وزيادة حقيقية في المبيعات. فريق متعاون جداً!", rating: 5 },
    { name: "سارة علي", text: "أفضل شركة تسويق تعاملت معها. النتائج فاقت التوقعات!", rating: 5 },
    { name: "محمود حسن", text: "احترافية عالية وأسعار ممتازة. شكراً Sahla Media!", rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden relative" dir="rtl" style={{fontFamily: 'Tajawal, sans-serif'}}>
      {/* Animated Background - نفس الكود السابق */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950"></div>
        
        <div className="absolute inset-0 opacity-30">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>
        
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-purple-500/20 rotate-45 animate-spin-slow"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 border-2 border-blue-500/20 animate-bounce-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full border-2 border-pink-500/20 animate-pulse-slow"></div>
        
        <div className="orb orb-purple"></div>
        <div className="orb orb-blue"></div>
        <div className="orb orb-pink"></div>
        
        <div className="particles">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${8 + Math.random() * 15}s`
              }}
            ></div>
          ))}
        </div>
        
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(168, 85, 247, 0.4)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" className="animate-grid-flow" />
          </svg>
        </div>
        
        <div className="spotlight"></div>
      </div>

      <style>{`
        .wave {
          position: absolute;
          width: 200%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent);
          animation: wave 15s linear infinite;
        }
        .wave1 { animation-delay: 0s; }
        .wave2 { animation-delay: -5s; opacity: 0.5; }
        .wave3 { animation-delay: -10s; opacity: 0.3; }
        
        @keyframes wave {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(100%) skewX(-15deg); }
        }
        
        .orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.4;
        }
        .orb-purple {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, #a855f7, transparent);
          top: 10%;
          left: 20%;
          animation: float-orb 20s ease-in-out infinite;
        }
        .orb-blue {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, #3b82f6, transparent);
          bottom: 20%;
          right: 15%;
          animation: float-orb 25s ease-in-out infinite reverse;
        }
        .orb-pink {
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, #ec4899, transparent);
          top: 50%;
          left: 50%;
          animation: float-orb 30s ease-in-out infinite;
        }
        
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(100px, -100px) scale(1.2); }
          50% { transform: translate(50px, 80px) scale(0.9); }
          75% { transform: translate(-80px, 50px) scale(1.1); }
        }
        
        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: rgba(168, 85, 247, 0.8);
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.5);
          animation: rise linear infinite;
        }
        
        @keyframes rise {
          0% { bottom: -10px; opacity: 0; transform: translateX(0) scale(1); }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { bottom: 100vh; opacity: 0; transform: translateX(100px) scale(0); }
        }
        
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce-slow { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-30px); } }
        @keyframes pulse-slow { 0%, 100% { transform: scale(1); opacity: 0.3; } 50% { transform: scale(1.2); opacity: 0.5; } }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 6s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
        
        @keyframes grid-flow { 0% { transform: translateY(0) translateX(0); } 100% { transform: translateY(50px) translateX(50px); } }
        .animate-grid-flow { animation: grid-flow 30s linear infinite; }
        
        .spotlight {
          position: absolute;
          top: -50%;
          left: 50%;
          width: 150%;
          height: 150%;
          background: radial-gradient(ellipse at center, rgba(168, 85, 247, 0.15) 0%, transparent 70%);
          transform: translateX(-50%);
          animation: spotlight-move 40s ease-in-out infinite;
        }
        
        @keyframes spotlight-move {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-30%) translateY(-20%); }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                Sahla Media
              </span>
            </div>
            
            <div className="hidden md:flex space-x-reverse space-x-8">
              {[
                { label: 'الرئيسية', id: 'home' },
                { label: 'خدماتنا', id: 'services' },
                { label: 'من نحن', id: 'about' },
                { label: 'تواصل معنا', id: 'contact' }
              ].map((item, idx) => (
                <a key={idx} href={`#${item.id}`} 
                   className="hover:text-purple-400 transition-colors duration-300">
                  {item.label}
                </a>
              ))}
            </div>

            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              <i data-lucide={menuOpen ? "x" : "menu"}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-lg z-40 md:hidden pt-24">
          <div className="flex flex-col items-center space-y-6 text-xl">
            {[
              { label: 'الرئيسية', id: 'home' },
              { label: 'خدماتنا', id: 'services' },
              { label: 'من نحن', id: 'about' },
              { label: 'تواصل معنا', id: 'contact' }
            ].map((item, idx) => (
              <a key={idx} href={`#${item.id}`} 
                 onClick={() => setMenuOpen(false)}
                 className="hover:text-purple-400 transition-colors">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            نجعل علامتك التجارية
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              تتألق في العالم الرقمي
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            نحن متخصصون في التسويق الرقمي وإدارة السوشيال ميديا لنساعدك على الوصول لجمهورك المثالي وتحقيق نتائج حقيقية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center gap-2">
              ابدأ الآن <i data-lucide="arrow-right" className="w-5 h-5"></i>
            </a>
            <a href="#services" className="border-2 border-purple-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-400/10 transition-all duration-300">
              تعرف على خدماتنا
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services - باقي الأقسام بنفس الطريقة */}
      <section id="services" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            خدماتنا <span className="text-purple-400">المتكاملة</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">حلول رقمية شاملة لنمو أعمالك</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 hover:scale-105 transition-all duration-300">
                <div className="text-purple-400 mb-4">
                  <i data-lucide={service.icon} className="w-8 h-8"></i>
                </div>
                <h3 className="text-2xl font-bold mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <i data-lucide="check" className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1"></i>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              { title: "التصوير وصناعة المحتوى", desc: "تصوير منتجات، ريلز، مونتاج احترافي، موشن جرافيك" },
              { title: "الهوية والعلامة التجارية", desc: "تصميم لوجو، هوية بصرية كاملة، Brand Strategy" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300">
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            من <span className="text-purple-400">نحن</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-3xl mx-auto">
            نعمل على مساعدة الأفراد والشركات في بناء حضور قوي وفعّال على الإنترنت
          </p>

          {/* Main Description */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-16">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Sahla Media هي شركة متخصصة في التسويق الرقمي وتصميم وتطوير المواقع الإلكترونية، نعمل على مساعدة الأفراد والشركات في بناء حضور قوي وفعّال على الإنترنت، وتحويل الأفكار إلى مشاريع رقمية ناجحة.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              نؤمن أن النجاح الرقمي لا يعتمد فقط على التصميم الجيد، بل على استراتيجية ذكية، تنفيذ احترافي، ومتابعة مستمرة. لذلك نقدم حلولًا متكاملة تجمع بين الإبداع، التقنية، والتسويق المبني على البيانات.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">رؤيتنا</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                أن نكون من الشركات الرائدة في مجال التسويق الرقمي وإنشاء المواقع، وأن نكون الشريك الموثوق لكل من يسعى للنمو والانتشار أونلاين.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 backdrop-blur-sm rounded-3xl p-8 border border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
              <h3 className="text-3xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">رسالتنا</span>
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                تقديم خدمات رقمية بسيطة، واضحة، وفعّالة تساعد عملاءنا على تحقيق أهدافهم بأفضل جودة وأعلى قيمة.
              </p>
            </div>
          </div>

          {/* Why Us */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              لماذا <span className="text-purple-400">Sahla Media</span>؟
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "target", title: "حلول مخصصة", desc: "تناسب نشاطك وميزانيتك" },
                { icon: "palette", title: "تصميم عصري", desc: "تجربة مستخدم مميزة" },
                { icon: "check-circle", title: "تنفيذ دقيق", desc: "التزام بالمواعيد" },
                { icon: "headphones", title: "دعم فني", desc: "متابعة بعد التسليم" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 text-center">
                  <div className="text-purple-400 mb-4 flex justify-center">
                    <i data-lucide={item.icon} className="w-8 h-8"></i>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">قيمنا</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['الاحترافية', 'البساطة', 'الشفافية', 'الإبداع', 'التطوير المستمر'].map((value, idx) => (
                <div key={idx} className="bg-gradient-to-r from-purple-600/30 to-blue-600/30 px-6 py-3 rounded-full border border-purple-400/50 hover:border-purple-400 transition-all hover:scale-105">
                  {value}
                </div>
              ))}
            </div>
          </div>

          {/* Goal */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-purple-400/30 text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">هدفنا الأساسي</h3>
            <p className="text-xl text-gray-300">
              نتيجة حقيقية لعميلنا
            </p>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <h3 className="text-3xl font-bold mb-6">
              جاهزون لمساعدتك في تطوير مشروعك الرقمي؟
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              دعنا نبدأ رحلتك الرقمية مع Sahla Media
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center gap-2">
                ابدأ معنا الآن <i data-lucide="arrow-right" className="w-5 h-5"></i>
              </a>
              <a href="https://wa.me/201553577070" target="_blank" rel="noopener noreferrer" className="border-2 border-green-400 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-400/10 transition-all duration-300 inline-flex items-center justify-center gap-2">
                واتساب <i data-lucide="phone" className="w-5 h-5"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 relative z-10 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            آراء <span className="text-purple-400">عملائنا</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <i key={i} data-lucide="star" className="w-5 h-5 fill-yellow-400 text-yellow-400"></i>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{test.text}</p>
                <div className="font-semibold text-purple-400">{test.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            ابدأ مشروعك <span className="text-purple-400">معنا</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg">نحن هنا لمساعدتك على النجاح</p>
          
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="flex flex-col items-center justify-center py-10">
              <a href="https://wa.me/201553577070" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-6 hover:scale-105 transition-transform duration-300">
                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:shadow-green-500/50 transition-all">
                  <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.56.934-2.846 2.318-3.764 3.955C1.7 10.748 1.35 12.749 1.337 14.005c-.013 1.367.340 2.614.82 3.757l.115.423-.456 1.82.524-.167 1.755-.703c1.100.572 2.151.893 3.268.91 1.187.026 2.496-.276 3.655-.822 1.316-.632 2.457-1.463 3.465-2.679-.595-.642-1.146-1.203-1.582-1.657-.503-.54-.981-1.04-1.522-1.367z"/>
                  </svg>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">تواصل معنا عبر واتساب</h3>
                  <p className="text-gray-400">اضغط هنا للمحادثة المباشرة</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950/50 backdrop-blur-sm border-t border-white/10 py-12 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
                  Sahla Media
                </span>
              </h3>
              <p className="text-gray-400 mb-4">نجعل التسويق الرقمي سهلاً وفعالاً</p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/profile.php?id=100063601429379" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-purple-500/20 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://www.instagram.com/sahla.media/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-purple-500/20 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://wa.me/201553577070" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-green-500/20 rounded-full flex items-center justify-center transition-all hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.56.934-2.846 2.318-3.764 3.955C1.7 10.748 1.35 12.749 1.337 14.005c-.013 1.367.340 2.614.82 3.757l.115.423-.456 1.82.524-.167 1.755-.703c1.100.572 2.151.893 3.268.91 1.187.026 2.496-.276 3.655-.822 1.316-.632 2.457-1.463 3.465-2.679-.595-.642-1.146-1.203-1.582-1.657-.503-.54-.981-1.04-1.522-1.367z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">روابط سريعة</h4>
              <div className="space-y-2 text-gray-400">
                <a href="#home" className="block hover:text-purple-400 transition-colors">الرئيسية</a>
                <a href="#services" className="block hover:text-purple-400 transition-colors">الخدمات</a>
                <a href="#contact" className="block hover:text-purple-400 transition-colors">تواصل معنا</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">خدماتنا</h4>
              <div className="space-y-2 text-gray-400">
                <p>التسويق الرقمي</p>
                <p>إدارة السوشيال ميديا</p>
                <p>تصميم المواقع</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-4">تواصل معنا</h4>
              <div className="space-y-3 text-gray-400">
                <a href="mailto:mediasahla@gmail.com" className="block hover:text-purple-400 transition-colors flex items-center gap-2">
                  <i data-lucide="mail" className="w-5 h-5"></i> mediasahla@gmail.com
                </a>
                <a href="https://www.facebook.com/profile.php?id=100063601429379" target="_blank" rel="noopener noreferrer" className="block hover:text-blue-400 transition-colors flex items-center gap-2">
                  <i data-lucide="facebook" className="w-5 h-5"></i> Facebook
                </a>
                <a href="https://wa.me/201553577070" target="_blank" rel="noopener noreferrer" className="block hover:text-green-400 transition-colors flex items-center gap-2">
                  <i data-lucide="phone" className="w-5 h-5"></i> 01553577070
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
              <p>© 2026 Sahla Media. جميع الحقوق محفوظة.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-purple-400 transition-colors">سياسة الخصوصية</a>
                <a href="#" className="hover:text-purple-400 transition-colors">الشروط والأحكام</a>
                <a href="#" className="hover:text-purple-400 transition-colors">سياسة الاسترجاع</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/201553577070" target="_blank" rel="noopener noreferrer" className="fixed bottom-28 left-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Facebook Floating Button */}
      <a href="https://www.facebook.com/profile.php?id=100063601429379" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 left-8 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 z-50">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<SahlaMedia />);

// Initialize Lucide icons after render
setTimeout(() => {
  lucide.createIcons();
}, 100);