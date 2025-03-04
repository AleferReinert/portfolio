// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

const compat = new FlatCompat({ baseDirectory: import.meta.dirname })

const eslintConfig = [
  ...compat.config({ extends: ['next', 'plugin:storybook/recommended', 'prettier'] }),
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: { project: './tsconfig.json', tsconfigRootDir: import.meta.dirname }
    },
    plugins: { '@typescript-eslint': typescriptPlugin },
    rules: { ...typescriptPlugin.configs['recommended'].rules }
  }
]

export default eslintConfig
