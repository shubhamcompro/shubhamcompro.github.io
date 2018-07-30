function disableScrolling() {
    let x = window.scrollX;
    let y = window.scrollY;
    window.onscroll = function () {
        window.scrollTo(x, y);
    };
}

function enableScrolling() {
    window.onscroll = function () {
    };
}


document.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM Loaded');

    function cb() {
        let userMenu = document.getElementById('user-menu')
            , overlay = document.getElementById('overlay');

        const _ = (userMenu.style.display === 'block' ? enableScrolling() : disableScrolling());
        overlay.style.display = (userMenu.style.display === 'block' ? 'none' : 'block');
        userMenu.style.display = (userMenu.style.display === 'block' ? 'none' : 'block');
    }

    let toggleBtns = document.getElementsByClassName('toggle'),
        overlay = document.getElementById('overlay');

    toggleBtns[0].addEventListener('click',cb);
    toggleBtns[1].addEventListener('click', cb);
    overlay.addEventListener('click', cb);
});

