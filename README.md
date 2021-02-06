# Flutter Challenges backend

A node.js GraphQL server that powers the Flutter Challenges website.

## Requirements

- pnpm
- node

## Getting started

1. `pnpm i` to install all the packages
2. `pnpm run dev` to start the dev server on `localhost:4000`.

## Project structure

```
.
├── README.md
├── bin (project scripts)
├── build (typescript output folder)
├── package.json
├── pnpm-lock.yaml
├── src
    ├── (... various domains, e.g. users)
        ├── index.ts (exported members of this domain)
        ├── <domain-name>-resolver.ts (graphql resolvers for this domain)
        └── (... other code private to this domain)
    ├── loaders (server initialization code)
    ├── server.ts (server code entry)
    └── typedefs (useful typescript types)
        └── hello-resolver.ts
```
