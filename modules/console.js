console.log('Hello world');
console.info('Information message');
console.warn('Warning message');
console.error('An error has occurred');

var table = [
	{ a: 1, b: 'Lorem' },
	{ a: 2, b: 'Ipsum' },
];

console.table(table);

/* Console Group */
console.group('Conversation:');
console.log('Lorem ipsum dolor sit');
console.log('Lorem ipsum dolor sit');
console.log('Lorem ipsum dolor sit');
console.groupEnd('Conversation:');

/* Console count */
console.count('times');
console.count('times');
console.count('times');
console.count('times');
console.countReset('times');
console.count('times');