import sdk from './1-initialize-sdk.js';
import { readFileSync } from 'fs';

const bundleDrop = sdk.getBundleDropModule(
  '0xB136ef5d3E3b82B38B32eCBcD48297dad3Ad85D1'
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: 'For What We Forget We Never Come Back',
        description: 'This NFT will give you access to DevonLochDAO!',
        image: readFileSync('scripts/assets/cover1000x1000.jpg'),
      },
    ]);
    console.log('✅ Successfully created a new NFT in the drop!');
  } catch (error) {
    console.error('failed to create the new NFT', error);
  }
})();

// OUTPUT
// Your app address is: 0x4621B49076f9A406864BD34034E967f9c264B5c8
// ✅ Successfully created a new NFT in the drop!
