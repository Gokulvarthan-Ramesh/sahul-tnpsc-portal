// Import Component Styles
import './style.css';
import './components/Header/Header.css';
import './components/Hero/Hero.css';
import './components/Features/Features.css';
import './components/Exams/Exams.css';
import './components/DailyUpdates/DailyUpdates.css';
import './components/DailyUpdates/DailyUpdatesPage.css';
import './components/FreeResources/FreeResources.css';
import './components/Results/Results.css';
import './components/Faculty/Faculty.css';
import './components/Contact/Contact.css';
import './components/Footer/Footer.css';

// Import Components
import { Header } from './components/Header/Header.js';
import { Hero, initHeroSlider } from './components/Hero/Hero.js';
import { Features } from './components/Features/Features.js';
import { Exams } from './components/Exams/Exams.js';
import { DailyUpdates } from './components/DailyUpdates/DailyUpdates.js';
import { DailyUpdatesPage } from './components/DailyUpdates/DailyUpdatesPage.js';
import { FreeResources } from './components/FreeResources/FreeResources.js';
import { FreeResourcesPage } from './components/FreeResources/FreeResourcesPage.js';
import { Results } from './components/Results/Results.js';
import { Faculty } from './components/Faculty/Faculty.js';
import { Contact } from './components/Contact/Contact.js';
import { Footer } from './components/Footer/Footer.js';

// App element
const app = document.getElementById('app');

// Sub-page routes
const dailySubPages = ['daily-ca', 'exam-notifications', 'important-pdfs', 'practice-questions'];
const freeSubPages = ['free-pdfs', 'free-notes', 'free-pyq', 'free-tests'];
const subPages = dailySubPages.concat(freeSubPages);

function getPage() {
    const hash = window.location.hash.slice(1);
    for (let i = 0; i < subPages.length; i++) {
        if (subPages[i] === hash) return hash;
    }
    return 'home';
}

function updateMetadata(page) {
    const titles = {
        'home': 'Sahul TNPSC | Top TNPSC Coaching in Tamil Nadu (Group 1, 2, 4 & VAO)',
        'daily-ca': 'Daily Current Affairs | Sahul TNPSC Circle',
        'exam-notifications': 'TNPSC Exam Notifications & Results 2025 | Sahul TNPSC',
        'important-pdfs': 'Free TNPSC Study Materials & PDF Notes | Sahul TNPSC',
        'practice-questions': 'TNPSC Practice Questions & Mock Tests | Sahul TNPSC',
        'free-pdfs': 'Free TNPSC PDFs & Resources | Sahul TNPSC',
        'free-notes': 'Subject-wise TNPSC Notes | Sahul TNPSC',
        'free-pyq': 'TNPSC Previous Year Question Papers | Sahul TNPSC',
        'free-tests': 'Free Online TNPSC Mock Tests | Sahul TNPSC'
    };

    const descriptions = {
        'home': 'Expert TNPSC coaching for Group 1, 2, 4 and VAO across Tamil Nadu. Online and Offline classes with expert mentorship.',
        'daily-ca': 'Stay updated with TNPSC-focused current affairs curated daily by our expert mentors.',
        'exam-notifications': 'Stay informed with the latest TNPSC exam notifications, results, and hall ticket updates.',
        'important-pdfs': 'Download essential TNPSC study materials and PDF notes for all competitive exams.',
        'practice-questions': 'Improve your score with topic-wise TNPSC practice questions and detailed explanations.'
    };

    document.title = titles[page] || titles['home'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', descriptions[page] || descriptions['home']);
    }
}

function render() {
    const page = getPage();
    const hash = window.location.hash;

    updateMetadata(page);

    if (page === 'home') {
        // Optimized Progressive Rendering: Paint Above-the-Fold content first
        const aboveFold = Header() + '<main>' + Hero() + '</main>' + Footer();
        const everything = Header() + '<main>' + Hero() + Features() + Exams() + DailyUpdates() + FreeResources() + Results() + Faculty() + Contact() + '</main>' + Footer();
        
        if (hash && hash !== '#') {
            // If user is jumping to a section, render all at once
            app.innerHTML = everything;
        } else {
            // Default: Progressive render to avoid long-task blocking (>50ms)
            app.innerHTML = aboveFold;
            requestAnimationFrame(() => {
                const main = app.querySelector('main');
                if (main) {
                    main.innerHTML = Hero() + Features() + Exams() + DailyUpdates() + FreeResources() + Results() + Faculty() + Contact();
                }
            });
        }
        
        initHeroSlider();

        // Handle scroll to section if hash exists
        if (hash && hash !== '#') {
            requestAnimationFrame(() => {
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        } else {
            window.scrollTo(0, 0);
        }
    } else {
        // Determine which sub-page renderer to use
        var subPageContent = '';
        for (var i = 0; i < dailySubPages.length; i++) {
            if (dailySubPages[i] === page) { subPageContent = DailyUpdatesPage(page); break; }
        }
        if (!subPageContent) {
            for (var j = 0; j < freeSubPages.length; j++) {
                if (freeSubPages[j] === page) { subPageContent = FreeResourcesPage(page); break; }
            }
        }

        app.innerHTML =
            Header() +
            '<main>' +
            subPageContent +
            '</main>' +
            Footer();
        
        window.scrollTo(0, 0);
    }

    // Re-initialize dynamic behaviors after the current paint cycle
    requestAnimationFrame(init);
}

// Initial render
render();

// Route on hash change
window.addEventListener('hashchange', function() {
    render();
});

// Global click handler using event delegation
document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const href = link.getAttribute('href');
    if (!href || href === '#') return;

    const pageName = href.slice(1);

    // Sub-page navigation
    for (let i = 0; i < subPages.length; i++) {
        if (subPages[i] === pageName) {
            e.preventDefault();
            e.stopPropagation();
            if (window.location.hash === '#' + pageName) {
                render();
            } else {
                window.location.hash = pageName;
            }
            return;
        }
    }

    // Section scroll logic
    if (getPage() === 'home') {
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            // Update hash without jumping
            history.pushState(null, null, href);
        }
    }
});

// Scroll Reveal using Intersection Observer (Prevents Forced Reflow)
function initScrollReveal() {
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target); // Reveal once
            }
        });
    };

    const observer = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('[data-reveal]').forEach(el => {
        observer.observe(el);
    });
}

// Header scroll effect
function handleNavbarScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;
    
    // Use requestAnimationFrame to ensure style updates don't block the UI
    requestAnimationFrame(() => {
        if (window.scrollY > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
}

// Initial behaviors
function init() {
    initScrollReveal();
    handleNavbarScroll();
}

// Scroll listeners (Passive for performance)
window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// Initial execute
render();

// Routing
window.addEventListener('hashchange', render);
