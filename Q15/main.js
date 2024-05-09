var guestList = ["Ahmed", "Hamza", "Hibba", "Ariba"];
var dontCome = guestList[0];
console.log(dontCome, "cant come");
guestList.splice(0, 1, "Adnan");
guestList.forEach(function (guest) { return console.log("Assalam-u alaikum ".concat(guest, ", will you like to join me for dinner tonight?")); });
