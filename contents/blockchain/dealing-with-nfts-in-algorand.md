---
title: Dealing with NFTs on Algorand
subtitle: A walkthrough on commands to deal with NFT creation and others with GOAL
topic: Algorand
displayTopic: Blockchain
directory: blockchain
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - algorand
  - blockchain
  - tutorial
updatedAt: 2024-03-28T05:59:29.772Z
createdAt: 2022-12-03T12:15:24.307Z
---

## Explore Asset Command

To understand more on the the options to create an Algorand asset, use the help command as shown below.

```
./sandbox goal asset create --help
```

Important flags to take note of:

| Flag         | Data type | Description                                                                                                                                                                                                                                   |
| ------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--asseturl` | `string`  | URL where user can access more information about the asset (max 32 bytes)                                                                                                                                                                     |
| `--creator`  | `string`  | Account address for creating an asset                                                                                                                                                                                                         |
| `--decimals` | `uint32`  | The number of digits to use after the decimal point when displaying this asset. If set to 0, the asset is not divisible beyond its base unit. If set to 1, the base asset unit is tenths. If 2, the base asset unit is hundredths, and so on. |
| `--name`     | `string`  | Name for the entire asset                                                                                                                                                                                                                     |
| `--total`    | `uint`    | Total amount of tokens for created asset                                                                                                                                                                                                      |
| `--unitname` | `string`  | Name for the unit of asset                                                                                                                                                                                                                    |

## Prerequisites

Testnet will be used as the network.

Two Algorand account is required to follow along, each having test Algos to spend. Test Algos can be obtained via [Algorand Testnet Faucet](https://bank.testnet.algorand.network/).

## Minting NFT

To mint a NFT, the asset must be unique and indivisible. To achieve that, the `total` will need to equal 1 and the `decimals` will need to be 0.

> Divisible NFT however, is possible under the ARC-0003 standard and is called fractional NFT but is not covered here.

We will be using a random NFT from the renowned Azuki as part of demo and for **educational purposes only**. The properties that the NFT will have are listed as below.

- `asseturl`: https://ipfs.io/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/8733.png
- `creator`: \<your-algorand-address\>
- `decimals`: 0
- `name`: AzukiEducation
- `total`: 1
- `unitname`: AZEU
- `note`: Azuki Education NFT

The properties are then translated to the command as follows.

```
./sandbox goal asset create --asseturl "https://ipfs.io/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/8733.png" --creator <your-algorand-address> --decimals 0 --name "AzukiEducation" --note "Azuki Education NFT" --total 1 --unitname AZEU
```

The output for the command should show something like this after the creation completed successfully.

```
Issued transaction from account F4C5H76IZDBECEME4JSLQIWCMQXPPZ567TSUP2YJ7TV77WG63HG2IX374Y, txid 5LL42FQ74JV475YB6K6265M7MF6LW5MA3BPF6QWFRJXOZ4T3UA5A (fee 1000)
Transaction 5LL42FQ74JV475YB6K6265M7MF6LW5MA3BPF6QWFRJXOZ4T3UA5A still pending as of round 25065232
Transaction 5LL42FQ74JV475YB6K6265M7MF6LW5MA3BPF6QWFRJXOZ4T3UA5A still pending as of round 25065233
Transaction 5LL42FQ74JV475YB6K6265M7MF6LW5MA3BPF6QWFRJXOZ4T3UA5A committed in round 25065234
Created asset with asset index 118353938
```

The newly minted NFT can be confirmed by either verifying it on [Algo Explorer](https://algoexplorer.io/) or with a wallet with UI which in my case is [MyAlgo](https://wallet.myalgo.com/), a web-based wallet. [Pera wallet](https://perawallet.app/) is another popular option for mobile-based wallet.

<v-img src="dealing-with-nft-in-algorand/asset-created.png" alt="Creating an asset" border max-width="300px"></v-img>

## Modifying NFT

The created NFT can only be modified by the accounts that are authorized to do so. The modifying functions are listed below.

- manager - authorises transactions to reconfigure or destroy an asset
- reserve - non-minted assets will reside in that account instead of the default creator account
- freeze - able to freeze or unfreeze the asset holdings for a specific account. Frozen accounts cannot send or receive the frozen assets. The asset be frozen by default upon creation if the default frozen state is set to true.
- clawback - allowed to transfer assets from and to any asset holder who has opted-in to the asset.

Run the following command for more info.

```
./sandbox goal asset config --help
```

## Opt In Asset

Opting in an asset is a security mechanism offered by Algorand to prevent users from receiving spam NFTs without their consent. The NFTs might have tax, legal or reputational risks.

To opt into an asset, all the user need to do is sending that particular asset to themself with 0 amount before receiving the actual asset from third party. This essentially creates a "record" or entry as I would like to call under the account for having that particular asset but with 0 amount.

> Note: Opting in an asset do **require** Algos, but the amount is negligible at 100,000 microAlgos ($\mu$Algos).

The first account is the one that owns the newly minted AZEU NFT and the second account does not. Here, we will try to send AZEU from the first account to the second account.

If we send AZEU directly from first account to the second account without opting in, it will yield the following error.

```
./sandbox goal asset send --amount 1 --assetid <asset-id> --from <sender-address> --to <receiver-address> --creator <sender-address>
```

```
Couldn't broadcast tx with algod: HTTP 400 Bad Request: TransactionPool.Remember: transaction XXXXXBVSDMKOSQ2PNQLYZTY2F4RHGND3IAS723HJ3LLQB6XXXXX: receiver error: must optin, asset <asset-id> missing from <receiver-address>
```

To opt in an asset with simply use the same `send` command but with `--amount` sets to 0 and both the `--from` and `--to` points to the second account's address

```
./sandbox goal asset send --amount 0 --assetid <asset-id> --from <receiver-address> --to <receiver-address> --creator <sender-address>
```

Which yields the following output upon completion.

```
Issued transaction from account <receiver-address>, txid YZ23USCWGU65R6NCLNJW4GS2QMQVIPFNZN3S4DM6LNFICZP674EQ (fee 1000)
Transaction YZ23USCWGU65R6NCLNJW4GS2QMQVIPFNZN3S4DM6LNFICZP674EQ still pending as of round 25066502
Transaction YZ23USCWGU65R6NCLNJW4GS2QMQVIPFNZN3S4DM6LNFICZP674EQ still pending as of round 25066503
Transaction YZ23USCWGU65R6NCLNJW4GS2QMQVIPFNZN3S4DM6LNFICZP674EQ committed in round 25066504
```

With the MyAlgo wallet open, the second account should now have AZEU but with a balance of 0.

<v-img src="dealing-with-nft-in-algorand/opt-in-asset.png" alt="Opting in new asset" border max-width="300px"></v-img>

Now, the sending of the NFT should be completed without impediment.

```
./sandbox goal asset send --amount 1 --assetid <asset-id> --from <sender-address> --to <receiver-address> --creator <sender-address>
```

```
Issued transaction from account F4C5H76IZDBECEME4JSLQIWCMQXPPZ567TSUP2YJ7TV77WG63HG2IX374Y, txid CETYMM2KPPLKAE6HAU235ZRCTCRAN7KPF4WWE4W37OI6COCKKAIA (fee 1000)
Transaction CETYMM2KPPLKAE6HAU235ZRCTCRAN7KPF4WWE4W37OI6COCKKAIA still pending as of round 25066757
Transaction CETYMM2KPPLKAE6HAU235ZRCTCRAN7KPF4WWE4W37OI6COCKKAIA still pending as of round 25066758
Transaction CETYMM2KPPLKAE6HAU235ZRCTCRAN7KPF4WWE4W37OI6COCKKAIA committed in round 25066759
```

## Freezing Asset

In Algorand, assets can be freezed so that any intended transaction to that particular assets will unable to proceed. Freezing and unfreezing an asset for an account requires the transaction to be signed by the freeze account.

```
./sandbox goal asset freeze --freezer <asset-freeze-account> --freeze=true --account <account-to-freeze> --creator <creator-address> --assetid <asset-id>
```

## Revoking Asset

Revoking asset means that confiscating `n` amount of a particular asset from a target account. In most Algorand dapps, revoking asset is intentionally disabled by setting the clawback address to undefined. However, functionality to revoke assets are crucial for some financial applications such that when users have breached certain allowed guideline, their asset can be safeguarded.

```
./sandbox goal asset send -a <amount-to-revoke> --asset <asset-name> -f <address-of-revoke-target> -t <address-to-send-assets-to> --clawback <clawback-address> --creator <creator-address>
```

## Destroying Asset

Destroying an asset requires the action to be taken by the asset creator itself. If the asset is currently owned by someone else, nobody can destroy that particular asset.

```
./sandbox goal asset destroy --manager <creator-address> --assetid <asset-id>
```

## References

- [Algorand Standard Assets (ASAs)](https://developer.algorand.org/docs/get-details/asa/)
- [Algorand Dapp Development 2: Standard Asset Management](https://dappradar.com/blog/algorand-dapp-development-2-standard-asset-management/)
- [(Intermediate) Quest 8: Creating Algorand Assets Using GOAL! (Run 2)](https://app.stackup.dev/quest_page/intermediate-quest-8-creating-algorand-assets-using-goal-re-run)
