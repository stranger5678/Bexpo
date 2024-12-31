const shopSearch = document.getElementById('shopSearch');
const shopCards = document.querySelectorAll('.contain-card');

shopSearch.addEventListener('input', () => {
    const searchQuery = shopSearch.value.toLowerCase();
    shopCards.forEach(card => {
        const shopName = card.querySelector('h2').textContent.toLowerCase();
        card.style.display = shopName.includes(searchQuery) ? 'block' : 'none';
    });
});



// Mobile menu toggle logic

const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});