export const OfficerChats = () => {
    // Generate all 30 masonry items
    const mosaicItems = Array.from({ length: 30 }, (_, i) => i + 1).map(num => `
        <div class="mosaic-item" data-image="/assets/chats/${num}.jpeg">
            <div class="mosaic-badge"><i class="fas fa-check-circle"></i> VERIFIED</div>
            <img src="/assets/chats/${num}.jpeg" 
                 alt="TNPSC Selection Officer Feedback ${num}" 
                 loading="lazy"
                 class="lazy-chat loaded">
        </div>
    `).join('');

    return `
    <section class="section officer-chats-section" id="officer-chats">
        <div class="container">
            <div class="common-heading hall-of-fame-heading">
                <div class="trust-seal-wrapper">
                    <div class="trust-seal">
                        <i class="fas fa-award"></i>
                    </div>
                </div>
                
                <h2 class="iconic-title">Voices of <span class="shimmer-text">Success</span></h2>
                
                <p class="iconic-subtitle">
                    <strong>30+ real conversations</strong> from our successful officers. Actual screenshots of actual results.
                </p>
                
                <div class="verification-pill">
                    <span class="pulse-dot"></span> Verified Screenshots
                </div>
            </div>
            
            <div class="mosaic-container">
                <div class="mosaic-grid mosaic-grid-hidden" id="success-mosaic">
                    ${mosaicItems}
                </div>
                
                <div class="mosaic-expand-btn">
                    <a href="#success-wall" class="btn-mosaic-show">View Entire Success Wall</a>
                </div>
            </div>
        </div>

        <!-- Lightbox Modal -->
        <div class="mosaic-lightbox" id="chat-lightbox">
            <button class="lightbox-close"><i class="fas fa-times"></i></button>
            <div class="lightbox-content">
                <img src="" alt="Full Screen Feedback" id="lightbox-img">
            </div>
        </div>
    </section>
    `;
};

export const initOfficerMosaic = () => {
    const grid = document.getElementById('success-mosaic');
    const showMoreBtn = document.getElementById('show-more-mosaic');
    const lightbox = document.getElementById('chat-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    if (!grid) return;

    // 1. Native Lazy Loading is now used via the loading='lazy' attribute.
    // Manual observer removed for better performance and reliability.

    // 2. See More Logic
    showMoreBtn.addEventListener('click', () => {
        grid.classList.toggle('expanded');
        if (grid.classList.contains('expanded')) {
            showMoreBtn.textContent = 'Show Less';
        } else {
            showMoreBtn.textContent = 'View Entire Success Wall';
            grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });

    // 3. Lightbox Logic
    document.querySelectorAll('.mosaic-item').forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-image');
            lightboxImg.src = imgSrc;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scroll
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // ESC key closes lightbox
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
};
