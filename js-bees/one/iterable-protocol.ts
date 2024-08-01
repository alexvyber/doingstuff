const user = {
	data: ["JavaScript", "HTML", "CSS"],
	[Symbol.iterator]: function () {
		let i = 0;

		return {
			next: () => ({
				value: this.data[i++],
				done: i > this.data.length,
			}),
		};
	},
};

for (const skill of user) {
	console.log(skill);
}

//

const person = {
	name: { first: "Krasimir", last: "Tsonev" },
	position: "engineer",

	[Symbol.iterator]: function (): {
		next: () => { value: string; done: false } | { done: true; value?: never };
	} {
		let i = 0;

		return {
			next: () => {
				i++;

				if (i === 1) {
					return { value: `${this.name.first} ${this.name.last}`, done: false };
				}
				if (i === 2) {
					return { value: this.position, done: false };
				}

				return { done: true };
			},
		};
	},
};

const [name, position] = person;

console.log(`${name}: ${position}`); // Krasimir Tsonev: engineer

export type {};
