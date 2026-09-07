// Exercise 2: DOM Node Properties
// textContent, innerHTML, getAttribute/setAttribute, classList, style

const title = document.getElementById("main-title");
const intro = document.querySelector(".intro");
const link = document.getElementById("my-link");
const firstCard = document.querySelector(".card");

// TODO 1: Change the <h1> text using `textContent`.
// title.textContent = "...";


// TODO 2: Change the intro paragraph's HTML using `innerHTML` — make part of the
// text bold with an inline <strong> tag, e.g. "This is <strong>bold</strong>."


// TODO 3: Read the link's current href using getAttribute("href"), log it, then
// change it to "https://developer.mozilla.org" using setAttribute("href", ...).


// TODO 4: Use classList.add() to add the "highlight" class to `firstCard`.
// Then use classList.toggle() to add/remove it again — run this twice and watch
// the card's background color change each time you refresh vs re-run.


// TODO 5: Use classList.contains() to check whether firstCard currently has the
// "highlight" class, and log the boolean result.


// TODO 6: Use the `.style` property to directly set the intro paragraph's color
// to "blue" and fontWeight to "bold" (camelCase for multi-word CSS properties!).
