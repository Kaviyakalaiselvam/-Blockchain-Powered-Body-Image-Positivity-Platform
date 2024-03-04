// server.js
const Web3 = require('web3');
const web3 = new Web3('YOUR_ETH_NODE_URL');

// Example usage:
web3.eth.getBlockNumber().then(console.log);
