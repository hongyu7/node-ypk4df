const eth_util = require('ethereumjs-util');

// public keys are public :) no one can access your account with only your public key
const publicKey =
  '0xfc72d2d67522e0ae8f5d7f547b89f9a473cf89c707dddec7a56eabbc01cc144b70955d6edd5e269219a3e28afeb777b7122fac73e36a596df180b6697bbe9f2e';

// turn public key string into a buffer
const publicKeyAsBuffer = eth_util.toBuffer(publicKey);

// get address from a public key (as a buffer)
const addressBuffer = eth_util.pubToAddress(publicKeyAsBuffer);

// turn the buffer of an address into a hex string
const address = eth_util.bufferToHex(addressBuffer);

// log address string to console
console.log(address);
