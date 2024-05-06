import { Keypair } from '@solana/web3.js';
import { useBrrChainFarmDappProgram } from './brr-chain-farm-dapp-data-access';
import { useEffect } from 'react';
import brr_logo from '../../assets/brr.png'
export function BrrChainFarmDappCreate() {
  const { init_pool, create_user, start_farming } = useBrrChainFarmDappProgram();
  useEffect(()=>{
    // start_farming.mutateAsync()
  },[])
  return (
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
      <>
      <div className="w-fullrounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <img src={brr_logo} />
        <div className="font-bold text-xl mb-2">Farm</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag1</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Tag2</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#Tag3</span>
      </div>
    </div>
      </>
      {/* <pre>{JSON.stringify(getProgramAccount.data.value, null, 2)}</pre> */}
    </div>
  );
}
