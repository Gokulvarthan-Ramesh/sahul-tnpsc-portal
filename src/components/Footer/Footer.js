export const Footer = () => {
  return `
    <footer class="footer-style-three pad-tb" id="contact">
        <div class="container footer-top-cards">
            <div class="row">
                <!-- Address -->
                <div class="col-lg-4 col-sm-6 mb-30" data-reveal>
                    <div class="footer-card">
                        <div class="card-icon"><i class="fas fa-map-marker-alt"></i></div>
                        <div class="card-content">
                            <h4>Address</h4>
                            <p>Trichy, Tamil Nadu, India</p>
                        </div>
                    </div>
                </div>
                <!-- Call Us -->
                <div class="col-lg-4 col-sm-6 mb-30" data-reveal>
                    <div class="footer-card">
                        <div class="card-icon"><i class="fas fa-phone-alt"></i></div>
                        <div class="card-content">
                            <h4>Call Us</h4>
                            <p>+91 75982 42374</p>
                        </div>
                    </div>
                </div>
                <!-- Email Us -->
                <div class="col-lg-4 col-sm-6 mb-30" data-reveal>
                    <div class="footer-card">
                        <div class="card-icon"><i class="fas fa-envelope"></i></div>
                        <div class="card-content">
                            <h4>Email Us</h4>
                            <p>sahultnpsc4549@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container footer-middle mt-50">
            <div class="row">
                <div class="col-lg-4 col-sm-6 mb-30" data-reveal>
                    <div class="footer-logo mb-20">
                        <img src="/assets/logo.svg" alt="Sahul TNPSC Logo" class="main-logo" width="70" height="70" style="max-height: 70px;">
                    </div>
                    <p class="text-white-50">Sahul TNPSC Circle is a premier coaching destination in Trichy, dedicated to empowering TNPSC aspirants with selection-focused mentorship and high-quality coaching.</p>
                    <div class="footer-social mt-20">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="https://www.instagram.com/sahultnpsc?igsh=MWIwbzh1MTk5enByaA%3D%3D" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
                        <a href="https://youtube.com/@sahultnpsc" target="_blank"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-30" data-reveal>
                    <h4 class="text-white mb-20">Quick Links</h4>
                    <ul class="footer-links-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Our Courses</a></li>
                        <li><a href="#about">About Sahul</a></li>
                        <li><a href="#faculty">Expert Faculty</a></li>
                    </ul>
                </div>
                <div class="col-lg-2 col-sm-6 mb-30" data-reveal>
                    <h4 class="text-white mb-20">Our Courses</h4>
                    <ul class="footer-links-list">
                        <li><a href="#products">TNPSC Group 1</a></li>
                        <li><a href="#products">TNPSC Group 2 / 2A</a></li>
                        <li><a href="#products">TNPSC Group 4 & VAO</a></li>
                        <li><a href="#daily-ca">Daily Current Affairs</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-sm-6 mb-30" data-reveal>
                    <h4 class="text-white mb-20">Regional Coaching Hubs</h4>
                    <ul class="footer-links-list hubs-list">
                        <li><a href="#contact-section">Best TNPSC Classes Chennai</a></li>
                        <li><a href="#contact-section">Top TNPSC Coaching Madurai</a></li>
                        <li><a href="#contact-section">TNPSC Academy Coimbatore</a></li>
                        <li><a href="#contact-section">TNPSC Training Salem & Erode</a></li>
                        <li><a href="#contact-section">Tirunelveli & Vellore Batches</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <style>
            .hubs-list li a { font-size: 13px; opacity: 0.8; }
            .hubs-list li a:hover { opacity: 1; color: var(--accent); }
        </style>

        <div class="footer-districts-seo" data-reveal>
            <div class="container">
                <p class="district-list"><strong>Serving Aspirants Across:</strong> Ariyalur, Chengalpattu, Chennai, Coimbatore, Cuddalore, Dharmapuri, Dindigul, Erode, Kallakurichi, Kanchipuram, Kanyakumari, Karur, Krishnagiri, Madurai, Mayiladuthurai, Nagapattinam, Namakkal, Nilgiris, Perambalur, Pudukkottai, Ramanathapuram, Ranipet, Salem, Sivaganga, Tenkasi, Thanjavur, Thenis, Thoothukudi, Tiruchirappalli, Tirunelveli, Tirupathur, Tiruppur, Tiruvallur, Tiruvannamalai, Tiruvarur, Vellore, Viluppuram, and Virudhunagar.</p>
            </div>
        </div>

        <style>
            .footer-districts-seo { padding: 40px 0 20px; border-top: 1px solid rgba(255,255,255,0.05); }
            .district-list { font-size: 11px; color: rgba(255,255,255,0.3); line-height: 1.8; text-align: center; margin-bottom: 0; }
            .district-list strong { color: rgba(255,255,255,0.5); }
        </style>
        
        <div class="footer-bottom mt-50">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center text-white-50">
                        <p>© ${new Date().getFullYear()} Sahul TNPSC Circle. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Sticky Conversion Bar (SEO & Lead Gen) -->
        <div class="sticky-conversion-bar" id="sticky-cta">
            <div class="container container-sticky">
                <p>Ready to join the <strong>next Selection Batch</strong> in Tamil Nadu?</p>
                <div class="sticky-btns">
                    <a href="https://wa.me/917598242374" class="btn-sticky-whatsapp"><i class="fab fa-whatsapp"></i> Chat Now</a>
                    <a href="#contact-section" class="btn-sticky-enquiry">Quick Enquiry</a>
                </div>
            </div>
        </div>

        <style>
            .sticky-conversion-bar { position: fixed; bottom: -100px; left: 0; width: 100%; background: rgba(15, 2, 37, 0.95); backdrop-filter: blur(15px); color: #fff; z-index: 2500; transition: all 0.5s ease-in-out; padding: 15px 0; border-top: 1px solid rgba(255, 255, 255, 0.1); box-shadow: 0 -10px 40px rgba(0,0,0,0.5); }
            .sticky-conversion-bar.active { bottom: 0; }
            .container-sticky { display: flex; justify-content: space-between; align-items: center; }
            .container-sticky p { margin: 0; font-weight: 600; font-size: 16px; color: rgba(255,255,255,0.9); }
            .sticky-btns { display: flex; gap: 12px; }
            .btn-sticky-whatsapp { background: #25d366; color: #fff; padding: 8px 18px; border-radius: 50px; font-weight: 700; font-size: 14px; text-decoration: none; transition: 0.3s; }
            .btn-sticky-enquiry { background: var(--gradient-primary); color: #fff; padding: 8px 18px; border-radius: 50px; font-weight: 700; font-size: 14px; text-decoration: none; transition: 0.3s; }
            .btn-sticky-whatsapp:hover, .btn-sticky-enquiry:hover { transform: translateY(-3px); }
            
            @media (max-width: 768px) {
                .container-sticky { flex-direction: column; gap: 10px; text-align: center; }
                .container-sticky p { font-size: 13px; }
                .sticky-btns { width: 100%; justify-content: center; }
            }
        </style>
        
        <script>
            // Show sticky bar after scroll
            window.addEventListener('scroll', () => {
                const cta = document.getElementById('sticky-cta');
                if (window.scrollY > 400) {
                    cta.classList.add('active');
                } else {
                    cta.classList.remove('active');
                }
            });
        </script>
    </footer>
  `;
};
