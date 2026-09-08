// Exercise 3: Creating DOM Nodes
// createElement(), append(), prepend(), remove()

const fruitList = document.getElementById("fruit-list");
const cardContainer = document.getElementById("card-container");

// TODO 1: Create a new <li> element, set its textContent to "Orange", and
// append() it to the END of `fruitList`.
const orange = document.createElement("li");
orange.textContent = "Orange";
fruitList.append(orange);

// TODO 2: Create another <li> with textContent "Strawberry" and prepend() it to
// the BEGINNING of `fruitList`.
const strawberry = document.createElement("li");
strawberry.textContent = "Strawberry";
fruitList.prepend(strawberry);

// TODO 3: Create a brand new <div class="card"> with textContent "Card 3 (new!)"
// and append it into `cardContainer`.
// Hint: after creating the element, set its class with `.className = "card"`
// or `.classList.add("card")`.
const newCard = document.createElement("div");
newCard.classList.add("card");
newCard.textContent = "Card 3 (new!)";
cardContainer.append(newCard);

// TODO 4: Select the FIRST .card element with querySelector() and remove() it
// from the page entirely.
const cardToRemove = document.querySelector(".card");
cardToRemove.remove();


// TODO 5 (challenge): Write a function `addFruit(name)` that creates a new <li>
// with the given name and appends it to fruitList. Call it 3 times with different
// fruit names.
function addFruit(name) {
  // your code here
    const li = document.createElement("li");
  li.textContent = name;
  fruitList.append(li);
}

addFruit("Kiwi");
addFruit("Grapes");
addFruit("Pineapple");
