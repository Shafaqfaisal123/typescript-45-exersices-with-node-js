var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriesToVisit = ["China", "Denmark", "Thailand", "Dubai"];
console.log("Orignal order:", countriesToVisit);
console.log("Alphabetical order:", __spreadArray([], countriesToVisit, true).sort());
console.log("Still in orignal order:", countriesToVisit);
console.log("Reverse order:", __spreadArray([], countriesToVisit, true).reverse());
console.log("Still in orignal order:", countriesToVisit);
console.log("Orignal array reversed:", countriesToVisit.reverse());
console.log("Back to orignal order:", countriesToVisit.reverse());
console.log("sorted in alphabetical order:", countriesToVisit.sort());
console.log("Orignal array reversed again:", countriesToVisit.reverse());
