const firstInput = document.querySelector(".calculator__input--first");
const secondInput = document.querySelector(".calculator__input--second");
const resultInput = document.querySelector(".calculator__input--result");

const operations = document.querySelectorAll(".calculator__img");

operations.forEach(img => {
    img.addEventListener("click", () => {
        const a = Number(firstInput.value)
        const b = Number(secondInput.value)
        const operation = img.alt

        if(isNaN(a) || isNaN(b)){
            resultInput.value = "";
            return;
        }

        let result;

        switch (operation){
            case "plus":
            result = a + b;
            break;

            case "minus":
            result = a - b;
            break

            case "multiplication":
            result = a * b;
            break

            case "share":
            if(b === 0){
                resultInput.value = "";
                return;
            }
            result = a / b;
            break
        }
        resultInput.value = result
    })
})
