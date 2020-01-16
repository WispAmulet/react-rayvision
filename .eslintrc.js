module.exports = {
  extends: ['wispamulet'],
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
  ],
  rules: {
    '@typescript-eslint/indent': 0,
    'react/jsx-props-no-spreading': [1, {
      'custom': 'ignore'
    }]
  },
}
