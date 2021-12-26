import { ethers } from 'ethers';
import sdk from './1-initialize-sdk.js';

// This is our governance contract.
const voteModule = sdk.getVoteModule(
  '0xB1465E03d9B09061660661b9d1Ff4e4026dB09bC'
);

// This is our ERC-20 contract.
const tokenModule = sdk.getTokenModule(
  '0x174536cC1871156c40e8B11a9E1d1dCa9f039D60'
);

(async () => {
  try {
    // Give our treasury the power to mint additional token if needed.
    await tokenModule.grantRole('minter', voteModule.address);

    console.log(
      'Successfully gave vote module permissions to act on token module'
    );
  } catch (error) {
    console.error(
      'failed to grant vote module permissions on token module',
      error
    );
    process.exit(1);
  }

  try {
    // Grab our wallet's token balance, remember -- we hold basically the entire supply right now!
    const ownedTokenBalance = await tokenModule.balanceOf(
      process.env.WALLET_ADDRESS
    );

    // Grab 90% of the supply that we hold.
    const ownedAmount = ethers.BigNumber.from(ownedTokenBalance.value);
    const percent90 = ownedAmount.div(100).mul(90);

    // Transfer 90% of the supply to our voting contract.
    await tokenModule.transfer(voteModule.address, percent90);

    console.log('✅ Successfully transferred tokens to vote module');
  } catch (err) {
    console.error('failed to transfer tokens to vote module', err);
  }
})();

// OUTPUT
// Successfully gave vote module permissions to act on token module
// ✅ Successfully transferred tokens to vote module
