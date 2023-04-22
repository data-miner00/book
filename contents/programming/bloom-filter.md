---
title: Bloom Filter
subtitle: A brief introduction on Bloom Filter
topic: Programming
displayTopic: Programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - data structure
  - notes
directory: programming
updatedAt: 2023-03-22T12:58:10.024Z
createdAt: 2023-03-22T12:58:10.024Z
---

Bloom Filter is a data structure that allows rapid lookup on an element, say a string whether it is present in a set. It is a **bit vector** that contains an array of zeros and ones (booleans) with a fixed length. It is known for it's space and time efficiency.

It is probabilistic in nature that is useful for lookup on **non-critical data**, such as caching search keywords and detecting weak passwords. Upon querying, bloom filter will only return one of the two responses - "maybe" or "no".

If the answer is "maybe", there is a high possibility that the data is indeed there, based on the allowed false positive rate configured. If the answer is "no", then the data is definitely absent in the set. In other words, Bloom filter can have a _low_ chance of getting a False positive (Type I Error) but _never_ a False negative.

Here is a simple bloom filter of size 10 for demo.

<v-img src="bloom-filter/bloom-filter.png" alt="A simple bloom filter with 10 bits"></v-img>

## How it works

To add an item in the Bloom filter, it takes the input and hashed it with a few hash functions to get multiple hash digests. Subsequently, the results are used to determine the position of the bits to be flipped.

<v-img src="bloom-filter/insertion.png" alt="Insertion operation of a string"></v-img>

Here, we take the string `"hello, world"` and hash it with 3 different, independent hash functions and flip the bits accordingly.

After that, when a query tries to lookup for the same value, the hash produced will be the same and the results will points to the same bits that is already flipped, indicating the item exist, ideally.

Let's try to query for the string `"hi, mum"` and observe the behaviour.

<v-img src="bloom-filter/query-not-found.png" alt="Query not found in set"></v-img>

Base on the results, only `Hash1` got a match whereas both `Hash2` and `Hash3` did not. Hence, we can deduce that `"hi, mum"` definitely does not exist.

## Collision

As the number of items in the bloom filter increases, more bits are bring flipped and collision are bound to happen. Given a non-existing input, all of the hash functions may have their results point to the already flipped bit, hence yielding a false positive result and this is the reason bloom filter is considered as a probabilistic data structure.

<v-img src="bloom-filter/query-collision.png" alt="A query that is collided"></v-img>

The hashes for the string `"hi, dad"` coincidentally falls to the flipped bits by `"hello, world"` earlier and this shows how a false positive can be manifested.

The good news is, with proper tuning of the parameters, we can minimize the rate of false positivity to the threshold that is low enough to be acceptable for our use case.

## Parameters

Here are the parameters that can be controlled.

|     | Parameter                            | Description                        |
| --- | ------------------------------------ | ---------------------------------- |
| 1.  | Bit array, $m$                       | The size of the bloom filter       |
| 2.  | Hash function, $k$                   | The number of hash function used   |
| 3.  | Items in filter, $n$                 | Total amount of items inserted     |
| 4.  | False positive probability, $P_{fp}$ | The rate of getting false positive |

The relationships between the parameters can be represented by the formula as follows.

$$
P_{fp} \approx \big(1-e^{-\frac{kn}{m}}\big)^k
$$

As the probability of false positive is directly proportional to the number of items inserted, we would like to fix $n$ to be the maximum amount of items that we want to insert instead. This way, we can achieve a fixed maximum $P_{fp}$ and whats left to determine is the size of the bit array, $m$.

$$
m = - \frac{n \ln P_{fp}}{(\ln 2)^2}
$$

The number of hash function, $k$ can either be set arbitrary or by calculation.

$$
k = \frac{m \ln 2}{n}
$$

However, do be mindful that the number of hash functions used does not correspond to the efficiency of the bloom filter as it will occupy more bits when inserting an element that might cause collision. In fact, the more hash functions used, the slower it is for the operation to execute.

## Sample Implementation

This is a simple implementation in JavaScript. For Python's implementation, refer to [Brilliant.org](https://brilliant.org/wiki/bloom-filter/).

```js
var crypto = require('crypto')

class BloomFilter {
  #size
  #sliceStart
  #sliceEnd
  #array
  #itemCount = 0

  get itemsAdded() {
    return this.#itemCount
  }

  constructor(size = 50, sliceStart = 0, sliceEnd = 4) {
    this.#size = size
    this.#sliceStart = sliceStart
    this.#sliceEnd = sliceEnd
    this.#array = new Array(size)
  }

  insert(string) {
    var [hash1, hash2, hash3, hash4] = this.#getHashes(string)

    this.#array[
      Number('0x' + hash1.slice(this.#sliceStart, this.#sliceEnd)) % this.#size
    ] = 1
    this.#array[
      Number('0x' + hash2.slice(this.#sliceStart, this.#sliceEnd)) % this.#size
    ] = 1
    this.#array[
      Number('0x' + hash3.slice(this.#sliceStart, this.#sliceEnd)) % this.#size
    ] = 1
    this.#array[
      Number('0x' + hash4.slice(this.#sliceStart, this.#sliceEnd)) % this.#size
    ] = 1
    this.#itemCount++
  }

  find(string) {
    var [hash1, hash2, hash3, hash4] = this.#getHashes(string)

    return !!(
      this.#array[
        Number('0x' + hash1.slice(this.#sliceStart, this.#sliceEnd)) %
          this.#size
      ] &&
      this.#array[
        Number('0x' + hash2.slice(this.#sliceStart, this.#sliceEnd)) %
          this.#size
      ] &&
      this.#array[
        Number('0x' + hash3.slice(this.#sliceStart, this.#sliceEnd)) %
          this.#size
      ] &&
      this.#array[
        Number('0x' + hash4.slice(this.#sliceStart, this.#sliceEnd)) %
          this.#size
      ]
    )
  }

  showState() {
    console.log('State are as follows: ', this.#array)
  }

  #getHashes(str) {
    var hash1 = crypto.createHash('sha1').update(str).digest('hex')
    var hash2 = crypto.createHash('sha256').update(str).digest('hex')
    var hash3 = crypto.createHash('mdc2').update(str).digest('hex')
    var hash4 = crypto.createHash('sha384').update(str).digest('hex')

    return [hash1, hash2, hash3, hash4]
  }
}
```

Strings can be inserted via the `insert` method, `find` for the lookup operation that returns a boolean value and the `showState` method shows the current state of the bit array. The `#itemCount` keep tracks of how many elements has been inserted since its instantiation.

The `#sliceStart` and `#sliceEnd` does not have anything to do with Bloom Filter. It's just a way I use to intepret the hashes and convert them into bit array positions.

## Closing Remark

Bloom Filter is a powerful data structure that can be used in situations when false positive can be tolerated.
By tolerating the slim chance of collision, we are rewarded with an incredibly memory efficient data structure with miniscule size.

## Reference

- [Bloom filter 布隆过滤器到底怎么用？适合什么样的场景？五分钟吃透这个神奇的数据结构！](https://www.youtube.com/watch?v=7eez8fG_ueg)
- [Bloom Filters | Algorithms You Should Know #2 | Real-world Examples](https://www.youtube.com/watch?v=V3pzxngeLqw)
- [Bloom Filter | Brilliant.org](https://brilliant.org/wiki/bloom-filter/)
- [Bloom Filters by Example](https://llimllib.github.io/bloomfilter-tutorial/)
- [Bloom Filter Calculator](https://hur.st/bloomfilter/?n=25000&p=0.01&m=&k=4)
- [Applications for Bloom Filter](https://iq.opengenus.org/applications-of-bloom-filter/)
- [Bloom Filter | Wikipedia](https://en.wikipedia.org/wiki/Bloom_filter)
- [Bloom Filter Data Structure: Implementation and Application](https://www.enjoyalgorithms.com/blog/bloom-filter)
