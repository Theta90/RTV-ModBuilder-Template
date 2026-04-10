import modBuilder from "rtv-modbuilder";
import packageInfoJson from "./package.json" with { type: "json" };

const modName = packageInfoJson.displayName;

await modBuilder({
  packageInfo: {
    id: packageInfoJson.name,
    name: modName,
    version: packageInfoJson.version,
  },

  projectRoot: "",
  outDir: "build",

  globs: [
    {
      pattern: "**/*",
      options: { ignore: ["**/do_not_include.txt"], cwd: "src" },
    },
  ],

  modTxtOptions: {
    path: "src/mod.txt",
    autoload: { [`${modName}Main`]: "Main.gd" },
  },

  options: {
    includeVersionInName: true,
    verbose: true,
  },
}).catch((err) => {
  console.error("Error building mod:", err);
});
