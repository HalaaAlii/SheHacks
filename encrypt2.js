const forge = require('node-forge')

const entitySecret = forge.util.hexToBytes('b5226834700abf1bd6bbfd1e6ef4fa0ff2e1237a0d8557416fca4f8adc3fa154')
const publicKey = forge.pki.publicKeyFromPem('-----BEGIN RSA PUBLIC KEY-----\n' +
'MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAygzmhRO67tUBXpZiXO39\n' +
'AD22sriaTW073IRWU/CXDJ784JQoBJopGY4fTFuYxVMrYSdmd7wzu8ovsdmfMZGD\n' +
'djr7rEIAITuRmItjue5vdEUZsMK+gROXLao8QBVShOH4q9fvk31Ahef4ivAWaAOu\n' +
'JRoufVB1bm4DmATmEGKq/Vi2FQy+2BANhlpjvLk55YriDzs9n8LL5Xpu6ByW+wrG\n' +
'nVZD1lnydfCvEyBnWrdNPxDJd/UPDXcKXTj2zFvYH0SIz5KAVdLYIWxSR+L0+5s1\n' +
'1MYK4qWFh/NE7H+JbCMkVW4PLxTowD8Tzg+KTyPZLulDQ+fodyFfWYsl79e3DV96\n' +
'xX2B3iV6RXzR+jx8eVAIU8XY8/KNPE+JjaparTk10KdrEgEDj+qt2FR942K1KeJl\n' +
'N29+83tWBRZ905DmM3wH6eMMzIK6tvJF0ep4gNPo5jeZ0ruUNh0U0tCNfPl9NnrB\n' +
'5fmIRI5veDG+2AWPpVSiX1TUjOPb/8lWp34vDfZmVSqd+a/79umsGT5XADsqlkHN\n' +
'ZpR0/QNdxYpgg/e8uwIQcBlpSj6nEO2Mm2B4JF1YOdUcccU+zl3Mq2qT/efp/Fd6\n' +
'UNu0YWLZtzuizRTaibiwnTlG04mFpsKg7BK1iJtjdyrLwCtt9JPsp/WbG6vNBMil\n' +
'l0zhfMWxFmj5c9nueO0FUJkCAwEAAQ==\n' +
'-----END RSA PUBLIC KEY-----\n')
const encryptedData = publicKey.encrypt(entitySecret, 'RSA-OAEP', {
  md: forge.md.sha256.create(),
  mgf1: {
    md: forge.md.sha256.create(),
  },
})

console.log(forge.util.encode64(encryptedData))
