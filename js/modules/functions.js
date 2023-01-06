const functions = {
    changeBurger: function () {
        let burgerBtn = document.querySelector('.burger-btn');
        let navbar = document.querySelector('.navbar');

        burgerBtn.onclick = function () {
            navbar.classList.toggle('active');
        }
    }
}

export const changeBurger = functions.changeBurger; 