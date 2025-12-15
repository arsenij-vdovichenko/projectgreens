const firstInput = document.querySelector(".calculator__input--first")
const secondInput = document.querySelector(".calculator__input--second")
const resulyInput = document.querySelector(".calculator__input--result")


const operations = document.querySelector(".calculator__img")

operations.foreach(img => {
    img.addEventListener("click", () => {
        const a = Number(firstInput.value);
        const b = Number(secondInput.value)
    })
})