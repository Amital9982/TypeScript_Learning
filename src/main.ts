let stringarr = ["one", "two", "three"];
let guitars = ["strat", "less"];
let mixedData = ["EVH", 1984, true];

type Guitarist = {
  name: string;
  active: boolean;
  albums: (string | number)[];
};
let evh: Guitarist = {
  name: "Eddie",
  active: false,
  albums: [1984, 1234, "OUYHKLH"],
};
