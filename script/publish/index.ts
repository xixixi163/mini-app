import { componentPath } from '../utils/paths';
import run from '../utils/run';
import { series } from 'gulp';

export const publishComponent = async () => {
  run('release-it', `${componentPath}/products`);
};

export default series(async () => publishComponent());
