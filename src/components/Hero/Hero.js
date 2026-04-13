export const Hero = () => {
    return `
    <style>
        .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0; }
    </style>
    <section class="hero-slider hero-style" id="home">
        <div class="swiper-container mySwiper">
            <div class="hero-content">
                <!-- Hidden SEO Headings for Keyword Density -->
                <h1 class="seo-title sr-only">Best TNPSC Coaching Centre in Pudukottai, Tamil Nadu - Selection Experts</h1>
                <h2 class="seo-subtitle sr-only">Top TNPSC Academy for Group 1, Group 2, 2A, Group 4 & VAO Recruitment Exams 2026</h2>
            </div>
            <div class="swiper-wrapper">
                <!-- Slide 1 (LCP - Eager Loading) -->
                <div class="swiper-slide">
                    <div class="slide-inner">
                        <img src="/assets/tnpsc_hero.png" 
                             alt="Sahul TNPSC Circle selection batch - Best TNPSC Coaching Center in Pudukottai and Chennai 2026" class="hero-bg-img" fetchpriority="high" decoding="sync" width="1920" height="1080">
                        <div class="gradient-overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <h1 data-swiper-parallax="300" class="text-white">TNPSC Group 1, 2, 2A, 4 <br>Sahul TNPSC Circle</h1>
                                    <p data-swiper-parallax="400" class="text-white mt-3">Selection Focused Preparation. உங்கள் அரசுப்பணியே எங்களது லட்சியம்.</p>
                                    <div data-swiper-parallax="500" class="mt-4">
                                        <a href="https://wa.me/917598242374?text=Hi, I want to join the 2026 Selection Batch. Please share the details." class="btn-main">Join Selection Batch <i class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Slide 2 (Lazy Loading) -->
                <div class="swiper-slide">
                    <div class="slide-inner">
                        <img src="/assets/tnpsc_batch.jpeg" 
                             alt="TNPSC Group 4 and VAO Selection Batch 2026 - Sahul TNPSC Circle Admissions Open" class="hero-bg-img" loading="lazy" decoding="async" width="1920" height="1080">
                        <div class="gradient-overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <h2 data-swiper-parallax="300" class="text-white">New Batch: Vithai <br>Admission Open</h2>
                                    <p data-swiper-parallax="400" class="text-white mt-3">Comprehensive 6-Month Selection Batch. Tamil Nadu's Premier TNPSC Coaching @ ₹5555.</p>
                                    <div data-swiper-parallax="500" class="mt-4">
                                        <a href="https://wa.me/917598242374?text=Hi, I want to enroll for the TNPSC Group exams. Please guide me on the process." class="btn-main">Enroll Today <i class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Slide 3 (Lazy Loading) -->
                <div class="swiper-slide">
                    <div class="slide-inner">
                        <img src="/assets/tnpsc_experts.jpeg" 
                             alt="Expert TNPSC Mentors SAHUL HAMMEED Sir and BOOPATHY RAJA SIR - Top TNPSC Academy in Tamil Nadu success guidance" class="hero-bg-img" loading="lazy" decoding="async" width="1920" height="1080">
                        <div class="gradient-overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <h2 data-swiper-parallax="300" class="text-white">Learn from Experts <br>SAHUL HAMMEED Sir, BOOPATHY RAJA SIR, DIVYA MAM, SHEIK SIR & MANIKANDAN SIR</h2>
                                    <p data-swiper-parallax="400" class="text-white mt-3">Ex-Unacademy Educators and Subject Specialists. Dedicated mentorship for your TNPSC success.</p>
                                    <div data-swiper-parallax="500" class="mt-4">
                                        <a href="https://wa.me/917598242374?text=Hi, I'd like to talk to a mentor about my TNPSC 2026 preparation strategy." class="btn-main">Meet Our Faculty <i class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
            <!-- Add Navigation -->
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </section>
  `;
};

// Helper to load external assets dynamically
const loadAsset = (url, type) => {
    return new Promise((resolve) => {
        if (type === 'script') {
            if (document.querySelector(`script[src="${url}"]`)) return resolve();
            const script = document.createElement('script');
            script.src = url;
            script.onload = resolve;
            document.head.appendChild(script);
        } else {
            if (document.querySelector(`link[href="${url}"]`)) return resolve();
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = url;
            link.onload = resolve;
            document.head.appendChild(link);
        }
    });
};

// Initialize Swiper using Modular ESM to minimize unused JS (Tree-shaking via CDN)
export const initHeroSlider = async () => {
    try {
        // 1. Preload Styles (Small footprint, contains all module layouts)
        await loadAsset('https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css', 'style');

        // 2. Dynamic Import only the required modules (Avoids loading 25KB+ of unused features)
        const [SwiperModule, Nav, Pag, Auto, Para] = await Promise.all([
            import('https://cdn.jsdelivr.net/npm/swiper@11/swiper.min.mjs'),
            import('https://cdn.jsdelivr.net/npm/swiper@11/modules/navigation.min.mjs'),
            import('https://cdn.jsdelivr.net/npm/swiper@11/modules/pagination.min.mjs'),
            import('https://cdn.jsdelivr.net/npm/swiper@11/modules/autoplay.min.mjs'),
            import('https://cdn.jsdelivr.net/npm/swiper@11/modules/parallax.min.mjs')
        ]);

        const Swiper = SwiperModule.default;

        // 3. Initialize Swiper with specific modules only
        setTimeout(() => {
            new Swiper(".mySwiper", {
                modules: [Nav.default, Pag.default, Auto.default, Para.default],
                loop: true,
                parallax: true,
                speed: 1000,
                observer: true,
                observeParents: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
            });
        }, 150);
    } catch (err) {
        console.error("Swiper failed to load modularly:", err);
    }
};
