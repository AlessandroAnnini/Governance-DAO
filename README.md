# Build your own DAO with javascript

DAOs are taking over. Build one yourself for fun. Maybe it's a meme DAO for your friends. Maybe it's a DAO that aims to fix climate change. Up to you. We'll be going over things like minting a membership NFT, creating/airdropping a token, public treasuries, and governance using a token!

[buildspace project](https://app.buildspace.so/projects/COb520aae3-7925-42f4-a5e7-eaf718933766)

## Screen

![DevonLochDAO](screen.png 'DevonLochDAO')

## What you can find in the code

✅ deployed my own custom ERC-20 token

✅ deployed my own ERC-1155 NFT people can mint to join your DAO.

✅ deployed my own governance contract + treasury.

✅ built a dapp that lets people connect their wallet, get an NFT, see a DAO Dashboard where they can see other members + actually vote on proposals that are executed directly by your governance contract.

## Environment varialbles

Make a `.env` file on the root of your project

```txt
PRIVATE_KEY=<YOUR_PRIVATE_KEY_HERE>
ALCHEMY_API_URL=<YOUR_ALCHEMY_API_URL>
WALLET_ADDRESS=<YOUR_WALLET_ADDRESS>
```

## Useful links

- [Network ID and chain ID](https://besu.hyperledger.org/en/stable/Concepts/NetworkID-And-ChainID/)
- [Smart contract code that thirdweb uses](https://github.com/nftlabs/nftlabs-protocols/blob/main/contracts/LazyNFT.sol)
- [What is IPFS?](https://docs.ipfs.io/concepts/what-is-ipfs/)
- [ether signers](https://docs.ethers.io/v5/api/signer/)
- [React useMemo](https://reactjs.org/docs/hooks-reference.html#usememo)
- [Governance contract](https://docs.openzeppelin.com/contracts/4.x/api/governance)
- [Liquidity pools](https://docs.uniswap.org/protocol/V2/concepts/core-concepts/pools)
