// Here we export some useful types and functions for interacting with the Anchor program.
import { PublicKey } from '@solana/web3.js';
import type { BrrChainFarmDapp } from '../target/types/brr_chain_farm_dapp';
import { IDL as BrrChainFarmDappIDL } from '../target/types/brr_chain_farm_dapp';

// Re-export the generated IDL and type
export { BrrChainFarmDapp, BrrChainFarmDappIDL };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const programId = new PublicKey(
  '9jwG9xjKst1ARJ1SFWjydPNqAykE7yhvqVYsDDGbsSFD'
);
