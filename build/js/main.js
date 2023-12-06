"use strict";
let evh = {
    name: "Eddie",
    active: false,
    albums: [1984, 1234, "OUYHKLH"],
};
let jp = {
    name: "Jimmy",
    active: true,
    albums: ["I", "II", "III", "IV", "V"],
};
evh = jp;
console.log(jp);
console.log(evh);
const greetGuitarist = (guitarist) => {
    return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 0] = "U";
    Grade[Grade["D"] = 1] = "D";
    Grade[Grade["C"] = 2] = "C";
    Grade[Grade["B"] = 3] = "B";
    Grade[Grade["A"] = 4] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U, Grade.D, Grade.C, Grade.B, Grade.A);
