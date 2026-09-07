// Solution 1: Selecting DOM Elements

const heading = document.getElementById("main-title");
console.log(heading);

const firstFruit = document.querySelector(".fruit");
console.log(firstFruit);

const allFruits = document.querySelectorAll(".fruit");
console.log(allFruits.length); // 3

allFruits.forEach((fruit) => {
  console.log(fruit);
});

const buttonViaQuery = document.querySelector("#my-button");
console.log(buttonViaQuery);
