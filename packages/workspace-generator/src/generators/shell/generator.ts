import { addProjectConfiguration, generateFiles, Tree } from '@nx/devkit';
import { ShellLibraryGeneratorSchema } from './schema';
import path = require('path');

export async function shellLibraryGenerator(
  tree: Tree,
  options: ShellLibraryGeneratorSchema
) {
  const projectName = 'shell';
  const projectRoot = `libs/${projectName}`;

  addProjectConfiguration(tree, projectName, {
    root: projectRoot,
    projectType: 'library',
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);

  // updateJson(tree, 'package.json', (json) => {
  //   json.scripts = json.scripts || {};
  //   json.scripts['site'] =
  //     'pnpm dlx nx run sample-website:build && pnpm dlx nx run sample-website:dev';
  //   return json;
  // });
}

export default shellLibraryGenerator;
