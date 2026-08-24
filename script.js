let pigs = 5;
let wood = 0;
let stone = 0;
let food = 10;

let houses = 0;
let populationLimit = 5;

const pigsDisplay = document.getElementById("pigs");
const woodDisplay = document.getElementById("wood");
const stoneDisplay = document.getElementById("stone");
const foodDisplay = document.getElementById("food");

const message = document.getElementById("message");
const world = document.getElementById("world");

function updateScreen() {
    pigsDisplay.textContent = pigs;
    woodDisplay.textContent = wood;
    stoneDisplay.textContent = stone;
    foodDisplay.textContent = food;
}

// 🌲 Gather wood
document.getElementById("woodButton").addEventListener("click", function () {

    wood += 5;

    message.textContent = "🌲 Your pigs gathered 5 wood!";

    updateScreen();
});

// 🪨 Gather stone
document.getElementById("stoneButton").addEventListener("click", function () {

    stone += 3;

    message.textContent = "🪨 Your pigs gathered 3 stone!";

    updateScreen();
});

// 🌾 Gather food
document.getElementById("foodButton").addEventListener("click", function () {

    food += 5;

    message.textContent = "🌾 Your pigs gathered 5 food!";

    updateScreen();
});

// 🏠 Build house
document.getElementById("houseButton").addEventListener("click", function () {

    const woodCost = 20;
    const stoneCost = 10;

    if (wood >= woodCost && stone >= stoneCost) {

        wood -= woodCost;
        stone -= stoneCost;

        houses++;

        populationLimit += 5;

        const house = document.createElement("div");

        house.className = "house";
        house.textContent = "🏠";

        house.style.left = Math.random() * 80 + 5 + "%";
        house.style.top = Math.random() * 80 + 5 + "%";

        world.appendChild(house);

        message.textContent =
            "🏠 House built! Your population limit increased!";

        updateScreen();

    } else {

        message.textContent =
            "❌ You need 20 wood and 10 stone!";
    }
});

// 🍎 Pigs eat every 10 seconds
setInterval(function () {

    const foodNeeded = pigs * 1;

    if (food >= foodNeeded) {

        food -= foodNeeded;

        message.textContent =
            "🍎 Your pigs ate " + foodNeeded + " food.";

    } else {

        message.textContent =
            "⚠️ Your pigs are getting hungry!";
    }

    updateScreen();

}, 10000);

// 🐷 Population growth
setInterval(function () {

    if (food >= 10 && pigs < populationLimit) {

        food -= 10;
        pigs++;

        message.textContent =
            "🐷 A new pig was born!";

        updateScreen();
    }

}, 15000);

updateScreen();
