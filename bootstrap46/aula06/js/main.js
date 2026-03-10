const openBtn = document.getElementById("openMenu")
const closeBtn = document.getElementById("closeMenu")
const menu = document.getElementById("mobileMenu")

openBtn.addEventListener("click", () => {
menu.classList.add("active")
})

closeBtn.addEventListener("click", () => {
menu.classList.remove("active")
})