const { exec, spawn } = require('child_process');

exec('node environment.js', (err, stdout, sterr) => {
	if (err) {
		console.log(err);
		return false;
	}

	console.log(stdout);
});

/* new process */
let newProcess = spawn('ls', ['-la']);

console.log(newProcess.pid);
console.log(newProcess.connected);

newProcess.stdout.on('data', function(data) {
    console.log(newProcess.killed);
    console.log(data.toString());
});

newProcess.on('exit', function() {
    console.log('The process was completed');
    console.log(newProcess.killed);
});