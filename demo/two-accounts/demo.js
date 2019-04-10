const celer = require('../../browser/browser'); // '../dist/index' for NodeJS
const config = require('./config.json'); // '../dist/index' for NodeJS

const account1 = config[0].ethereumAddress;
const account2 = config[1].ethereumAddress;

const client1 = new celer.Client(config[0].celerClientHost);
const client2 = new celer.Client(config[1].celerClientHost);

// 5 mWei
const amountWei = '5000000000000000';

// 500 mWei
const channelCapacity = amountWei + '00';

function depositEth(client, elemId) {
  const elem = document.getElementById(elemId);
  elem.textContent = "Run...";

  client.depositEth(amountWei)
    .then(txHash => {
      elem.textContent = `https://ropsten.etherscan.io/tx/${txHash}`
    })
    .catch(e => {
      elem.textContent = JSON.stringify(e)
    })
}

function withdrawEth(client, elemId) {

  const elem = document.getElementById(elemId);
  elem.textContent = "Run...";

  client.withdrawEth(amountWei)
    .then(txHash => {
      elem.textContent = `${txHash}`
    })
    .catch(e => {
      elem.textContent = JSON.stringify(e)
    })
}

function sendEth(client, destination, elemId) {

  const elem = document.getElementById(elemId);
  elem.textContent = "Run...";

  client.sendEth(amountWei, destination)
    .then(result => {
      elem.textContent = `${result}`
    })
    .catch(e => {
      elem.textContent = JSON.stringify(e)
    })
}

function getEthBalance(client, elemId) {
  const elem = document.getElementById(elemId);
  elem.textContent = "Run...";

  client.getEthBalance(amountWei)
    .then(result => {
      elem.textContent = JSON.stringify(result)
    })
    .catch(e => {
      elem.textContent = JSON.stringify(e)
    })
}

function openChannel(client, elemId, capacity) {
  const elem = document.getElementById(elemId);

  client.openEthChannel(capacity, capacity)
    .then(cid => {
      elem.textContent = `channel is opened, cid =  ${cid}, capacity = ${capacity}, peerCapacity = ${capacity}`
    })
    .catch(e => {
      elem.textContent = JSON.stringify(e);
    });
}


// On loaded
document.addEventListener("DOMContentLoaded", function (event) {

  document.getElementById("account1").innerText = `EthereumAddress: ${account1}`;
  openChannel(client1, 'channel1-status', channelCapacity);

  document.getElementById("account2").innerText = `EthereumAddress: ${account2}`;
  openChannel(client2, 'channel2-status', channelCapacity);


  //-- Deposit callbacks
  document.getElementById("ac1-deposit").addEventListener("click", () => {
    depositEth(client1, "ac1-deposit-code");
  });

  document.getElementById("ac2-deposit").addEventListener("click", () => {
    depositEth(client2, "ac2-deposit-code");
  });
  //--

  //-- Withdraw callbacks
  document.getElementById("ac1-withdraw").addEventListener("click", () => {
    withdrawEth(client1, "ac1-withdraw-code");
  });

  document.getElementById("ac2-withdraw").addEventListener("click", () => {
    withdrawEth(client2, "ac2-withdraw-code");
  });
  //--


  //-- Send callbacks
  document.getElementById("ac1-send").addEventListener("click", () => {
    sendEth(client1, account2, "ac1-send-code");
  });

  document.getElementById("ac2-send").addEventListener("click", () => {
    sendEth(client2, account1,"ac2-send-code");
  });
  //--


  //-- Get balance callbacks
  document.getElementById("ac1-get-balance").addEventListener("click", () => {
    getEthBalance(client1, "ac1-get-balance-code");
  });

  document.getElementById("ac2-get-balance").addEventListener("click", () => {
    getEthBalance(client2, "ac2-get-balance-code");
  });
  //--

});


