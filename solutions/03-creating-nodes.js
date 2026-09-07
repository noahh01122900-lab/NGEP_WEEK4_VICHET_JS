// Solution 3: Creating DOM Nodes

const fruitList = document.getElementById("fruit-list");
const cardContainer = document.getElementById("card-container");

const orange = document.createElement("li");
orange.textContent = "Orange";
fruitList.append(orange);

const strawberry = document.createElement("li");
strawberry.textContent = "Strawberry";
fruitList.prepend(strawberry);

const newCard = document.createElement("div");
newCard.classList.add("card");
newCard.textContent = "Card 3 (new!)";
cardContainer.append(newCard);

const cardToRemove = document.querySelector(".card");
cardToRemove.remove();

function addFruit(name) {
  const li = document.createElement("li");
  li.textContent = name;
  fruitList.append(li);
}

addFruit("Kiwi");
addFruit("Grapes");
addFruit("Pineapple");
