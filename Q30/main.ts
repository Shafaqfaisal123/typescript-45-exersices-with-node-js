let userName = ["Fahad" , "Ali" , "Ariba" , "Sadia" , "Usman"];

userName.forEach(oneUser => {
    if(oneUser ==="Sadia"){
        console.log(`Hello ${oneUser}, would you like to see a status report?`)
    }
    else{
        console.log(`Hello ${oneUser}, thank you for logging in again`)
    }
})