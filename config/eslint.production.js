// Inspired by https://github.com/airbnb/javascript but less opinionated.

// We use eslint-loader so even warnings are very visibile.
// This is why we only use "WARNING" level for potential errors,
// and we don't use "ERROR" level at all.

// In the future, we might create a separate list of rules for production.
// It would probably be more strict.

module.exports = {
	root: true,

	parser: 'babel-eslint',
	extends: 'airbnb',

  // import plugin is termporarily disabled, scroll below to see why
	plugins: [/* 'import', */'flowtype', 'jsx-a11y', 'react'],

	env: {
		browser: true,
		commonjs: true,
		es6: true,
		node: true,
	},

	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
			generators: true,
			experimentalObjectRestSpread: true,
		},
	},

	settings: {
		'import/ignore': [
			'node_modules',
			'\\.(json|css|jpg|png|gif|eot|svg|ttf|woff|woff2|mp4|webm)$',
		],
		'import/extensions': ['.js'],
		'import/resolver': {
			'node': {
				extensions: ['.js', '.json'],
			},
		},
		/* 'import/resolver': {
			node: {
				extensions: ['.js', '.json'],
			},
		}, */
	},

	// turn these warnings to error for building
	rules: {
		'semi': ['error', 'never'],
		'comma-dangle': ['error', 'always-multiline'],
		'quote-props': ['error', 'consistent'],
		'indent': ['error', 'tab'],
		'no-underscore-dangle': 0,
		'no-unused-vars': 'error',
		'no-console': 'error',

		// react specifics
		'react/jsx-indent': ['error', 'tab'],
		'react/jsx-filename-extension': 0,

		// airbnb overrides
		'global-require': 0,
		'import/prefer-default-export': 0,
		'import/no-extraneous-dependencies': 0,
		'import/no-unresolved': 0,
	},
}
