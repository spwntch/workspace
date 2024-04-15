import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
} from '@nx/devkit';
import * as path from 'path';
import { SampleWebsiteGeneratorSchema } from './schema';

export async function sampleWebsiteGenerator(
  tree: Tree,
  options: SampleWebsiteGeneratorSchema
) {
  const projectName = 'sample-website';
  const projectRoot = `apps/${projectName}`;

  addProjectConfiguration(tree, projectName, {
    root: projectRoot,
    projectType: 'application',
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);
}

export default sampleWebsiteGenerator;
