var currentUsers = ["ali", "Usama", "Anabia", "Maria", "Aisha"];
var newUsers = ["Ali", "Hania", "Fahad", "Maria", "Safa"];
newUsers.forEach(function (new_one_user) {
    var our_condition = currentUsers.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
