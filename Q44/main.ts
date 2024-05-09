function makeSandwich(...items: string[]){
    console.log("\nMaking a sandwich with following items: \n");

    items.forEach(singleItem => console.log(singleItem));

    console.log("\nNow enjoy sandwich");
}

makeSandwich("Chicken", "Cheese",  "Mayonise", "Egg", "Tomatoes");

makeSandwich("Bread", "Butter");

makeSandwich("Bread", "Butter", "Mayonise", "Chicken", "Lettuce", "Cucumber", "Cheese");