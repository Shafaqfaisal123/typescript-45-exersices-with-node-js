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

console.log("Unfortunately, there is only three person table available today,so I can invite only two guests with me.");

while(guestList.length > 2){
    let removeGuest = guestList.pop();
    console.log(`Sorry,${removeGuest} I cant invite you for dinner tonight due to some issues,hope you dont mind`);

}

console.log("Invitation to the last 2 guest");

guestList.forEach(lastTwo => console.log(`Its my pleasure ${lastTwo}, to have dinner with you tonight.`));

guestList.pop();
guestList.pop();

console.log("Empty list:", guestList);