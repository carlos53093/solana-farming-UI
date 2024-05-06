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

import { clusterApiUrl, Connection, LAMPORTS_PER_SOL } from "@solana/web3.js";
import {TOKEN_PROGRAM_ID,createAssociatedTokenAccount,createMint,mintTo} from '@solana/spl-token'
import assert from 'assert'
const connection=new Connection(clusterApiUrl('devnet'))
const provider = anchor.AnchorProvider.env();
anchor.setProvider(provider);

const program = anchor.workspace.Farming as Program<Farming>;