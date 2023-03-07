# synpress examples

This repository contains different examples of usage for [synpress](https://github.com/Synthetixio/synpress) which is e2e testing framework for web3 dapps.

For more information about the framework, please refer to the [synpress](https://github.com/Synthetixio/synpress) repository.

🔥 Synpress works out-of-the-box with other frameworks! There is no need to use it directly.

Check [examples](https://github.com/drptbl/synpress-examples#available-examples) below to see how to use it.

## Supported frameworks

- [synpress](https://github.com/Synthetixio/synpress)
- [Playwright](https://playwright.dev/) (as a plugin)
- [Cypress](https://github.com/cypress-io/cypress) (as a plugin)

## Supported wallets

- [MetaMask](https://metamask.io/)

## Available examples

- synpress
- [Playwright](https://github.com/drptbl/synpress-examples/tree/master/playwright) => examples of how to use synress with Playwright.
  - [isolated-state](https://github.com/drptbl/synpress-examples/tree/master/playwright/isolated-state) => example setup of Playwright with synpress using isolated state meaning that each test is run in a separate browser context with fresh instance of metamask extension. Test isolation is preferred way of running tests.
  - [shared-state](https://github.com/drptbl/synpress-examples/tree/master/playwright/shared-state) => example setup of Playwright with synpress using shared state meaning that each test is run in same browser context and share same instance of metamask extension.
  - [eslint](https://github.com/drptbl/synpress-examples/tree/master/playwright/eslint) => example setup of Playwright with synpress and eslint using isolated state.
- cypress
