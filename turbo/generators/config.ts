import type { PlopTypes } from '@turbo/gen';

// eslint-disable-next-line import/no-default-export -- Turbo generators require default export
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('plugin', {
    description: 'Generate a new package for figma plugin.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of the package?',
        validate: (name: string) => {
          if (name.includes('.')) {
            return 'package name cannot include an extension.';
          }
          if (name.includes(' ')) {
            return 'package name cannot include spaces.';
          }
          if (!name) {
            return 'package name is required.';
          }
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'plugins/{{name}}/package.json',
        templateFile: 'templates/plugin/package.json.hbs',
      },
      {
        type: 'add',
        path: 'plugins/{{name}}/tsconfig.json',
        templateFile: 'templates/plugin/tsconfig.json.hbs',
      },
      {
        type: 'add',
        path: 'plugins/{{name}}/.eslintrc.cjs',
        templateFile: 'templates/plugin/.eslintrc.cjs.hbs',
      },
      {
        type: 'add',
        path: 'plugins/{{name}}/webpack.config.js',
        templateFile: 'templates/plugin/webpack.config.js.hbs',
      },
      {
        type: 'add',
        path: 'plugins/{{name}}/manifest.json',
        templateFile: 'templates/plugin/manifest.json.hbs',
      },
      {
        type: 'add',
        path: 'plugins/{{name}}/src/code/index.ts',
        templateFile: 'templates/plugin/code.ts.hbs',
      },
      {
        type: 'add',
        path: 'plugins/{{name}}/src/ui/index.tsx',
        templateFile: 'templates/plugin/ui.tsx.hbs',
      },
      {
        type: 'add',
        path: 'plugins/{{name}}/src/ui/app.tsx',
        templateFile: 'templates/plugin/app.tsx.hbs',
      },
      {
        type: 'add',
        path: 'plugins/{{name}}/src/ui/index.html',
        templateFile: 'templates/plugin/ui.html.hbs',
      },
    ],
  });
}
