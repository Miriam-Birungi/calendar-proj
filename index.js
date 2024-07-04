const monthNameEl= document.getElementById("month-name");
const dayNameEl= document.getElementById("day-name");
const dayNumEl = document.getElementById("day-num");
const yearEl = document.getElementById("year");
const calendarEl = document.querySelector(".calendar-container");
console.log(calendarEl)
const firstChild = calendarEl.firstElementChild;
console.log(firstChild)


const date= new Date();
console.log(date);

const month = date.getMonth();
console.log(month);

const day = date.
monthNameEl.innerText = date.toLocaleString("en", {month: "long"})

dayNameEl.innerText = date.toLocaleString("en", {weekday: "long"})

dayNumEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();