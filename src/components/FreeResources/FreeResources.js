export const FreeResources = () => {
  return `
    <section class="section pad-tb bg-gray" id="free-resources">
        <div class="container">
            <div class="common-heading">
                <span>FREE RESOURCES / இலவச வளங்கள்</span>
                <h2>Everything You Need, Absolutely Free</h2>
                <p class="heading-subtitle">Attract your preparation with premium study materials — no cost, no login, just value <i class="fas fa-bullseye" style="color: #4302ae"></i></p>
            </div>
            <div class="row grid-resources">
                <!-- Free PDFs -->
                <div class="col-lg-3 col-sm-6 mb-30" data-reveal>
                    <a href="#free-pdfs" class="fr-card fr-card-1">
                        <div class="fr-glow"></div>
                        <div class="fr-watermark"><i class="fas fa-file-pdf"></i></div>
                        <div class="fr-content">
                            <div class="fr-count">50+</div>
                            <h3>Free PDFs</h3>
                            <p>Subject-wise study material, shortcuts & formula sheets ready to download.</p>
                            <span class="fr-link">Browse PDFs <i class="fas fa-arrow-right"></i></span>
                        </div>
                    </a>
                </div>
                <!-- Notes -->
                <div class="col-lg-3 col-sm-6 mb-30" data-reveal>
                    <a href="#free-notes" class="fr-card fr-card-2">
                        <div class="fr-glow"></div>
                        <div class="fr-watermark"><i class="fas fa-book-open"></i></div>
                        <div class="fr-content">
                            <div class="fr-count">Bilingual</div>
                            <h3>Notes</h3>
                            <p>Tamil + English handwritten & typed notes covering every TNPSC subject.</p>
                            <span class="fr-link">View Notes <i class="fas fa-arrow-right"></i></span>
                        </div>
                    </a>
                </div>
                <!-- Previous Year Questions -->
                <div class="col-lg-3 col-sm-6 mb-30" data-reveal>
                    <a href="#free-pyq" class="fr-card fr-card-3">
                        <div class="fr-glow"></div>
                        <div class="fr-watermark"><i class="fas fa-clipboard-list"></i></div>
                        <div class="fr-content">
                            <div class="fr-count">2015–2024</div>
                            <h3>Previous Year Questions</h3>
                            <p>Solved PYQs from Group 1, 2, 4 & VAO with answer explanations.</p>
                            <span class="fr-link">Solve PYQs <i class="fas fa-arrow-right"></i></span>
                        </div>
                    </a>
                </div>
                <!-- Weekly Tests -->
                <div class="col-lg-3 col-sm-6 mb-30" data-reveal>
                    <a href="#free-tests" class="fr-card fr-card-4">
                        <div class="fr-glow"></div>
                        <div class="fr-watermark"><i class="fas fa-clock"></i></div>
                        <div class="fr-content">
                            <div class="fr-count">Weekly</div>
                            <h3>Weekly Tests</h3>
                            <p>Free mock tests every week with instant results & performance analytics.</p>
                            <span class="fr-link">Take a Test <i class="fas fa-arrow-right"></i></span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  `;
};
