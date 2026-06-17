const screens = document.querySelectorAll(".screen");
const buttons = document.querySelectorAll(".next-btn");

let currentScreen = 0;

buttons.forEach(button => {
    button.addEventListener("click", () => {

        screens[currentScreen].classList.remove("active");

        currentScreen++;

        if (currentScreen < screens.length) {
            screens[currentScreen].classList.add("active");
        }
    });
});