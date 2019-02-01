const celer = require('../dist/index');

const client = new celer.Client('http://localhost:29979');
client
  .openChannel('0', '0', '100', '100')
  .then(cid => {
    console.log('channel', cid, 'opened');
  })
  .catch(e => {
    console.log(e);
  });
