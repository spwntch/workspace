import {
  addDependenciesToPackageJson,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import { PresetGeneratorSchema } from './schema';
import path = require('path');
import mdxLibraryGenerator from '../mdx/generator';
import shellLibraryGenerator from '../shell/generator';
import sampleWebsiteGenerator from '../sample-website/generator';

export async function presetGenerator(
  tree: Tree,
  options: PresetGeneratorSchema
) {
  const projectRoot = `.`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);

  addDependenciesToPackageJson(
    tree,
    {
      '@spwntch/shell': '0.43.0',
      '@spwntch/components': '0.43.0',
      '@spwntch/tailwind': '0.43.0',
      '@spwntch/mdx': '0.43.0',
      "gray-matter": "^4.0.3",
      next: '14.0.4',
      "next-mdx-remote": "^4.4.1",
      react: '18.2.0',
      'react-dom': '18.2.0',
      "rehype-slug": "^6.0.0",
      "rehype-toc": "^3.0.2",
      "remark-gfm": "^4.0.0",
      tslib: '^2.3.0',
    },
    {
      '@nx/eslint': '18.3.3',
      '@nx/eslint-plugin': '18.3.3',
      '@nx/js': '18.3.3',
      '@nx/next': '18.3.3',
      '@nx/react': '18.3.3',
      '@nx/storybook': '18.3.3',
      '@nx/web': '18.3.3',
      '@nx/workspace': '18.3.3',
      '@swc-node/register': '~1.8.0',
      '@swc/core': '~1.3.85',
      '@swc/helpers': '~0.5.2',
      "@tailwindcss/typography": "^0.5.12",
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
      nx: '18.3.3',
      postcss: '8.4.21',
      prettier: '^2.6.2',
      storybook: '^7.5.3',
      tailwindcss: '3.2.7',
      typescript: '~5.4.2',
    }
  );

  mdxLibraryGenerator(tree, {});
  shellLibraryGenerator(tree, {});

  if (options.boilerplates?.includes('website'))
    sampleWebsiteGenerator(tree, options);

  // if (options.boilerplates?.includes('landing-page'))
  //   sampleLandingPageGenerator(tree, options);

  await formatFiles(tree);
}

export default presetGenerator;
