import { ethers } from 'ethers';
import sdk from './1-initialize-sdk.js';

// This is the address to our ERC-1155 membership NFT contract.
const bundleDropModule = sdk.getBundleDropModule(
  '0xB136ef5d3E3b82B38B32eCBcD48297dad3Ad85D1'
);

// This is the address to our ERC-20 token contract.
const tokenModule = sdk.getTokenModule(
  '0x174536cC1871156c40e8B11a9E1d1dCa9f039D60'
);

(async () => {
  try {
    // Grab all the addresses of people who own our membership NFT, which has
    // a tokenId of 0.
    const walletAddresses = await bundleDropModule.getAllClaimerAddresses('0');

    if (walletAddresses.length === 0) {
      console.log(
        'No NFTs have been claimed yet, maybe get some friends to claim your free NFTs!'
      );
      process.exit(0);
    }

    // Loop through the array of addresses.
    const airdropTargets = walletAddresses.map((address) => {
      // Pick a random # between 1000 and 10000.
      const randomAmount = Math.floor(
        Math.random() * (10000 - 1000 + 1) + 1000
      );
      console.log('✅ Going to airdrop', randomAmount, 'tokens to', address);

      // Set up the target.
      const airdropTarget = {
        address,
        // Remember, we need 18 decimal placees!
        amount: ethers.utils.parseUnits(randomAmount.toString(), 18),
      };

      return airdropTarget;
    });

    // Call transferBatch on all our airdrop targets.
    console.log('🌈 Starting airdrop...');
    await tokenModule.transferBatch(airdropTargets);
    console.log(
      '✅ Successfully airdropped tokens to all the holders of the NFT!'
    );
  } catch (err) {
    console.error('Failed to airdrop tokens', err);
  }
})();

// OUTPUT
// Going to airdrop 8559 tokens to 0x083b136188B95Ca4b704D24fef02F23d7D007bA7
// 🌈 Starting airdrop...
// Your app address is: 0x4621B49076f9A406864BD34034E967f9c264B5c8
// ✅ Successfully airdropped tokens to all the holders of the NFT!
