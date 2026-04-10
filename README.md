## Setup

Install the RTV-ModBuilder as a dev dependency via:

```sh

npm i -D "github:Theta90/RTV-ModBuilder#main"

```

## How It Works

This script (index.js) serves as the build entry point for the mod. Running it (e.g., via F5
or `node index.js`) will invoke the RTV-ModBuilder and produce the final mod output
in the configured output directory.

## Configuration

This file must be tailored to each specific project. The following options should
be adjusted per project:

- **`packageInfo`** — Suggested to use the values from `package.json`:
- `id` — The package `name` field, used as the mod's unique identifier.
- `name` — The package `displayName` field, used as the human-readable mod name.
- `version` — The package `version` field.

- **`projectRoot`** — The root directory of the project, relative to this file.

- **`outDir`** — The directory where the built mod will be output (e.g., `"build"`).

- **`globs`** — A list of glob patterns describing which source files to include.
  Each entry accepts an `options` object supporting `ignore` patterns and a `cwd`
  (working directory) to resolve files from. Adjust these to match your project's
  source structure. For more details, see [text](https://www.archiverjs.com/).

- **`modTxtOptions`** — Configuration for generating the mod's `mod.txt` file:
- `path` — Path to the source `mod.txt` template.
- `autoload` — A map of autoload names to their corresponding script paths.
  Keys and values should reflect the mod's actual autoload setup.

- **`options`** — Additional builder options:
- `includeVersionInName` — Whether to append the version number to the output
  mod's name.
- `verbose` — Whether to enable verbose logging during the build.
