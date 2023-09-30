require('dotenv').config();

function hello(name) {
	return new Promise(function(resolve, reject) {
        setTimeout(function () {
			console.log('Hello', name);
			resolve(name);
            reject('Error occurred in the `hello` function');
		}, 1000);
    });
}

function speak(name) {
	return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
            resolve(name);
            reject('Error occurred in the `speak` function');
        }, 1000);
    });
}

function bye(name) {
	return new Promise(function(resolve, reject) {
        setTimeout(function () {
            console.log('Bye', name);
            resolve();
            reject('Error occurred in the `bye` function');
        }, 1000);
    });
}

console.log('Starting the process!');

hello(process.env.NAME)
    .then(speak)
    .then(bye)
    .then((nombre) => {
        console.log('End the process.');
    })
    .catch(error => {
        console.error('A mistake has occurred');
        console.error(error);
    });
