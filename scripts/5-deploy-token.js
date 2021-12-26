import sdk from './1-initialize-sdk.js';

// In order to deploy the new contract we need our old friend the app module again.
const app = sdk.getAppModule('0x4621B49076f9A406864BD34034E967f9c264B5c8');

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      // What's your token's name? Ex. "Ethereum"
      name: 'DevonLochDAO Governance Token',
      // What's your token's symbol? Ex. "ETH"
      symbol: 'DLH',
    });
    console.log(
      '✅ Successfully deployed token module, address:',
      tokenModule.address
    );
  } catch (error) {
    console.error('failed to deploy token module', error);
  }
})();

// OUTPUT
// Your app address is: 0x4621B49076f9A406864BD34034E967f9c264B5c8
// Successfully deployed token module, address: 0x174536cC1871156c40e8B11a9E1d1dCa9f039D60
