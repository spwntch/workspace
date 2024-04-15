import {
  addDependenciesToPackageJson,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { PresetGeneratorSchema } from './schema';

export async function presetGenerator(
  tree: Tree,
  options: PresetGeneratorSchema
) {
  addDependenciesToPackageJson(
    tree,
    {
      next: '14.0.4',
      react: '18.2.0',
      'react-dom': '18.2.0',
      'spwn-workspace-generator': '0.3.0',
    },
    {
      '@nx/next': '18.2.4',
      '@nx/react': '18.2.4',
      '@nx/storybook': '18.2.4',
      '@nx/web': '18.2.4',
      '@nx/workspace': '18.2.4',
      nx: '18.2.4',
      storybook: '^7.5.3',
    }
  );

  const projectRoot = `.`;
  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
  await formatFiles(tree);
}

export default presetGenerator;
