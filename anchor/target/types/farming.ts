export type Farming = {
  "version": "0.1.0",
  "name": "farming",
  "docs": [
    "Dual farming program"
  ],
  "instructions": [
    {
      "name": "chargeReward",
      "docs": [
        "Charge Reward"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "chargeAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "remainingReward",
      "docs": [
        "Get Total Reward remaining in Pool"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": "u64"
    },
    {
      "name": "initializePool",
      "docs": [
        "Initializes a new pool. Able to create pool with single reward by passing the same Mint account for reward_a_mint and reward_a_mint"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "stakingMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Staking mint"
          ]
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking vault PDA"
          ]
        },
        {
          "name": "rewardAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Reward A mint"
          ]
        },
        {
          "name": "rewardAVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Reward A vault PDA"
          ]
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Authority of the pool"
          ]
        },
        {
          "name": "base",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Base"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL Token program"
          ]
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent"
          ]
        }
      ],
      "args": [
        {
          "name": "rewardDuration",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createUser",
      "docs": [
        "Initialize a user staking account"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User"
          ]
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Authority of user account"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Misc."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "pause",
      "docs": [
        "Pause the pool"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of the pool"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "unpause",
      "docs": [
        "Unpauses a previously paused pool. Allowing for funding."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of the pool"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "deposit",
      "docs": [
        "User deposit tokens in the pool."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the deposit/withdraw instance."
          ]
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking vault PDA."
          ]
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User."
          ]
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of user"
          ]
        },
        {
          "name": "stakeFromAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User staking ATA"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Misc."
          ]
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "docs": [
        "User withdraw tokens in the pool."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the deposit/withdraw instance."
          ]
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking vault PDA."
          ]
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User."
          ]
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of user"
          ]
        },
        {
          "name": "stakeFromAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User staking ATA"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Misc."
          ]
        }
      ],
      "args": [
        {
          "name": "sptAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "authorizeFunder",
      "docs": [
        "Authorize additional funders for the pool"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of the pool"
          ]
        }
      ],
      "args": [
        {
          "name": "funderToAdd",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "deauthorizeFunder",
      "docs": [
        "Deauthorize funders for the pool"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of the pool"
          ]
        }
      ],
      "args": [
        {
          "name": "funderToRemove",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "fund",
      "docs": [
        "Fund the pool with rewards.  This resets the clock on the end date, pushing it out to the set duration. And, linearly redistributes remaining rewards."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking vault PDA"
          ]
        },
        {
          "name": "rewardAVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Reward A Vault PDA"
          ]
        },
        {
          "name": "funder",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Reward B Vault PDA",
            "Funder"
          ]
        },
        {
          "name": "fromA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Funder reward A ATA"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Funder reward B ATA",
            "Misc."
          ]
        }
      ],
      "args": [
        {
          "name": "amountA",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claim",
      "docs": [
        "User claim rewards"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking vault PDA."
          ]
        },
        {
          "name": "rewardAVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Reward A Vault PDA"
          ]
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Reward B Vault PDA",
            "User."
          ]
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of user"
          ]
        },
        {
          "name": "rewardAAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User's Reward A ATA"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "User's Reward B ATA"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "withdrawExtraToken",
      "docs": [
        "Withdraw token that mistakenly deposited to staking_vault"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking vault PDA"
          ]
        },
        {
          "name": "withdrawToAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token account to receive mistakenly deposited token"
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of the staking instance"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Misc."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "closeUser",
      "docs": [
        "Closes a users stake account. Validation is done to ensure this is only allowed when the user has nothing staked and no rewards pending."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "migrateFarmingRate",
      "docs": [
        "anyone can call this"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closePool",
      "docs": [
        "Closes a pool account. Only able to be done when there are no users staked."
      ],
      "accounts": [
        {
          "name": "refundee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingRefundee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardARefundee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardAVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "pool",
      "docs": [
        "Pool account wrapper"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "Privileged account."
            ],
            "type": "publicKey"
          },
          {
            "name": "paused",
            "docs": [
              "Paused state of the program"
            ],
            "type": "bool"
          },
          {
            "name": "stakingMint",
            "docs": [
              "Mint of the token that can be staked."
            ],
            "type": "publicKey"
          },
          {
            "name": "stakingVault",
            "docs": [
              "Vault to store staked tokens."
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardAMint",
            "docs": [
              "Mint of the reward A token."
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardAVault",
            "docs": [
              "Vault to store reward A tokens."
            ],
            "type": "publicKey"
          },
          {
            "name": "baseKey",
            "docs": [
              "Mint of the reward B token.",
              "Vault to store reward B tokens.",
              "Base key"
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardDuration",
            "docs": [
              "The period which rewards are linearly distributed."
            ],
            "type": "u64"
          },
          {
            "name": "rewardDurationEnd",
            "docs": [
              "The timestamp at which the current reward period ends."
            ],
            "type": "u64"
          },
          {
            "name": "lastUpdateTime",
            "docs": [
              "The last time reward states were updated."
            ],
            "type": "u64"
          },
          {
            "name": "rewardARate",
            "docs": [
              "deprecated field"
            ],
            "type": "u64"
          },
          {
            "name": "rewardAPerTokenStored",
            "docs": [
              "deprecated field",
              "Last calculated reward A per pool token."
            ],
            "type": "u128"
          },
          {
            "name": "userStakeCount",
            "docs": [
              "Last calculated reward B per pool token.",
              "Users staked"
            ],
            "type": "u32"
          },
          {
            "name": "funders",
            "docs": [
              "authorized funders",
              "[] because short size, fixed account size, and ease of use on",
              "client due to auto generated account size property"
            ],
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          },
          {
            "name": "rewardARateU128",
            "docs": [
              "reward_a_rate in u128 form"
            ],
            "type": "u128"
          },
          {
            "name": "poolBump",
            "docs": [
              "reward_b_rate in u128 form",
              "Pool bump"
            ],
            "type": "u8"
          },
          {
            "name": "totalStaked",
            "docs": [
              "Total staked amount"
            ],
            "type": "u64"
          },
          {
            "name": "totalReward",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "user",
      "docs": [
        "Farming user account"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "docs": [
              "Pool the this user belongs to."
            ],
            "type": "publicKey"
          },
          {
            "name": "owner",
            "docs": [
              "The owner of this account."
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardAPerTokenComplete",
            "docs": [
              "The amount of token A claimed."
            ],
            "type": "u128"
          },
          {
            "name": "rewardAPerTokenPending",
            "docs": [
              "The amount of token B claimed.",
              "The amount of token A pending claim."
            ],
            "type": "u64"
          },
          {
            "name": "balanceStaked",
            "docs": [
              "The amount of token B pending claim.",
              "The amount staked."
            ],
            "type": "u64"
          },
          {
            "name": "nonce",
            "docs": [
              "Signer nonce."
            ],
            "type": "u8"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "EventDeposit",
      "fields": [
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "EventWithdraw",
      "fields": [
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "EventFund",
      "fields": [
        {
          "name": "amountA",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "EventClaim",
      "fields": [
        {
          "name": "amountA",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "EventAuthorizeFunder",
      "fields": [
        {
          "name": "newFunder",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "EventUnauthorizeFunder",
      "fields": [
        {
          "name": "funder",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InsufficientFundWithdraw",
      "msg": "Insufficient funds to withdraw."
    },
    {
      "code": 6001,
      "name": "AmountMustBeGreaterThanZero",
      "msg": "Amount must be greater than zero."
    },
    {
      "code": 6002,
      "name": "SingleDepositTokenBCannotBeFunded",
      "msg": "Reward B cannot be funded - pool is single deposit."
    },
    {
      "code": 6003,
      "name": "PoolPaused",
      "msg": "Pool is paused."
    },
    {
      "code": 6004,
      "name": "DurationTooShort",
      "msg": "Duration cannot be shorter than one day."
    },
    {
      "code": 6005,
      "name": "FunderAlreadyAuthorized",
      "msg": "Provided funder is already authorized to fund."
    },
    {
      "code": 6006,
      "name": "MaxFunders",
      "msg": "Maximum funders already authorized."
    },
    {
      "code": 6007,
      "name": "CannotDeauthorizePoolAuthority",
      "msg": "Cannot deauthorize the primary pool authority."
    },
    {
      "code": 6008,
      "name": "CannotDeauthorizeMissingAuthority",
      "msg": "Authority not found for deauthorization."
    },
    {
      "code": 6009,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    }
  ]
};

export const IDL: Farming = {
  "version": "0.1.0",
  "name": "farming",
  "docs": [
    "Dual farming program"
  ],
  "instructions": [
    {
      "name": "chargeReward",
      "docs": [
        "Charge Reward"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [
        {
          "name": "chargeAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "remainingReward",
      "docs": [
        "Get Total Reward remaining in Pool"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "signer",
          "isMut": false,
          "isSigner": true
        }
      ],
      "args": [],
      "returns": "u64"
    },
    {
      "name": "initializePool",
      "docs": [
        "Initializes a new pool. Able to create pool with single reward by passing the same Mint account for reward_a_mint and reward_a_mint"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "stakingMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Staking mint"
          ]
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking vault PDA"
          ]
        },
        {
          "name": "rewardAMint",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Reward A mint"
          ]
        },
        {
          "name": "rewardAVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Reward A vault PDA"
          ]
        },
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Authority of the pool"
          ]
        },
        {
          "name": "base",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Base"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "System program"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "SPL Token program"
          ]
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Rent"
          ]
        }
      ],
      "args": [
        {
          "name": "rewardDuration",
          "type": "u64"
        }
      ]
    },
    {
      "name": "createUser",
      "docs": [
        "Initialize a user staking account"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User"
          ]
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true,
          "docs": [
            "Authority of user account"
          ]
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Misc."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "pause",
      "docs": [
        "Pause the pool"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of the pool"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "unpause",
      "docs": [
        "Unpauses a previously paused pool. Allowing for funding."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of the pool"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "deposit",
      "docs": [
        "User deposit tokens in the pool."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the deposit/withdraw instance."
          ]
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking vault PDA."
          ]
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User."
          ]
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of user"
          ]
        },
        {
          "name": "stakeFromAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User staking ATA"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Misc."
          ]
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "docs": [
        "User withdraw tokens in the pool."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the deposit/withdraw instance."
          ]
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking vault PDA."
          ]
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User."
          ]
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of user"
          ]
        },
        {
          "name": "stakeFromAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User staking ATA"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Misc."
          ]
        }
      ],
      "args": [
        {
          "name": "sptAmount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "authorizeFunder",
      "docs": [
        "Authorize additional funders for the pool"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of the pool"
          ]
        }
      ],
      "args": [
        {
          "name": "funderToAdd",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "deauthorizeFunder",
      "docs": [
        "Deauthorize funders for the pool"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of the pool"
          ]
        }
      ],
      "args": [
        {
          "name": "funderToRemove",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "fund",
      "docs": [
        "Fund the pool with rewards.  This resets the clock on the end date, pushing it out to the set duration. And, linearly redistributes remaining rewards."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking vault PDA"
          ]
        },
        {
          "name": "rewardAVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Reward A Vault PDA"
          ]
        },
        {
          "name": "funder",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Reward B Vault PDA",
            "Funder"
          ]
        },
        {
          "name": "fromA",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Funder reward A ATA"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Funder reward B ATA",
            "Misc."
          ]
        }
      ],
      "args": [
        {
          "name": "amountA",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claim",
      "docs": [
        "User claim rewards"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking vault PDA."
          ]
        },
        {
          "name": "rewardAVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Reward A Vault PDA"
          ]
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Reward B Vault PDA",
            "User."
          ]
        },
        {
          "name": "owner",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of user"
          ]
        },
        {
          "name": "rewardAAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "User's Reward A ATA"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "User's Reward B ATA"
          ]
        }
      ],
      "args": []
    },
    {
      "name": "withdrawExtraToken",
      "docs": [
        "Withdraw token that mistakenly deposited to staking_vault"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Global accounts for the staking instance."
          ]
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Staking vault PDA"
          ]
        },
        {
          "name": "withdrawToAccount",
          "isMut": true,
          "isSigner": false,
          "docs": [
            "Token account to receive mistakenly deposited token"
          ]
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true,
          "docs": [
            "Authority of the staking instance"
          ]
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false,
          "docs": [
            "Misc."
          ]
        }
      ],
      "args": []
    },
    {
      "name": "closeUser",
      "docs": [
        "Closes a users stake account. Validation is done to ensure this is only allowed when the user has nothing staked and no rewards pending."
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "owner",
          "isMut": true,
          "isSigner": true
        }
      ],
      "args": []
    },
    {
      "name": "migrateFarmingRate",
      "docs": [
        "anyone can call this"
      ],
      "accounts": [
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "closePool",
      "docs": [
        "Closes a pool account. Only able to be done when there are no users staked."
      ],
      "accounts": [
        {
          "name": "refundee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "stakingRefundee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardARefundee",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "pool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "stakingVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "rewardAVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "pool",
      "docs": [
        "Pool account wrapper"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "docs": [
              "Privileged account."
            ],
            "type": "publicKey"
          },
          {
            "name": "paused",
            "docs": [
              "Paused state of the program"
            ],
            "type": "bool"
          },
          {
            "name": "stakingMint",
            "docs": [
              "Mint of the token that can be staked."
            ],
            "type": "publicKey"
          },
          {
            "name": "stakingVault",
            "docs": [
              "Vault to store staked tokens."
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardAMint",
            "docs": [
              "Mint of the reward A token."
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardAVault",
            "docs": [
              "Vault to store reward A tokens."
            ],
            "type": "publicKey"
          },
          {
            "name": "baseKey",
            "docs": [
              "Mint of the reward B token.",
              "Vault to store reward B tokens.",
              "Base key"
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardDuration",
            "docs": [
              "The period which rewards are linearly distributed."
            ],
            "type": "u64"
          },
          {
            "name": "rewardDurationEnd",
            "docs": [
              "The timestamp at which the current reward period ends."
            ],
            "type": "u64"
          },
          {
            "name": "lastUpdateTime",
            "docs": [
              "The last time reward states were updated."
            ],
            "type": "u64"
          },
          {
            "name": "rewardARate",
            "docs": [
              "deprecated field"
            ],
            "type": "u64"
          },
          {
            "name": "rewardAPerTokenStored",
            "docs": [
              "deprecated field",
              "Last calculated reward A per pool token."
            ],
            "type": "u128"
          },
          {
            "name": "userStakeCount",
            "docs": [
              "Last calculated reward B per pool token.",
              "Users staked"
            ],
            "type": "u32"
          },
          {
            "name": "funders",
            "docs": [
              "authorized funders",
              "[] because short size, fixed account size, and ease of use on",
              "client due to auto generated account size property"
            ],
            "type": {
              "array": [
                "publicKey",
                3
              ]
            }
          },
          {
            "name": "rewardARateU128",
            "docs": [
              "reward_a_rate in u128 form"
            ],
            "type": "u128"
          },
          {
            "name": "poolBump",
            "docs": [
              "reward_b_rate in u128 form",
              "Pool bump"
            ],
            "type": "u8"
          },
          {
            "name": "totalStaked",
            "docs": [
              "Total staked amount"
            ],
            "type": "u64"
          },
          {
            "name": "totalReward",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "user",
      "docs": [
        "Farming user account"
      ],
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pool",
            "docs": [
              "Pool the this user belongs to."
            ],
            "type": "publicKey"
          },
          {
            "name": "owner",
            "docs": [
              "The owner of this account."
            ],
            "type": "publicKey"
          },
          {
            "name": "rewardAPerTokenComplete",
            "docs": [
              "The amount of token A claimed."
            ],
            "type": "u128"
          },
          {
            "name": "rewardAPerTokenPending",
            "docs": [
              "The amount of token B claimed.",
              "The amount of token A pending claim."
            ],
            "type": "u64"
          },
          {
            "name": "balanceStaked",
            "docs": [
              "The amount of token B pending claim.",
              "The amount staked."
            ],
            "type": "u64"
          },
          {
            "name": "nonce",
            "docs": [
              "Signer nonce."
            ],
            "type": "u8"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "EventDeposit",
      "fields": [
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "EventWithdraw",
      "fields": [
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "EventFund",
      "fields": [
        {
          "name": "amountA",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "EventClaim",
      "fields": [
        {
          "name": "amountA",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "EventAuthorizeFunder",
      "fields": [
        {
          "name": "newFunder",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "EventUnauthorizeFunder",
      "fields": [
        {
          "name": "funder",
          "type": "publicKey",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "InsufficientFundWithdraw",
      "msg": "Insufficient funds to withdraw."
    },
    {
      "code": 6001,
      "name": "AmountMustBeGreaterThanZero",
      "msg": "Amount must be greater than zero."
    },
    {
      "code": 6002,
      "name": "SingleDepositTokenBCannotBeFunded",
      "msg": "Reward B cannot be funded - pool is single deposit."
    },
    {
      "code": 6003,
      "name": "PoolPaused",
      "msg": "Pool is paused."
    },
    {
      "code": 6004,
      "name": "DurationTooShort",
      "msg": "Duration cannot be shorter than one day."
    },
    {
      "code": 6005,
      "name": "FunderAlreadyAuthorized",
      "msg": "Provided funder is already authorized to fund."
    },
    {
      "code": 6006,
      "name": "MaxFunders",
      "msg": "Maximum funders already authorized."
    },
    {
      "code": 6007,
      "name": "CannotDeauthorizePoolAuthority",
      "msg": "Cannot deauthorize the primary pool authority."
    },
    {
      "code": 6008,
      "name": "CannotDeauthorizeMissingAuthority",
      "msg": "Authority not found for deauthorization."
    },
    {
      "code": 6009,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    }
  ]
};
