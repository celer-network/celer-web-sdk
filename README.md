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
