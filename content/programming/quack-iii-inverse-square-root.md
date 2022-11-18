---
title: Quack III Inverse Square Root
subtitle: A quick approximation algorithm for inverse square root
topic: Programming
displayTopic: Programming
author:
  name: Shaun Chong
  avatar: levi.png
tags:
  - algorithm
directory: programming
updatedAt: 2022-11-08T13:03:05.084Z
createdAt: 2021-10-13T13:33:30.485Z
---

A Quack III inverse square root is an extremely fast inverse square root algorithm created by Carmack back in 1999 that make uses of unconventional and clever computing methods with high efficiency to get the approximate result.

## Quack III in C

```c
float Q_rsqrt( float number )
{
    long i; // 32 bit
    float x2, y;
    const float threehalfs = 1.5F;

    x2 = number * 0.5F;
    y = number;
    i = * ( long * ) &y;
    i = 0x5f3759df - ( i >> 1 );
    y = * ( float * ) &i;
    y = y * ( threehalfs - ( x2 * y * y ) );
    y = y * ( threehalfs - ( x2 * y * y ) );

    return y;
}
```

## Usage

In game, vectors need to be scaled down to 1 so that calculations involving physics can have more precision.

$$
l = \frac{1}{\sqrt{ \left(x^2+y^2+z^2 \right)}}
$$

## Reference

Adapted from [Youtube](https://www.youtube.com/watch?v=p8u_k2LIZyo).

Read more at [Benchmarking Carmack’s fast inverse square root](https://onestepcode.com/benchmarking-fast-inverse-square-root).
