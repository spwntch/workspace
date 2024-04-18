import {
  addProjectConfiguration,
  generateFiles,
  Tree,
  updateJson,
} from '@nx/devkit';
import * as path from 'path';
import { SampleLandingPageSchema } from './schema';

export async function sampleLandingPageGenerator(
  tree: Tree,
  options: SampleLandingPageSchema
) {
  const projectName = 'sample-landing-page';
  const projectRoot = `apps/${projectName}`;

  addProjectConfiguration(tree, projectName, {
    root: projectRoot,
    projectType: 'application',
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, options);

  updateJson(tree, 'package.json', (json) => {
    json.scripts = json.scripts || {};
    json.scripts['site'] =
      'pnpm dlx nx run sample-landing-page:build && pnpm dlx nx run sample-landing-page:dev';
    return json;
  });
}

export default sampleLandingPageGenerator;
