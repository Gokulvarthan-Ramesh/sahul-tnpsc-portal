export const Header = () => {
  return `
    <header id="main-header" class="main-header fixed-top">
        <div class="container container-header h-cb">
            <div class="dsk-logo">
                <a class="nav-brand" href="#">
                    <img src="/assets/logo.svg" alt="Sahul TNPSC Logo" class="main-logo" width="44" height="44" />
                    <span class="brand-name">Sahul TNPSC Circle</span>
                </a>
            </div>
            <div class="custom-nav" id="main-nav">
                <ul class="nav-list">
                    <li><a href="#home" class="menu-links">Home</a></li>
                    <li><a href="#products" class="menu-links">Courses</a></li>
                    <li><a href="#about" class="menu-links">Why Us</a></li>
                    <li><a href="#faculty" class="menu-links">Faculty</a></li>
                    <li><a href="#contact-section" class="menu-links">Contact</a></li>
                </ul>
            </div>
            <div class="header-actions">
                <ul class="nav-list-right">
                    <li>
                        <a href="tel:+917598242374" class="btn-round-call">
                            <i class="fas fa-phone-alt"></i>
                        </a>
                    </li>
                    <li class="desktop-only-btn">
                        <a href="https://wa.me/917598242374" class="btn-main quote-btn">
                            Join Now <span class="circle"></span>
                        </a>
                    </li>
                </ul>
            </div>
            <button class="mobile-menu-toggle" id="mobile-toggle" aria-label="Toggle navigation">
                <i class="fas fa-bars"></i>
            </button>
        </div>
    </header>
  `;
};

// Mobile menu toggle logic
document.addEventListener('click', (e) => {
  const toggleBtn = e.target.closest('.mobile-menu-toggle');
  const nav = document.getElementById('main-nav');
  
  if (toggleBtn && nav) {
    nav.classList.toggle('active');
    
    const icon = toggleBtn.querySelector('i');
    if (nav.classList.contains('active')) {
      icon.classList.replace('fa-bars', 'fa-times');
    } else {
      icon.classList.replace('fa-times', 'fa-bars');
    }
  }

  // Close menu when clicking a link
  if (e.target.closest('.menu-links') && nav && nav.classList.contains('active')) {
    nav.classList.remove('active');
    const icon = document.querySelector('.mobile-menu-toggle i');
    if (icon) icon.classList.replace('fa-times', 'fa-bars');
  }
});

// Add sticky effect on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('.main-header');
  if (window.scrollY > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});
