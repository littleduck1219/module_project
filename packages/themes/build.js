import run from "@duck-ui/esbuild-config";
import pkg from "./package.json" assert { type: "json" };

run({
  pkg,
});
