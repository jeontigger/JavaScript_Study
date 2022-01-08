const playerName = "inho";
const playerPoints = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// player[0] == name
// player[1] == points
//const player = ["inho", 121212, false, "little bit"];

const player = {
    name: "inho",
    points: 10,
    fat: true,
}


console.log(player);
// call attribute
console.log(player.name);
// call attribute another way
console.log(player["name"]);

// change property
player.fat = false;
console.log(player);

// add new property
player.lastName = "potato";
console.log(player);