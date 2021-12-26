import sdk from './1-initialize-sdk.js';

const bundleDrop = sdk.getBundleDropModule(
  '0xB136ef5d3E3b82B38B32eCBcD48297dad3Ad85D1'
);

(async () => {
  try {
    const claimConditionFactory = bundleDrop.getClaimConditionFactory();
    // Specify conditions.
    claimConditionFactory.newClaimPhase({
      // time when users are allowed to start minting NFTs.
      startTime: new Date(),
      // max # of membership NFTs that can be minted.
      maxQuantity: 50_000,
      // specifies how many tokens someone can claim in a single transaction.
      maxQuantityPerTransaction: 1,
    });

    // interact with our deployed contract on-chain and adjust the conditions.
    // in this case, everyone mints an NFT w/ id 0.
    await bundleDrop.setClaimCondition(0, claimConditionFactory);
    console.log(
      '✅ Sucessfully set claim condition on bundle drop:',
      bundleDrop.address
    );
  } catch (error) {
    console.error('Failed to set claim condition', error);
  }
})();

// OUTPUT
// Your app address is: 0x4621B49076f9A406864BD34034E967f9c264B5c8
// ✅ Sucessfully set claim condition on bundle drop: 0xB136ef5d3E3b82B38B32eCBcD48297dad3Ad85D1
