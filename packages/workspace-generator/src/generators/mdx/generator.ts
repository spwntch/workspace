import { addProjectConfiguration, generateFiles, Tree } from '@nx/devkit';
import { MdxLibraryGeneratorSchema } from './schema';
import path = require('path');

export async function mdxLibraryGenerator(
  tree: Tree,
  options: MdxLibraryGeneratorSchema
) {
  const projectName = 'mdx';
  const projectRoot = `libs/${projectName}`;

  addProjectConfiguration(tree, projectName, {
    root: projectRoot,
    projectType: 'library',
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
}

export default mdxLibraryGenerator;
