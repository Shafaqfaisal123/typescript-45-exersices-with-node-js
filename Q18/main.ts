let countriesToVisit: string[] = ["China", "Denmark", "Thailand", "Dubai"];

console.log("Orignal order:", countriesToVisit);

console.log("Alphabetical order:", [...countriesToVisit].sort());

console.log("Still in orignal order:",countriesToVisit);

console.log("Reverse order:", [...countriesToVisit].reverse());

console.log("Still in orignal order:", countriesToVisit);

console.log("Orignal array reversed:", countriesToVisit.reverse());

console.log("Back to orignal order:", countriesToVisit.reverse());

console.log("sorted in alphabetical order:", countriesToVisit.sort());

console.log("Orignal array reversed again:", countriesToVisit.reverse());