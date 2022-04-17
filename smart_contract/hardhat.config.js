require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ZSLprnJGKTzFWcGSjkCCgRzo_NdcIo3l',
      accounts: ['7d43114f1f0f721c2ed2517aed79fcf8c06f2797169cc5174b5ac9289323054e'],
    },
  },
};