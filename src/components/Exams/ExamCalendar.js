export const ExamCalendar = () => {
    return `
    <section class="section exam-calendar-section pad-tb bg-white" id="exam-calendar">
        <div class="container">
            <div class="common-heading">
                <span>EXAM TRACKER / தேர்வு கால அட்டவணை</span>
                <h2>TNPSC 2026 Exam Calendar</h2>
                <p class="heading-subtitle">Stay updated with the latest official recruitment dates. Planning is the first step to selection.</p>
            </div>
            
            <div class="calendar-wrapper" data-reveal>
                <!-- Desktop Table View -->
                <div class="table-responsive d-none-mobile">
                    <table class="exam-table">
                        <thead>
                            <tr>
                                <th>Exam Name</th>
                                <th>Notification</th>
                                <th>Exam Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>TNPSC Group 4 & VAO</strong></td>
                                <td>Expected June 2026</td>
                                <td>September 2026</td>
                                <td class="text-center"><span class="status-pill status-upcoming">Upcoming</span></td>
                            </tr>
                            <tr class="row-special">
                                <td colspan="4" class="text-center">
                                    <a href="#planner-2026" class="planner-mega-link">
                                        <i class="fas fa-file-pdf"></i> View TNPSC Annual Planner 2026 Detailed Guide & PDF Download
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td><strong>TNPSC Group 2 & 2A</strong></td>
                                <td>Expected April 2026</td>
                                <td class="tba">July 2026</td>
                                <td class="text-center"><span class="status-pill status-alert">Batch Starting</span></td>
                            </tr>
                            <tr>
                                <td><strong>TNPSC Group 1</strong></td>
                                <td>May 2026</td>
                                <td>August 2026</td>
                                <td class="text-center"><span class="status-pill status-upcoming">Upcoming</span></td>
                            </tr>
                            <tr>
                                <td><strong>Combined Technical Services</strong></td>
                                <td>Announced</td>
                                <td>June 15, 2026</td>
                                <td class="text-center"><span class="status-pill status-open">Apply Now</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <!-- Mobile Card View (Shown only on small screens) -->
                <div class="mobile-calendar-list d-none-desktop">
                    <div class="exam-card-mobile">
                        <div class="card-status"><span class="status-pill status-upcoming">Upcoming</span></div>
                        <h4>TNPSC Group 4 & VAO</h4>
                        <div class="card-detail"><span>Notification:</span> Expected June 2026</div>
                        <div class="card-detail"><span>Exam Date:</span> September 2026</div>
                    </div>
                    
                    <div class="mobile-planner-promo">
                        <a href="#planner-2026" class="planner-mega-link">
                            <i class="fas fa-file-pdf"></i> Download 2026 Annual Planner
                        </a>
                    </div>

                    <div class="exam-card-mobile">
                        <div class="card-status"><span class="status-pill status-alert">Batch Starting</span></div>
                        <h4>TNPSC Group 2 & 2A</h4>
                        <div class="card-detail"><span>Notification:</span> Expected April 2026</div>
                        <div class="card-detail"><span>Exam Date:</span> July 2026</div>
                    </div>

                    <div class="exam-card-mobile">
                        <div class="card-status"><span class="status-pill status-upcoming">Upcoming</span></div>
                        <h4>TNPSC Group 1</h4>
                        <div class="card-detail"><span>Notification:</span> May 2026</div>
                        <div class="card-detail"><span>Exam Date:</span> August 2026</div>
                    </div>

                    <div class="exam-card-mobile">
                        <div class="card-status"><span class="status-pill status-open">Apply Now</span></div>
                        <h4>Combined Tech Services</h4>
                        <div class="card-detail"><span>Notification:</span> Announced</div>
                        <div class="card-detail"><span>Exam Date:</span> June 15, 2026</div>
                    </div>
                </div>

                <!-- Event Schema (Rich Results) -->
                <script type="application/ld+json">
                [
                  {
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": "TNPSC Group 4 & VAO 2026 Exam",
                    "startDate": "2026-09-01",
                    "location": { "@type": "Place", "name": "Tamil Nadu, India" },
                    "description": "Mass recruitment exam for Group 4 and VAO posts conducted by TNPSC."
                  },
                  {
                    "@context": "https://schema.org",
                    "@type": "Event",
                    "name": "TNPSC Group 1 Services 2026",
                    "startDate": "2026-08-01",
                    "location": { "@type": "Place", "name": "Tamil Nadu, India" },
                    "description": "Premium recruitment exam for Group 1 gazetted posts in Tamil Nadu."
                  }
                ]
                </script>
                
                <div class="calendar-footer-cta mt-60">
                    <div class="container">
                        <div class="row v-center">
                            <div class="col-md-8">
                                <p class="calendar-note">Looking for PDF Syllabus & Study Plan? Join our WhatsApp channel for instant updates.</p>
                            </div>
                            <div class="col-md-4 text-right mobile-center">
                                <a href="https://wa.me/917598242374?text=Hi, I just saw the 2026 Exam Calendar. Can I get a free study plan for my preparation?" class="btn-main-sm mobile-full">Get Free Study Plan <i class="fab fa-whatsapp"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <style>
            .mt-60 { margin-top: 60px; }
            .mt-40 { margin-top: 40px; }
            .exam-table { width: 100%; border-collapse: separate; border-spacing: 0; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 40px rgba(0,0,0,0.08); border: 1px solid #eee; }
            .exam-table th { background: var(--primary); color: #fff; padding: 18px 20px; text-align: left; font-weight: 600; text-transform: uppercase; font-size: 13px; letter-spacing: 1px; }
            .exam-table td { padding: 18px 20px; border-bottom: 1px solid #f0f0f0; font-size: 15px; color: var(--text-dark); transition: 0.3s; }
            .exam-table tr:hover td { background: #fcfaff; }
            .row-special td { background: #f7f3ff !important; padding: 12px 20px; border-top: 1px solid rgba(67, 2, 174, 0.1); border-bottom: 1px solid rgba(67, 2, 174, 0.1); }
            .status-pill { display: inline-block; padding: 7px 15px; border-radius: 6px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; width: 130px; text-align: center; }
            .status-upcoming { background: #eef7ff; color: #0084ff; }
            .status-alert { background: #fff4e5; color: #ff8c00; }
            .status-open { background: #f0fff4; color: #00c853; border: 1px solid #00c85330; animation: pulse-green-border 2s infinite; }
            .tba { color: #aaa; font-style: italic; }
            .calendar-note { font-size: 16px; font-weight: 500; color: #555; margin: 0; }
            .btn-main-sm { background: var(--gradient-primary); color: #fff; padding: 12px 25px; border-radius: 50px; text-decoration: none; font-weight: 600; display: inline-block; transition: 0.3s; box-shadow: 0 5px 15px rgba(67, 2, 174, 0.2); }
            .btn-main-sm:hover { transform: translateY(-3px); box-shadow: 0 8px 25px rgba(67, 2, 174, 0.3); }
            .planner-mega-link { color: var(--primary); font-weight: 700; text-decoration: none; font-size: 15px; display: inline-block; transition: 0.3s; padding: 5px 15px; border-radius: 4px; background: rgba(67, 2, 174, 0.05); animation: pulse-link 3s infinite; }
            .planner-mega-link i { margin-right: 8px; font-size: 18px; color: var(--accent); }
            .planner-mega-link:hover { color: var(--accent); background: rgba(67, 2, 174, 0.1); transform: translateY(-2px); }
            
            /* Responsive Logic */
            .d-none-desktop { display: none; }
            .mobile-calendar-list { flex-direction: column; gap: 15px; }
            .exam-card-mobile { background: #fff; padding: 20px; border-radius: 12px; border: 1px solid #eee; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
            .exam-card-mobile h4 { margin: 10px 0; color: var(--primary); font-size: 18px; }
            .card-detail { font-size: 14px; color: #666; margin-bottom: 5px; }
            .card-detail span { font-weight: 700; color: #333; margin-right: 5px; }
            .mobile-planner-promo { text-align: center; margin: 10px 0; }
            
            @keyframes pulse-link { 0% { opacity: 1; } 50% { opacity: 0.7; } 100% { opacity: 1; } }
            @keyframes pulse-green-border { 0% { box-shadow: 0 0 0 0 rgba(0, 200, 83, 0.2); } 70% { box-shadow: 0 0 0 10px rgba(0, 200, 83, 0); } 100% { box-shadow: 0 0 0 0 rgba(0, 200, 83, 0); } }
            
            @media (max-width: 768px) { 
                .d-none-mobile { display: none !important; }
                .d-none-desktop { display: flex !important; }
                .calendar-footer-cta { text-align: center; margin-top: 40px; } 
                .mobile-center { text-align: center !important; }
                .mobile-full { width: 100%; margin-top: 15px; }
                .calendar-note { font-size: 14px; line-height: 1.5; }
            }
        </style>
    </section>
    `;
};
