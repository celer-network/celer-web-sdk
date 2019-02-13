const celer = require('../browser/browser'); // '../dist/index' for NodeJS

const client = new celer.Client('http://localhost:29979');
client
  .openEthChannel('100', '100')
  .then(cid => {
    console.log('channel', cid, 'opened');
  })
  .catch(e => {
    console.log(e);
  });
