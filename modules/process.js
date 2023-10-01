process.on('beforeExit', () => {
    console.log('The process will be completed.');
});

process.on('exit', () => {
    console.log('The process was completed.');
});

process.on('uncaughtException', (err, origen) => {
    console.log('Forgot to capture an error.');
    console.error(err);
});

example(); // Force error

console.log('If the error is not picked up, I don\'t show myself');