---
title: Cannot set property of <Object> which only has a getter
subtitle: The walkthough of the error that I've faced while developing a Dapp with EthersJS and my debug process and solution
topic: Debug Logs
displayTopic: Debug Logs
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - esbuild
  - bug
  - ethersjs
  - bundler
  - blog
  - javascript
directory: debug-logs
updatedAt: 2024-03-28T05:59:29.772Z
createdAt: 2022-12-28T08:58:38.579Z
---

## The Beginning

Recently, I was developing a NFT Minting Dapp with React and Esbuild starting off with my personal [starting template](https://github.com/data-miner00/React-Esbuild-Template). I have generated the project with the said template, and getting rid of the items that are not required in the project. Along the line, I have added some new packages, such as [EthersJS](https://docs.ethers.org/v5/), [Axios](https://axios-http.com/docs/intro) etc.

I was following a [tutorial](https://app.stackup.dev/quest_page/intermediate-quest-9-capstone-project---game-frontend-with-erc721-token-sc) and a [guide](https://github.com/jacobedawson/connect-metamask-react-dapp/blob/main/README.md) during the development while adding in some personal touches to make the app more appealing. Everything was fine at the beginning as I am able to get the app running and connecting to my Metamask wallet with EthersJS. For brevity, I had fine tuned the code for readability purpose and here is how the code look like that will wreak havoc and sabotage my app.

```ts
import { ethers } from 'ethers'

async function connectToWallet() {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  await provider.send('eth_requestAccounts', [])
  return provider.getSigner()
}
```

Pretty straight forward, and in fact the code are identical to what the [official docs](https://docs.ethers.org/v5/getting-started/#getting-started--connecting) suggests.

Because this project is generated from a generic template, I plan to commit all the changes in one shot when the project has its basic features and structures ready. I went ahead to modify, delete and create tens of files and hundreds of lines of codes without a single commit.

Things went great and I felt good about it. However, things took a horrible turn yesterday. I was making changes to 4 or 5 files without saving, because they have the dependencies to each other and saving one without the other won't work. Just as I had completed the changes required and pretty confident that my code works, I went ahead and hit the 'Save All' button in VSCode while expecting the changes to propagate beautifully throughout the application without a hitch. However, with great expectation ensues massive dissapointment.

## The Error

All I've been greeted was a blank page of dissapointment with an error in the console.

<v-img src="cannot-set-property-of-object/empty-page.png" alt="Empty page because of error" center caption="Blank homepage due to error"></v-img>

A bit frustrated, thinking I must have done something wrong somewhere. I looked at the cryptic error message displayed on the Firefox console, feeling frustrated and had no idea what was causing the issue.

<v-img src="cannot-set-property-of-object/error.png" alt="Error in Firefox console" center></v-img>

_'Uncaught TypeError: setting getter-only property "crypto"'_ is what it throws at me. I clicked on the `bundle.js:47669:5` to inspect the bundled JavaScript code.

<v-img src="cannot-set-property-of-object/error-source.png" alt="Code that is causing error" center></v-img>

There was a red squiggly line on line 47669. I still dont understand what happened to the bundled code.

## Debugging

After performing a scrutiny towards the code base, including what I've recently changed that leads to the issue, I ended up with no clue on why is that happening. **I regret for not committing most of the codes that are working earlier** and it would be easier to pinpoint the issue now.

I am using Firefox for the development and I thought it might be browser specific issue, so I try to push my luck to see whether it also happens on Chrome. Unfortunately and expectedly, that too did not work out. I took a look on the code briefly and feel that the error doesn't make sense.

```js
var logger23, anyGlobal, crypto
var init_random = __esm({
  'node_modules/.pnpm/@ethersproject+random@5.7.0/node_modules/@ethersproject/random/lib.esm/random.js'() {
    'use strict'
    init_define_process()
    init_lib2()
    init_lib()
    init_version18()
    logger23 = new Logger(version18)
    anyGlobal = getGlobal()
    crypto = anyGlobal.crypto || anyGlobal.msCrypto // <-- Error: Uncaught TypeError: Cannot set property crypto of [object Window] which has only a getter
    if (!crypto || !crypto.getRandomValues) {
      logger23.warn('WARNING: Missing strong random number source')
      crypto = {
        getRandomValues: function (buffer) {
          return logger23.throwError(
            'no secure random source avaialble',
            Logger.errors.UNSUPPORTED_OPERATION,
            {
              operation: 'crypto.getRandomValues',
            }
          )
        },
      }
    }
  },
})
```

The code suggests that three variables `logger23`, `anyGlobal` and `crypto` is declared in the global scope and within the function it is assigning the `crypto` variable to something else.

```js
crypto = anyGlobal.crypto || anyGlobal.msCrypto
```

But why does this have any problem? Why it happened to `crypto` only and not the `logger23` or `anyGlobal` variables?

After inspecting the source code of the origin module, I found nothing special too and it is just assigning the three declared variables. Here is the excerpt of the code.

```ts[browser-random.ts]
const logger = new Logger(version); // <-- logger23

function getGlobal(): any {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};

const anyGlobal = getGlobal(); // <-- anyGlobal

let crypto: any = anyGlobal.crypto || anyGlobal.msCrypto; // <-- crypto
if (!crypto || !crypto.getRandomValues) {

    logger.warn("WARNING: Missing strong random number source");

    crypto = {
        getRandomValues: function(buffer: Uint8Array): Uint8Array {
            return logger.throwError("no secure random source avaialble", Logger.errors.UNSUPPORTED_OPERATION, {
                operation: "crypto.getRandomValues"
            });
        }
    };
}
```

I've went ahead commented out most of the codes and utimately I found that the issue will manifest if I import `ethers` and use it in the application. Not even a `console.log` to that object is allowed.

```ts
import { ethers } from 'ethers'

console.log(ethers) // Error
```

I was bewildered. I wonder why does it works earlier and it breaks all of the sudden. **I swear to god it was working before!** There seems to be no plausible explanation for that.

So I went ahead and get a fresh copy of my template, installed EthersJS and try to grab the `ethers` object and guess what, it failed miserably too. At this point, I felt unbelievable that I am able to make progress prior to this with the `ethers` library.

## Solution/Workaround

Finally after hours of research, I've found one [GitHub Issue](https://github.com/evanw/esbuild/issues/587) on esbuild that is able to resolve the issue. I would like to thank @aabounegm for his [comment](https://github.com/evanw/esbuild/issues/587#issuecomment-901211830) on the issue because it successfully relieved me from despair. All I did is to tweak the import statement of `ethers`. To be frank, I've never seen such import statement before, but it is valid!

```diff
- import { ethers } from "ethers"
+ import ethers = require("ethers")

console.log(ethers) // Works
```

Now, I am able to see the long disappeared homepage of my app again with EthersJS working fine with the Metamask wallet and I am overjoyed.

<v-img src="cannot-set-property-of-object/app-homepage.png" alt="App homepage"></v-img>

## Lessons Learned

Pertaining to the workaround, the esbuild founder Evan Wallace (@evanw) has an explanation to that. Here is the [direct quote](https://github.com/evanw/esbuild/issues/587#issuecomment-901397213) from him:

> This happens because ES module `import` statements result in an object with immutable properties while CommonJS `require` calls result in an object with mutable properties (for the reasons already described above).

During the debugging and research, albeit pestered by the error, I came to appreciate the JavaScript bundler like esbuild as they are the ones that does the dirty job for us by merging codes from thousands of 3rd party dependencies seamlessly. Kudos to Evan Wallace for such a marvelous feat.

[![esbuild Star History Chart](https://api.star-history.com/svg?repos=evanw/esbuild&type=Date)](https://star-history.com/#evanw/esbuild&Date)

Also, I will not try to code an entire production-ready apps without committing to source control ever again.
