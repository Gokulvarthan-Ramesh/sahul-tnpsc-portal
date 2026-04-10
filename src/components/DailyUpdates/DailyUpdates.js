export const DailyUpdates = () => {
  return `
    <!-- Daily Updates Section -->
    <section class="section pad-tb bg-white" id="daily-updates">
        <div class="container">
            <div class="common-heading">
                <span>DAILY UPDATES / தினசரி புதுப்பிப்புகள்</span>
                <h2>Stay Ahead, Every Single Day</h2>
                <p class="heading-subtitle">Very important for TNPSC <i class="fas fa-fire" style="color: #fe4c1c"></i> — Never miss a beat with our daily resources curated by expert mentors.</p>
            </div>
            <div class="row grid-updates">
                <!-- Daily Current Affairs -->
                <div class="col-lg-6 col-sm-6 mb-30" data-reveal>
                    <a href="#daily-ca" class="du-card du-card-1">
                        <div class="du-accent"></div>
                        <div class="du-icon"><i class="fas fa-newspaper"></i></div>
                        <div class="du-body">
                            <span class="du-tag">Updated Daily</span>
                            <h3>Daily Current Affairs</h3>
                            <p>Hand-picked news analysis tailored for TNPSC exams. Available in Tamil & English every morning.</p>
                        </div>
                        <div class="du-arrow"><i class="fas fa-chevron-right"></i></div>
                    </a>
                </div>
                <!-- Exam Notifications -->
                <div class="col-lg-6 col-sm-6 mb-30" data-reveal>
                    <a href="#exam-notifications" class="du-card du-card-2">
                        <div class="du-accent"></div>
                        <div class="du-icon"><i class="fas fa-bell"></i></div>
                        <div class="du-body">
                            <span class="du-tag">Real-time Alerts</span>
                            <h3>Exam Notifications</h3>
                            <p>Instant alerts on TNPSC exam dates, hall tickets, results & important announcements.</p>
                        </div>
                        <div class="du-arrow"><i class="fas fa-chevron-right"></i></div>
                    </a>
                </div>
                <!-- Important PDFs -->
                <div class="col-lg-6 col-sm-6 mb-30" data-reveal>
                    <a href="#important-pdfs" class="du-card du-card-3">
                        <div class="du-accent"></div>
                        <div class="du-icon"><i class="fas fa-file-pdf"></i></div>
                        <div class="du-body">
                            <span class="du-tag">Free Downloads</span>
                            <h3>Important PDFs</h3>
                            <p>Study materials, previous year papers, shortcuts & formulae — all in downloadable PDF format.</p>
                        </div>
                        <div class="du-arrow"><i class="fas fa-chevron-right"></i></div>
                    </a>
                </div>
                <!-- Practice Questions -->
                <div class="col-lg-6 col-sm-6 mb-30" data-reveal>
                    <a href="#practice-questions" class="du-card du-card-4">
                        <div class="du-accent"></div>
                        <div class="du-icon"><i class="fas fa-pen-fancy"></i></div>
                        <div class="du-body">
                            <span class="du-tag">1000+ Questions</span>
                            <h3>Practice Questions</h3>
                            <p>Topic-wise MCQs with detailed explanations. Practice daily to build exam-winning confidence.</p>
                        </div>
                        <div class="du-arrow"><i class="fas fa-chevron-right"></i></div>
                    </a>
                </div>
            </div>
        </div>
    </section>
  `;
};
