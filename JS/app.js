const menu = document.getElementById("menu")
const miniUl = document.querySelector(".miniUl")

console.log(miniUl);

menu.addEventListener("click", () => {
    miniUl.classList.toggle("addHeight")
    menu.classList.toggle("rotateX")
})