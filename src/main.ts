// let stringarr = ["one", "two", "three"];
// let guitars = ["strat", "less"];
// let mixedData = ["EVH", 1984, true];
// Type Aliases
interface Guitarist {
  name: string;
  active: boolean;
  albums: (string | number)[];
}
let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 1234, "OUYHKLH"],
};
let jp: Guitarist = {
  name: "Jimmy",
  active: true,
  albums: ["I", "II", "III", "IV", "V"],
};
evh = jp;
console.log(jp);
console.log(evh);

const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name}!`;
};
console.log(greetGuitarist(jp));
enum Grade {
  U,
  D,
  C,
  B,
  A,
}
console.log(Grade.U, Grade.D, Grade.C, Grade.B, Grade.A);
