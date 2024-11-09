// Modal functionality
const modal = document.getElementById('shareModal');
const menuDots = document.querySelector('.menu-dots');
const closeModal = document.querySelector('.close-modal');
const linkMenus = document.querySelectorAll('.link-menu');

menuDots.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

linkMenus.forEach(menu => {
    menu.addEventListener('click', (e) => {
        e.preventDefault();
        modal.style.display = 'block';
    });
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});