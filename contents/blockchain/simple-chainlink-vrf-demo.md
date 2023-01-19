---
title: A Simple Chainlink VRF Demo
subtitle: Chainlink Verifiable Random Function (VRF) basics and interaction with smart contracts on Goerli Testnet
topic: Chainlink
displayTopic: Blockchain
directory: blockchain
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - chainlink
  - goerli
  - vrf
  - demo
updatedAt: 2023-01-19T15:43:32.686Z
createdAt: 2023-01-19T15:43:32.686Z
---

Chainlink VRF is a random number generator that can be proven on-chain and used by smart contracts. Reaching consensus with nodes within a network for a random number is a challenging endeavour as different machines can come up with different notion of randomness that causes dispute against the proposed random value.

## How it works

Chainlink VRF are dependent upon the [decentralized oracle network (DON)](https://medium.com/coinmonks/decentralized-oracle-networks-9fead28f5fe5) to supplement the existing blockchain with off-chain data. It provides cryptographically secured randomness by utilizing a set of Chainlink nodes that transmits data to smart contract while establishing a classical consensus mechanism through a committee comprised of these nodes.

The cryptographic output by VRF can't be tampered by malicious third-party as each oracle in DON has their associated private and public key pair just like an ordinary user account that is difficult to be cracked.

## Usages

In most of the Dapps and on-chain gaming platform including NFTs needs a certain extend of randomness to spice up their users' expectation and engagement. Chainlink VRF is popular in

- NFT - random minting, airdrop
- Games - games without randomness is not a game
- Subsetting network nodes - selecting nodes that entitles for the next round of confirmation on a network

## Ways to Interact with VRF

Chainlink is a service provider. Using its VRF service needs to be paid in exchange for the on-chain verifiable random decisions that we yearn for.

The first method is by creating a **subscription account** and fund it with LINK tokens. The subscription account can support multiple smart contracts. The second method is **funding the smart contract directly** with LINK tokens. This method allows the actual user to pay for the service instead.

## Supported Network

Below are a non-exhaustive list of chains that Chainlink VRF currently supports.

- Ethereum - Mainnet and Goerli Testnet
- BNB Chain - Mainnet and Testnet
- Polygon - Mainnet and Mumbai Testnet
- Avalanche - Mainnet and Fuji Testnet
- Fantom - Mainnet and Testnet

## VRF Wrapper Contract

Below are the Solidity codes that can be used to request for a random words from Chainlink VRF. The `linkAddress` and `wrapperAddress` are both network specific and the values used are for Goerli testnet.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@chainlink/contracts/src/v0.8/VRFV2WrapperConsumerBase.sol";

contract RandomNumberConsumer is VRFV2WrapperConsumerBase {
	address linkAddress = 0x326C977E6efc84E512bB9C30f76E30c160eD06FB;
	address wrapperAddress = 0x708701a1DfF4f478de54383E49a627eD4852C816;

	uint32 callbackGasLimit = 100000;
	uint16 requestConfirmations = 3;
	uint32 numWords = 2;

	struct RequestStatus {
		uint256 paid;
		bool fulfilled;
		uint256[] randomWords;
	}

	mapping(uint256 => RequestStatus) public requestStatuses;

	uint256[] public requestIds;
	uint256 public lastRequestId;

	constructor() VRFV2WrapperConsumerBase(linkAddress, wrapperAddress) {}

	function requestRandomWords() external returns (uint256 requestId) {
		requestId = requestRandomness(callbackGasLimit, requestConfirmations, numWords);
		requestStatuses[requestId] = RequestStatus(VRF_V2_WRAPPER.calculateRequestPrice(callbackGasLimit), false, new uint256[](0));
		requestIds.push(requestId);
		lastRequestId = requestId;
		return requestId;
	}

	function fulfillRandomWords(uint256 _requestId, uint256[] memory _randomWords) internal override {
		require(requestStatuses[_requestId].paid > 0, "request not found");
		requestStatuses[_requestId].fulfilled = true;
		requestStatuses[_requestId].randomWords = _randomWords;
	}

	function getRequestStatus(uint256 _requestId) external view returns (uint256 paid, bool fulfilled, uint256[] memory randomWords) {
		require(requestStatuses[_requestId].paid > 0, "request not found");
		RequestStatus memory request = requestStatuses[_requestId];
		return (request.paid, request.fulfilled, request.randomWords);
	}
}
```

## Interact with the Contract

### Funding Contract

After deploying the smart contract to Goerli testnet, obtain its address as it will be needed for direct funding before it can work. To fund the smart contract, go to [Chainlink Faucet](https://faucets.chain.link/) and fund your account with 10x **testnet LINK**. Chainlink faucet can detect the network that the wallet is in if the wallet is already connected to the faucet itself, so there is no need to worry about selecting wrong network. Otherwise, make sure that Goerli network is selected.

<v-img src="simple-chainlink-vrf-demo/chainlink-faucet.png" alt="Chainlink Faucet"></v-img>

Next, send a few of the testnet LINK token to the address of the deployed contract. Any arbitrary amount will do the job. If no LINK token is deposited to the contract, any transaction to request for a random word will absolutely fail.

<v-img src="simple-chainlink-vrf-demo/execution-reverted.png" alt="Execution reverted"></v-img>

The failed attempt example can be referenced [here](https://goerli.etherscan.io/tx/0xea6c39c3949569758e7606c3ca2eb78fff40a92c1172cc4698b0e7882f827394).

### Getting Random Words

There are 3 functions to be dealt with in order to obtain the random words, which are `requestRandomWords`, `lastRequestId` and `getRequestStatus`. The first step is to invoke the `requestRandomWords` function. This method will initiate a transaction and the web3 wallet modal should prompt for the confirmation.

> Make sure the gas limit is set to **400,000** or else the transaction will likely fail.
> <v-img src="simple-chainlink-vrf-demo/out-of-gas.png" alt="Out of gas"></v-img>
> The failed attempt (**out of gas**) example can be referenced [here](https://goerli.etherscan.io/tx/0xbb00a34095904e1efc9e75398890ddeb575990361280cb72142e2037c0af28dc).

After the transaction has been confirmed, invoke the `lastRequestId` function to retrieve the ID for the previous call. Copy the ID and paste it into `getRequestStatus` function's parameter before invoking it.

Do note that the process takes some time to complete as the request sent out to the VRF will takes time to revert back to the calling contract. When the random words is ready, the VRF will call the internal method `fulfillRandomWords` to populate the results.

<v-img src="simple-chainlink-vrf-demo/random-words.png" alt="Random words output" center></v-img>

When the request has been fulfilled, the random words will appeared in the third return value after the `getRequestStatus` function has been invoked.

## Closing Remarks

Chainlink VRF is a paid service. We can fund the contract with enough LINK tokens to request for a random number. Native blockchain token is required to pay the gas fees. While requesting for a random number, gas limit must be set high enough to avoid failure as it is an extremely computational intensive request.

## Resources

- [Getting Random Numbers With Chainlink VRF | StackUp](https://app.stackup.dev/quest_page/getting-random-numbers-with-chainlink-vrf)
- [What is Chainlink VRF, and how does it work?](https://cointelegraph.com/news/what-is-chainlink-vrf-and-how-does-it-work)
- [Random Numbers: Using Chainlink VRF](https://docs.chain.link/getting-started/intermediates-tutorial)
