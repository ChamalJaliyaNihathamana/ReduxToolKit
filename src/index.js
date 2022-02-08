import { compose, pipe } from "lodash/fp";

let input = "   Javascript  ";
let output = "<div>" + input.trim() + "</div>";

// Currying
const trim = (str) => str.trim();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const toLowerCase = (str) => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));

// compose works as same way like typical functional composing "R->L"
// pipe works other way "L -> R" (first thing in left)


