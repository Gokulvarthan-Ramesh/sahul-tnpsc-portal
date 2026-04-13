export const Contact = () => {
  return `
    <section class="section pad-tb bg-white" id="contact-section">
        <div class="container">
            <div class="common-heading">
                <span>CONTACT US / எங்களை தொடர்பு கொள்ள</span>
                <h2>Get In Touch With Us</h2>
                <p class="heading-subtitle">Have a question about our courses or need guidance? We're here to help you start your TNPSC journey.</p>
            </div>

            <div class="row contact-row">
                <!-- Left: Contact Info + Map -->
                <div class="col-lg-5 mb-30" data-reveal>
                    <div class="contact-info-box">
                        <!-- Info Cards -->
                        <div class="ci-card" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
                            <div class="ci-icon ci-icon-1"><i class="fas fa-map-marker-alt"></i></div>
                            <div class="ci-text">
                                <h4>Visit Us</h4>
                                <p itemprop="addressLocality">Pudukottai</p>
                                <p itemprop="addressRegion">Tamil Nadu, India</p>
                            </div>
                        </div>

                        <div class="ci-card">
                            <div class="ci-icon ci-icon-2"><i class="fas fa-phone-alt"></i></div>
                            <div class="ci-text">
                                <h4>Call Us</h4>
                                <a href="tel:+917598242374" class="ci-link" itemprop="telephone">+91 75982 42374</a>
                            </div>
                        </div>

                        <div class="ci-card">
                            <div class="ci-icon ci-icon-3"><i class="fab fa-whatsapp"></i></div>
                            <div class="ci-text">
                                <h4>WhatsApp</h4>
                                <a href="https://wa.me/917598242374" class="ci-link">Chat with us instantly</a>
                            </div>
                        </div>

                        <div class="ci-card">
                            <div class="ci-icon ci-icon-4"><i class="fas fa-envelope"></i></div>
                            <div class="ci-text">
                                <h4>Email Us</h4>
                                <a href="mailto:sahultnpsc4549@gmail.com" class="ci-link" itemprop="email">sahultnpsc4549@gmail.com</a>
                            </div>
                        </div>

                        <!-- WhatsApp Big Button -->
                        <a href="https://wa.me/917598242374" class="whatsapp-big-btn" target="_blank">
                            <i class="fab fa-whatsapp"></i>
                            <span>Message Us on WhatsApp</span>
                        </a>

                        <!-- Map -->
                        <div class="contact-map">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125323.123456789!2d78.8001!3d10.3833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa43df8448b7d9%3A0x5765c73e3405da0f!2sPudukottai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1712753200000!5m2!1sen!2sin" 
                                width="100%" 
                                height="220" 
                                style="border:0; border-radius: 16px;" 
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>

                <!-- Right: Contact Form -->
                <div class="col-lg-7 mb-30" data-reveal>
                    <div class="contact-form-box">
                        <div class="cf-header">
                            <h3>Send Us a Message</h3>
                            <p>Fill in the details below and our team will get back to you within 24 hours.</p>
                        </div>
                        <form class="contact-form" id="contactForm">
                            <div class="cf-row">
                                <div class="cf-field">
                                    <label for="cf-name">Full Name <span>*</span></label>
                                    <input type="text" id="cf-name" name="from_name" placeholder="Enter your name" aria-label="Enter your full name" required>
                                </div>
                                <div class="cf-field">
                                    <label for="cf-phone">Phone Number <span>*</span></label>
                                    <input type="tel" id="cf-phone" name="phone_number" placeholder="+91 XXXXX XXXXX" aria-label="Enter your phone number" required>
                                </div>
                            </div>
                            <div class="cf-row">
                                <div class="cf-field">
                                    <label for="cf-email">Email Address</label>
                                    <input type="email" id="cf-email" name="from_email" placeholder="your@email.com" aria-label="Enter your email address">
                                </div>
                                <div class="cf-field">
                                    <label for="cf-course">Interested Course</label>
                                    <select id="cf-course" name="course" aria-label="Select the TNPSC course you are interested in">
                                        <option value="">Select a course</option>
                                        <option value="group1">TNPSC Group 1</option>
                                        <option value="group2">TNPSC Group 2 / 2A</option>
                                        <option value="group4">TNPSC Group 4 & VAO</option>
                                        <option value="ca">Current Affairs Only</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div class="cf-field cf-full">
                                <label for="cf-message">Your Message</label>
                                <textarea id="cf-message" name="message" rows="4" placeholder="Tell us about your preparation level, goals, or any questions..." aria-label="Enter your message or questions"></textarea>
                            </div>
                            <button type="submit" class="cf-submit" id="submitBtn">
                                <i class="fas fa-paper-plane"></i> <span class="btn-text">Send Message</span>
                            </button>
                        </form>

                        <!-- Success Message -->
                        <div class="cf-success" id="formSuccess" style="display: none;">
                            <div class="cfs-icon"><i class="fas fa-check-circle"></i></div>
                            <h4>Message Sent Successfully!</h4>
                            <p>Our team will contact you within 24 hours. You can also reach us directly on WhatsApp.</p>
                            <a href="https://wa.me/917598242374" class="whatsapp-big-btn" target="_blank">
                                <i class="fab fa-whatsapp"></i>
                                <span>Chat on WhatsApp Now</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  `;
};

/**
 * Initialize Contact Form logic
 * This version redirects directly to WhatsApp
 */
export const initContactForm = () => {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const submitBtn = document.getElementById('submitBtn');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // 1. Get Form Values
        const formData = new FormData(this);
        const name = formData.get('from_name');
        const phone = formData.get('phone_number');
        const email = formData.get('from_email') || 'Not provided';
        const course = formData.get('course') || 'General Inquiry';
        const message = formData.get('message') || 'Interested in your coaching.';

        // 2. Format WhatsApp Message
        const whatsappMsg = `*New Inquiry from Website*%0A%0A` +
            `*Name:* ${name}%0A` +
            `*Phone:* ${phone}%0A` +
            `*Email:* ${email}%0A` +
            `*Interested in:* ${course}%0A%0A` +
            `*Message:* ${message}`;

        // 3. Open WhatsApp
        const whatsappUrl = `https://wa.me/917598242374?text=${whatsappMsg}`;
        window.open(whatsappUrl, '_blank');

        // 4. Reset Form (Optional)
        this.reset();
        
        // 5. Show internal success message
        const successMsg = document.getElementById('formSuccess');
        form.style.display = 'none';
        successMsg.style.display = 'flex';
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
};
