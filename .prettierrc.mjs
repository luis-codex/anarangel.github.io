/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'none',
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
        importOrder: [
          '<BUILTIN_MODULES>',
          '<THIRD_PARTY_MODULES>',
          '^@data/(.*)$',
          '^@layouts/(.*)$',
          '^@pages/(.*)$',
          '^@components/(.*)$',
          '^@scripts/(.*)$',
          '^@styles/(.*)$',
          '^@/(.*)$',
          '^.[./].*'
        ]
      }
    },
    {
      files: '*.svg',
      options: {
        parser: 'html'
      }
    },
    {
      files: '*.{yaml,yml}',
      options: {
        tabWidth: 3,
        singleQuote: false
      }
    }
  ],
  plugins: ['prettier-plugin-astro', '@ianvs/prettier-plugin-sort-imports'],
  astroAllowShorthand: false,
  importOrder: []
}

export default config
