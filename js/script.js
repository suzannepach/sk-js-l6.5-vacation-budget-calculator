const tripInfoButton = document.querySelector(".trip-info");
const dailyBudget = document.querySelector(".daily-budget");

const tripInfo = function () {
  const totalBudget = Number(prompt("What is your total budget?"));
  const accomodation = Number(prompt("What are your accomodation costs?"));
  const numDays = Number(prompt("How many days does your trip last?"));
  calculateDailyBudget(totalBudget, accomodation, numDays);
};

const calculateDailyBudget = function (totalBudget, accomodation, numDays) {
  const daily = ((totalBudget - accomodation) / numDays).toFixed(2);
  dailyBudget.innerText = `You can spend $${daily} on food and fun.`;
};

tripInfoButton.addEventListener("click", tripInfo);
