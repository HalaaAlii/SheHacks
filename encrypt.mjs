import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.circle.com/v1/w3s/config/entity/publicKey',
  headers: {'Content-Type': 'application/json', Authorization: 'Bearer TEST_API_KEY:c01b1029e9aeec0172dc51d200027580:a45f4b511f68d5f580331846d97fd60d'}
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

//nodejs
  const forge = require('node-forge')

const entitySecret = forge.util.hexToBytes('YOUR_ENTITY_SECRET')
const publicKey = forge.pki.publicKeyFromPem('YOUR_PUBLIC_KEY')
const encryptedData = publicKey.encrypt(entitySecret, 'RSA-OAEP', {
  md: forge.md.sha256.create(),
  mgf1: {
    md: forge.md.sha256.create(),
  },
})

console.log(forge.util.encode64(encryptedData))
