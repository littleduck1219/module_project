// const { build } = require("esbuild");

// const run = ({ entryPoints = ["src/index.ts"], pkg, config = {} }) => {
//     const dev = process.argv.includes("--dev");
//     const minify = !dev;

//     const watch = process.argv.includes("--watch");

//     const external = Object.keys({
//         ...pkg.dependencies,
//         ...pkg.peerDependencies,
//     });

//     const baseConfig = {
//         entryPoints,
//         bundle: true,
//         minify,
//         sourcemap: true,
//         outdir: "dist",
//         target: "es2019",
//         watch,
//         external,
//         ...config,
//     };

//     Promise.all([
//         build({
//             ...baseConfig,
//             format: "esm",
//         }),
//         build({
//             ...baseConfig,
//             format: "cjs",
//             outExtension: {
//                 ".js": ".cjs",
//             },
//         }),
//     ]).catch(() => {
//         console.error("Build failed");
//         process.exit(1);
//     });
// };

import esbuild from "esbuild";
import pkg from "./package.json" assert { type: "json" };

const dev = process.argv.includes("--dev");
const minify = !dev;

const watch = process.argv.includes("--watch");

const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
});

const baseConfig = {
    entryPoints: ["src/index.ts"],
    bundle: true,
    minify,
    sourcemap: true,
    outdir: "dist",
    target: "es2019",
    watch,
    external,
    // ...config,
};

Promise.all([
    esbuild.build({
        ...baseConfig,
        format: "esm",
    }),
    esbuild.build({
        ...baseConfig,
        format: "cjs",
        outExtension: {
            ".js": ".cjs",
        },
    }),
]).catch(() => {
    console.error("Build failed");
    process.exit(1);
});

// module.exports = run;
