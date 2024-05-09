let guestList = ["Ahmed", "Hamza", "Hibba", "Ariba"];

let dontCome = guestList[0];

console.log(dontCome, "cant come");

guestList.splice(0, 1, "Adnan");

guestList.forEach(guest => console.log(`Assalam-u alaikum ${guest}, will you like to join me for dinner tonight?`));