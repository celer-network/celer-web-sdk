const celer = require('../../browser/browser'); // '../dist/index' for NodeJS

const client = new celer.Client('http://localhost:29979');

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async function() {
  const channelID = await client.openEthChannel('100', '100');
  console.log('channel', channelID, 'has been opened');
  const balanceBefore = await client.getEthBalance();
  console.log('balance before', balanceBefore);
  await client.sendEth('1', 'f805979adde8d63d08490c7c965ee5c1df0aaae2');
  await timeout(1000);
  const balanceAfter = await client.getEthBalance();
  console.log('balance after', balanceAfter);
})().catch(console.log);
