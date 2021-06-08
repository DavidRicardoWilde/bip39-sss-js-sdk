# bip39-sss-js-sdk
Split BIP39 mnemonics using Shamir's Secret Sharing Scheme

## Guild

0. To generate mnemonic with 'bip39' lib.
   ```ts
   import { generateMnemonic } from 'bip39';
   
   const generated_mnemonic = generateMnemonic();
   ```
1. To generate M/N mnemonic shares
   > To generate M shares and require N to recover the mnemonic
   > 
   > Accepts a BIP39 mnemonic and returns a Shares map, in which the keys are the share id's, and the values are the BIP39 mnemonics.
   ```ts
   import { recoverMnemonic } from "bip39-sss-js-sdk"

   splitMnemonic(example_mnemonic, 3, 2);
   splitMnemonic(example_mnemonic, 5, 3);
   splitMnemonic(example_mnemonic, m, n);
   ```
   
2. To recover mnemonic 
   ```ts
   import { splitMnemonic } from "bip39-sss-js-sdk"
   
   recoverMnemonic(split_1_3_5_for_generated_5_3)
   ```

3. To get address or private key with 'web3'
   ```ts
   import { mnemonicToEntropy } from 'bip39';
   web3.eth.accounts.create(mnemonicToEntropy(generated_mnemonic))
   ```


## Reference
- https://github.com/bitcoinjs/bip39
- https://medium.com/keylesstech/a-beginners-guide-to-shamir-s-secret-sharing-e864efbf3648
