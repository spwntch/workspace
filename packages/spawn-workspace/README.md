# spawn-workspace

Generate a new Spawntech workspace

> ### This package is currently pre-release.

## What is it?

It's a command to spawn a new nx monorepo workspace, kitted out with everything you need to use **Spawntech's** other packages efficiently.

## Getting Started

### Spawning a workspace

```bash
pnpm dlx spawn-workspace
cd <WORKSPACE_NAME>
pnpm install
```

### Launching Docs

Assuming you opted in to the generation of Spawntech's **Getting Started Docs**,

```bash
pnpm run docs
```

### Launching Boilerplate Apps

Assuming you opted in to one or more of the following boilerplate apps offered by the cli,

```bash
// To run the sample-website
pnpm run site
```
