import * as anchor from '@coral-xyz/anchor';
import { Program } from '@coral-xyz/anchor';
import { Farming } from '../target/types/farming';
import {
  getPoolPda,
  getRewardAVaultPda,
  // getRewardBVaultPda,
  getStakingVaultPda,
  getUserPda,
  REWARD_DURATION,
} from "./utils";


const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const program = anchor.workspace.Farming as Program<Farming>;

const BASE_KEYPAIR = anchor.web3.Keypair.generate();
const ADMIN_KEYPAIR = anchor.web3.Keypair.generate();
const USER_KEYPAIR = anchor.web3.Keypair.generate();
const OTHER_USER_KEYPAIR = anchor.web3.Keypair.generate();
const FUNDER_KEYPAIR = anchor.web3.Keypair.generate();
const TOKEN_DECIMAL = 6;
const TOKEN_MULTIPLIER = 10 ** TOKEN_DECIMAL;

function sleep(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}

describe('brr-chain-farm-dapp', () => {

  it('Init the Pool', async () => {
    // Add your test here.
  });
});
