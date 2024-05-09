let guestList = ["Hamza", "Areeba", "Tuba", "Rida"];

let cantCome = guestList[0];

console.log(cantCome, "Cannot come");

guestList.splice(0, 1, "Adnan");

console.log("No worries ! We have now found a bigger table for dinner");

guestList.unshift("Ali");

guestList.push("Bilal");

let middleIndex: number = Math.floor(guestList.length / 2);

guestList.splice(middleIndex, 0, "Faisal");

console.log("Updated list of our guest");

guestList.forEach(oneGuest => console.log(`Assalam-u-alaikum ${oneGuest}, will you like to join me for dinner tonight?`));