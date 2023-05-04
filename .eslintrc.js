module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/extensions': 0,
    'react/prop-types': 0,
    'linebreak-style': 0,
    'react/state-in-constructor': 0,
    'import/prefer-default-export': 0,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'max-len': [
      2,
      250,
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '_d',
          '_dh',
          '_h',
          '_id',
          '_m',
          '_n',
          '_t',
          '_text',
        ],
      },
    ],
    'object-curly-newline': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/alt-text': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [
          'Link',
        ],
        specialLink: [
          'to',
          'hrefLeft',
          'hrefRight',
        ],
        aspects: [
          'noHref',
          'invalidHref',
          'preferButton',
        ],
      },
      {
        "name": "zp_filmpire",
        "...": "...",
        "dependencies": {
          "builtin-modules": "^1.1.1",
          "lodash.cond": "^4.2.0",
          "lodash.find": "^4.2.0",
          "pkg-up": "^1.0.0"
        },
        "devDependencies": {
          "ava": "^0.13.0",
          "eslint": "^2.4.0",
          "eslint-plugin-ava": "^1.3.0",
          "xo": "^0.13.0"
        },
        "optionalDependencies": {
          "lodash.isarray": "^4.0.0"
        },
        "peerDependencies": {
          "react": ">=15.0.0 <16.0.0"
        },
        "bundledDependencies": [
          "@generated/foo",
        ]
      },
    ],
  },
};
