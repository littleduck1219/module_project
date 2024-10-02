import run from '@atto_ui/esbuild_config';
import pkg from './package.json' assert { type: 'json' };

run({
  pkg,
});
