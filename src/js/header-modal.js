const imgRef = document.querySelector(".header-modal__img")
const modalRef = document.querySelector(".header-modal")
const inputRef = document.querySelector(".header-modal__input")
const spanRef = document.querySelector(".hellow__span")
const btnRef = document.querySelector(".header-modal__btn")





imgRef.addEventListener("click", () => {
    modalRef.style.display = "none";
});


btnRef.addEventListener("click", () => {
    spanRef.textContent = inputRef.value;
});