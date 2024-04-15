import {
  addDependenciesToPackageJson,
  formatFiles,
  generateFiles,
  Tree
} from '@nx/devkit';
import * as path from 'path';
import sampleWebsiteGenerator from '../sample-website/generator';
import { PresetGeneratorSchema } from './schema';

export async function presetGenerator(
  tree: Tree,
  options: PresetGeneratorSchema
) {
  const projectRoot = `.`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);

  sampleWebsiteGenerator(tree, options);
  

  addDependenciesToPackageJson(
    tree,
    {
      '@spwntch/tailwind': '^0.32.1',
      next: '14.0.4',
      react: '18.2.0',
      'react-dom': '18.2.0',
      'spwn-workspace-generator': '0.3.1',
      tslib: '^2.3.0',
    },
    {
      '@nx/eslint': '18.2.4',
      '@nx/eslint-plugin': '18.2.4',
      '@nx/js': '18.2.4',
      '@nx/next': '18.2.4',
      '@nx/react': '18.2.4',
      '@nx/storybook': '18.2.4',
      '@nx/web': '18.2.4',
      '@nx/workspace': '18.2.4',
      '@swc-node/register': '~1.8.0',
      '@swc/core': '~1.3.85',
      '@swc/helpers': '~0.5.2',
      '@types/react': '18.2.33',
      '@types/react-dom': '18.2.14',
      '@typescript-eslint/eslint-plugin': '^7.3.0',
      '@typescript-eslint/parser': '^7.3.0',
      autoprefixer: '10.4.13',
      eslint: '~8.57.0',
      'eslint-config-next': '14.0.4',
      'eslint-config-prettier': '^9.0.0',
      'eslint-plugin-import': '2.27.5',
      'eslint-plugin-jsx-a11y': '6.7.1',
      'eslint-plugin-react': '7.32.2',
      'eslint-plugin-react-hooks': '4.6.0',
      nx: '18.2.4',
      postcss: '8.4.21',
      prettier: '^2.6.2',
      storybook: '^7.5.3',
      tailwindcss: '3.2.7',
      typescript: '~5.4.2',
    }
  );

  await formatFiles(tree);
}

export default presetGenerator;
