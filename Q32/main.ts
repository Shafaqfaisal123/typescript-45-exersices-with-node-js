let currentUsers = ["ali", "Usama", "Anabia", "Maria", "Aisha"]

let newUsers = ["Ali", "Hania", "Fahad", "Maria", "Safa"]

newUsers.forEach(new_one_user => {
    let our_condition = currentUsers.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)

    }
    else{
        console.log(`This username ${new_one_user} is available`)
    }
})