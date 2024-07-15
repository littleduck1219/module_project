import run from "@module_project/esbuild-config"
import pkg from "./package.json" assert { type: "json" }

run({
    pkg,
})