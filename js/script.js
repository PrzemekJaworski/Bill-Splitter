// Select elements from the DOM
const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const error = document.querySelector(".error");
const countBtn = document.querySelector(".count");
const costInfo = document.querySelector(".cost-info");
const cost = document.querySelector(".cost");

// Function to validate inputs and calculate bill
const showBill = () => {
  if (price.value == "" || people.value == "" || tip.value == 0) {
    // Display error message if any field is empty
    error.textContent = "Uzupełnij wszystkie pola!";
    costInfo.style.display = "none";
  } else {
    // Clear error message and calculate bill
    error.textContent = "";
    countBill();
  }
};

// Function to calculate the amount each person should pay
const countBill = () => {
  const newPrice = parseFloat(price.value);
  const newPeople = parseInt(people.value);
  const newTip = parseFloat(tip.value);

  // Calculate total cost per person (including tip)
  const sum = (newPrice + newPrice * newTip) / newPeople;

  // Display the result
  costInfo.style.display = "block";
  cost.textContent = sum.toFixed(2);
};

// Event listener for the button
countBtn.addEventListener("click", showBill);
