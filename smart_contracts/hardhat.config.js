require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/bjN8Ce3D6g0m_CyL5GmMd_d086jUvC72',
      accounts: [
        'c85ce63d91b9d27679643992524bdc8ffb066967b748b7a38c65de67cfa32463',
      ],
    },
  },
};
