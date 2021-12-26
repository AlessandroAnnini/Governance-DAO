import { ethers } from 'ethers';
import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const app = sdk.getAppModule('0x8B40712E598B785eA163C644d62b350cD024b716');

// We give our collection a name, description and primarySaleRecipientAddress, and image
(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: 'DevonLochDAO Membership',
      // A description for the collection.
      description: 'A DAO for fans of Devon Loch.',
      // The image for the collection that will show up on OpenSea.
      image: readFileSync('scripts/assets/dl-logo840x758.png'),
      // We need to pass in the address of the person who will be receiving the proceeds from sales of nfts in the module.
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      // you can set this to your own wallet address if you want to charge for the drop.
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });

    console.log(
      '✅ Successfully deployed bundleDrop module, address:',
      bundleDropModule.address
    );
    console.log(
      '✅ bundleDrop metadata:',
      await bundleDropModule.getMetadata()
    );
  } catch (error) {
    console.log('failed to deploy bundleDrop module', error);
  }
})();

//OUTPUT
/*
Your app address is: 0x4621B49076f9A406864BD34034E967f9c264B5c8
✅ Successfully deployed bundleDrop module, address: 0xB136ef5d3E3b82B38B32eCBcD48297dad3Ad85D1
✅ bundleDrop metadata: {
  metadata: {
    name: 'DevonLochDAO Membership',
    description: 'A DAO for fans of Devon Loch.',
    image: 'https://cloudflare-ipfs.com/ipfs/bafkreicr35wli2hppojradlxjp73nk6evnso4a377qrbzotujjaxheirgq',
    primary_sale_recipient_address: '0x0000000000000000000000000000000000000000'
  },
  address: '0xB136ef5d3E3b82B38B32eCBcD48297dad3Ad85D1',
  type: 11
}
*/
