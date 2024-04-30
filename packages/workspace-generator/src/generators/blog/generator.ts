import { addProjectConfiguration, generateFiles, Tree } from '@nx/devkit';
import { BlogLibraryGeneratorSchema } from './schema';
import path = require('path');

export async function blogLibraryGenerator(
  tree: Tree,
  options: BlogLibraryGeneratorSchema
) {
  const projectName = 'blog';
  const projectRoot = `libs/${projectName}`;

  addProjectConfiguration(tree, projectName, {
    root: projectRoot,
    projectType: 'library',
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
}

export default blogLibraryGenerator;
