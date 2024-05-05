import { Keypair } from '@solana/web3.js';
import { useBrrChainFarmDappProgram } from './brr-chain-farm-dapp-data-access';
import { useEffect } from 'react';

export function BrrChainFarmDappCreate() {
  const { init_pool, create_user, start_farming } = useBrrChainFarmDappProgram();
  useEffect(()=>{
    start_farming.mutateAsync()
  },[])
  return (
    <>
    {!start_farming.isPending&&(
      <>
      <button
        className="btn btn-xs lg:btn-md btn-primary"
        onClick={() => init_pool.mutateAsync()}
        disabled={init_pool.isPending}
      >
        Init Pool{init_pool.isPending && '...'}
      </button>
      <button
        className="btn btn-xs lg:btn-md btn-primary"
        onClick={() => create_user.mutateAsync()}
        disabled={create_user.isPending}
      >
        Create User{create_user.isPending && '...'}
      </button>
      </>
    )}
    </>
  );
}

export function BrrChainFarmDappProgram() {
  const { getProgramAccount } = useBrrChainFarmDappProgram();

  if (getProgramAccount.isLoading) {
    return <span className="loading loading-spinner loading-lg"></span>;
  }
  if (!getProgramAccount.data?.value) {
    return (
      <div className="alert alert-info flex justify-center">
        <span>
          Program account not found. Make sure you have deployed the program and
          are on the correct cluster.
        </span>
      </div>
    );
  }
  return (
    <div className={'space-y-6'}>
      <pre>{JSON.stringify(getProgramAccount.data.value, null, 2)}</pre>
    </div>
  );
}
