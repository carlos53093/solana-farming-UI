import { programId, BrrChainFarmDappIDL } from '@brr-chain-farm-dapp/anchor';
import { Program } from '@coral-xyz/anchor';
import * as anchor from '@coral-xyz/anchor'
import { useConnection } from '@solana/wallet-adapter-react';
import { Keypair, sendAndConfirmTransaction } from '@solana/web3.js';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useCluster } from '../cluster/cluster-data-access';
import { useAnchorProvider } from '../solana/solana-provider';
import { useTransactionToast } from '../ui/ui-layout';
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import {TOKEN_PROGRAM_ID,createAssociatedTokenAccount,createMint,mintTo} from '@solana/spl-token'
import {getPoolPda,getStakingVaultPda,getRewardAVaultPda,getUserPda} from './utils'
function sleep(ms: number) {
  return new Promise((res) => {
    setTimeout(res, ms);
  });
}
export function useBrrChainFarmDappProgram() {
  const TOKEN_DECIMAL=6;
  const REWARD_DURATION = new anchor.BN(10);
  const { connection } = useConnection();
  const { cluster } = useCluster();
  const transactionToast = useTransactionToast();
  const provider = useAnchorProvider();
  const program = new Program(BrrChainFarmDappIDL, programId, provider);


  const BASE_KEYPAIR = anchor.web3.Keypair.generate();
    const ADMIN_KEYPAIR = anchor.web3.Keypair.generate();
    const USER_KEYPAIR = anchor.web3.Keypair.generate();
    const OTHER_USER_KEYPAIR = anchor.web3.Keypair.generate();
    const FUNDER_KEYPAIR = anchor.web3.Keypair.generate();

    //Declaring Tokens
    var stakingMint: anchor.web3.PublicKey ;
    var rewardMint: anchor.web3.PublicKey ;

    var stakingToken ;
    var rewardToken ;

    var userStakingATA: anchor.web3.PublicKey ;
    var userRewardATA: anchor.web3.PublicKey ;

    var otheruserStakingATA: anchor.web3.PublicKey ;
    var otheruserRewardATA: anchor.web3.PublicKey ;

    var adminStakingATA: anchor.web3.PublicKey ;
    var adminRewardATA: anchor.web3.PublicKey ;


  const start_farming=useMutation({
    mutationKey:['Farming','start',{cluster}],
    mutationFn:async ()=>{
      var sig = await program.provider.connection.requestAirdrop(
        ADMIN_KEYPAIR.publicKey,
        10000 * LAMPORTS_PER_SOL
      );
      await sleep(500);
      await program.provider.connection.confirmTransaction(sig);
      sig = await program.provider.connection.requestAirdrop(
        USER_KEYPAIR.publicKey,
        100 * LAMPORTS_PER_SOL
      );
      await sleep(500);
      await program.provider.connection.confirmTransaction(sig);
      sig = await program.provider.connection.requestAirdrop(
        OTHER_USER_KEYPAIR.publicKey,
        100 * LAMPORTS_PER_SOL
      );
      await sleep(500);
      await program.provider.connection.confirmTransaction(sig);
      stakingToken = await createMint(
        program.provider.connection,
        ADMIN_KEYPAIR,
        ADMIN_KEYPAIR.publicKey,
        null,
        TOKEN_DECIMAL,
        undefined,
        undefined,
        TOKEN_PROGRAM_ID
      );
      console.log("---------------staking token----------------\n",stakingToken.toString())
      stakingMint=stakingToken;
      userStakingATA=await createAssociatedTokenAccount(
        program.provider.connection,
        ADMIN_KEYPAIR,
        stakingMint,
        USER_KEYPAIR.publicKey
        //stakingToken.programId
      )
      otheruserStakingATA=await createAssociatedTokenAccount(
        program.provider.connection,
        ADMIN_KEYPAIR,
        stakingMint,
        OTHER_USER_KEYPAIR.publicKey
        //stakingToken.programId
      )
      adminStakingATA=await createAssociatedTokenAccount(
        program.provider.connection,
        ADMIN_KEYPAIR,
        stakingMint,
        ADMIN_KEYPAIR.publicKey
        //stakingToken.programId
      )
      rewardToken= await createMint(
        program.provider.connection,
        ADMIN_KEYPAIR,
        ADMIN_KEYPAIR.publicKey,
        null,
        TOKEN_DECIMAL,
        undefined,
        undefined,
        TOKEN_PROGRAM_ID
      );
      rewardMint=rewardToken;
      userRewardATA=await createAssociatedTokenAccount(
        program.provider.connection,
        ADMIN_KEYPAIR,
        rewardMint,
        USER_KEYPAIR.publicKey
      );
      otheruserRewardATA=await createAssociatedTokenAccount(
        program.provider.connection,
        ADMIN_KEYPAIR,
        rewardMint,
        OTHER_USER_KEYPAIR.publicKey
      );
      adminRewardATA=await createAssociatedTokenAccount(
        program.provider.connection,
        ADMIN_KEYPAIR,
        rewardMint,
        ADMIN_KEYPAIR.publicKey
      );
      
    },
    onSuccess:()=>{
      
    },
    onError:()=>{

    }
  })

  const getProgramAccount = useQuery({
    queryKey: ['get-program-account', { cluster }],
    queryFn: () => connection.getParsedAccountInfo(programId),
  });

  const accounts = useQuery({
    queryKey: ['my-solana-dapp-03', 'all', { cluster }],
    queryFn: () => program.account.pool.all(),
  });

  // const greet = useMutation({
  //   mutationKey: ['brrChainFarmDapp', 'greet', { cluster }],
  //   mutationFn: (keypair: Keypair) => program.methods.greet().rpc(),
  //   onSuccess: (signature) => {
  //     transactionToast(signature);
  //   },
  //   onError: () => toast.error('Failed to run program'),
  // });

  const init_pool=useMutation({
    mutationKey:['Farming','initializePool',{cluster}],
    mutationFn:async ()=>{
      //Users creation for Simulation
      const [farmingPoolAddress, _farmingPoolBump] = await getPoolPda(
        program,
        stakingMint,
        rewardMint,
        BASE_KEYPAIR.publicKey
      );
      console.log("-----------------Farmin Pool Address--------------------\n",farmingPoolAddress.toString())
      console.log("-----------------Program ID----------------\n",program.programId.toString())
      const [stakingVaultAddress, _stakingVaultBump] = await getStakingVaultPda(
        program,
        stakingMint,
        rewardMint,
        BASE_KEYPAIR.publicKey
      );
      const [rewardAVaultAddress, _rewardAVaultBump] = await getRewardAVaultPda(
        program,
        stakingMint,
        rewardMint,
        BASE_KEYPAIR.publicKey
      );
      
      await program.methods
      .initializePool(REWARD_DURATION)
      .accounts({
        authority: ADMIN_KEYPAIR.publicKey,
        base: BASE_KEYPAIR.publicKey,
        pool: farmingPoolAddress,
        rent: anchor.web3.SYSVAR_RENT_PUBKEY,
        rewardAMint: rewardMint,
        // rewardBMint: rewardMint,
        rewardAVault: rewardAVaultAddress,
        // rewardBVault: rewardBVaultAddress,
        stakingMint,
        stakingVault: stakingVaultAddress,
        systemProgram: anchor.web3.SystemProgram.programId,
        tokenProgram: TOKEN_PROGRAM_ID,
      })
      .signers([BASE_KEYPAIR,ADMIN_KEYPAIR])
      .rpc();
    },
    onSuccess:(signature)=>{
      // transactionToast(signature);
      // return accounts.refetch();
      console.log(signature)
      return signature;
    },
    onError:()=>toast.error('Failed to Init'),
  })

  const create_user=useMutation({
    mutationKey:['Farming','createUser',{cluster}],
    mutationFn:async ()=>{
      const [farmingPoolAddress, _farmingPoolBump] = await getPoolPda(
        program,
        stakingMint,
        rewardMint,
        BASE_KEYPAIR.publicKey
      );
      const [userStakingAddress, _userStakingAddressBump] = await getUserPda(
        program,
        farmingPoolAddress,
        USER_KEYPAIR.publicKey
      );
  
      await program.methods
        .createUser()
        .accounts({
          owner: USER_KEYPAIR.publicKey,
          pool: farmingPoolAddress,
          systemProgram: anchor.web3.SystemProgram.programId,
          user: userStakingAddress,
        })
        .signers([USER_KEYPAIR])
        .rpc();
    },
    onSuccess:()=>{
      console.log(userStakingATA.toString())
    },
    onError:()=>{

    }
  })

  return {
    program,
    programId,
    getProgramAccount,
    // greet,
    start_farming,
    init_pool,
    create_user
  };
}
