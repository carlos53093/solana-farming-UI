// Here we export some useful types and functions for interacting with the Anchor program.
import { PublicKey } from '@solana/web3.js';
import type { Farming } from '../target/types/farming';
import { IDL as BrrChainFarmDappIDL } from '../target/types/farming';

// Re-export the generated IDL and type
export { Farming, BrrChainFarmDappIDL };

// After updating your program ID (e.g. after running `anchor keys sync`) update the value below.
export const programId = new PublicKey(
  '8y7XECnahJx8Lg6FwRSLeVWKCftj2RTen6G951AWGreT'
);
