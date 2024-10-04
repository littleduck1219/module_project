const { context } = require('esbuild');

const run = async ({ entryPoints = ['src/index.ts'], pkg, config = {} }) => {
  const dev = process.argv.includes('--dev');
  const watch = process.argv.includes('--watch');
  const minify = !dev;

  const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  });

  const baseConfig = {
    entryPoints,
    bundle: true,
    minify,
    sourcemap: true,
    outdir: 'dist',
    target: 'es2019',
    external,
    ...config,
  };

  try {
    // Create esm and cjs contexts
    const esmContext = await context({
      ...baseConfig,
      format: 'esm',
    });

    const cjsContext = await context({
      ...baseConfig,
      format: 'cjs',
      outExtension: { '.js': '.cjs' },
    });

    if (watch) {
      console.log('Starting watch mode...');

      // Watch 모드로 실행 (빌드 자동 감시)
      await esmContext.watch();
      await cjsContext.watch();

      console.log('Watching for changes...');
    } else {
      // Watch 모드가 아니면 한 번 빌드 후 종료
      await esmContext.rebuild();
      await cjsContext.rebuild();
      console.log('Build completed!');

      // Context 종료
      await esmContext.dispose();
      await cjsContext.dispose();
    }
  } catch (error) {
    console.error('Build failed:', error);
    process.exit(1);
  }
};

module.exports = run;
