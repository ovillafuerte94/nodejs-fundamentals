const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
	console.log('New request!');

	res.writeHead(200, {
        'Content-type': 'text/plain'
    });

	switch (req.url) {
		case '/hello':
			res.write('Hello!');
			res.end();
			break;

		default:
			res.write('Hello world');
			res.end();
			break;
	}
}

console.log('Listening server on port 3000');