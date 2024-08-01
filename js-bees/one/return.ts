function calculateAge(birthDate: Date) {
	return formatDate(today() - birthDate);

	function today() {
		return new Date();
	}

	function formatDate(diff) {
		return Math.ceil(diff / (1000 * 3600 * 24) / 365);
	}
}

const age = calculateAge(new Date(1984, 1, 1));
console.log(`You are approx ${age} years old.`);
// result: You are approx 38 years old
