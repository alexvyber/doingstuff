const page = {
	visits: 42,
};

// the same as
// ```
// const newPageView = () => {
//   page.visits += 1
//   return page.visits
// }
// ```
const newPageView = () => {
	return (page.visits += 1), page.visits;
};

console.log(newPageView()); // 43;
console.log(newPageView()); // 44;
console.log(newPageView()); // 45;
console.log(newPageView()); // 46;

const a = () => "a";
const b = () => "b";

const isValid = true;

const result = isValid ? (a(), b()) : "Nope";

console.log(result); // b
