const { initiateDeveloperControlledWalletsClient } = require('@circle-fin/developer-controlled-wallets');
const circleDeveloperSdk = initiateDeveloperControlledWalletsClient({
  apiKey: 'TEST_API_KEY:c01b1029e9aeec0172dc51d200027580:a45f4b511f68d5f580331846d97fd60d',
  entitySecret: 'b5226834700abf1bd6bbfd1e6ef4fa0ff2e1237a0d8557416fca4f8adc3fa154'
});

async function createTokenTransaction() {
  try {
    const response = await circleDeveloperSdk.createTransaction({
      walletId: 'c2412c1e-43a9-59b9-9c16-a7f22903e701',
      tokenId: '7adb2b7d-c9cd-5164-b2d4-b73b088274dc',
      destinationAddress: '0xae901581bcb4fd9f061ddd84bcfca01a11dfca0c',
      amounts: ['.01'],
      fee: {
        type: 'level',
        config: {
          feeLevel: 'MEDIUM'
        }
      }
    });

    console.log('Transaction Response:', response);
  } catch (error) {
    console.error('Error creating transaction:', error);
  }
}

createTokenTransaction();