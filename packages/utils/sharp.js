/* import module */
const sharp = require('sharp');

/* load an image */
sharp('image.png')
	.resize(200, 200) /* resize to 200x200 pixels */
	.toFile('resized_image.png', (err, info) => {
		if (err) {
			console.error('Image processing error:', err);
		} else {
			console.log('Image processed correctly:', info);
		}
	});
