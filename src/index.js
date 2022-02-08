import { compose, pipe } from "lodash/fp";

let input = "   Javascript  ";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapDiv = (str) => `<div>${str}</div>`;
const toLowerCase = (str) => str.toLowerCase();

const result = wrapDiv(toLowerCase(trim(str)));

const transform = compose(wrapDiv, toLowerCase, trim);
transform(str);

const transform = pipe(trim, toLowerCase, wrapDiv);
transform(str);

// compose works as same way like typical functional composing "R->L"
// pipe works other way "L -> R" (first thing in left)
