export const YouTubeFeed = () => {
  return `
    <section class="section youtube-section pad-tb bg-white" id="youtube-feed">
        <div class="container text-center">
            <div class="common-heading">
                <span>LATEST VIDEOS / சமீபத்திய வீடியோக்கள்</span>
                <h2>Watch Our Recent Sessions <i class="fab fa-youtube" style="color: #ff0000"></i></h2>
                <p class="heading-subtitle">Stay updated with our latest coaching sessions and exam strategies updated automatically.</p>
            </div>
            
            <div id="yt-loader" class="yt-loader-container">
                <div class="yt-skeleton-grid">
                    <div class="skeleton-card"></div>
                    <div class="skeleton-card"></div>
                    <div class="skeleton-card"></div>
                </div>
            </div>

            <div class="row grid-gap" id="yt-videos-container"></div>
            
            <div class="mt-60 text-center">
                <a href="https://youtube.com/@sahultnpsc" target="_blank" class="btn-outline">
                    Browse All Videos <i class="fas fa-external-link-alt"></i>
                </a>
            </div>
        </div>
    </section>
  `;
};

// YouTube Data Integration Logic
export const initYouTubeFeed = async () => {
    const API_KEY = 'AIzaSyD6i-VDCaZdzX-1Pa9VWu9Kn8XlsZ-pziM'; // User provided key
    const CHANNEL_ID = 'UCFiytd1YYor74i5mqZI3Yqw';
    const MAX_RESULTS = 3;
    const container = document.getElementById('yt-videos-container');
    const loader = document.getElementById('yt-loader');

    if (!container) return;

    // Preview Mode Data (Mock)
    const mockVideos = [
        {
            id: { videoId: 'dQw4w9WgXcQ' },
            snippet: {
                title: 'LIVE: TNPSC Group 4 Full Strategy & Study Plan 2025',
                thumbnails: { high: { url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=480&auto=format&fm=webp' } },
                publishedAt: new Date().toISOString(),
                liveBroadcastContent: 'upcoming'
            }
        },
        {
            id: { videoId: 'dQw4w9WgXcQ' },
            snippet: {
                title: 'Daily Current Affairs | Top 10 News for Group 1 & 2',
                thumbnails: { high: { url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=480&auto=format&fm=webp' } },
                publishedAt: new Date(Date.now() - 86400000).toISOString(),
                liveBroadcastContent: 'none'
            }
        },
        {
            id: { videoId: 'dQw4w9WgXcQ' },
            snippet: {
                title: 'Maths Shortcuts: Solve 25/25 in Mental Ability',
                thumbnails: { high: { url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=480&auto=format&fm=webp' } },
                publishedAt: new Date(Date.now() - 172800000).toISOString(),
                liveBroadcastContent: 'none'
            }
        }
    ];

    const renderVideos = (videos, isPreview = false) => {
        let html = isPreview ? `
            <div class="col-12 text-center mb-4">
                <div class="preview-mode-tag"><i class="fas fa-eye"></i> Layout Preview (Live connection requires API Key)</div>
            </div>
        ` : '';
        
        videos.forEach(video => {
            const videoId = video.id.videoId;
            const title = video.snippet.title;
            const thumb = video.snippet.thumbnails.high.url;
            const liveStatus = video.snippet.liveBroadcastContent;
            const date = new Date(video.snippet.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

            // Badge logic
            let badgeHtml = '';
            if (liveStatus === 'upcoming') {
                badgeHtml = '<span class="yt-badge upcoming">Upcoming Premiere</span>';
            } else if (liveStatus === 'live') {
                badgeHtml = '<span class="yt-badge live"><i class="fas fa-circle"></i> Live Now</span>';
            }

            html += `
                <div class="col-lg-4 col-md-4 col-sm-6" data-reveal>
                    <div class="yt-video-card">
                        <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank" class="yt-thumb-link">
                            <div class="yt-thumb-container">
                                ${badgeHtml}
                                <img src="${thumb}" alt="${title}" loading="lazy">
                                <div class="yt-play-btn"><i class="fas fa-play"></i></div>
                            </div>
                        </a>
                        <div class="yt-content">
                            <span class="yt-date">${date}</span>
                            <h4><a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">${title}</a></h4>
                        </div>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    };

    if (API_KEY === 'YOUR_YOUTUBE_API_KEY_HERE') {
        // Show Mock Data in Preview Mode
        renderVideos(mockVideos, true);
        if (loader) loader.style.display = 'none';
        return;
    }

    try {
        // Fetch with order=date to get newest first (including upcoming)
        const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video`);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            renderVideos(data.items, false);
        } else {
            container.innerHTML = '<p class="text-center w-100">No videos found recently.</p>';
        }
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        // Fallback to preview even on error to keep the UI beautiful
        renderVideos(mockVideos, true);
    } finally {
        if (loader) loader.style.display = 'none';
    }
};
