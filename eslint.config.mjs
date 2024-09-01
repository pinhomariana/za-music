import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    languageOptions: {
      globals: globals.browser,
    },
    ...pluginJs.configs.recommended,
    ...pluginReact.configs.flat.recommended,
    plugins: {
      react: pluginReact,
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      semi: ['error', 'always'],
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          printWidth: 100,
          tabWidth: 2,
          trailingComma: 'all',
          jsxBracketSameLine: false,
        },
      ],
      'no-unused-vars': 'warn',
    },
  },
];
