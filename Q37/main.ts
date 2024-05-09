function make_shirt (size: string = "large", printMessage: string = "I love typescript"){
    console.log(`creating a ${size} shirt with the ${printMessage} print on shirt`)
}

make_shirt();

make_shirt("medium")

make_shirt("small", "I live programming")