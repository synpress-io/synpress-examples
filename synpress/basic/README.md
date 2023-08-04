# synpress/basic example

## How to run

- `pnpm install`
- `pnpm test` or `pnpm test:headless`

## Quick notes

- `pnpm` is used as a package manager. You can use `npm` or `yarn` as well.
- Take a look at `.npmrc` file which has few requirements to make `pnpm` work
  with types. This is not required if you're using `npm` or `yarn`.
- Environmental variables from `.env` file are loaded automatically if you're
  using `synpress` runner. If you want to do this by yourself, use `env-cmd`
  module.
