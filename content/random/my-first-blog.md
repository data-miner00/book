---
title: My first Blog Post
subtitle: Illustrations of component used in this site by Tailwind CSS
topic: Random
displayTopic: Random
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - markdown
  - example
  - experimental
directory: random
updatedAt: 2021-10-20T13:33:30.485Z
createdAt: 2021-10-13T13:33:30.485Z
---

This is a _dummy article_ in which I am using for testing out new functionalities, please kindly ignore this page. **Thanks**.

## Opening

This is some more info Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, illo asperiores, ipsa hic optio vitae architecto odio mollitia quia tempore dolores officia nam id molestiae cupiditate officiis iste at vero?

### Abstract

This ~is some~ more info [hello](http://somelink.com). 内容あんま読んでないから自信ないけど

### Preview

This is some more info `Some(_)` is cool as well

## Chapter 2

<v-img src="deserted-place.jpg" alt="deserted place" caption="Pic 1: This is a humble caption"></v-img>

This is some more info
**Hello** _world_ **hahaha**

> This is cool

```rust{1-2,8}[lib.rs]
#[pallet::config]
pub trait Config: frame_system::Config {
    type Event: From<Event<Self>> + IsType<<Self as frame_system::Config>::Event>;
    type MaxBytesInHash: Get<u32>;
}

#[pallet::event]
#[pallet::generate_deposit(pub(super) fn deposit_event)]
pub enum Event<T: Config> {
    ClaimCreated(T::AccountId, BoundedVec<u8, T::MaxBytesInHash>),
    ClaimRevoked(T::AccountId, BoundedVec<u8, T::MaxBytesInHash>),
}
```

## Chapter 3

- item 1
- item 2
  - item 2.1
  - item 2.2
- item 3

Here's a simple footnote,[^1] and here's a longer one.[^bignote]

[^1]: This is the first footnote.
[^bignote]: Here's one with multiple paragraphs and code.

    Indent paragraphs to include them in the footnote.

    `{ my code }`

    Add as many paragraphs as you like.

```cs
using System.Collections.Generic;

namespace MainProj
{
    class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Hello");
        }
    }
}
```
