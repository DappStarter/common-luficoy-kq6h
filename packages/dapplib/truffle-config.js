require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi forget tell tissue renew stereo snake gloom knock equal gauge'; 
let testAccounts = [
"0xa82ed2fffe3616465ca54fdf7c58b0c6d6cf98451c24d606fd5bf8625e195a30",
"0x58395bbb1ef222f07ba0ca30d9621b4730e4a98de9d76356aa8f4e25d9ebcf2b",
"0x0965673e94daf5707e9ca84f89ec77af533208be653b936e597461ff5cef7f5a",
"0xac37ff7eed79b3561d776f21da11da7ce4343cfa466a332fabaec5182fb0143c",
"0x9a919b79f450932a45bb66b8453a647a2e8699efbe0facd08a86ad88aada8523",
"0xfe53f55ccdbd8f6a0f5f91414458ce24c2e662b56eaef6c3c7d39a6e150138fb",
"0x7994c900967edf233e64196450906fb2a6dbb43c3be1468ad36ce1c44d43ef3c",
"0xffd2b3978269928e710e21b63682bd3a0f1b25ad5f73568f94cb8cdaf2df0436",
"0xc56abff2ba22afbb10f20493883db52f4d75c17dd1a23ff21a3dc5d299c0f959",
"0x734c1328533992d1eaf326463eedfa4084eeee5bc848e89e37a771696c1d72cb"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


