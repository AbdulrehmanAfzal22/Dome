import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import react-scroll
import './screen.css'; 
import { FaRobot, FaRocketchat, FaChartLine, FaHeadset, FaBullseye, FaEye, FaCloud, FaMoon, FaGlobe, FaSun } from 'react-icons/fa';

function HeroSection() {
  const [darkMode, setDarkMode] = useState(false); 
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' for English, 'ar' for Arabic

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  const handleMouseEnter = () => setDropdownVisible(true);
  const handleMouseLeave = () => setDropdownVisible(false);

  return (
    <div className={darkMode ? 'dark' : ''} dir={language === 'ar' ? 'rtl' : 'ltr'}> 
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <img 
              alt="DOME Logo" 
              loading="lazy" 
              decoding="async" 
              className="logo" 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DOME_TRANSPARENT%20LOGO_2%20copy%202-EU5RvRk0AFRvEp0iNgoH9y9iWUiChY.png"
            />
            <span className='bold'>DOME</span>
          </div>
          <ul className="nav-links">
            <li><Link to="products" smooth={true} duration={500}>{language === 'en' ? 'Products' : 'المنتجات'}</Link></li>
            <li><Link to="comingSoon" smooth={true} duration={500}>{language === 'en' ? 'Coming Soon' : 'قريباً'}</Link></li>
            <li><Link to="services" smooth={true} duration={500}>{language === 'en' ? 'Services' : 'الخدمات'}</Link></li>
            <li><Link to="aboutUs" smooth={true} duration={500}>{language === 'en' ? 'About Us' : 'معلومات عنا'}</Link></li>
          </ul>
          <div className="language-selector" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <FaGlobe className='theme' /> 
            {dropdownVisible && (
              <div className="dropdown-menu">
                <a onClick={() => setLanguage('en')}>{language === 'en' ? 'English' : 'الإنجليزية'}</a>
                <a onClick={() => setLanguage('ar')}>{language === 'en' ? 'Arabic' : 'العربية'}</a>
              </div>
            )}
            &nbsp;&nbsp; 
            {darkMode ? (
              <FaSun onClick={toggleDarkMode} className="theme-icon theme" />
            ) : (
              <FaMoon onClick={toggleDarkMode} className="theme-icon theme" />
            )}
            &nbsp;&nbsp;
            <button className="get-started-btn">{language === 'en' ? 'Get Started' : 'ابدأ الآن'}</button>
          </div>
        </div>
      </nav>

      <div className="full">
        <div className="hero-section" >
          <div className="content">
            <img 
              alt="DOME Logo" 
              loading="lazy" 
              decoding="async" 
              className="main-pic" 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DOME_TRANSPARENT%20LOGO_2%20copy%202-EU5RvRk0AFRvEp0iNgoH9y9iWUiChY.png"
            />
            <h1 className="main-heading">
              <div className="btn">
                <button className="ai-button">
                  <FaRobot className="ai-icon" />
                  <span>{language === 'en' ? 'AI-Powered Entrepreneurship' : 'الريادة المدعومة بالذكاء الاصطناعي'}</span>
                </button>
              </div>
              {language === 'en' ? 'It starts with ' : 'يبدأ بـ '} <span className="highlighted-text">{language === 'en' ? '(No) Idea.' : '(لا) فكرة.'}</span>
            </h1>
            <h2 className="sub-heading">{language === 'en' ? 'We make sure it doesn\'t end there.' : 'نحن نتأكد من أنه لا ينتهي هناك.'}</h2>
            <p className="description">{language === 'en' ? 'AI tools to launch, grow, and scale your vision.' : 'أدوات الذكاء الاصطناعي لإطلاق وتطوير وتوسيع رؤيتك.'}</p>
            <div className="cta-buttons">
              <button className="cta-btn">{language === 'en' ? 'Start now with SwiftStart' : 'ابدأ الآن مع SwiftStart'}</button>
              <button className="cta-btn1">{language === 'en' ? 'Contact Us' : 'اتصل بنا'}</button>
            </div>
          </div>
        </div>

        <div className="stats-container" id="products">
          <div className="stats-card">
            <div className="icon-container">
              <FaRocketchat style={{ color: 'red' }} />
            </div>
            <div className="text-container">
              <h3 className="stats-heading">10+</h3>
              <p className="stats-subheading">{language === 'en' ? 'Software Products' : 'منتجات البرمجيات'}</p>
            </div>
          </div>
          <div className="stats-card">
            <div className="icon-container">
              <FaChartLine style={{ color: 'red' }} />
            </div>
            <div className="text-container">
              <h3 className="stats-heading">100%</h3>
              <p className="stats-subheading">{language === 'en' ? 'AI-Powered' : 'مدعوم بالذكاء الاصطناعي'}</p>
            </div>
          </div>
          <div className="stats-card">
            <div className="icon-container">
              <FaHeadset style={{ color: 'red' }} />
            </div>
            <div className="text-container">
              <h3 className="stats-heading">24/7</h3>
              <p className="stats-subheading">{language === 'en' ? 'Support' : 'الدعم'}</p>
            </div>
          </div>
        </div>

        <div className="software-section" >
          <h2>{language === 'en' ? 'Software Already Built' : 'البرمجيات المبنية مسبقاً'}</h2>
          <p>{language === 'en' ? 'Production-ready tools to accelerate your entrepreneurial journey' : 'أدوات جاهزة للإنتاج لتسريع رحلتك الريادية'}</p>
          <div className="card-container">
            <div className="card">
              <h3>keyTABs</h3>
              <p>{language === 'en' ? 'Organize and manage your browser tabs with AI-powered intelligence' : 'تنظيم وإدارة علامات التبويب في المتصفح باستخدام الذكاء الاصطناعي'}</p>
              <button>{language === 'en' ? 'Learn More →' : 'اعرف المزيد →'}</button>
              <span className="status">{language === 'en' ? 'Active' : 'نشط'}</span>
            </div>
            <div className="card">
              <h3>Author's Bookshelf</h3>
              <p>{language === 'en' ? 'Curate and showcase your literary collection with style' : 'تنظيم وعرض مجموعتك الأدبية بأناقة'}</p>
              <button>{language === 'en' ? 'Learn More →' : 'اعرف المزيد →'}</button>
              <span className="status">{language === 'en' ? 'Active' : 'نشط'}</span>
            </div>
            <div className="card">
              <h3>AlkeyTAB</h3>
              <p>{language === 'en' ? 'Advanced keyboard shortcuts and productivity enhancement tool' : 'أداة اختصارات لوحة المفاتيح المتقدمة وتحسين الإنتاجية'}</p>
              <button>{language === 'en' ? 'Learn More →' : 'اعرف المزيد →'}</button>
              <span className="status">{language === 'en' ? 'Active' : 'نشط'}</span>
            </div>
          </div>
        </div>

        <div className="next-gen-section" id="comingSoon">
          <button className="coming-soon">{language === 'en' ? 'Coming Soon' : 'قريباً'}</button>
          <h2>{language === 'en' ? 'Next Generation Tools' : 'أدوات الجيل القادم'}</h2>
          <p>{language === 'en' ? 'Innovative solutions launching soon' : 'حلول مبتكرة ستطلق قريباً'}</p>
          <div className="tool-card">
            <h3>NicheIT</h3>
            <p>{language === 'en' ? 'Discover profitable niches with AI-powered market analysis and trend prediction' : 'اكتشف المجالات المربحة باستخدام التحليل المدعوم بالذكاء الاصطناعي والتنبؤ بالاتجاهات'}</p>
            <button className="notify-button">{language === 'en' ? 'Notify Me' : 'أعلمني'}</button>
            <span className="status">{language === 'en' ? 'Soon' : 'قريباً'}</span>
          </div>
        </div>

        <section className="swiftstart-section" id="services">
          <div className="section-header">
            <h2>{language === 'en' ? 'We\'ll Do It For You' : 'سنقوم بذلك من أجلك'}</h2>
            <p>{language === 'en' ? 'From (No) Idea to Launch' : 'من (لا) فكرة إلى إطلاق'}</p>
          </div>
          <div className="swiftstart-card">
            <h3 className="service-title">SwiftSTART</h3>
            <p className="service-description">
              {language === 'en' ? 'Complete startup launch service – we handle everything from ideation to deployment' : 'خدمة إطلاق الشركات الناشئة كاملة – نحن نتولى كل شيء من الفكرة إلى التنفيذ'}
            </p>
            <div className="features-grid">
              <div className="feature-item">
                <span className="red-dot">•</span>
                <div>
                  <strong>{language === 'en' ? 'Idea Generation' : 'توليد الأفكار'}</strong>
                  <br />
                  {language === 'en' ? 'AI-powered brainstorming' : 'العصف الذهني المدعوم بالذكاء الاصطناعي'}
                </div>
              </div>
              <div className="feature-item">
                <span className="red-dot">•</span>
                <div>
                  <strong>{language === 'en' ? 'Market Research' : 'بحث السوق'}</strong>
                  <br />
                  {language === 'en' ? 'Comprehensive analysis' : 'تحليل شامل'}
                </div>
              </div>
              <div className="feature-item">
                <span className="red-dot">•</span>
                <div>
                  <strong>{language === 'en' ? 'Product Development' : 'تطوير المنتج'}</strong>
                  <br />
                  {language === 'en' ? 'Full-stack implementation' : 'تنفيذ كامل'}
                </div>
              </div>
              <div className="feature-item">
                <span className="red-dot">•</span>
                <div>
                  <strong>{language === 'en' ? 'Launch Support' : 'دعم الإطلاق'}</strong>
                  <br />
                  {language === 'en' ? 'Go-to-market strategy' : 'استراتيجية دخول السوق'}
                </div>
              </div>
            </div>
            <button className="cta-button">
              {language === 'en' ? 'Start Your Journey' : 'ابدأ رحلتك'} <span className="arrow">→</span>
            </button>
          </div>
        </section>

        <div className="other-software-section">
          <h2>{language === 'en' ? 'Other Software' : 'برمجيات أخرى'}</h2>
          <p>{language === 'en' ? 'Additional tools in our ecosystem' : 'أدوات إضافية في نظامنا البيئي'}</p>
          <div className="software-card-container">
            <div className="software-card">
              <h3>MoodGPT</h3>
              <p>{language === 'en' ? 'AI-powered mood tracking and mental wellness companion' : 'مساعد تتبع الحالة المزاجية والرفاهية النفسية المدعوم بالذكاء الاصطناعي'}</p>
              <button className="explore-button">{language === 'en' ? 'Explore MoodGPT →' : 'استكشاف MoodGPT →'}</button>
            </div>
            <div className="software-card">
              <h3>MindGrid</h3>
              <p>{language === 'en' ? 'Visual thinking and idea organization platform powered by AI' : 'منصة التفكير البصري وتنظيم الأفكار المدعومة بالذكاء الاصطناعي'}</p>
              <button className="explore-button">{language === 'en' ? 'Explore MindGrid →' : 'استكشاف MindGrid →'}</button>
            </div>
          </div>
        </div>

        <div className="about-section" id="aboutUs">
          <h2 className="about-heading">{language === 'en' ? 'About Us' : 'معلومات عنا'}</h2>
          <h3 className="about-subheading">
            {language === 'en' ? 'It starts with ' : 'يبدأ بـ '} <span className="highlighted-text">{language === 'en' ? '(No) Idea.' : '(لا) فكرة.'}</span>
          </h3>
          <p className="about-description">
            {language === 'en' ? 'Whether you have money and no idea, or an idea and no money — Dome is the solution.' : 'سواء كان لديك المال ولا فكرة، أو فكرة ولا مال — Dome هو الحل.'}
          </p>
          <p className="about-description">
            {language === 'en' ? 'Dome is a Qatar-based AI and software ecosystem built to give ideas weight. We believe innovation should be accessible — not limited by capital, connections, or circumstance. Dome provides the tools, structure, and intelligence to turn ambition into action.' : 'Dome هو نظام بيئي مدعوم بالذكاء الاصطناعي والبرمجيات ومقره قطر، يهدف إلى إعطاء الأفكار قيمة. نعتقد أن الابتكار يجب أن يكون متاحًا — لا محدودًا بالمال أو العلاقات أو الظروف. يقدم Dome الأدوات والبنية التحتية والذكاء لتحويل الطموحات إلى عمل.'}
          </p>
          <p className="about-description">
            {language === 'en' ? 'From concept to creation, Dome helps entrepreneurs, creators, and businesses launch startups, build digital products, and create new income streams — all within one connected ecosystem.' : 'من الفكرة إلى الإبداع، يساعد Dome رواد الأعمال والمبدعين والشركات على إطلاق الشركات الناشئة وبناء المنتجات الرقمية وخلق تدفقات دخل جديدة — جميعها ضمن نظام بيئي متصل واحد.'}
          </p>
        </div>

        <div className="mission-vision-section">
          <div className="mission-card">
            <div className="icon-container">
              <FaBullseye className="icon" />
            </div>
            <h3 className="card-heading">{language === 'en' ? 'Mission' : 'المهمة'}</h3>
            <p className="card-description">
              {language === 'en' ? 'To empower people to build with purpose, by bridging the gap between vision and execution.' : 'تمكين الناس من البناء بهدف، من خلال سد الفجوة بين الرؤية والتنفيذ.'}
            </p>
            <p className="blur">
              {language === 'en' ? 'Through AI, data, and design, Dome transforms uncertainty into direction — helping anyone, anywhere, go from ' : 'من خلال الذكاء الاصطناعي والبيانات والتصميم، يحول Dome الغموض إلى اتجاه — مساعدًا أي شخص في أي مكان للانتقال من '}
              <span className="highlighted-text">{language === 'en' ? 'no idea' : 'لا فكرة'}</span> {language === 'en' ? 'to a launched idea.' : 'إلى فكرة تم إطلاقها.'}
            </p>
          </div>
          <div className="vision-card">
            <div className="icon-container">
              <FaEye className="icon" />
            </div>
            <h3 className="card-heading">{language === 'en' ? 'Vision' : 'الرؤية'}</h3>
            <p className="card-description">
              {language === 'en' ? 'To build the world\'s most dynamic AI ecosystem for creators and entrepreneurs — starting from Qatar, reaching the world.' : 'بناء أقوى نظام بيئي مدعوم بالذكاء الاصطناعي للمبدعين ورواد الأعمال — بدءًا من قطر، وصولاً إلى العالم.'}
            </p>
            <p className="blur">
              {language === 'en' ? 'Because every idea, or lack of one, deserves a place to begin.' : 'لأن كل فكرة، أو نقص فيها، تستحق مكانًا لتبدأ منه.'}
            </p>
          </div>
        </div>

        <div className="income-stream-section">
          <h1 className="main-heading heading">{language === 'en' ? 'Ready to build your next income stream?' : 'هل أنت مستعد لبناء مصدر الدخل التالي؟'}</h1>
          <p className="subheading">{language === 'en' ? 'Join thousands of entrepreneurs using DOME to launch and scale their digital businesses' : 'انضم إلى الآلاف من رواد الأعمال الذين يستخدمون DOME لإطلاق وتوسيع أعمالهم الرقمية'}</p>
          <button className="cta-button">{language === 'en' ? 'Get Started Now →' : 'ابدأ الآن →'}</button>
        </div>

        <div className="footer">
          <div className="footer-content">
            <div className="footer-left">
              <img 
                alt="DOME Logo" 
                loading="lazy" 
                decoding="async" 
                className="footer-logo" 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DOME_TRANSPARENT%20LOGO_2%20copy%202-EU5RvRk0AFRvEp0iNgoH9y9iWUiChY.png"
              />
              <p className="footer-tagline">{language === 'en' ? 'Building the future of entrepreneurship with AI' : 'بناء مستقبل ريادة الأعمال باستخدام الذكاء الاصطناعي'}</p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h3>{language === 'en' ? 'Products' : 'المنتجات'}</h3>
                <ul>
                  <li>keyTABs</li>
                  <li>Author's Bookshelf</li>
                  <li>StartupScore</li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>{language === 'en' ? 'Services' : 'الخدمات'}</h3>
                <ul>
                  <li>SwiftSTART</li>
                  <li>Consulting</li>
                  <li>Support</li>
                </ul>
              </div>
              <div className="footer-column">
                <h3>{language === 'en' ? 'Company' : 'الشركة'}</h3>
                <ul>
                  <li>{language === 'en' ? 'About' : 'معلومات عنا'}</li>
                  <li>{language === 'en' ? 'Blog' : 'مدونة'}</li>
                  <li>{language === 'en' ? 'Contact' : 'اتصل بنا'}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 DOME. {language === 'en' ? 'All rights reserved.' : 'جميع الحقوق محفوظة.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

