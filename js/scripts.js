document.addEventListener('DOMContentLoaded', function() {
    // Menu Hamburger
    const menu = document.querySelector('.menu-container');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('menu');
    const hamburger = document.querySelector('.hamburger-menu');
    const homeLink = document.querySelector('nav a[href="#home"]');
    let lastScrollTop = 0;

    // Gestion du menu sticky
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        menu.style.top = scrollTop > lastScrollTop ? "-60px" : "0";
        lastScrollTop = scrollTop;
        
        hamburger.classList.toggle('scrolled', scrollTop > 100);
    });

    // Menu burger
    hamburgerMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburgerMenu.classList.toggle('active');
    });

    // Gestion des sous-menus
    document.getElementById('services-link').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.submenu').classList.toggle('active');
    });

    document.getElementById('cabinet-link').addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.submenu2').classList.toggle('active');
    });

    //Scroll
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith("#")) {
                e.preventDefault();
            }
        });
    });

    // Fermer le menu après clic sur Accueil
    homeLink.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            navMenu.classList.remove('active'); 
            hamburgerMenu.classList.remove('active');
        }, 100);
    });

    // Gestion des sections
    const sections = {
        "reflexo-plantaire": document.getElementById('reflexo-plantaire-section'),
        "reflexo-faciale": document.getElementById('reflexo-faciale-section'),
        "reflexo-entreprise": document.getElementById('reflexo-entreprise-section'),
        "Ateliers": document.getElementById('reflexo-ateliers-section'),
        "tarifs": document.getElementById('reflexo-tarifs-section'),
        "deontologie": document.getElementById('reflexo-deontologie-section'),
        "mentions-legales": document.getElementById('reflexo-mentions-section')
    };

    function toggleSection(sectionId) {
        Object.keys(sections).forEach(id => {
            sections[id].style.display = (id === sectionId) ? 'block' : 'none';
        });
        setTimeout(() => {
            sections[sectionId]?.querySelector('h2')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    }

    document.querySelectorAll('.submenu a, .submenu2 a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            if (sections[sectionId]) {
                toggleSection(sectionId);
            }
            setTimeout(() => {
                navMenu.classList.remove('active'); 
                hamburgerMenu.classList.remove('active');
            }, 100);
        });
    });

    // Carrousel
    let currentIndex = 0;
    const carouselContainer = document.querySelector('.carousel-container');
    const tarifCards = Array.from(document.querySelectorAll('.tarif-card'));
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    function updateVisibleCards() {
        const containerWidth = carouselContainer.offsetWidth;
        const cardWidth = tarifCards[0].offsetWidth + 30; // 30px pour la marge
        const visibleCardsCount = Math.floor(containerWidth / cardWidth);

        // Cacher toutes les cartes d'abord
        tarifCards.forEach(card => card.style.display = 'none');

        // Afficher uniquement la carte actuelle
        if (tarifCards[currentIndex]) {
            tarifCards[currentIndex].style.display = 'block';
        }
    }

    function moveCarousel(direction) {
        if (direction === 'next' && currentIndex + 1 < tarifCards.length) {
            // Cacher la carte actuelle
            tarifCards[currentIndex].style.display = 'none';
            currentIndex++;
            // Afficher la carte suivante
            tarifCards[currentIndex].style.display = 'block';
        } 
        else if (direction === 'prev' && currentIndex > 0) {
            // Cacher la carte actuelle
            tarifCards[currentIndex].style.display = 'none';
            currentIndex--;
            // Afficher la carte précédente
            tarifCards[currentIndex].style.display = 'block';
        }

        updateVisibleCards();
    }

    prevButton.addEventListener('click', () => moveCarousel('prev'));
    nextButton.addEventListener('click', () => moveCarousel('next'));

    window.addEventListener('resize', updateVisibleCards);

    // Initialisation au chargement de la page
    window.addEventListener('load', updateVisibleCards);
});



// document.addEventListener('DOMContentLoaded', function() {
//     // Menu Hamburger
//     const menu = document.querySelector('.menu-container');
//     const hamburgerMenu = document.getElementById('hamburger-menu');
//     const navMenu = document.getElementById('menu');
//     const hamburger = document.querySelector('.hamburger-menu');
//     const homeLink = document.querySelector('nav a[href="#home"]');
//     let lastScrollTop = 0;

//     // Gestion du menu sticky
//     window.addEventListener('scroll', () => {
//         let scrollTop = window.scrollY || document.documentElement.scrollTop;
//         menu.style.top = scrollTop > lastScrollTop ? "-60px" : "0";
//         lastScrollTop = scrollTop;
        
//         hamburger.classList.toggle('scrolled', scrollTop > 100);
//     });

//     // Menu burger
//     hamburgerMenu.addEventListener('click', () => {
//         navMenu.classList.toggle('active');
//         hamburgerMenu.classList.toggle('active');
//     });

//     // Gestion des sous-menus
//     document.getElementById('services-link').addEventListener('click', (e) => {
//         e.preventDefault();
//         document.querySelector('.submenu').classList.toggle('active');
//     });

//     document.getElementById('cabinet-link').addEventListener('click', (e) => {
//         e.preventDefault();
//         document.querySelector('.submenu2').classList.toggle('active');
//     });

//     // Smooth scroll
//     document.querySelectorAll('nav a').forEach(link => {
//         link.addEventListener('click', function (e) {
//             const targetId = this.getAttribute('href');
//             if (targetId.startsWith("#")) {
//                 e.preventDefault();
//                 document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
//             }
//         });
//     });

//     // Fermer le menu après clic sur Accueil
//     homeLink.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector('#home').scrollIntoView({ behavior: 'smooth' });
//         setTimeout(() => {
//             navMenu.classList.remove('active'); 
//             hamburgerMenu.classList.remove('active');
//         }, 100);
//     });

//     // Carrousel
//     let currentIndex = 0;
//     const carouselContainer = document.querySelector('.carousel-container');
//     const tarifCards = Array.from(document.querySelectorAll('.tarif-card'));
//     const prevButton = document.querySelector('.carousel-prev');
//     const nextButton = document.querySelector('.carousel-next');

//     let visibleCardsCount = 1;

//     // Fonction pour calculer le nombre de cartes visibles
//     function calculateVisibleCards() {
//         const containerWidth = carouselContainer.offsetWidth;
//         const cardWidth = tarifCards[0].offsetWidth + 30; // 30px pour la marge
//         visibleCardsCount = Math.floor(containerWidth / cardWidth);
//     }

//     function updateVisibleCards() {
//         // Calcul du nombre de cartes visibles à chaque redimensionnement
//         calculateVisibleCards();

//         // Cacher toutes les cartes d'abord
//         tarifCards.forEach(card => card.style.display = 'none');

//         // Afficher uniquement les cartes visibles en fonction du nombre calculé
//         for (let i = currentIndex; i < currentIndex + visibleCardsCount && i < tarifCards.length; i++) {
//             tarifCards[i].style.display = 'block';
//         }
//     }

//     function moveCarousel(direction) {
//         if (direction === 'next') {
//             // Si on n'a pas atteint la fin du tableau
//             if (currentIndex + visibleCardsCount < tarifCards.length) {
//                 currentIndex++;  // On avance l'index
//             }
//         } 
//         else if (direction === 'prev') {
//             // Si on n'est pas au tout début du tableau
//             if (currentIndex > 0) {
//                 currentIndex--;  // On recule l'index
//             }
//         }
//         updateVisibleCards();  // Mise à jour des cartes visibles
//     }

//     prevButton.addEventListener('click', () => moveCarousel('prev'));
//     nextButton.addEventListener('click', () => moveCarousel('next'));

//     // Lorsque l'on redimensionne l'écran, on met à jour le nombre de cartes visibles
//     window.addEventListener('resize', updateVisibleCards);

//     // Initialisation au chargement de la page
//     window.addEventListener('load', updateVisibleCards);
// });
