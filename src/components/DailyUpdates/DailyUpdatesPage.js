export const DailyUpdatesPage = (page) => {
  const pages = {
    'daily-ca': {
      title: 'Daily Current Affairs',
      tamil: 'தினசரி நடப்பு நிகழ்வுகள்',
      icon: 'fas fa-newspaper',
      color: '#4302ae',
      description: 'Stay updated with the latest TNPSC-focused daily current affairs curated specifically for Group 1, 2, 4 and VAO exams by our expert mentors in Tamil Nadu, serving students in Chennai, Madurai, and Pudukottai.',
      items: [
        { date: 'April 10, 2026', title: 'Tamil Nadu State Budget 2026-27 - Critical Analysis for Group 1 & 2', tag: 'State', tagColor: '#4302ae' },
        { date: 'April 9, 2026', title: 'Supreme Court Landmark Verdict on Reservation Policy - UPSC/TNPSC relevance', tag: 'National', tagColor: '#fe4c1c' },
        { date: 'April 8, 2026', title: 'New Governor of Tamil Nadu - Constitutional Powers & Appointment Facts', tag: 'State', tagColor: '#4302ae' },
        { date: 'April 7, 2026', title: 'India-EU Free Trade Agreement 2026 - Impact on Indian Economy', tag: 'International', tagColor: '#00befa' },
        { date: 'April 6, 2026', title: 'RBI Monetary Policy Update April 2026 - Repo Rate & Inflation stats', tag: 'Economy', tagColor: '#ff007a' },
        { date: 'April 5, 2026', title: 'UNESCO Heritage Site - New Addition from India', tag: 'National', tagColor: '#fe4c1c' },
      ]
    },
    'exam-notifications': {
      title: 'Exam Notifications',
      tamil: 'தேர்வு அறிவிப்புகள்',
      icon: 'fas fa-bell',
      color: '#fe4c1c',
      description: 'Never miss a TNPSC exam date, hall ticket release, or result announcement. We track all official announcements from the Tamil Nadu Public Service Commission.',
      items: [
        { date: 'April 10, 2026', title: 'Official TNPSC Group 1 Prelims 2026 Notification - Application Dates & Syllabus', tag: 'Group 1', tagColor: '#4302ae' },
        { date: 'April 8, 2026', title: 'TNPSC Group 2A Interview Hall Ticket 2026 - Download Link & Instructions', tag: 'Group 2A', tagColor: '#fe4c1c' },
        { date: 'April 5, 2026', title: 'TNPSC Group 4 Results 2024 - District-wise Pass Percentage & Cutoff', tag: 'Group 4', tagColor: '#00befa' },
        { date: 'April 3, 2026', title: 'VAO Village Administrative Officer Exam 2026 - Notification & Vacancy List', tag: 'VAO', tagColor: '#ff007a' },
        { date: 'April 1, 2026', title: 'Combined Engineering Services 2026 - Direct Recruitment Notification', tag: 'CES', tagColor: '#4302ae' },
        { date: 'March 28, 2026', title: 'Group 1 Mains 2024 - Final Results Published', tag: 'Group 1', tagColor: '#4302ae' },
      ]
    },
    'important-pdfs': {
      title: 'Important PDFs',
      tamil: 'முக்கிய PDF கோப்புகள்',
      icon: 'fas fa-file-pdf',
      color: '#ff007a',
      description: 'Download free study materials, previous year papers, and formula sheets.',
      items: [
        { date: 'New', title: 'ANICIENT INDIA-FULL PDF', tag: 'Notes', tagColor: '#4302ae' },
        { date: 'New', title: 'Tamil Nadu History - 100 Important Questions', tag: 'Questions', tagColor: '#fe4c1c' },
        { date: 'Popular', title: 'polity - introduction 1', tag: 'Summary', tagColor: '#00befa' },
        { date: 'Popular', title: 'Aptitude & Mental Ability - Formula Sheet', tag: 'Formulae', tagColor: '#ff007a' },
        { date: 'Updated', title: 'Previous Year Papers - Group 2 (2018-2024)', tag: 'PYQ', tagColor: '#4302ae' },
        { date: 'Updated', title: 'INTRODUCTION TO INDIAN ECONOMICS', tag: 'Notes', tagColor: '#fe4c1c' },
      ]
    },
    'practice-questions': {
      title: 'Practice Questions',
      tamil: 'பயிற்சி வினாக்கள்',
      icon: 'fas fa-pen-fancy',
      color: '#00befa',
      description: 'Topic-wise MCQs with detailed explanations to build exam confidence.',
      items: [
        { date: '50 Qs', title: 'Indian National Movement - Practice Set 1', tag: 'History', tagColor: '#4302ae' },
        { date: '40 Qs', title: 'Tamil Nadu Geography - District Wise Questions', tag: 'Geography', tagColor: '#fe4c1c' },
        { date: '30 Qs', title: 'Indian Constitution - Fundamental Rights Quiz', tag: 'Polity', tagColor: '#00befa' },
        { date: '25 Qs', title: 'Current Affairs - March 2026 Monthly Test', tag: 'CA', tagColor: '#ff007a' },
        { date: '50 Qs', title: 'General Science - Physics & Chemistry Combo', tag: 'Science', tagColor: '#4302ae' },
        { date: '40 Qs', title: 'Aptitude - Time, Speed & Distance Problems', tag: 'Maths', tagColor: '#fe4c1c' },
      ]
    }
  };

  const data = pages[page];
  if (!data) return '';

  return `
    <section class="subpage-section">
      <!-- Subpage Hero -->
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

      <!-- Subpage Content -->
      <div class="subpage-content pad-tb">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="subpage-list">
                ${data.items.map((item, i) => `
                  <div class="subpage-item" data-reveal style="animation-delay: ${i * 0.1}s">
                    <div class="subpage-item-date">
                      <span>${item.date}</span>
                    </div>
                    <div class="subpage-item-body">
                      <span class="subpage-tag" style="background: ${item.tagColor}15; color: ${item.tagColor}">${item.tag}</span>
                      <h3>${item.title}</h3>
                      <div class="subpage-item-actions">
                        ${(() => {
                          let pdfFile = 'ANICIENT INDIA-FULL PDF.pdf'; // Default fallback
                          const titleLower = item.title.toLowerCase();
                          const tagLower = item.tag.toLowerCase();
                          
                          if (titleLower.includes('polity') || tagLower.includes('polity') || titleLower.includes('constitution')) {
                            pdfFile = 'polity - introduction 1.pdf';
                          } else if (titleLower.includes('economy') || tagLower.includes('economy') || titleLower.includes('budget')) {
                            pdfFile = 'INTRODUCTION TO INDIAN ECONOMICS.pdf';
                          } else if (titleLower.includes('history') || tagLower.includes('india') || tagLower.includes('history')) {
                            pdfFile = 'ANICIENT INDIA-FULL PDF.pdf';
                          }
                          
                          return `
                            <a href="/assets/pdf/${encodeURIComponent(pdfFile)}" download="${item.title}.pdf" class="subpage-item-link" style="color: ${data.color}">
                              <i class="fas fa-download"></i> Download PDF
                            </a>
                          `;
                        })()}
                        <a href="https://wa.me/917598607516" target="_blank" rel="noopener noreferrer" class="subpage-item-link whatsapp-link">
                          <i class="fab fa-whatsapp"></i> Get on WhatsApp
                        </a>
                      </div>
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
                  <h4>Get Daily Updates</h4>
                  <p>Join our WhatsApp group to receive daily materials directly on your phone.</p>
                  <a href="https://wa.me/917598607516" target="_blank" rel="noopener noreferrer" class="btn-main">Join WhatsApp Group</a>
                </div>
                <div class="sidebar-card sidebar-cta">
                  <h4><i class="fas fa-phone-alt" style="color: #4302ae"></i> Need Help?</h4>
                  <p>Call us for any queries regarding study materials or exam preparation.</p>
                  <a href="tel:+917598607516" class="btn-outline">Call +91 75986 07516</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
};
