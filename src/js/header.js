// const labelRef = document.querySelector(".hellow__label")
// const checkbox = document.querySelector("#hellow__btn")


// labelRef.addEventListener("click", ()=>{
//     document.body.classList.toggle("active")
// })



const checkbox = document.querySelector("#hellow__btn");
const sun = document.querySelector(".hellow__sun");
const moon = document.querySelector(".hellow__monthn");


const themeTexts = document.querySelectorAll(".theme-text");










checkbox.addEventListener("change", () => {
    document.body.classList.toggle("active");

    // Логіка для іконок
    if (checkbox.checked) {
        sun.style.transform = "translateX(30px) rotate(90deg)";
        sun.style.opacity = "0";
        moon.style.transform = "translateX(0) rotate(0deg)";
        moon.style.opacity = "1";

        // Проходимо циклом по кожному знайденому тексту і робимо його білим
        themeTexts.forEach(text => {
            text.style.color = "#ffffff";
        });

    } else {
        sun.style.transform = "translateX(0) rotate(0deg)";
        sun.style.opacity = "1";
        moon.style.transform = "translateX(-30px) rotate(-90deg)";
        moon.style.opacity = "0";

        // Повертаємо всі тексти на чорний
        themeTexts.forEach(text => {
            text.style.color = "#000000";
        });
    }
});