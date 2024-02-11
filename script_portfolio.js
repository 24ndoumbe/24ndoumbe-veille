$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    }); 

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["DEVELOPPEMENT WEB"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["DEVELOPPEMENT WEB"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});




// Sélectionner tous les boutons "Voir plus"
const seeMoreButtons = document.querySelectorAll('.see-more-btn');

// Parcourir chaque bouton et ajouter un écouteur d'événements au clic
seeMoreButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Sélectionner l'élément parent du bouton (la boîte) et chercher l'élément .additional-text
        const additionalText = button.parentNode.querySelector('.additional-text');
        
        // Si additionalText est visible, le masquer; sinon, l'afficher
        if (additionalText.style.display === 'block') {
            additionalText.style.display = 'none';
            button.innerText = 'Voir plus';
        } else {
            additionalText.style.display = 'block';
            button.innerText = 'Voir moins';
        }
    });
});
