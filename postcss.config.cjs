const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const fontmagician = require('postcss-font-magician');
const cssnano = require('cssnano');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		fontmagician(),
		//But others, like autoprefixer, need to run after,
		autoprefixer(),
		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};

module.exports = config;
