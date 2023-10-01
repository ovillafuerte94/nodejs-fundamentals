/* import module */
const fs = require('fs');

/* 
 *   The error will be passed as the first argument to the callback, 
 *   otherwise, the successful result will be 
 *   passed as the second argument 
 */
fs.readFile('file.txt', 'utf8', function (err, data) {
	if (err) {
		console.error('Error reading file:', err);
		return;
	}

	console.log('File contents:', data);
});
