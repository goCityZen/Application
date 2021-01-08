# Cityzen Application

This is a monorepo to eventually house the majority of the core platform.

## Packages
- (WebApp)[packages/webapp] - Next.JS Application for the primary Site.
- (API)[packages/api] - (Work in progress), common package to allow for importing of api.
- (Common)[packages/common] - All shared common code. Avoid putting UI here, rather place shared business logic, interfaces, etc...
- (UI)[packages/ui] - Any shared UI here. 

## Getting Started

### Installation

**Note** this depends on Yarn - do not use npm **

1.) `yarn install` or `yarn` for short.


### Quick Tips

- **Adding a local dependency?** - `yarn add @cityzen/ui@0.0.1` (forgetting to tag the version will lead to not found error).
- **Run a script on a particular package, but from root?** - `yarn workspaces @cityzen/webapp run build`
- **Update TS Config Automatically** - `yarn run update:tsconfig`.