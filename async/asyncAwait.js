require('dotenv').config();

async function hello(name) {
	return new Promise(function (resolve, reject) {
		setTimeout(() => {
			console.log('Hello', name);
			resolve(name);
			reject('Error occurred in the `hello` function');
		}, 1000);
	});
}

async function speak(name) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
			resolve(name);
			reject('Error occurred in the `speak` function');
		}, 1000);
	});
}

async function bye(name) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log('Bye', name);
			resolve();
			reject('Error occurred in the `bye` function');
		}, 1000);
	});
}

async function main() {
	let name = await hello(process.env.NAME);
	await speak();
	await bye(name);
	console.log('End the process.');
}

console.log('Starting the process!');

main();

console.log('Second instruction');