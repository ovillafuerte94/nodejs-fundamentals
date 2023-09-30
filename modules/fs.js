const fs = require('fs');

function read(route, callback) {
	fs.readFile(route, (err, data) => {
		// archive read
		callback(data.toString());
	});
}

function write(route, content, callback) {
	fs.writeFile(route, content, function(err) {
		if (err) {
			console.error('It has not been possible to write', err);
		} else {
			console.log('Correctly written');
		}
	});
}

function destroy(route, callback) {
	fs.unlink(route, callback);
}

/* read file */
read(__dirname + '/archive.txt', console.log);

/* write file */
write(
	__dirname + '/written_archive.txt',
	'I am a new file written with the use of file system module',
	console.log
);

/* delete file */
destroy(__dirname + '/written_archive.txt', console.log);