/* start a timer */
console.time('my-time');

/* simulate a time-consuming operation */
function expensiveOperation() {
	let sum = 0;
	for (let i = 0; i < 1e9; i++) { // 1000000000 === 1e9
		sum += i;
	}
	return sum;
}

/* call the expensive operation function */
const result = expensiveOperation();

/* stop the timer and display the elapsed time */
console.timeEnd('my-time');

/* display the result of the operation */
console.log('Result:', result);

/* example with asynchronous functions */
function asynchronous() {
	setTimeout(() => {
		console.timeEnd('async');
	}, 3000);
}

console.time('async');
asynchronous();