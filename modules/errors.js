const { callbackify } = require("util");

function other() {
    crush();
}

function crush() {
    return 3 + z;
}

function crushAsync(callback) {
    setTimeout(() => {
        try {
            return 3 + z;
        } catch (err) {
            callback(err)
        }
    }, 1000);
}


/* try catch prevents execution from stopping when an error occurs */
try {
    other();
} catch (err) {
    console.error(err.message);
    console.log('The error has been captured');
}

crushAsync(function (err) {
	console.log(err.message);
});

console.log('The execution continues without stopping');