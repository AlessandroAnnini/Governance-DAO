import sdk from './1-initialize-sdk.js';

const tokenModule = sdk.getTokenModule(
  '0x174536cC1871156c40e8B11a9E1d1dCa9f039D60'
);

(async () => {
  try {
    // Log the current roles.
    console.log(
      '👀 Roles that exist right now:',
      await tokenModule.getAllRoleMembers()
    );

    // Revoke all the superpowers your wallet had over the ERC-20 contract.
    // So I cannot mint tokens for myself.
    await tokenModule.revokeAllRolesFromAddress(process.env.WALLET_ADDRESS);
    console.log(
      '🎉 Roles after revoking ourselves',
      await tokenModule.getAllRoleMembers()
    );
    console.log(
      '✅ Successfully revoked our superpowers from the ERC-20 contract'
    );
  } catch (error) {
    console.error('Failed to revoke ourselves from the DAO treasury', error);
  }
})();

// OUTPUT
/*
Your app address is: 0x4621B49076f9A406864BD34034E967f9c264B5c8
👀 Roles that exist right now: {
  admin: [ '0x083b136188B95Ca4b704D24fef02F23d7D007bA7' ],
  minter: [
    '0x083b136188B95Ca4b704D24fef02F23d7D007bA7',
    '0xB1465E03d9B09061660661b9d1Ff4e4026dB09bC'
  ],
  pauser: [ '0x083b136188B95Ca4b704D24fef02F23d7D007bA7' ],
  transfer: [ '0x083b136188B95Ca4b704D24fef02F23d7D007bA7' ]
}
🎉 Roles after revoking ourselves {
  admin: [],
  minter: [ '0xB1465E03d9B09061660661b9d1Ff4e4026dB09bC' ],
  pauser: [],
  transfer: []
}
✅ Successfully revoked our superpowers from the ERC-20 contract
*/
