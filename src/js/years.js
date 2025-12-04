const inputRef = document.querySelector(".years__input");
const textRef = document.querySelector(".years__text");

inputRef.addEventListener("blur", () => {
     const year = Number(inputRef.value);

    if (!isNaN(year)) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            textRef.textContent = "Ви народилися у високосний рік!";
            textRef.style.color = "green";
        } else {
            textRef.textContent = "Ви народилися не у високосний рік!";
            textRef.style.color = "red";
        }
    } 
});


































