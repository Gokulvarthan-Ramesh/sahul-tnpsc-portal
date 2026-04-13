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
import './components/Results/OfficerChats.css';
import './components/Faculty/Faculty.css';
import './components/YouTubeFeed/YouTubeFeed.css';
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
import { OfficerChats, initOfficerMosaic } from './components/Results/OfficerChats.js';
import { SuccessWallPage } from './components/Results/SuccessWallPage.js';
import { Faculty } from './components/Faculty/Faculty.js';
import { YouTubeFeed, initYouTubeFeed } from './components/YouTubeFeed/YouTubeFeed.js';
import { Contact, initContactForm } from './components/Contact/Contact.js';
import { Footer } from './components/Footer/Footer.js';
import { Breadcrumbs } from './components/Common/Breadcrumbs.js';
import { ExamCalendar } from './components/Exams/ExamCalendar.js';
import { PlannerPage } from './components/Exams/PlannerPage.js';

// App element
const app = document.getElementById('app');

// Sub-page routes
const dailySubPages = ['daily-ca', 'exam-notifications', 'important-pdfs', 'practice-questions'];
const freeSubPages = ['free-pdfs', 'free-notes', 'free-pyq', 'free-tests'];
const resultSubPages = ['success-wall'];
const plannerSubPages = ['planner-2026'];
const subPages = dailySubPages.concat(freeSubPages).concat(resultSubPages).concat(plannerSubPages);

function getPage() {
    const hash = window.location.hash.slice(1);
    for (let i = 0; i < subPages.length; i++) {
        if (subPages[i] === hash) return hash;
    }
    return 'home';
}

function updateMetadata(page) {
    const titles = {
        'home': 'Best TNPSC Coaching Centre in Tamil Nadu | 2026 Selection Batch | Sahul TNPSC Circle',
        'daily-ca': 'Daily Current Affairs for TNPSC 2026 | Top Academy Tamil Nadu',
        'exam-notifications': 'TNPSC Exam Notifications 2026 | Group 1, 2, 4 | Sahul TNPSC Circle',
        'important-pdfs': '2026 TNPSC Study Materials & PDF Notes Download | Free Resources',
        'practice-questions': 'TNPSC Practice Questions & Mock Tests Online',
        'free-pdfs': 'Free TNPSC Resource Center | Sahul Academy',
        'free-notes': 'Subject-wise Coaching Notes for TNPSC Exams',
        'free-pyq': 'TNPSC Previous Year Question Papers with Answers',
        'free-tests': 'Best Free TNPSC Online Test Series',
        'success-wall': 'Hall of Victory: 450+ Officers Produced | Sahul TNPSC Circle Results',
        'planner-2026': 'TNPSC Annual Planner 2026 PDF Download | Official Exam Schedule'
    };

    const descriptions = {
        'home': 'Expert TNPSC coaching for Group 1, 2, 4 and VAO across Tamil Nadu. Online and Offline classes with expert mentorship under SAHUL HAMMEED Sir.',
        'daily-ca': 'Access daily TNPSC focused current affairs curated by subject experts. Stay ahead in your preparation.',
        'exam-notifications': 'Latest update on TNPSC notifications, exam dates, results, and curriculum changes.',
        'important-pdfs': 'Download essential PDFs including Samacheer Kalvi books, study notes, and shortcut materials.',
        'practice-questions': 'Test your knowledge with daily practice questions focused on recent TNPSC trends.',
        'planner-2026': 'Download the official TNPSC Annual Planner 2026 PDF. Check tentative dates for Group 1, 2, 4 and VAO notifications.'
    };

    document.title = titles[page] || titles['home'];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute('content', descriptions[page] || descriptions['home']);
    }

    // Update Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
        canonical.setAttribute('href', `https://sahultnpsc.com/${page === 'home' ? '' : '#' + page}`);
    }

    // Dynamic Breadcrumb Schema
    if (page !== 'home') {
        const schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://sahultnpsc.com/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": titles[page],
                    "item": `https://sahultnpsc.com/#${page}`
                }
            ]
        };
        const scriptId = 'dynamic-breadcrumb-schema';
        let script = document.getElementById(scriptId);
        if (script) script.remove();
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        script.text = JSON.stringify(schema);
        document.head.appendChild(script);

        // SiteNavigationElement for dynamic subpages
        const navSchema = {
            "@context": "https://schema.org",
            "@type": "SiteNavigationElement",
            "name": titles[page],
            "url": `https://sahultnpsc.com/#${page}`
        };
        const navScriptId = 'dynamic-nav-schema';
        let navScript = document.getElementById(navScriptId);
        if (navScript) navScript.remove();
        navScript = document.createElement('script');
        navScript.id = navScriptId;
        navScript.type = 'application/ld+json';
        navScript.text = JSON.stringify(navSchema);
        document.head.appendChild(navScript);
    }
}

function render() {
    const page = getPage();
    const hash = window.location.hash;

    updateMetadata(page);

    if (page === 'home') {
        // Optimized Progressive Rendering: Paint Above-the-Fold content first
        const aboveFold = Header() + '<main>' + Hero() + '</main>' + Footer();
        const everything = Header() + '<main>' + Hero() + Features() + Exams() + ExamCalendar() + DailyUpdates() + FreeResources() + OfficerChats() + Results() + Faculty() + Contact() + '</main>' + Footer();
        
        if (hash && hash !== '#') {
            // If user is jumping to a section, render all at once
            app.innerHTML = everything;
        } else {
            // Default: Progressive render to avoid long-task blocking (>50ms)
            app.innerHTML = aboveFold;
            requestAnimationFrame(() => {
                const main = app.querySelector('main');
                if (main) {
                    main.innerHTML = Hero() + Features() + Exams() + ExamCalendar() + DailyUpdates() + FreeResources() + OfficerChats() + Results() + Faculty() + Contact();
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
        if (!subPageContent) {
            for (var k = 0; k < plannerSubPages.length; k++) {
                if (plannerSubPages[k] === page) { subPageContent = PlannerPage(); break; }
            }
        }
        if (!subPageContent) {
            if (page === 'success-wall') { subPageContent = SuccessWallPage(); }
        }

        app.innerHTML =
            Header() +
            '<main>' +
            Breadcrumbs(page) +
            subPageContent +
            '</main>' +
            Footer();
        
        window.scrollTo(0, 0);
    }

    // Re-initialize dynamic behaviors after the current paint cycle
    requestAnimationFrame(() => {
        init();
        // Technical SEO: Pre-fetch sub-page resources once main content is loaded
        if (window.requestIdleCallback) {
            window.requestIdleCallback(() => {
                const assets = [
                    '/assets/tnpsc_hero.png',
                    '/assets/tnpsc_arambam.png',
                    '/assets/tnpsc_vithai.png'
                ];
                assets.forEach(asset => {
                    const link = document.createElement('link');
                    link.rel = 'prefetch';
                    link.href = asset;
                    document.head.appendChild(link);
                });
            });
        }
    });
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
    initOfficerMosaic(); // Initialize gallery logic on all pages
    initContactForm(); // Initialize contact form logic
}

// Scroll listeners (Passive for performance)
window.addEventListener('scroll', handleNavbarScroll, { passive: true });

// Initial execute
render();

// Routing
window.addEventListener('hashchange', render);
