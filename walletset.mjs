import fetch from 'node-fetch';

const url = 'https://api.circle.com/v1/w3s/developer/walletSets';
const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json', Authorization: 'Bearer TEST_API_KEY:c01b1029e9aeec0172dc51d200027580:a45f4b511f68d5f580331846d97fd60d'},
  body: JSON.stringify({
    idempotencyKey: 'f011b581-c0b5-41c2-9433-78c79cdb7b0a',
    entitySecretCipherText: 'b5226834700abf1bd6bbfd1e6ef4fa0ff2e1237a0d8557416fca4f8adc3fa154',
    name: 'maheen'
  })
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));