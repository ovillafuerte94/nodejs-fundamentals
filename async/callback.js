function asynchronous(myCallback) {
    setTimeout(() => {
        console.log('I am being asynchronous');
        myCallback();
    }, 1000);
}

console.log('Starting the process');

asynchronous(() => {
    console.log('End the process');
});