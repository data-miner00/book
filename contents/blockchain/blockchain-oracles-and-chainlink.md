---
title: Blockchain Oracles and Chainlink
subtitle: Brief introduction to blockchain oracles and its pioneer Chainlink with a demo
topic: Oracles
displayTopic: Blockchain
directory: blockchain
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - chainlink
  - blockchain
  - oracle
  - goerli
updatedAt: 2023-01-14T05:59:29.772Z
createdAt: 2023-01-14T05:59:29.772Z
---

Blockchain oracles acts as a bridge that connects **real-world data** onto the blockchain. Prior to the inaugural of oracles, blockchain can only store data that are generated on-chain only. Data including random number, price of cryptocurrency and API calls were **off limits** for smart contracts back then. However, these can now be achieved and attained via blockchain oracles.

This has brought a profound impact on how dApps and DeFi were built. dApps and DeFi protocols can utilize the oracles to implement sophisticated and complex logics to run on the blockchain.

Chainlink is the [pioneer](https://www.prnewswire.com/news-releases/chainlink-awarded-as-technology-pioneer-by-world-economic-forum-301077216.html) of this field and their main objective is to provide **tamper-proof**, **trustless** off-chain data to the blockchain.

Currently Chainlink supports Ethereum, Arbitrum, Avalanche, Fantom, Polygon and others.

## Type of Oracles

Chainlink had its own definition on different type of oracles.

### Input Oracles

The most common oracle that channels off-chain data to the blockchain for consumption by smart contracts. A use case would be empowering Chainlink Price Feeds that can be used for retrieving data from the financial market directly in smart contracts. However, Chainlink Oracles is a paid service and fees are required for getting off-chain data.

### Output Oracles

Instead of consuming data, the smart contract can fire off events to trigger some actions in real world with output oracles. Examples including informing a banking network to make a payment and reaching IoT system to unlock a car for its confirmed rental transaction on-chain. Only the sky is the limit for its possibilities of integration.

### Cross-Chain Oracles

Cross-chain oracles can exchange information between different blockchains. It enables interoperability by facilitating assets and data transfer with different blockchains.

### Compute-Enabled Oracles

A new type of oracle that has becoming more and more prevalent that allows computations to perform off-chain. These computations might have technical and legal limitations or is too expensive to perform on-chain. This can be used to generate zero-knowledge proofs (zk proof) or running a verifiable randomness function (VRF).

## List of Use Cases

Here is a non-exhaustive list of oracle use cases in the real world.

### Decentralized Finance (DeFi)

DeFi uses oracle to get access to the wider market such as price quotes listed in the exchanges. It can also used to calculate user's borrowing abilities

### Dynamic NFTs and Gaming

This can ensure that the items they have bought and sell reflects the true value from the market. It also allows the gaming smart contracts to automate the award distribution for any particular individuals that has accomplished some achievements. It can also be used to generate randomness as game are heavily relied on random numbers for decision making.

### Insurance

This is a very niche use case, whereby the smart contract is able to automate the process of claiming insurance when a certain conditions are met off the chain such as a medical record via the hospital.

### Enterprise

A prospect for smart contract in enterprise level is the supply chain management industry. The supplier may use the smart contract to automate the process such as ordering, payment and delivery with oracles. It can store the transaction info for the orders on chain, including delivery date.

### Sustainability

Example of sustainability smart contracts is used in the agricultural industry where farmers utilize smart contracts to record sustainability practices they are practising on their farm that can be further verified by third parties and then stored on blockchain for transparancy and accountability.

## Interacting with Chainlink Oracles

### Requesting GoerliETH

Chainlink is available on many different EVM-compatible blockchains, including testnets. This demo will use Goerli testnet from Ethereum for showcase. First, head over to [Goerli Faucet](https://goerlifaucet.com/) to get some test ETH. An Alchemy account is required for security reasons, sign up for an account if you haven't already and proceed to request test tokens from the faucet.

After requesting the test ETH from the faucet, it will return the transaction hash underneath the address input box.

<v-img src="blockchain-oracles-and-chainlink/goerli-faucet.png" alt="Goerli Faucet"></v-img>

That link leads to [Etherscan.io for Goerli](https://goerli.etherscan.io/) that contains the transaction details. However, there might be an instance where the transaction did not go through as when click on the link it shows unable to find transaction.

<v-img src="blockchain-oracles-and-chainlink/transaction-not-found.png" alt="Transaction not found"></v-img>

If that happens, unfortunately there will be no test tokens being deposited to your account and you won't be able to try it again until tomorrow. The only way to retry it immediately is by creating another Alchemy account and hope this time it will go through.

### Interact with Smart Contract

The smart contract for the demo is as follows.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Goerli
     * Aggregator: ETH/USD
     * Address: 0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
     */
    constructor() {
        priceFeed = AggregatorV3Interface(
            0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e
        );
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int) {
        (
            , /*uint80 roundID*/
            int price,
            , /*uint startedAt*/
            , /*uint timeStamp*/
            /*uint80 answeredInRound*/
        ) = priceFeed.latestRoundData();
        return price;
    }
}
```

Firstly, the Chainlink Aggregator Interface (Oracle) will need to be imported in the smart contract. In the online IDE such as [Remix](https://remix.ethereum.org/), _no installation_ is needed as the Chainlink library has been made readily accessible. For local dev environment such as Truffle or Hardhat, Chainlink contracts can be installed with npm by the name of [@chainlink/contracts](https://www.npmjs.com/package/@chainlink/contracts).

To instantiate the aggregator, the address of the deployed instance needs to be provided as the argument within the constructor. `0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e` refers to the instance of the aggregator smart contract deployed to the Goerli network.

<v-img src="blockchain-oracles-and-chainlink/latest-eth-price.png" alt="Latest ETH Price" center></v-img>

The `getLatestPrice` method retrieves the latest **mainnet** ETH price on Goerli testnet. Screenshot above shows the invocation of the `getLatestPrice` method from an deployed instance via the Remix IDE and it returned the 13 digit number representation of ETH's current price.

## References

- [Introduction to Oracles | StackUp](https://app.stackup.dev/quest_page/introduction-to-oracles)
- [Blockchain Oracles | Chainlink](https://chain.link/education/blockchain-oracles)
- [Blockchain Oracles Explained | Binance Academy](https://academy.binance.com/en/articles/blockchain-oracles-explained)
