const users = [];

module.exports = {
	register(name) {
		users.push({ name });
	},

	total() {
		return users.length;
	},
};
