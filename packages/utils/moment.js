/* import module */
const moment = require('moment');

/* create a current date instance */
const currentDate = moment();

/* format the date in a specific format */
console.log(currentDate.format('YYYY-MM-DD HH:mm:ss'));

/* perform operations with dates */
const dateOneYearAgo = moment().subtract(1, 'year');
console.log('A year ago it was:', dateOneYearAgo.format('YYYY-MM-DD'));