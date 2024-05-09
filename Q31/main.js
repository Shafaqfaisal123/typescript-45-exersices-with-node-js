var userNames = ["Amir", "Saima", "Hania", "Ahmed", "Safa"];
userNames = [];
if (userNames.length === 0) {
    console.log("your array is empty you need to find some user!");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Hania") {
            console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ", thank you for logging in again."));
        }
    });
}
