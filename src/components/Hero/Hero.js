export const Hero = () => {
  return `
    <section class="hero-slider hero-style" id="home">
        <div class="swiper-container mySwiper">
            <div class="swiper-wrapper">
                <!-- Slide 1 -->
                <div class="swiper-slide">
                    <div class="slide-inner background-img" style="background-image: url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1920&auto=format&fm=webp');">
                        <div class="gradient-overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <div data-swiper-parallax="300" class="slide-title">
                                        <h1 class="text-white">TNPSC Group 1, 2, 2A, 4 <br>Complete Coaching Circle</h1>
                                    </div>
                                    <div data-swiper-parallax="400" class="slide-text">
                                        <p>Selection Focused Preparation. உங்கள் அரசுப்பணியே எங்களது லட்சியம்.</p>
                                    </div>
                                    <div data-swiper-parallax="500" class="slide-btns">
                                        <a href="https://wa.me/917598242374" class="btn-main">Join Selection Batch <i class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Slide 2 -->
                <div class="swiper-slide">
                    <div class="slide-inner background-img" style="background-image: url('https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1920&auto=format&fm=webp');">
                        <div class="gradient-overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <div data-swiper-parallax="300" class="slide-title">
                                        <h1 class="text-white">New Batch: VIDHAI <br>Starting April 14</h1>
                                    </div>
                                    <div data-swiper-parallax="400" class="slide-text">
                                        <p>Your Gateway to Tamil Nadu Government Service. Comprehensive Study Plan.</p>
                                    </div>
                                    <div data-swiper-parallax="500" class="slide-btns">
                                        <a href="https://wa.me/917598242374" class="btn-main">Enroll Today <i class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Slide 3 -->
                <div class="swiper-slide">
                    <div class="slide-inner background-img" style="background-image: url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1920&auto=format&fm=webp');">
                        <div class="gradient-overlay"></div>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-8">
                                    <div data-swiper-parallax="300" class="slide-title">
                                        <h1 class="text-white">Learn from Expert <br>Sahul Hameed & Team</h1>
                                    </div>
                                    <div data-swiper-parallax="400" class="slide-text">
                                        <p>Ex-Unacademy Educator with 8+ Years of Experience. Expert in Current Affairs & Mentorship.</p>
                                    </div>
                                    <div data-swiper-parallax="500" class="slide-btns">
                                        <a href="https://wa.me/917598242374" class="btn-main">Meet Our Faculty <i class="fas fa-chevron-right fa-icon"></i><span class="circle"></span></a>
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

// Initialize Swiper after the component is rendered
export const initHeroSlider = () => {
    new Swiper(".mySwiper", {
        loop: true,
        parallax: true,
        speed: 1000,
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
};
