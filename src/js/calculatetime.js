const btnRef = document.querySelector("#searchBtn")



btnRef.addEventListener("click", (e) => {
  const inputRef = document.querySelector("#numInput").value.trim();
  const minutesRef = parseInt(inputRef);

  if (isNaN(minutesRef) || minutesRef < 0) {
    alert("Введіть коректне число хвилин!");
    return;
  }

  const hours = Math.floor(minutesRef / 60);
  const mins = minutesRef % 60;
  document.querySelector("#time").textContent = `${hours}:${mins}`;
});