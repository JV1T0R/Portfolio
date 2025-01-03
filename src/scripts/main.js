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

// Under construction modal toggler
function openModal() {
    const modal = document.getElementById('notice-modal');
    const modalContent = modal.querySelector('.transform');

    // Mostra o fundo escuro
    modal.classList.remove('hidden');
    modal.classList.remove('bg-opacity-0');
    modal.classList.add('bg-opacity-50');

    // Anima o conteúdo do modal (opacidade e escala)
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
    }, 100); // Pequeno atraso para suavizar a sequência
}

function closeModal() {
    const modal = document.getElementById('notice-modal');
    const modalContent = modal.querySelector('.transform');

    // Oculta o conteúdo do modal (opacidade e escala)
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');

    // Torna o fundo transparente
    setTimeout(() => {
        modal.classList.remove('bg-opacity-50');
        modal.classList.add('bg-opacity-0');
    }, 300); // Espera que o conteúdo termine antes de iniciar o fundo

    // Esconde o modal completamente após a transição
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 500); // Tempo deve ser igual ao `duration-700`
}

// Typed JS
var typed = new Typed("#auto-type", {
    strings: ["Systems Analyst", "Developer", "Cybersecurity"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
    loopCount: Infinity,
});
