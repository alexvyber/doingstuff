const user = { firstName: "Krasimir" };

function message(greeting) {
	console.log(`${greeting} ${this.firstName}!`);
}

message("Hey"); // Hey undefined!

message.call(user, "Hey"); // Hey Krasimir!
message.apply(user, ["Hi"]); // Hi Krasimir!
message.bind(user, "Hola")(); // Hola Krasimir!
