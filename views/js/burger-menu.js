addEventListener("load", () => {
    const burger = document.querySelector("#navbar .burger-menu");
    const buttons = document.querySelector("#navbar .buttons");

    burger.addEventListener("click", () => {
        buttons.classList.toggle("active");
    });
})