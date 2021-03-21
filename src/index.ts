import { getChanges } from "./objectDiff";

let x = {
  a: 42,
  b: "aba",
  c: {
    d: 40,
    f: [1, 2, 3, 4],
  },
};

let y = {
  ...x,
  c: {
    ...x.c,
    f: [2, 2, 4, 4],
  },
  h: 100,
};

delete (y as any)["a"];

let c = getChanges(x, y);
null;
