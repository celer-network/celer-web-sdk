# Celer Web SDK

[![Build Status](https://travis-ci.com/celer-network/Celer-Web-SDK.svg?token=DvaxasPgAzCzksHzA2ct&branch=master)](https://travis-ci.com/celer-network/Celer-Web-SDK)

JavaScript library to interact with a local Celer node

## Building

```
npm install
npm run build
```

The built library will be at `browser/browser.js` for browsers and
`dist/index.js` for NodeJS.

## Usage

Check out a prebuilt [Celer Client](https://github.com/celer-network/celer-client) binary.

Run it with

```
./celer_client_mac -keystore <path-to-keystore-json> -config <path-to-profile-json>
```

The easiest way to get `keystore` file is to take it from `geth`. You can find details [here](https://medium.com/@julien.maffre/what-is-an-ethereum-keystore-file-86c8c5917b97)

The web API server will be started at `http://localhost:29979`.

For the browser target, the built SDK library exports a global `celer`
namespace. All APIs are exposed on a Celer client object created by
`new celer.Client(endpoint)`.

Alternatively, you can import the library as a CommonJS module like:

```javascript
const celer = require('celer-web-sdk');
```

A demo can be run with

```
npm run demo
```
and going to `http://localhost:1234` in the browser.

*NOTE: You should have enough test ether to open channel, in `demo/demo.js` it's equal to 100 Wei. Ensure that you have it on account defined `keystore` on corresponding network default is `Ropsten` (defined in `profile.json`) *

## SDK API doc
Auto-generated SDK API docs are available [on GitHub pages](https://celer-network.github.io/Celer-Web-SDK/index.html).
You can find methods of `Client` object [here](https://celer-network.github.io/Celer-Web-SDK/classes/_client_.client.html)  

