"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const objectDiff_1 = require("./objectDiff");
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
delete y["a"];
let c = objectDiff_1.getChanges(x, y);
null;
//# sourceMappingURL=index.js.map