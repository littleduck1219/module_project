import run from '@atto_ui/esbuild_config';
import pkg from './package.json' assert { type: 'json' };
import { sassPlugin } from 'esbuild-sass-plugin';

const config = {
  plugins: [sassPlugin()],
};

run({
  pkg,
  config,
});
