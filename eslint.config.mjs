import babelParser from '@babel/eslint-parser'
import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

// TODO: add typescript-eslint once it supports TypeScript 7
export default defineConfig([
  globalIgnores(['build', 'node_modules']),
  {
    files: ['**/*.{js,jsx,mjs,ts,tsx,mts}'],
    extends: [
      js.configs.recommended,
      react.configs.flat.recommended,
      react.configs.flat['jsx-runtime'],
      reactHooks.configs.flat.recommended,
      jsxA11y.flatConfigs.recommended
    ],
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
      globals: globals.browser
    },
    plugins: {
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
      'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
      'react-refresh/only-export-components': [
        'warn',
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
    // The dialog's backdrop click has Escape as its keyboard equivalent, and the
    // puzzle delegates arrow keys from its tile buttons to the group
    files: ['src/components/Modal.tsx', 'src/components/Puzzle.tsx'],
    rules: {
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/no-noninteractive-element-interactions': 'off'
    }
  },
  {
    files: ['*.config.{js,mjs,ts,mts}'],
    languageOptions: { globals: globals.node }
  },
  {
    // Babel's scope analysis doesn't see TS types, so these misfire on type
    // names and props; tsc covers them via noUnusedLocals/noUnusedParameters
    files: ['**/*.{ts,tsx,mts}'],
    rules: {
      'no-undef': 'off',
      'no-unused-vars': 'off'
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
