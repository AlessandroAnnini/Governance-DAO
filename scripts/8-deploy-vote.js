import sdk from './1-initialize-sdk.js';

// Grab the app module address.
const appModule = sdk.getAppModule(
  '0x4621B49076f9A406864BD34034E967f9c264B5c8'
);

(async () => {
  try {
    const voteModule = await appModule.deployVoteModule({
      // Give your governance contract a name.
      name: "DevonLochDAO's Proposals",

      // This is the location of our governance token, our ERC-20 contract!
      votingTokenAddress: '0x174536cC1871156c40e8B11a9E1d1dCa9f039D60',

      // After a proposal is created, when can members start voting?
      // For now, we set this to immediately.
      proposalStartWaitTimeInSeconds: 0,

      // How long do members have to vote on a proposal when it's created?
      // Here, we set it to 24 hours (86400 seconds)
      proposalVotingTimeInSeconds: 24 * 60 * 60,

      // In order for a proposal to pass, a minimum x % of token must be used in the vote.
      votingQuorumFraction: 0,

      // What's the minimum # of tokens a user needs to be allowed to create a proposal?
      // I set it to 0. Meaning no tokens are required for a user to be allowed to
      // create a proposal.
      minimumNumberOfTokensNeededToPropose: '0',
    });

    console.log(
      '✅ Successfully deployed vote module, address:',
      voteModule.address
    );
  } catch (err) {
    console.log('Failed to deploy vote module', err);
  }
})();

// OUTPUT
// Your app address is: 0x4621B49076f9A406864BD34034E967f9c264B5c8
// ✅ Successfully deployed vote module, address: 0xB1465E03d9B09061660661b9d1Ff4e4026dB09bC
