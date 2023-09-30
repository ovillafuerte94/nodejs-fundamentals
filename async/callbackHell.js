require('dotenv').config();

function hello(name, callback) {
	setTimeout(function() {
		console.log('Hello', name);
		callback(name);
	}, 1000);
}

function speak(callback) {
    setTimeout(function() {
        console.log('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
        callback();
    }, 1000);
}

/* recursivity */
function chat(name, times, callback) {
	if (times > 0) {
		speak(function() {
			chat(name, --times, callback);
		});
	} else {
		bye(name, callback);
	}
}

function bye(name, callback) {
    setTimeout(function() {
        console.log('Bye', name);
        callback();  
    }, 1000);
}

console.log('Starting the process!');

/* nested callbacks stacked one below the other in a pyramid structure 👇 */

// hello(process.env.NAME, (name) => {
// 	speak(() => {
//         speak(() => {
//             speak(() => {
//                 bye(name, () => {
// 					console.log('End the process.');
// 				});
//             });
//         });
//     });
// });

/* refactoring 👇 */

hello(process.env.NAME, function (name) {
	chat(name, 3, function () {
		console.log('End the process.');
	});
});


