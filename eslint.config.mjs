import babelParser from '@babel/eslint-parser'
import importPlugin from 'eslint-plugin-import'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'

// TODO: add typescript-eslint once it supports TypeScript 7
export default defineConfig([
  globalIgnores(['build', 'node_modules']),
  {
    files: ['**/*.{js,jsx,mjs,ts,tsx,mts}'],
    extends: [reactHooks.configs.flat.recommended],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          babelrc: false,
          configFile: false,
          parserOpts: { plugins: ['jsx'] }
        }
      },
      globals: { ...globals.browser, ...globals.node }
    },
    plugins: {
      react,
      'react-refresh': reactRefresh,
      'simple-import-sort': simpleImportSort,
      import: importPlugin
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'max-lines': ['warn', { max: 350, skipBlankLines: true }],
      'no-eval': 'error',
      'prefer-const': 'error',
      'no-nested-ternary': 'error',

      // React
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'warn',
      'react/jsx-curly-brace-presence': [
        'warn',
        { props: 'never', children: 'never' }
      ],
      'react/jsx-boolean-value': ['error', 'never'],
      'react/jsx-no-useless-fragment': 'error',
      'react-refresh/only-export-components': [
        'off',
        { allowConstantExport: true }
      ],

      // Imports
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error'
    }
  },
  {
    files: ['**/*.{ts,mts}'],
    languageOptions: {
      parserOptions: {
        babelOptions: { parserOpts: { plugins: ['typescript'] } }
      }
    }
  },
  {
    files: ['**/*.tsx'],
    languageOptions: {
      parserOptions: {
        babelOptions: { parserOpts: { plugins: ['typescript', 'jsx'] } }
      }
    }
  }
])
