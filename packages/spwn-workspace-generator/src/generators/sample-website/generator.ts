import {
  addProjectConfiguration,
  generateFiles,
  Tree,
  updateJson,
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

  updateJson(tree, 'package.json', (json) => {
    json.scripts = json.scripts || {};
    json.scripts['site'] =
      'pnpm dlx nx run sample-website:dev && pnpm dlx nx run sample-website:dev';
    return json;
  });
}

export default sampleWebsiteGenerator;
