require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty flee spot warrior ridge remember hole inner enter outer skull'; 
let testAccounts = [
"0x95ccc6999376d5a8df3d5eec4956899eda147f9d32526f37cf3ee33fe5d55299",
"0x5e8c5c76202bcc412866c9c5a4bfd21cd695c94dbfae31621e34d5f6d7d228b1",
"0xea73803d35dbf662475e52e7054f89f8b59b6f8976d8a00fe755a311329f87fb",
"0xfc564f630abea5bd970e66c53706006f4171bb19f9ad337ad16e999767591c19",
"0x57e29c3bf117826632f75fe63fcae7fbdb64ebfd972683c7fd2cc4d81f4d6def",
"0xc0724cf6762d2ae266568fd4c9657694bd23fa015290e36e59abb6887a7cab90",
"0xce2f0ab175e792387178174bc98cf1e7e6482a33453ec7420959cf85333d973a",
"0x43c1caba9511dab8dd19c80806a354d3cd3ed6af1769f221e58572fc51f38238",
"0x27268894ee02200b966b91724f308c1af2f9ec9d6ba3fe5e0653f2b2626b72e2",
"0x5284b31ebc074d6b2814ecc85d18925b3af4b0dd0e01181f1a48dc6d9ad7aa94"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

