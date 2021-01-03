module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    rules: {
        'no-await-in-loop': 'error',
        'no-new': 'warn',
        'no-loss-of-precision': 'error',
        'no-unreachable-loop': 'error',
        'no-duplicate-imports': 'error',
        'no-var': 'error',
        'object-shorthand': ['error', 'always'],
        'prefer-template': 'error',
        'no-undef': 'off',
        camelcase: 'warn',
    },
};
