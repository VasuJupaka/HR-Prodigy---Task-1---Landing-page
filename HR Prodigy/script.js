document.addEventListener('DOMContentLoaded', function() {
    var navMenu = document.querySelector('.navigation-menu');

    
    function handleScroll() {
        if (window.scrollY > 0) {
            navMenu.classList.add('scrolled');
        } else {
            navMenu.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);

    var menuItems = document.querySelectorAll('.navigation-menu li');

    function handleMenuItemHover(event) {
        if (event.type === 'mouseover') {
            this.classList.add('hovered');
        } else if (event.type === 'mouseout') {
            this.classList.remove('hovered');
        }
    }

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('mouseover', handleMenuItemHover);
        menuItem.addEventListener('mouseout', handleMenuItemHover);
    });
});



