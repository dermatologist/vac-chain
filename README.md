# vac-chain

![vac-chain](https://raw.github.com/dermatologist/vac-chain/develop/docs/block-chain.jpg)

Most healthcare blockchains use an off chain storage model with only the location of the data stored on-chain. This model shares some of the drawbacks of a centralized health information exchange model and is unlikely to be widely adopted.

However, there are discrete pieces of health information that, if stored on-chain may have a huge impact on operational efficiency, availability and patient safety. Vaccination and allergy information are typical examples.

vac-chain is a prototype of an on-chain storage of vaccination information on Ethereum blockchain using smart contracts that are designed in an object-oriented manner using solidity. This may be extended for similar use cases in medicine.

## Work in Progress (Visit nuchange.ca / canehealth.com for updates)

## Created using

[Truffle's react-auth-box:](https://github.com/truffle-box/react-auth-box)

## Installation

1. Install Truffle globally.
    ```javascript
    npm install -g truffle
    ```

2. Compile and migrate the smart contracts.
    ```javascript
    truffle compile
    truffle migrate
    ```

3. Run the webpack server for front-end hot reloading (outside the development console). Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm run start
    ```

4. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // If inside the development console.
    test

    // If outside the development console..
    truffle test
    ```

5. Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.
    ```javascript
    // Run Jest outside of the development console for front-end component tests.
    npm run test
    ```

6. To build the application for production, use the build command. A production build will be in the build_webpack folder.
    ```javascript
    npm run build
    ```

## FAQ

* __How do I setup for development?__

    I run ganache-cli on 192.168.0.250:7545 (Change this in `src/util/web3/getWeb3.js` and `truffle.js`)

* __How do I use this with the EthereumJS TestRPC?__

    It's as easy as modifying the config file! [Check out our documentation on adding network configurations](http://truffleframework.com/docs/advanced/configuration#networks). Depending on the port you're using, you'll also need to update line 34 of `src/util/web3/getWeb3.js`.

* __Why is there both a truffle.js file and a truffle-config.js file?__

    `truffle-config.js` is a copy of `truffle.js` for compatibility with Windows development environments. Feel free to it if it's irrelevant to your platform.

* __Where is my production build?__

    The production build will be in the build_webpack folder. This is because Truffle outputs contract compilations to the build folder.

* __Where can I find more documentation?__

    This box is a marriage of [Truffle](http://truffleframework.com/) and a React setup created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Either one would be a great place to start!
