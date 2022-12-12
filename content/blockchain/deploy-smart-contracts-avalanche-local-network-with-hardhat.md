---
title: Deploy Smart Contracts in Avalanche Local Network
subtitle: Step by step walkthrough on deploying Solidity smart contracts on Avalanche local subnet with Hardhat
topic: Avalanche
displayTopic: Blockchain
directory: blockchain
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - avalanche
  - blockchain
  - tutorial
updatedAt: 2022-12-12T13:58:03.631Z
createdAt: 2022-12-12T13:58:03.631Z
---

In Avalanche, a subnet is a sovereign network that comprised of its own defined rules that govern the network. Just like the default C-Chain, it allows the creation of any EVM-compatible smart contracts with the same well-known smart contract language, Solidity.

## Prerequisites

The follow along the guide, Avalanche CLI must be installed and a subnet has to be deployed to a local running network.

## Setting up a Hardhat Workspace

First, clone the following quickstart template to your local machine.

```
git clone https://github.com/ava-labs/avalanche-smart-contract-quickstart.git
```

After cloning the template, run `yarn` to install the node dependencies. Next, remove the contents within the `/contracts` and `/scripts` folder.

Add a simple token contract named `Coin.sol` with the following contents in the `/contracts` directory.

```solidity[Coin.sol]
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract Coin is ERC20, ERC20Burnable, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor(
        string memory coin,
        string memory symbol,
        uint256 amount
    ) ERC20(coin, symbol) {
        _mint(msg.sender, amount * 10 ** decimals());
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function mint(address to, uint256 amount) public onlyRole(MINTER_ROLE) {
        _mint(to, amount);
    }
}
```

What the contract does is that it is creating a ERC20 compliant token that will mint an initial amount of its token when deployed, and providing a `mint` function to allow minting after the contract has been deployed, very simple.

On to the next step, add the deployment script named `deploy.ts` in the `scripts/` directory with the following contents. This script is responsible to deploy the written smart contract to the local

```ts[deploy.ts]
import { ethers } from 'hardhat'
import { Contract, ContractFactory } from 'ethers'

async function main(): Promise<void> {
  const name = '<contract-name>'
  const symbol = '<contract-symbol>'
  const amount = 123000

  const Coin: ContractFactory = await ethers.getContractFactory(name)
  const coin: Contract = await Coin.deploy(name, symbol, amount)

  await coin.deployed()
  console.log(`Coin deployed to ${coin.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
```

> Remember to replace `<contract-name>`, `<contract-symbol>` and optionally `amount` for values of your choice.

### Verifying the Connectivity

Moving on, lets modify some of the values of local network inside `hardhat.config.ts`
If the `url` domain does not match what your current endpoint, then update it to point to a running local network correctly. After that, you may also want to consider using your own private key by modifying the `accounts` array.

Save the config file and try to query the account's public address with the following.

```
yarn accounts --network local
```

If there are 5 accounts in the accounts array within `hardhat.config.ts`, then it should display 5 corresponsing public address of the accounts.

## Deploying Smart Contracts

After the contracts, deployment scripts and `hardhat.config.ts` has been updated and saved, it is time to deploy the smart contract to the local network.

```
yarn deploy --network local
```

The command will download the **specified version** of Solidity compiler to compile the smart contract into abi that is understood across the network.

```
Downloading compiler 0.8.9
Compiled 12 Solidity files successfully
Coin deployed to 0x52C84043CD9c865236f11d9Fc9F56aa003c1f922
Done in 6.38s.
```

It will show the address that the contract reside on the network upon successful deployment.

## Interacting with Smart Contracts

Hardhat provides a very convenient way to interact with the deployed smart contracts with a Node.js terminal.

```
yarn console --network local
```

Here are some examples of simple interaction with the smart contract. The command queries the contract's interface and store it into the `Coin` constant.

```
> const Coin = await ethers.getContractFactory('<name-of-contract>')
undefined
```

After that, store the actual deployed instance of the contract into a constant named `coin` with the following command.

```
> const coin = Coin.attach('<deployed-contract-address>')
undefined
```

Get all the accounts and store it into `accounts` constant.

```
> const accounts = await ethers.provider.listAccounts()
undefined
```

To get the name of the deployed contract,

```
> await coin.name()
'<name-of-contract>'
```

To get the decimal place of the token,

```
> await coin.decimals()
18
```

To get the number of tokens for the first airdropped account,

```
> (await coin.balanceOf(accounts[0])).toString()
'123000000000000000000000'
```

To mint more tokens, use the `mint` method of the contract and the transaction details will be displayed once the minting process is completed.

```
> await coin.mint(accounts[0], 1)
{
  hash: '0x9dc7d202eac9cbe6608cf37759554f15a1e4437e01b41512485a3b89c6da7907',
  type: 0,
  accessList: null,
  blockHash: '0xa848f8fec83186df2657bbbe6214e7ea855c6d08cad019018c7f8f7c53f9a0e1',
  blockNumber: 2,
  transactionIndex: 0,
  confirmations: 1,
  from: '0x8db97C7cEcE249c2b98bDC0226Cc4C2A57BF52FC',
  gasPrice: BigNumber { value: "225000000000" },
  gasLimit: BigNumber { value: "37263" },
  to: '0x52C84043CD9c865236f11d9Fc9F56aa003c1f922',
  value: BigNumber { value: "0" },
  nonce: 1,
  data: '0x40c10f190000000000000000000000008db97c7cece249c2b98bdc0226cc4c2a57bf52fc0000000000000000000000000000000000000000000000000000000000000001',
  r: '0x49b2dc0e9e4063b6a1ed9d77a464b4e24d6972f58f66c7e8ae19bf4365d533d8',
  s: '0x3ea35026d4d42bd87cca165b3c93a99f32253d437aa4821e9943416b159cac35',
  v: 86260,
  creates: null,
  chainId: 43112,
  wait: [Function (anonymous)]
}
```

> Note that the `1` above in the mint method only translates to a minuscule of `0.0000000000000000001` tokens, which is the smallest fraction of the tokens allowed.

Getting the new balance of `accounts[0]` will have its balance increases by 1.

```
> (await coin.balanceOf(accounts[0])).toString()
'123000000000000000000001'
```

## Closing Remarks

Here you go, a simple deployment of smart contracts to a local subnet using Hardhat. The Hardhat console allows us to interact with the deployed smart contract which is very convenient.

## Reference

- [(Intermediate) Quest 7: ERC20 Token Project](https://app.stackup.dev/quest_page/intermediate-quest-7-erc20-token-project)
- [Using Hardhat with the Avalanche C-Chain](https://docs.avax.network/dapps/developer-toolchains/using-hardhat-with-the-avalanche-c-chain)
