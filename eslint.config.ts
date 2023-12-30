import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  formatters: true,
  vue: true,
  rules: {
    'no-console': 'off',
  },
})
