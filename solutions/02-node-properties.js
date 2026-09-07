// Solution 2: DOM Node Properties

const title = document.getElementById("main-title");
const intro = document.querySelector(".intro");
const link = document.getElementById("my-link");
const firstCard = document.querySelector(".card");

title.textContent = "Week 4 — DOM Practice (edited!)";

intro.innerHTML = "This is <strong>bold</strong>.";

console.log(link.getAttribute("href")); // "#"
link.setAttribute("href", "https://developer.mozilla.org");

firstCard.classList.add("highlight");
firstCard.classList.toggle("highlight");

console.log(firstCard.classList.contains("highlight"));

intro.style.color = "blue";
intro.style.fontWeight = "bold";
