import run from "@module_project/esbuild-config"
import pkg from "./package.json" assert { type: "json" }
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin"

const config = {
    plugins: [vanillaExtractPlugin()],
}

run({
    pkg,
    config,
})