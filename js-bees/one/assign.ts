function createUser(accessToken?: string) {
	const user = Object.assign(
		{ name: "Krasimir" },
		accessToken && { accessToken },
	);

	return user;
}

createUser("xxx"); // { name:"Krasimir", accessToken:"xxx" }
createUser(); // { name:"Krasimir" }
