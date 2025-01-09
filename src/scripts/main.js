// Toggler header button
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('toggleMenu').addEventListener('click', function () {
        const menu = document.getElementById('sidebarMenu');
        const menuIcon = document.getElementById('menuIcon');

        menu.classList.toggle('-translate-x-full');

        menuIcon.classList.add('rotate-90');
        setTimeout(() => {
            if (menuIcon.classList.contains('fa-bars')) {
                menuIcon.classList.remove('fa-bars');
                menuIcon.classList.add('fa-xmark');
            } else {
                menuIcon.classList.remove('fa-xmark');
                menuIcon.classList.add('fa-bars');
            }
            menuIcon.classList.remove('rotate-90');
        }, 150);
    });
});

function openModal() {
    const modal = document.getElementById('notice-modal');
    const modalContent = modal.querySelector('.transform');

    modal.classList.remove('hidden');
    modal.classList.remove('bg-opacity-0');
    modal.classList.add('bg-opacity-50');

    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 100); 
}

function closeModal() {
    const modal = document.getElementById('notice-modal');
    const modalContent = modal.querySelector('.transform');

    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');

    setTimeout(() => {
        modal.classList.remove('bg-opacity-50');
        modal.classList.add('bg-opacity-0');
    }, 300); 

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 500); 
}

// Typed JS
var typed = new Typed("#auto-type", {
    strings: ["Systems Analysys","Cybersecurity", "Development"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
});
