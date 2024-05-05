use anchor_lang::prelude::*;

declare_id!("9jwG9xjKst1ARJ1SFWjydPNqAykE7yhvqVYsDDGbsSFD");

#[program]
pub mod brr_chain_farm_dapp {
    use super::*;

    pub fn greet(_ctx: Context<Initialize>) -> Result<()> {
        msg!("GM!");
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
