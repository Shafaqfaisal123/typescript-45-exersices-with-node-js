var guestList = ["Hamza", "Areeba", "Tuba", "Rida"];
var cantCome = guestList[0];
console.log(cantCome, "Cannot come");
guestList.splice(0, 1, "Adnan");
console.log("No worries ! We have now found a bigger table for dinner");
guestList.unshift("Ali");
guestList.push("Bilal");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Faisal");
console.log("Updated list of our guest");
guestList.forEach(function (oneGuest) { return console.log("Assalam-u-alaikum ".concat(oneGuest, ", will you like to join me for dinner tonight?")); });
