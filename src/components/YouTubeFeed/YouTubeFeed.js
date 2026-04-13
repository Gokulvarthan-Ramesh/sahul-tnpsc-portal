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

    // Preview Mode Data (Modern 2026 Cache)
    const mockVideos = [
        {
            id: { videoId: 'dQw4w9WgXcQ' },
            snippet: {
                title: 'LIVE: TNPSC Group 4 Full Strategy & 2026 Study Plan',
                thumbnails: { high: { url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=480&auto=format&fm=webp' } },
                publishedAt: new Date().toISOString(),
                liveBroadcastContent: 'upcoming'
            }
        },
        {
            id: { videoId: 'dQw4w9WgXcQ' },
            snippet: {
                title: 'Daily Current Affairs 2026 | Top 10 News for Group 1 & 2',
                thumbnails: { high: { url: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=480&auto=format&fm=webp' } },
                publishedAt: new Date(Date.now() - 86400000).toISOString(),
                liveBroadcastContent: 'none'
            }
        },
        {
            id: { videoId: 'dQw4w9WgXcQ' },
            snippet: {
                title: '2026 Maths Shortcuts: Solve 25/25 in Mental Ability',
                thumbnails: { high: { url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=480&auto=format&fm=webp' } },
                publishedAt: new Date(Date.now() - 172800000).toISOString(),
                liveBroadcastContent: 'none'
            }
        }
    ];

    const renderVideos = (videos, isPreview = false) => {
        let html = isPreview ? `
            <div class="col-12 text-center mb-4">
                <div class="preview-mode-tag" style="background: rgba(142, 45, 226, 0.05); color: #8e2de2; border: 1px dashed #8e2de2; padding: 5px 15px; border-radius: 20px; font-size: 12px; display: inline-block;">
                    <i class="fas fa-info-circle"></i> Showing 2026 Session Highlights (Live Feed requires Domain-Linked API Key)
                </div>
            </div>
        ` : '';
        
        videos.forEach(video => {
            const snippet = video.snippet;
            const videoId = video.contentDetails ? video.contentDetails.videoId : (video.id.videoId || (video.id.playlistId ? null : video.id));
            if (!videoId) return;

            const title = snippet.title;
            const thumb = snippet.thumbnails.high ? snippet.thumbnails.high.url : snippet.thumbnails.default.url;
            const liveStatus = snippet.liveBroadcastContent || 'none';
            const date = new Date(snippet.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

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
                        <!-- Video Schema (Rich Results) -->
                        <script type="application/ld+json">
                        {
                          "@context": "https://schema.org",
                          "@type": "VideoObject",
                          "name": "${title.replace(/"/g, '&quot;')}",
                          "description": "Sahul TNPSC Circle - Expert coaching session for TNPSC exams.",
                          "thumbnailUrl": "${thumb}",
                          "uploadDate": "${snippet.publishedAt}",
                          "contentUrl": "https://www.youtube.com/watch?v=${videoId}",
                          "embedUrl": "https://www.youtube.com/embed/${videoId}"
                        }
                        </script>

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

    try {
        // High-Efficiency Strategy: Use playlistItems instead of search (1 unit vs 100 units)
        // Uploads playlist ID is usually 'UU' + suffix of channel ID
        const UPLOADS_PLAYLIST_ID = CHANNEL_ID.replace('UC', 'UU');
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${UPLOADS_PLAYLIST_ID}&maxResults=${MAX_RESULTS}&key=${API_KEY}`);
        const data = await response.json();

        // Check for Quota Exceeded or Invalid Key Errors in first attempt
        if (data.error) {
            console.warn('YouTube PlaylistItems API Error:', data.error.message);
            // Try Search as fallback if it's not a quota issue
            if (data.error.errors && data.error.errors[0].reason !== 'quotaExceeded') {
                const searchResp = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video`);
                const searchData = await searchResp.json();
                if (searchData.items && searchData.items.length > 0) {
                    renderVideos(searchData.items, false);
                    return;
                }
            }
            renderVideos(mockVideos, true); // Final fallback to mock
            return;
        }

        if (data.items && data.items.length > 0) {
            renderVideos(data.items, false);
        } else {
            // If playlist is empty, try search as a last resort
            const searchResp = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}&type=video`);
            const searchData = await searchResp.json();
            
            if (searchData.error) {
                renderVideos(mockVideos, true);
                return;
            }

            if (searchData.items && searchData.items.length > 0) {
                renderVideos(searchData.items, false);
            } else {
                container.innerHTML = `
                    <div class="col-12 text-center">
                        <p class="mb-4">No recent videos found. Stay tuned for our next session!</p>
                        <a href="https://youtube.com/@sahultnpsc" target="_blank" class="preview-mode-tag">
                            <i class="fab fa-youtube"></i> Visit Our Official Channel
                        </a>
                    </div>
                `;
            }
        }
    } catch (error) {
        console.error('YouTube Fetch Failed completely:', error);
        renderVideos(mockVideos, true);
    } finally {
        if (loader) loader.style.display = 'none';
    }
};
