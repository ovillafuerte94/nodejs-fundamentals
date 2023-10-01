/* import module */
const bcrypt = require('bcrypt');

/* plain text password */
const plainTextPassword = 'password_example';

/* to encrypt a password, use the bcrypt.hash() function */
bcrypt.hash(plainTextPassword, 5, function (err, hash) {
	if (err) {
		console.error('Password encryption error:', err);
		return;
	}
	/* now, 'hash' contains the encrypted password */
	console.log('Encrypted password:', hash);

	/* verify a password */
	bcrypt.compare(plainTextPassword, hash, function (err, result) {
		if (err) {
			console.error('Error when comparing passwords:', err);
			return;
		}
		if (result) {
			console.log('Password is correct.');
		} else {
			console.log('Password is wrong.');
		}
	});
});