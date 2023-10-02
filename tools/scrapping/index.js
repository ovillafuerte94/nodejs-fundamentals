/* import module */
const puppeteer = require('puppeteer');

/* self-executing function */
(async () => {
	/* launch browser */
	const browser = await puppeteer.launch({
		headless: false,
	});

	/* create a new page */
	const page = await browser.newPage();

	/* navigates the page to the given `url` */
	await page.goto('https://en.wikipedia.org/wiki/Node.js');

	/* evaluates a function in the page's context and returns the result */
	let title = await page.evaluate(() => {
		const h1 = document.querySelector('h1');
		return h1.innerHTML;
	});

	console.log(title);

	/* closes this browser */
	browser.close();
})();
