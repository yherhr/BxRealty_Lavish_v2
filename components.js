/**
 * components.js
 * Injects the shared nav and footer into every page.
 */

const NAV_HTML = `
<nav class="site-nav" id="site-nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <img src="assets/images/bxrealty-logo.png" alt="Bx Realty" />
      <div class="nav-logo-words">
        <strong>BX Realty</strong>
        <span>— Bathurst &amp; Region —</span>
      </div>
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="listings.html">Properties</a></li>
      <li><a href="services.html">Services</a></li>
      <li><a href="pricing.html">Pricing</a></li>
      <li><a href="team.html">Our Team</a></li>
      <li><a href="blog.html">News</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <a href="appraisal.html" class="btn btn-gold nav-cta" id="nav-cta">Get in Touch</a>
    <button class="nav-burger" id="nav-burger" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-drawer" id="nav-drawer">
    <a href="index.html">Home</a>
    <a href="listings.html">Properties</a>
    <a href="services.html">Services</a>
    <a href="pricing.html">Pricing</a>
    <a href="team.html">Our Team</a>
    <a href="blog.html">News</a>
    <a href="contact.html">Contact</a>
    <div class="nav-drawer-cta">
      <a href="appraisal.html" class="btn btn-gold">Get in Touch</a>
    </div>
  </div>
</nav>`;

const FOOTER_HTML = `
<div class="cta-bar">
  <p>Ready to make a move? Call Ellie today — <a href="tel:0498193223">0498 193 223</a></p>
</div>
<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand">
      <div class="footer-logo">
        <img src="assets/images/bxrealty-logo.png" alt="Bx Realty" />
      </div>
      <p>Bx Realty is a dedicated real estate agency serving Bathurst and the surrounding region. Honest, professional property services for buyers, sellers, and investors.</p>
      <div class="social-links">
        <a href="https://www.instagram.com/ellie_agentchapman_realtor/" class="social-link" target="_blank" rel="noopener" aria-label="Instagram">IG</a>
        <a href="https://www.facebook.com/profile.php?id=61573810007004" class="social-link" target="_blank" rel="noopener" aria-label="Facebook">FB</a>
        <a href="https://www.tiktok.com/@ellie.begg.realto" class="social-link" target="_blank" rel="noopener" aria-label="TikTok">TT</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Navigate</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="listings.html">Properties</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="pricing.html">Pricing</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Company</h4>
      <ul>
        <li><a href="team.html">Our Team</a></li>
        <li><a href="blog.html">News &amp; Insights</a></li>
        <li><a href="appraisal.html">Get an Appraisal</a></li>
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <ul>
        <li><a href="tel:0498193223">0498 193 223</a></li>
        <li><a href="mailto:ellie@bxrealty.com.au">ellie@bxrealty.com.au</a></li>
        <li><a href="contact.html">Bathurst, NSW 2795</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <span>&copy; ${new Date().getFullYear()} Bx Realty. All rights reserved.</span>
    <span><a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">Terms of Use</a></span>
  </div>
</footer>
<div class="licence-bar">
  Licence No. [Pending — to be supplied by Bx Realty] &mdash; Bx Realty Pty Ltd
</div>`;

function injectComponents() {
  const navEl    = document.getElementById('site-nav');
  const footerEl = document.getElementById('site-footer');
  if (navEl)    navEl.outerHTML    = NAV_HTML;
  if (footerEl) footerEl.outerHTML = FOOTER_HTML;

  // Mark active nav link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Show desktop CTA on wider screens
  const cta = document.getElementById('nav-cta');
  if (cta && window.innerWidth > 960) cta.style.display = 'inline-flex';

  // Mobile burger toggle
  const burger = document.getElementById('nav-burger');
  const drawer = document.getElementById('nav-drawer');
  if (burger && drawer) {
    burger.addEventListener('click', () => {
      const open = drawer.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      const spans = burger.querySelectorAll('span');
      if (open) {
        spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
        spans[1].style.opacity   = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
      } else {
        spans.forEach(s => (s.style = ''));
      }
    });
  }

  // Scroll shadow on nav
  const nav = document.querySelector('.site-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.style.boxShadow = scrollY > 10
        ? '0 4px 32px rgba(0,0,0,.45)'
        : '0 2px 24px rgba(0,0,0,.35)';
    }, { passive: true });
  }
}

document.addEventListener('DOMContentLoaded', injectComponents);
