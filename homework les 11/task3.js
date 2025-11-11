async function getTodo2() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
		if (!response.ok) {
			throw new Error('Request failed');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('An error occurred:', error);
		throw error;
	}
}

async function getUser2() {
	try {
		const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
		if (!response.ok) {
			throw new Error('Request failed (user)');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		console.error('An error occurred in getUser2:', error.message);
		throw error;
	}
}

async function runAll() {
	try {
		const [todo, user] = await Promise.all([getTodo2(), getUser2()]);
		console.log('Promise.all result:');
		console.log('Todo:', todo);
		console.log('User:', user);
	} catch (error) {
		console.error('Error in Promise.all:', error.message);
	}
}

async function runRace() {
	try {
		const result = await Promise.race([getTodo2(), getUser2()]);
		console.log('Promise.race result:');
		console.log(result);
	} catch (error) {
		console.error('Error in Promise.race:', error.message);
	}
}

runAll();
runRace();
