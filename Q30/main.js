var userName = ["Fahad", "Ali", "Ariba", "Sadia", "Usman"];
userName.forEach(function (oneUser) {
    if (oneUser === "Sadia") {
        console.log("Hello ".concat(oneUser, ", would you like to see a status report?"));
    }
    else {
        console.log("Hello ".concat(oneUser, ", thank you for logging in again"));
    }
});
