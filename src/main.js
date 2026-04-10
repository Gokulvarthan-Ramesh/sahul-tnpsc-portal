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

function render() {
    const page = getPage();
    const hash = window.location.hash;

    if (page === 'home') {
        app.innerHTML =
            Header() +
            '<main>' +
            Hero() +
            Features() +
            Exams() +
            DailyUpdates() +
            FreeResources() +
            Results() +
            Faculty() +
            Contact() +
            '</main>' +
            Footer();

        initHeroSlider();

        // Handle scroll to section if hash exists
        if (hash && hash !== '#') {
            setTimeout(() => {
                const target = document.querySelector(hash);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
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

    // Trigger reveal for visible elements
    setTimeout(handleReveal, 150);
    handleNavbarScroll(); // Ensure header state is correct on render
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
        // We are on home page, scroll smoothly
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            // Update hash without jumping
            history.pushState(null, null, href);
        }
    } else {
        // We are on a sub-page, navigate back home with the target hash
        // The hashchange will trigger render(), which handles the scroll.
    }
});

// Scroll Reveal
function handleReveal() {
    const elements = document.querySelectorAll('[data-reveal]');
    for (let i = 0; i < elements.length; i++) {
        const el = elements[i];
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('revealed');
        }
    }
}

// Header scroll effect
function handleNavbarScroll() {
    const header = document.getElementById('main-header');
    if (!header) return;
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Scroll listeners
window.addEventListener('scroll', function() {
    handleReveal();
    handleNavbarScroll();
});

// Initial triggers
handleReveal();
handleNavbarScroll();
