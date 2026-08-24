let pigs = 5;
let wood = 0;
let stone = 0;
let food = 10;

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

document.getElementById("woodButton").addEventListener("click", function () {

    wood += 5;

    message.textContent = "🌲 Your pigs gathered 5 wood!";

    updateScreen();
});

document.getElementById("stoneButton").addEventListener("click", function () {

    stone += 3;

    message.textContent = "🪨 Your pigs gathered 3 stone!";

    updateScreen();
});

document.getElementById("foodButton").addEventListener("click", function () {

    food += 5;

    message.textContent = "🌾 Your pigs gathered 5 food!";

    updateScreen();
});

document.getElementById("houseButton").addEventListener("click", function () {

    const woodCost = 20;
    const stoneCost = 10;

    if (wood >= woodCost && stone >= stoneCost) {

        wood -= woodCost;
        stone -= stoneCost;

        const house = document.createElement("div");

        house.className = "house";
        house.textContent = "🏠";

        house.style.left = Math.random() * 80 + 5 + "%";
        house.style.top = Math.random() * 80 + 5 + "%";

        world.appendChild(house);

        message.textContent = "🏠 Your pigs built a house!";

        updateScreen();

    } else {

        message.textContent =
            "❌ You need 20 wood and 10 stone to build a house!";
    }
});

updateScreen();
