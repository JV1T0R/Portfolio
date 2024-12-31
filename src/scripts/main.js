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

// Typed JS
var typed = new Typed("#auto-type", {
    strings: ["Systems Analyst", "Developer", "Cybersecurity"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
});
