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
                            <p>info@sahultnpsc.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container footer-middle mt-50">
            <div class="row">
                <div class="col-lg-4 col-sm-6 mb-30" data-reveal>
                    <div class="footer-logo mb-20">
                        <img src="./src/assets/logo.png" alt="Sahul TNPSC Logo" class="main-logo" style="max-height: 70px; filter: brightness(0) invert(1);">
                    </div>
                    <p class="text-white-50">Sahul TNPSC Circle is a premier coaching destination in Trichy, dedicated to empowering TNPSC aspirants with selection-focused mentorship and high-quality coaching.</p>
                    <div class="footer-social mt-20">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div class="col-lg-2 col-sm-6 mb-30" data-reveal>
                    <h4 class="text-white mb-20">Quick Links</h4>
                    <ul class="footer-links-list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Courses</a></li>
                        <li><a href="#about">Why Us</a></li>
                        <li><a href="#faculty">Faculty</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-6 mb-30" data-reveal>
                    <h4 class="text-white mb-20">Our Courses</h4>
                    <ul class="footer-links-list">
                        <li><a href="#">TNPSC Group 1</a></li>
                        <li><a href="#">TNPSC Group 2 / 2A</a></li>
                        <li><a href="#">TNPSC Group 4 & VAO</a></li>
                        <li><a href="#">Current Affairs Daily</a></li>
                    </ul>
                </div>
                <div class="col-lg-3 col-sm-6 mb-30" data-reveal>
                    <h4 class="text-white mb-20">Contact Info</h4>
                    <ul class="footer-contact-list">
                        <li><i class="fas fa-map-marker-alt"></i> Trichy, TN</li>
                        <li><i class="fas fa-phone-alt"></i> +91 75982 42374</li>
                        <li><i class="fas fa-envelope"></i> info@sahultnpsc.com</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="footer-bottom mt-50">
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center text-white-50">
                        <p>© ${new Date().getFullYear()} Sahul TNPSC Circle. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Floating Buttons -->
        <div class="floating-box">
            <a href="https://wa.me/917598242374" class="fab-btn whatsapp" target="_blank">
                <i class="fab fa-whatsapp text-white fa-2x"></i>
            </a>
            <a href="tel:+917598242374" class="fab-btn call">
                <i class="fas fa-phone-alt text-white fa-xl"></i>
            </a>
        </div>
    </footer>
  `;
};
