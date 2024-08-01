function createQueue() {
	const tasks = [];
	const results = [];
	let processing = false;
	let done = () => {};

	const handle = (res) => {
		results.push(res);
		processing = false;
		execute();
	};

	function execute() {
		if (tasks.length > 0 && !processing) {
			processing = true;
			tasks.shift()().then(handle).catch(handle);
		} else if (tasks.length === 0 && !processing) {
			done(results);
		}
	}

	function add(task) {
		tasks.push(task);
	}

	return {
		add,
		execute,
		done: new Promise((cb) => (done = cb)),
	};
}

const queue = createQueue();

function nationality(name) {
	return () =>
		fetch(`https://api.nationalize.io/?name=${name}`)
			.then((res) => res.json())
			.then((data) => `${name}: ${data.country[0].country_id}`);
}

queue.add(nationality("Krasimir"));
queue.add(nationality("Natalie"));
setTimeout(() => {
	queue.add(nationality("Hans"));
}, 10);
queue.done.then(console.log);
queue.execute();
// After a while: [ 'Krasimir: BG', 'Natalie: GB', 'Hans: FO' ]
