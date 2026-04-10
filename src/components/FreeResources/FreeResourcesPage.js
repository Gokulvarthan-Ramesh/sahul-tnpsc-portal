export const FreeResourcesPage = (page) => {
  const pages = {
    'free-pdfs': {
      title: 'Free PDFs',
      tamil: 'இலவச PDF கோப்புகள்',
      icon: 'fas fa-file-pdf',
      color: '#ea3943',
      description: 'Download high-quality TNPSC study materials, syllabus PDFs, and revision notes for students in Chennai, Coimbatore, and Trichy — completely free.',
      items: [
        { date: 'New', title: 'TNPSC Group 1 Exam - Complete General Studies PDF Download (2025)', tag: 'Group 1', tagColor: '#4302ae', size: '12 MB' },
        { date: 'New', title: 'Indian Constitution - Important Articles & Schedules PDF Study Material', tag: 'Polity', tagColor: '#fe4c1c', size: '4 MB' },
        { date: 'Popular', title: 'Unit 8 & 9 Tamil Nadu History - Complete School Book Notes (Tamil)', tag: 'History', tagColor: '#ea3943', size: '8 MB' },
        { date: 'Popular', title: 'TNPSC Aptitude & Mental Ability - Shortcut Formulas PDF Guide', tag: 'Aptitude', tagColor: '#00befa', size: '2 MB' },
        { date: 'Updated', title: 'Indian Economy & Tamil Nadu Budget 2025 - Exam Special Notes PDF', tag: 'Economy', tagColor: '#ff007a', size: '5 MB' },
        { date: 'Updated', title: 'Science & Technology - One Liner PDF', tag: 'Science', tagColor: '#4302ae', size: '3 MB' },
        { date: 'Essential', title: 'Geography - India & Tamil Nadu Maps Collection', tag: 'Geography', tagColor: '#fe4c1c', size: '15 MB' },
        { date: 'Essential', title: 'Current Affairs 2024 - Yearly Compilation PDF', tag: 'CA', tagColor: '#00befa', size: '20 MB' },
      ]
    },
    'free-notes': {
      title: 'Notes (Tamil + English)',
      tamil: 'குறிப்புகள் (தமிழ் + ஆங்கிலம்)',
      icon: 'fas fa-book-open',
      color: '#4302ae',
      description: 'Bilingual handwritten & typed notes covering every TNPSC subject by expert mentors.',
      items: [
        { date: 'Tamil', title: 'இந்திய வரலாறு - சுதந்திர போராட்டம் முழு குறிப்புகள்', tag: 'History', tagColor: '#ea3943', size: 'Tamil' },
        { date: 'English', title: 'Indian National Movement - Complete Chapter Notes', tag: 'History', tagColor: '#ea3943', size: 'English' },
        { date: 'Tamil', title: 'தமிழ்நாடு புவியியல் - மாவட்டம் வாரியான குறிப்புகள்', tag: 'Geography', tagColor: '#fe4c1c', size: 'Tamil' },
        { date: 'English', title: 'Indian Polity - Laxmikanth Simplified Notes', tag: 'Polity', tagColor: '#4302ae', size: 'English' },
        { date: 'Tamil', title: 'பொதுத்தமிழ் - இலக்கணம் முழு குறிப்புகள்', tag: 'Tamil', tagColor: '#00befa', size: 'Tamil' },
        { date: 'English', title: 'General Science - Physics & Chemistry Notes', tag: 'Science', tagColor: '#ff007a', size: 'English' },
        { date: 'Tamil', title: 'இந்திய அரசியலமைப்பு - முக்கிய பிரிவுகள்', tag: 'Polity', tagColor: '#4302ae', size: 'Tamil' },
        { date: 'English', title: 'Environment & Ecology - Quick Revision Notes', tag: 'Environment', tagColor: '#fe4c1c', size: 'English' },
      ]
    },
    'free-pyq': {
      title: 'Previous Year Questions',
      tamil: 'முந்தைய ஆண்டு வினாக்கள்',
      icon: 'fas fa-clipboard-list',
      color: '#fe4c1c',
      description: 'Solved previous year question papers (2015-2024) with detailed explanations.',
      items: [
        { date: '2024', title: 'TNPSC Group 1 Prelims Question Paper 2024 - Solved with Answer Key PDF', tag: 'Group 1', tagColor: '#4302ae', size: '200 Qs' },
        { date: '2024', title: 'TNPSC Group 2 & 2A Question Paper 2024 - Official Solved PDF Download', tag: 'Group 2', tagColor: '#fe4c1c', size: '200 Qs' },
        { date: '2023', title: 'TNPSC Group 4 and VAO Question Paper 2023 - Complete Solution PDF', tag: 'Group 4', tagColor: '#00befa', size: '150 Qs' },
        { date: '2023', title: 'TNPSC Group 1 Mains Model Questions - Topic-wise Answer Writing PDF', tag: 'Group 1', tagColor: '#4302ae', size: 'Mains' },
        { date: '2022', title: 'Group 2A Previous Year solved Paper 2022 - Explanatory Notes PDF', tag: 'Group 2A', tagColor: '#ff007a', size: '200 Qs' },
        { date: '2022', title: 'TNPSC Group 4 2022 - TN GK Special Questions', tag: 'Group 4', tagColor: '#00befa', size: '150 Qs' },
        { date: '2021', title: 'Combined Civil Services 2021 - Full Paper Analysis', tag: 'CCS', tagColor: '#ea3943', size: '200 Qs' },
        { date: '2020', title: 'TNPSC Group 1 Prelims 2020 - Topic-wise Breakdown', tag: 'Group 1', tagColor: '#4302ae', size: '200 Qs' },
      ]
    },
    'free-tests': {
      title: 'Weekly Tests',
      tamil: 'வாராந்திர தேர்வுகள்',
      icon: 'fas fa-clock',
      color: '#00befa',
      description: 'Free weekly mock tests with instant results, ranking & performance analytics.',
      items: [
        { date: 'Apr 13', title: 'Weekly Test #42 - Indian History & Culture (50 MCQs)', tag: 'Upcoming', tagColor: '#00befa', size: '60 min' },
        { date: 'Apr 6', title: 'Weekly Test #41 - Tamil Nadu Geography & Economy', tag: 'Completed', tagColor: '#4302ae', size: '60 min' },
        { date: 'Mar 30', title: 'Weekly Test #40 - Current Affairs March 2025', tag: 'Completed', tagColor: '#4302ae', size: '45 min' },
        { date: 'Mar 23', title: 'Weekly Test #39 - Indian Polity & Governance', tag: 'Completed', tagColor: '#4302ae', size: '60 min' },
        { date: 'Mar 16', title: 'Weekly Test #38 - General Science Full Syllabus', tag: 'Completed', tagColor: '#4302ae', size: '60 min' },
        { date: 'Mar 9', title: 'Weekly Test #37 - Aptitude & Mental Ability', tag: 'Completed', tagColor: '#4302ae', size: '45 min' },
        { date: 'Mar 2', title: 'Weekly Test #36 - Group 4 Full Mock Test', tag: 'Completed', tagColor: '#fe4c1c', size: '90 min' },
        { date: 'Feb 23', title: 'Weekly Test #35 - TN History & Freedom Movement', tag: 'Completed', tagColor: '#4302ae', size: '60 min' },
      ]
    }
  };

  const data = pages[page];
  if (!data) return '';

  return `
    <section class="subpage-section">
      <div class="subpage-hero" style="--accent: ${data.color}">
        <div class="container">
          <a href="#" class="subpage-back" onclick="window.location.hash='';return false;">
            <i class="fas fa-arrow-left"></i> Back to Home
          </a>
          <div class="subpage-hero-content">
            <div class="subpage-icon" style="background: ${data.color}">
              <i class="${data.icon}"></i>
            </div>
            <div>
              <span class="subpage-tamil">${data.tamil}</span>
              <h1>${data.title}</h1>
              <p>${data.description}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="subpage-content pad-tb">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="subpage-list">
                ${data.items.map((item, i) => `
                  <div class="subpage-item" data-reveal style="animation-delay: ${i * 0.08}s">
                    <div class="subpage-item-date">
                      <span>${item.date}</span>
                    </div>
                    <div class="subpage-item-body">
                      <div class="subpage-item-meta">
                        <span class="subpage-tag" style="background: ${item.tagColor}15; color: ${item.tagColor}">${item.tag}</span>
                        <span class="subpage-size">${item.size}</span>
                      </div>
                      <h3>${item.title}</h3>
                      <a href="https://wa.me/917598242374" class="subpage-item-link" style="color: ${data.color}">
                        Get on WhatsApp <i class="fas fa-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="col-lg-4">
              <div class="subpage-sidebar">
                <div class="sidebar-card">
                  <div class="sidebar-icon" style="background: ${data.color}">
                    <i class="fab fa-whatsapp"></i>
                  </div>
                  <h4>Get Free Resources</h4>
                  <p>Join our WhatsApp group for instant access to all free materials.</p>
                  <a href="https://wa.me/917598242374" class="btn-main">Join WhatsApp Group</a>
                </div>
                <div class="sidebar-card sidebar-cta">
                  <h4><i class="fas fa-bullseye" style="color: #4302ae"></i> Start Your Preparation</h4>
                  <p>Enroll in our structured coaching program for guaranteed selection.</p>
                  <a href="https://wa.me/917598242374" class="btn-outline">Enquire Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
