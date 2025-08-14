const menu = document.getElementById("menu")
const miniUl = document.querySelector(".miniUl")
const dropClose = document.querySelectorAll(".dropClose")


menu.addEventListener("click", () => {
    miniUl.classList.toggle("addHeight")
    menu.classList.toggle("rotateX")
})


dropClose.forEach((item) => {
    item.addEventListener("click", () => {
        const dropDown = item.parentElement.parentElement.lastElementChild
        item.classList.toggle("rotated")
        if (dropDown.style.height === "" || dropDown.style.height === "0px") {
            dropDown.style.height = dropDown.scrollHeight + "px"

            const setAuto = () => {
                dropDown.style.height = "auto"
            }

            dropDown.addEventListener("transitioned", setAuto)

            dropDown.removeEventListener("transitioned",  setAuto)
        } else {
            dropDown.style.height = dropDown.scrollHeight + "px"
            dropDown.offsetHeight;
            dropDown.style.height = "0px"
        }
        console.log(dropDown.scrollHeight);
    })
})