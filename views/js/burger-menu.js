const button = document.querySelector("#navbar .buttons");
console.log(button);

button.addEventListener("click", () => {
    console.log(button);
    console.log("Hey!");
    button.classList.toggle("active");
});