export const SuccessWallPage = () => {
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
    <section class="subpage-section success-wall-page">
        <!-- Subpage Hero -->
        <div class="subpage-hero" style="--accent: #4f46e5">
            <div class="container">
                <a href="#" class="subpage-back" onclick="window.location.hash='';return false;">
                    <i class="fas fa-arrow-left"></i> Back to Home
                </a>
                <div class="subpage-hero-content">
                    <div class="subpage-icon" style="background: #4f46e5">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <div>
                        <span class="subpage-tamil">வெற்றிச் சுவர்</span>
                        <h1>The Success Wall</h1>
                        <p>A gallery of authentic feedback and selection messages from our successful aspirants.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Mosaic Content -->
        <div class="subpage-content pad-tb">
            <div class="container">
                <div class="mosaic-container">
                    <div class="mosaic-grid" id="success-mosaic">
                        ${mosaicItems}
                    </div>
                </div>
            </div>
        </div>

        <!-- Lightbox Modal (Shared Logic) -->
        <div class="mosaic-lightbox" id="chat-lightbox">
            <button class="lightbox-close"><i class="fas fa-times"></i></button>
            <div class="lightbox-content">
                <img src="" alt="Full Screen Feedback" id="lightbox-img">
            </div>
        </div>
    </section>
    `;
};
