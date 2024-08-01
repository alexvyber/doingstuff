// const user = { age: 33, job: "developer" };
// function update(user, prop, value) {
//   user[prop] = value;
// }
// update(user, "age", 36);

// const user = { age: 33, job: "developer" };
// function update(user, prop, value) {
//   user[prop] = value;
// }
// const updateUser = partial(update, user);
// updateUser("age", 36);
// function partial(func, ...args1) {
//   return (...args2) => {
//     return func(...args1, ...args2);
//   }
// }

const user = { age: 33, job: "developer" };
function update(user, prop, value) {
	user[prop] = value;
}
const curriedUpdate = curry(update);
const updateUser = curriedUpdate(user);
const updateAge = updateUser("age");

function curry(fn: (...args: any[]) => any) {
	return function curried(...params) {
		if (params.length >= fn.length) {
			return fn.apply(this, params);
		}
		return function (...args2: any[]) {
			return curried.apply(this, params.concat(args2));
		};
	};
}

updateAge(36);
console.log(user);

updateAge(40);
console.log(user);

export type {};
