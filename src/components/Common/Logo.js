export const LogoSVG = (className = "main-logo") => {
  return `
    <svg width="44" height="44" viewBox="0 0 100 100" class="${className}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#8e2de2;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#4a00e0;stop-opacity:1" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#logo-grad)" />
      <path d="M30 35H70C72.2091 35 74 36.7909 74 39V65C74 67.2091 72.2091 69 70 69H30C27.7909 69 26 67.2091 26 65V39C26 36.7909 27.7909 35 30 35Z" fill="white" />
      <path d="M50 35V69" stroke="#8e2de2" stroke-width="2" />
      <path d="M34 45H42M34 52H42M34 59H42M58 45H66M58 52H66M58 59H66" stroke="#8e2de2" stroke-width="2" stroke-linecap="round" />
      <path d="M45 25L50 20L55 25" stroke="white" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" />
      <text x="50" y="88" font-family="Poppins, sans-serif" font-weight="800" font-size="20" fill="white" text-anchor="middle">STC</text>
    </svg>
  `;
};
