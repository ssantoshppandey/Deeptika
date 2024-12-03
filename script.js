// Timer Logic
const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

function startTimer() {
  const startDate = new Date("2024-07-28T00:00:00");
  setInterval(() => {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
  }, 1000);
}

// Proposal Logic
const proposalText = document.getElementById("proposal-text");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const congrats = document.getElementById("congrats");

let state = 0;

noBtn.addEventListener("click", () => {
  if (state === 0) {
    proposalText.textContent = "Are you sure?";
    state++;
  } else if (state === 1) {
    proposalText.textContent = "You mean you want to be my girlfriend?";
    state++;
  } else if (state === 2) {
    showCongratulations();
  }
});

yesBtn.addEventListener("click", () => {
  showCongratulations();
});

// Show Congratulations
function showCongratulations() {
  congrats.style.display = "block";
  launchBalloonsAndFlowers();
}

// Balloons and Flowers Logic
function launchBalloonsAndFlowers() {
  const balloonContainer = document.getElementById("balloons");
  const flowerContainer = document.getElementById("flowers");

  for (let i = 0; i < 20; i++) {
    const balloon = document.createElement("div");
    const flower = document.createElement("div");

    balloon.style.left = `${Math.random() * 100}%`;
    flower.style.left = `${Math.random() * 100}%`;

    balloon.style.backgroundColor = getRandomColor();
    flowerContainer.appendChild(flower);
    balloonContainer.appendChild(balloon);
  }
}

function getRandomColor() {
  const colors = ["red", "blue", "yellow", "green", "purple", "pink"];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Start Everything
startTimer();
